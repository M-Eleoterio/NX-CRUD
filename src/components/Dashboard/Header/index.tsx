import { CreateItem } from "../Create";

export const DashboardHeader = () => {
  return (
    <div className="d-flex w-100 justify-content-between align-items-center">
      <div>
        <h1 className="fw-bold">Dashboard</h1>
        <p className="text-secondary fs-5">Gerencie seus itens cadastrados</p>
      </div>
      <CreateItem />
    </div>
  );
};
