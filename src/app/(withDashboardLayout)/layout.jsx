import DashboardSidebar from "@/components/shared/DashboardSidebar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex gap-4">
      <DashboardSidebar />
      <main className="ml-60 px-4 pt-6">{children}</main>
    </div>
  );
};

export default layout;
