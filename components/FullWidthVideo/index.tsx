import React from 'react';
import ReactPlayer from 'react-player';

const PlayerWrapper = {
  position: 'relative',
  paddingTop: '56.25%' /* Player ratio: 100 / (1280 / 720) */,
};

const ReactPlayerItem = {
  position: 'absolute',
  top: '0',
  left: '0',
  maxHeight: '75vh',
};

const FullWidthVideo = () => {
  return (
    // @ts-ignore
    <div style={PlayerWrapper}>
      <ReactPlayer
        // @ts-ignore
        style={ReactPlayerItem}
        url="https://www.youtube.com/watch?v=MUddtVKe3qQ"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default FullWidthVideo;
