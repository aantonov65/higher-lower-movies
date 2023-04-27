import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="welcome-view text-center flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}>
      <div className="text-5xl flex gap-1 justify-center">
        <FontAwesomeIcon className="text-green-400" icon={faArrowUpLong} />
        <FontAwesomeIcon className="text-red-400" icon={faArrowDownLong} />
      </div>
      <h1 className="text-7xl font-bold mt-5 mb-14">
        <span className="text-green-400">HIGHER</span>
        <br />
        <span className="text-red-400">LOWER</span>
      </h1>
      <Button
        color="red"
        text="PLAY"
        onClick={() => {
          navigate("/game");
        }}
      />
      {/* Used for loading tailwind color classes in order to access them on buttons */}
      <span className="border-green-400 text-green-400 border-red-400 text-red-400"></span>
    </motion.div>
  );
};

export default Home;
