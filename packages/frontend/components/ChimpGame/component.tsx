import { useEthers } from "@usedapp/core";
import clsx from "clsx";
import { VerticalNavigationTemplate } from "components/VerticalNavigationTemplate";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { ChimpIcon } from "../../core";
import { GameTemplate } from "../GameTemplate";
// import { ChimpIcon, GameType, updateScore } from '../../core';

const icon = <ChimpIcon />;

enum MODES {
  Question,
  Result,
}

type PuzzleState = Record<number, number>;

const CELLS = 25;
const MAX_STRIKES = 3;

export const ChimpGame = () => {
  const router = useRouter();
  const { account } = useEthers();
  const [activeGame, setActiveGame] = useState(false);

  const generatePuzzle = (cellsVisible: number): PuzzleState => {
    const cellIndices = new Array(CELLS)
      .fill(0)
      .map((_, i) => i)
      .sort(() => Math.random() - 0.5)
      .slice(0, cellsVisible);
    const cellValues = new Array(cellsVisible).fill(0).map((_, i) => i + 1);

    const puzzle = cellIndices.reduce(
      (acc, x, index) => ({ ...acc, [x]: cellValues[index] }),
      {}
    );

    return puzzle;
  };

  const [gameState, setGameState] = useState({
    mode: MODES.Question,
    strikes: 0,
    numbers: 4,
    puzzle: generatePuzzle(4),
  });

  const [target, setTarget] = useState(1);

  const handleClick = (valueClicked: number) => {
    if (valueClicked !== target) {
      if (gameState.strikes + 1 === MAX_STRIKES) {
        // if (me) updateScore(me.id, GameType.chimpTest, gameState.numbers);
        // TODO: update score of the given account
        console.log("use ethers account", account);
      }

      setGameState((gameState) => ({
        ...gameState,
        mode: MODES.Result,
        strikes: gameState.strikes + 1,
      }));
    } else {
      if (valueClicked === gameState.numbers) {
        setGameState((gameState) => ({
          ...gameState,
          mode: MODES.Result,
          numbers: gameState.numbers + 1,
        }));
      } else {
        setTarget((target) => target + 1);
      }
    }
  };

  const restartGame = () => {
    setTarget(1);

    setGameState({
      mode: MODES.Question,
      strikes: 0,
      numbers: 4,
      puzzle: generatePuzzle(4),
    });
  };

  const continueGame = () => {
    setTarget(1);

    setGameState((gameState) => ({
      ...gameState,
      puzzle: generatePuzzle(gameState.numbers),
      mode: MODES.Question,
    }));
  };

  const returnToHomePage = () => {
    router.push("/");
  };

  return (
    <VerticalNavigationTemplate>
      <GameTemplate
        name="Шимпанзе"
        description="Умнее ли вы Шимпанзе?"
        icon={icon}
        activeGame={activeGame}
        setActiveGame={setActiveGame}
        className="px-4"
      >
        {gameState.mode === MODES.Question && (
          <div className="w-full grid grid-cols-5 grid-rows-5 gap-2">
            {new Array(CELLS).fill(0).map((_, i) => {
              const value = gameState.puzzle[i];
              const valueIsShown = value && value >= target;

              return (
                <div
                  key={i}
                  className={clsx([
                    "flex justify-center items-center h-14 w-auto font-bold border-4 rounded border-gray-300 border-opacity-50 text-white text-xl",
                    !valueIsShown && "opacity-0",
                    target > 1 && "bg-white",
                  ])}
                  onClick={valueIsShown ? () => handleClick(value) : undefined}
                >
                  {value}
                </div>
              );
            })}
          </div>
        )}
        {gameState.mode === MODES.Result && (
          <div className="font-bold text-center text-white">
            {gameState.strikes === MAX_STRIKES ? (
              <div>
                <h3 className="text-4xl">Чисел</h3>
                <p className="text-5xl">{gameState.numbers}</p>
                <div className="mx-auto">
                  <button
                    onClick={restartGame}
                    className="px-4 py-3 mt-4 ml-3 font-bold text-black bg-yellow-300 rounded focus:outline-none"
                  >
                    Попробовать снова
                  </button>
                </div>
                <button
                  onClick={returnToHomePage}
                  className="px-4 py-3 mt-4 ml-3 font-bold text-black bg-gray-200 rounded focus:outline-none"
                >
                  Вернуться в меню
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-4xl">Чисел</h3>
                <p className="text-5xl">{gameState.numbers}</p>
                <h4 className="mt-4 text-3xl font-semibold">Штраф</h4>
                <h4 className="text-3xl">
                  {gameState.strikes} из {MAX_STRIKES}
                </h4>
                <button
                  onClick={continueGame}
                  className="px-4 py-3 mt-4 font-bold text-black bg-yellow-300 rounded focus:outline-none"
                >
                  Продолжить
                </button>
              </div>
            )}
          </div>
        )}
      </GameTemplate>
    </VerticalNavigationTemplate>
  );
};
