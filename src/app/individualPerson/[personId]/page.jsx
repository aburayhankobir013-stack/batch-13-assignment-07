"use client";
import {use, useEffect, useState } from "react";
import Image from "next/image";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { FiArchive } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import call from "../../../assets/call.png";
import text from "../../../assets/text.png";
import video from "../../../assets/video.png";

function PersonInformation({ params }) {
  const [persons,setPersons]=useState([]);
  const { personId } = use(params);
  useEffect(()=>{
    const fetchData=async ()=>{
      const response=await fetch("/database/data.json");
      const useAbleData=await response.json();
      setPersons(useAbleData);
    }
    fetchData();
  },[]);
  const foundedPerson = persons.find(
    (person) => person.id === parseInt(personId),
  );
  if (!foundedPerson) {
    return;
  }
  return (
    <div className="flex h-fit flex-col md:flex-row gap-2 p-2">
      {/* Left container */}
      <div className="flex flex-col gap-2">
        {/* Top container */}
        <div className="rounded-xs shadow-[0_0_5px_rgba(0,0,0,0.2)] flex flex-col items-center p-2 gap-2">
          <figure>
            <Image
              src={foundedPerson.picture}
              alt="Image of a person"
              width={150}
              height={150}
              className="rounded-xs"
            />
          </figure>
          <h1 className="text-xl font-bold tracking-tight">
            {foundedPerson.name}
          </h1>
          <div
            className={`w-fit px-2 py-1 rounded-xs font-semibold tracking-tighter shadow-md text-white ${foundedPerson.status === "overdue" ? `bg-red-500` : null} ${foundedPerson.status === "almost due" ? `bg-yellow-500` : null} ${foundedPerson.status === "on-track" ? `bg-green-500` : null}`}
          >
            {foundedPerson.status.toUpperCase()}
          </div>
          <div className="px-2 py-1 rounded-xs font-semibold text-green-900 bg-green-200 shadow-md">
            {foundedPerson.tags.toUpperCase()}
          </div>
          <p className="text-slate-500 italic font-semibold tracking-tight">
            {`"${foundedPerson.bio}"`}
          </p>
          <p className="text-slate-500 tracking-tight font-bold">
            {foundedPerson.email}
          </p>
        </div>
        {/* Bottom container */}
        <div className="flex flex-col gap-2">
          <button className="flex items-center justify-center font-bold gap-2 px-2 py-1 shadow-[0_0_5px_rgba(0,0,0,0.2)] rounded-xs cursor-pointer">
            <HiOutlineBellSnooze />
            <span>Snooze 2 Weeks</span>
          </button>
          <button className="flex items-center justify-center font-bold gap-2 px-2 py-1 shadow-[0_0_5px_rgba(0,0,0,0.2)] rounded-xs cursor-pointer">
            <FiArchive />
            <span>Archive</span>
          </button>
          <button className="flex items-center justify-center font-bold gap-2 px-2 py-1 shadow-[0_0_5px_rgba(0,0,0,0.2)] rounded-xs cursor-pointer text-red-500">
            <RiDeleteBin6Line />
            <span>Delete</span>
          </button>
        </div>
      </div>
      {/* Right container */}
      <div className="flex-1 shadow-[0_0_5px_rgba(0,0,0,0.2)] rounded-xs grid grid-cols-3 gap-2">
        {/* Top three container */}
        <div className="shadow-[0_0_5px_rgba(0,0,0,0.2)] rounded-xs text-center flex flex-col justify-center items-center gap-2 p-1">
          <h1 className="font-bold text-2xl">
            {foundedPerson.days_since_contact}
          </h1>
          <p className="font-semibold tracking-tighter text-slate-500">
            Days Since Contact
          </p>
        </div>
        <div className="shadow-[0_0_5px_rgba(0,0,0,0.2)] rounded-xs text-center flex flex-col justify-center items-center gap-2 p-1">
          <h1 className="font-bold text-2xl">{foundedPerson.goal}</h1>
          <p className="font-semibold tracking-tighter text-slate-500">
            Goal (Days)
          </p>
        </div>
        <div className="shadow-[0_0_5px_rgba(0,0,0,0.2)] rounded-xs text-center flex flex-col justify-center items-center gap-2 p-1">
          <h1 className="font-bold text-2xl">
            {new Date(foundedPerson.next_due_date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </h1>
          <p className="font-semibold tracking-tighter text-slate-500">
            Next Due
          </p>
        </div>
        {/* Middle container */}
        <div className="col-span-3 shadow-[0_0_5px_rgba(0,0,0,0.2)] rounded-xs flex justify-between p-5 items-center">
          <div className="space-y-2">
            <h1 className="font-bold">Relationship Goal</h1>
            <p className="font-semibold text-slate-500">
              Connect every <span>30 days</span>
            </p>
          </div>
          <button className="w-fit px-2 py-1 font-bold bg-slate-300 rounded-xs shadow-md cursor-pointer">
            Edit
          </button>
        </div>
        {/* Botton container */}
        <div className="col-span-3 shadow-[0_0_5px_rgba(0,0,0,0.2)] rounded-xs p-2 space-y-2">
          <h1 className="text-center font-bold text-slate-600">
            Quick Check-In
          </h1>
          <div className="flex justify-between gap-2 items-center">
            <button className="flex-1 flex items-center flex-col gap-3 p-5 rounded-xs shadow-[0_0_5px_rgba(0,0,0,0.2)] bg-slate-100 cursor-pointer font-bold">
              <Image src={call} alt="Call icon" width={20} height={20} />
              <span>Call</span>
            </button>
            <button className="flex-1 flex items-center flex-col gap-3 p-5 rounded-xs shadow-[0_0_5px_rgba(0,0,0,0.2)] bg-slate-100 cursor-pointer font-bold">
              <Image src={text} alt="Text icon" width={20} height={20} />
              <span>Text</span>
            </button>
            <button className="flex-1 flex items-center flex-col gap-3 p-5 rounded-xs shadow-[0_0_5px_rgba(0,0,0,0.2)] bg-slate-100 cursor-pointer font-bold">
              <Image src={video} alt="Video icon" width={20} height={20} />
              <span>Video</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonInformation;
