"use client";
import { useMusicSelector } from "@/redux/hooks";
import React from "react";

export default function MusicDuration() {
  const { currentTime, songDuration } = useMusicSelector(
    (state) => state.music
  );
  const width =
    songDuration && currentTime
      ? Math.floor((currentTime / songDuration) * 100)
      : 0;

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("Clicked");
    if (songDuration !== null) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const width = (x / rect.width) * 100;
      const time = (width / 100) * songDuration;
      window.dispatchEvent(new CustomEvent("seek", { detail: time }));
    }
  };
  return (
    <div className="flex items-center gap-2 text-xs w-full mt-1.5">
      {currentTime ? (
        <span className="text-white/60 w-9 text-center">
          {Math.floor(currentTime / 60)}:
          {currentTime % 60 < 10 ? `0${currentTime % 60}` : currentTime % 60}
        </span>
      ) : (
        <span className="text-white/60 w-9 text-center">_:_</span>
      )}
      <div
        className="w-[90%] h-1 bg-white/20 rounded-full cursor-pointer"
        onClick={handleClick}
      >
        {songDuration && currentTime ? (
          <div
            className={`h-full min-h-1 bg-green-500/60 rounded-md`}
            style={{ width: `${width}%` }}
          ></div>
        ) : null}
      </div>

      {songDuration ? (
        <span className="text-white/60 w-9 text-center">
          {Math.floor(songDuration / 60)}:
          {songDuration % 60 < 10 ? `0${songDuration % 60}` : songDuration % 60}
        </span>
      ) : (
        <span className="text-white/60 w-9 text-center">_:_</span>
      )}
    </div>
  );
}
