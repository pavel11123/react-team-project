import React from "react";
import { Typography, Box, Link } from "@mui/material";
import s from "./Footer.module.css";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          typography: "body1",
          "& > :not(style) + :not(style)": {
            ml: 2,
          },
        }}
        // onClick={preventDefault}
      >
        <Typography paragraph>Авторы проекта:</Typography>

        <Link href="#" underline="hover">
          Анастасия Арсений Павел
        </Link>

        <Typography paragraph>2023</Typography>
        <CopyrightIcon />
      </Box>
    </footer>
  );
};

export default Footer;
