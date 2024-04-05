import { useContext, useEffect } from "react";
import "./ModalProjectStyle.css";
import { ModalContext } from "../../providers/modal";

const ModalProject = () => {
  const { modalDetails, handleModalVisible } = useContext(ModalContext);

  useEffect(() => {
    console.log(modalDetails);
  }, [modalDetails]);
  return (
    <article className='modal-container' onClick={() => handleModalVisible()}>
      <img src={modalDetails?.img} />
      <div
        className='technologies'
        style={{ color: modalDetails?.colorTechnologies }}
      >
        {modalDetails?.technologies}
      </div>
      <p className='resume'>{modalDetails?.text}</p>
      <div className='modal-options'>
        <a
          href={modalDetails?.repository}
          target='_blank'
          className='modal-btn'
        >
          Repositório
        </a>
        <a href={modalDetails?.site} target='_blank' className='modal-btn'>
          Site
        </a>
      </div>
    </article>
  );
};

export default ModalProject;
