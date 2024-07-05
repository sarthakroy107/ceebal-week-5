'use client';
import { useMusicSelector } from "@/redux/hooks";
import Image from "next/image";
import { useEffect } from "react";

export default function MusicInformation() {
  const { cover, title, artist } = useMusicSelector((state) => state.music.activeSong);
  
  return (
    <div className="w-1/3 flex p-4 px-5 gap-x-2 items-center justify-start">
      <Image
        draggable={false}
        src={cover}
        alt="cover"
        width={100}
        height={100}
        className="rounded-sm w-16 h-16 object-cover"
      />
      <div>
        <h1 className="text-sm text-white font-medium">{title}</h1>
        <p className="text-sm text-white/60 hover:underline cursor-pointer">{artist}</p>
      </div>
    </div>
  );
}
