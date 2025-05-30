import React, { useEffect } from "react";
import { Card } from "../components/Card";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export const MovieList = ({ title, apiPath }) => {
  const { data: movies } = useFetch(apiPath);
  useEffect(() => {
    document.title = title;
  });
  const navigator = useNavigate();

  return (
    <main className="container" style={{ marginTop: "80px" }}>
      {title == "Your Guide to Great Movies" ? (
        <div className=" bg-body-tertiary p-5 border mb-5 ">
          <h3 className="text-primary">Welcome to MovieHunt</h3>
          <p className="lead">
            Discover movies you&apos;ll love with personalized suggestions,
            curated collections, and quick searches - your guide to finding
            great films
          </p>
          <button
            className="btn btn-primary"
            onClick={() => {
              navigator("/movie/upcomming");
            }}
          >
            Explore Now
          </button>
        </div>
      ) : (
        ""
      )}
      <h5 className=" text-danger py-2 border-bottom">{title}</h5>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-3">
          {movies.map((movie) => {
            return <Card key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </main>
  );
};
