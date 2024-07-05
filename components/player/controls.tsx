"use client";

import { useMusicDispatch, useMusicSelector } from "@/redux/hooks";
import {
  playNextSong,
  playPrevSong,
  playRandomSong,
  setPlaying,
  setRepeating,
  setShuffling,
} from "@/redux/player-slice";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { FiRepeat } from "react-icons/fi";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { RxShuffle } from "react-icons/rx";

export default function MusicControls() {
  const { isPlaying, isShuffling, isRepeating } = useMusicSelector(
    (state) => state.music
  );
  const dispatch = useMusicDispatch();

  return (
    <div className="flex gap-3">
      <button
        className="mr-3"
        onClick={async () => {
          await dispatch(setShuffling(!isShuffling));
          await dispatch(setRepeating(false));
        }}
      >
        <RxShuffle
          className={isShuffling ? "text-green-500/50" : "text-white/60"}
        />
      </button>
      <button
        onClick={async () => {
          await dispatch(setPlaying(false)); //*It only works when async is used while music is playing
          await dispatch(playPrevSong());
          await dispatch(setPlaying(true));
        }}
      >
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
      <button
        onClick={async () => {
          await dispatch(setPlaying(false)); //*It only works when async is used while music is playing
          if (isShuffling) await dispatch(playRandomSong());
          else await dispatch(playNextSong());
          await dispatch(setPlaying(true));
        }}
      >
        <MdSkipNext className="w-8 h-8" />
      </button>
      <button className="ml-3">
        <FiRepeat
          onClick={async () => {
            await dispatch(setRepeating(!isRepeating));
            await dispatch(setShuffling(false));
          }}
          className={isRepeating ? "text-green-500/50" : "text-white/60"}
        />
      </button>
    </div>
  );
}
