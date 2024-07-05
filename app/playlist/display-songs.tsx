import { TMusicDetails } from "@/data/songs";
import SongCard from "./song-card";

export function AvailableSongs({ songs }: { songs: TMusicDetails[] }) {
  return (
    <div
      className={`w-full bg-[#121212] rounded-lg my-2 mr-2 p-1 px-2`}
    >
      <div className="mb-3">
        <div className="text-white/40 flex py-2">
          <p className="w-[29%] text-start pl-16">#Title</p>
          <p className="w-[25%]">#Artist</p>
          <p className="w-[25%]">#Playback</p>
        </div>
        <hr className="opacity-20" />
      </div>
      {songs.map((song, index) => (
        <SongCard key={index} {...song} />
      ))}
    </div>
  );
}
