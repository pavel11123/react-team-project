import { Container, Stack, Pagination } from "@mui/material";
import s from "./CardList.module.css";
import RecipeReviewCard from "../Card/Card";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
const CardList = ({ posts, page, setPage, countPagination }) => {
  const { user: currentUser } = useContext(UserContext);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Container>
      <div className="container__main">
        <Stack spacing={2}>
          <div className={s.list__grid}>
            {posts.map((el) => {
              return (
                <RecipeReviewCard
                  key={el._id}
                  {...el}
                  currentUser={currentUser}
                />
              );
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
