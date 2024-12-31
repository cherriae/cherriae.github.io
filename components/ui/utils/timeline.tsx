"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/components/cn";

interface TimelineProps {
  data: Array<{
    title: string;
    content: React.ReactNode;
  }>;
  lineClassName?: string;
  dotClassName?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ data, lineClassName, dotClassName }) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className={cn("absolute left-0 md:left-1/2 h-full w-0.5 transform -translate-x-1/2", 
        lineClassName || "bg-gray-200")} />
      
      {data.map((item, index) => (
        <div key={index} className="relative mb-16">
          {/* Timeline dot */}
          <div className={cn("absolute left-0 md:left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2",
            dotClassName || "bg-white")} />
          
          {/* Content */}
          <div className={cn("ml-8 md:ml-0",
            index % 2 === 0 ? "md:mr-[50%] md:pr-12" : "md:ml-[50%] md:pl-12")}>
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};
