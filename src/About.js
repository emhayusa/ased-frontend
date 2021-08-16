import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Footer from './Footer'

export default function Links() {
    
    return (
        <>
        <Container>
            <Row className="mt-2">
                <Col className="p-2">
                  <h4>About</h4>
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
    )
}