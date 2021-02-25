import React from 'react';
import { Space, Typography } from 'antd';
import { GithubOutlined, LinkedinFilled } from '@ant-design/icons';
import { LinktreeIcon } from './icons';

const { Link } = Typography;
const classes = {
  root: {
    padding: '0px 20px',
  },
  link: {
    display: 'inline-block',
  },
  space: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};
const props = {
  size: 35,
  soloSize: 50,
};

const ContactButtons = () => {
  return (
    <div style={classes.root}>
      <Space size="large" style={classes.space}>
        <Link
          style={classes.link}
          href="https://github.com/jac237"
          target="_blank"
        >
          <GithubOutlined
            style={{
              color: 'black',
              fontSize: props.size,
            }}
          />
        </Link>
        <Link
          style={classes.link}
          href="https://linkedin.com/in/jessieacruz"
          target="_blank"
        >
          <LinkedinFilled
            style={{
              color: '#2867B2',
              fontSize: props.size,
            }}
          />
        </Link>
        <Link
          style={classes.link}
          href="https://linktr.ee/jacruz"
          target="_blank"
        >
          <LinktreeIcon />
        </Link>
        <Link
          style={classes.link}
          href="https://solo.to/jacruz"
          target="_blank"
        >
          <img
            src="https://cdx.solo.to/images/logo/solo-icon.svg"
            height={props.soloSize}
            width={props.soloSize}
          />
        </Link>
      </Space>
    </div>
  );
};

export default ContactButtons;
