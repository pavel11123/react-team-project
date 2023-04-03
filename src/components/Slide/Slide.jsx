import React from "react";
import s from "./Slide.module.scss";
import cn from "classnames";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Slide({
  image,
  author,
  text,
  _id,
  title,
  tags,
  created_at,
}) {
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
            <div className={cn(s.content__info, "d-fl")}>
              <Typography className={s.author}>{author.name}</Typography>
              <Typography className={s.date}>
                {created_at.substr(0, 10)}
              </Typography>
            </div>

            <Typography className={s.title}>{title}</Typography>

            <Typography
              className={s.description}
              variant="body1"
              color="text.secondary"
            >
              {text}
            </Typography>

            <span className={tags.length > 0 ? s.tags__active : s.tags}>
              {tags}
            </span>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
