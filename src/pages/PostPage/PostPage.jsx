import React from "react";
import { useCallback } from "react";
import Post from "../../components/Post/Post";
import api from "../../utils/api";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { CardContext } from "../../context/cardContext";
import { useContext } from "react";
import s from "./PostPage.module.scss";
import { Container } from "@mui/material";

const PostPage = () => {
  const { postId } = useParams();
  const { handleLike, token } = useContext(CardContext);

  const handleGetPost = useCallback(
    () => api.getPostById(postId, token),
    [postId, token]
  );
  const { data: post, setData: setPost } = useApi(handleGetPost);
 
  const handleProductLike = useCallback(() => {
    handleLike(post).then((updatePost) => {
      setPost(updatePost);
    });
  }, [post, setPost, handleLike]);

  return (
    <div className={s.wrapper}>
      <Container className={s.containerPost}>
        <Post {...post} onProductLike={handleProductLike} />
      </Container>
    </div>
  );
};

export default PostPage;
