import { body } from 'express-validator';

export const registerValidation = [
  body('name', 'Укажите имя').isLength({ min: 3 }),
  body('email', 'Неверный формат почты').isEmail(),
  body(
    'password',
    'Пароль должен быть минимум 6 символов, содержать одну заглавную и строчную буквы',
  )
    .isLength({ min: 6 })
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/),
];
