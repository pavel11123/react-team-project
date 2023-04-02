import React from "react";
import s from "./NotFound.module.scss";
import cn from "classnames";
import notFoundImg from "./image/notFound.svg";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <Container className={s.container}>
        <div className={cn(s.wrapper, "d-fl-col")}>
          <div className={cn(s.img, "d-fl")}>
            <img src={notFoundImg} alt="По вашему запросу ничего не найдено!" />
          </div>

          <h1 className={s.title}>Page not found</h1>
          <p className={s.description}>
            Проверьте не допустили вы ошибку в запросе и обновите страницу, если
            это не помогло обратитесь в службу поддержки - 8 (800) 888-88-88
          </p>
          <Link className={s.link} to="/">
            На главную
          </Link>
        </div>
      </Container>
    </>
  );
}
