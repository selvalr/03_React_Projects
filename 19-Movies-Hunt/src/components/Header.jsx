import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigator = useNavigate();
  const handeSearch = (e) => {
    e.preventDefault();
    const queryTerm = e.target.search.value;
    e.target.reset();
    return navigator(`/search?q=${queryTerm}`);
  };
  return (
    <nav className=" navbar fixed-top navbar-dark bg-primary navbar-expand-md">
      <div className=" container-fluid">
        <NavLink to="/" className=" navbar-brand">
          <i className="bi bi-film"></i> MovieHunt
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className=" navbar-toggler-icon"></span>
        </button>

        <div className="collape navbar-collapse" id="menu">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movie/top" className="nav-link">
                Top Rated
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movie/popular" className="nav-link">
                Popular
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movie/upcomming" className="nav-link">
                UpComing
              </NavLink>
            </li>
          </ul>
          <form onSubmit={handeSearch}>
            <input
              type="search"
              name="search"
              placeholder="Search"
              className=" form-control me-2"
            />
          </form>
        </div>
      </div>
    </nav>
  );
};
