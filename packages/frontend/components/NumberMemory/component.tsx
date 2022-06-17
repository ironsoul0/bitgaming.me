import React, { useState } from 'react';
import { useRouter } from 'next/router';

// import { useMe } from '../../hooks';
import { GameTemplate } from '../../components';
import { NumberMemoryIcon } from '../../core';
// import { GameType, NumberMemoryIcon, updateScore } from '../../core';
import clsx from 'clsx';

const icon = <NumberMemoryIcon />;

const ProgressBar = ({ progressPercentage } : {progressPercentage: number | string}) => {
    return (
        <div className='h-1 w-full bg-gray-300'>
            <div
                style={{ width: `${progressPercentage}%`}}
                className={`h-full ${
                    progressPercentage < 70 ? 'bg-red-600' : 'bg-green-600'}`}>
            </div>
        </div>
    );
};

export const NumberMemory: React.FC = () => {
    const router = useRouter();
  // const me = useMe();
  const [activeGame, setActiveGame] = useState(false);
  const [level, setLevel] = useState(3);
  const [guess, setGuess] = useState('');
  const [counter, setCounter] = React.useState(0);
  const [inputValue, setInputValue] = React.useState('');

  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const [gameActive, setGameActive] = useState(1);
  const [answer, setAnswer] = useState(getRandomInt(Math.pow(10, 2), Math.pow(10, 3)));

  const restartGame = () => {
    setCounter(0);
    setLevel(3);
    setGuess('');
    setAnswer(getRandomInt(Math.pow(10, 2), Math.pow(10, 3)));
    setInputValue('');
    setGameActive(1);
  };

  let res;

  const handleInputChange = (event: any) => {
    setGuess(event.target.value);
    setInputValue(event.target.value);
  };

  const sendUserInput = () => {
    setInputValue('');
    if (guess !== answer.toString()) {
      setGameActive(4);
      // if (me) updateScore(me.id, GameType.numberMemory, level);
    } else {
      setGameActive(3);
    }
  };

  const callNextLevel = () => {
    const randNumber = getRandomInt(Math.pow(10, level), Math.pow(10, level + 1));
    setLevel(level + 1);
    setAnswer(randNumber);
    setGameActive(1);
    setCounter(0);
  };

  const returnToHomePage = () => {
      router.push('/');
  };

  React.useEffect(() => {
    if (!activeGame) return;

    counter < 1 && setTimeout(() => setCounter(counter + 0.01), 20);

    if (counter >= 1) {
      setGameActive(2);
    }
  }, [activeGame, counter]);

  if (gameActive === 1) {
    res = (
      <>
        <div>
          <p
            className={clsx([
              level <= 5 && 'text-8xl',
              level === 6 && 'text-7xl',
              level === 7 && 'text-6xl',
              level === 8 && 'text-5xl',
              level > 8 && 'text-4xl',
              'mb-7',
            ])}
            style={{ color: 'white' }}
          >
            {' '}
            {answer}{' '}
          </p>
        </div>
        <div className="round-progress">
          <ProgressBar progressPercentage={counter}></ProgressBar>
        </div>
      </>
    );
  } else if (gameActive === 2) {
    res = (
      <>
        <p className="round-p mb-3">Какое было число?</p>
        <input
          className="block w-full focus:outline-none text-center bg-blue-700 border-2 border-blue-400 rounded px-4 py-4 text-white font-bold text-3xl"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        ></input>

        <button
          onClick={sendUserInput}
          className="focus:outline-none bg-yellow-300 text-black font-bold px-8 py-3 rounded mt-4 block mx-auto"
        >
          Отправить
        </button>
      </>
    );
  } else if (gameActive === 3) {
    res = (
      <>
        <p className="round-p"> Число </p>
        <p className="round-p-lg"> {answer} </p>
        <p className="round-p"> Ваш ответ </p>
        <p className="round-p-lg"> {guess} </p>
        <p className="animate-pulse round-level-p">Уровень {level}</p>
        <button
          onClick={callNextLevel}
          className="focus:outline-none bg-yellow-300 text-black font-bold px-8 py-3 rounded mt-4 block mx-auto"
        >
          Следующий
        </button>
      </>
    );
  } else {
    res = (
      <>
        <p className="round-p"> Число </p>
        <p className="round-p-lg"> {answer} </p>
        <p className="round-p"> Ваш ответ </p>
        <p
          className="round-p-lg "
          style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid', color: 'black' }}
        >
          {guess}
        </p>
        <p className="animate-pulse round-level-p">Уровень {level}</p>
        <div className="mx-auto">
          <button
            onClick={restartGame}
            className="focus:outline-none bg-yellow-300 text-black font-bold px-4 py-3 rounded mt-4 ml-3"
          >
            Попробовать снова
          </button>
        </div>
        <button
          onClick={returnToHomePage}
          className="focus:outline-none bg-gray-200 text-black font-bold px-4 py-3 rounded mt-4 ml-3"
        >
          Вернуться в меню
        </button>
      </>
    );
  }

  return (
    <GameTemplate
      name="Числовая память"
      description="Узнайте насколько хороша ваша память."
      icon={icon}
      activeGame={activeGame}
      setActiveGame={setActiveGame}
      className="px-4"
    >
      <div className="round-main">{res}</div>
    </GameTemplate>
  );
};
