"use client";
import editions from "@/data/editions.json";
import EditionItem from "@/components/EditionItem";

export default function Edition({ params }: { params: { id: string } }) {
  for (const edition of editions) {
    if (String(edition.id) === params.id) {
      return (
        <section className="flex-1">
          <div className="h-20 w-full sm:hidden"></div>
          <hr className="mx-4 mb-1 border-black sm:mt-0" />
          <div className="mb-16 flex flex-1 flex-col gap-5 px-4">
            <h1 className="mb-24 text-3xl font-bold">Édition actuelle</h1>
            <div className="xl:mx-auto xl:w-full xl:max-w-7xl">
              <EditionItem data={edition} href="" />
            </div>
          </div>
        </section>
      );
    }
  }
  return (
    <section className="flex-1">
      <div className="h-20 w-full sm:hidden"></div>
      <hr className="mx-4 mb-1 border-black sm:mt-0" />
      <div className="mb-16 flex flex-1 flex-col gap-5 px-4">
        <h1 className="mb-24 text-3xl font-bold">Page non trouvée</h1>
      </div>
    </section>
  );
}
