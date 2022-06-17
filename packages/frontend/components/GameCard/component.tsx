import clsx from "clsx";
import Link from "next/link";
import React, { FC, forwardRef } from "react";

// import aituBridge from '@btsd/aitu-bridge';
import {
  AlarmIcon,
  ChartIcon,
  ChimpIcon,
  GameType,
  NumberMemoryIcon,
  PlayIcon,
  ShareIcon,
} from "../../core";
import { Props } from "./props";

export const GameCard: FC<Props> = forwardRef<HTMLDivElement, Props>(
  ({ name, id, percentile, points, unit, className }: Props, ref) => {
    const gameIcons = {
      reactionTime: <AlarmIcon className="w-32 p-3" />,
      numberMemory: <NumberMemoryIcon className="w-32 p-2" />,
      chimpTest: <ChimpIcon className="w-32" />,
    };

    const shareInfo = async () => {
      const text = [
        points
          ? `Мой рекорд в мини-игре "${name}" это ${points} ${unit}`
          : `Привет! Нашел очень крутое приложение.`,
        "Мини-приложение Aitu IQ позволяет очень легко и весело измерять способности мозга в увлекательной и соревновательной форме!",
        "Скорее переходи по ссылке и присоединяйся ;)",
        "https://i2.app.link/Q4GDVUuANeb",
      ].join("\n\n");

      console.log("text", text);

      // await aituBridge.share(text);
    };

    return (
      <div
        className={clsx("flex flex-col justify-between gap-x-4", className)}
        ref={ref}
      >
        <div className="grid grid-cols-12">
          <div className="flex justify-center col-span-6">
            {gameIcons[id as GameType]}
          </div>
          <div className="flex flex-col justify-center mx-5 col-span-6">
            <div className="flex flex-col justify-center">
              <p className="text-lg font-black">{name}</p>
            </div>
            <div className="flex flex-col">
              <div className="flex">
                <p className="text-4xl font-bold">
                  {points?.toFixed(0) || "?"}
                </p>
                <p className="self-end text-lg ml-1.5">{points ? unit : ""}</p>
              </div>
              <div className="relative flex items-center h-8 bg-gray-300 w-100">
                <div
                  className="absolute flex items-center h-8 bg-blue-500"
                  style={{ width: `${percentile}%` }}
                >
                  {percentile !== null && percentile >= 50.0 && (
                    <p className="pr-3 ml-auto font-bold text-white">
                      {percentile?.toFixed(1)}%
                    </p>
                  )}
                </div>
                {percentile !== null && percentile < 50.0 && (
                  <p
                    className="pl-3 ml-auto font-bold text-gray-500"
                    style={{ marginLeft: `${percentile}%` }}
                  >
                    {percentile?.toFixed(1)}%
                  </p>
                )}
                {percentile === null && (
                  <p className="ml-2 font-bold text-gray-500">?</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="flex justify-center col-span-6">
            <div className="container flex items-center justify-center p-3 mx-3 bg-gray-100 rounded-full shadow-sm">
              <Link href={`/game/${id}`}>
                <div className="flex items-center h-8 text-xl font-medium text-blue-500">
                  <PlayIcon className="w-10" />
                  <p className="ml-1.5">Играть</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex justify-end col-span-3">
            <div className="flex items-center justify-center p-3 mx-2 my-auto bg-gray-100 rounded-full shadow-sm">
              <Link href={`/leaderboard/${id}`}>
                <div className="flex items-center text-xl font-medium text-blue-500">
                  <ChartIcon className="w-8" />
                </div>
              </Link>
            </div>
          </div>
          <div className="flex col-span-3 justify-begin">
            <div className="flex items-center justify-center p-3 mx-2 my-auto bg-gray-100 rounded-full shadow-sm">
              <div
                onClick={shareInfo}
                className="flex items-center text-xl font-medium text-blue-500"
              >
                <ShareIcon className="w-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

GameCard.displayName = "GameCard";
