import React from "react";
import { useCallback } from "react";
import AppHeader from "../../components/AppHeader/AppHeader";
import Footer from "../../components/Footer/Footer";
import Post from "../../components/Post/Post";
import api from "../../utils/api"
import {useParams} from "react-router-dom";
import useApi from "../../hooks/useApi";



const PostPage = () => {
  const { postId } = useParams();
  
  const handleGetPost = useCallback(() => api.getPostById(postId), [postId]);
  const { data: postById} = useApi(handleGetPost);
  console.log("автор-----------------", postById);
  // console.log("автор-----------------", postById);


   return (
       
        
        <>
          
      
           <Post {...postById}/>
       

            
        </>
      );
}


export default PostPage;