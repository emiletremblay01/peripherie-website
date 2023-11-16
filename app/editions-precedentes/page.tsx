"use client";

import editions from "@/data/editions.json";
import EditionItem from "@/components/EditionItem";

export default function EditionsPrecedentes() {
  const editionsPrecedentesRaw = editions.filter(
    (edition) => edition.isEditionActuelle != true,
  );
  if (!editionsPrecedentesRaw) throw new Error("No edition found");

  return (
    <section className="flex-1">
      <div className="h-20 w-full sm:hidden"></div>
      <hr className="mx-4 mb-1 border-black sm:mt-0" />
      <div className="mb-16 flex flex-1 flex-col gap-5 px-4 ">
        <h1 className="mb-24  text-3xl font-bold">Éditions précédentes</h1>
        <div className="xl:mx-auto xl:w-full xl:max-w-7xl">
          {editionsPrecedentesRaw.map((edition) => (
            <EditionItem key={edition.id} data={edition} />
          ))}
        </div>
      </div>
    </section>
  );
}
