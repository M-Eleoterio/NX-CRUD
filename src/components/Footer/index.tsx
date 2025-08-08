import { Container, Navbar } from "react-bootstrap";

export const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" className="mt-4">
      <Container fluid className="px-4">
        <Navbar.Brand>
          <h3>NXCrud</h3>
          <Navbar.Text>Sistema de gerenciamento de itens</Navbar.Text>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="h5">
            &copy; Todos os direitos reservados a NXCrud
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
