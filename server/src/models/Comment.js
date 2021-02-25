const { model, Schema } = require('mongoose');

const commentSchema = new Schema({
  comment_id: String,
  created_at: { type: Date, default: Date.now },
  name: { type: String, required: true },
  email: { type: String, required: true },
  googleId: {type: String, required: true },
  imageUrl: {type: String, required: true },
  comment: { type: String, required: true },
  verified: { type: Boolean, default: false },
  likes: { type: Number, default: 0 },
  liked_by: [String],
  replies: [{
    created_at: { type: Date, default: Date.now },
    name: { type: String, required: true },
    email: { type: String, required: true },
    googleId: {type: String, required: true },
    comment: { type: String, required: true },
    likes: { type: Number, default: 0 },
  }],
});

module.exports = model('Comment', commentSchema);
