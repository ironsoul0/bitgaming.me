import clsx from "clsx";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { AlarmIcon } from "../../core";
import { GameTemplate } from "../GameTemplate";
// import { GameType, AlarmIcon, updateScore } from '../../core';
// import { useMe } from '../../hooks';

const MIN_COUNT_DOWN = 2000;
const MAX_COUNT_DOWN = 4000;
const NUM_ROUND = 4;
const icon = <AlarmIcon />;

export const ReactionGame = () => {
  // const me = useMe();
  const router = useRouter();
  const [activeGame, setActiveGame] = useState(false);

  const [roundState, setRoundState] = useState(-1);
  const [falseStart, setFalseStart] = React.useState(false);
  const [level, setLevel] = useState(1);
  const [timerStart, setTimerStart] = useState(0);
  const [lastScore, setLastScore] = useState(0);
  const [sumScore, setSumScore] = useState(0);
  const [timerId, setTimerId] = useState(setTimeout(() => "", 1));

  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => setRoundState(0), [activeGame]);

  useEffect(() => {
    if (roundState == 0) {
      setTimerId(
        setTimeout(() => {
          setRoundState(1);
          setTimerStart(Date.now());
        }, getRandomInt(MIN_COUNT_DOWN, MAX_COUNT_DOWN))
      );
    } else clearTimeout(timerId);
  }, [roundState]);

  const handleClick = () => {
    if (roundState == 0) {
      setFalseStart(true);
      setRoundState(2);
    } else if (roundState == 1) {
      setLastScore(Date.now() - timerStart);
      setSumScore(sumScore + Date.now() - timerStart);
      if (level == NUM_ROUND) {
        setRoundState(3);
      } else {
        setFalseStart(false);
        setRoundState(2);
      }
    } else if (roundState == 2) {
      if (!falseStart) setLevel(level + 1);
      setRoundState(0);
    } else if (roundState == 3) {
    }
  };

  useEffect(() => {
    if (roundState === 3) {
      // if (me) updateScore(me.id, GameType.reactionTime, sumScore / NUM_ROUND);
    }
  }, [roundState]);

  const returnToHomePage = () => {
    router.push("/");
  };

  const restartGame = () => {
    setRoundState(0);
    setSumScore(0);
    setLevel(1);
    setLastScore(0);
  };

  let gameBody;
  if (roundState == 0) {
    gameBody = (
      <div className="px-4 text-center">
        <h2 className="text-2xl font-bold text-white fade">
          Приготовьтесь к зелёному экрану...
        </h2>
      </div>
    );
  } else if (roundState == 1) {
    gameBody = (
      <div className="px-4 text-center">
        <h2 className="text-2xl font-bold text-white fade">
          Нажимайте на экран!
        </h2>
      </div>
    );
  } else if (roundState == 2) {
    gameBody = (
      <div className="px-4 text-center">
        {falseStart && (
          <>
            <h2 className="text-2xl font-bold text-white fade">
              Фальш старт! Дождитесь появления зеленого экрана.
            </h2>
            <p className="mt-5 text-3xl text-white">
              Кликните чтобы переиграть раунд.
            </p>
          </>
        )}
        {!falseStart && (
          <>
            <h2 className="text-2xl font-bold text-white fade">
              Ваш результат: {lastScore} милисекунд.
            </h2>
            <p className="mt-5 text-3xl text-white">
              Кликните чтобы перейти к следующему раунду.
            </p>
          </>
        )}
      </div>
    );
  } else if (roundState == 3) {
    gameBody = (
      <div className="px-4 text-center">
        <h2 className="text-2xl font-bold text-white fade">
          Ваш результат: {lastScore} милисекунд.{" "}
        </h2>
        <h2 className="mt-3 text-3xl font-bold text-white fade">
          Ваше среднее время реакции: {sumScore / NUM_ROUND} милисекунд.{" "}
        </h2>
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
    );
  }

  return (
    <GameTemplate
      name="Тест на реакцию"
      description="Нажимайте на экран как только жёлтый цвет сменится на зелёный."
      icon={icon}
      activeGame={activeGame}
      setActiveGame={setActiveGame}
      className={clsx([!activeGame && "px-4"])}
    >
      {roundState != 1 && (
        <div
          className="flex items-center justify-center w-full h-screen bg-yellow-500"
          onClick={() => handleClick()}
        >
          {gameBody}
        </div>
      )}
      {roundState == 1 && (
        <div
          className="flex items-center justify-center w-full h-screen bg-green-500"
          onClick={() => handleClick()}
        >
          {gameBody}
        </div>
      )}
    </GameTemplate>
  );
};
