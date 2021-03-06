require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { nanoid } = require('nanoid');
const verifiedId = process.env.VERIFIED_ID;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch((error) => {
    console.log(error.message);
  });

const whitelist = [
  'http://localhost:3000',
  'https://react-9wmk5k.stackblitz.io',
  'https://jacruz.vercel.app',
  'https://jacruz.dev',
];
const corsOptions = {
  origin: function (origin, callback) {
    console.log(origin);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true); // allow origin
    } else {
      callback(new Error(`Origin ${origin} not allowed by CORS`));
    }
  },
  preflightContinue: true,
  optionsSuccessStatus: 204,
};
const app = express();

app.use(cors(corsOptions));
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to JacruzDev!',
  });
});

app.post('/api/log/error', (req, res) => {
  return console.log(req.body);
});

app.get('/api/featured', (req, res) => {
  res.json({
    id: '145749',
    ownerId: '48475',
  });
});

const Comment = require('./models/Comment');

// READ
app.get('/api/comments/all', (req, res) => {
  Comment.find({}, (err, comments) => {
    if (err) return console.log(err);
    res.json(comments);
  });
});

// CREATE
app.post('/api/comments/add', (req, res) => {
  const user = req.body;

  if (!user.googleId) {
    return res.status(400).json({
      message: 'Google login required.',
    });
  }

  const id = nanoid(5);
  const comment = new Comment({
    googleId: user.googleId,
    comment_id: id,
    name: user.name,
    email: user.email,
    imageUrl: user.imageUrl,
    comment: user.comment,
    verified: user.googleId === verifiedId,
  });

  comment.save((err, newComment) => {
    if (err) {
      return console.error(err.message);
    }

    console.log(newComment);
    return res.json({
      created_at: newComment.created_at,
      comment_id: newComment.comment_id,
      name: newComment.name,
      email: newComment.email,
      imageUrl: newComment.imageUrl,
      comment: newComment.comment,
      verified: newComment.verified,
      likes: newComment.likes,
      replies: newComment.replies,
    });
  });
});

// UPDATE
app.put('/api/comments/like', (req, res) => {
  const user = req.body;

  // Find the comment to modify
  Comment.findOne({ comment_id: user.comment_id }, (err, comment) => {
    if (!user.comment_id) {
      return res.status(400).json({
        message: 'Comment ID required.',
      });
    }

    const userExists = comment.liked_by.includes(user.googleId);

    if (user.intent === 'Like') {
      if (!userExists) {
        comment.likes = comment.likes + 1;
        comment.liked_by = [...comment.liked_by, user.googleId];

        comment.save((err, updatedComment) => {
          if (err) {
            return res.status(500).json({
              message: err.message,
              success: false,
            });
          }

          console.log(updatedComment);
          return res.json({
            liked: true,
            likes: updatedComment.likes,
            success: true,
          });
        });
      } else {
        return res.json({
          message: 'Already liked comment.',
          success: false,
        });
      }
    } else {
      if (userExists) {
        comment.likes = Math.max(0, comment.likes - 1);
        comment.liked_by = comment.liked_by.filter(
          (id) => id !== user.googleId
        );

        comment.save((err, updatedComment) => {
          if (err) {
            return res.status(500).json({
              message: err.message,
              success: false,
            });
          }

          console.log(updatedComment);
          return res.json({
            liked: false,
            likes: updatedComment.likes,
            success: true,
          });
        });
      } else {
        return res.status(500).json({
          message: 'Error: User never liked this comment.',
          success: false,
        });
      }
    }
  });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
