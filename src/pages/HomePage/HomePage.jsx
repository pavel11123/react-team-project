import React from "react";
import StartBlock from "../../components/StartBlock/StartBlock";
import SliderHome from "../../components/SliderHome/SliderHome";
import s from "./HomePage.module.scss";
import cn from "classnames";
import { Container } from "@mui/material";

export default function HomePage() {
  return (
    <>
      <Container className={s.container}>
        <div className="container__main">
          <div className="d-fl-col">
            <StartBlock />
            <SliderHome />
          </div>
        </div>
      </Container>
    </>
  );
}
