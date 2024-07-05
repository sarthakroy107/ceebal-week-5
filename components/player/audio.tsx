"use client";

import { useMusicDispatch, useMusicSelector } from "@/redux/hooks";
import { setCurrentTime, setSongDuration } from "@/redux/player-slice";
import { useEffect, useRef } from "react";

export default function Audio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const dispatch = useMusicDispatch();
  const { isPlaying, activeSong } = useMusicSelector((state) => state.music);
  const { currentTime } = useMusicSelector((state) => state.music);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
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

    audioElement?.addEventListener("timeupdate", handleTimeUpdate);
    audioElement?.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audioElement?.removeEventListener("timeupdate", handleTimeUpdate);
      audioElement?.removeEventListener("loadedmetadata", handleLoadedMetadata);
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
      <audio ref={audioRef} src={activeSong.url}></audio>
    </div>
  );
}
