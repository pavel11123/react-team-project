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
  Box,
  Button,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import dayjs from "dayjs";
const Post = ({
  image,
  likes,
  title,
  text,
  author,
  currentUser,
  created_at,
  onPostLike,
  _id,
}) => {
  const navigate = useNavigate();

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
      <Card sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          sx={{ width: 800 }}
          image={image}
          alt="Paella dish"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", flexDirection: "column", pl: 3, pb: 1 }}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe">
                  <img
                    className={s.avatar__image}
                    src={author?.avatar}
                    alt=""
                  />
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
          </Box>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
              {/* {likes.length !== 0 && <span>{likes.length}</span>} */}
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Box>
      </Card>
    </Container>
  );
};

export default Post;
