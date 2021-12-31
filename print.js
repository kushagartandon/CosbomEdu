
// PROSHOP MERN ECOM - Documentation
//React is a single page application framework: browser reads only single index.html and in this there  is only onediv with the id of root.
//Ins src folder index.js -  Import React from 'react' is the entry point which brings in Reacr and React-dom | React-dom has a method called render which takes in our mian app component <App/> and renders it to the element with the id of root.

//in Proshop folder
  Terminal: npx create-react-app frontend
//later in the backend folder er will deal with node, express and DB
  Terminal: cd frontend
          : npm start 
//cleanup the previously build app | remove setupTests.js | App.test| App.css| logo.svg and unwanted comments , keep index.css| add new description | fevicon

//checkout package.json for all the dependencies we are using| start <starts devserver 3000> build<static assets for development> test<testing libraries> eject<customize webpack>

//App.js: remove imports App.css and logo.svg and content within div | conver div to fragment <> empty element
import React from 'react';
const App = () => {
  return (
    <> 
    <h1>Welcome to proshop</h1>
    </>
  );
} 
export default App;

//Remove everything from index.css

// GIT
//install git on your system
// stop the server ctrl+c
  Terminal: ls -a //lists all the folder contents even hidden
// remove .git folder from here as we need it in the root of project and not in frontend
  Terminal: rm -rf .git 
//Move the gitignore file into the root of the project
//gitignore allows you to describe any file and folders you don't want to push to your repo for eg. you odm't want your /node-modules folder pushed which gets created when we rum npm install
// in gitignore
# dependencies
node_modules
node_modules/
//because we are going to have node modules in root which will be our server dependencies and we have one in frontend also. | any node_modules should not be included


# misc
.DS_Store
.env//add env
.env.local
//because later on we will have a .env file which will have all our environment variables <global variables> that can contain sensetive info like <paypal API> <MongoDB URI> which should not be pushed in repo.

// initialize git in root
  Terminal: cd ..                           //get out of frontend
          : git init                       //initializes our repo
          : git add .                      //add everything
          : git status                     //to see what is in staging area except gitignore
          : git commit -m 'React Setup'    //add comment and m flag
          : cd frontend
          : npm start

// Create header footer components and implement react-bootstrap
//in src folder create a folder named components
//any components we create like header | footer | search box | will go in components folder and every screen that we have like home screen | products screen | profile screen | will be in a seperate folder called screen
//create a file Header.js in components
//use template shortcuts : 
//rcc - class based components
//rfc - react functional component
//rafcc - react arrow function component export // use this

//in Header.js 
import React from 'react'
const Header = () => {
  return (
    <header>
      header
    </header>
  )
}
export default Header
//in Footer.js 
import React from 'react'
const Footer = () => {
  return (
    <footer>
      footer
    </footer>
  )
}
export default Header

// in app.js
//header and footer are exported as default so {} is not required while importinh here
import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
    <Header/>
    <main>
       <h1>Welcome to Proshop</h1>
    </main>
    <Footer/>
    </>
  );
}
export default App;

//React Bootstrap
//React Bootstrap is a UI library for react. If we goto components on their website -> buttons instead of using a div with class btn we import it as a react component. Different components take in different props such as varient if we want to change the look of it.  There are other libraries like Material UI for react as well. To get started we can install it with npm but instead you can also use bootswatch (free themes for bootstrap)
//  copy the bootstrap file given (theme file from bootswatch)
// import react bootstrap in index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';
// above index.css

// new terminal 
// in frontend as it is a frontend dependency
  Terminal: cd fronte nd
          : npm i react-bootstrap

// add container from bootstrap
// in App.js
import React from 'react';
import { Container } from 'react-bootstrap'// {} to import more items
//add container in main tag
  <main>
    <Container>
      <h1>Welcome to Proshop</h1>
    </Container>
  </main>

//we need a container in the footer and header as well. Import container and row col to use bootstrap grid
//in Footer.js 
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; Proshop</Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer

//For header goto React-bootstrap->components -> navbar
//paste and modify the template as:
//add font awesome cdn to index.html
// remove dropdown and form | add container move links to right
// Header.js
import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">Proshop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
            <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
            <Nav.Link href="/login"><i className="fas fa-user"></i> Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </header>
  )
}
export default Header

//for custom css and increasing height
// index.css
main{
  min-height: 80vh;
}

//add space from navbar // add classsName py-3
//in app.js
 <main className="py-3">
    <Container>
      <h1>Welcome to Proshop</h1>
    </Container>
 </main> 

//we need data to upload so copy images folder to public
//and products.js file to src folder. products.js has 6 key and value paires. which can be changed later an we move to database
[
  {
    _id: '1',
    name: 'Airpods Wireless Bluetooth Headphones',
    image: '/images/airpods.jpg',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Electronics',
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  }
]
//in src create a folder called screens an create HomeScreen.js
// in HomeScreen.js racfe | loop through porducts use map and make responsive with bootstrap col
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../products'

const HomeScreen = () => {
  return (
    <>
     <h1>Latest products</h1>
     <Row>
      {products.map(product => (
        <Col sm={12} md={6} lg={4} xl={3}>
          <h3>{product.name}</h3>
        </Col>
      ))}   
    </Row> 
    </>
  )
}
export default HomeScreen

// import homescreen in App.js | remove h1 tag and add HomeScreen
import React from 'react';
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
    <>
    <Header/>
    <main className="py-3">
      <Container>
        <HomeScreen />
      </Container>
    </main>
    <Footer/>
    </>
  );
}
export default App;
//we get h3 tag with product names in columns

//in HomeScreen.js remove h3 and add a component named Products and pass product as a prop
//create a new file in components - Product.js to render each product data
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../component/Product'
import products from '../products'
const HomeScreen = () => {
  return (
    <>
     <h1>Latest products</h1>
     <Row>
      {products.map(product => (
        <Col sm={12} md={6} lg={4} xl={3}>
          <Product product={product}/>
        </Col>
      ))}   
    </Row> 
    </>
  )
}
export default HomeScreen

//in Product.js racfe | create a bootstrap card | wrap the product image in <a> tag later in react router we will use link tag add Card.Img | we passed in product as props in homescreen here  to access the props  we use destructuring and pass {product} as argument in this component
//add Card.body and card.text for other info | for star rating we will make a component later till then we use a div with {product.rating}
import React from 'react'
import { Card } from 'react-bootstrap'
const Product = ({product}) => {
  return (
    <Card className='my-3 p-3 rounded'>
        <a href={`/product/${product._id}`}>
          <Card.Img src={product.image} varient='top'/>
        </a>
        <Card.Body>
        <a href={`/product/${product._id}`}>  
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as='div'>
          <div className='my-3'>
            {product.rating} from {product.numReviews} reviews
          </div>
        </Card.Text>
        <Card.Text as='h3'>
            ${product.price}
        </Card.Text>
        </Card.Body>
    </Card>
  )
}
export default Product


//create rating component `
import React from 'react'

const Rating = ({ value, text, color}) => {
  return (
    <div className='rating'>
      <span>
        <i style={{color}} className={value >=1 ? 'fas fa-star' : value >= 0.5 ? 'fas fa-star-half-alt': 'far fa-star'}></i>
      </span>
      <span>
        <i style={{color}} className={value >=2 ? 'fas fa-star' : value >= 1.5 ? 'fas fa-star-half-alt': 'far fa-star'}></i>
      </span>
      <span>
        <i style={{color}} className={value >=3 ? 'fas fa-star' : value >= 2.5 ? 'fas fa-star-half-alt': 'far fa-star'}></i>
      </span>
      <span>
        <i style={{color}} className={value >=4 ? 'fas fa-star' : value >= 3.5 ? 'fas fa-star-half-alt': 'far fa-star'}></i>
      </span>
      <span>
        <i style={{color}} className={value >=5 ? 'fas fa-star' : value >= 4.5 ? 'fas fa-star-half-alt': 'far fa-star'}></i>
      </span>
      <span>{text && text }</span>
    </div>
  )
}

Rating.defaultProps = {
  color: '#f8e825',
}
export default Rating


//import rating in product.js | add rating component
import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({product}) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} varient='top'/>
      </a>
      <Card.Body>
      <a href={`/product/${product._id}`}>
        <Card.Title as='div'>
          <strong>{product.name}</strong>
        </Card.Title>
      </a>
      <Card.Text as='div'>
        <div className='my-3'>
          <Rating 
            value={product.rating} 
            text={`${product.numReviews} reviews`}/>
            {/* we can add color prop value here color='red' but we prefer default props */}
        </div>
      </Card.Text>
      <Card.Text as='h3'>
          ${product.price}
      </Card.Text>
      </Card.Body>
    </Card>
  )
}
export default Product


//add propTypes in rating.js use shortcut imtp`
//it will type check the props | if we pass in a number for text instead of rating console will give error invalid prop | it is not necessary to add PropTypes.
import React from 'react'
import PropTypes from 'prop-types'

const Rating = ({ value, text, color}) => {
  return (
    <div className='rating'>
      <span>
        <i style={{color}} className={value >=1 ? 'fas fa-star' : value >= 0.5 ? 'fas fa-star-half-alt': 'far fa-star'}></i>
      </span>
      <span>
        <i style={{color}} className={value >=2 ? 'fas fa-star' : value >= 1.5 ? 'fas fa-star-half-alt': 'far fa-star'}></i>
      </span>
      <span>
        <i style={{color}} className={value >=3 ? 'fas fa-star' : value >= 2.5 ? 'fas fa-star-half-alt': 'far fa-star'}></i>
      </span>
      <span>
        <i style={{color}} className={value >=4 ? 'fas fa-star' : value >= 3.5 ? 'fas fa-star-half-alt': 'far fa-star'}></i>
      </span>
      <span>
        <i style={{color}} className={value >=5 ? 'fas fa-star' : value >= 4.5 ? 'fas fa-star-half-alt': 'far fa-star'}></i>
      </span>
      <span>{text && text }</span>
    </div>
  )
}
Rating.defaultProps = {
  color: '#f8e825',
}
Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
}
export default Rating


//we will receive an error: Each Child in a list should have a unique key prop | when we create a list such as we did in homescreen  the col element has to have a key with unique value
//in HomeScreen.js
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'

const HomeScreen = () => {
  return (
    <>
     <h1>Latest products</h1>
     <Row>
      {products.map(product => (
        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
          <Product product={product}/>
        </Col>
      ))}   
    </Row> 
    </>
  )
}
export default HomeScreen

//in index.css add for rating component design
h3{
  padding: 1rem 0; 
}
.rating span{
  margin: 0.1rem;
}

//Routing
//the react dev tool extension for chrome allows us to see props and state | mostly used in context api and global state in react | we are going to use redux so we can use redux dev tools |

// in frontend folder
// to implement react router so that we can go to different URL's in our project we need to install it | also install react bootstrap pack to use it for buttons, links in navbar etc`
  Terminal: npm i react-router-dom react-router-bootstrap

//in App.js
//implement the router | import BrowserRouter as Router from react-router-dom (wrap everything around Router). It uses the HTML5 history API ie. Push state and replace state | we also have hash router that uses the #portion of the url (not used here)
//instead of embedding HomeScreen as we did earlier we use Route | So import Route with BrowserRouter as well.
//whenever we create a route we pass in a path '/' and what comontent is to be loaded whe we go to that path which here is HomeScreen | since its just / if we go to / anything by default its going to go to homescreen so for root Route we will add Exact parameter.
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom' ;
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
    <Router>
    <Header/>
    <main className="py-3">
      <Container>
        <Route path='/' component={HomeScreen} exact />
      </Container>
    </main>
    <Footer/>
    </Router>
  );
}
export default App;

//Create ProductScreen
// in screens create ProductScreen.js and racfe with sample text
import React from 'react'
const ProductScreen = () => {
  return (
    <div>
      <p>Product</p>
    </div>
  )
}
export default ProductScreen

