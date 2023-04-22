import React from "react";
import s from "./StartBlock.module.scss";
import cn from "classnames";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import mainSculpture from "./image/mainSculpture.png";
import { motion } from "framer-motion";

const leftBlockAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: custom * 0.3 },
  }),
};

const rightBlockAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: custom * 0.3 },
  }),
};

export default function StartBlock() {
  // делаем 100vh на телефоне
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  return (
    <>
      <motion.div
        className={cn(s.start__block, "d-fl-wrap")}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className={cn(s.start__info, "d-fl-col")}
          variants={leftBlockAnimation}
          custom={2}
        >
          <div className={cn(s.info__wrapepr, "d-fl-col")}>
            <div className={s.title__wrapper}>
              <p className={s.subtitle}>Web studio</p>
              <h1 className={s.title}>
                React <br />
                Team-Project
              </h1>
            </div>

            <p className={s.description}>
              Для меня долгое время было загадкой, как что-то очень дорогое и
              технологичное может быть столь бесполезным. И вскоре я осознал,
              что компьютер — это глупая машина, обладающая способностями
              выполнять невероятно умные вещи, тогда как программисты — это
              умные люди, у которых талант делать невероятные глупости. Короче,
              они нашли друг друга.
            </p>

            <Link to="/cards" className={s.link}>
              Давайте начнём
            </Link>
          </div>
        </motion.div>
        <motion.div
          className={cn(s.start__img, "d-fl-col")}
          variants={rightBlockAnimation}
          custom={2}
        >
          <div className={s.img}>
            <img src={mainSculpture} alt="Скульптура" />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
