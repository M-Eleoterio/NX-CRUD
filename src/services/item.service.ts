import { ICreateItem, IItem, IUpdateItem } from "../interfaces/Item";

//simulando um banco de dados
let items: IItem[] = [];

const getAll = async () => {
  return Promise.resolve(items);
};

const create = async (data: ICreateItem) => {
  const newItem = { ...data, id: Date.now() };
  items = [...items, newItem];
  return Promise.resolve(newItem);
};

const remove = (id: number) => {
  items = items.filter((item) => item.id !== id);
  return Promise.resolve();
};

const update = async (id: number, data: IUpdateItem) => {
  const itemToUpdate = items.find((item) => item.id === id);
  if (!itemToUpdate) return Promise.reject("Item não encontrado");
  const updatedItem = { ...itemToUpdate, ...data, id };
  items = [...items, updatedItem];
  return Promise.resolve(updatedItem);
};

export const itemsService = {
  getAll,
  create,
  update,
  remove,
};
