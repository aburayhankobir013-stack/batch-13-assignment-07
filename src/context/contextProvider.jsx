
"use client";
import DataContextProvider from "./dataContextProvider"
import TimelineContextProvider from "./timelineContextProvider"


function ContextProvider({children}){
  return(
    <DataContextProvider>
      <TimelineContextProvider>
        {children}
      </TimelineContextProvider>
    </DataContextProvider>
  );
}

export default ContextProvider;