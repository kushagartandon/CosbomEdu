import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import Rating from '../components/Rating'
// import products from '../products'


const ProductScreen = ({match}) => {

  const [product, setProduct] = useState({})
  useEffect(() => {
    const fetchProducts = async () => {
      const {data} = await axios.get(`/api/products/${match.params.id}`)
      setProduct(data)
    }
    fetchProducts()
  },[match])
  //const product = products.find(p => p._id === match.params.id)

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>Go Back</Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid/>
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} Reviews`}/>
            </ListGroup.Item>
            <ListGroup.Item>
              Price: ₹{product.price}
            </ListGroup.Item>
            <ListGroup.Item>
              Description: {product.description}
            </ListGroup.Item>
           </ListGroup>
        </Col>
        <Col md={3}>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>
                  Price:
                  </Col>
                  <Col>
                  <strong>₹{product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>{product.countInStock > 0 ? 'Available' : 'Not Available'}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className='btn-block' type='button'>Add To Bag</Button>
              </ListGroup.Item>
            </ListGroup>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
