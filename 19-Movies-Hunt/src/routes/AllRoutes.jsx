import React from "react";
import { Route, Routes } from "react-router-dom";
import { MovieList, MovieDetails, Seacrch, PageNotFound } from "../pages/index";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MovieList
            title="Your Guide to Great Movies"
            apiPath="movie/now_playing"
          />
        }
      />
      <Route
        path="movie/:id"
        element={<MovieDetails title="Movie Details" apiPath="" />}
      />
      <Route
        path="movie/top"
        element={
          <MovieList title="Top Rated Movies" apiPath="movie/top_rated" />
        }
      />
      <Route
        path="movie/popular"
        element={<MovieList title="Popular Movies" apiPath="movie/popular" />}
      />
      <Route
        path="movie/upcomming"
        element={<MovieList title="Upcoming Movies" apiPath="movie/upcoming" />}
      />
      <Route path="search" element={<Seacrch apiPath="search/movie" />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
