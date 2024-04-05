import { useInView } from "react-intersection-observer";
import "./PingPongStyle.css";

const PingPong = () => {
  const inViewObject = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <article
      ref={inViewObject.ref}
      className={
        inViewObject.inView
          ? "ping-pong container blink-animation"
          : "ping-pong container hide"
      }
    >
      <div className='bar1'></div>
      <div className='ball'></div>
      <div className='bar2'></div>
    </article>
  );
};

export default PingPong;
