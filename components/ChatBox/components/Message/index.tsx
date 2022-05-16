import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
  /* background: #929292; */
`;
const Message:React.FC = ({ user, message, classs }: any) => {
  if (user) {
    return (
      <MessageContainer className="MessageContainer">
        <div className={`MessageContainer__message--${classs}`}>
          <span className="MessageContainer__message--user">{user}</span>
          <br />

          <span className="poppins_regular_400">{message}</span>
        </div>
      </MessageContainer>
    );
  }
  return (
    <MessageContainer className="MessageContainer">
      <div className={`MessageContainer__message--${classs}`}>
        <span className="MessageContainer__message--user">{user}</span>
        <br />

        <span className="poppins_regular_400">{message}</span>
      </div>
    </MessageContainer>
  );
};

export default Message;
