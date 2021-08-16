import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Dropdown from 'react-bootstrap/Dropdown'

export default function TopMenu() {

    return (
        <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#/" className="p-3">Home</Nav.Link>
            <Nav.Link href="#/about" className="p-3">About</Nav.Link>
            <Nav.Link href="#/members" className="p-3">Members</Nav.Link>
            <Nav.Link href="#/events" className="p-3">Events</Nav.Link>
            <Nav.Link href="#/gallery" className="p-3">Gallery</Nav.Link>
            <Nav.Link href="#/links" className="p-3">Links</Nav.Link>
            <Nav.Link href="#/publications" className="p-3">Publications</Nav.Link>
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
    )
}

