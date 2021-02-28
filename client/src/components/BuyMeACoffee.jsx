import React from 'react';
import { Button } from 'antd';
import { RestOutlined, HeartFilled } from '@ant-design/icons';

const classes = {
  root: {
    fontFamily: '"Satisfy", cursive',
    background: 'black',
    textAlign: 'center',
    padding: '50px 0px',
  },
  button: {
    height: 50,
    fontSize: 20,
    fontWeight: 'bold',
    background: '#ffdd00',
    borderColor: '#ffdd00',
    paddingTop: 5,
  },
  heartIcon: {
    fontSize: 20,
    color: '#ff4f2c',
  },
};

const BuyMeACoffee = () => {
  return (
    <div style={classes.root}>
      <Button
        id="coffee-button"
        size="large"
        style={classes.button}
        href="https://www.buymeacoffee.com/jcruz"
        target="_blank"
      >
        Buy me a coffee{' '}
        <HeartFilled className="coffee-heart" style={classes.heartIcon} />
      </Button>
    </div>
  );
};

export default BuyMeACoffee;
