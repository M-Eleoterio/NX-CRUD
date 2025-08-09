import { Form } from "react-bootstrap";
import { ICreateItem } from "../../../interfaces/Item";
import { Masks } from "../../../utils/masks";
import { useEffect, useState } from "react";

interface IItemFormProps {
  data: ICreateItem;
  setData: React.Dispatch<React.SetStateAction<ICreateItem>>;
}

export const ItemForm: React.FC<IItemFormProps> = ({ data, setData }) => {
  const [priceInput, setPriceInput] = useState<string>("");

  useEffect(() => {
    setPriceInput(Masks.money(data.price ?? 0));
  }, [data.price]);

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>
          Nome do item <span className="text-danger">*</span>
        </Form.Label>
        <Form.Control
          placeholder="Digite o nome do item"
          value={data.name}
          required
          onChange={(e) =>
            setData((prev) => ({ ...prev!, name: e.target.value }))
          }
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>
          Descrição do item <span className="text-danger">*</span>
        </Form.Label>
        <Form.Control
          value={data.description}
          as="textarea"
          placeholder="Digite a descrição do item"
          required
          onChange={(e) =>
            setData((prev) => ({
              ...prev!,
              description: e.target.value,
            }))
          }
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>
          Preço (R$) <span className="text-danger">*</span>
        </Form.Label>
        <Form.Control
          type="text"
          inputMode="decimal"
          placeholder="0,00"
          value={priceInput}
          onFocus={() => {
            const raw = Masks.clearMoney(priceInput)
              .toString()
              .replace(".", ",");
            setPriceInput(raw);
          }}
          onChange={(e) => {
            const next = e.target.value.replace(/[^\d,.-]/g, "");
            setPriceInput(next);
          }}
          onBlur={() => {
            const num = Masks.clearMoney(priceInput);
            setData((prev) => ({ ...prev!, price: num }));
            setPriceInput(Masks.money(num));
          }}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Ativo</Form.Label>
        <Form.Switch
          checked={data.is_active}
          onChange={(e) =>
            setData((prev) => ({ ...prev!, is_active: e.target.checked }))
          }
        />
      </Form.Group>
    </Form>
  );
};
