import React from "react";
import s from "./Feedback.module.scss";
import cn from "classnames";

export default function Feedback() {
  return (
    <>
      <section className={s.feedback}>
        <h2 className={s.title}>Don't miss this unique offer!</h2>
        <p className={s.description}>
          Subscribe to our ultra-exclusive drop list and be the first to know
          about upcoming dolby drops.
        </p>
        <form className={s.form} action="">
          <div className={cn(s.form__wrapper, "d-fl")}>
            <button className={s.submit}>Subscribe</button>
            <input
              className={s.email}
              type="text"
              placeholder="Email Address"
            />
          </div>
        </form>
      </section>
    </>
  );
}
