"use client";
import { Pie, PieChart, Legend, Tooltip } from "recharts";
import { useContext, useState } from "react";
import timelineContex from "@/context/timelineContext";

function StatsPage() {
  const{timeline}=useContext(timelineContex);
  const valueCalculate=()=>{
    let call=0;
    let text=0;
    let video=0;
    timeline.forEach((oneTimeline)=>{
      if(oneTimeline.method==="call"){
        ++call;
      }
      if(oneTimeline.method==="text"){
        ++text;
      }
      if(oneTimeline.method==="video"){
        ++video;
      }
    });
    return [call,text,video];
  }
  const[call,text,video]=valueCalculate();
  const data = [
    { name: "Call", value: call, fill: "#0088FE" },
    { name: "Text", value: text, fill: "#00C49F" },
    { name: "Video", value: video, fill: "#FFBB28" },
  ];
  return (
    <div className="flex-1 space-y-5 p-5">
      <h1 className="text-2xl font-bold text-center">Friendship Analytics</h1>
      <div className="flex flex-col gap-3">
        <h2 className="font-semibold text-slate-600">By Interaction Type</h2>
        <div className="flex justify-center items-center rounded-xs shadow-[0_0_5px_rgba(0,0,0,0.2)] p-4">
          <PieChart
            style={{
              width: "100%",
              maxWidth: "500px",
              maxHeight: "30vh",
              aspectRatio: 1,
            }}
            responsive
          >
            <Pie
              data={data}
              innerRadius="80%"
              outerRadius="100%"
              cornerRadius="50%"
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              isAnimationActive={true}
            />
            <Legend />
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
}

export default StatsPage;
