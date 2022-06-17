import React from 'react'
import {useParams} from 'react-router-dom'
import {Col , Card , Button} from 'react-bootstrap';
import {NavLink} from "react-router-dom";

function Product(props) {
  const {product,AddToCart} = props;

  return (
    
      <Col>
             
            <Card style={{ width: '22rem', height:"20rem" }}  className="text-center box-shadow m-2">
              <Card.Body>
              <NavLink to={`/products/${product._id}`}>
                  <Card.Img variant="top" src={product.img} className="w-50  mx-auto"/>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                    {product.price}
                    </Card.Text>
                </NavLink>
                <Button variant="primary" class="btn btn-danger mx-2" onClick={AddToCart}>Add To Cart</Button>
              </Card.Body>
            </Card>

           
       
      </Col>
  )
}

export default Product