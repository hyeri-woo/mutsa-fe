import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import styled from "styled-components";
import ButtonGroup from './Components/ButtonGroup'
import Modal from './Components/Modal';
import {useState} from 'react';

const GlobalStyle = createGlobalStyle`
  ${reset}
  span {
    color: red;
    font-size: 12px;
    }

    a{
        text-decoration : none;
        color : inherit;
    }

    button{
        border : none;
        cursor : pointer;
    }

    * {
    box-sizing: border-box;
    }
`;

const ContentDiv = styled.div`
  margin: 40px;
`;

const ContentH2 = styled.h2`
  width: 200px;
  margin: 0 auto;
  text-align: center;
`;

function App() {
  // return (
  //   <>
  //     {/* <GlobalStyle/>
  //     <h1>hello world 1</h1>
  //     <span>hello world 2</span> */}
  //     <ContentDiv>
  //         <ContentH2>Q&A</ContentH2>
  //         <p>
  //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi
  //             corrupti quo blanditiis! Adipisci amet corporis ipsum odio minima
  //             aliquid quisquam! Dignissimos natus laborum qui veritatis quaerat eaque!
  //             Nemo, ullam.
  //         </p>
  //     </ContentDiv>
  //     <ButtonGroup/>
  //   </>
  // );
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <div>
      <h1>Welcome to my app!</h1>
      <button onClick={handleOpenModal}>Open modal</button>
      {isModalOpen && (
        <Modal
          title="My modal"
          content="This is my modal."
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
export default App;