"use client";
import dataContext from "./dataContext";


function DataContextProvider({children}){
  const[data,setData]=useState([]);
  return(
    <dataContext.Provider value={{data,setData}}>
      {children}
    </dataContext.Provider>
  );
}

export default DataContextProvider;