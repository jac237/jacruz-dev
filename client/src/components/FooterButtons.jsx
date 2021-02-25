import React, { useState } from 'react';
import { Button, Drawer, Row, Col } from 'antd';
import { CrownFilled } from '@ant-design/icons';
import Comments from './Comments';

const classes = {
  root: {
    padding: 20,
  },
  drawer: {
    padding: 0,
  },
  commentButton: {
    fontFamily: 'system-ui',
    fontWeight: 600,
  },
  commentIcon: {
    color: 'gold',
    fontSize: 20,
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
            icon={<CrownFilled style={classes.commentIcon} />}
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