// import in app.js like HomeScreen | create a route with path='/product/:id remove exact and add ProductScreen as component
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom' ;
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

const App = () => {
  return (
    <Router>
    <Header/>
    <main className="py-3">
      <Container>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/product/:id' component={ProductScreen} />
      </Container>
    </main>
    <Footer/>
    </Router>
  );
}
export default App;

//edit a tags in header and products which as of now refreshes the page when clicked | insted we will use Link tag from ReactRouter
// in components/product.js import Link from react router dom and replace a tag with link and href with to | the speed will increase as it will not reload now.
import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({product}) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} varient='top'/>
      </Link>
      <Card.Body>
      <Link to={`/product/${product._id}`}>
        <Card.Title as='div'>
          <strong>{product.name}</strong>
        </Card.Title>
      </Link>
      <Card.Text as='div'>
        <div className='my-3'>
          <Rating 
            value={product.rating} 
            text={`${product.numReviews} reviews`}
            />
        </div>
      </Card.Text>
      <Card.Text as='h3'>
          ${product.price}
      </Card.Text>
      </Card.Body>
    </Card>
  )
}
export default Product

// Go to header.js
//use LinkContainer from react router bootstrap which  does the same  thing for bootstrap components
//embed proshop link in LinkContainer to='/' and remove href
//same for cart and login links
import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to='/'>
           <Navbar.Brand>Proshop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <LinkContainer to='/cart'>
            <Nav.Link><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/login'>
            <Nav.Link><i className="fas fa-user"></i> Sign In</Nav.Link>
          </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}
export default Header

// Implementing ProductScreen
//import Link from react-router-dom
//import Row, Col, Image, ListGroup, C`ard, Button from react-bootstrap
// import Rating from '../Components/Rating
// import products from products
// apply.find on products array and for each product p where product._id === id in the url we ert it with props.match | with destructuring {match} we can access .params.id | params is related to Route path='./product/:id in app.js | to test if the correct product is selected we can do product.name in return div
//add a go back button | varient flush takes away the border
import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

const ProductScreen = ({ match }) => {
  const product = products.find(p => p._id === match.params.id)
  return (
    <>
      <p>{product.name}</p>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid/>
        </Col>
        <Col md={3}>
          <ListGroup varient='flush'>
            <ListGroup.Item>
              <h3>{ product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} Reviews`}/>
            </ListGroup.Item>
            <ListGroup.Item>
              Price: ${product.price}
            </ListGroup.Item>
            <ListGroup.Item>
              Description: ${product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup varient="flush">

            <ListGroup.Item>
              <Row>
                <Col>
                  Price:
                </Col>
                <Col>
                  <strong>${product.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col>
                  Status:
                </Col>
                <Col>
                  {product.countInStock > 0 ? 'In Stock' :'Out Of Stock'}
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Button className='btn-block' type='button'>
                Add To Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  )
}
export default ProductScreen

//FRONTEND AND BACKEND workflow explained
//We have our frontend which we view in the browser. Right now theproducts which we are loading are in JSON file on our frontend. To create a full stack app we need a backend. To create our backend we will use NODEjs which is the javascript runtime and allows us to run JS on the server and  express which is the backend framework which allows us to create the routes etc. The backend is where we communicate with our database which in this project  will be MongoDB. to communicate with our DB we will use an object data maper which will be mongoose which has methods like find and findById and other methods which makes us easy to interact with MOngoDB. We will be creating controllers models and so on. To get data from backend we will be making an HTTP request and there are different methods for this (GET POST PUT-id DELETE-id). If we want to fetch our products from our backend we will make a get request fromour frontend such as - get/api/products which is a route we will create with express. When we hit that route we send the product's JSON data. Our backend will not serve any HTML templates it will serve JSON for our frontend to pickup and read. Ultimately these products will bes stored in our mongo DB but for now we will move the products.json file from frontend to our backend so that we can start to work with our server. Depending on what we do like we want to get the data or save or update or delete there are different methods we can use. This makes the app restful REST stands for Representational State Transfer and it is a software architecture style that defines a set of constraints used for web API's and web services. We dont need to add something like api/get-products we just change the http method itself unless we use anything like authentication.

//setting u`p Express Server
//Sercing Products - Back End Routes
// stop the frontend server | Create a folder named Backend and initialize package.json in the root directory |  cd..
  Terminal: npm init
  description: MERN shopping cart
  entry point: server.js
//checkout package.json and install express
  Terminal: npm i express
//thar should get added as a dependency in the root | checkout package.json
//in the backend folder create a file called server.js which is the entry point for our backend 
//create a folder called data and copy the products.json file from frontend to data folder. Dont move as it will break the frontend.
//create some routes to serve our products from our backend in our server.js. 
//In server.js
const express = require('express')
//this syntax where we use require is common js. this is traditionally used by node.js. In the frontend we use import module which is ES Modules. We can use ES modules without something like bable or experimental flag.
//initialize express with a var called app
const app = express()
//take that app var and listen on a port 5000
app.listen(5000, console.log('server running on port 5000'))
//later port number will be an environment variable and we will be having a separate file for routes models and controllers  | as of now we just want to use package.json data
//save that
  Terminal: node backend/server 
  //server running on port 5000 | ctrl c

//go to package.json and create a script start
"start": "node backend/server"
//now we can run our server with : npm start
//create a route
app.get('/',(req,res) => {
  res.send('API is running...')
})
//copy and create an api route
app.get('/api/products',(req,res) => {
  res.send('API is running...')
})
//in backend/data/products.js 
//replace export default products with module.exports = products
//add products file to server.js
const products = require('./data/products')
//replace
app.get('/api/products',(req,res) => {
  res.json(products)
})
//we can do res.send but it is json so res.json | eventhough it is a js array of abjects res.send or res.json will convert it to json content type
//goto localhost:5000/api/products  in browser (gives json array)

//create a route to get a single product by its id
app.get('/api/products/:id',(req,res) => {
  //same as ProductScreen on frontend
  const product = products.find( p => p._id === req.params.id)
  res.json(product)
})
//goto localhost:5000/api/products/2
//server.js final file
const express = require('express')
const products = require('./data/products')

const app = express()

app.get('/', (req, res) => {
  res.send('API is running')
})
app.get('/api/products', (req, res) => {
  res.json(products)
})
app.get('/api/products/:id',(req,res) => {
  //same as ProductScreen on frontend
  const product = products.find( p => p._id === req.params.id)
  res.json(product)
})
app.listen(5000, console.log('Server running on port 5000'))



//fetching products from react
//instead of loading the products from file directly we need to fetch it from app.get('/api/products', (req, res) from the backend
//keep running the backend on port 5000anf in new terminal install axios
//axios is the HTTP library used to make HTTP requests to backend | u can use fetch api if u like but axios is easier
  Terminal: npm i axios
            cd frontend
            npm start
//we will have our frontend and backend running
//go to homeScreen.js  that's where we are loading the products from products.js but instead we will request it from backend |  so remove import products from '../products'
//add products as component level state | state can be component level or global (application) level state
//products ultimately will be global level state when we get into redux but for now we will make it a part of this component
//generally component level state will be things like = if its a menu component u might have an open or closed state | forms having separate feilds will be a part of component state but things like = products, users cart will be global state through redux 
//import useState hook from react | useState is used to use state in functional components because traditionally with class based components we define state in constructor while in functions we don't have a constructor so we use the useState hook 
//we set a pair of [] to  use state  | here we pass in 2 things ie. what we want to call this piece if state ie. products and what we want to call the function to change or manipulate this state ie. setProducts
const [products, setProduct] = useState([])
//whatever we want to set as default for products we pass in ([]) which will be an empty array | if we save this now the app will not be broken as the products are passed in amd mapped through but we will not see any products
//Next we use the useEffect hook to make a request to backend because what useEffect does is we define it and it takes in an arrow function and whatever we put in here is going to run as soon as the component loads
import React, {useState, useEffect} from 'react'
import axios from 'axios'
//above return
useEffect(()=> {
  console.log('helo');
})
//this is the place we will make the axios request as we want the products to display as soon as the component loads 
//we can use axios.get('/api/products)which returns a promise so add .then(res)
// axios.get('/api/products').then(res); instead we will use async await which returns a promise that means we have to call await before axios and we can not make the arrow function async() so we have to create a separate function with in useEffect
useEffect(()=> {
  const fetchProducts = async () => {
    // const res = await axios.get('/api/products')
    // on this res we will have a data object assigned to it
    // res.data | to use data directly we destructure the res
    const { data } = await axios.get('/api/products')
    //once we fetch that data we want to set it to the empty array [] using setProducts defined above to change the state
    setProducts(data)
  }
  fetchProducts()//call fetchProducts
  //as a second argument to useEffect we pass an array of dependencies | anything which fires useEffect to change state | eg. a variable test | when it changes its value useEffect fires off | right now it will be an empty array | it gives warnings if we dont claim the dependencies[]
},[])

//in the frontend we get an error in the console 404 not found | it is looking at localhost 3000/api/products because we did not define anythind in axios.get(localhost5000) if we did th`at we will get the cores error (the cross domain error)so we add a proxy that instead of looking at localhost:3000 it will look at <localhost:5000
//goto localhost > package.json | under name add
"proxy":"http://127.0.0.1:5000"
//restart frontend server and backend server | go to network in console - fetch/xhr - products - Response | products are connectrd from the backend
// checkout headers 200ok
// same should be done for single product page

//go to products screen
import React, {useState, useEffect} from 'react'
import axios from 'axios'
//trmove import products and find products
const [product, setProduct] = useState({})
//defaiult use state will be an empty object coz product is an object | copy useEffect from homescreen
useEffect(()=>{
  const fetchProduct = async () => {
    //for route we will get the id from URL with props.match » we have match ar grgument
    const { data } = await axios.get(`./api/products/${match.params.id}`)
    setProducts(data)
  }
  fetchProducts()
},[])

//now we can delete the products.js in the frontend

//Task: Add nodemon to run backend server live without restarting also install concurrently so we can run backend and frontend server at the same time and same command instead of running two different terminals for react and express
//install nodemon and concurrently as dev dependencies -D as we only need them for development in thr root | added to our root package.json as dev dependencies |
  Terminal: npm i -D nodemon concurrently
//to use nodemon gpo to package.json  and in scripts add
  "server" : "nodemon backend/server"
//add a script to run the client (react) which is to be run from the frontend folder so we add a prefix with the folder name
  "client": "npm start --prefix frontend"

  Terminal: npm run server
          : npm run client
//concurrently can be used to run both backend and frontend at the same time
//go to package.json in root add the script
  "dev": "conurrently \"npm run server\" \"npm run client\""
  // run both npm run server and client in "" with escape char \
  //now you can use the command
    Terminal: npm run dev //to run both

//we are getting an error in the console : React Hook useEffect has a missing dependency in product screen add match [match] as a dev dependency in the second parameter of useEffect


// Next we will learn about environment variables | put the port node env dev or production  put database URI or paypal keys or any sensetive info 

// use package called .env | install it | require it and use the config() method and create a file called .env | and anywhere in our application we use  process.env. to setup
//  stop the server and in the root
 Terminal: npm i dotenv 
 // we dont need the frontend right now so
 Terminal: npm run server
 // goto server.js and bring in dotenv
 const dotenv = require('dotenv')
 //above express()
 dotenv.config()

//in the root create a file called .env and we define the environment variables here | so add and save
NODE_ENV = development
PORT = 5000
//restart the server whenever we add an evn variable
//go to server.js where we have 5000 port hard coded
//we can use the variable with process.env
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
//if the .env file has sensetive info we should ass it to gitignore as we already did | to prevent public display on bitbucket or github
//next we convert the common js syntax (require()) to ES6 modules so that we can use the import syntax as in the frontend
//ES6 modules in NODE.js
//checkout the version of node u are using | should be above 14.6.0
  Terminal: node --version
//in the root package.json add under  main: server.js
"type": "module"
//the only difference in ES modules in frontend and backend is that we have to add .js to the files upon import (not required for packages)
import express from 'express'
import dotenv from 'dotenv'
import products from './data/products'//run without .js gives an error

//in products.js file | convert the export also

export default products
//now we can run 
  Terminal: npm run dev

//Database Setup with MongoDB atlus (cloud version)  | mongo db is a no sql database also called a document database and its different from a traditional relational database where you have tables and columns of data | with no sql document database we have collection of documents | documents are nothing but JSON objects so they are structured like our products.js file | so single porduct data will be the document and when we create a new document in mongo db it assigns it with an object id in _id field which is auto generated | we are going to have a collection for users, orders and products
//go to mongoDB and create an account or sign up with google
//create a cluster | preferred language - javascript | choose free tier shared | cloud provider - AWS | cluster name - your name | create cluster
//download mongoDB compass: GUI used to connect to database and manage your data
//go back to cluster| goto security |database access | new database user | add password and read & write to any database | add user
//under network access add IP address | If this is a production application you are deploynig then we use Current IP adddress | for now we will use allow access from anywhere  0.0.0.0
//go to clusters->collections here we will see data if we had any | click on add my own data | provide database name proshop and collection name as products | we can have multiple databases and collections in a cluster. Later we eill setup our app to create collection automatically through app.
//go to all clusters | click connect | Right now we will connect through compass later we will connect through connect your application | click on I have mongoDB compass | Copy the connection string, then open MongoDB Compass| paste the connection string | replace the last word test with database name ie proshop and add <password> | click connect
//go to proshop in compass which further has a collection of products
//go back to mongoDB atlus | connect | connect to your application | copy the connection string | goto .env file and add MONGO_URI = paste string | replace myFirstDatabase with proshop and add password
MONGO_URI =mongodb+srv://Ashish123:<password>@cluster0.rcxlf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//now we can close atlus
             
//next we will connect the app to our database with a database config file with mongoose which is an object data mapper
// Mongoose :mongoDB object modelling for Node.js | It allows us to create a model and schema for different resourses in our database like products users and so on | goto mongoose website -> docs -> defining your schema | go through the documentation
//go to vs code in root
  Terminal: npm i mongoose
//in the backend create a folder called config -> create a file called db.js (connection file)
import mongoose from 'mongoose'
const connectDB = async () => {
  try{
    const conn = await mongoose.connect(process.env.MONGO_URI) 

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  }catch(error){
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}
export default connectDB

//Model the data and create a seeder script so that we can import some dummy data to work with
//in the backend folder create folder models in this we will have 3 models or resourses to work with (users , products , orders) | create files => userModel.js productModal.js orderModel.js
//go to userModel.js import mongoose
//create user schema and set that to mongoose.Schema(pass an object) => this object defines all the fields we want for the users ie. name : string its ok but we also want to add isRequired so we create an object {}
const userSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true
  },
  isAdmin:{
    type: Boolean,
    required: true,
    default: false
  }
}, {
  timestamps: true
})// we also want a createdAt and updatedAt field which can be done manually but with mongoose we can add a second  arguments of options ie. timestamps: true which creates it automatically
const User = mongoose.model('User', userSchema)
// set user to mongoose.model coz we want to create a model with this schema we are going to call it 'User' and pass in userSchema to it
export default User

