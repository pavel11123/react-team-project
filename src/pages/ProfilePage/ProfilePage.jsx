import React from "react";
import s from "./ProfilePage.module.scss";
import cn from "classnames";
import api from "../../utils/api";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import Chip from "@mui/material/Chip";

const ProfilePage = ({ slide, countLike, users, countSlide, countLikeMe }) => {
  const {
    user,
    handleUpdataUser: updateUserHandle,
    setActiveModal,
  } = useContext(UserContext);

  const navigate = useNavigate();

  const handleClickButtonEdit = (e) => {
    e.preventDefault();
    navigate("/profileform");
    updateUserHandle({
      name: "React Team Project",
      about: "Front-end development team",
    });
  };

  return (
    <>
      <Container className={s.container}>
        <div className="container__main">
          <div className={cn(s.wrapper)}>
            <div className={cn(s.profile, "d-fl-col")}>
              <Card className={cn(s.card, "d-fl-col")}>
                <CardMedia
                  className={s.img}
                  image={user?.avatar}
                  title={user?.name}
                />
                <CardContent className={cn(s.content, "d-fl-col")}>
                  <div className={cn(s.portfolio, "d-fl-wrap")}>
                    <Typography gutterBottom variant="h5" component="h5">
                      Моё портфолио
                    </Typography>
                    <Typography gutterBottom variant="h6" component="span">
                      {user?.group}
                    </Typography>
                  </div>
                  <div className={cn(s.name, "d-fl")}>
                    <Typography
                      gutterBottom
                      variant="h7"
                      component="span"
                      className={s.subtitle}
                    >
                      Автор
                    </Typography>
                    <Typography gutterBottom variant="h7" component="span">
                      {user?.name}
                    </Typography>
                  </div>
                  <div className={cn(s.description, "d-fl")}>
                    <Typography
                      gutterBottom
                      variant="h7"
                      component="span"
                      className={s.subtitle}
                    >
                      Информация
                    </Typography>
                    <Typography gutterBottom variant="h7" component="span">
                      {user?.about}
                    </Typography>
                  </div>
                  <div className={cn(s.email, "d-fl")}>
                    <Typography
                      gutterBottom
                      variant="h7"
                      component="span"
                      className={s.subtitle}
                    >
                      Email
                    </Typography>
                    <Typography gutterBottom variant="h7" component="span">
                      {user?.email}
                    </Typography>
                  </div>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>

                  <Stack spacing={2} direction="row">
                    <Button variant="contained" onClick={handleClickButtonEdit}>
                      Изменить
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </div>
            <div className={cn(s.info, "d-fl-col")}>
              <Card className={cn(s.card, "d-fl-col")}>
                <CardContent>
                  <div className={cn(s.headerCard, "d-fl")}>
                    <Typography gutterBottom variant="h5" component="span">
                      Статистика СберУниверситета
                    </Typography>

                    <div className={cn(s.search, "d-fl")}>
                      <IconButton>
                        <SearchIcon />
                      </IconButton>

                      <Button variant="contained">Поиск</Button>
                    </div>
                  </div>

                  <div className={cn(s.contentCard, "d-fl-col")}>
                    <div className={cn(s.contentCardBlock, "d-fl")}>
                      <Typography variant="body2" color="text.secondary">
                        Общее количество постов <br />в проекте от
                        СберУниверситета
                      </Typography>
                      <Chip label={slide} color="primary" className={s.chip} />
                    </div>

                    <div className={cn(s.contentCardBlock, "d-fl")}>
                      <Typography variant="body2" color="text.secondary">
                        Общее количество лайков <br />
                        на всех постах от СберУниверситета
                      </Typography>
                      <Chip
                        label={countLike}
                        color="primary"
                        className={s.chip}
                      />
                    </div>

                    <div className={cn(s.contentCardBlock, "d-fl")}>
                      <Typography variant="body2" color="text.secondary">
                        Общее количество авторов <br />
                        зарегестрированных в СберУниверситете
                      </Typography>
                      <Chip label={users} color="primary" className={s.chip} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className={cn(s.card, "d-fl-col")}>
                <CardContent>
                  <div className={cn(s.headerCard, "d-fl")}>
                    <Typography gutterBottom variant="h5" component="span">
                      Статистика ReactTeamProject
                    </Typography>

                    <div className={cn(s.search, "d-fl")}>
                      <Button variant="contained">Поиск</Button>
                    </div>
                  </div>

                  <div className={cn(s.contentCard, "d-fl-col")}>
                    <div className={cn(s.contentCardBlock, "d-fl")}>
                      <Typography variant="body2" color="text.secondary">
                        Общее количество постов <br />в проекте ReactTeamProject
                      </Typography>
                      <Chip
                        label={countSlide}
                        color="primary"
                        className={s.chip}
                      />
                    </div>

                    <div className={cn(s.contentCardBlock, "d-fl")}>
                      <Typography variant="body2" color="text.secondary">
                        Общее количество лайков <br />
                        на постах ReactTeamProject
                      </Typography>
                      <Chip
                        label={countLikeMe}
                        color="primary"
                        className={s.chip}
                      />
                    </div>

                    <div className={cn(s.contentCardBlock, "d-fl")}>
                      <Typography variant="body2" color="text.secondary">
                        Количество авторов <br />
                        разрабатывавших проект
                      </Typography>
                      <Chip label="3" color="primary" className={s.chip} />
                    </div>
                  </div>
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
