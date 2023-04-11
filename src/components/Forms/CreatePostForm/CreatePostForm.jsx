import React from "react";
import { useForm } from "react-hook-form";
import s from "./CreatePostForm.module.css";
import cn from "classnames";
import api from "../../../utils/api";
import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';

const CreatePostForm = ({handleClose}) => {

    const { register, handleSubmit, formState, reset} = useForm();

    const onSubmit = async (data) => {
        const newPost = await api.addNewPost({...data, tags: data.tags.split(",")});
        console.log({newPost});
        console.log(data);
        // reset();
        handleClose(true);
    }

    return (
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <Stack direction="row" justifyContent="flex-end">
                <CloseIcon onClick={handleClose}/>
            </Stack>
            <h3 className={s.title}>Создать пост</h3>
            <input className={s.input}
                {...register('image', {
                    required: true,
                })}
                type="text" 
                placeholder="url картинки поста"
            />
            <input className={s.input}
                {...register('title', {
                    required: true,
                } )}
                type="text" 
                placeholder="Заголовок поста"
            />
            <textarea className={cn(s.textarea, s.input)}
                {...register('text')}
                type="text" 
                placeholder="Текст поста"
            />
            <input className={s.input}
                {...register('tags')}
                type="text" 
                placeholder="Введите теги через запятую"
            />

            <button className={s.button} type='reset'>Отмена</button>
            <button className={s.button} >Создать</button>
        </form>
    )
};

export default CreatePostForm;