"use client";
import editions from "@/data/editions.json";
import { useEffect, useState } from "react";

import Image from "next/image";
import { EditionItem } from "@/types";

export default function Edition({ params }: { params: { id: string } }) {
  const [edition, setEdition] = useState<EditionItem>();

  useEffect(() => {
    const selectedEdition = editions.find(
      (edition) => String(edition.id) === params.id,
    );
    setEdition(selectedEdition);
  }, [params.id]);

  if (!edition) {
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

  const { id, nom, dateDeSortie, description, imageUrl } = edition;

  return (
    <section className="flex-1">
      <div className="h-20 w-full sm:hidden"></div>
      <hr className="mx-4 mb-1 border-black sm:mt-0" />
      <div className="mb-16 flex flex-1 flex-col px-4">
        <h1 className="text-3xl font-bold">Périphérie #{id}</h1>
        <h2 className="mb-24 text-xl">{nom}</h2>
        <div className="mx-auto flex w-full max-w-md flex-col items-center gap-6 ">
          <div className="relative h-64 w-full overflow-hidden">
            <Image
              src={imageUrl}
              alt={nom}
              fill
              className="absolute -z-10 object-cover"
            />
          </div>
          <p
            dangerouslySetInnerHTML={{ __html: description }}
            className="leading-5"
          />
          <p className="w-full text-sm opacity-80">
            Édition sortie en {dateDeSortie}
          </p>
        </div>
      </div>
    </section>
  );
}
