import React, { useEffect, useState } from "react";
import s from "./RegistrationForm.module.css";
import { useForm } from "react-hook-form";
import { Input } from "@mui/material";
import { REGEXP_EMAIL, REGEXP_PASSWORD, VALIDATE_MESSAGE } from "../../../utils/constants";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import api from "../../../utils/api";

const RegistrationForm = ({ setActiveModal }) => {
    const {register, handleSubmit, formState: {errors}} = useForm({mode: 'onBlur'});
    const [ type, setType] = useState(false);

    const navigate = useNavigate();

    const nameRegister = register('name', {
        required: VALIDATE_MESSAGE.requiredMessage,
        minLength: {
        value: 3,
        message: VALIDATE_MESSAGE.nameMessage,
        },
    });

    const emailRegister = register('email', {
        required: VALIDATE_MESSAGE.requiredMessage,
        pattern: {
            value: REGEXP_EMAIL,
            message: VALIDATE_MESSAGE.emailMessage,
        }
    });
    
    const passwordRegister = register('password', {
        required: VALIDATE_MESSAGE.requiredMessage,
        pattern: {
            value: REGEXP_PASSWORD,
            message: VALIDATE_MESSAGE.passwordMessage,
        }
    });

    const handleClick = (e) => {
        e.preventDefault();
        navigate("/login");
        console.log(e);
    }

    const sendData = async (dataAuth) => {
        try {
        console.log('dataAuth--->', dataAuth);
        const result = await api.registerUser({...dataAuth, group:'DN'});
        console.log('result--->', {result});
        navigate("/login");
        } catch (error) {
            console.log('error--->', error);
         }
    };

    useEffect (()=> {
        setActiveModal(true)
    }, [setActiveModal]);


    return (
        <>
        {/* <Stack className={s.icon} direction="row" justifyContent="flex-end">
        <CloseIcon fontSize="smoll"/>
        </Stack> */}
        <form className={s.form} onSubmit={handleSubmit(sendData)}>
            <h3 className={s.title}>Регистрация</h3>
            <Input
                {...nameRegister}
                placeholder="name"
            />
            {errors?.name && (
                <p className={s.errorMessage}>{errors.name?.message}</p>
            )}
            <Input
                 {...emailRegister}
                placeholder="email"
            />
            {errors?.email && (
                <p className={s.errorMessage}>{errors.email?.message}</p>
            )}
            <div className={s.form__eyeWrapper}>
            <Input
                type={ type ? 'text' : 'password'}
                {...passwordRegister}
                placeholder="password"
            />
            <span className={s.form__eye} onClick={()=> setType(!type)}>
                {type ? (
                <RemoveRedEyeIcon fontSize="small"/>) : (
                <VisibilityOffIcon fontSize="small"/>
            )}
            </span>
            </div>
            {errors?.password && (
                <p className={s.errorMessage}>{errors.password?.message}</p>
            )}
            <p className={s.description}>Регистрируясь на сайте, вы соглашаетесь с нашими Правилами и Политикой
                конфиденциальности и соглашаетесь
                на информационную рассылку.</p>
            <Stack direction="flex" flexDirection="column" gap="15px" >
                <Button variant="outlined" type="submit">Зарегистрироваться</Button>
                <Button variant="outlined" onClick={handleClick}>Войти</Button>
            </Stack>
        </form>
        </>
    )
};

export default RegistrationForm;

// "donya1@mail.ru"
// "Boris"
// password:"123qweasd"