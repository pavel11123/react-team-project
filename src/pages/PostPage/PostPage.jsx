import React from "react";
import { useCallback } from "react";
import AppHeader from "../../components/AppHeader/AppHeader";
import Footer from "../../components/Footer/Footer";
import Post from "../../components/Post/Post";
import api from "../../utils/api"
import {useParams} from "react-router-dom";
import useApi from "../../hooks/useApi";
import { useEffect } from "react";
import { useState } from "react";
import RecipeReviewCard from "../../components/Card/Card";


const PostPage = () => {
  const { postId } = useParams();
  // const [post, setPost] = useState([]);
  // const [currentUser, setCurrentUser] = useState(null);
  

  // useEffect(() => {
  //   Promise.all([api.getUserInfo(), api.getPostById(postId)])
  //     .then(([userData, postData]) => {
  //       setCurrentUser(userData);
  //       setPost(postData);
        
  //     })
  //     .catch((err) => console.error(err));
  // }, []);
  const handleGetPost = useCallback(() => api.getPostById(postId), [postId]);
  const { data: postById, error: isError } = useApi(handleGetPost);
  
  console.log("--------------------------------", );

// const handlePostLike = (post) => {
  
//     const isLiked = post.likes.some((id) => id === currentUser._id);

//     api.changeLikePost(post._id, isLiked).then((newPost) => {
//       const newPosts = posts.map((post) => {
//         // console.log("Старая карточка", post);
//         // console.log("Новая карточка", newPost);
//         return post._id === newPost._id ? newPost : post;
//       });
//       setPosts(newPosts);
//     });
//   };
   return (
        //   <>
        //     {isLoading ? (
        //             <div >
        //                 Тут будет лоадер
        //             </div>
        //         ) : (
        //         !isError && <Post  />)}
        //     {isError ? (
        //         <div >
        //         Тут будет нотфаундпэйдж
        //     </div>
        //     ): null}
        // </>
        
        <>
          
      
           <Post {...postById}
           
           
           
           />
       

            
        </>
      );
}


export default PostPage;