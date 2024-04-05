import { useInView } from "react-intersection-observer";
import "./HeaderStyle.css";
import aliens from "../../assets/imgs/aliens.png";
import ship from "../../assets/imgs/ship.png";

const Header = () => {
  const inViewObject = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={inViewObject.ref}
      className={
        inViewObject.inView
          ? "home-section container blink-animation"
          : "home-section container hide"
      }
      id='home'
    >
      <figure className='home-imgs'>
        <img src={aliens} alt='invaders' id='aliens-img' />
        <img src={ship} alt='ship' id='ship-img' />
      </figure>
      <div className='home-text-container'>
        <h1 className='title'>FRONTEND DEVELOPER</h1>
        <h2 className='subtitle'>Erik Signori Thalheimer</h2>
        <div className='home-text'>
          <p>
            Amante de tecnologia e principalmente curioso, tento desventar os
            mistérios de como tudo evolui na internet aprendendo eu mesma sobre
            ela. Isso explica o porque eu estou amando e aprendendo muito sendo
            desenvolvedor frontend e adoraria compartilhar isso com você.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
