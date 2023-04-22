import React from "react";
import { useContext } from "react";
import { CardContext } from "../../context/cardContext";
import s from "./FavouritesPostPage.module.scss";
import CardList from "../../components/CardList/CardList";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";

const FavouritesPage = () => {
  const { favourites } = useContext(CardContext);
  const navigate = useNavigate();

  return (
    <div className={s.wrapper}>
      <Container>
        <div className="container__main">
          <Button
            variant="contained"
            onClick={() => navigate(-1)}
            className={s.buttonLink}
          >
            Назад
          </Button>
        </div>
      </Container>

      <CardList posts={favourites} />
    </div>
  );
};

export default FavouritesPage;
