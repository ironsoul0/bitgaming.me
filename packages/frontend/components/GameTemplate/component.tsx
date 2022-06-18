import clsx from "clsx";
import { useRouter } from "next/router";
import React, { cloneElement, FC, useState } from "react";
import { toast } from "react-toastify";

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
  const [start, setStart] = useState(true);
  const router = useRouter();

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
          <div className="flex items-center mt-2 text-white">
            {cloneElement(icon, {
              className: "text-white w-30 -ml-4 h-32",
            })}
            <div>
              <h2 className="text-4xl font-bold text-white fade">
                Chimpanze test
              </h2>
              <p className="mt-2 text-xl text-white">
                Are You Smarter Than a Chimpanzee?
              </p>
            </div>
          </div>
          <div className="mt-4 mb-4 text-white">
            <p className="mb-5 text-xl font-bold text-white">Description</p>
            <p className="mb-4 text-white">
              This is a test of working memory, made famous by a study that
              found that chimpanzees consistently outperform humans on this
              task. In the study, the chimps consistently outperformed humans,
              and some chimps were able to remember 9 digits over 90% of the
              time.
            </p>
            <p className="text-white">
              Variant of that concept, that gets increasingly difficult every
              turn, starting at 4 digits, and adding one every turn. If you pass
              a level, the number increases. If you fail, you get a strike.
              Three strikes and the test is over.
            </p>
            <div className="mt-4">
              <p>
                <b>Difficulty: </b>7
              </p>
              <p>
                <b>Coins per level: </b>5 BIT
              </p>
            </div>
          </div>
          <button
            onClick={() => setStart(false)}
            className="px-4 py-3 mt-2 font-bold text-white rounded focus:outline-none bg-purple-950 ring-purple-800 transition-all hover:ring-2"
          >
            Start game
          </button>
        </>
      )}
      {!activeGame && !start && (
        <>
          <div className="text-center animate-smooth-appear">
            {cloneElement(icon, {
              className: "text-white w-32 mx-auto animate-pulse-fast",
            })}
            <h2 className="text-4xl font-bold text-white fade">Chimpanze</h2>
            <p className="mt-5 text-2xl text-white">
              Click the squares in order according to their numbers.
            </p>
            <p className="mt-2 text-2xl text-white">
              The test will get progressively harder.
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
