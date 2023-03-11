import React from "react";
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

import s from "./Card.module.css";

import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { grey, red } from "@mui/material/colors";

import dayjs from "dayjs";
import "dayjs/locale/ru";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.locale("ru");
dayjs.extend(relativeTime);

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({
  image,
  likes,
  title,
  created_at,
  text,
  author,
  currentUser,
  onPostLike,
  _id,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const isLiked = likes.some((id) => id === currentUser?._id);
  const handleLikeClick = () => {
    console.log("click");
    console.log(likes);
    console.log(isLiked);
    onPostLike({ _id, likes });
  };

  return (
    <Card className={s.card__hover}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            <img className={s.avatar__image} src={author.avatar} alt="" />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={author.name}
        subheader={dayjs(created_at).fromNow()}
      />
      <CardMedia component="img" height="194" image={image} alt="Paella dish" />
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
            // className={isLiked ? s.favourite_active : s.favourite}
            onClick={handleLikeClick}
            sx={isLiked ? { color: red[500] } : { color: grey[500] }}
          />
          {likes.length !== 0 && <span>{likes.length}</span>}
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        ></ExpandMore>
      </CardActions>
    </Card>
  );
}
