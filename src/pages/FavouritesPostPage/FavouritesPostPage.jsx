import React from "react";
import { useContext } from "react";
import { CardContext } from "../../context/cardContext";
import CardList from "../../components/CardList/CardList";

const FavouritesPage = () => {
  const { favourites } = useContext(CardContext);

  return (
    <>
      <CardList posts={favourites} />
    </>
  );
};

export default FavouritesPage;
