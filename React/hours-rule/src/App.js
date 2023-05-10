import Landing from "./components/Landing.jsx";
import Modal from "./components/Modal.jsx";
import { useState } from "react";

function App() {
  const [showModal, setModal] = useState(false);
  return (
    <>
      <Landing onModalClick={setModal}/>
      {showModal && <Modal onModalClick={setModal}/>}
    </>
  );
}
export default App;
