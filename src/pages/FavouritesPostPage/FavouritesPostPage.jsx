import React from "react";
import { useContext } from "react";
import { CardContext } from "../../context/cardContext";
import CardList from "../../components/CardList/CardList";
import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";


  const FavouritesPage = () => {
  const navigate = useNavigate();
  const { favourites } = useContext(CardContext);

  return (
    <Container>
    <div>
        <Button
          sx={{ marginBottom: "10px" }}
          variant="contained"
          onClick={() => navigate(-1)}
        >
          Назад
        </Button>
      </div>
      <CardList posts={favourites} />
    </Container>
  );
};

export default FavouritesPage;