//copy everything in productModel and paste it to productModel.js
//rename userSchema to productSchema | add a field user:{} as only admins can create products but we want to know which admin created which product | this can be done with type ->objectId | set it to required | we need to reference a specific model for this ObjectId ref: 'User' | this adds  relation between the product and user |  
user: {
  type:mongoose.Schema.Types.ObjectId, 
  required: true,
  ref: 'User'
}
//image | brand | caregory |description | reviews |rating | numreviews | price |countInStock |
//put reviews property above rating | reviews will be an array of review objects so we are going to have a separate schema called reviewSchema | we can put this schema in a sepatate file but it is  small enough so we put it above productSchema
import mongoose from 'mongoose'
const reviewSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  comment: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})
const productSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  name:{
    type: String,
    required: true
  },
  image:{
    type: String,
    required: true,
  },
  brand:{
    type: String,
    required: true
  },
  category:{
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  reviews: [reviewSchema],
  rating:{
    type: Number,
    required: true,
    default: 0
  },
  numReviews:{
    type: Number,
    required: true,
    default: 0
  },
  price:{
    type: Number,
    required: true,
    default: 0
  },
  countInStock:{
    type: Number,
    required: true,
    default: 0
  }
  }, {
  timestamps: true
  })
const Product = mongoose.model('Product', productSchema)
export default Product

//copy userModel to orderModel | the biggest model 
//orderSchema | we will have a user connected to order the user who buys the product |
user: {
  type: mongoose.Schema.Types.ObjectId,
  required: true,
  ref: 'User'
},
//a field called orderItems which will be an array of order field like orderQuantity, price etc
//product:{it will be an objectid linked to product model}
orderItems:[
  {
    name:{ type: String, required: true },
    qty:{ type: Number, required: true },
    image:{ type: String, required: true },
    price:{ type: Number, required: true },
    product:{ type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Product'}
  }
],
shippingAddress:{
  address: { type: String, required: true},
  city: { type: String, required: true},
  postalCode: { type: String, required: true},
  country: { type: String, required: true}
},
//you can add more fields to shipping address
//evenThough we will add paypal gateway we want to make it scalable to add more payment methods
paymentMethod: {
  type: String,
  required: true
}
//paymentResult | shows the result after payment is done through  paypal | we get some data back to be put here
paymentResult: {
  id: {type: String},
  status: {type: String},
  update_time: {type: String},
  email_address: {type: String},
},
//next taxPrice will be a number
taxPrice: {
  type: Number,
  required: true,
  default: 0.0
}
//shippingPrice | totalPrice |isPaid | paidAt | isDelivered | deliveredAt | include timeStamps

// complete orderModel
import mongoose from 'mongoose'

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  orderItems:[
    {
      name:{ type: String, required: true },
      qty:{ type: Number, required: true },
      image:{ type: String, required: true },
      price:{ type: Number, required: true },
      product:{ type: mongoose.Schema.Types.ObjectId,
                required: true, 
                ref: 'Product'}
    }
  ],
  shippingAddress:{
    address: { type: String, required: true},
    city: { type: String, required: true},
    postalCode: { type: String, required: true},
    country: { type: String, required: true}
  },
  paymentMethod: {
    type: String,
    required: true
  },
  paymentResult: {
    id: {type: String},
    status: {type: String},
    update_time: {type: String},
    email_address: {type: String},
  },
  taxPrice:{
    type: Number,
    required: true,
    default: 0.0
  },
  shippingPrice:{
    type: Number,
    required: true,
    default: 0.0
  },
  totalPrice:{
    type: Number,
    required: true,
    default: 0.0
  },
  isPaid:{
    type: Boolean,
    required: true,
    default: false
  },
  paidAt:{
    type: Date
  },
  isDelivered:{
    type: Boolean,
    required: true,
    default: false
  },
  deliveredAt:{
    type: Date
  }
}, {
  timestamps: true
})

const Order = mongoose.model('Order', orderSchema)
export default Order

//next we will prepare some data for import because we have the data folder with products.js so we will import this data to database and also add some users as well. later we will create a data seeder script to seed the database with that sample data | then we will fetch the data from mongo db and go to data authentication.
//Preparing sample data | Remove _id field from product.js as mongodb creates _id fields automatically | so remove all _id from all 6 products
//create a file name users.js in data folder | we will create an array of 3 users one of them will be the admin | these users have to have only the fields in our user model or mondo db won't allow us to insert them in database
const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    // the password needs to be hashed so right now we can use xxx later we will use bcrypt to encrypt the password before we create the seeder
    password: xxxx,
    //isAdmin is false by default so we can remove from other two
    isAdmin: true
  },
  {
    name: 'ashish Singh',
    email: 'ashish@example.com',
    password: xxxx
  },
  {
    name: 'nics',
    email: 'nics@example.com',
    password: xxxx
  }
]
export default users;
//to encrypt stop the server and  install bcryptjs | we have bcrypt also but we use bcrypt.js as bcrypt is complex and has issues
  Terminal : npm i bcryptjs

  //in users.js
  import bcrypt from bcrypt.js
  // there are many ways to hash our passwords | normally we do that asynchronusly but since this is the data we are just importing and not a registration form we can use the  hashSync method which will hash the  password synchronusly | hashsync we pass in plain text as password and a number of rounds (max the rounds the max secure the password is )10 is defauly 
  // add same for all 3 fields
  password: bcrypt.hashSync('123456', 10)
  // we are not going to seed orders 

  //create data seeder script| to import data in our database
  //in backend folder create a file called seeder.js | not a part of application | a separate script to import data
  //so we need to import all separately
  import mongoose from 'mongoose'//to import mongoose models
  import dotenv from 'dotenv'//because our MONGO_URI is in .env file
  import users from './data/users.js'
  import products from './data/products.js'
  //we are not creating any orders with the seeder but we want the ablity to destroy all users products and orders
  import User from './models/userModel.js'
  import Product from './models/productModel.js'
  import Order from './models/orderModel.js'
  import connectDB from './config/db.js'
  //this file is not connected to our server so we have to call the again
  dotenv.config()
  connectDB()

  //create 2 functions here | importData and destroyData | these will be async as we are dealing with DB and everything returns a promise | the first thing we do is clear all three collections completely | take the model and use mongoDB method deleteMany() without args so it deletes everything which returns a promise so we prefix await (because we dont want to import anything which is already in the database) | same for Orders Product and User
  //then we import the users with awaitUsers.insertMany and pass in users  to get sample data| we have a connection between users and products and we want the admin user to be the object id for all the products so we create a variable called createdUser to put the array of created users in it
  //get admin user from that array with index 0 to get the first user from that array which is the admin
  //for products create a var called sampleProducts = products we imported and map through this and add admin user to each one | return all which is present in products with ... and add the adminUser
  //all the data is now stored in sampleProducts | call await take Product model and insertmany(sampleProducts)
  const importData = async () =>{
    try{
      await Order.deleteMany()
      await Product.deleteMany()
      await User.deleteMany()

      const createdUsers = await User.insertMany(users)
      const adminUser = createdUsers[0]._id
      const sampleProducts = products.map(product => {
        return { ...product, user: adminUser}
      })

      await Product.insertMany(sampleProducts)
      console.log('Data Imported')
      process.exit()
    }catch(error){
      console.log(`${error}`)
      process.exit(1)
    }
  }
  //copy importData and create destroyData
  const destroyData = async () =>{
    try{
      await Order.deleteMany()
      await Product.deleteMany()
      await User.deleteMany()
     
      console.log('Data Destroyed')
      process.exit()
    }catch(error){
      console.log(`${error}`)
      process.exit(1)
    }
  }

//to get this value -d we have process.argv[2]  index 2 represents whatever is passed in after seeder in npm command
if(process.argv[2] == '-d'){
  destroyData()
}else{
  importData()
}

  //to call this in terminal | -d will be used only to destroy the data 
    Terminal: node backend/seeder -d
  //we add an npm script for this command also 
  //under pachage.json => scripts
  "data:import": "node backend/seeder"
  "data:destroy": "node backend/seeder -d"

  //in compass we have empty products collection
 Terminal: npm run data:import

//in compass go to view and reload data to see all the products with objectId and user is same for all | check admin user id also
//to destroy data
  Terminal: npm run data:destroy 



//ALERT :if we start building app with orders and more products if we run one of these it will replace everything | this file is used in the beginning to get initial data | you can even delete it later
//next we will fetch the data from our database in our backend so we can make requests to our routes from frontend.


//we have two routes in our server.js we will not put our routes in this file as it will get crowded 
//in backend folder create a folder called routes in it  create a file called productRoutes.js
import express from 'express' //to use the router

