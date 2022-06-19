import { useEthers } from "@usedapp/core";
import clsx from "clsx";
import React, { cloneElement, FC, useState } from "react";

import { CrossIcon } from "../../core";
import { Props } from "./props";

export const GameTemplate: FC<Props> = ({
  className,
  children,
  activeGame,
  setActiveGame,
  pregameText,
  gameDesc,
}: Props) => {
  const [start, setStart] = useState(true);
  const { account, activateBrowserWallet } = useEthers();

  const closeGame = () => {
    setStart(true);
    setActiveGame(false);
  };

  return (
    <div
      className={clsx([
        "h-screen relative w-full",
        activeGame && "items-center justify-center flex",
        !start && "items-center justify-center flex",
        className,
      ])}
    >
      {(activeGame || !start) && (
        <div
          className="absolute z-30 w-10 text-white cursor-pointer top-3 right-3"
          onClick={closeGame}
        >
          <CrossIcon />
        </div>
      )}
      {!activeGame && start && (
        <>
          {cloneElement(pregameText)}

          <button
            onClick={
              account ? () => setStart(false) : () => activateBrowserWallet()
            }
            className="px-4 py-3 mt-2 font-bold text-white rounded focus:outline-none bg-purple-950 ring-purple-800 transition-all hover:ring-2"
          >
            {account ? "Start game" : "Please connect your wallet"}
          </button>
        </>
      )}
      {!activeGame && !start && (
        <>
          {gameDesc}
          <div
            className="absolute z-10 w-full h-full bg-black bg-opacity-0"
            onClick={() => setActiveGame(true)}
          />
        </>
      )}
      {activeGame && children}
    </div>
  );
};
