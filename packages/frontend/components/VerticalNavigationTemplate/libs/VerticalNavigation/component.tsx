import { useEthers } from "@usedapp/core";
import clsx from "clsx";
import { useCoinsContext } from "config/context";
import { ChimpIcon, CoinIcon } from "core";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const AccountBlock: React.FC = () => {
  const { deactivate, activateBrowserWallet, account } = useEthers();
  const { coins } = useCoinsContext();

  return (
    <div
      className={clsx(
        "flex items-center justify-start w-full py-4 mt-6 rounded-lg space-x-2 px-3.5 transition-all",
        account && "account-block"
      )}
      style={account ? { width: "96%" } : {}}
    >
      {!account ? (
        <button
          className="block w-full px-4 py-4 font-bold text-center connect-account rounded-md animate-pulse-fast"
          onClick={() => activateBrowserWallet()}
        >
          Please connect account
        </button>
      ) : (
        // <button
        //   className="px-4 py-3 text-white bg-blue-500 rounded-sm"
        //   onClick={() => activateBrowserWallet()}
        // >
        //   Please connect account
        // </button>
        <>
          <div className="mr-2">
            <img src="https://i.ibb.co/fxrbS6p/Ellipse-2-2.png" alt="avatar" />
          </div>
          <div className="flex flex-col items-start justify-start mr-16 space-y-2">
            <p className="text-base text-white cursor-pointer leading-4">
              {account?.substr(0, 10).concat("...")}
            </p>
            <div className="flex items-center font-bold text-gray-400 cursor-pointer text-md leading-3 account-balance">
              {/* {account?.substr(0, 10).concat("...")} */}
              <p>{coins} BIT</p>
              {/* <CoinIcon /> */}
            </div>
          </div>

          <div className="hidden ml-10">
            <button
              aria-label="visit"
              className="ml-8 bg-indigo-600 rounded-full focus:ring-2 focus:outline-none hover:bg-indigo-800 p-2.5"
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
      )}
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
                  d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 7L12 13L21 7"
                  stroke="currentColor"
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
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 8C15.1046 8 16 7.10457 16 6C16 4.89543 15.1046 4 14 4C12.8954 4 12 4.89543 12 6C12 7.10457 12.8954 8 14 8Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 6H12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 6H20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 14C9.10457 14 10 13.1046 10 12C10 10.8954 9.10457 10 8 10C6.89543 10 6 10.8954 6 12C6 13.1046 6.89543 14 8 14Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12H6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 12H20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 18H15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 18H20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-base leading-4">Number Memory</p>
          </button>
          <button
            style={{
              backgroundColor:
                router.pathname === "/reactionTime" ? "#202a30" : "transparent",
            }}
            className="flex items-center justify-start w-full py-3 pl-4 text-white rounded focus:outline-none space-x-6 hover:text-white hover:bg-gray-700"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 8C15.1046 8 16 7.10457 16 6C16 4.89543 15.1046 4 14 4C12.8954 4 12 4.89543 12 6C12 7.10457 12.8954 8 14 8Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 6H12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 6H20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 14C9.10457 14 10 13.1046 10 12C10 10.8954 9.10457 10 8 10C6.89543 10 6 10.8954 6 12C6 13.1046 6.89543 14 8 14Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12H6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 12H20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 18H15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 18H20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
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
