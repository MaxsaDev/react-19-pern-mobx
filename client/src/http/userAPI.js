//Здесь зарегистрируем функции Регистрации, Авторизации и проверки token на валидность
//вместо обычного response деструктурируем только data
//после завершения запроса, по ключу token в локальное хранилище помещаем наш token
//и уже из data достаем token и декодируем
import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password) => {
  const {data} = await $host.post('api/user/registration', {email, password, role: 'ADMIN'})
  localStorage.setItem('token', data.token)
  return jwt_decode(data.token)
}

export const login = async (email, password) => {
  const {data} = await $host.post('api/user/login', {email, password})
  localStorage.setItem('token', data.token)
  return jwt_decode(data.token)
}

export const check = async () => {
  const {data} = await $authHost.get('api/user/auth')
  localStorage.setItem('token', data.token)
  return jwt_decode(data.token)
}