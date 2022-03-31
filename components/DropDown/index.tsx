import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { CSSTransition } from 'react-transition-group';
import DropDownBtn from 'components/Navbar/components/Dropdown';
import { toast } from 'react-toastify';
const index = () => {
  return (
    <span className="dropDownContainer">
      <span className="dropDownI">
        <span className="wrapper">
          <span className="jumbotron">
            {/* <!-- Dropdown --> */}
            <label className="drop">
              <input type="checkbox" id="target-drop-example" />
              {/* <!-- Toggle Drop --> */}

              <NavItem />

              {/* <!-- Fake button --> */}

              {/* <!-- Items --> */}
              <ul className="drop-items">
                <Link passHref href="/api/auth/login">
                  <li className="item-drop">
                    <a
                      target="_blank"
                      href="https://codepen.io/robsonklein23"
                      rel="noreferrer"
                    >
                      Login or Register
                    </a>
                  </li>
                </Link>

                <Link passHref href="/home">
                  <li className="item-drop">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.behance.net/robsonklein"
                    >
                      Home
                    </a>
                  </li>
                </Link>
                <Link passHref href="/about">
                  <li className="item-drop">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/robsonklein/"
                    >
                      About
                    </a>
                  </li>
                </Link>
                <Link passHref href="/contact">
                  <li className="item-drop">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/robsonklein/"
                    >
                      Contact Us
                    </a>
                  </li>
                </Link>
                <Link passHref href="/pricing">
                  <li className="item-drop">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/robsonklein/"
                    >
                      Pricing
                    </a>
                  </li>
                </Link>

                <Link passHref href="/blog">
                  <li className="item-drop">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/robsonklein/"
                    >
                      Blog
                    </a>
                  </li>
                </Link>
              </ul>

              {/* <!-- Alternative to close dropdown with click out --> */}
              <label
                htmlFor="target-drop-example"
                className="overlay-close"
              ></label>
            </label>
            {/* <!-- END -- Dropdown --> */}
          </span>
        </span>
      </span>

      {/* <DropdownMenu></DropdownMenu> */}
      {/* </NavItem> */}
    </span>
  );
};

function NavItem(props: any) {
  const [open, setOpen] = useState(false);

  return (
    <span className="nav-item" onClick={() => setOpen(!open)}>
      <DropDownBtn />
      {open && props.children}
    </span>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    //   @ts-ignore
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el: any) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }
  //!needed DropdownItem
  function DropdownItem(props: any) {
    return (
      <Link passHref href={`${props.route}`}>
        <div
          //   @ts-ignore
          style={{
            justifyContent: 'center',
            color: 'black',
          }}
          className="menu-item"
          onClick={() => {
            //? if login_or_register uses this components , then  set isLoading to true
            if (props.name === 'login_or_register') {
              toast('Please Wait ...', {
                position: 'top-center',
              });
            }

            return props.goToMenu && setActiveMenu(props.goToMenu);
          }}
        >
          {props.children}
        </div>
      </Link>
    );
  }

  return (
    <div
      className="dropdown"
      style={{ height: 'menuHeight' }}
      ref={dropdownRef}
    >
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem route="/api/auth/login" name="login_or_register">
            Log in or Register
          </DropdownItem>
          <DropdownItem route="/home">Home</DropdownItem>
          <DropdownItem route="/about">About</DropdownItem>
          <DropdownItem route="/contact">Contact Us</DropdownItem>
          <DropdownItem route="/pricing">Pricing</DropdownItem>
          <DropdownItem route="/blog">Blog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default index;
