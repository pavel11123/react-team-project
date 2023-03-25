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
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const AppHeader = ({user, updateUserHandle}) => {
  
  const handleClickButtonEdit = (e) => {
    e.preventDefault();
    updateUserHandle({name: "Анастасия Мысник", about: 'Ученик'})
  }

  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar>
          <IconButton
            edge="start"
            size="large"
            color="inherit"
            aria-label="menu"
          >
            <CookieIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            React-team-project
          </Typography>
          <IconButton edge="start" size="large" color="inherit">
            <AccountCircleIcon />
          </IconButton>
          <div className={s.user}>
          {user?.email && <span>{user?.email}</span>}
          {user?.name && <span>{user?.name}</span>}
          <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={handleClickButtonEdit}>Изменить</Button>
          </Stack>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppHeader;
