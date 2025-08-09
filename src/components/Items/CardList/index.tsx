import { useState } from "react";
import { IItem } from "../../../interfaces/Item";
import { ItemCard } from "./ItemCard";
import { useItems } from "../../../context/ItemContext";

export const CardList = () => {
  const { items } = useItems();

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
