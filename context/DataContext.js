import { createContext, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [providers, setProviders] = useState([]);
  const [allowedGames, setAllowedGames] = useState([]);
  return (
    <DataContext.Provider
      value={{
        providers,
        setProviders,
        allowedGames,
        setAllowedGames,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContextProvider;
