"use client";
import timelineContex from "./timelineContext";
import { useState } from "react";


function TimelineContextProvider({children}){
  const[timeline,setTimeline]=useState([]);
  return(
    <timelineContex.Provider value={{timeline,setTimeline}}>
      {children}
    </timelineContex.Provider>
  );
}

export default TimelineContextProvider;