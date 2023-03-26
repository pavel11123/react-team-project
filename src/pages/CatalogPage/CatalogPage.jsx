import React, {useContext} from 'react';
import CardList from "../../components/CardList/CardList";
import {CardContext} from "../../context/cardContext";




const CatalogPage = () => {
    const { posts } = useContext(CardContext);
    console.log(posts);

    return (
      <>
          
             <CardList posts={posts} 
              
            />
        
      </>
  );
};

export default CatalogPage;