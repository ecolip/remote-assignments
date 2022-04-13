/* eslint-disable jsx-a11y/anchor-is-valid*/ //disable the a taq to be a valid anchor tag
import React, { useState } from "react";
import openIcon from "../../imgs/openNav.png";
import closeIcon from "../../imgs/closeNav.png";
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
          <img src={openIcon} alt="navigation" />
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
          <img src={closeIcon} alt="recover" />
        </div>
      </nav>
    </header>
  )
}

export default Header;