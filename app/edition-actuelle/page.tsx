"use client";
import editions from "@/data/editions.json";
import EditionItem from "@/components/EditionItem";

export default function EditionActuelle() {
  const editionActuelleRaw = editions.find(
    (edition) => edition.isEditionActuelle,
  );
  if (!editionActuelleRaw) throw new Error("No edition found");

  return (
    <section className="flex-1">
      <div className="h-20 w-full sm:hidden"></div>
      <hr className="mx-4 mb-1  border-black sm:mt-0" />
      <div className="mb-16 flex flex-1 flex-col gap-5 px-4 ">
        <h1 className="mb-24  text-3xl font-bold">Édition actuelle</h1>
        <div className="xl:mx-auto xl:w-full xl:max-w-7xl">
          <EditionItem data={editionActuelleRaw} />
        </div>
      </div>
    </section>
  );
}
