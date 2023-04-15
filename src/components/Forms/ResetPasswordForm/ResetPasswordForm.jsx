import React from "react";
import {useForm} from "react-hook-form";
import s from "../RegistrationForm/RegistrationForm.module.css";
import { Input } from "@mui/material";
import { REGEXP_EMAIL, VALIDATE_MESSAGE } from "../../../utils/constants";
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const ResetPasswordForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({mode: 'onBlur'});

    const sendData = (data) => {
        console.log('data-->', data);
    }

    const emailRegister = register('email', {
        required: VALIDATE_MESSAGE.requiredMessage,
        pattern: {
            value: REGEXP_EMAIL,
            message: VALIDATE_MESSAGE.emailMessage,
        }
    });

    return (
        <>
        <Stack className={s.icon} direction="row" justifyContent="flex-end" alignItems="center">
        <CloseIcon fontSize="smoll"/>
        </Stack>
        <form className={s.form} onSubmit={handleSubmit(sendData)}>
            <h3 className={s.title}>Восстановление пароля</h3>
            <p className={s.description}>Для получения временного пароля необходимо ввести email, указанный при
                регистрации.</p>
                <Input
                 {...emailRegister}
                placeholder="email"
            />
            {errors?.email && (
                <p className={s.errorMessage}>{errors.email?.message}</p>
            )}
            <p className={s.description}>Срок действия временного пароля 24 ч.</p>
            {/* <button>Отравить</button> */}

            <Stack direction="flex" flexDirection="column" gap="15px" >
                <Button variant="outlined" type="submit">Отравить</Button>
            </Stack>
        </form>
        </>
    );
   
};

export default ResetPasswordForm;