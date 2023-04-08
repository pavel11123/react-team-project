import React from "react";
import s from "./About.module.scss";
import cn from "classnames";
import girl from "./image/girl.png";
import man from "./image/man.png";

export default function About() {
  return (
    <>
      <div className={cn(s.aboutWrapper, "d-fl-col")}>
        <h3 className={s.title}>Development Team</h3>
        <div className={cn(s.list, "d-fl-wrap")}>
          <div className={cn(s.card, "d-fl-col")}>
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
          </div>

          <div className={cn(s.card, "d-fl-col")}>
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
          </div>

          <div className={cn(s.card, "d-fl-col")}>
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
          </div>
        </div>
      </div>
    </>
  );
}
