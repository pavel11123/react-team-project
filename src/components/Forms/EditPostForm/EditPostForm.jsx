import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import s from "./EditPostForm.module.scss";
import api from "../../../utils/api";
import Stack from "@mui/material/Stack";
import CloseIcon from "@mui/icons-material/Close";
import { CardContext } from "../../../context/cardContext";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";

const EditPostForm = ({ image, text, title, tags, _id, handleClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const { posts, setPosts, token } = useContext(CardContext);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log("data---->", data);
    try {
      const newPost = await api.editPost(
        token,
        {
          image: data.image,
          tags: data.tags.split(","),
          text: data.text,
          title: data.title,
        },
        _id
      );
      const newPosts = posts.map((post) => {
        return post._id === newPost._id ? newPost : post;
      });
      setPosts(newPosts);
    } catch (error) {
      console.log(error);
    }
    navigate(-1);
    handleClose(true);
  };

  const required = {
    required: {
      value: true,
    },
  };

  return (
    <>
      <Stack className={s.icon} direction="row" justifyContent="flex-end">
        <CloseIcon onClick={handleClose} />
      </Stack>
      <div className={s.wrapper}>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <Typography className={s.title} variant="h4" color="title">
            Редактировать пост
          </Typography>
          <TextField
            id="standard-multiline-flexible"
            label="url картинки поста"
            multiline
            fullWidth
            maxRows={2}
            variant="standard"
            {...register("image", {
              required: true,
            })}
            type="text"
            placeholder="url картинки поста"
            defaultValue={image}
          />
          <TextField
            id="standard-multiline-flexible"
            label="Заголовок поста"
            multiline
            fullWidth
            maxRows={4}
            variant="standard"
            {...register("title", {
              required: true,
            })}
            type="text"
            placeholder="Заголовок поста"
            defaultValue={title}
          />

          <TextField
            id="standard-multiline-flexible"
            label="Текст поста"
            multiline
            fullWidth
            maxRows={5}
            variant="standard"
            size={"width: 100%"}
            {...register("text")}
            type="text"
            placeholder="Текст поста"
            defaultValue={text}
          />

          <TextField
            id="standard-multiline-flexible"
            label="Теги поста"
            multiline
            fullWidth
            maxRows={4}
            variant="standard"
            {...register("tags")}
            type="text"
            placeholder="Введите теги через запятую"
            defaultValue={tags}
          />

          <Stack direction="flex" flexDirection="column" gap="15px">
            <Button variant="outlined" type="reset">
              ОТМЕНА
            </Button>
            <Button variant="outlined" type="submit">
              СОХРАНИТЬ
            </Button>
          </Stack>
        </form>
      </div>
    </>
  );
};

export default EditPostForm;
