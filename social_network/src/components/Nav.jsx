import React from 'react';
import s from "./Nav.module.css";

const NavBar = () => {
  return(
    <>
    <nav className={s.nav}>
        <div><a className={s.item}>Profile</a></div>
        <div><a className={s.item}>Message</a></div>
        <div><a className={s.item}>Newa</a></div>
        <div><a className={s.item}>Music</a></div>
        <div><a className={s.item}>Setting</a></div>
      </nav>
    </>
  )
}

export default NavBar