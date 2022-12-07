import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();


const AppContextProvider = ({children}) => {

  const [count,setCount] = useState(0);

  const handleCount = ()=>{
    setCount(prev=>prev+1);
  }

  return (
    <AppContext.Provider value={{count,handleCount}}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;