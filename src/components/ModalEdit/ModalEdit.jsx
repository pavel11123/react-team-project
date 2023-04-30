import React from "react";
import s from "./ModalEdit.module.scss";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import cn from "classnames";
import EditIcon from "@mui/icons-material/Edit";
import EditPostForm from "../Forms/EditPostForm/EditPostForm";

const style = {
  bgcolor: "background.paper",
  border: "2px solid #fff",
  borderRadius: "20px",
  boxShadow: 24,
};

export default function ModalEdit({ postInfo }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log("postInfoModal", postInfo);

  return (
    <>
      <EditIcon sx={{ fontSize: 26 }} onClick={handleOpen} color="action" />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={s.modal}
      >
        <Box sx={style} className={s.box}>
          <EditPostForm {...postInfo} handleClose={handleClose} />
        </Box>
      </Modal>
    </>
  );
}
