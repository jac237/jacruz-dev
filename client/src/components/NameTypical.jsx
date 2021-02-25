import React from 'react';
import Typical from 'react-typical';

const classes = {
  root: {
    fontSize: 25,
    color: '#77fc03',
    background: 'black',
    padding: '15px 20px',
    borderRadius: 10,
    marginBottom: 20,
  },
};

const NameTypical = () => {
  return (
    <div style={classes.root}>
      <Typical
        steps={['$ Jessie', 1000, '$ Jessie Cruz', 7000, '$', 2000]}
        loop={Infinity}
        wrapper="div"
      />
      <Typical
        steps={[
          '',
          700,
          'Welcome!!',
          2500,
          '- Aspiring Software Engineer :)',
          2500,
        ]}
        loop={Infinity}
        wrapper="div"
      />
    </div>
  );
};

export default NameTypical;
