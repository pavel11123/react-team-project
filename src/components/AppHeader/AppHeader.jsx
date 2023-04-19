import s from "./AppHeader.module.css";
import React from "react";
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import CookieIcon from "@mui/icons-material/Cookie";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";

const AppHeader = ({ user, updateUserHandle, setActiveModal }) => {
  return (
    <AppBar position="sticky" className={s.header}>
      <Container>
        <Toolbar className={s.toolbar}>
          <IconButton
            edge="start"
            size="large"
            color="inherit"
            aria-label="menu"
          >
            <Link to="/">
              <CookieIcon />
            </Link>
          </IconButton>
          <Typography className={s.title} variant="h6" sx={{ flexGrow: 1 }}>
            React-team-project
          </Typography>

          <div className={s.toolbarInfo}>
            <Link to="/profile">
              <IconButton
                className={s.userIcon}
                edge="start"
                size="large"
                color="inherit"
              >
                <AccountCircleIcon />
              </IconButton>
            </Link>
            <Link to="/favourites" className={s.favourites}>
              <IconButton size="large" color="inherit">
                <FavoriteIcon />
              </IconButton>
            </Link>
            <Link to={"/registration"} onClick={() => setActiveModal(true)}>
              <IconButton size="large" color="inherit">
                <LoginIcon fontSize="medium" />
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppHeader;
