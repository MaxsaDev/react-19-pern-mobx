import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'

const DevicePage = () => {
  const device = {"id": 1,"name": "12 pro max","price": 1500,"rating": 0,"img": "91727b2d-b2af-4cbb-8e7b-5c04868ccb41.jpg","typeId": 1,"brandId": 1,"info": []}
  const description = [
    {id:1, title: 'Оперативная память', description: '256 Гб'},
    {id:2, title: 'Камера', description: '64 Mpx'},
    {id:3, title: 'Процессор', description: 'М1'},
    {id:4, title: 'Количество ядер', description: '8'},
    {id:5, title: 'Аккумулятор', description: '4000'},
  ]
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img}/>
        </Col>
        <Col md={4}>
          <Row className={'d-flex flex-column align-items-center'}>
            <h2>{device.name}</h2>
            <div
              className={'d-flex align-items-center justify-content-center'}
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: 'cover',
                fontSize: 64
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className={'d-flex flex-column align-items-center justify-content-around'}
            style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
          >
            <h3>От {device.price} гривен</h3>
            <Button variant={'outline-dark'}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className={'d-flex flex-column m-3'}>
        <h1>Характеристики</h1>
        {description.map((info, index) =>
          <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
            {info.title}: {info.description}
          </Row>
        )}
      </Row>
    </Container>
  );
};

export default DevicePage;