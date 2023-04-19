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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              corrupti totam commodi veniam, minus placeat accusamus consectetur
              aliquid unde natus quis incidunt at nihil recusandae perferendis
              eveniet eos ipsum officia!
            </p>

            <Link to="/cards" className={s.link}>
              Let's get started
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
