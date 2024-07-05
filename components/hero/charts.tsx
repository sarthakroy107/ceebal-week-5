import React from "react";
import PlaylistCard from "./playlist-card";
import { TPlaylistCard } from "./playlist-card";

const playlists: TPlaylistCard[] = [
  {
    title: "Liked Songs",
    description: "The songs you have liked",
    imageUrl: "https://images8.alphacoders.com/756/756446.png",
  },
  {
    title: "Liked Songs",
    description: "The songs you have liked",
    imageUrl: "https://images8.alphacoders.com/756/756446.png",
  },
  {
    title: "Liked Songs",
    description: "The songs you have liked",
    imageUrl: "https://images8.alphacoders.com/756/756446.png",
  },
  {
    title: "Liked Songs",
    description: "The songs you have liked",
    imageUrl: "https://images8.alphacoders.com/756/756446.png",
  },
  {
    title: "Liked Songs",
    description: "The songs you have liked",
    imageUrl: "https://images8.alphacoders.com/756/756446.png",
  },
  {
    title: "Global Top 50",
    description: "The songs you have liked",
    imageUrl: "https://images8.alphacoders.com/756/756446.png",
  },
  {
    title: "Liked Songs",
    description: "The songs you have liked",
    imageUrl: "https://images8.alphacoders.com/756/756446.png",
  },
];

const ChartsSection = () => {
  return (
    <div className="py-6 px-6">
      <h2 className="font-semibold text-2xl mb-4 px-2">Made for Sarthak Roy</h2>
      <div className="grid grid-cols-7 gap-4">
        {playlists.map((playlist) => (
          <PlaylistCard
            key={playlist.title}
            title={playlist.title}
            description={playlist.description}
            imageUrl={playlist.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ChartsSection;
