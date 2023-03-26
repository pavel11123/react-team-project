import { Container } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import s from "./Post.module.css";
import RecipeReviewCard from "../Card/Card";
import {
    Typography,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Avatar,
    IconButton,
  } from "@mui/material";

const Post = ({ 
    image,
    likes,
    title,
    text,
    author,
    currentUser,
    onPostLike,
    _id,
 }) => {
        
        const navigate = useNavigate();
        console.log('=');
    return (
    <>
        <div>
            <a href="#" onClick={() => navigate(-1)}>Назад</a>
                        
        </div>
        <Card className={s.card__hover}>
      
      
        <CardMedia component="img" height="194" image={image} alt="Paella dish" />
        
      <CardContent>
        <Typography variant="h7" color="title">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
     
    </Card>
    </>
    )
}



export default Post;