import React from "react";
import { Container, Stack, Pagination } from "@mui/material";
import s from "./CardList.module.css";
import RecipeReviewCard from "../Card/Card";
import { postData } from "../../assets/posts";

const CardList = () => {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Container>
      <div className="container__main">
        <Stack spacing={2}>
          <div className={s.list__grid}>
            {postData.map((el) => {
              return <RecipeReviewCard key={el._id} {...el} />;
            })}
          </div>
          <Pagination count={10} page={page} onChange={handleChange} />
        </Stack>
      </div>
    </Container>
  );
};

export default CardList;
