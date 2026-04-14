"use client";
import dataContext from "./dataContext";
import { useState,useEffect } from "react";


function DataContextProvider({children}){
  const[persons,setPersons]=useState([]);
  useEffect(()=>{
    (async()=>{
      const response=await fetch("/database/data.json");
      const useAbleData=await response.json();
      setPersons(useAbleData);
    })();
  },[]);
  return(
    <dataContext.Provider value={{persons,setPersons}}>
      {children}
    </dataContext.Provider>
  );
}

export default DataContextProvider;