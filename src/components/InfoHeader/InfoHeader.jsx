import React from "react";
import { Container } from "@mui/material";
import s from "./InfoHeader.module.css";
import BasicModal from "../Modal/Modal";

const InfoHeader = () => {
  return (
    <Container>
      <div className="container__main">
        <BasicModal />
      </div>
    </Container>
  );
};

export default InfoHeader;
