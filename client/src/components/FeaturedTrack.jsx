import React, { useState, useEffect } from 'react';
import * as API from '../API';

const classes = {
  root: {
    marginBottom: 15,
  },
  iframe: {
    border: 'none',
  },
};

const FeaturedTrack = () => {
  const [track, setTrack] = useState({});
  useEffect(() => {
    (async () => {
      const response = await API.getFeaturedTrack();
      console.log('Featured Track', response);
      setTrack(response);
    })();
  }, []);

  return (
    <div style={classes.root}>
      <iframe
        src={`https://audius.co/embed/track?id=${track.id}&ownerId=${track.ownerId}&flavor=compact`}
        width="100%"
        height="120"
        allow="encrypted-media"
        style={classes.iframe}
      ></iframe>
    </div>
  );
};

export default FeaturedTrack;
