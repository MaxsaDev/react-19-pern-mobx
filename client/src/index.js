/*
axios - для того, чтобы отправлять запросы на сервер
react-router-dom - для постраничной навигации
mobx - стейт менеджер
mobx-react-lite - для того, чтобы связать mobx с функциональными компоненитами React
react-bootstrap bootstrap
*/
/*
store - хранение данных mobx
pages - корневые компоненты, которые будут являться страницами
components -
*/

import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={
    {
      user: new UserStore(),
      device: new DeviceStore(),
    }
  }>
    <App/>
  </Context.Provider>,
  document.getElementById('root')
);
