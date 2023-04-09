import { Container } from "@mui/system";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import s from "./Post.module.scss";
import ModalDelete from "./../Modal/ModalDelete";
import { CardContext } from "../../context/cardContext";
import cn from "classnames";
import { grey, red } from "@mui/material/colors";

import {
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { isLiked } from "../../utils/posts";

import dayjs from "dayjs";
const Post = ({ image, likes, title, text, author, created_at, _id }) => {
  const navigate = useNavigate();
  const { handleDeletePost, currentUser } = useContext(CardContext);

  const liked = isLiked(likes, currentUser?._id);
  const { handleLike } = useContext(CardContext);
  const handleLikeClick = () => {
    handleLike({ _id, likes });
  };

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
      <Card sx={{ display: "flex", flexWrap: "wrap" }}>
        <CardMedia
          component="img"
          className={cn(s.img)}
          image={image}
          alt="Paella dish"
        />
        <Box
          sx={{ display: "flex", flexDirection: "column", pl: 3, pb: 1 }}
          className={cn(s.content)}
        >
          <CardHeader
            avatar={
              <Avatar aria-label="recipe">
                <img className={s.avatar__image} src={author?.avatar} alt="" />
              </Avatar>
            }
            title={author?.name}
            subheader={dayjs(created_at).fromNow()}
          />
          <CardContent>
            <Typography variant="h7" color="title">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {text}
            </Typography>
          </CardContent>

          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon
                onClick={handleLikeClick}
                sx={liked ? { color: red[500] } : { color: grey[500] }}
              />
              {likes?.length !== 0 && <span>{likes?.length}</span>}
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ModalDelete handleDeletePost={() => handleDeletePost(_id)} />
          </CardActions>
        </Box>
      </Card>
    </Container>
  );
};

export default Post;
