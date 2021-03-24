import React from 'react';
import { Link } from 'react-scroll'

export default function Nav() {
  return (
    <nav className="nav">
      <ul className="list">
        <li className="item"><Link className="link" to="header" smooth={true} duration={1000}>головна</Link></li>
        <li className="item"><Link className="link" to="courses" smooth={true} duration={1000}>курси</Link></li>
        <li className="item"><Link className="link" to="partners" smooth={true} duration={1000}>блог</Link></li>
        <li className="item"><Link className="link" to="developers" smooth={true} duration={1000}>про проект</Link></li>
        <li className="item"><Link className="link" to="registration" smooth={true} duration={1000}>реєстрація</Link></li>
      </ul>
    </nav>
  )
}
