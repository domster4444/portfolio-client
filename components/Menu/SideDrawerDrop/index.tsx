import React from 'react';
import Link from 'next/link';
const DropDown = ({ opened }: any) => {
  return (
    <div id="DropDownSection">
      <div
      // style={
      //   opened === true
      //     ? { fontSize: '1.25rem', transition: 'all ease-in-out 200ms' }
      //     : {
      //         fontSize: '1.5rem',
      //       }
      // }
      >
        Setup Details
      </div>

      {(() => {
        if (opened === true) {
          return (
            <ul
              className="setupDetails__menuContainer"
              style={
                opened === true
                  ? { background: 'white', borderRadius: '0.25rem' }
                  : {
                      display: 'none',
                    }
              }
            >
              <Link passHref href="/bio">
                <li className="setupDetails__menuItem">Bio</li>
              </Link>
              <Link passHref href="/contacts">
                <li className="setupDetails__menuItem">Contacts</li>
              </Link>
              <Link passHref href="/education">
                <li className="setupDetails__menuItem">Education</li>
              </Link>
              <Link passHref href="/work">
                <li className="setupDetails__menuItem">Work</li>
              </Link>
              <Link passHref href="/skills">
                <li className="setupDetails__menuItem">Skills</li>
              </Link>
              <Link passHref href="/projects">
                <li className="setupDetails__menuItem">Projects</li>
              </Link>
              <Link passHref href="/achievements">
                <li className="setupDetails__menuItem">Achievements</li>
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
