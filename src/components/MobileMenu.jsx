import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';


export default function MobileMenu({ visibleMobileMenu, setVisibleMobileMenu }) {

  const menuRef = useRef();

  const closeMenu = () => {

    setVisibleMobileMenu(false);
    document.body.style.overflow = "visible";

  };

  const handleOutsideClick = (event) => {
    if (event.path.includes(menuRef.current)) {
      closeMenu()
    }
  };


  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  return (
    <div className={classNames("mobile_menu", { "active": visibleMobileMenu })} ref={menuRef}>
      <button className="back" onClick={closeMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="36px" height="36px"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg>
      </button>
      <nav className="nav">
        <ul className="list">
          <li className="item"><a href="#header" className="link" >головна</a></li>
          <li className="item"><a href="#courses" className="link" >курси</a></li>
          <li className="item"><a href="#partners" className="link" >блог</a></li>
          <li className="item"><a href="#developers" className="link" >про проект</a></li>
          <li className="item"><a href="#registration" className="link" >реєстрація</a></li>
        </ul>
      </nav>
    </div>
  )
}
