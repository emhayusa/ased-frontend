
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import slider_1 from './slider1.jpg'
import slider_2 from './slider2.jpg'

export  default function Home() {
    return (
        <>
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
        </>
    )
}
