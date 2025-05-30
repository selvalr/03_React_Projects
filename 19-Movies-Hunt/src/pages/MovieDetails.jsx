import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import backup from "../assets/not_loaded_sample.gif";
import { convertMinutes } from "../utils/utils";

export const MovieDetails = () => {
  const parms = useParams();
  const key = import.meta.env.VITE_API_KEY;
  const [movie, setMovie] = useState([]);
  const url = `https://api.themoviedb.org/3/movie/${parms.id}?api_key=${key}`;
  useEffect(() => {
    async function fetchMovie() {
      fetch(url)
        .then((res) => res.json())
        .then((jsonData) => {
          setMovie(jsonData);
        });
    }
    fetchMovie();
  }, []);
  useEffect(() => {
    document.title = `${movie.title}`;
  });

  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : backup;
  return (
    <main className="container">
      <h5 className=" text-danger py-2 border-bottom mb-3">{movie.title}</h5>
      <div className="row">
        <div className="col-md-4">
          <img src={image} alt="" className=" img-fluid img-thumbnail" />
        </div>
        <div className="col-md-8">
          <h3>{movie.title}</h3>
          <p className="mt-3">{movie.overview}</p>
          {movie.genres ? (
            <p className="d-flex gap-3">
              {movie.genres.map((gene) => (
                <span key={gene.id} className="badge bg-danger me-1">
                  {gene.name}
                </span>
              ))}
            </p>
          ) : null}

          <p>
            <i className="bi bi-star-fill text-warning"></i>
            {movie.vote_average} |{" "}
            <i className="bi bi-people-fill text-success"></i>{" "}
            {movie.vote_count} reviews
          </p>

          <table className=" table table-bordered w-50 mt-2">
            <tbody>
              <tr>
                <th>Runtime</th>
                <td>{convertMinutes(movie.runtime)}</td>
              </tr>
              <tr>
                <th>Budget</th>
                <td>{movie.budget}</td>
              </tr>
              <tr>
                <th>Revenue</th>
                <td>{movie.revenue}</td>
              </tr>
              <tr>
                <th>Release Date</th>
                <td>{movie.release_date}</td>
              </tr>
            </tbody>
          </table>

          <a
            className="btn btn-warning"
            href={`https://www.imdb.com/title/${movie.imdb_id}/`}
            target="_blank"
          >
            View in IMDB
          </a>
        </div>
      </div>
    </main>
  );
};
