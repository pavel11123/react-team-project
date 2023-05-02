import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import s from "../RegistrationForm/RegistrationForm.module.scss";
import { Input } from "@mui/material";
import {
  REGEXP_EMAIL,
  VALIDATE_MESSAGE,
  REGEXP_PASSWORD,
} from "../../../utils/constants";
import CloseIcon from "@mui/icons-material/Close";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import cn from "classnames";
import api from "../../../utils/api";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const ResetPasswordForm = ({ setActiveModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const [type, setType] = useState(false);
  const navigate = useNavigate();

  const [tokenResp, setTokenResp] = useState(null);

  const sendData = async (data) => {
    console.log({ data });
    if (!tokenResp) {
      try {
        const res = await api.resetPass(data);
        console.log({ res });
        setTokenResp(true);
      } catch (error) {
        console.log("error-->", error);
      }
    } else {
      console.log({ data });
      try {
        const res = await api.changePass(data.token, {
          password: data.password,
        });
        console.log({ res });
        localStorage.setItem("token", res.token);
        navigate("/");
      } catch (error) {
        console.log("error-->", error);
      }
    }
  };

  const emailRegister = register("email", {
    required: VALIDATE_MESSAGE.requiredMessage,
    pattern: {
      value: REGEXP_EMAIL,
      message: VALIDATE_MESSAGE.emailMessage,
    },
  });

  const passwordRegister = register("password", {
    required: tokenResp ? VALIDATE_MESSAGE.requiredMessage : false,
    pattern: {
      value: REGEXP_PASSWORD,
      message: VALIDATE_MESSAGE.passwordMessage,
    },
  });

  useEffect(() => {
    setActiveModal(true);
  }, [setActiveModal]);

  return (
    <>
      {/* <Stack className={s.icon} direction="row" justifyContent="flex-end" alignItems="center">
        <CloseIcon fontSize="smoll"/>
        </Stack> */}
      <form className={s.form} onSubmit={handleSubmit(sendData)}>
        <h3 className={s.title}>Восстановление пароля</h3>
        <p className={s.description}>
          Для получения временного пароля необходимо ввести email, указанный при
          регистрации.
        </p>
        <Input {...emailRegister} placeholder="email" />
        {errors?.email && (
          <p className={s.errorMessage}>{errors.email?.message}</p>
        )}
        {tokenResp && (
          <>
            <div className={s.form__eyeWrapper}>
              <Input
                className={s.inputPassword}
                type={type ? "text" : "password"}
                {...passwordRegister}
                placeholder="password"
                disabled={!tokenResp}
              />
              <span className={s.form__eye} onClick={() => setType(!type)}>
                {type ? (
                  <RemoveRedEyeIcon fontSize="small" />
                ) : (
                  <VisibilityOffIcon fontSize="small" />
                )}
              </span>
            </div>
            {errors?.password && (
              <p className={s.errorMessage}>{errors.password?.message}</p>
            )}

            <Input
              type={"text"}
              {...register("token", {
                required: tokenResp ? "Токен обязателен" : false,
              })}
              placeholder="token"
              disabled={!tokenResp}
            />
          </>
        )}
        <span
          className={cn(s.links, s.resetPassword)}
          onClick={() => navigate(-1)}
        >
          Назад
        </span>
        <p className={s.description}>Срок действия временного пароля 24 ч.</p>

        <Stack direction="flex" flexDirection="column" gap="15px">
          <Button variant="outlined" type="submit">
            Отравить
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default ResetPasswordForm;
