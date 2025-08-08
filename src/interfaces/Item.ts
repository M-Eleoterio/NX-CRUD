export interface IItem {
  id: number;
  is_active: boolean;
  name: string;
  description: string;
  price: number;
}

export interface ICreateItem extends Omit<IItem, "id"> {}

export interface IUpdateItem extends Partial<ICreateItem> {}
