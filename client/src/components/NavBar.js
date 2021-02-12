import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useHistory} from 'react-router-dom';

const NavBar = observer(() => {
  const {user} = useContext(Context)
  const history = useHistory()
  return (
    <>
      <Container>
        <Navbar bg="dark" variant="dark">
          <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>Магазин</NavLink>
          {user.isAuth
            ?
            <Nav className="ml-auto" style={{color: 'white'}}>
              <Button variant={"outline-light"} onClick={() => history.push(ADMIN_ROUTE)}>Панель администратора</Button>
              <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)} className={'ml-2'}>Выйти</Button>
            </Nav>
            :
            <Nav className="ml-auto" style={{color: 'white'}}>
              <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
            </Nav>
          }
        </Navbar>
      </Container>
    </>
  )
    ;
});

export default NavBar;