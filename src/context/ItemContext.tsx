import React, { createContext, useContext, useState } from "react";
import { ICreateItem, IItem, IUpdateItem } from "../interfaces/Item";
import { itemsService } from "../services/item.service";

interface IItemContext {
  items: IItem[];
  createItem: (item: ICreateItem) => Promise<void>;
  updateItem: (id: number, item: ICreateItem) => Promise<void>;
  removeItem: (id: number) => Promise<void>;
}

const ItemContext = createContext<IItemContext | null>(null);

export const ItemProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [items, setItems] = useState<IItem[]>([]);

  const createItem = async (data: ICreateItem) => {
    const newItem = await itemsService.create(data);
    setItems((oldItems) => [...oldItems, newItem]);
  };

  const updateItem = async (id: number, data: IUpdateItem) => {
    const updatedItem = await itemsService.update(id, data);
    setItems((oldItems) => [
      ...oldItems.filter((item) => item.id !== updatedItem.id),
      updatedItem,
    ]);
  };

  const removeItem = async (id: number) => {
    await itemsService.remove(id);
    setItems((oldItems) => oldItems.filter((item) => item.id !== id));
  };

  return (
    <ItemContext.Provider value={{ items, createItem, removeItem, updateItem }}>
      {children}
    </ItemContext.Provider>
  );
};

export const useItems = (): IItemContext => {
  const context = useContext(ItemContext);
  if (!context)
    throw new Error(
      "o contexto de itens deve ser utilizado dentro de um ItemProvider"
    );
  return context;
};
