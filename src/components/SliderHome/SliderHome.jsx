import s from "./SliderHome.module.scss";
import cn from "classnames";
import Slide from "../Slide/Slide";
import Slider from "react-slick";
import React from "react";
import { useContext } from "react";
import { SlideContext } from "../../context/slideContext";
import { Link } from "react-router-dom";
import SkeletonSlide from "../SkeletonSlide/SkeletonSlide";

export default function SliderHome() {
  const { slide, isLoading } = useContext(SlideContext);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1135,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 515,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className={s.slider}>
        <div className={cn(s.header, "d-fl")}>
          <h3 className={s.title}>Мои посты</h3>
          <Link to="/cards" className={s.link}>
            Посмотреть больше
          </Link>
        </div>
        <Slider {...settings}>
          {isLoading ? (
            <SkeletonSlide slideSkeleton={8} />
          ) : (
            slide.map((el) => {
              if (el.author._id === "63ecab9c59b98b038f77b633") {
                return <Slide key={el._id} {...el} />;
              }
            })
          )}
        </Slider>
      </div>
    </>
  );
}
