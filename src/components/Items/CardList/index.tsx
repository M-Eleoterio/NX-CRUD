import { useState } from "react";
import { IItem } from "../../../interfaces/Item";
import { ItemCard } from "./ItemCard";

export const CardList = () => {
  const [items] = useState<IItem[]>([
    {
      id: 1,
      name: "Teste",
      description: "Teste",
      price: 123.5,
      is_active: true,
    },
    {
      id: 2,
      name: "Teste",
      description: "Teste",
      price: 123.5,
      is_active: true,
    },
  ]);

  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {items.map((item) => (
        <div className="col">
          <ItemCard item={item} />
        </div>
      ))}
    </div>
  );
};
