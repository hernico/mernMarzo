import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CreateProduct from "../components/createProduct";
import ProductList from "../components/productList";

function Product() {

  return (

    <Container>
      <h1 className="text-center">Pantalla de Tareas</h1>
      <Row>
        <Col xs='5' className='p-4 bg-secondary'>
          <CreateProduct />
        </Col>
        <Col xs='7' className='p-3 bg-warning'>
          <ProductList />
        </Col>
      </Row>
    </Container>

  );
}

export default Product;