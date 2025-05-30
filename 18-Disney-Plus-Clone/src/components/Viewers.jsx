import React from "react";
import styled from "styled-components";

import pixarImage from "../assets/images/viewers-pixar.png";
import pixarVideo from "../assets/videos/pixar.mp4";
import marvelImg from "../assets/images/viewers-marvel.png";
import marvelVideo from "../assets/videos/marvel.mp4";
import startWarImg from "../assets/images/viewers-starwars.png";
import startWarImgVideo from "../assets/videos/star-wars.mp4";
import viewNational from "../assets/images/viewers-national.png";
import geographicVideo from "../assets/videos/national-geographic.mp4";

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  background: rgb(41 58 60);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0/ 80%) 0px 40px 58px -16px,
      rgb(0 0 0/72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    video {
      opacity: 1;
    }
  }
`;

const Containers = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Viewers = () => {
  return (
    <Containers>
      <Wrap>
        <img src={pixarImage} alt="Pixar viewer" />
        <video autoPlay loop playsInline muted>
          <source src={pixarVideo} type="video/mp4" />
        </video>
      </Wrap>

      <Wrap>
        <img src={marvelImg} alt="Marvel viewer" />
        <video autoPlay loop playsInline muted>
          <source src={marvelVideo} type="video/mp4" />
        </video>
      </Wrap>

      <Wrap>
        <img src={startWarImg} alt="Star Wars viewer" />
        <video autoPlay loop playsInline muted>
          <source src={startWarImgVideo} type="video/mp4" />
        </video>
      </Wrap>

      <Wrap>
        <img src={viewNational} alt="National Geographic viewer" />
        <video autoPlay loop playsInline muted>
          <source src={geographicVideo} type="video/mp4" />
        </video>
      </Wrap>
    </Containers>
  );
};

export default Viewers;
