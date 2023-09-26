import { Recipe } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function RecipeBlock(props: Recipe) {
  const { id, name, thumbnail_url } = props;

  return (
    <Link href={`/recipes/${id}`} className="w-full flex flex-col gap-2">
      <img
        src={thumbnail_url}
        alt={name}
        className="w-full h-[200px] rounded-lg object-cover"
      />
      <p className="font-[600] text-base">{name}</p>
    </Link>
  );
}
