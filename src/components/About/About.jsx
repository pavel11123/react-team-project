import React from "react";
import s from "./About.module.scss";
import cn from "classnames";
import nastya from "./image/nastya.jpg";
import man from "./image/man.png";
import pavel from "./image/pavel.jpg";
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
              <img src={nastya} alt="nastya" />
            </div>
            <p className={cn(s.description)}>
              Всем знаком этап «бета-тестирования» софта перед официальным
              релизом. Но мало кто знает, что «бета» с латыни переводится «до
              сих пор не работает»
            </p>
            <div className={cn(s.info, "d-fl-col")}>
              <h5>Анастасия Мысник</h5>
              <span>Front-end developer</span>
            </div>
          </motion.div>

          <motion.div
            className={cn(s.card, "d-fl-col")}
            variants={twoBlockAbout}
            custom={2.5}
          >
            <div className={cn(s.img)}>
              <img src={man} alt="man" />
            </div>
            <p className={cn(s.description)}>
              Если бы строители работали так же, как программисты кодят, то
              любая птица, присевшая отдохнуть на крыше дома, могла бы стать
              причиной гибели цивилизации.
            </p>
            <div className={cn(s.info, "d-fl-col")}>
              <h5>Арсений Филимонов</h5>
              <span>Front-end developer</span>
            </div>
          </motion.div>

          <motion.div
            className={cn(s.card, "d-fl-col")}
            variants={threeBlockAbout}
            custom={3}
          >
            <div className={cn(s.img)}>
              <img src={pavel} alt="pavel" />
            </div>
            <p className={cn(s.description)}>
              Написание комментариев в коде чем-то похоже на мытье унитаза –
              крайне неприятно, совсем не хочется этого делать, но необходимо,
              чтобы не опозориться перед гостями.
            </p>
            <div className={cn(s.info, "d-fl-col")}>
              <h5>Павел Коробко</h5>
              <span>Front-end developer</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
