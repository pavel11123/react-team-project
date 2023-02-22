import React, {useEffect, useState} from "react";
import { Container, Stack, Pagination } from "@mui/material";
import s from "./CardList.module.css";
import RecipeReviewCard from "../Card/Card";
import { postData } from "../../assets/posts";

const CardList = () => {
  const [page, setPage] = React.useState(1);
  const [posts, setPosts] = useState([]);
  const [countPagination, setCountPagination] = useState(1);

  useEffect(() => {
    doFetch();
  }, [page]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  async function doFetch() {
    const response = await fetch(`https://api.react-learning.ru/posts/paginate?page=${page}&limit=10`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U3NjhjMDU5Yjk4YjAzOGY3N2I1MTIiLCJncm91cCI6ImZyb250MTAiLCJpYXQiOjE2NzYxMTAwNzMsImV4cCI6MTcwNzY0NjA3M30.luanAfhT-QPcFluquX55gosHGNa0vl_x42wo9mBy3h8'
      }
    })

    const { posts, total } = await response.json();
    setPosts(posts);
    setCountPagination(Math.floor(total / 10));
  }


  return (
    <Container>
      <div className="container__main">
        <Stack spacing={2}>
          <div className={s.list__grid}>
            {posts.map((el) => {
              return <RecipeReviewCard key={el._id} {...el} />;
            })}
          </div>
          <Pagination count={countPagination} page={page} onChange={handleChange} />
        </Stack>
      </div>
    </Container>
  );
};

export default CardList;
