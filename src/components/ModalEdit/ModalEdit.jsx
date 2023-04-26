import React from "react";
import s from "./ModalEdit.module.scss";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import cn from "classnames";
import EditIcon from '@mui/icons-material/Edit';
import EditPostForm from "../Forms/EditPostForm/EditPostForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 800,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};

export default function ModalEdit({postInfo}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log("postInfoModal", postInfo);

  // const editPostOnClick = () => {
  //   // handleDeletePost();
  //   handleClose(true);
  //   // navigate(-1);
  // }

  return (
    <>
      <EditIcon 
        sx={{ fontSize: 26 }}
        onClick={handleOpen}
        color="action"
      />
{/*       
      <IconButton
        aria-label="settings"
        className={cn(s.settings)}
        onClick={handleOpen}
      >
        <MoreVertIcon />
      </IconButton> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <EditPostForm {...postInfo} handleClose={handleClose}/>
        </Box>
      </Modal>
    </>
  );
}