const router = express.Router()
import Product from '../models/productModel'
//cut the products and products:id routes from server.js and paste here and change app to router
//we dont need /api/products route because we will point anything that is api/products to this file so we use only /
router.get('/', (req, res) => {
  //here we are geting all the products so create a var products and set it to the model and run find (mongoose method) with empty object which provides every data
  const products = product.find({})
  res.json(products)
})
router.get('/:id',(req,res) => {
  //same as ProductScreen on frontend
  const product = products.find( p => p._id === req.params.id)
  res.json(product)
})
export default router

//now import this file in server.js 
import productRoutes from './routes/productRoutes.js'
// and above const PORT mount it | anything which goes to /api/products goes to productRoutes
app.use('./api/products', productRoutes)
//remove import products from './data/products.js


//when we use a mongoose method it return a promise so we use async in route and await | there is no error handling here | we can use try and catch here but we will have to do it in each route | instead we will use a middleware package called express-async-handler
Terminal: npm i express-async-handler
  import express from 'express'
  import asyncHandler from 'express-async-handler'
  const router = express.Router()
  import Product from '../models/productModel.js'
  
// @desc    Fetch all products
// @route   GET /api/products
// @access  public

//some  routes will need a token | when  u purchase a product you need to be logged in | we need to send a token to specific routes and those will be private routes | this is a public route | so anyone can hit it
  //enclose in asyncHandler
  router.get('/', asyncHandler(async(req, res) => {
    const products = await Product.find({})
    res.json(products)
  }))

// @desc    Fetch single product
// @route   GET /api/product/:id
// @access  public

  //await Product.findById(req.params.id)
  router.get('/:id', asyncHandler(async(req,res) => {
       // const product = products.find( p => p._id === req.params.id)
    const product = await Product.findById(req.params.id)
       //check for the product else respond with an error 404 res.status({msg})
    if(product){
      res.json(product)
    }else{
      res.status(404).json({message: 'Product not found'})
    }
  })
)
export default router

  //go to URL 
  //localhost:5000/api/products to chk the products

  //working with postman
// install postman form postman.com its cross platform software to work with api's and it's free
//create a new collection and name it Proshop Shopping Cart Api | create a new folder named products in this collection 
// we have made 2 product routes | we need to create them in postman
//go to add requests GET/api/products | desc: get all products
// http://localhost:5000/api/products SEND (server should be running)
//you will see the products as in the browser ( postman shows status : 200 ok time and size of the request)
// we can make all kinds of requests here whereas on a browser we only make GET request or you can have a form that makes POST requests
//if we dont want to usw http://localhost:5000 again and again we have to use environment variable | Go to setting near no environment and add | name=> proShop Env | variable => URL | http://localhost:5000 
// change the environment from no environment to proShop Env | add request GET  {{URL}}/api/products | you have to use {{}}to add env var
//click on save to save the request

//add another request for the single product  
//go to add requests GET/api/products/:id | desc: get single product by id
//cody any products id from previous request and paste in this request
// http://localhost:5000/api/products/618422b82a10bd2672e3c7ff SEND to get single product | if we put a wrong id we should get  "message":"product not found"
// we have a default error handler with express and we can fire that off if this is not a formatted object id |  if we put 1 in id and send request | we get back 500 internal server error and cast error which is in html format but we want only json api formatted message for all so we have to create a custom error handler.

//Custom error Handling:
//the previous error we got is an HTML file but we want to send back a json object with a message and we also want to add a stack trace to it if we are in the development mode
//to create a custom error handler have to create a custom middleware |middleware is a function which has access to req and res cycle | so when we make a request we can have a function that can access anything in these res and req objects 
// <not to be coded just an example> to define  middleware go to server.js below app = express()
//add app.js pass in a function which takes req, res and next(use next to move to next piece of middleware). add this and send a requet in postman the see the terminal | we can create custom middleware to do a lot of different things | when we do authentication middleware we will assign our user to req.user and we will be able to use that in any route we want
app.use((req, res, next)=> {
  console.log('helo')
  console.log(req.originalUrl)
  next()
})
//under the routes above const PORT | in error middleware if we want to overwrite the default error handler create a function that takes in  (err, req, res, next) as parameters
app.use((err, req, res, next)=>{
  //we need to figure out the status code| we might get a 200 response eventhough its an error | so we create a conditional to create 200 to 500 server error else whatever the status code | then we respond with json and object with message from error object and also stack trace only in development mode and not in production
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
})
// OUTPUT in postman
{
  "message": "Cast to ObjectId failed for value \"1\" (type string) at path \"_id\" for model \"Product\"",
  "stack": "CastError: Cast to ObjectId failed for value \"1\" (type string) at path \"_id\" for model \"Product\"\n    at model.Query.exec (/Users/ashishsingh/My Work/PRO/Web Pro/proshop/node_modules/mongoose/lib/query.js:4545:21)\n    at model.Query.Query.then (/Users/ashishsingh/My Work/PRO/Web Pro/proshop/node_modules/mongoose/lib/query.js:4644:15)\n    at processTicksAndRejections (internal/process/task_queues.js:95:5)"
}
//instead of HTML we get JSON data back and also stack trace in dev mode
//fallback for 404 error (for anything that is not an actual route)

app.use((req,res, next) =>{
  //define a var error and set it to new Error(to throw an error)
  const error = new Error(`Not Found - ${req.originalUrl}`)
  res.status(404)
  next(error)//pass in error in this
})
//gives out on a wrong URL{"message": "Not Found - /api/io",}

