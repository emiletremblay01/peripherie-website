"use client";

import { useState, useEffect } from "react";
import editions from "@/data/editions.json";
import EditionItem from "@/components/EditionItem";
import { usePathname } from "next/navigation";
export default function Editions() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const pathname = usePathname();
  return (
    <section className="flex-1">
      <div className="h-20 w-full sm:hidden"></div>
      <hr className="mx-4 mb-1 border-black sm:mt-0" />
      <div className="mb-16 flex flex-1 flex-col gap-5 px-4">
        <h1 className="mb-24 text-3xl font-bold">Éditions</h1>
        <div className="space-y-10 xl:mx-auto xl:w-full xl:max-w-7xl">
          {editions.map((edition) => (
            <EditionItem key={edition.id} data={edition} href="" />
          ))}
        </div>
      </div>
    </section>
  );
}
