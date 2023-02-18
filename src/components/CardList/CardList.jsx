import React from "react";
import { Container } from "@mui/material";
import s from "./CardList.module.css";
import RecipeReviewCard from "../Card/Card";
import { postData } from "../../assets/posts";

const CardList = () => {
  // console.log(postData[0].image); // выводится два раза = почему?
  return (
    <Container>
      <div className={s.list__grid}>
        {postData.map((el) => {
          return <RecipeReviewCard key={el._id} {...el} />;
        })}
      </div>
    </Container>
  );
};

export default CardList;
