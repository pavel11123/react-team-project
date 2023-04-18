import React from "react";
import s from "./ProfilePage.module.scss";
import cn from "classnames";
import api from "../../utils/api";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

const ProfilePage = () => {
  const { user, handleUpdataUser, setActiveModal } = useContext(UserContext);
  console.log(user);

  return (
    <>
      <Container className={s.container}>
        <div className="container__main">
          <div className={cn(s.wrapper, "d-fl-wrap")}>
            <div className={cn(s.profile, "d-fl-col")}>
              <Card className={cn(s.card, "d-fl-col")}>
                <CardMedia
                  className={s.img}
                  image={user?.avatar}
                  title={user?.name}
                />
                <CardContent className={cn(s.content, "d-fl-col")}>
                  <div className={cn(s.portfolio, "d-fl-wrap")}>
                    <h5>Моё портфолио</h5>
                    <span>{user?.group}</span>
                  </div>
                  <div className={cn(s.name, "d-fl")}>
                    <span>ФИО</span>
                    <span>{user?.name}</span>
                  </div>
                  <div className={cn(s.description, "d-fl")}>
                    <span>Описание</span>
                    <span>{user?.about}</span>
                  </div>
                  <div className={cn(s.email, "d-fl")}>
                    <span>Email</span>
                    <span>{user?.email}</span>
                  </div>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className={cn(s.info, "d-fl-col")}>
              <Card className={cn(s.card, "d-fl-col")}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>

              <Card className={cn(s.card, "d-fl-col")}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProfilePage;
