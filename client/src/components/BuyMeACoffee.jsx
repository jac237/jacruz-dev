import React from 'react';
import { Button } from 'antd';
import { RestOutlined, HeartFilled } from '@ant-design/icons';

const classes = {
  root: {
    fontFamily: 'Brush Script MT, Brush Script Std, cursive',
    background: 'black',
    textAlign: 'center',
    padding: '50px 0px',
  },
  button: {
    height: 60,
    fontSize: 30,
    fontWeight: 'bold',
    background: '#ffdd00',
    borderColor: '#ffdd00',
    paddingTop: 10,
  },
  coffeeIcon: {
    fontSize: 30,
    background: 'white',
    borderRadius: '90% 90%',
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
        icon={<RestOutlined style={classes.coffeeIcon} />}
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
