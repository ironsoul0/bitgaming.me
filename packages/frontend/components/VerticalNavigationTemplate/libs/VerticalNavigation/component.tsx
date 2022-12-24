import { useEthers } from "@usedapp/core";
import clsx from "clsx";
import { isValidChain } from "config";
import { useCoinsContext } from "config/context";
import { ChimpIcon, CoinIcon, NumberMemoryIcon, ReactionIcon } from "core";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const AccountBlock: React.FC = () => {
  const { deactivate, activateBrowserWallet, account, chainId } = useEthers();
  const { coins } = useCoinsContext();

  let content = (
    <button
      className="block w-full px-4 py-4 font-bold text-center connect-account rounded-md animate-pulse-fast"
      onClick={() => activateBrowserWallet()}
    >
      Please connect account
    </button>
  );

  if (account && chainId && !isValidChain(chainId)) {
    content = (
      <div className="w-full px-6 py-4 font-bold text-white bg-red-500 rounded-md">
        <p>Wrong chain!</p>
        <p>Please connect to Goerli.</p>
      </div>
    );
  } else if (account) {
    content = (
      <>
        <div className="mr-2">
          <img src="https://i.ibb.co/fxrbS6p/Ellipse-2-2.png" alt="avatar" />
        </div>
        <div className="flex flex-col items-start justify-start mr-16 space-y-2">
          <a
            target="_blank"
            className="text-base text-white cursor-pointer leading-4"
            href={`${process.env.NEXT_PUBLIC_ETHERSCAN}/${account}`}
            rel="noreferrer"
          >
            {account?.substr(0, 10).concat("...")}
          </a>
          <div className="flex items-center font-bold text-gray-400 cursor-pointer text-md leading-3 account-balance">
            {/* {account?.substr(0, 10).concat("...")} */}
            <p>{coins} BIT</p>
            {/* <CoinIcon /> */}
          </div>
        </div>

        <div className="ml-10">
          <button
            aria-label="visit"
            className="ml-8 bg-indigo-600 rounded-full focus:ring-2 focus:outline-none p-2.5 opacity-70"
            onClick={() => deactivate()}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.16666 10H15.8333"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.8333 15L15.8333 10"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.8333 5L15.8333 10"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </>
    );
  }

  return (
    <div
      className={clsx(
        "flex items-center justify-start w-full py-4 mt-6 rounded-lg space-x-2 px-3.5 transition-all",
        account && "account-block"
      )}
      style={
        account && chainId && isValidChain(chainId) ? { width: "96%" } : {}
      }
    >
      {content}
    </div>
  );
};

