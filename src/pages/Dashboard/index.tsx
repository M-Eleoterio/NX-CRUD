import React from "react";
import PageLayout from "../../components/layouts/PageLayout";
import { Dashboard } from "../../components/Dashboard";

const DashboardPage = () => {
  return (
    <PageLayout>
      <Dashboard />
    </PageLayout>
  );
};

export default React.memo(DashboardPage);
