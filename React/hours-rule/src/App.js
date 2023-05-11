import './common.css';
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Main from "./Components/Main/Main.jsx";
import Modal from "./Components/Modal/Modal.jsx";
import { useState } from "react";

function App() {
  const [showModal, setModal] = useState(false);
  const closeModal = () => {
    setModal(false);
  }
  const openModal = () => {
    setModal(true);
  }
  return (
    <>
        <Header/>
        <Main openModal={openModal}/>
        <Footer/>
        {showModal && <Modal closeModal={closeModal}/>}
    </>
)
}
export default App;
