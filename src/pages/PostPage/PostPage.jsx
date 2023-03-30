import React from "react";
import { useCallback } from "react";
import Post from "../../components/Post/Post";
import api from "../../utils/api"
import {useParams} from "react-router-dom";
import useApi from "../../hooks/useApi";



const PostPage = () => {
  const { postId } = useParams();
  
  const handleGetPost = useCallback(() => api.getPostById(postId), [postId]);
  const { data: post } = useApi(handleGetPost);
  // console.log("автор-----------------", post);
  // console.log("автор-----------------", postById);


  
   return (
       
        
        <>
          
      
           <Post {...post}/>
       

            
        </>
      );
}


export default PostPage;