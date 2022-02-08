import React from 'react';
import Link from 'next/link';
import { ChevronUpCircle, ChevronDownCircle } from 'react-iconly';
const DropDown = ({ opened }: any) => {
  return (
    <div id="DropDownSection" className="links_name hideName">
      <div className="setupDetails__mainMenu ">
        {opened ? (
          <ChevronUpCircle
            // @ts-ignore
            className="sideMenus__icon"
            set="bold"
            primaryColor="#c4c4c4"
          />
        ) : (
          <ChevronDownCircle
            // @ts-ignore
            className="sideMenus__icon"
            set="bold"
            primaryColor="#c4c4c4"
          />
        )}
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
