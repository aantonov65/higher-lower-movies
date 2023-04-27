import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../App";
import Button from "../components/Button";
import { motion } from "framer-motion";

const GameOver = () => {
  const navigate = useNavigate();
  const { score, setScore } = useContext(Context);
  const message =
    score < 5
      ? "Nice try! Keep pushing!"
      : score < 10
      ? "That's a great score! Keep it up!"
      : "You are extremely good at this!";

  return (
    <motion.div
      className="game-over-view flex flex-col gap-6 items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0 }}>
      <span className="text-2xl font-bold text-white">You scored: </span>
      <span className="text-5xl text-yellow-200 font-bold">{score}</span>
      <span className="text-white text-lg md:text-xl whitespace-nowrap">
        {message}
      </span>
      <div className="flex flex-col md:flex-row gap-4 mt-12">
        <Button
          color="red"
          text="Back to Home"
          onClick={() => {
            setScore(0);
            navigate("/");
          }}
        />
        <Button
          color="green"
          text="Play Again"
          onClick={() => {
            setScore(0);
            navigate("/game");
          }}
        />
      </div>
    </motion.div>
  );
};

export default GameOver;
