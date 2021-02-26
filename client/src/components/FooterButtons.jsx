import React, { useState } from 'react';
import { Button, Drawer, Row, Col } from 'antd';
import { EditFilled } from '@ant-design/icons';
import Comments from './Comments';

const classes = {
  root: {
    padding: 40,
  },
  drawer: {
    padding: 0,
  },
  commentButton: {
    fontFamily: 'Arial',
    fontSize: 16,
    fontWeight: 600,
    padding: "0px 20px"
  },
  commentIcon: {
    color: 'gold',
    fontSize: 18,
  },
};

const FooterButtons = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div style={classes.root}>
      <Row align="center">
        <Col>
          <Button
            type="primary"
            size="large"
            icon={<EditFilled style={classes.commentIcon} />}
            onClick={showDrawer}
            style={classes.commentButton}
          >
            Leave a comment!
          </Button>
          <Drawer
            placement="right"
            width={350}
            closable={true}
            visible={visible}
            onClose={onClose}
            style={classes.drawer}
          >
            <Comments />
          </Drawer>
        </Col>
      </Row>
    </div>
  );
};

export default FooterButtons;
