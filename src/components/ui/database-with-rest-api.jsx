"use client";;
import React, { memo } from "react";
import { motion } from "motion/react";
import { Folder, HeartHandshakeIcon, SparklesIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const DatabaseWithRestApi = ({
  className,
  circleText,
  badgeTexts,
  buttonTexts,
  title,
  lightColor
}) => {
  return (
    <div
      className={cn(
        "relative flex h-[350px] w-full max-w-[500px] flex-col items-center",
        className
      )}>
      {/* SVG Paths  */}
      <svg
        className="h-full sm:w-full text-muted"
        width="100%"
        height="100%"
        viewBox="0 0 200 100">
        <g
          stroke="currentColor"
          fill="none"
          strokeWidth="0.4"
          strokeDasharray="100 100"
          pathLength="100">
          <path d="M 31 10 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 10" />
          <path d="M 77 10 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 10" />
          <path d="M 124 10 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 10" />
          <path d="M 170 10 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 10" />
          {/* Animation For Path Starting */}
          <animate
            attributeName="stroke-dashoffset"
            from="100"
            to="0"
            dur="1s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.25,0.1,0.5,1"
            keyTimes="0; 1" />
        </g>
        {/* Blue Lights */}
        <g mask="url(#db-mask-1)">
          <circle
            className="database db-light-1"
            cx="0"
            cy="0"
            r="12"
            fill="url(#db-blue-grad)" />
        </g>
        <g mask="url(#db-mask-2)">
          <circle
            className="database db-light-2"
            cx="0"
            cy="0"
            r="12"
            fill="url(#db-blue-grad)" />
        </g>
        <g mask="url(#db-mask-3)">
          <circle
            className="database db-light-3"
            cx="0"
            cy="0"
            r="12"
            fill="url(#db-blue-grad)" />
        </g>
        <g mask="url(#db-mask-4)">
          <circle
            className="database db-light-4"
            cx="0"
            cy="0"
            r="12"
            fill="url(#db-blue-grad)" />
        </g>
        {/* Buttons */}
        <g stroke="currentColor" fill="none" strokeWidth="0.4">
          {/* First Button */}
          <g>
            <rect fill="#18181B" x="8" y="5" width="46" height="10" rx="5"></rect>
            <DatabaseIcon x="11" y="7.5"></DatabaseIcon>
            <text x="20" y="12" fill="white" stroke="none" fontSize="4" fontWeight="500">
              {badgeTexts?.first || "GET"}
            </text>
          </g>
          {/* Second Button */}
          <g>
            <rect fill="#18181B" x="58" y="5" width="46" height="10" rx="5"></rect>
            <DatabaseIcon x="61" y="7.5"></DatabaseIcon>
            <text x="70" y="12" fill="white" stroke="none" fontSize="4" fontWeight="500">
              {badgeTexts?.second || "POST"}
            </text>
          </g>
          {/* Third Button */}
          <g>
            <rect fill="#18181B" x="108" y="5" width="46" height="10" rx="5"></rect>
            <DatabaseIcon x="111" y="7.5"></DatabaseIcon>
            <text x="120" y="12" fill="white" stroke="none" fontSize="4" fontWeight="500">
              {badgeTexts?.third || "PUT"}
            </text>
          </g>
          {/* Fourth Button */}
          <g>
            <rect fill="#18181B" x="157" y="5" width="40" height="10" rx="5"></rect>
            <DatabaseIcon x="160" y="7.5"></DatabaseIcon>
            <text x="169" y="12" fill="white" stroke="none" fontSize="4" fontWeight="500">
              {badgeTexts?.fourth || "DELETE"}
            </text>
          </g>
        </g>
        <defs>
          {/* 1 -  user list */}
          <mask id="db-mask-1">
            <path
              d="M 31 10 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 10"
              strokeWidth="0.5"
              stroke="white" />
          </mask>
          {/* 2 - task list */}
          <mask id="db-mask-2">
            <path
              d="M 77 10 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 10"
              strokeWidth="0.5"
              stroke="white" />
          </mask>
          {/* 3 - backlogs */}
          <mask id="db-mask-3">
            <path
              d="M 124 10 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 10"
              strokeWidth="0.5"
              stroke="white" />
          </mask>
          {/* 4 - misc */}
          <mask id="db-mask-4">
            <path
              d="M 170 10 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 10"
              strokeWidth="0.5"
              stroke="white" />
          </mask>
          {/* Blue Grad */}
          <radialGradient id="db-blue-grad" fx="1">
            <stop offset="0%" stopColor={lightColor || "#00A6F5"} />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
      </svg>
      {/* Main Box */}
      <div className="absolute bottom-10 flex w-full flex-col items-center">
        {/* bottom shadow */}
        <div className="absolute -bottom-4 h-[100px] w-[62%] rounded-lg bg-accent/30" />
        {/* box title */}
        <div
          className="absolute -top-3 z-20 flex items-center justify-center rounded-lg border border-neutral-800/50 bg-[#0a0a0a] px-2 py-1 sm:-top-4 sm:py-1.5">
          <SparklesIcon className="size-3 text-white" />
          <span className="ml-2 text-[10px] text-white">
            {title ? title : "Data exchange using a customized REST API"}
          </span>
        </div>
        {/* box outter circle */}
        <div
          className="absolute -bottom-8 z-30 grid h-[60px] w-[60px] place-items-center rounded-full border-t border-neutral-800/50 bg-[#0a0a0a] font-semibold text-xs text-white">
          {circleText ? circleText : "SVG"}
        </div>
        {/* box content */}
        <div
          className="relative z-10 flex h-[150px] w-full items-center justify-center overflow-hidden rounded-lg border border-neutral-800/50 bg-[#0a0a0a] shadow-md">
          {/* Badges */}
          <div
            className="absolute bottom-8 left-12 z-10 h-7 rounded-full bg-black border border-neutral-800/50 px-3 text-xs flex items-center gap-2">
            <HeartHandshakeIcon className="size-4 text-white" />
            <span className="text-white">{buttonTexts?.first || "LegionDev"}</span>
          </div>
          <div
            className="absolute right-16 z-10 hidden h-7 rounded-full bg-black border border-neutral-800/50 px-3 text-xs sm:flex items-center gap-2">
            <Folder className="size-4 text-white" />
            <span className="text-white">{buttonTexts?.second || "v2_updates"}</span>
          </div>
          {/* Circles - Reduced to 2 for better performance */}
          <motion.div
            className="absolute -bottom-14 h-[100px] w-[100px] rounded-full border-t border-neutral-800/30 bg-neutral-900/20"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div
            className="absolute -bottom-[100px] h-[190px] w-[190px] rounded-full border-t border-neutral-800/30 bg-neutral-900/20"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }} />
        </div>
      </div>
    </div>
  );
};

export default memo(DatabaseWithRestApi);

const DatabaseIcon = ({
  x = "0",
  y = "0"
}) => {
  return (
    <svg
      x={x}
      y={y}
      xmlns="http://www.w3.org/2000/svg"
      width="5"
      height="5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
};
