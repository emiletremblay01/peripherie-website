"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import useCart from "@/hooks/useCart";
import { StoreItem } from "@/types";
import Link from "next/link";
import Image from "next/image";
type BoutiqueCardProps = {
  data: StoreItem;
};

// Main component
export function BoutiqueCard({ data }: BoutiqueCardProps) {
  const { addItemToCart } = useCart();
  const [isOpened, setIsOpened] = useState(false);
  function toggleIsOpened() {
    setIsOpened((isOpened) => !isOpened);
  }

  return (
    <div className="w-full sm:max-w-lg">
      <h1 className="px-4 text-lg font-semibold sm:px-0">{data.name}</h1>
      {/* Card */}
      <div className="group flex h-96 w-full flex-col border-b border-t border-black bg-white sm:h-80 sm:border">
        <div
          className={cn(
            "group/image-container relative grow cursor-pointer overflow-clip border-black",
            {
              "border-b": !isOpened,
            },
          )}
        >
          {/* Image */}
          <Link
            className="absolute h-full w-full"
            href={`/boutique/${data.id}`}
          >
            <Image
              placeholder="empty"
              src={data.images?.[0]?.url || ""}
              alt="photo"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover/image-container:scale-105"
            />
          </Link>

          {/* Infos */}
          <Transition
            show={isOpened}
            enter="transition-transform duration-300 ease-in-out"
            enterFrom="translate-y-full"
            enterTo="translate-y-0"
            leave="transition-transform duration-300 ease-in-out"
            leaveFrom="translate-y-0"
            leaveTo="translate-y-full"
            className="absolute left-0 top-0 aspect-square w-full bg-white px-2 py-1"
          >
            <p className="font-bold">{data.price}$</p>
            <p>{data.description}</p>
          </Transition>
        </div>
        {/* Foot */}
        <div className="relative grid shrink-0 grid-cols-2 bg-white px-4 py-1.5  sm:py-0.5">
          <button
            onClick={toggleIsOpened}
            className="flex w-fit flex-auto items-center gap-2 hover:opacity-80 "
          >
            Plus d’infos
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.7}
              stroke="currentColor"
              className={cn("h-4 w-4 transition duration-300 ease-in-out", {
                "rotate-180": isOpened,
              })}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
              />
            </svg>
          </button>

          <button
            onClick={() => {
              addItemToCart(data);
            }}
            className="w-fit flex-auto text-left hover:opacity-80"
          >
            <span>Ajouter au panier</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="ml-1 inline h-5 w-5 -translate-y-px"
            >
              <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
