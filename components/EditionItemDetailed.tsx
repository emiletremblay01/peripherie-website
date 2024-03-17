import type { EditionItem } from "@/types";
import Image from "next/image";

type EditionItemProps = {
  data: EditionItem;
};

export default function EditionItemDetailed({ data }: EditionItemProps) {
  return (
    <section>
      <hr className="border-black" />
      <div className="flex h-52 justify-between">
        <div className="flex flex-col gap-3 pt-1 md:max-w-6xl md:flex-1 md:flex-row">
          <div className="flex flex-col gap-3 md:flex-1">
            <p>Périphérie #{data.id}</p>
            <p>{data.nom}</p>
          </div>
          <p className="basis-1/6">{data.dateDeSortie}</p>
          <p className="h-fit md:flex-1">{data.description}</p>
        </div>
        <Image
          src={data.imageUrl}
          alt="Photo du magazine"
          width={208}
          height={208}
          className="object-cover"
        />
      </div>
    </section>
  );
}
