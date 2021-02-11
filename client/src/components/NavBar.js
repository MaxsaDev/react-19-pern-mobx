import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
  const {user} = useContext(Context)
  return (
    <>
      <Container>
        <Navbar bg="dark" variant="dark">
          <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>Магазин</NavLink>
          {user.isAuth
            ?
            <Nav className="ml-auto" style={{color: 'white'}}>
              <Button variant={"outline-light"}>Панель администратора</Button>
              <Button variant={"outline-light"} className={'ml-2'}>Войти</Button>
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