import { Trash } from "lucide-react";
import { useItems } from "../../../context/ItemContext";
import React from "react";
import { Button } from "react-bootstrap";

interface IDeleteProps {
  id: number;
}

export const Delete: React.FC<IDeleteProps> = ({ id }) => {
  const { removeItem } = useItems();

  return (
    <Button variant="link" className="p-0" onClick={() => removeItem(id)}>
      <Trash color="red" />
    </Button>
  );
};
