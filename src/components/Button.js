import React from "react";

const Button = ({ color, text, onClick }) => {
  return (
    <button
      className={`game-button text-${color}-400 font-bold border-2 border-${color}-400 rounded-2xl py-2 px-3 text-xl mx-auto hover:bg-slate-900 transition`}
      onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
