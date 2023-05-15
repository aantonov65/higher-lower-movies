import Overlay from "./Overlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ handleClose }) => {
  return (
    <Overlay onClick={handleClose}>
      {/* Prevents bubbling */}
      <div
        className="modal relative flex flex-col items-center m-auto bg-slate-800 rounded-lg text-white py-10 px-3"
        onClick={(e) => e.stopPropagation()}>
        <FontAwesomeIcon
          className="absolute top-3 right-4 text-xl hover:text-red-400 hover:cursor-pointer transition"
          icon={faXmark}
          onClick={handleClose}
        />
        <h2 className="text-3xl font-bold">Game Description</h2>
        <ul className="list-disc ml-3 mt-6 [&>*]:mt-3">
          <li>Guess which movie has a higher rating</li>
          <li>The game ends upon a wrong answer</li>
          <li>Try to get as high of a score as possible</li>
          <li>All data is obtained through the MovieDB API</li>
        </ul>
      </div>
    </Overlay>
  );
};

export default Modal;
