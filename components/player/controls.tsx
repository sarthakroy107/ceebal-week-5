"use client";

import { useMusicDispatch, useMusicSelector } from "@/redux/hooks";
import { playNextSong, playPrevSong, setPlaying } from "@/redux/player-slice";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { FiRepeat } from "react-icons/fi";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { RxShuffle } from "react-icons/rx";

export default function MusicControls() {
  const isPlaying = useMusicSelector((state) => state.music.isPlaying);
  const dispatch = useMusicDispatch();

  return (
    <div className="flex gap-3">
      <button className="mr-3">
        <RxShuffle className="text-white/60" />
      </button>
      <button onClick={() => dispatch(playPrevSong())}>
        <MdSkipPrevious className="w-8 h-8" />
      </button>
      <button
        onClick={() => dispatch(setPlaying(!isPlaying))}
        className="bg-white rounded-full p-3 flex justify-center items-center"
      >
        {isPlaying ? (
          <FaPause className="w-4 h-4 text-black" />
        ) : (
          <FaPlay className="w-4 h-4 text-black" />
        )}
      </button>
      <button onClick={() => dispatch(playNextSong())}>
        <MdSkipNext className="w-8 h-8" />
      </button>
      <button className="ml-3">
        <FiRepeat className="text-white/60" />
      </button>
    </div>
  );
}
