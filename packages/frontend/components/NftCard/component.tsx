import React from "react";

interface Props {
  imageUrl: string;
  name: string;
  desc: string;
  contentLeft: string;
  contentRight: string;
  contentMain: string;
  handleClick?: () => void;
  handleSecondClick?: () => void;
}

export const NFTCard: React.FC<Props> = ({
  imageUrl,
  name,
  desc,
  contentLeft,
  contentRight,
  contentMain,
  handleClick,
  handleSecondClick,
}: Props) => {
  return (
    <div style={{ border: "1px solid #2c3a43" }} className="rounded-2xl">
      <div className="relative px-24 pt-2 pb-4">
        <div
          className="w-40 h-40 rounded-lg"
          style={{
            backgroundImage: "url(" + imageUrl + ")",
            backgroundSize: "cover",
          }}
        />
        <div className="absolute z-10 bottom-4 left-4">
          <p className="text-xl text-white">{name}</p>
          <p className="text-xs text-gray-300">{desc}</p>
        </div>
        <button
          className="absolute z-10 w-8 h-8 rounded-full top-4 right-4"
          style={{
            backgroundImage: "url(" + imageUrl + ")",
            backgroundSize: "cover",
          }}
          onClick={handleClick}
        />
        <button
          className="absolute z-10 w-8 h-8 rounded-full top-16 right-4"
          style={{
            backgroundImage: "url(" + imageUrl + ")",
            backgroundSize: "cover",
          }}
          onClick={handleSecondClick}
        />
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
        <p className="mt-4 overflow-hidden text-xs italic text-gray-300">
          {contentMain}
        </p>
      </div>
    </div>
  );
};
