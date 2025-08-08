import { Package } from "lucide-react";
import { Button } from "react-bootstrap";

export const Banner = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(to right,rgb(56, 66, 155),rgb(95, 58, 180))",
      }}
      className="rounded text-white p-5 d-flex justify-content-between align-items-center mb-5"
    >
      <div>
        <h1 className="fw-bold">Gerencie seus itens</h1>
        <h3 className="mb-5">
          Experimente o nosso sistema completo para gestão de itens. Organize
          seu inventário de forma simples e eficiente!
        </h3>
        <Button href="/dashboard" variant="light">
          Começar agora!
        </Button>
      </div>

      <Package size={110} className="d-none d-sm-block" />
    </div>
  );
};
