import React from "react";

import { VerticalNavigation } from "./libs/VerticalNavigation";

export const VerticalNavigationTemplate: React.FC = ({ children }: any) => {
  return (
    <div
      className="flex mx-auto max-w-screen-lg items-top"
      style={{ height: "100vh" }}
    >
      <div
        style={{
          borderRight: "1px solid gray",
        }}
      >
        <VerticalNavigation />
      </div>
      <div className="overflow-hidden">{children}</div>
    </div>
  );
};
