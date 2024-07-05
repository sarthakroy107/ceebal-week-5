"use client";
import { playlists } from "@/components/hero/charts";
import { songs } from "@/data/songs";
import { AvailableSongs } from "../display-songs";

export default function Page({ params }: Readonly<{ params: { id: string } }>) {
  const playlist = playlists.find(
    (playlist) => playlist.id === parseInt(params.id)
  );

  if (!playlist) {
    return <div>No playlis found</div>;
  }

  return <AvailableSongs songs={songs} />;
}