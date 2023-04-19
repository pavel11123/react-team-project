import React from "react";
import s from "./Feedback.module.scss";
import cn from "classnames";
import { motion } from "framer-motion";

const leftBlockFeedback = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, delay: custom * 0.3 },
  }),
};

const rightBlockFeedback = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, delay: custom * 0.3 },
  }),
};

export default function Feedback() {
  return (
    <>
      <motion.section
        className={s.feedback}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 className={s.title} variants={leftBlockFeedback} custom={2}>
          Don't miss this unique offer!
        </motion.h2>
        <motion.p
          className={s.description}
          variants={leftBlockFeedback}
          custom={2}
        >
          Subscribe to our ultra-exclusive drop list and be the first to know
          about upcoming dolby drops.
        </motion.p>
        <motion.form
          className={s.form}
          action=""
          variants={rightBlockFeedback}
          custom={2}
        >
          <div className={cn(s.form__wrapper, "d-fl")}>
            <button className={s.submit}>Subscribe</button>
            <input
              className={s.email}
              type="text"
              placeholder="Email Address"
            />
          </div>
        </motion.form>
      </motion.section>
    </>
  );
}
