import MusicInformation from "./music-information";
import { songs } from "@/data/songs";
import MusicPlayer from "./player";
import Audio from "./audio";
export default function SongController() {
  return (
    <footer className="bg-black w-full fixed bottom-0 flex items-center justify-between">
      <MusicInformation />
      <MusicPlayer />
      <Audio />
    </footer>
  );
}
