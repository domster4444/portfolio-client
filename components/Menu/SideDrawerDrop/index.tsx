import React from 'react';
import Link from 'next/link';
import { ChevronUpCircle, ChevronDownCircle } from 'react-iconly';
const DropDown = ({ opened }: any) => {
  return (
    <div id="DropDownSection" className="links_name hideName">
      <div className="setupDetails__mainMenu ">
        {opened ? (
          <i className="bx bx-chevron-up" />
        ) : (
          <i className="bx bx-chevron-down" />
        )}
        Setup
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
              <Link passHref href="/dashboard/general">
                <li className="setupDetails__menuItem">General</li>
              </Link>

              <Link passHref href="/dashboard/bio">
                <li className="setupDetails__menuItem">Bio</li>
              </Link>
              <Link passHref href="/dashboard/contacts">
                <li className="setupDetails__menuItem">Contacts</li>
              </Link>
              <Link passHref href="/dashboard/education">
                <li className="setupDetails__menuItem">Education</li>
              </Link>
              <Link passHref href="/dashboard/work">
                <li className="setupDetails__menuItem">Work</li>
              </Link>
              <Link passHref href="/dashboard/skills">
                <li className="setupDetails__menuItem">Skills</li>
              </Link>
              <Link passHref href="/dashboard/projects">
                <li className="setupDetails__menuItem">Projects</li>
              </Link>
              <Link passHref href="/dashboard/achievements">
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
