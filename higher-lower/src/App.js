import "./App.css";
import Home from "./pages/Home";
import Game from "./pages/Game";
import GameOver from "./pages/GameOver";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import Modal from "../src/components/Modal";

export const Context = createContext();

function App() {
  const [score, setScore] = useState(0);
  const [toggleModal, setToggleModal] = useState("hidden");
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);

  return (
    <BrowserRouter>
      <Context.Provider
        value={{ score, setScore, toggleModal, setToggleModal }}>
        <div className="App">
          <FontAwesomeIcon
            icon={faQuestion}
            className="open-modal text-gray-200 text-2xl m-3 hover:text-green-400 hover:cursor-pointer transition"
            onClick={() => (modalOpen ? closeModal() : openModal())}
          />
          {modalOpen && (
            <Modal modalOpen={modalOpen} handleClose={closeModal} />
          )}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/game-over" element={<GameOver />} />
          </Routes>
        </div>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
