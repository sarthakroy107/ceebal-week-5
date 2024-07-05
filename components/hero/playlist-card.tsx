import Image from "next/image";
import Link from "next/link";
export type TPlaylistCard = {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
};

export default function PlaylistCard({
  id,
  description,
  imageUrl,
  title,
}: TPlaylistCard) {
  return (
    <Link href={`/playlist/${id}`}  className="rounded-[4px] p-4 hover:bg-gradient-to-t hover:from-white/5 hover:to-slate-700/5 bg-opacity-0 hover:bg-opacity-4 transition-opacity duration-75">
      <Image
        src={imageUrl}
        alt="Playlist image"
        width={400}
        height={400}
        draggable={false}
        className="rounded-sm w-[13.5rem] h-[13.5rem] object-cover"
      />
      <p className="font-medium text-lg max-w-[13.5rem] text-wrap mt-[5px] pl-[1px]">{title}</p>
      <p className="text-sm text-white/60 font-medium text-wrap max-w-[13.4rem]">
        {description}
      </p>
    </Link>
  );
}
