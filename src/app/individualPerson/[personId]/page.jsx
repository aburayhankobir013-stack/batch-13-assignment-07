"use client";
import dataContext from "@/context/dataContext";
import { useContext, useEffect, useState} from "react";

function PersonInformation({params}){
  const {persons}=useContext(dataContext);
  const[person,setPerson]=useState({});
  useEffect(()=>{
    (async()=>{
      const{personId}= await params;
      const foundPerson=persons.find((person)=>person.id===parseInt(personId));
      setPerson(foundPerson);
    })();
  },[params,persons]);
  return(
    <div className="min-h-screen">
      I am a smart programmer!
    </div>
  );
}

export default PersonInformation;   