import React from "react";
import "./ModalProjectStyle.css";
import img from "../../assets/imgs/todo-list.png";

const ModalProject = ({ setIsClicked, modalDetails }) => {
  const closeModal = () => {
    setIsClicked(false);
  };

  return (
    <article
      className='modal-container'
      onClick={() => {
        closeModal();
      }}
    >
      <img src={modalDetails.img[Object.keys(modalDetails.img)[0]]} />
      <div className='technologies'>
        {modalDetails.technologies.map((tech, index) => (
          <h2 style={{ color: modalDetails.colorTechnologies[index] }}>
            {tech}
          </h2>
        ))}
      </div>
      <p className='resume'>{modalDetails.text}</p>
      <div className='modal-options'>
        <a href={modalDetails.repository} target='_blank' className='modal-btn'>
          Repositório
        </a>
        <a href={modalDetails.site} target='_blank' className='modal-btn'>
          Site
        </a>
      </div>
    </article>
  );
};

export default ModalProject;
