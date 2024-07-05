"use client";

import { useMusicDispatch, useMusicSelector } from "@/redux/hooks";
import {
  playNextSong,
  playRandomSong,
  setCurrentTime,
  setPlaying,
  setSongDuration,
} from "@/redux/player-slice";
import { useEffect, useRef } from "react";

export default function Audio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const dispatch = useMusicDispatch();
  const { isPlaying, activeSong } = useMusicSelector((state) => state.music);
  const { currentTime, isRepeating, isShuffling } = useMusicSelector(
    (state) => state.music
  );

  useEffect(() => {
    (async () => {
      if (audioRef.current) {
        if (isPlaying) {
          await audioRef.current.play();
        } else {
          await audioRef.current.pause();
        }
      }
    })();
  }, [isPlaying]);

  useEffect(() => {
    const audioElement = audioRef.current;
    const handleTimeUpdate = () => {
      if (audioElement) {
        if (Math.floor(audioElement.currentTime) === currentTime) return;
        dispatch(setCurrentTime(Math.floor(audioElement.currentTime)));
      }
    };

    const handleLoadedMetadata = () => {
      if (audioElement) {
        dispatch(setSongDuration(Math.round(audioElement.duration)));
      }
    };

    const handleNextSong = async () => {
      if (audioElement) {
        await dispatch(setPlaying(false));
        if (isRepeating) {
          audioElement.currentTime = 0;
          await dispatch(setCurrentTime(0));
        } else if (isShuffling) {
          console.log("Shuffling");
          await dispatch(playRandomSong());
        } else {
          await dispatch(playNextSong());
        }
        await dispatch(setPlaying(true));
      }
    };

    audioElement?.addEventListener("timeupdate", handleTimeUpdate);
    audioElement?.addEventListener("loadedmetadata", handleLoadedMetadata);
    audioElement?.addEventListener("ended", handleNextSong);

    return () => {
      audioElement?.removeEventListener("timeupdate", handleTimeUpdate);
      audioElement?.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audioElement?.removeEventListener("ended", handleNextSong);
    };
  }, [activeSong]);

  useEffect(() => {
    if (audioRef.current) {
      dispatch(setSongDuration(Math.round(audioRef.current.duration)));
    }
  }, []);

  useEffect(() => {
    const seekHandler = (e: CustomEvent) => {
      if (audioRef.current) {
        dispatch(setCurrentTime(e.detail as number));
        audioRef.current.currentTime = e.detail as number;
      }
    };

    window.addEventListener("seek", seekHandler as EventListener);

    return () => {
      window.removeEventListener("seek", seekHandler as EventListener);
    };
  }, []);

  return (
    <div className="w-1/3">
      <audio ref={audioRef} src={`/${activeSong.url}`}></audio>
    </div>
  );
}
