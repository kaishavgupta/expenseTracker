import { createContext, useEffect, useState } from "react";
import { getTransaction } from "./transactionApi";

const Authdata = createContext();

export const AuthdataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await getTransaction();
      setData(res);
    };
    load();
  }, []);

  

  return (
    <Authdata.Provider value={data}>
      {children}
    </Authdata.Provider>
  );
};


