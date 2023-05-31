import { useAppDispatch, useAppSelector } from "../../store/hooks"

import { menuToggle, closeMenu } from "../../store/navigation/actions"

import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas"
import NavDropdown from "react-bootstrap/NavDropdown"
import { NavLink } from "react-router-dom"

function NavigationBar() {
  const { isOpen } = useAppSelector(({ navigationState }) => navigationState)
  const dispatch = useAppDispatch()

  return (
    <>
      <Navbar
        bg="light"
        expand="md"
        className="mb-3"
        fixed="top"
        expanded={isOpen}
        onToggle={() => dispatch(menuToggle())}
      >
        <Container
          fluid
          style={{ display: "flex" }}
        >
          <Navbar.Toggle />

          <Navbar.Brand
            style={{
              margin: "auto",
              fontFamily: "Montserrat",
              fontSize: "2rem",
              color: "#4682B4",
            }}
          >
            MitraSoft
          </Navbar.Brand>

          <div
            className="d-none d-md-block"
            style={{ width: 60 }}
          />

          <Navbar.Offcanvas placement="start">
            <Offcanvas.Header
              closeButton
              style={{ borderBottom: "2px solid #eee", margin: " 0 1rem" }}
            >
              <Offcanvas.Title>USER</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-3 pe-3">
                <NavLink
                  to="/posts"
                  style={({ isActive }) => ({
                    color: isActive ? "blue" : "GrayText",
                    fontWeight: isActive ? 600 : 400,
                    alignSelf: "center",
                  })}
                  onClick={() => dispatch(closeMenu())}
                >
                  Post list
                </NavLink>
                <span style={{ width: "1rem" }} />
                <NavLink
                  to="/about-me"
                  style={({ isActive }) => ({
                    color: isActive ? "blue" : "GrayText",
                    fontWeight: isActive ? 600 : 400,
                    alignSelf: "center",
                  })}
                  onClick={() => dispatch(closeMenu())}
                >
                  About me
                </NavLink>
              </Nav>
              <NavDropdown.Divider style={{ height: "1rem" }} />

              <div
                className="d-none d-md-block"
                style={{ flexGrow: 1 }}
              />

              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search by post title"
                  className="me-2"
                  aria-label="Search by post title"
                />
                <Button variant="outline-primary">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}

export default NavigationBar
