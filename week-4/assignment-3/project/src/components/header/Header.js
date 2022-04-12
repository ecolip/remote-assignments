/* eslint-disable jsx-a11y/anchor-is-valid*/ //disable the a taq to be a valid anchor tag
import React, { useState } from "react";
import navIcon from "../../imgs/nav.png";
import deleteIcon from "../../imgs/delete.png";
import './Header.css';

function Header() {
  const [hide, setHide] = useState(true);

  const openNav = () => {
    setHide(false);
  }

  const closeNav = () => {
    setHide(true);
  }

  return (
    <header>
      <div className="container-header">
        <div className="logo">website title / logo</div>
        <nav className="small-device" onClick={() => { openNav() }}>
          <img src={navIcon} alt="navigation" />
        </nav>
        <nav className="big-device">
          <ul>
            <li><a href="">item 1</a></li>
            <li><a href="">item 2</a></li>
            <li><a href="">item 3</a></li>
            <li><a href="">item 4</a></li>
          </ul>
        </nav>
      </div>
      <nav className={hide ? "nav-bar hide" : "nav-bar"}>
        <ul>
          <li><a href="">item 1</a></li>
          <li><a href="">item 2</a></li>
          <li><a href="">item 3</a></li>
          <li><a href="">item 4</a></li>
        </ul>
        <div className="close" onClick={() => { closeNav() }}>
          <img src={deleteIcon} alt="recover" />
        </div>
      </nav>
    </header>
  )
}

export default Header;