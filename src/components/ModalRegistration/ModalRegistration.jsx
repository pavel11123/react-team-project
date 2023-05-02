import React, { Children } from "react";
import s from "./ModalRegistration.module.scss";
import cn from "classnames";

const ModalRegistration = ({ activeModal, children, setActiveModal }) => {
  return (
    <>
      <div
        className={cn(s.modal, {
          [s.active]: activeModal,
        })}
      >
        <div
          className={cn(s.modalContent, {
            [s.active]: activeModal,
          })}
          onClick={(event) => event.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default ModalRegistration;
