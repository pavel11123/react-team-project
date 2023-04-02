import s from "./SliderHome.module.scss";
import cn from "classnames";
import { Container } from "@mui/material";
import Slide from "../Slide/Slide";
import Slider from "react-slick";
import React from "react";
import { useContext } from "react";
import { SlideContext } from "../../context/slideContext";

export default function SliderHome() {
  const { slide } = useContext(SlideContext);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className={s.slider}>
        <h3 className={s.title}> Наши посты</h3>
        <Slider {...settings}>
          {slide.map((el) => {
            return <Slide key={el._id} {...el} />;
          })}
        </Slider>
      </div>
    </>
  );
}
