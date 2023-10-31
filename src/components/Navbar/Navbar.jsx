import React from "react";
import "./NavbarStyle.css";

const Navbar = () => {
  return (
    <nav>
      <div className='items'>
        <a className='menu-items' href='#home'>
          <h2>Home</h2>
        </a>
        <a className='menu-items' href='#projects'>
          <h2>Projetos</h2>
        </a>
        <a className='menu-items' href='#about'>
          <h2>Sobre</h2>
        </a>
      </div>
      <div className='items-mobile'>
        <a
          href='https://www.linkedin.com/in/erik-signori-thalheimer-b0375b20a'
          target='_blank'
        >
          <i className='bi bi-linkedin adjust-icons'></i>
        </a>
        <a href='https://github.com/erik-sig' target='_blank'>
          <i className='bi bi-github adjust-icons'></i>
        </a>
        <a className='menu'>
          <div className='menu-bar1'></div>
          <div className='menu-bar2'></div>
          <div className='menu-bar3'></div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
