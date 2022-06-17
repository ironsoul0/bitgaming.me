import clsx from "clsx";
import React, { FC } from "react";
import { AiOutlineLoading as LoadingSpinner } from "react-icons/ai";

import { Props } from "./props";

export const Spinner: FC<Props> = ({ className }: Props) => {
  return (
    <div className={clsx(["text-center", className])}>
      <LoadingSpinner className="mx-auto mt-5 text-3xl animate-spin" />
    </div>
  );
};

export default Spinner;
