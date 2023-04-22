import React, { useContext } from "react";
import { Container } from "@mui/system";
import { Button, Typography } from "@mui/material";
import s from "./EditProfileForm.module.scss";
import { useNavigate } from "react-router-dom";
import { Input } from "@mui/material";
import api from "../../../utils/api";
import { useForm } from "react-hook-form";
import Stack from "@mui/material/Stack";
import { UserContext } from "../../../context/userContext";

const EditProfileForm = ({ handleClose }) => {
  const { user, setCurrentUser } = useContext(UserContext);
  console.log({ user });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const sendProfileData = async (data) => {
    console.log("data--->", data);
    try {
      const newUser = await api.updateUserInfo(
        { name: data.name, about: data.about },
        token
      );
      console.log({ newUser });
      setCurrentUser({ ...newUser });
    } catch (error) {
      console.log(error);
    }
    navigate("/profile");
  };

  const sendAvatar = async ({ avatar }) => {
    console.log({ avatar });
    try {
      const newUser = await api.updateAvatar({ avatar: avatar }, token);
      setCurrentUser({ ...newUser });
    } catch (error) {}
  };

  const required = {
    required: {
      value: true,
    },
  };

  return (
    <Container>
      <div>
        <Button
          sx={{ marginBottom: "10px", marginTop: "40px" }}
          variant="contained"
          onClick={() => navigate(-1)}
        >
          Назад
        </Button>
      </div>
      <Typography variant="h3" color="title">
        Мои данные
      </Typography>

      <div className={s.wrapper}>
        {user?.name && user?.about && user?.avatar && (
          <>
            <form onSubmit={handleSubmit(sendAvatar)} className={s.form}>
              <div className={s.profile__avatar}>
                <div className={s.img}>
                  <img
                    className={s.profile__avatar__img}
                    src={user?.avatar}
                    alt=""
                  />
                </div>

                <Input
                  {...register("avatar", required)}
                  defaultValue={user?.avatar}
                  placeholder="avatar"
                ></Input>
                <Stack direction="flex" flexDirection="column" gap="15px">
                  <Button variant="outlined" type="submit">
                    ИЗМЕНИТЬ
                  </Button>
                </Stack>
              </div>
            </form>

            <form onSubmit={handleSubmit(sendProfileData)} className={s.form}>
              <div className={s.profile}>
                <Input
                  {...register("name", required)}
                  defaultValue={user?.name}
                  type="text"
                  placeholder="name"
                ></Input>
                <Input
                  {...register("about", required)}
                  defaultValue={user?.about}
                  placeholder="about"
                ></Input>
                <Input
                  {...register("email")}
                  disabled
                  defaultValue={user?.email}
                  placeholder="email"
                ></Input>
                <Input
                  {...register("id")}
                  disabled
                  defaultValue={user?._id}
                  placeholder="id"
                ></Input>
                <Stack direction="flex" flexDirection="column" gap="15px">
                  <Button variant="outlined" type="submit">
                    СОХРАНИТЬ
                  </Button>
                </Stack>
              </div>
            </form>
          </>
        )}
      </div>
    </Container>
  );
};

export default EditProfileForm;
