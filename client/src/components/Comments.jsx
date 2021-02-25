import React, { useState, useEffect } from 'react';
import {
  Modal,
  Button,
  Comment,
  List,
  Avatar,
  Space,
  Input,
  message,
} from 'antd';
import {
  HeartOutlined,
  HeartFilled,
  MessageOutlined,
  CheckCircleFilled,
  SendOutlined,
} from '@ant-design/icons';
import moment from 'moment';
import * as API from '../API';
import GoogleLogin from './GoogleLogin';

const { Search } = Input;

const classes = {
  root: {
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
  },
  search: {
    padding: '10px 0px 5px 0px',
  },
  badge: {
    color: '#3897f0',
  },
  likeButton: {
    color: '#c92b0c',
  },
  submitButton: {
    float: 'right',
  },
};

const LikeButton = ({ comment }) => {
  const [numLikes, setNumLikes] = useState(comment.likes);
  const [isLiked, setIsLiked] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const onSubmitLike = async (userLike) => {
    try {
      const response = await API.likeComment(userLike);
      console.log(response);

      if (response.success) {
        setIsLiked(response.liked);
        setNumLikes(response.likes);
      } else {
        console.log(response.message);
        message.warning(response.message);
        setIsLiked(false);
      }
      hideModal();
    } catch (error) {
      console.log('LikeButton: Something went wrong...');
      message.error('LikeButton: Something went wrong...');
    }
  };

  return (
    <>
      <Space size={0} style={{ paddingRight: 10 }}>
        <Button
          type="text"
          onClick={showModal}
          icon={
            isLiked ? (
              <HeartFilled style={classes.likeButton} />
            ) : (
              <HeartOutlined />
            )
          }
        />
        {numLikes != '0' && numLikes}
      </Space>
      <Modal
        title={null}
        footer={null}
        visible={isModalVisible}
        onCancel={hideModal}
      >
        <GoogleLogin
          comment={comment}
          onSubmitLike={onSubmitLike}
          isLiked={isLiked}
        />
      </Modal>
    </>
  );
};

// TODO: Implement reply comment input
const CommentButton = ({ comment, setReloadComments }) => {
  const text = comment.replies.length;
  const [showInput, setShowInput] = useState(false);

  const handleClick = () => {
    console.log('CommentButton clicked:', comment.comment_id);
    // TODO: Add comment to replies of the comment in mongodb
    try {
      setShowInput(true);
    } catch (error) {
      console.log('CommentButton: Something went wrong...');
      setShowInput(true);
    }
  };

  return (
    <Space size={0}>
      <Button
        type="text"
        disabled
        onClick={handleClick}
        icon={<MessageOutlined />}
      />
      {text != '0' && text}
    </Space>
  );
  j;
};

const CommentInput = ({ setReloadComments }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [commentInput, setCommentInput] = useState('');

  const onChange = (e) => {
    const { value } = e.target;
    if (!searchLoading) {
      setCommentInput(value);
    }
  };

  const onSearch = () => {
    if (commentInput) {
      showModal();
    }
  };

  const showModal = () => {
    setSearchLoading(true);
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false); // Reset button loading
    setSearchLoading(false); // Reset modal visibility
  };

  const onSubmitComment = async (newComment) => {
    try {
      const response = await API.addComment(newComment);
      setReloadComments(true);
      console.log(response);
    } catch (error) {
      console.log('addComment(): Something went wrong...');
    }
    hideModal(); // Reset modal visibility
    setCommentInput(''); // Reset comment input
  };

  return (
    <>
      <Search
        placeholder="Share your thoughts..."
        value={commentInput}
        onChange={onChange}
        onSearch={onSearch}
        enterButton={<SendOutlined />}
        loading={searchLoading}
        style={classes.search}
      />
      <Modal
        title={null}
        footer={null}
        visible={isModalVisible}
        onCancel={hideModal}
      >
        <GoogleLogin
          commentInput={commentInput}
          onSubmitComment={onSubmitComment}
        />
      </Modal>
    </>
  );
};

const Comments = () => {
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [reloadComments, setReloadComments] = useState(true);

  useEffect(() => {
    const getComments = async () => {
      try {
        console.log('Fetching comments...');
        const commentEntries = await API.getAllComments();
        setComments(commentEntries);
        console.log('Done.');
      } catch (error) {
        console.log('Unable to fetch comments, check connection.');
        setComments([]);
      }
      setLoading(false);
    };

    if (reloadComments) {
      getComments();
      setReloadComments(false);
    }
  }, [reloadComments]);

  return (
    <div style={classes.root}>
      <div style={classes.title}>Responses ({comments.length})</div>
      <CommentInput setReloadComments={setReloadComments} />
      <List
        itemLayout="vertical"
        loading={loading}
        dataSource={comments}
        renderItem={(comment) => (
          <List.Item key={comment.comment_id}>
            <Comment
              author={
                <div>
                  <a style={classes.title}>{comment.name}</a>{' '}
                  {comment.verified && (
                    <CheckCircleFilled style={classes.badge} />
                  )}
                </div>
              }
              avatar={<Avatar src={comment.imageUrl} alt="Profile Photo" />}
              actions={[
                <LikeButton
                  comment={comment}
                  setReloadComments={setReloadComments}
                />,
                <CommentButton
                  comment={comment}
                  setReloadComments={setReloadComments}
                />,
              ]}
              content={<p>{comment.comment}</p>}
              datetime={<div>{moment(comment.created_at).fromNow()}</div>}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Comments;
