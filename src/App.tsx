import Navbar from "./components/Navbar/Navbar";
import Asides from "./components/Asides/Asides";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import PingPong from "./components/PingPong/PingPong";
import ModalProject from "./components/ModalProject/ModalProject";

import "./Styles/Animations/Animations.css";
import { useContext } from "react";
import { ModalContext } from "./providers/modal";

function App() {
  const { visible } = useContext(ModalContext);

  return (
    <>
      {visible ? <ModalProject></ModalProject> : null}
      <Asides></Asides>
      <Navbar></Navbar>
      <main>
        <Header></Header>
        <PingPong></PingPong>
        <About></About>
        <Projects></Projects>
      </main>
    </>
  );
}

export default App;
