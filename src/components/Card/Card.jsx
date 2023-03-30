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
import { isLiked } from "../../utils/posts";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { CardContext } from "../../context/cardContext";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link } from "react-router-dom";

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
const RecipeReviewCard = ({
  image,
  likes,
  title,
  created_at,
  text,
  author,
  currentUser,
  _id,
}) => {
  
  const [expanded, setExpanded] = React.useState(false);
  // const { user: currentUser } = useContext(UserContext);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const liked = isLiked(likes, currentUser?._id);
  const { handleLike } = useContext(CardContext);
  const handleLikeClick = () => {
    // console.log("click");
    // console.log("likes" ,likes);
    // console.log(isLiked);
    handleLike({ _id, likes })
    
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
      <Link to={`/post/${_id}`}>
        <CardMedia component="img" height="194" image={image} alt="Paella dish" />
      </Link>
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
            sx={liked ? { color: red[500] } : { color: grey[500] }}
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


export default RecipeReviewCard