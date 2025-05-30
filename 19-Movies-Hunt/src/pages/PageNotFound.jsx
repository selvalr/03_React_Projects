import React from "react";
import notFound from "../assets/google-chrome-404.png";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div className="container">
      <img src={notFound} alt="" className=" img-fluid" />
      <p className="text-center">
        <Link to="/" className="btn btn-danger">
          Go to Home Page
        </Link>
      </p>
    </div>
  );
};
