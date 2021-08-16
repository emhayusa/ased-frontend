import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Footer from './Footer'

function Publications() {
    

    return (
        <>
        <Container>
            <Row className="mt-2">
                <Col className="p-2">
                    <h4>Regional Maps</h4>
                </Col>
            </Row>
            <Row className="mt-2 h-events ">
                <Col className="m-2 h-image text-center bg-ungu">
                   
                </Col>
                <Col lg={1}></Col>
                <Col className="m-2 h-image text-center bg-ungu">
                   
                </Col>
            </Row>
            <Row className="mt-2 ">
                <Col className="p-2 text-center">
                    <h5>Regional Maps</h5>
                </Col>
                <Col className="p-2 text-center">
                    <h5>Root of Language</h5>
                </Col>
            </Row>
            <Row className="mt-2 p-5 h-events bg-ungu">
                <Col className="p-2 h-image text-center">
                    <h4>KNOWLEDGE PLACE</h4>
                </Col>
                <Col className="p-2 h-image text-center">
                    <h4>KNOWLEDGE PLACE</h4>
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
    )
}

export default Publications
