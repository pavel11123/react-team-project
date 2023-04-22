import s from "./AppHeader.module.scss";
import cn from "classnames";
import React, { useContext } from "react";
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import CookieIcon from "@mui/icons-material/Cookie";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link, useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import { UserContext } from "../../context/userContext";
import LogoutIcon from "@mui/icons-material/Logout";

const AppHeader = ({ setActiveModal }) => {
  const { isAuth } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <AppBar position="sticky" className={s.header}>
      <Container>
        <Toolbar className={s.toolbar}>
          <Link to="/" className={cn(s.logo, "d-fl")}>
            <IconButton
              edge="start"
              size="large"
              color="inherit"
              aria-label="menu"
            >
              <CookieIcon />
            </IconButton>
            <Typography className={s.title} variant="h6" sx={{ flexGrow: 1 }}>
              React-team-project
            </Typography>
          </Link>

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
            {!isAuth ? (
              <Link to={"/login"} onClick={() => setActiveModal(true)}>
                <IconButton size="large" color="inherit">
                  <LoginIcon fontSize="medium" />
                </IconButton>
              </Link>
            ) : (
              <IconButton size="large" color="inherit" onClick={handleLogout}>
                <LogoutIcon fontSize="medium" />
              </IconButton>
            )}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppHeader;
