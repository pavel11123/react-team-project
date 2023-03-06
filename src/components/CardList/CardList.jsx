import { Container, Stack, Pagination } from "@mui/material";
import s from "./CardList.module.css";
import RecipeReviewCard from "../Card/Card";

const CardList = ({ posts, page, setPage, countPagination }) => {
  
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
