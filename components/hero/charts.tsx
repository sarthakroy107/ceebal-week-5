import React from "react";
import PlaylistCard from "./playlist-card";
import { TPlaylistCard } from "./playlist-card";

export const playlists: TPlaylistCard[] = [
  {
    id: 1,
    title: "On Repeat",
    description: "Songs you love right now",
    imageUrl:
      "https://daily-mix.scdn.co/covers/on_repeat/PZN_On_Repeat2_DEFAULT-en-GB.jpg",
  },
  {
    id: 2,
    title: "Liked Songs",
    description: "The songs you have liked",
    imageUrl: "https://misc.scdn.co/liked-songs/liked-songs-300.png",
  },
  {
    id: 3,
    title: "Gloabal Top 50",
    description: "Most played songs in the world",
    imageUrl:
      "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg",
  },
  {
    id: 4,
    title: "Japan Top 50",
    description: "Most played songs in Japan",
    imageUrl:
      "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_jp_default.jpg",
  },
  {
    id: 5,
    title: "J-Pop",
    description: "Breath in Japanese",
    imageUrl: "https://images7.alphacoders.com/125/1256247.png",
  },
  {
    id: 6,
    title: "Anime Opeings",
    description: "The best anime openings",
    imageUrl: "https://images8.alphacoders.com/756/756446.png",
  },
];

const ChartsSection = () => {
  return (
    <div className="py-6 px-6">
      <h2 className="font-semibold text-2xl mb-4 px-2">Made for Sarthak Roy</h2>
      <div className="grid grid-cols-6 gap-3">
        {playlists.map((playlist, index) => (
          <PlaylistCard {...playlist} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ChartsSection;
