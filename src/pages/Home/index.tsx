import React from "react";
import PageLayout from "../../components/layouts/PageLayout";
import { Home } from "../../components/Home";

const HomePage = () => {
  return (
    <PageLayout>
      <Home />
    </PageLayout>
  );
};

export default React.memo(HomePage);
