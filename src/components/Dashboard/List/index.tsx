import { Badge, Table } from "react-bootstrap";
import { useItems } from "../../../context/ItemContext";
import { Delete } from "../Delete";
import { Masks } from "../../../utils/masks";
import { UpdateItem } from "../Update";

export const ItemsList = () => {
  const { items } = useItems();

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Status</th>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Preço</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>#{item.id}</td>
            <td>
              <Badge bg={item.is_active ? "success" : "danger"}>
                {item.is_active ? "Ativo" : "Inativo"}
              </Badge>
            </td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{Masks.money(item.price)}</td>
            <td>
              <Delete id={item.id} />
              <UpdateItem id={item.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
