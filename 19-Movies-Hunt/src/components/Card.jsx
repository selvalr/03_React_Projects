import React from "react";
import backup from "../assets/not_loaded_sample.gif";
import { Link } from "react-router-dom";

export const Card = ({ movie }) => {
  const {
    poster_path,
    backdrop_path,
    id,
    overview,
    title,
    vote_average,
    vote_count,
  } = movie;
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : backup;
  return (
    <div className="col">
      <div className="card shadow-sm" title={title}>
        <img src={image} alt="" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title text-primary text-overflow-1">{title}</h5>
          <p className=" card-text text-overflow-2">{overview}</p>
          <div className=" d-flex align-items-center justify-content-between">
            <Link
              to={`/movie/${id}`}
              className="btn btn-sm btn-outline-primary stretched-link"
            >
              Read More
            </Link>
            <small>
              <i className="bi bi-star-fill text-warning"></i> {vote_average} |
              {vote_count} reviews
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};
