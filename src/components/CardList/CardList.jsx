import React from "react";
import { Container } from "@mui/material";
import s from "./CardList.module.css";
import RecipeReviewCard from "../Card/Card";

const CardList = () => {
  return (
    <Container>
      <div className={s.list__grid}>
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
      </div>
    </Container>
  );
};

export default CardList;
