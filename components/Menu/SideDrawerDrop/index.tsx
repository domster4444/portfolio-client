import React from 'react';
import { Link } from 'react-router-dom';

const DropDown = ({ opened }: any) => {
  return (
    <div id="DropDownSection">
      <div
        style={
          opened === true
            ? { fontSize: '2.25rem', transition: 'all ease-in-out 200ms' }
            : {
                fontSize: '1.5rem',
              }
        }
      >
        Setup Details
      </div>

      {(() => {
        if (opened === true) {
          return (
            <ul>
              <Link to="/bio">
                <li>Bio</li>
              </Link>
              <Link to="/contacts">
                <li>Contacts</li>
              </Link>
              <Link to="/education">
                <li>Education</li>
              </Link>
              <Link to="/work">
                <li>Work</li>
              </Link>
              <Link to="/skills">
                <li>Skills</li>
              </Link>
              <Link to="/projects">
                <li>Projects</li>
              </Link>
              <Link to="/achievements">
                <li>Achievements</li>
              </Link>
            </ul>
          );
        }
        return null;
      })()}
    </div>
  );
};

export default DropDown;
