import React from "react";
import { Container } from "@mui/material";
import s from "./InfoHeader.module.css";
import BasicModal from "../Modal/Modal";

const InfoHeader = () => {
  return (
    <section className="modal__section">
      <Container>
        <div className="container__main">
          <BasicModal />
        </div>
      </Container>
    </section>
  );
};

export default InfoHeader;
