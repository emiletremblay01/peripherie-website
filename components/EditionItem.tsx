import type { EditionItem } from "@/types";
import Image from "next/image";

type EditionItemProps = {
  data: EditionItem;
};
export default function EditionItem({ data }: EditionItemProps) {
  return (
    <section>
      <hr className="border-black" />
      <div className="flex h-52 justify-between">
        <div className="flex flex-col gap-3 pt-1 md:max-w-6xl md:flex-1 md:flex-row">
          <div className="flex flex-col gap-3 md:flex-1">
            <p>Périphérie #{data.id}</p>
            <p>{data.nom}</p>
          </div>
          <p className="flex-1">{data.dateDeSortie}</p>
          <p className="h-fit md:flex-1">
            <a href="" className="group hover:opacity-80">
              En savoir plus{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="inline h-4 w-4 transition-transform duration-150 ease-in-out group-hover:translate-x-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </p>
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
