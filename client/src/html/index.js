import axios from 'axios'

//Создаем 2 instance
//Не будет требовать авторизации
const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})


//Будет подставляться header Autorization и туда будет добавляться token
const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})
//Нам необходимо подставлять автоматически token к каждому запросу
//Существует функция Interceptor, которая просто принимает config
//token будем получать из локального хранилища по ключу token
//при авторизации мы его будем туда добавлять
const authInterceptor = config => {
  config.headers.autorization = `Bearer ${localStorage.getItem('token')}`
  return config
}

//для instance authHost добавляем interceptor для запроса
//и он будет обрабатывать каждый запрос и подставлять token в header Autorization
$authHost.interceptors.request.use(authInterceptor)

export {
  $host,
  $authHost
}