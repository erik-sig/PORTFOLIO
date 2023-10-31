import React from "react";
import "./AsidesStyle.css";

const Asides = () => {
  return (
    <>
      <aside>
        <h2>DESENVOLVEDOR</h2>
      </aside>
      <article className='links'>
        <a
          href='https://www.linkedin.com/in/erik-signori-thalheimer-b0375b20a'
          target='_blank'
        >
          <div className='linkedin'>
            <i className='bi bi-linkedin adjust-icons'></i>
            <p>erik st</p>
          </div>
        </a>
        <a href='https://github.com/erik-sig' target='_blank'>
          <div className='github'>
            <i className='bi bi-github adjust-icons'></i>
            <p>erik-sig</p>
          </div>
        </a>
      </article>
    </>
  );
};

export default Asides;
