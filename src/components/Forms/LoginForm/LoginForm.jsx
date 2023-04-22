import React, { useEffect, useState } from "react";
import s from "../RegistrationForm/RegistrationForm.module.css";
import cn from "classnames";
import { useForm } from "react-hook-form";
import { Input } from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import { REGEXP_EMAIL, REGEXP_PASSWORD, VALIDATE_MESSAGE } from "../../../utils/constants";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import api from '../../../utils/api';

const LoginForm = ({ setActiveModal }) => {
    const { register, handleSubmit, formState: {errors}} = useForm({mode: 'onBlur'});
    const [ type, setType] = useState(false);

    const navigate = useNavigate();
   
    const handleClick = (e) => {
        e.preventDefault();
        navigate("/registration");
    }

    const sendData = async (dataAuth) => {
        try {
          const result = await api.login({...dataAuth});
          console.log('result--->', {result});
          localStorage.setItem('token', result.token);
          navigate('/');
         } catch (error) {
            console.log('error>>>', error.message);
         }
    };

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

    useEffect (()=> {
        setActiveModal(true)
    }, [setActiveModal]);

    return (
        <>
        {/* <Stack className={s.icon} direction="row" justifyContent="flex-end">
        <CloseIcon fontSize="smoll"/>
        </Stack> */}
        <form className={s.form} onSubmit={handleSubmit(sendData)}>
            <h3 className={s.title}>Вход</h3>

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

            <Link 
                to="/reset-password" 
                className={cn(s.links, s.resetPassword)}
                // state={linkState}
            >Восстановить пароль</Link>

            <Stack direction="flex" flexDirection="column" gap="15px" >
                <Button variant="outlined" type="submit">Войти</Button>
                <Button variant="outlined" onClick={handleClick}>Регистрация</Button>
            </Stack>
        </form>
        </>
    )
};

export default LoginForm;