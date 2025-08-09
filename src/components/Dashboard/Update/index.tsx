import { Edit } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Alert, Button, Modal } from "react-bootstrap";
import { ItemForm } from "../Form";
import { ICreateItem } from "../../../interfaces/Item";
import { useItems } from "../../../context/ItemContext";

interface IUpdateItemProps {
  id: number;
}

export const UpdateItem: React.FC<IUpdateItemProps> = ({ id }) => {
  const { findItem, updateItem } = useItems();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<ICreateItem>({
    name: "",
    description: "",
    price: 0,
    is_active: false,
  });

  useEffect(() => {
    const getItem = async () => {
      const item = await findItem(id);
      if (item) {
        setData({
          name: item.name,
          description: item.description,
          price: item.price,
          is_active: item.is_active,
        });
      }
    };
    getItem();
  }, [id, findItem]);

  const handleUpdate = async () => {
    if (!data.name || !data.description || !data.price)
      return setError("Preencha todos os campos");
    if (isLoading) return;

    setIsLoading(true);
    try {
      await updateItem(id, data);
      setIsOpen(false);
    } catch (error) {
      setError(error as string);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button variant="link" onClick={() => setIsOpen(true)}>
        <Edit />
      </Button>
      <Modal show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header>
          <h4 className="fw-semibold">Editar item</h4>
        </Modal.Header>
        <Modal.Body>
          <ItemForm data={data} setData={setData} />
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-end">
          <Button
            onClick={() => setIsOpen(false)}
            variant="light"
            className="border"
          >
            Cancelar
          </Button>
          <Button onClick={handleUpdate}>Criar</Button>
        </Modal.Footer>
      </Modal>

      <Alert
        show={!!error}
        variant="danger"
        className="position-absolute bottom-0 end-0"
        style={{ zIndex: 9999 }}
        onClose={() => setError(null)}
        dismissible
      >
        <Alert.Heading>Erro!</Alert.Heading>
        <p>{error}</p>
      </Alert>
    </>
  );
};
