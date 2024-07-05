"use client";
import { TMusicDetails } from "@/data/songs";
import { useMusicDispatch, useMusicSelector } from "@/redux/hooks";
import { FaPause, FaPlay } from "react-icons/fa6";
import Image from "next/image";
import { setActiveSong, setPlaying } from "@/redux/player-slice";

export default function SongCard({ cover, title, artist, id }: TMusicDetails) {
  const { isPlaying, activeSong } = useMusicSelector((state) => state.music);
  const dispatch = useMusicDispatch();

  return (
    <div className="group flex items-center gap-x-1 my-1 p-1.5 hover:bg-white/10 rounded-[4px]">
      <p
        className={`${
          activeSong.id === id ? "text-green-500/60" : "text-white/40"
        } text-sm px-2 font-semibold`}
      >
        {id+1}
      </p>
      <Image
        draggable={false}
        src={cover}
        alt="Song image"
        width={50}
        height={50}
        className="rounded-sm w-11 h-11 object-cover"
      />
      <p
        className={`${
          activeSong.id === id ? "text-green-500/90" : "text-white/80"
        } font-medium w-[25%] text-start pl-2`}
      >
        {title}
      </p>
      <p
        className={`${
          activeSong.id === id ? "text-green-500/70" : "text-white/60"
        } w-[25%] text-start hover:underline text-sm`}
      >
        {artist}
      </p>
      <button
        onClick={ async () => {
          await dispatch(setPlaying(false));
          await dispatch(setActiveSong(id));
          await dispatch(setPlaying(true));
        }}
      >
        {isPlaying && activeSong.id === id ? (
          <FaPause className="w-4 h-4 text-white" />
        ) : (
          <FaPlay className="w-4 h-4 text-white" />
        )}
      </button>
    </div>
  );
}
