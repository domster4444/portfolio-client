import React from 'react';
import NoticeCard from 'components/NoticeCard/NoticeCard';

const NoticeCardWrapper = () => {
  const [showNotice, setShowNotice] = React.useState<Boolean>(true);

  if (showNotice === false) {
    return <></>;
  }
  return (
    <>
      <div
        style={{
          height: '100vh',
          position: 'absolute',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* @ts-ignore */}
        <NoticeCard setShowNotice={setShowNotice} />
      </div>
    </>
  );
};

export default NoticeCardWrapper;
