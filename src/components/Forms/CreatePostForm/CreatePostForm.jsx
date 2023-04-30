import React, { useCallback, useContext } from "react";
import { useForm } from "react-hook-form";
import s from "./CreatePostForm.module.scss";
import cn from "classnames";
import api from "../../../utils/api";
import Stack from "@mui/material/Stack";
import CloseIcon from "@mui/icons-material/Close";
import { CardContext } from "../../../context/cardContext";

const CreatePostForm = ({ handleClose }) => {
  const { register, handleSubmit, formState, reset } = useForm();
  const { token, posts, setPosts } = useContext(CardContext);
  console.log("token1--->", token);

  const onSubmit = (data) => {
    return api
      .addNewPost({ ...data, tags: data.tags.split(",") }, token)
      .then((newPost) => {
        setPosts([newPost, ...posts]);
        handleClose(true);
      });
  };

  return (
    <>
      <Stack className={s.icon} direction="row" justifyContent="flex-end">
        <CloseIcon onClick={handleClose} />
      </Stack>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <h3 className={s.title}>Создать пост</h3>
        <input
          className={s.input}
          {...register("image", {
            required: true,
          })}
          type="text"
          placeholder="url картинки поста"
        />
        <input
          className={s.input}
          {...register("title", {
            required: true,
          })}
          type="text"
          placeholder="Заголовок поста"
        />
        <textarea
          className={cn(s.textarea, s.input)}
          {...register("text")}
          type="text"
          placeholder="Текст поста"
        />
        <input
          className={s.input}
          {...register("tags")}
          type="text"
          placeholder="Введите теги через запятую"
        />

        <button className={s.button} type="reset">
          Отмена
        </button>
        <button className={s.button}>Создать</button>
      </form>
    </>
  );
};

export default CreatePostForm;
