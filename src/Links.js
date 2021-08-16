import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Footer from './Footer'

export default function Links() {
    
    function getData(){
        return (
        <>
        <p>- nama organisasi -</p>
        <p>- urlnya -</p>
        <p>- nama organisasi -</p>
        <p>- urlnya -</p>
        </>
        );
    }

    return (
        <>
        <Container>
            <Row className="mt-2">
                <Col className="p-2">
                  <h4>United Nations</h4>
                  {
                      getData()
                  }
                </Col>
            </Row>
            <Row className="mt-2">
                <Col className="p-2">
                    <h4>Links</h4>
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
    )
}