import React from "react";
import s from "./Slide.module.scss";
import cn from "classnames";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Slide({ image, author, text, _id, title, tags }) {
  return (
    <>
      <Card className={cn(s.card, "d-fl-col")}>
        <CardActionArea className={cn(s.card__wrapper)}>
          <CardMedia
            className={s.img}
            component="img"
            height="200"
            image={image}
            alt={title}
          />
          <CardContent className={s.content}>
            <Typography variant="body3" color="text.secondary">
              {author.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography
              className={s.description}
              variant="body1"
              color="text.secondary"
            >
              {text}
            </Typography>
            <span className={s.tags}>{tags}</span>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
