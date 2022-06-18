import { useEthers } from "@usedapp/core";
import clsx from "clsx";
import { VerticalNavigationTemplate } from "components/VerticalNavigationTemplate";
import { useCoinsContext } from "config/context";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

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
const REWARD = 5;

export const ChimpGame = () => {
  const { setCoins } = useCoinsContext();
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

  useEffect(() => {
    if (gameState.strikes === MAX_STRIKES) {
      toast.success(`Wow! You got ${gameState.numbers * REWARD} BIT tokens!`);
      setCoins((coins: number) => {
        localStorage.setItem(
          "coins",
          (coins + gameState.numbers * REWARD).toString()
        );
        return coins + gameState.numbers * REWARD;
      });
    }
  }, [gameState.strikes, gameState.numbers, setCoins]);

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

  const pregameText = (
    <>
      <div className="flex items-center mt-2 text-white">
        <ChimpIcon className="h-32 -ml-4 text-white w-30" />
        <div>
          <h2 className="text-4xl font-bold text-white fade">Chimpanze test</h2>
          <p className="mt-2 text-xl text-white">
            Are You Smarter Than a Chimpanzee?
          </p>
        </div>
      </div>
      <div className="mt-4 mb-4 text-white">
        <p className="mb-5 text-xl font-bold text-white">Description</p>
        <p className="mb-4 text-white">
          This is a test of working memory, made famous by a study that found
          that chimpanzees consistently outperform humans on this task. In the
          study, the chimps consistently outperformed humans, and some chimps
          were able to remember 9 digits over 90% of the time.
        </p>
        <p className="text-white">
          Variant of that concept, that gets increasingly difficult every turn,
          starting at 4 digits, and adding one every turn. If you pass a level,
          the number increases. If you fail, you get a strike. Three strikes and
          the test is over.
        </p>
        <div className="mt-4">
          <p>
            <b>Difficulty: </b>7
          </p>
          <p>
            <b>Coins per level: </b>
            {REWARD} BIT
          </p>
        </div>
      </div>
    </>
  );

  const gameDesc = (
    <div className="text-center animate-smooth-appear">
      <ChimpIcon className="w-32 mx-auto text-white animate-pulse-fast" />
      <h2 className="text-4xl font-bold text-white fade">Chimpanze</h2>
      <p className="mt-5 text-2xl text-white">
        Click the squares in order according to their numbers.
      </p>
      <p className="mt-2 text-2xl text-white">
        The test will get progressively harder.
      </p>
    </div>
  );

  return (
    <VerticalNavigationTemplate>
      <GameTemplate
        name="Шимпанзе"
        description="Умнее ли вы Шимпанзе?"
        icon={icon}
        activeGame={activeGame}
        setActiveGame={setActiveGame}
        className="px-4"
        pregameText={pregameText}
        gameDesc={gameDesc}
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
                <ChimpIcon className="w-24 mx-auto" />
                <h3 className="mb-2 text-4xl">Numbers: {gameState.numbers}</h3>
                {/* <p className="mt-4 mb-5 text-5xl">{gameState.numbers}</p> */}
                <h3 className="mb-5 text-4xl">
                  Reward: {gameState.numbers * REWARD} BIT coins
                </h3>
                {/* <p className="mt-4 mb-5 text-5xl">{gameState.numbers}</p> */}
                <div className="mx-auto">
                  <button
                    onClick={restartGame}
                    // className="px-4 py-3 mt-4 ml-3 font-bold text-black bg-yellow-300 rounded focus:outline-none"
                    className="px-8 py-3 mt-2 font-bold text-white rounded focus:outline-none bg-purple-950 ring-purple-800 transition-all hover:ring-2"
                  >
                    Try again
                  </button>
                </div>
                <button
                  onClick={returnToHomePage}
                  className="px-4 py-3 mt-4 font-bold text-black bg-gray-200 rounded focus:outline-none hover:ring-2 ring-gray-300 transition-all"
                >
                  Back to Main page
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-4xl">Numbers</h3>
                <p className="mt-4 text-5xl">{gameState.numbers}</p>
                <h4 className="mt-8 text-3xl font-semibold">Strikes</h4>
                <h4 className="mb-8 text-3xl">
                  {gameState.strikes} out of {MAX_STRIKES}
                </h4>
                <button
                  onClick={continueGame}
                  // className="px-4 py-3 mt-4 font-bold text-black rounded focus:outline-none"
                  className="px-8 py-3 mt-2 font-bold text-white rounded focus:outline-none bg-purple-950 ring-purple-800 transition-all hover:ring-2"
                >
                  Continue
                </button>
              </div>
            )}
          </div>
        )}
      </GameTemplate>
    </VerticalNavigationTemplate>
  );
};
