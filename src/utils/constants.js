export const REGEXP_EMAIL = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
export const REGEXP_PASSWORD = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const VALIDATE_MESSAGE = {
  requiredMessage: "Обязательное поле",
  nameMessage: "Минимум 3 символa",
  emailMessage: "Не валидный email",
  passwordMessage:
    "Пароль должен содержать минимум восемь символов, одну букву латинского алфавита и одну цифру",
  // groupMassage: 'Группа должна быть в формате: group-10',
};