export const VerticalNavigation: React.FC = () => {
  const router = useRouter();

  console.log("router.pathname", router.pathname);
  return (
    <>
      <div
        id="Main"
        className="flex flex-col items-start justify-start w-full h-full transform xl:translate-x-0 ease-in-out transition duration-500 sm:w-72"
      >
        <button
          className="flex items-center justify-start w-full px-4 pt-6 text-white focus:outline-none space-x-3"
          onClick={() => router.push("/")}
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 17H0H1ZM7 17H6H7ZM17 27V28V27ZM27 17H28H27ZM17 0C12.4913 0 8.1673 1.79107 4.97918 4.97918L6.3934 6.3934C9.20644 3.58035 13.0218 2 17 2V0ZM4.97918 4.97918C1.79107 8.1673 0 12.4913 0 17H2C2 13.0218 3.58035 9.20644 6.3934 6.3934L4.97918 4.97918ZM0 17C0 21.5087 1.79107 25.8327 4.97918 29.0208L6.3934 27.6066C3.58035 24.7936 2 20.9782 2 17H0ZM4.97918 29.0208C8.1673 32.2089 12.4913 34 17 34V32C13.0218 32 9.20644 30.4196 6.3934 27.6066L4.97918 29.0208ZM17 34C21.5087 34 25.8327 32.2089 29.0208 29.0208L27.6066 27.6066C24.7936 30.4196 20.9782 32 17 32V34ZM29.0208 29.0208C32.2089 25.8327 34 21.5087 34 17H32C32 20.9782 30.4196 24.7936 27.6066 27.6066L29.0208 29.0208ZM34 17C34 12.4913 32.2089 8.1673 29.0208 4.97918L27.6066 6.3934C30.4196 9.20644 32 13.0218 32 17H34ZM29.0208 4.97918C25.8327 1.79107 21.5087 0 17 0V2C20.9782 2 24.7936 3.58035 27.6066 6.3934L29.0208 4.97918ZM17 6C14.0826 6 11.2847 7.15893 9.22183 9.22183L10.636 10.636C12.3239 8.94821 14.6131 8 17 8V6ZM9.22183 9.22183C7.15893 11.2847 6 14.0826 6 17H8C8 14.6131 8.94821 12.3239 10.636 10.636L9.22183 9.22183ZM6 17C6 19.9174 7.15893 22.7153 9.22183 24.7782L10.636 23.364C8.94821 21.6761 8 19.3869 8 17H6ZM9.22183 24.7782C11.2847 26.8411 14.0826 28 17 28V26C14.6131 26 12.3239 25.0518 10.636 23.364L9.22183 24.7782ZM17 28C19.9174 28 22.7153 26.8411 24.7782 24.7782L23.364 23.364C21.6761 25.0518 19.3869 26 17 26V28ZM24.7782 24.7782C26.8411 22.7153 28 19.9174 28 17H26C26 19.3869 25.0518 21.6761 23.364 23.364L24.7782 24.7782ZM28 17C28 14.0826 26.8411 11.2847 24.7782 9.22183L23.364 10.636C25.0518 12.3239 26 14.6131 26 17H28ZM24.7782 9.22183C22.7153 7.15893 19.9174 6 17 6V8C19.3869 8 21.6761 8.94821 23.364 10.636L24.7782 9.22183ZM10.3753 8.21913C6.86634 11.0263 4.86605 14.4281 4.50411 18.4095C4.14549 22.3543 5.40799 26.7295 8.13176 31.4961L9.86824 30.5039C7.25868 25.9371 6.18785 21.9791 6.49589 18.5905C6.80061 15.2386 8.46699 12.307 11.6247 9.78087L10.3753 8.21913ZM23.6247 25.7809C27.1294 22.9771 29.1332 19.6127 29.4958 15.6632C29.8549 11.7516 28.5904 7.41119 25.8682 2.64741L24.1318 3.63969C26.7429 8.20923 27.8117 12.1304 27.5042 15.4803C27.2001 18.7924 25.5372 21.6896 22.3753 24.2191L23.6247 25.7809Z"
              fill="currentColor"
            />
          </svg>
          <p className="text-2xl leading-6">BIT Gaming</p>
        </button>
        <AccountBlock />
        <p className="pb-0 pl-4 mt-6 font-bold text-white">Navigation</p>
        <div className="flex flex-col items-start justify-start w-full px-4 pb-5 mt-3 space-y-3">
          <Link href="/">
            <button
              style={{
                backgroundColor:
                  router.pathname === "/" ? "#202a30" : "transparent",
              }}
              className="flex items-center w-full py-3 pl-4 text-white rounded focus:outline-none jusitfy-start hover:text-white hover:bg-gray-700 space-x-6"
            >
              <svg
                className="fill-stroke"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 4H15C14.4477 4 14 4.44772 14 5V9C14 9.55228 14.4477 10 15 10H19C19.5523 10 20 9.55228 20 9V5C20 4.44772 19.5523 4 19 4Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-base leading-4">Rewards</p>
            </button>
          </Link>

          <Link href="/leaderboard">
            <button
              style={{
                backgroundColor:
                  router.pathname === "/leaderboard"
                    ? "#202a30"
                    : "transparent",
              }}
              className="flex items-center w-full py-3 pl-4 text-white rounded focus:outline-none jusitfy-start hover:text-white hover:bg-gray-700 space-x-6"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 20.999H9V12.599C9 12.4399 9.06321 12.2873 9.17574 12.1748C9.28826 12.0623 9.44087 11.999 9.6 11.999H14.4C14.5591 11.999 14.7117 12.0623 14.8243 12.1748C14.9368 12.2873 15 12.4399 15 12.599V20.999V20.999ZM20.4 20.999H15V18.099C15 17.9399 15.0632 17.7873 15.1757 17.6748C15.2883 17.5623 15.4409 17.499 15.6 17.499H20.4C20.5591 17.499 20.7117 17.5623 20.8243 17.6748C20.9368 17.7873 21 17.9399 21 18.099V20.399C21 20.5582 20.9368 20.7108 20.8243 20.8233C20.7117 20.9358 20.5591 20.999 20.4 20.999V20.999ZM9 20.999V16.099C9 15.9399 8.93679 15.7873 8.82426 15.6748C8.71174 15.5623 8.55913 15.499 8.4 15.499H3.6C3.44087 15.499 3.28826 15.5623 3.17574 15.6748C3.06321 15.7873 3 15.9399 3 16.099V20.399C3 20.5582 3.06321 20.7108 3.17574 20.8233C3.28826 20.9358 3.44087 20.999 3.6 20.999H9V20.999ZM10.806 5.11204L11.715 3.18504C11.7395 3.12995 11.7795 3.08316 11.8301 3.05032C11.8807 3.01748 11.9397 3 12 3C12.0603 3 12.1193 3.01748 12.1699 3.05032C12.2205 3.08316 12.2605 3.12995 12.285 3.18504L13.195 5.11204L15.227 5.42304C15.488 5.46304 15.592 5.79904 15.403 5.99104L13.933 7.49104L14.28 9.60904C14.324 9.88104 14.052 10.089 13.818 9.96004L12 8.96004L10.182 9.96004C9.949 10.088 9.676 9.88104 9.72 9.60904L10.067 7.49104L8.597 5.99104C8.407 5.79904 8.512 5.46304 8.772 5.42304L10.806 5.11304V5.11204Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-base leading-4">Leaderboard</p>
            </button>
          </Link>
        </div>
        <p className="pb-0 pl-4 font-bold text-white">Games</p>
        <div className="flex flex-col items-start justify-start w-full px-4 pb-5 mt-4 text-white space-y-3">
          <button
            style={{
              backgroundColor:
                router.pathname === "/chimpTest" ? "#202a30" : "transparent",
            }}
            className="flex items-center justify-start w-full py-3 pl-4 text-white rounded focus:outline-none hover:text-white hover:bg-gray-700"
            onClick={() => router.push("/chimpTest")}
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center justify-start">
                <ChimpIcon className="w-6" />
                {/* <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg> */}
                <p className="ml-6 text-base leading-4">Chimp test</p>
              </div>
            </div>
          </button>
          <button
            style={{
              backgroundColor:
                router.pathname === "/numberMemory" ? "#202a30" : "transparent",
            }}
            className="flex items-center justify-start w-full py-3 pl-4 text-white rounded focus:outline-none space-x-6 hover:text-white hover:bg-gray-700 hover:bg-red"
            onClick={() => router.push("/numberMemory")}
          >
            <NumberMemoryIcon className="w-6" />
            <p className="text-base leading-4">Number Memory</p>
          </button>
          <button
            style={{
              backgroundColor:
                router.pathname === "/reactionTime" ? "#202a30" : "transparent",
            }}
            onClick={() => router.push("/reactionTime")}
            className="flex items-center justify-start w-full py-3 pl-4 text-white rounded focus:outline-none space-x-6 hover:text-white hover:bg-gray-700"
          >
            <ReactionIcon className="w-6" />
            <p className="text-base leading-4">Reaction time</p>
          </button>
        </div>
        <div className="flex items-center hidden px-6 py-4 ml-4 font-bold coin-display rounded-md animate-pulse-fast">
          <CoinIcon className="mr-3" />
          <p>203 BIT</p>
        </div>
      </div>
    </>
  );
};
