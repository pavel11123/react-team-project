import React, { useEffect, useState } from "react";
import { Container, Stack, Pagination } from "@mui/material";
import s from "./CardList.module.css";
import RecipeReviewCard from "../Card/Card";
import api from "../../utils/api";

const CardList = () => {
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [page, setPage] = React.useState(1);
  const [countPagination, setCountPagination] = useState(10);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getPostsList(page)])
      .then(([userData, postData]) => {
        setCurrentUser(userData);
        setPosts(postData.posts);
        setCountPagination(Math.ceil(postData.total / 10));
      })
      .catch((err) => console.log(err));
  }, [page]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Container>
      <div className="container__main">
        <Stack spacing={2}>
          <div className={s.list__grid}>
            {posts.map((el) => {
              return <RecipeReviewCard key={el._id} {...el} />;
            })}
          </div>
          <div className={s.pagination}>
            <Pagination
              count={countPagination}
              page={page}
              onChange={handleChange}
              showFirstButton
              showLastButton
            />
          </div>
        </Stack>
      </div>
    </Container>
  );
};

export default CardList;
