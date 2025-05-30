import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";

export const Seacrch = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);

  useEffect(() => {
    document.title = `Search for Result ${queryTerm}`;
  });

  return (
    <main className="container" style={{ marginTop: "80px" }}>
      <h5 className="text-danger py-2 border-bottom">
        <h5>
          {movies.length === 0
            ? `No results found for ${queryTerm}`
            : `Results for ${queryTerm}`}
        </h5>
      </h5>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">
        {movies.map((movie) => {
          return <Card key={movie.id} movie={movie} />;
        })}
      </div>
    </main>
  );
};
