import React, { useState } from 'react';
import { Button, Comment, Avatar, Divider } from 'antd';
import moment from 'moment';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const classes = {
  root: {
    fontFamily: 'system-ui',
    minHeight: 100,
  },
  center: {
    width: 250,
    margin: '0px auto',
    textAlign: 'center',
  },
  comment: {
    padding: 10,
    border: '1px solid lightgray',
    marginBottom: 20,
  },
  content: {
    textAlign: 'left',
    wordWrap: 'break-word',
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
  },
  submitButton: {
    fontWeight: 'bold',
    background: 'green',
    borderColor: 'green',
  },
  likeButton: {
    fontWeight: 'bold',
    background: '#FF0000',
    borderColor: '#FF0000',
  },
  divider: {
    color: 'gray',
    fontWeight: 400,
    margin: '5px 0px',
  },
};

const Login = ({
  commentInput,
  onSubmitComment,
  comment,
  onSubmitLike,
  isLiked,
}) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState({});
  const [buttonLoading, setButtonLoading] = useState(false);

  const onLoginSuccess = (response) => {
    console.log('Login was successful!');
    const profile = response.profileObj;
    const user = {
      name: `${profile.givenName} ${profile.familyName}`,
      email: profile.email,
      googleId: profile.googleId,
      imageUrl: profile.imageUrl,
    };
    setUser(user);
    setIsSignedIn(true);
  };

  const onLoginFailure = (response) => {
    console.log('Login was unsuccessful!');
    console.log(response);
    setIsSignedIn(false);
  };

  const onLogoutSuccess = () => {
    console.log('Logout was successful!');
    setIsSignedIn(false);
    setUser({});
  };

  const onLogoutFailure = () => {
    console.log('Logout was unsuccessful!');
    setIsSignedIn(false);
  };

  const handleSubmitComment = () => {
    const newComment = {
      ...user,
      comment: commentInput,
    };
    onSubmitComment(newComment, setButtonLoading);
  };

  const handleSubmitLike = () => {
    const userLike = {
      ...user,
      comment_id: comment.comment_id,
      intent: isLiked ? 'Unlike' : 'Like',
    };
    onSubmitLike(userLike, setButtonLoading);
  };

  return (
    <div style={classes.root}>
      {!isSignedIn && (
        <div style={classes.center}>
          <div>
            {commentInput ? (
              <h2 style={classes.title}>Please log in to comment</h2>
            ) : (
              <h2 style={classes.title}>Please log in to like comment</h2>
            )}
          </div>
          <GoogleLogin
            clientId="22533463853-6ut27qccav761b2j9u8sqsqqjveecsme.apps.googleusercontent.com"
            buttonText="Login with Google"
            theme="dark"
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            onSuccess={onLoginSuccess}
            onFailure={onLoginFailure}
          />
        </div>
      )}
      {isSignedIn && (
        <div style={classes.center}>
          <div>
            <h2 style={classes.title}>Preview Comment</h2>
          </div>
          {commentInput ? (
            <Comment
              author={<a style={classes.title}>{user.name}</a>}
              avatar={<Avatar src={user.imageUrl} alt={user.name} />}
              content={<p style={classes.content}>{commentInput}</p>}
              datetime={<span>{moment().fromNow()}</span>}
              style={classes.comment}
            />
          ) : (
            <Comment
              author={<a style={classes.title}>{comment.name}</a>}
              avatar={<Avatar src={comment.imageUrl} alt={comment.name} />}
              content={<p style={classes.content}>{comment.comment}</p>}
              datetime={<span>{moment(comment.created_at).fromNow()}</span>}
              style={classes.comment}
            />
          )}
          <div>
            {commentInput ? (
              <Button
                block
                type="primary"
                size="large"
                loading={buttonLoading}
                onClick={handleSubmitComment}
                style={classes.submitButton}
              >
                Submit
              </Button>
            ) : (
              <Button
                block
                type="primary"
                size="large"
                loading={buttonLoading}
                onClick={handleSubmitLike}
                style={classes.likeButton}
              >
                {isLiked ? 'Unlike' : 'Like'} comment
              </Button>
            )}
          </div>
          <Divider style={classes.divider}>or</Divider>
          <GoogleLogout
            clientId="22533463853-6ut27qccav761b2j9u8sqsqqjveecsme.apps.googleusercontent.com"
            buttonText="Logout of Google"
            onLogoutSuccess={onLogoutSuccess}
            onFailure={onLogoutFailure}
          />
        </div>
      )}
    </div>
  );
};

export default Login;
