import { Badge, Card } from "react-bootstrap";
import { IItem } from "../../../../interfaces/Item";
import { Masks } from "../../../../utils/masks";

interface ItemCardProps {
  item: IItem;
}

export const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <Card className="w-100">
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Subtitle>
          {item.is_active ? (
            <Badge bg="success">Ativo</Badge>
          ) : (
            <Badge bg="danger">Inativo</Badge>
          )}
        </Card.Subtitle>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text>
          <h4>{Masks.money(item.price)}</h4>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
