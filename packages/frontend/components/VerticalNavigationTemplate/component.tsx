import React from "react";

import { VerticalNavigation } from "./libs/VerticalNavigation";

export const VerticalNavigationTemplate: React.FC = ({ children }: any) => {
  return (
    <div
      className="flex mx-auto max-w-screen-lg items-top"
      style={{ minHeight: "100vh" }}
    >
      <div>
        <VerticalNavigation />
      </div>
      <div
        className="flex-1 pl-2"
        style={{
          borderLeftColor: "#2c3a43",
          borderLeftWidth: 1,
        }}
      >
        {children}
      </div>
    </div>
  );
};
