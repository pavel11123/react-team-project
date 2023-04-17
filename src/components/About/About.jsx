import React from "react";
import s from "./About.module.scss";
import cn from "classnames";
import girl from "./image/girl.png";
import man from "./image/man.png";
import { motion } from "framer-motion";

const oneBlockAbout = {
  hidden: {
    opacity: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    transition: { duration: 0.7, delay: custom * 0.3 },
  }),
};

const twoBlockAbout = {
  hidden: {
    opacity: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    transition: { duration: 0.7, delay: custom * 0.3 },
  }),
};

const threeBlockAbout = {
  hidden: {
    opacity: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    transition: { duration: 0.7, delay: custom * 0.3 },
  }),
};

export default function About() {
  return (
    <>
      <motion.div
        className={cn(s.aboutWrapper, "d-fl-col")}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className={s.title}>Development Team</h3>
        <div className={cn(s.list, "d-fl-wrap")}>
          <motion.div
            className={cn(s.card, "d-fl-col")}
            variants={oneBlockAbout}
            custom={2}
          >
            <div className={cn(s.img)}>
              <img src={girl} alt="girl" />
            </div>
            <p className={cn(s.description)}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aspernatur magnam itaque, iste quisquam quibusdam officiis nemo
              voluptate at sunt eveniet recusandae eos, reiciendis placeat
              repudiandae, inventore pariatur! Neque, alias iure?
            </p>
            <div className={cn(s.info, "d-fl-col")}>
              <h5>Anastasia Mysnik</h5>
              <span>Front-end developer</span>
            </div>
          </motion.div>

          <motion.div
            className={cn(s.card, "d-fl-col")}
            variants={twoBlockAbout}
            custom={2.5}
          >
            <div className={cn(s.img)}>
              <img src={man} alt="girl" />
            </div>
            <p className={cn(s.description)}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aspernatur magnam itaque, iste quisquam quibusdam officiis nemo
              voluptate at sunt eveniet recusandae eos, reiciendis placeat
              repudiandae, inventore pariatur! Neque, alias iure?
            </p>
            <div className={cn(s.info, "d-fl-col")}>
              <h5>Arseny Filimonov</h5>
              <span>Front-end developer</span>
            </div>
          </motion.div>

          <motion.div
            className={cn(s.card, "d-fl-col")}
            variants={threeBlockAbout}
            custom={3}
          >
            <div className={cn(s.img)}>
              <img src={man} alt="girl" />
            </div>
            <p className={cn(s.description)}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aspernatur magnam itaque, iste quisquam quibusdam officiis nemo
              voluptate at sunt eveniet recusandae eos, reiciendis placeat
              repudiandae, inventore pariatur! Neque, alias iure?
            </p>
            <div className={cn(s.info, "d-fl-col")}>
              <h5>Pavel Korobko</h5>
              <span>Front-end developer</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
