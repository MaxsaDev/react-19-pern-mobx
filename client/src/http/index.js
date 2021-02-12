//Не будет требовать авторизации
//--
//Будет подставляться header Autorization и туда будет добавляться token
//--
//Нам необходимо подставлять автоматически token к каждому запросу
//Существует функция Interceptor, которая просто принимает config
//token будем получать из локального хранилища по ключу token при авторизации мы его будем туда добавлять
//-
//для instance authHost добавляем interceptor для запроса
//и он будет обрабатывать каждый запрос и подставлять token в header Autorization
import axios from "axios";

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = config => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
  return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
  $host,
  $authHost
}