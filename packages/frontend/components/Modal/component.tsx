import React from "react";

type Props = {
  content: string;
  handleClick?: () => void;
};

export const Modal: React.FC<Props> = ({ content, handleClick }) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-pink-500 rounded shadow outline-none active:bg-pink-600 hover:shadow-lg focus:outline-none ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              <div className="relative flex flex-col w-full bg-gray-700 border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <div className="relative flex-auto p-6">
                  <p className="text-lg leading-relaxed text-white">
                    {content}
                  </p>
                </div>
                <div className="flex items-center justify-between px-6 pb-6 rounded-b border-slate-200">
                  <button
                    onClick={handleClick}
                    className="px-4 py-3 mt-2 font-bold text-white rounded focus:outline-none bg-purple-950 ring-purple-800 transition-all hover:ring-2"
                  >
                    Go to OpenSea
                  </button>
                  <button
                    className="px-4 py-3 mt-2 font-bold text-white bg-red-400 rounded focus:outline-none ring-purple-800 transition-all hover:ring-2"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
};
