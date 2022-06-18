import React from "react";

interface Props {
  imageUrl: string;
  name: string;
  desc: string;
  contentLeft: string;
  contentRight: string;
  contentMain: string;
  handleClick?: () => void;
}

export const NFTCard: React.FC<Props> = ({
  imageUrl,
  name,
  desc,
  contentLeft,
  contentRight,
  contentMain,
  handleClick,
}: Props) => {
  return (
    <div style={{ border: "1px solid #2c3a43" }} className="rounded-2xl">
      <div className="relative">
        <div
          className="rounded-lg h-60"
          style={{
            backgroundImage: "url(" + imageUrl + ")",
            backgroundSize: "contain",
            backgroundRepeat: "none",
          }}
        />
        <div className="absolute z-10 bottom-4 left-4">
          <p className="text-xl text-white">{name}</p>
          <p className="text-xs text-gray-300">{desc}</p>
        </div>
        <button
          className="absolute z-10 w-12 h-12 rounded-full top-4 right-4"
          onClick={handleClick}
        >
          <img alt="icon" src="/hammer.svg" />
        </button>
      </div>
      <hr
        style={{
          borderColor: "#2c3a43",
        }}
      />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-300 uppercase">{contentLeft}</p>
          <p className="text-xs text-gray-300 uppercase">{contentRight}</p>
        </div>
        <p className="my-4 overflow-hidden text-xs italic text-gray-300">
          {contentMain}
        </p>

        <button
          style={{ width: "100%" }}
          onClick={() => console.log("mint")}
          className="px-4 py-3 my-2 mt-2 font-bold text-white rounded focus:outline-none bg-purple-950 ring-purple-800 transition-all hover:ring-2"
        >
          Mint NFT Card
        </button>
      </div>
    </div>
  );
};
