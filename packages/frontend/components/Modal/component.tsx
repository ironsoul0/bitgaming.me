import clsx from "clsx";
import { NFTContract } from "config/contracts";
import React from "react";

type Props = {
  content: string;
  handleClick?: () => void;
  showModal: boolean;
  setShowModal: (x: boolean) => void;
  mintedToken: number;
};

export const Modal: React.FC<Props> = ({
  showModal,
  setShowModal,
  mintedToken,
}) => {
  return (
    <div
      className={clsx(
        "flex items-center justify-center h-screen bg-gray-200 modal-body absolute",
        showModal && "modal-active"
      )}
    >
      {/* <button className="px-4 py-2 font-bold text-gray-500 bg-transparent border border-gray-500 rounded-full modal-open hover:border-indigo-500 hover:text-indigo-500">
        Open Modal
      </button> */}

      <div
        className={clsx(
          "fixed top-0 left-0 flex items-center justify-center w-full h-full modal",
          !showModal && "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"
          onClick={() => setShowModal(false)}
        ></div>

        <div className="z-50 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container md:max-w-lg">
          {/* <div className="absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer modal-close">
            <svg
              className="text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
            <span className="text-sm">(Esc)</span>
          </div> */}

          <div className="px-6 py-4 text-left modal-content">
            <div className="flex items-center justify-between pb-3">
              <p className="text-2xl font-bold">Congratulations!</p>
              {/* <div className="z-50 cursor-pointer modal-close">
                <svg
                  className="text-black fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
              </div> */}
            </div>

            <p>You are now a part of our Brain DAO!</p>
            <p>You can checkout your new exclusive NFT on OpenSea.</p>

            <div className="flex justify-end pt-2">
              <a
                className="p-3 px-4 mr-2 text-indigo-500 bg-transparent rounded-lg hover:bg-gray-100 hover:text-indigo-400"
                href={`${process.env.NEXT_PUBLIC_OPENSEA}/${NFTContract.address}/${mintedToken}`}
                target="_blank"
                rel="noreferrer"
              >
                Opensea
              </a>
              <button
                className="p-3 px-4 text-white bg-indigo-500 rounded-lg modal-close hover:bg-indigo-400"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
