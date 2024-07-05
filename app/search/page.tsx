"use client";
import { songs } from "@/data/songs";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { AvailableSongs } from "../playlist/display-songs";

const Page = () => {
  const [filteredSongs, setFilteredSongs] = useState(songs);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setFilteredSongs(
      songs.filter((song) =>
        song.title
          .replace(/\s/g, "")
          .toLowerCase()
          .includes(search.replace(/\s/g, "").toLowerCase())
      )
    );
  }, [search]);

  useEffect(() => {}, [filteredSongs]);
  return (
    <div className="w-full h-[calc(100vh-110px)] bg-[#121212] rounded-lg my-2 mr-2 p-1 px-2">
      <div className="p-3 relative flex items-center">
        <FaSearch className="relative -right-8 text-white/50" />
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="h-10 w-80 rounded-full bg-white/10 text-white/75 text-sm px-10"
          placeholder="What do you want to  play?"
        />
      </div>
      <h3 className="p-3 px-7 text-2xl font-medium text-white/80">
        Available songs
      </h3>
      <AvailableSongs songs={filteredSongs} />
    </div>
  );
};

export default Page;
