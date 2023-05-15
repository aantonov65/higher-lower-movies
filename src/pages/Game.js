import React, { useContext, useEffect, useState } from "react";
import generateRandomNumber from "../utils/generateRandomNumber";
import MovieCard from "../components/MovieCard";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { Context } from "../App";
import { generateRandomPages } from "../utils/generateRandomPages";
import { getMoviesData } from "../api/getMoviesData";
import { motion } from "framer-motion";

const Game = () => {
  const [currentMovie, setCurrentMovie] = useState(generateRandomNumber(60));
  const [nextMovie, setNextMovie] = useState(generateRandomNumber(60));
  const [moviesData, setMoviesData] = useState([]);
  const [highScore, setHighScore] = useState(
    parseInt(localStorage.getItem("highScore")) || 0
  );
  const currentMovieData = moviesData[currentMovie];
  const nextMovieData = moviesData[nextMovie];
  const pages = generateRandomPages();
  const { score, setScore } = useContext(Context);
  const navigate = useNavigate();

  //Prevents movies from being equal
  if (currentMovie === nextMovie) {
    setNextMovie(nextMovie + 1);
  }

  // Checks if the choice was right or wrong
  const handleChoice = (operator) => {
    if (
      operator === "<="
        ? nextMovieData.vote_average <= currentMovieData.vote_average
        : nextMovieData.vote_average >= currentMovieData.vote_average
    ) {
      setCurrentMovie(nextMovie);
      setNextMovie(generateRandomNumber(60));
      setScore(score + 1);
      if (score > highScore) {
        setHighScore(score);
        localStorage.setItem("highScore", score);
      }
    } else {
      if (score > highScore) {
        setHighScore(score);
        localStorage.setItem("highScore", score);
      }
      navigate("/game-over");
    }
  };

  //API Call
  useEffect(() => {
    getMoviesData(setMoviesData, pages);
  }, []);

  return moviesData.length !== 0 ? (
    <motion.div
      className="flex justify-center items-center flex-col mt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}>
      <div className="absolute top-2 right-4 flex flex-col">
        <span className="text-white text-xl font-bold">
          High Score: {highScore}
        </span>
        <span className="text-white text-xl font-bold mr-4">
          Score: {score}
        </span>
      </div>
      <motion.div className="flex gap-12 mt-14">
        <MovieCard movie={currentMovieData} />
        <div className="flex flex-col gap-1 text-center text-white mt-10">
          <h2 className="text-yellow-200 font-bold text-2xl mb-1">
            "{nextMovieData.title}"
          </h2>
          <span className="text-xl">has a</span>
          <div className="flex flex-col gap-4 my-8">
            <Button
              color="green"
              text="Higher"
              onClick={() => handleChoice(">=")}
            />
            <Button
              color="red"
              text="Lower"
              onClick={() => handleChoice("<=")}
            />
          </div>
          <span>
            rating than{" "}
            <span className="text-yellow-200">"{currentMovieData.title}"</span>
          </span>
        </div>
        <MovieCard movie={nextMovieData} />
      </motion.div>
    </motion.div>
  ) : (
    <p className="text-white text-2xl">Loading...</p>
  );
};

export default Game;
