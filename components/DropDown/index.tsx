import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { CSSTransition } from 'react-transition-group';
import DropDownBtn from 'components/Navbar/components/Dropdown';
import { toast } from 'react-toastify';
const index = () => {
  return (
    <span className="dropDownContainer">
      <NavItem>
        <DropdownMenu></DropdownMenu>
      </NavItem>
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
        </div>
      </CSSTransition>
    </div>
  );
}

export default index;
