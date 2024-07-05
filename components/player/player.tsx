import MusicControls from "./controls";
import MusicDuration from "./duration";

export default function MusicPlayer() {
  return (
    <div className="w-1/3 flex flex-col items-center">
      <MusicControls />
      <MusicDuration />
    </div>
  );
}
