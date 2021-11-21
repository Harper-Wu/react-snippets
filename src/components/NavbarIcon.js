import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group'

import { ReactComponent as ArrowIcon } from "../icons/arrow.svg";
import { ReactComponent as BellIcon } from "../icons/bell.svg";
import { ReactComponent as CareIcon } from "../icons/caret.svg";
import { ReactComponent as ChevronIcon } from "../icons/chevron.svg";
import { ReactComponent as CogIcon } from "../icons/cog.svg";
import { ReactComponent as MessengerIcon } from "../icons/messenger.svg";
import { ReactComponent as PlusIcon } from "../icons/plus.svg";

import 'bootstrap/dist/css/bootstrap.css'
// import '../NavBar-Icon.css';

function NavItem(props) {

  const [open, setOpen] = useState(false);

  return (
    <li className="navbar-item">
      {/* <a href="#" className="navbar-button"> */}
      <a href="#" className="icon-button" onClick={() => {setOpen(!open)}}>
        {props.icon}
      </a>
      {/* Short circuit evaluation */}
      {/* (if this part is true) && (this part will excute) */}
      {open && props.children}
    </li>
  )
}

function NavBarIcon() {
  return(
    // <h1>Nav bar</h1>
      <nav className="navbar">
        <ul className="navbar-nav">
          <NavItem icon={<PlusIcon />}/>
          <NavItem icon={<BellIcon />}/>
          <NavItem icon={<MessengerIcon />}/>
          {/* Use NavItem instead of NavIcon directly to serve dropdown menu*/}
          <NavItem icon={<CareIcon />}>
            <DropdownMenu />
          </NavItem>
        </ul>
      </nav>
  );
}

function DropdownMenu() {

  const[activeMenu, setActiveMenu] = useState('main');

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown">
      {/* when in is ture, render children menu */}
      {/* unmountOnExit completely removes children when not active */}
      {/* timeout defines the duration of the animation */}
      {/* CSSTransition: look for the first element, when its prop changes, 
      1. will add/remove CSS classes to this element based on  the state of the animation
      2. uses the class names prop to prefix those classes*/}
      <CSSTransition 
        in={activeMenu === 'main'} 
        unmountOnExit 
        timeout={500}
        className="menu-primary">
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem 
            leftIcon={<CogIcon />} 
            rightIcon={<ChevronIcon />} 
            goToMenu="settings">
              Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition 
        in={activeMenu === 'settings'} 
        unmountOnExit 
        timeout={500}
        className="menu-secondary">
        <div className="menu">
          <DropdownItem leftIcon={<ArrowIcon />} goToMenu="main" />
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  )
}

export default NavBarIcon;