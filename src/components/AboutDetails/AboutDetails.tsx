import { useContext } from "react";
import "./AboutDetailsStyle.css";
import { TechContext } from "../../providers/tech";

const AboutDetails = () => {
  const { techDetails } = useContext(TechContext);

  return (
    <div className='details'>
      <h1 style={{ color: `${techDetails?.color}` }}>{techDetails?.name}</h1>
      <p className='text'>{techDetails?.text}</p>
    </div>
  );
};

export default AboutDetails;
