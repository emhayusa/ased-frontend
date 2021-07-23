import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import slider_1 from './slider1.jpg'
import slider_2 from './slider2.jpg'

function App() {
  return (
    <Container fluid className="bg-white">
      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home" className="p-3">Home</Nav.Link>
            <Nav.Link href="#features" className="p-3">About</Nav.Link>
            <Nav.Link href="#pricing" className="p-3">Member</Nav.Link>
            <Nav.Link href="#pricing" className="p-3">Events</Nav.Link>
            <Nav.Link href="#pricing" className="p-3">Gallery</Nav.Link>
            <Nav.Link href="#pricing" className="p-3">Links</Nav.Link>
            <Nav.Link href="#pricing" className="p-3">Publication</Nav.Link>
          </Nav>
          <Nav>
            <Dropdown className="mr-3">
              <Dropdown.Toggle id="dropdown-basic" variant="light">
                UNGEGN
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Events</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Publication</Dropdown.Item>
                <Dropdown.Item href="#/action-3">About</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button as="input" type="button" value="Sign In" />
          </Nav>
        </Container>
      </Navbar>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={slider_1}
            alt="First slide"
            height="300px"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={slider_2}
            alt="Second slide"
            height="300px"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Row className="p-3">
        <Col lg={3} className="border bg-danger h-main" >
          <h4>Activities</h4>
        </Col>
        <Col lg={9} className="border b-light h-main">
          <h4>
            Content
          </h4>
        </Col>
      </Row>

      <Row className="mt-2 p-3 h-about">
        <Col lg={5} className="border bg-info">

        </Col>
        <Col lg={7} className="border bg-light">
          <h4>About Us</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra, purus tempus blandit volutpat, nisl odio venenatis ante, at consequat nisl tellus vitae mi. Proin a purus gravida, sollicitudin nisi at, aliquam eros. Aenean tincidunt blandit augue ac faucibus. Praesent nec purus a diam vulputate pellentesque cursus vel eros. Vivamus faucibus viverra risus, at porttitor diam dictum vel. Phasellus eget placerat enim. Maecenas fringilla, felis in hendrerit congue, dolor quam ullamcorper dui, ac facilisis massa sem eget odio. Aenean placerat vitae metus non ultricies. Curabitur metus est, pulvinar vitae accumsan sit amet, viverra a ex. Mauris aliquam vestibulum elit.</p>
        </Col>
      </Row>
      <Row className="mt-2 p-5 h-events bg-dark">
        <Col className="border bg-success p-2 mx-5 h-image">

        </Col>
        <Col className="border bg-success p-2 mx-3 h-image">

        </Col>
        <Col className="border bg-success p-2 mx-3 h-image">

        </Col>
      </Row>

      <Row className="mt-2 p-5 h-events bg-ungu">
        <Col className="p-2 h-image text-center">
          <h4>KNOWLEDGE PLACE</h4>
          <p>Let's Explore</p>
          <Button variant="primary">Through Here</Button>
        </Col>
      </Row>

      <Row className="mt-2 p-5 h-events bg-white">
        <Col className="border-right p-2 h-image">
          <h5>UNGEGN ASED</h5>
          <p className="text-justified">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt tempor lobortis. Vivamus efficitur consectetur eros vel pharetra. Fusce commodo viverra aliquet.
          </p>
        </Col>
        <Col className="p-2  h-image">

        </Col>
        <Col className="p-2 h-image">

        </Col>
        <Col className="p-2 h-image">

        </Col>
      </Row>

    </Container>
  );
}

export default App;
