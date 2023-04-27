import React from "react";
import { formatDate } from "../utils/formatDate";

const MovieCard = ({ movie }) => {
  const { poster_path, title, release_date, backdrop_path, first_air_date } =
    movie;

  const releaseDate = release_date ? release_date : first_air_date;
  const imagePath = poster_path ? poster_path : backdrop_path;

  return (
    <div className="movie-card bg-slate-900 hidden md:block text-center rounded-md w-52">
      <img
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${imagePath}`}
        alt="movie poster"
        className="rounded-sm"
      />
      <div className="p-4">
        <h3 className="text-xl text-red-500">{title}</h3>
        <span className="text-white">{formatDate(releaseDate)}</span>
      </div>
    </div>
  );
};

export default MovieCard;