//we can now move this middleware to a separate folder| in backend create a folder called middleware and in it a file called errorMiddleware.js
//in this defile two variables const notFound and const errorHandler
// cut everything in app.use for 404 and paste in notFound and errorHandler respectively
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`)
  res.status(404)
  next(error)
}

const errorHandler = (err, req, res, next) => { 
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
}

export { notFound, errorHandler}

//bring those var in server,js and pass in app.use()
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
dotenv.config()
const app = express()
connectDB()

app.get('/', (req, res) => {
  res.send('API is running......')
})

app.use('/api/products', productRoutes)

app.use(notFound)

app.use(errorHandler)
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))

//in productRoutes,js
// in the slse section  when we have this custom error handler we can set the status first and then we throw a new error and pass in a message ('Product not found')
router.get(
  '/:id',
  asyncHandler(async(req,res) => {
    const product = await Product.findById(req.params.id)

    if(product){
      res.json(product)
    }else{
      res.status(404)
      //if we remove status it will be error 500 but we set it to 404
      throw new Error('Product not found')
      // .json({ message: 'Product not found' })
    }
  })
)
//copy any objectId and change the value keeping the same format in postman | gives out 404 product not found

//REDUX | right now we are fetching the products from the component eventhough they are coming from database but we want to use redux to make a global state |  we will create reducers and actions to do that
// Redux is a predictable state container for JavaScript apps.
// It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.
// in the beginning redux will look difficult and confusing but later we will see a pattern and be comfertable with it
//go to https://redux.js.org/understanding/thinking-in-redux/glossary for info on redux

//basically we have 2 kinds of state | component level state and global level state(application state) | component level state in obligated to only component | eg a dropdoen menu with open state which can be true or false and depending on that true or false the menu behaves. which is not applicable in redux | redux is for global level state eg. products which can be used in multiple components or access them with update delete etc. so we want them to be available to all our components | infact we can put all of our state in app.js file  and pass yhese up and down througn props which will get messy with the app of this size | oyhe eg.  authenticated user | when we log in we want  to access that user's data that is put in state | shopping cart items etc | 
//  The way the state is changed is througn reducers  or reducer functions | these are functions which accept actions and they are responsible for manipulating and passing the state down to components | actions are objects that  represent the intension to change thepiece of state | we also have action creaters that are functions that will dispatch or fire off those actions | eg. we may have an action creater function called getProducts and in that action creater we make a fetch request to the backend to get data using axion or fetchAPI and the we get the data back and dispatch an action to reducer and  attach a payload to it | this payload will have the fetch data | in the reducer we can assign that payload data to the state and we can pass it down to any component that asks for it | we can have multiple components that ask for it | we can have multiply components asking for same piece of state
//think of state as a cloud hovering over your app | redux is not specifically attached to react | we can use redux on its own and with other frameworks as well. | we will use a package called react-redux to connect both together  

// create a redux store
//add chrome extension Redux DevTools | gives us picture of our Redux store with overall state and also state changes from component to component

//in frontend install redux (state management) | react-redus(to work with react) | redux-thunk(this middleware allows to make async request in our action creaters so we can talk to our servers with action creaters) | react-devtools-extension(redux devtools dont work by default we have to add a piece of code to set it up & this extension makes it easier)
Terminal: cd frontend
          npm i redux react-redux redux-thunk redux-devtools-extension

//create redux store files | in frontend create a file called store.js (this is the place wher we connect our reducers and middleware)
//store.js
//createStore is a function from redux to create the store | combineReducers - we will be having a bunch of reducers and each reducer will have certain functionality(if we are fetching products from backend we will ahve a reducer for productList it will have arequest part a success part and a fail part if err) | applyMiddleware is used to apply middleware like thunk | also import thunk
//import composeWiyhDevTools from redux-devtopols-extension
import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

//call createStore in const store and pass in (reducer) | const reducer = combineReducer pass in an empty object because we dont have any reducers yet later we will add reducers here({}) |
//second parameter in store will be initialState | define it and let it be an empty object | if we want something to be loaded when redux store loads we can put it in here as initial state {}
//go to redux dev tools extension in chrome | it shows no store found | third parameter will be the middleware |composeDevTools and pass in applyMiddleware() here we can pass in thunk as it is the only middleware we have | instead we have an array of middleware [thunk] and pass middleware with ... operator
const reducer = combineReducers({})
const initialState = {}
const middleware = [thunk] 
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store

//goto index.js
//we implement redux with a provider in our app | provider comes from react-redux | also import store
import { Provider } from 'react-redux'
import store from './store'
//replace strictMode and wrap our app with <Provider> which takes in the store
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
   document.getElementById('root')
)
Terminal: npm run dev
//now we will be able to see state in our redux chrome extension | we dont have anything here as we dont have any reducers , actions etc but it will be working 
//Next instead of fetching data from the component and useEffect we will do it with redux action and pass the data down through state via reducer

//add a reducer
//in src folder create a folder called reducers | each resourse of our app will have a reducer file such as products | in reducer folder create a file called productReducers.js all reducer function related to products will be in here
//in productReducers.js
//the first function will be productListReducer | to handle state for product list which we see on home page 
//create a reducer function productReducer | a reducer function takes in two things 1st- an initial state set that to an empty object{} set this initial state to products: [] empty array, and 2nd the action  |when we create an action reducer we will dispatch an action to productListReducer | this action will be an object that has type(to be evaluated in this function via switch) or payload (data we get from the server) |
//there are three types of action we evaluate with switch | 1) productListRequest where we make the fetch request 2)productListSuccess if we get a successful response and we get data 3) requestFails we swnd error in state
//case1 return loading value to true because when we make the request we want the component to know that its fetching and set products to empty array | case2 return loading:false as its dome making the request and products will be filled with action object and payload attached to it so we will fill the state with that payload(we will create action function later) | case3 loading: false and set error in the state and send the error in the payload instead of data as we did in case success
export const productListReducer = (state = { products:[] }, action) =>{
  switch (action.type){
    case 'PRODUCT_LIST_REQUEST':
      return { loading: true, products: [] }
    case 'PRODUCT_LIST_SUCCESS':
      return { loading: false, products: action.payload }
    case 'PRODUCT_LIST_FAIL':
      return { loading: false, error: action.payload}
    default:
      return state
  }
}
//to use this reducer we have to add it to our store
//goto store.js
import { productListReducer } from './reducers/productReducers'
 //in combine reducers we put productlist to productLisReducer this is what will show as this piece of state
const reducer = combineReducers({
  productList: productListReducer
})
//go to redux dev tools extension  to see the state we see productList as an empty array

//Constants | the case in switch statement are strings ( we can keep them the same) but generally we put these strings in a variable called constants. Constants remail same as in the string
//in src create a folder called constants as it gives a central place for our constants
//create a files here called productConstants.js 
export const PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST'
export const PRODUCT_LIST_SUCCESS = 'PRODUCT_LIST_SUCCESS'
export const PRODUCT_LIST_FAIL = 'PPRODUCT_LIST_FAIL'
//bring in the reducer
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from '../constants/productConstants'
// now we can remove the quotes on string
export const productListReducer = (state = { products:[] }, action) =>{
  switch (action.type){
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload }
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload}
    default:
      return state
  }
}
//create action
//in src create a folder called actions and create a file productActions.js
//there is a pattern to do this : we create the reducer | constant | actions | and fire it off in component
//bring constants in action
import axios from 'axios'
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from '../constants/productConstants'
//this action does the same work as useEffect in homeScreen component | we fetched from /api/products and got back the data and map through it | but we will do it through action and dispatch actions to reducer |
export const listProducts = () =>{
}
//here we will make an async request | redux thunk is helpful for this | it adds a function within  a function so we create async(dispatch)=>{} to dispatch the actions( PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL )
export const listProducts = () => async(dispatch) => {
  try{
    //in try dispatch the request pass an object with type: PRODUCT_LIST_REQUEST| this will go to reducer case1 and set loading to true and products[]
    dispatch({ type: PRODUCT_LIST_REQUEST})
    //here we make request so destructure data and await axios.get('/api/products') which provides us the data to be dispatched
    const { data } = await axios.get('./api/products')
    //dispatch  the PRODUCT_LIST_SUCCESS and send data as payload case2 from switch
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data
    })
  }catch(error){
    dispatch({
      //if something goes wrong dispatch PRODUCT_LIST_FAIL and payload as error (here we want to get the error message like cast error from backend to our frontend state ) there will be a generic message and message from backend | error.response-> generic | error.response.data.message-> backend message
      type: PRODUCT_LIST_FAIL,
      payload:error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}
//the error payload will be common for all our requests | this completes the listProducts action | this does not fire off yet 
//so next we will fire this listPrdoucts action off in home screen
//Go to HomeScreen.js
//bringing redux state into homescreen - useDispatch useSelector
//previously in homescreen we were bringing in axios and making request directly from this component but we don't want to do that anymore | remove import axios |  remove everything in useEffect | we dont need to set products as our local state anymore remove const [products, setProducts] = useState([]) | remove useState term from import 
//to dispatch our listProducts action we have to bring that in from react redux 
//import {} from 'react-redux' | useDispatch(to call an action) useSelector(uesd to select parts of state as we want productList part of state)
//to dispatch  we define a variable dispatch and set that to  useDispatch | we are using hooks here in the past we used higher order method called connect and we mapped state to props and it was complex 
//import { listProducts } and fire it off in useEffect as it makes the request to the backend to get products | dispatch should also be called as dependency at the bottom
//useEffect dispatch will now fill the state with products but products will not be mapped in retutn as products object is not defined so | for now products variable equals empty array
//in redux extension go to diff it shows what has changed and actions firred off ie PRODUCT_LIST_REQUEST and PRODUCT_LIST_SUCCESS because in our useEffect we dispatched listProducts which in our actions fire typr: PRODUCT_LIST_REQUEST  if it is successful it fires PRODUCT_LIST_SUCCESS and passes data in payload | in reducer that payload is put into products | if we look at products in redux extension it is filled |
// to display products on screen we have to select them from state | this is the work of useSelector
//in homeScreen under dispatch  create a var const productList = useSelector (it takes in an arrow function and we pass state as parameter and what part of state do we want) | nect er can destructure and pull out what we want from productList |we pull out  { loading, eror, products } from state
// now we can remove const products = []
// we can now map through products | but we want to check if its loading so we can implement the spinner and also chk for the error then we want to display the error
// under h1 { loading ? <h1>Loading</h1> : error ? <h3>{error}</h3> : <Row></Row>} check for loading else error else shoew the products in the row | the products now show refresh to see loading flash
//to chk err we purposly create an error | go to backend -> productRoutes first Route | above res.json  res.status(401) throw new Error('Not Authorised') 
//there are two parts | firing off the action to get the products and through reducer to the state and useSelector to collect products from state and pull out what we want and display in output
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'

const HomeScreen = () => {
  const dispatch = useDispatch()

  const productList = useSelector( state => state.productList)
  const { loading, error, products } = productList

  useEffect(()=>{
    dispatch(listProducts())
  },[dispatch])

  // const products = []
  return (
    <>
     <h1>Latest products</h1>
     { loading ? <h1>Loading</h1> : error ? <h3>{error}</h3> :     
      <Row>
      {products.map(product => (
        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
          <Product product={product}/>
        </Col>
      ))}   
    </Row> }

    </>
  )
}
export default HomeScreen

//Error message and loader component creation.
// replace loading and error with components | create 2 components in components folder | Message.js Loader.js

//Loader.js:
// import spinner from react and return the <Spinner> | this takes in a bunch of props animation="border" role = "status" style={{width:"100px, height: 100px", margin: "auto", display: "block"}} | add a span class sr-only Loading
import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <div>
      <Spinner animation='border' role='status' style={{width: '100px', height:'100px', margin:'auto', display:'block'}}>
        <span class='sr-only'>Loading...</span>
      </Spinner>      
    </div>
  )
}
export default Loader
//create Message.js
//bring Alert from react-bootstrap | pass in 2 props = varient and children(text we want inside)
//return Alert with varient and pass in children for msg to be displayed
import React from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({variant, children}) => {
  return  <Alert variant={variant}>{children}</Alert>
}
Message.defaultProps = {
  variant: 'info'
}
export default Message

//bring loader and message in homescreen.js
//add both components in relevent positions and pass danger as variant in message
//check for an error go to backend -> productRoutes.js and throw new Error('Some error') in asyncHandelr part 1 after product.find({}) check and remove it later
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions'

const HomeScreen = () => {
  const dispatch = useDispatch()

  const productList = useSelector( state => state.productList)
  const { loading, error, products } = productList

  useEffect(()=>{
    dispatch(listProducts())
  },[dispatch])

  // const products = []
  return (
    <>
     <h1>Latest products</h1>
     { loading ? <Loader/> : error ? <Message varient='danger'/> :     
      <Row>
      {products.map(product => (
        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
          <Product product={product}/>
        </Col>
      ))}   
    </Row> }

    </>
  )
}
export default HomeScreen

//Product details reducer and action
//same for productsScreen as we did for homeScreen we will fetch the details from state with productDetailsReducer and an action and get the data with useSelector and fire it off with useDispatch
//copy everything from productsConstants and paste under it | trmae LIST with DETAILS for all three
export const PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST'
export const PRODUCT_LIST_SUCCESS = 'PRODUCT_LIST_SUCCESS'
export const PRODUCT_LIST_FAIL = 'PRODUCT_LIST_FAIL'
export const PRODUCT_DETAILS_REQUEST = 'PRODUCT_DETAILS_REQUEST'
export const PRODUCT_DETAILS_SUCCESS = 'PRODUCT_DETAILS_SUCCESS'
export const PRODUCT_DETAILS_FAIL = 'PRODUCT_DETAILS_FAIL'
//next goto productReducer.js
//copy productListReducer and paste it under it and rename the reducer as productDetailsReducer | import the 3 cases | 
//in  PRODUCT_DETAILS_REQUEST ADD ...state to get all in state object 
//add product {} as object in reducer and loading as array in it as it is a swparate component | chandge products to product

import { PRODUCT_LIST_FAIL, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_REQUEST, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL } from "../constants/productConstants"

export const productListReducer = ( state = {products:[]}, action ) =>{
  switch (action.type){
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products:[]}
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload}
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload}
      default:
    return state
  }
}
export const productDetailsReducer = ( state = {product:{ reviews:[] }}, action ) =>{
  switch (action.type){
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state}
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload}
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload}
      default:
    return state
  }
}
//whenever we create a new reducer we have to add it to our store.js to get that part of state 
import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
})
const initialState = {}
const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
export default store

//Next we have to create an action | we have to make a request to api/products/:id
//create an action called listProductDetails in productActions.js 
//copy from listProducts | rename types to PRODUCT_DETAILS_ and import
//after dispatching the product | we need to get the id so in arrow function pass in  id | in URL also
import axios from 'axios'
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL } from '../constants/productConstants'

export const listProducts = () => async(dispatch) => {
  try{
    dispatch({ type: PRODUCT_LIST_REQUEST})
    const { data } = await axios.get('./api/products')
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data
    })
  }catch(error){
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}
export const listProductDetails = (id) => async(dispatch) => {
  try{
    dispatch({ type: PRODUCT_DETAILS_REQUEST})
    const { data } = await axios.get(`/api/products/${id}`)
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data
    })
  }catch(error){
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

//goto productScreen and remove axios | remove const [product, setProduct] = useState({}) | remove everything in useEffect | import useDispatch and useSelector from react-redux | inspde productScreen const dispatch = useDispatch() | import actions {ListProductDetails} from actions |in useEffect dispatch(listProductDetails(id from  URL with match.params.id)) [dispatch, match] as dependency | const productDetails = useSelector(state => state.productDetails) 

import React, { useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProductDetails } from '../actions/productActions'

const ProductScreen = ({ match }) => {
  const dispatch = useDispatch()
  const productDetails = useSelector(state => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  },[dispatch, match])
  
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      {loading ? <Loader/> : error  ? <Message variant='danger'>{error}</Message> : (
              <Row>
                  {/* bring the complete row here */}
            </Row>
      )}
    </>
  )
}
export default ProductScreen

//IMPLEMENTING CART | quantity select and add cart button
//add the quantity select on productScreen |  to show the numner of items in stock which can be selected
//goto productScreen.js
// the quantity will be a part of component level state | add useState in import before const dispatch = useDispatch()| 
const [qty, setQty] = useState(1)
//  set initial qty and setQty | it will be 1 by default as initial quantity| goto third <Row> ListGroup.Item before add to cart button | we  will show this option only if it is in stock so we use ternery operator
//inside form control we need to have qty options(not to be hard coded)[...Array(product.countInStock).keys()] if the count in stock is 5 we create an array [0,1,2,3,4] we map through it and display an option with key x+1 as array starts with 0
{product.countInStock > 0 && (
  <ListGroup.Item>
    <Row>
      <Col>Qty</Col>
      <Col>
        <Form.Control as="select" value={qty} onChange={(e) => setQty(e.target.value)}>
          {
          [...Array(product.countInStock).keys()].map(x => (
            <option key={x+1} value={x+1}>{x+1}</option>
          ))   
          }
        </Form.Control>
      </Col>
    </Row>
  </ListGroup.Item>
)}
 
//Add to cart sumbit handler
//add onClick handler to add to cart btn
  <ListGroup.Item>
  <Button onClick={addToCartHandler} className='btn-block' type='button' disabled={product.countInStock === 0}>
    Add To Cart
  </Button>
  </ListGroup.Item>
//under useEffect add the addToCartHandler | goTo cart page with some paramerers like id and quantity as a query string | so we use match for that | we are already destructring match from our props | we need history to push so pass in history bwith match in const ProductScreen
const ProductScreen = ({ history, match }) => {}
//props.history.push will redirect to cart/id/qty
const addToCartHandler = () => {
  history.push(`/cart/${match.params.id}?qty=${qty}`)
}
//now if we add qty and add to cart the url redirects with id and qty

//Create cartScreen.js in routes and create a component
import React from 'react'

const CartScreen = () => {
  return (
    <div>
      Cart
    </div>
  )
}
export default CartScreen

//bring in cartscreen in app.js
import CartScreen from './screens/CartScreen'
//in App.js add route under productscreen with id as optional parameter with ? after id|  for direct click on cart button
<Route path='/cart/:id?' component={CartScreen} />
//now it will show cart whne we click on cart button and add to catr as well

//Next we will handle cartReducer and add to cart action which will get details from databse for that specific item and add it to cart | this data will also be stored in local storage.

//Cart reducer and addToCart action
// goto constants and add a new file cartConstants.js 
export const CART_ADD_ITEM = 'CART_ADD_ITEM'
export const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM'
//create reducers 
//in reducers create a file called cartReducers.js
//import constsants here and create cartReducer which takes in the initial state with cartItems as an array as there can be more items , also pass in the action | add switch for action.type with default value as return state | case for CART_ADD_ITEM | if there exists previous items in cart we have to handle them also so we put the payload in a var called item | to find if it already exists create a var called existsItem = state.cartItems.find(x => x.product === item.product) | we can get from our state in our cartItems we want to find the id called product from payload| for each item pass it through x.product ie. id | check if it is is equal to our current Item.product | this will check if product exists in cart | if it does not exist we will push it in array return state with spread ...state and add the new item with cart items| cartItems: [...state.cartItems, item] | if it exists return state with ...state and for cartItems map through current cart items chk if the current id is == the the existing items then return item or x  which will be the same as previous

import {CART_ADD_ITEM} from '../constants/cartConstants'

  export const cartReducer = (state ={ cartItems: []}, action) =>{
    switch(action.type){
      case CART_ADD_ITEM:
        const item = action.payload

        const existItem = state.cartItems.find(x => x.product === item.product)

        if(existItem){
          return{
            ...state,
             cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x)
          }
        }else{
          return{
            ...state,
            cartItems: [...state.cartItems, item]
          }
        }
      default:
        return state
    }
  }
  //to use cartReducer pass it in store.js
  import { cartReducer } from './reducers/cartReducers'

  const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
  })
  //now we will see cartItems as empty array in redux dev tools

  //next we will create cartActions.js
  import axios from "axios"
  //when we add an item to cart we want to make request api/products/id to  get the fields from data to add to cart
  import { CART_ADD_ITEM } from '../constants/cartConstants'
  //export a function called addToCart which takes in id and qty which in we can get from URL and we use thunk so use async with dispatch | we will be saving our cart to local storage so we use getState along with dispatch | to make request destructure the data and get it from axios
  export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`)
  //dispatch with type and payload with fields from data object | qty comes from parameter
  dispatch({
    type: CART_ADD_ITEM,
    payload:{
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty
    }
  })
