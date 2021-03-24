import React from 'react';
import Nav from './Nav';
import Form from '../common/Form';

export default function Header({ setVisibleMobileMenu, visibleMobileMenu }) {

  const activeMenu = () => {
    if (!visibleMobileMenu) {
      setVisibleMobileMenu(true);
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <header className="header" id="header">
      <div className="container">
        <div className="top">
          <a className="logo" href="#">
            courseway
          </a>
          <Nav />
          <div className="burger" onClick={activeMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="info">
          <div className="about">
            <h1 className="title">безкоштовні онлайн-курси</h1>
            <p>від викладачів провідних університетів світу</p>
          </div>
          <Form />
        </div>
      </div>
    </header>
  )
}
