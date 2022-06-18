import { createContext, useContext, useEffect, useState } from "react";

export const CoinsContext = createContext<{
  coins: number;
  setCoins?: any;
}>({ coins: 0, setCoins: () => null });

export const CoinsProvider: React.FC = ({ children }) => {
  const [coins, setCoins] = useState(0);

  useEffect(() => {
    console.log("client side call");
    const localCoins = localStorage.getItem("coins");
    if (localCoins) setCoins(parseInt(localCoins, 10));
  }, []);

  return (
    <CoinsContext.Provider value={{ coins, setCoins }}>
      {children}
    </CoinsContext.Provider>
  );
};

export const useCoinsContext = () => useContext(CoinsContext);
