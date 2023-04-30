import React from "react";
import s from "./Modal.module.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CreatePostForm from "../Forms/CreatePostForm/CreatePostForm";

const style = {
  bgcolor: "background.paper",
  border: "2px solid #fff",
  borderRadius: "20px",
  boxShadow: 24,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={s.wrapper}>
      <Button onClick={handleOpen}>Добавить пост</Button>
      <Modal
        className={s.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={s.box}>
          <CreatePostForm handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}
