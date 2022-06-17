import clsx from "clsx";
import { useRouter } from "next/router";
import React, { cloneElement, FC } from "react";

import { CrossIcon } from "../../core";
import { Props } from "./props";

export const GameTemplate: FC<Props> = ({
  name,
  description,
  className,
  children,
  icon,
  activeGame,
  setActiveGame,
}: Props) => {
  const router = useRouter();

  const closeGame = () => {
    router.push("/");
  };

  return (
    <div
      className={clsx([
        "h-screen flex items-center justify-center bg-blue-500 relative",
        className,
      ])}
    >
      <div
        className="absolute z-30 w-10 text-white top-3 right-3"
        onClick={closeGame}
      >
        <CrossIcon />
      </div>
      {!activeGame && (
        <>
          <div className="text-center animate-smooth-appear">
            {cloneElement(icon, {
              className: "text-white w-32 mx-auto animate-pulse-fast",
            })}
            <h2 className="text-4xl font-bold text-white fade">{name}</h2>
            <p className="mt-5 text-2xl text-white">{description}</p>
            <p className="mt-5 text-2xl text-white">
              Нажмите чтобы продолжить.
            </p>
          </div>
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