// localStorage api called setItem is used to getState with all cart items | lolcal storage uses strings and not JSON so stringify is used
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
//we stored it in localStorage but we get it from local storage in store.js where we have initialState | this is the place where we get cart items and later we get tokens and users in initial state as well

//goTo store.js
//above const initialState = {} | create a var and fetch data from localStorage with getItem | find cartItems as key if it is present run it through JSON.parse else empty array
const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
//in initialState object add cart state to cartItems: cartItemsFromStorage | which shows as empty array in redux dev tools | anything in cartItems will get loaded when store gets loaded
const initialState = {
  cart: { cartItems: cartItemsFromStorage },
}

//Implementing add to cart in cartScreen
//goTo cartScreen.js | we have cartReducer and addToCart action which we have to dispatch from the cartScreen component
//bring in useEffect | because useEffect is where we want to dispatch addToCart | when we come to cart page and if we have a product id in URL we want to add it to cart | also bring in useDispatch and useSelector to deal with redux state | import Message component from components | react-router Link | Row, Col,ListGroup, image, form, button, card from bootstrap | addToCart fromacrions cartActions
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'
//get id from match.params.id from URL so destructure match and location (as we also want to get quantity | to get a query string ? we need to use location.search) and history ( used to redirect)
const CartScreen = ({ match, location, history}) => {
  //get id there might not always be an id if we go directly to cart page| if we add the product to cart we get and id and qty in URL
  const productId = match.params.id
  //for qty chk for location.search | query params |
  const qty = location.search
  // console.log(qty) | chk console to get the quantity after ? | we check for qty only for number from (?qty=1) we get by split from = thus getting 2 index 0 index ?qty= and 1 index = number so we select 1 else : qty will be 1 | wrap it in Number to convert to number  | add after location.search
  const qty = location.search ? Number(location.search.split('=')[1]) : 1 
  //define dispatch
  const dispatch = useDispatch()
  useEffect(() => {
    if(productId){
      dispatch(addToCart(productId, qty))
    }
  },[dispatch, productId, qty])

  return (
    <div>
      Cart
    </div>
  )
}
export default CartScreen
  //now if we have an id and quantity in our cart the product will be added to our cart | we can chk in our state and local storage
//to get these items from state and put them in our cartScreen we need to use useSelector to get that piect of state | so under const dispatch add a var called cart
const cart = useSelector(state => state.cart)
//from cart pull out cartItems and console.log(cartItems)
const { cartItems } = cart
console.log(cartItems)

// Complete cartScreen till now
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id
  const qty = location.search ? Number(location.search.split('=')[1]) : 1
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const {cartItems} = cart
  console.log(cartItems)

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  return (
    <div>
      Cart
    </div>
  )
}
export default CartScreen

//designing cartScreen
//Remove div and create a <Row> with 2 <Col> with md={8} and {4}  respectively
//in Col 1 add heading and under it we will chk if there are any cart items previously added | we have the access for cartItems furm useSelector hook to get items from the state| if the length of cartItems = 0 show a message with link to root else show items in ListGroup  | to create listGroup.item for every product in cart map through cart items and show in list with key as product which represents the id. | create a row with col mmd{2}{3}{2}{2} for item.image item.name item.price and qty | these fileds come from cardActions dispatch to cartItems | for qty copy the qty formControl from the productScreen and instead of setQty we will get it from cart through dispatch with id as item.target and numbedr converted value of qty| in array instead of product put item.countInStock| also change value={item.qty}| next col will be remove btn add Button type button and a handler | under useEffect create removeFromCartHandler|
//in md={4} col we will create checkout | ass 2 listGroup.item 1st for subtotal and 2nd for Proceed To Checkout | we use reduce which is a high order array method | reduce takes in an arrow function with accumulator and the current item | take the accumulator and add the current item.qty to it, next parameter is 0 as accumulator starts from 0 here | this will be reactive if qty is changed as the cart is called again | then we create a button for checkout with checkoutHandeler
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card, NavItem, ListGroupItem } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

 //console.log(cartItems)

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) =>{
    console.log('remove')
  }
  const checkoutHandler = () => {
    // console.log('checkout')
    history.push('./login?redirect=shipping')
  }
  return (
  <Row>
  <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to='/'>Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                    <Form.Control as='select' value={item.qty} onChange={(e) => dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )}>
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button type='button' variant='light'onClick={() => removeFromCartHandler(item.product)}>
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup varient='flush'>
            <ListGroup.Item>
              <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
              ${cartItems.reduce((acc, item)=> acc + item.qty * item.price,0).toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button type='button' className='btn-block' disabled={cartItems.length === 0} onClick={checkoutHandler}>Proceed To Checkout</Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}
export default CartScreen
// add padding to h1 h2 in index.css`
h1{
  font-size: 1.8rem;
  padding: 1rem;
}
h2{
  font-size: 1.3rem;
  padding: 0.5rem 0;
}
// Remove items from cart
//In constants we have already added CART_REMOVE_ITEM |
// in cartReducer import this constant and add the case below CART_ADD_ITEM | filter for each item and chk to see if x.product(id) is not equal to action.payload  | this will remove the item
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'
case CART_REMOVE_ITEM:
  return {
    ...state,
    cartItems: state.cartItems.filter(x => x.product !== action.payload),
  }

  //in cartActions
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'
//below addToCart add this code with dispatch typoe remove and payload as id| add to localStorage also
export const removeFromCart = (id) => (dispatch, getState) =>{
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

// in cartScreen.js
import { addToCart, removeFromCart } from '../actions/cartActions'
import expressAsyncHandler from 'express-async-handler'
// import removeFromCart and add dispatch to the handeler
const removeFromCartHandler = (id) =>{
  dispatch(removeFromCart(id))
}


// NEXT we will work on user authentication | for features that will be active when the user is logged in | this can be achive in 2 parts 1st will be the backend part of login with postman | json webtokens etc | and the secind part of frontend where we create the signin and register in userReducer etc

// Clean the app using controller | we make productControllers to implement all the functionality of routes and productRoutes for only providing the routes
// Go to backend and create a folder called controllers and in it productController.js  | from productRoutes.js bring in asyncHandler and Product
// create a function  getProducts which takes in req, res and is async with asyncHandler | add contents from router.get from productRoutes to it do th same fot getProductById function and export both
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc    Fetch all products
// @route   GET /api/products
// @access  public
const getProducts = asyncHandler(async(req, res) => {
  const products = await Product.find({})
  res.json(products)
})

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  public
const getProductById = asyncHandler(async(req, res) => {
  const product = await Product.findById(req.params.id)
    
    if(product){
      res.json(product)
    }else{
      res.status(404)
      throw new Error('Product not found')
    }
})
export {getProducts, getProductById}

//Now we will clean up thr productRoutes file by removing the previous code and adding
import express from 'express'
const router = express.Router()
import {getProducts, getProductById} from '../controllers/productControllers.js'

//instead of router.get change the syntax to
router.route('/').get(getProducts)
router.route('/:id').get(getProductById)

export default router
//check the routes with postman
Terminal: npm run server
// go to postman and check the two requests now | it should work the same as previous | thus routes files only have routes which point to specific controller function in controller file which indeed has all the functionality of routes
// User authentication Endpoints | login route | we already have some users created with same password and seeded this data to database 
//in routes create a file called userRoutes.js and in controllers create a file called userController.js 
// in userController.js | the first route we create will authenticate the user | so validate the email and password and send back a token that is saved on the client to use it to access the protected routes later. 
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  public
const authUser = asyncHandler(async(req, res) => {

})
// the first thing to be done here is get data from body | when we set a form in frontend and submit it we send a request and send data in body | to twst create a folder in postman named users & auth ( routes for managing users and authentication) | in this folder create a POST request named POST/api/users/login | request -> {{URL}}/api/users/login | we need to send the email and password as well  so we go to body -> raw -> JSON part of request
{
  "email":"test@example.com",
  "password": "12345"
}
// if we send the request at this point it will not do anything as it is not hooked to our app | we can access it with req.body | we also need to add a middleware in server.js file to parse the request 
//go to server.js under const app = express() add app.use(express.json()) this allows to accept JSON data in body
//in userController we can now access the data with req.body.email or req.body.password but we will destructure both
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  public
const authUser = asyncHandler(async(req, res) => {
  const { email, password } = req.body
  res.send({email, password})
})
export{authUser}

//in userRoutes copy content from productRoutes
import express from 'express'
const router = express.Router()
import {authUser} from '../controllers/userController.js'
//we can have only post request for user login
router.post('/login', authUser)
export default router


// import userRoutes to server.js same as productRoutes
import userRoutes from './routes/userRoutes.js'
//mount it under -> app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

//now send the request in postman and we get email and password | thus we have access to the email and password being sent | this was to show that we can access the data from res.body | istead we will find user
//in userController.js | we will find the document via email (find the email which matches the provided email) with const user = await User.findOne({ email: email}) (since the terms are same we can code)const user = await User.findOne({ email }) | we also need to check the password | the password we get is a a plain text but the password in backend is encrypted so we need to use bcrypt | this can be done here instead we will create a method in userModels that can access the instantiated user
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const authUser = asyncHandler(async(req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
})

//in userModels.jsimport bcrypt and  under schema
import bcrypt from 'bcryptjs'
//this function receives a passwored an we use bcrypt method compare to check both passwords
userSchema.methods.matchPassword = async function(enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password)
}

