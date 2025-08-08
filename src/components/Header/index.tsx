import { ChartColumn, Home, Package } from "lucide-react";
import { Button, Container, Navbar } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" className="mb-4">
      <Container fluid className="px-4">
        <Navbar.Brand className="fw-bold">
          <Package size={35} /> NXCrud
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button href="/">
            <Home size={20} /> Início
          </Button>

          <Button href="/dashboard">
            <ChartColumn size={20} /> Dashboard
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
