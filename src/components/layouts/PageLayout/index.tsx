import React from "react";
import { Container } from "react-bootstrap";
import { Header } from "../../Header";
import { Footer } from "../../Footer";

const PageLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div>
      <Header />
      <Container fluid className="px-4" style={{ minHeight: "80vh" }}>
        {children}
      </Container>
      <Footer />
    </div>
  );
};

export default React.memo(PageLayout);
