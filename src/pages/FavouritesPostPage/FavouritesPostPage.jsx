import React from "react";
import { useContext } from "react";
import { CardContext } from "../../context/cardContext";
import CardList from "../../components/CardList/CardList";
import s from "./FavouritesPostPage.module.css";
import { UserContext } from "../../context/userContext";


const FavouritesPage = () => {
    
    const { favourites } = useContext(CardContext);
    console.log( );
    
  
    return (
        <>
            
            <CardList posts={favourites} 
            
            />
        
        </>
    );
  };
  
  export default FavouritesPage;
  