//back in userController | check if the user exists
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const authUser = asyncHandler(async(req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  //if user match return id name email isAdmin (token -> not added yet)
  if(user && (await user.matchPassword(password))){
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: null
    
    })
  }else{
    //if user is not found status is 401( unauthorised) and throw an error
    res.status(401)
  }
  throw new Error('Invalid email or password')
})
export { authUser }
//if we send the request now with the correct user details we get the result 200 response| the auth is working
//next we will generate a token to access some private routes | we will create authentication middleware to create private routes
// JWT.io | authentication and authorization are 2 different things | we have already authenticated users but authorization is giving access to the user to use certain protected routes and apis we do that by sending jwt web token |  when we login we create and assign a token with secret key so server can tell if it is tempered with | we can store the token in clients browser | to access a private route we send that token to the header | we get to see three different parts in jwt.io | Header (type of token ie jwt and algorithm used to sign the token) | payload ( what we choose as we send a user id or session id  to identify user is sent in payload <dont send passwords here) | signature(verify that nothing has changed in the process  and sender is the same person accessing)
//at present as we send the request through postman we get some basic data and not token which will be used to send to a protected route | If a route is protected we send the authorization value as a token in it | typical convention is Bearer Token | in the frontend we save the token in broeser and access it through axios or fetch | we can use a package for this called jsonwebtoken

  Terminal: npm install jsonwebtoken
//to generate a token  we need to call the sign method and pass in the data(payload) for action (ie the user id) then we grab the user from database and we can validate the user we also pass in the secret which we keep in .ENV file , the third argument is expiresIn: we can use 30 days time| to decode the token we have a method called decode | 
//create a folder calld utils in backend | in this create a file  called generateToken.js 
// in generateToken
import jwt from 'jsonwebtoken'

const generateToken = (id) =>{
  return jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn:'30d',
  })
}

export default generateToken

// in .ENV add a var
JWT_SECRET = abc123

//in userController now we can add the token
import generateToken from '../utils/generateToken.js'
//change the value of token from null to
token: generateToken(user._id)

// go to postman and run the user auth command again and we get a token with the response. Copy the token and paste it in jwt.io | in payload we get the id , issued at and expiration time | now we will be able to use this token to validate and access protected routes we can use a piece fo middleware to do that

//custom authentication middleware
//create a new GET request in postman's user & auth folder named GET/api/users/profile this will be a protected route | {{URL}}/api/users/profile | now we will create that route
//go to userController and create that | for now we will add res.send('success') in it

// @desc    GET user profile
// @route   GET /api/users/profile
// @access  private
const getUserProfile = asyncHandler(async(req, res) => {
  res.send('Success')
})
export { authUser, getUserProfile }

//in userRoutes bring it in
import express from 'express'
const router = express.Router()
import {authUser, getUserProfile} from '../controllers/userController.js'

router.post('/login', authUser)
router.route('/profile').get(getUserProfile)
export default router

//now if we hit this route in postman we get success
//in middleware folder create a file called authMiddleware.js | to validate the token
  //import jwt and User create a function called protect as it is a middleware function we pass in rteq res and next | create a var token and the way token is sent is in headers part of request | go to postman under profile request go to headers add  the key as authorization and in value paste the token received | add bearer and space before token and send | console log req.header.authorization and call next() for now
import jwt from 'jsonwebtoken'
import User from '../models/userModel'

const protect = async(req, res, next) => {
  let token

  console.log(req.headers.authorization)

  next()
}
export { protect }

//go to userRoutes
// import protect
import { protect } from '../middleware/authMiddleware.js'
// the request we need to protect is router.route('./profile').get(getUserProfile) to implement middleware add protect as first argument | when ever we run that route the middleware also protects
router.route('/profile').get(protect, getUserProfile)
//if we send the request again with key and token | we get the token in console with Bearer
//check for the token with a conditional | 
// in authMiddleware 
// if we run this without token we get an error in console
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
const protect = async(req, res, next) => {
  let token
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    console.log('token found')
  }
  if(!token){
    res.status(401)
    throw new Error('Not authorized, no token')
  }
  console.log(req.headers.authorization)
  next()
}
export { protect }


//import expressHandler for this and add try catch |  in try block remove bearer with split(space) index 1 | add token and secret to decoded var | then we can get the user id with decoded.id in req.user | make the catch block and send request now in postman | we get success | if we modify the token we will get the error
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
const protect = asyncHandler(async(req, res, next) => {
  let token
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
  }{
    try{
      token = req.headers.authorization.split(' ')[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      // console.log(decoded)
      req.user = await User.findById(decoded.id).select('-password')
      next()
    }catch(error){
      console.error(error)
      res.status(401)
      throw new Error('Not authorized, token failed')
    }
  }
  if(!token){
    res.status(401)
    throw new Error('Not authorized, no token')
  }
  // console.log(req.headers.authorization)
})
export { protect }
// we can now add protect where ever we want to protect the route like in userController
//go to userController
// @desc    GET user profile
// @route   GET /api/users/profile
// @access  private
const getUserProfile = asyncHandler(async(req, res) => {
  const user = await User.findById(req.user._id)
  if(user){
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  }else{
    res.status(404)
    throw new Error('User not found')
  }
})

export { authUser, getUserProfile }
//now when we send the profile request in postman we get the user's info | you can also check the request for admin user | whatever we pass in as token has the user id and with this user id we fetch the data in our middleware and assign it to req.user | then we use this req.user in any protected route we want
//save the token in postman | remove the header key and value | we can do this by putting the token inside an enc variable when we log in | in POST/api/users/login request go to Tests and add
pm.environment.set('TOKEN',pm.response.json().token) //and save
//login again abd u see  th token in env variables | to use this token go to a private route like GET/api/users/profile Authorization -> Barer Token add token variable to it | then u can send the request

//user registration and password encryption
//in postman add a new request POST/api/users  -> POST -> {{URL}}/api/users

//in userController add the request to register a user | the ppassword here is not encrypted yet
//// @desc    Register a new user
// @route   POST /api/users
// @access  public
const registerUser = asyncHandler(async(req, res) => {
  const { name, email, password } = req.body
  const userExists = await User.findOne({ email })
  //if user match return id name email isAdmin (token -> not added yet)
  if(userExists){
    res.status(400)
    throw new Error('User already exists')
  }
  const user = await User.create({
    name,
    email,
    password
  })
  if(user){
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id)
    })
  }else{
    res.status(400)
    throw new error('Invalid user data')
  }
})
// add to export
export { authUser, getUserProfile, registerUser }


//go to userRoutes.js | import registerUser
import express from 'express'
const router = express.Router()
import {authUser, registerUser, getUserProfile} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'
//add a post request to root | it is not protected
router.route('/').post(registerUser)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)

export default router

//if we send the request now we get the message |  "message": "User validation failed: name: Path `name` is required., email: Path `email` is required., password: Path `password` is required
//becaues of userModel.js | so in the body we can send the raw JSON 
{
  "name": "NICS",
  "email":"test@wxample.com",
  "password": "123456"
}
//to encrypt the password we will add a piece of middleware | to get certain things to happen  on saves or finds or other actions
//in userModel.js under bcrypt
//before we save we need to encrypt the password | on userSchema add pre('save) | run async function with next| to encrypt we need a salt which takes a method from bcrypt called genSalt whics returns a promise | for password use hash method which takes in password and salt | we only want to do this is  if the password is sent or modified | if we have update profile functionality we update name or email and not password we dont want it to run as it will create a new hash and wo wont be able to login so if statement checks this.
userSchema.pre('save', async function (next) {
  if(!this.isModified('password')){
    next()
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})
//in userController we added User.create() which is syntactic sugar for save and plain text password will get encrypted through middleware | send the request now in postman | password is not sent but in compass you will find an encrypted password for the new user

//go to frontend 
//implement login | registration for user
  Terminal: npm run dev
//add the constants for login | constants -> reducers -> actions -> login screen
//goto constants folder anf create a file called userConstants.js
//create u constants 
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL'
export const USER_LOGOUT = 'USER_LOGOUT'

//in reducers folder create a file userReducers.js | copy product reducer here and modify | add USER_LOGOUT and return an empty object
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "../constants/userConstants"
export const userloginReducer = ( state = {}, action ) =>{
  switch (action.type){
    case USER_LOGIN_REQUEST:
      return { loading: true }
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload}
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload}
    case USER_LOGOUT:
      return {}
      default:
    return state
  }
}
//go to store.js and import userLoginReducer
import { userLoginReducer } from './reducers/userReducers'
//In the combineReducers add
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
})

//if we check the state in redux extension we find userLogin as an empty object

//add Actions | in actions folder add a file userActions.js | we want a login action that makes a request to login and get the token | const login takes in email and password | we use redux thunk here so async (dispatch) in it a try catch | in try dispatch type: userLoginRequest without payload | after request and before USER_LOGIN_SUCCESS we create a config  object to sent the content type to header of application/json | we will also send the Authorization here for the token later on | then post the request to api/users/login | second arg {email, password} | third arg config |after request dispatch USER_LOGIN_SUCCESS and payload we send the data received from the request | set user to localStorage as string
// we get the data from authUser from userController | fail portion will be same as other actions except type
import axios from "axios" 
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../constants/userConstants"
export const login = (email, password) => async (dispatch) => {
  try{
    dispatch({
      type: USER_LOGIN_REQUEST
    })
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const { data } = await axios.post('/api/users/login', { email, password }, config)
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data
    })
    localStorage.setItem('userInfo', JSON.stringify(data))
  }catch(error){
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}
// similar to cart we load the items initially from localStorage as initial state
//go to store.js | add userInfoFromStorage and add it to initialState | if there is nothing in localStorage return null
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
  userLogin: {userInfo: userInfoFromStorage},
}

//go to screens add loginScreens.js
//bring in useState for form fields component state | useEffect and Link from router | From, Button Row, Col from bootstrap | useDispatch and useSelector for redux state | message loader | login 
//setup component level state with email setEmail | password and setPassword | then create a form in a container | make separate component in formContainer.js in components
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return(
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Sign In
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          New Customer?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}
export default LoginScreen

// formContainer component in component folder`
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  )
}
export default FormContainer

//goto app/js fole and create a route for the login form | import loginScreeen and add route
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom' ;
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'

const App = () => {
  return (
    <Router>
    <Header/>
    <main className="py-3">
      <Container>
        <Route path='/login' component={LoginScreen} />
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/cart/:id?' component={CartScreen} />
        <Route path='/' component={HomeScreen} exact />
      </Container>
    </main>
    <Footer/>
    </Router>
  );
}
export default App;

//now we can login with the previously created users | if error go to network and go to response to see the message from backend 401 unauthorized | if we sign in correctly we get info in local storage with token to access protected routes | also checkout redux extension for state

// Show user name in navbar after login
//Go To components Header.js
//bringin user login state into this component | thus bring in useDispatch and useSelector | useSelector -> to bring in something from state | useDispatch if we want to call an action
import { useDispatch, useSelector } from 'react-redux'

// above return () create a var userLogin which gets the userLogin part of state | and we want to get { userInfo } from that
const userLogin = useSelector(state => state.userLogin)
const { userInfo } = userLogin
//above <LinkContainer to='/login>
// {userInfo ? (name and droupdown) : login}
{userInfo ? (
  <NavDropdown title={userInfo.name} id='username'>
    <LinkContainer to='/profile'>
      <NavDropdown.Item>Profile</NavDropdown.Item>
    </LinkContainer>
    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
  </NavDropdown> ) : <LinkContainer to='/login'>
  <Nav.Link><i className="fas fa-user"></i> Sign In</Nav.Link>
</LinkContainer>
}

// above return
const dispatch = useDispatch
const logoutHandler = () =>{
  // console.log('logout')
  dispatch(logout())
}
// also import { logout } in Header.js
import { logout } from '../actions/userActions'


