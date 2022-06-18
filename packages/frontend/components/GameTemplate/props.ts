import React, { HTMLAttributes } from "react";

export type Props = HTMLAttributes<HTMLDivElement> & {
  name: string;
  description: string;
  icon: React.ReactElement;
  activeGame: boolean;
  setActiveGame: (x: boolean) => void;
  pregameText: React.ReactElement;
  gameDesc: React.ReactElement;
};
