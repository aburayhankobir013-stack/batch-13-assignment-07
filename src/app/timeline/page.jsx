"use client";
import call from "../../assets/call.png";
import text from "../../assets/text.png";
import video from "../../assets/video.png";
import Image from "next/image";
import { useContext, useState } from "react";
import timelineContex from "@/context/timelineContext";
import { toast } from 'react-toastify';

function TimelinePage() {
  const { timeline } = useContext(timelineContex);
  const [persons,setPersons]=useState([...timeline]);
  const filter=(method)=>{
    if(!method){
      setPersons(timeline);
    }else if(method==="call"){
      const filterWithCall=timeline.filter((person)=>person.method===method);
      setPersons(filterWithCall);
    }else if(method==="text"){
      const filterWithText=timeline.filter((person)=>person.method===method);
      setPersons(filterWithText);
    }else if(method==="video"){
      const filterWithVideo=timeline.filter((person)=>person.method===method);
      setPersons(filterWithVideo);
    }
  }
  return (
    <div className="flex-1 flex flex-col gap-3">
      <h1 className="font-bold text-2xl">Timeline</h1>
      <select className="px-2 py-1 shadow-[0_0_5px_rgba(0,0,0,0.2)] rounded-xs self-start font-bold text-slate-600" onChange={(event)=>filter(event.target.value)}>
        <option value="">Filter timeline</option>
        <option value="call">Call</option>
        <option value="text">Text</option>
        <option value="video">Video</option>
      </select>
      <div className="flex flex-col gap-2">
        {persons.length===0?<div className="text-center text-xl font-bold">
          <h1>NO DATA FOUND YET</h1>
        </div>:persons.map((person,index) => (
          <div key={index} className="flex items-center p-3 gap-3 shadow-[0_0_5px_rgba(0,0,0,0.2)] rounded-xs">
            {person.method==="call" && <Image src={call} alt="call icon" height={20} width={20} />}
            {person.method==="text" && <Image src={text} alt="text icon" height={20} width={20} />}
            {person.method==="video" && <Image src={video} alt="video icon" height={20} width={20} />}
            <div>
              <h1>
                <span className="font-bold">{person.method.toUpperCase()} </span>
                <span className="text-slate-500 font-semibold">
                  with {person.name}
                </span>
              </h1>
              <p className="font-bold">{person.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimelinePage;