//handling Logout
// goto userActions
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "../constants/userConstants"

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch({ type: USER_LOGOUT })
}

// Now we can login and logout in the app
// user register constant Reducer action and screen
// gpo to userConstants and add
export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST'
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS'
export const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL'

//goto user Reducer and add
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/userConstants"
export const userRegisterReducer = ( state = {}, action ) =>{
  switch (action.type){
    case USER_REGISTER_REQUEST:
      return { loading: true }
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload}
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload}
      default:
    return state
  }
}
//go to store.js and add the userRegister
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers'

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
})
//goto userActions copy the login and paste uder logout and change it
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_REQUEST } from "../constants/userConstants"

export const register = (email, password) => async (dispatch) => {
  try{
    dispatch({
      type: USER_REGISTER_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const { data } = await axios.post('/api/users', { name, email, password }, config)

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data
    })
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data
    })
    localStorage.setItem('userInfo', JSON.stringify(data))
  }catch(error){
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}
//goto screens create a file RegisterScreen.js and copy the content from LoginScreen.js
//impoer register action | in state se name, confirmPassword and message | message will be set to null | add userRegister state | 1st formgroup will be the name | add confirm password | then dispatch after checking for confirm passwords| agg the messahe component before error
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col,Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    if(password !== confirmPassword){
      setMessage('Passwords do not match')
    }else{
      dispatch(register(name, email, password))
    }
  }

  return(
    <FormContainer>
      <h1>Sign Up</h1>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
      <Form.Group controlId='email'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Register
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
         Have an Account?{' '}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default RegisterScreen
//goto app.js | add registerScreen`
import RegisterScreen from './screens/RegisterScreen'
//add route
<Route path='/register' component={RegisterScreen} />


//Goto backend in userController we have the userProfile  which returns the current user's data | we need to update the the user with put request so sopy the userProfile and paste it under it and make these changes

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  private
const updateUserProfile = asyncHandler(async(req, res) => {
  const user = await User.findById(req.user._id)
  if(user){
      user.name = req.body.name || user.name
      user.email = req.body.email || user.email
      if(req.body.password){
        user.password = req.body.password
      }
      const updatedUser = await user.save()
      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser._id)
      
      })
    } else {
    res.status(404)
    throw new Error('User not found')
  }
})
export { authUser, getUserProfile, registerUser, updateUserProfile }

//in userRoutes import updateUserProfile and add put route

import express from 'express'
const router = express.Router()
import {authUser, registerUser, getUserProfile, updateUserProfile} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'
//add a post request to root | it is not protected
router.route('/').post(registerUser)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)

export default router

//go to postman add a new request : PUT/api/users/profi in Users & Auth
//add the request {{URL}}/api/users/profile
//goto body-> raw -> JSON 
//login with a user you want to update with {{URL}}/api/users/login | as soon as we login the token is stored in env variable | go to put
{
  "name" : "Raj Kumar"
}
//we get not authorized as there is no auth token
//goto authorization bearer token and add token from {{Token}} now if we go to body and add user again with
{
  "name": "raj kumar",
  "email": "test@edit.com"
}
// we get the updated user | now you have to login with new credentials
//Now we are ready to implement it in frontend

// GoTo frontend to create a profile screen
//profile screen will show our details with edit options and orders(will be done later)

//go to constants -> userConstants
export const USER_DETAILS_REQUEST = 'USER_DETAILS_REQUEST'
export const USER_DETAILS_SUCCESS = 'USER_DETAILS_SUCCESS'
export const USER_DETAILS_FAIL = 'USER_DETAILS_FAIL'

//goto userReducer and copy the userRegisterReducer and change it
export const userDetailsReducer = ( state = { user: {}}, action ) =>{
  switch (action.type){
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true }
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload}
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload}
      default:
    return state
  }
}
//goto store.js
import { userLoginReducer, userRegisterReducer, userDetailsReducer } from './reducers/userReducers'

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
})
//we will now have it in our state | we want to create an action to get the current userdetails at api/users/profile with get request and a token as well
//go to userActions and copy register and change it
export const getUserDetails = (id) => async (dispatch, getState) => {
  try{
    dispatch({
      type: USER_DETAILS_REQUEST,
    })

    const { userLogin: { userInfo } } = getState()
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }
    const { data } = await axios.get(`/api/users/${id}`,config)

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    })

  }catch(error){
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

//goto screens and create a  screen called ProfileScreen.js and create a component rafce
//copy register screen and paste it here | make changes
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails } from '../actions/userActions'

const ProfileScreen = ({ location, history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    }else{
      if(!user.name){
        dispatch(getUserDetails('profile'))
      }else{
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [dispatch, history, userInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    if(password !== confirmPassword){
      setMessage('Passwords do not match')
    }else{
      //dispatch update profile 
    }
  }

  return <Row>
    <Col md={3}>
    <h2>User Profile</h2>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
      <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Update
        </Button>
      </Form>

    </Col>
    <Col md={9}>
      <h2>My orders</h2>
    </Col>
  </Row>
}
export default ProfileScreen

//add profileScreen to app.js
import ProfileScreen from './screens/ProfileScreen'
//add to Container under register
<Route path='/profile' component={ProfileScreen} />

//login with a user and go to profile page to check

//user update process
//go to userConstants
export const USER_UPDATE_PROFILE_REQUEST = 'USER_UPDATE_PROFILE_REQUEST'
export const USER_UPDATE_PROFILE_SUCCESS = 'USER_UPDATE_PROFILE_SUCCESS'
export const USER_UPDATE_PROFILE_FAIL = 'USER_UPDATE_PROFILE_FAIL'
export const USER_UPDATE_PROFILE_RESET = 'USER_UPDATE_PROFILE_RESET'

//goto user reducer | import USER_UPDATE_PROFILE_FAIL, USER_UPDATE_PROFILE_REQUEST, USER_UPDATE_PROFILE_SUCCESS
export const userUpdateProfileReducer = ( state = { }, action ) =>{
  switch (action.type){
    case USER_UPDATE_PROFILE_REQUEST:
      return { ...state, loading: true }
    case USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload}
    case USER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload}
      default:
    return state
  }
}

//goto userActions | import USER_UPDATE_PROFILE_FAIL, USER_UPDATE_PROFILE_REQUEST, USER_UPDATE_PROFILE_SUCCESS
export const updateUserProfile = (user) => async (dispatch, getState) => {
  try{
    dispatch({
      type: USER_UPDATE_PROFILE_REQUEST,
    })

    const { userLogin: { userInfo }, } = getState()
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }
    const { data } = await axios.put(`/api/users/profile`, user, config)

    dispatch({
      type: USER_UPDATE_PROFILE_SUCCESS,
      payload: data,
    })

  }catch(error){
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload:error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}


//goto store and add userUpdate reducer
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer } from './reducers/userReducers'
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
})

//goto profileScreen | import the action updateprofile
import { getUserDetails, updateUserProfile } from '../actions/userActions'

//remove this comment //dispatch update profile | and add
import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails, updateUserProfile } from '../actions/userActions'

const ProfileScreen = ({ history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user} = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      if(!user.name){
        dispatch(getUserDetails('profile'))
      }else{
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [dispatch, history, userInfo, user])

  const submitHandler = (e) => {
    e.preventDefault()
    if(password !== confirmPassword){
      setMessage('Passwords do not match')
    }else{
      //dispatch update profile 
      dispatch(updateUserProfile({ id: user._id, name, email, password }))
    }
  }

  return <Row>
    <Col md={3}>
    <h2>User Profile</h2>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {success && <Message variant='danger'>Profile Updated</Message>}
      {loading && <Loader />}
      {/* rest is same */}
  </Col>
  </Row>
}
export default ProfileScreen

//now we can update the profile | as we have now logged in we can go to cart and click on checkout button , this redirects to shipping page (http://localhost:3000/shipping) which was redirecting us to login page if we were not logged in (http://localhost:3000/login?redirect=shipping)

//next we will create the shipping screen | place order screen 

//Shipping screen and save address

//in screens folder create a new file called shippingscreen.js
import React from 'react'

const ShippingScreen = () => {
  return (
    <div>
      shipping
    </div>
  )
}
export default ShippingScreen
//import in app.js | to see the shipping page
import ShippingScreen from './screens/ShippingScreen'
<Route path='/shipping' component={ShippingScreen} />

//go to shippingscreen.js and add the imports from registerScreen.js | abd create a form for shipping
import React, { useState } from 'react'
import { Form, Button, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
const ShippingScreen = ({ history }) => {
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [country, setCountry] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('submit')
  }
  return (
    <FormContainer>
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}> 
        <Form.Group controller='address'>
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder='Enter Address' value={address} required onChange={(e) => setAddress(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controller='city'>
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder='Enter City' value={city} required onChange={(e) => setCity(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controller='postalCode'>
          <Form.Label>Postal Code</Form.Label>
          <Form.Control type="text" placeholder='Enter Postal Code' value={postalCode} required onChange={(e) => setPostalCode(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controller='country'>
          <Form.Label>Country</Form.Label>
          <Form.Control type="text" placeholder='Enter Country' value={country} required onChange={(e) => setCountry(e.target.value)}></Form.Control>
        </Form.Group>

        <Button type="submit" variant='primary'>Continue</Button>
      </Form>
    </FormContainer>
  )
}
export default ShippingScreen

//goto cartAction and create saveShippingCartAddress action 
export const saveShippingAddress = (data) => (dispatch) =>{
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  })
  localStorage.setItem('shippingAddress', JSON.stringify(data))
}
//goto cartConstants and create CART_SAVE_SHIPPING_ADDRESS constants
export const CART_SAVE_SHIPPING_ADDRESS = 'CART_SAVE_SHIPPING_ADDRESS'

//import this constant to cart actions file as well
//create  CART_SAVE_SHIPPING_ADDRESS  in cartReducer
// add the case CART_SAVE_SHIPPING_ADDRESS: and import it also | here we get the initial state with ...state and action.payload which is the data from from
//add shippingAddress after castItems
export const cartReducer = (state ={ cartItems: [], shippingAddress: {}}

case CART_SAVE_SHIPPING_ADDRESS:
  return {
    ...state,
    shippingAddress: action.payload,
  }

//load data from local storage through store.js on loading
//add shippingAddressfromStorage under userInfoFromStorage and add to initial state

const shippingAddressfromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}

const initialState = {
  cart: { cartItems: cartItemsFromStorage, shippingAddress: shippingAddressfromStorage },
  userLogin: {userInfo: userInfoFromStorage},
}

//goto cartScreen and now complete it
import React, { useState } from 'react'
import { Form, Button, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { saveShippingAddress } from '../actions/cartActions'

const ShippingScreen = ({ history }) => {
  const cart = useSelector(state => state.cart)
  const { shippingaddress } = cart

  const [address, setAddress] = useState(shippingaddress.address)
  const [city, setCity] = useState(shippingaddress.city)
  const [postalCode, setPostalCode] = useState(shippingaddress.postalCode)
  const [country, setCountry] = useState(shippingaddress.country)

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, postalCode, country}))
    history.push('./payment')
  }

  return (
    <FormContainer>
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}> 
        <Form.Group controller='address'>
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder='Enter Address' value={address} required onChange={(e) => setAddress(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controller='city'>
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder='Enter City' value={city} required onChange={(e) => setCity(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controller='postalCode'>
          <Form.Label>Postal Code</Form.Label>
          <Form.Control type="text" placeholder='Enter Postal Code' value={postalCode} required onChange={(e) => setPostalCode(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controller='country'>
          <Form.Label>Country</Form.Label>
          <Form.Control type="text" placeholder='Enter Country' value={country} required onChange={(e) => setCountry(e.target.value)}></Form.Control>
        </Form.Group>

        <Button type="submit" variant='primary'>Continue</Button>
      </Form>
    </FormContainer>
  )
}
export default ShippingScreen

//creating checkout steps | breadcrum 
//