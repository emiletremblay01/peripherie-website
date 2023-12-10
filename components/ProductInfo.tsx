"use client";

import { cn } from "@/lib/utils";
import useCart from "@/hooks/useCart";
import { StoreItem } from "@/types";
import Image from "next/image";
export default function ProductInfo({
  product,
  classNames,
}: {
  product: StoreItem;
  classNames?: string;
}) {
  const { addItemToCart } = useCart();
  return (
    <section className={cn(classNames, "")}>
      <div className="relative h-52 w-full ">
        <Image
          placeholder="empty"
          src={product.images?.[0]?.url || ""}
          alt="photo"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          className=" object-cover "
        />
      </div>
      <div className="flex w-full">
        <h1 className="flex-1 text-lg font-bold">{product.name}</h1>
        <h1 className="text-lg font-bold">{product.price}$</h1>
      </div>
      <p className="my-6 text-sm">{product.description}</p>
      <button
        onClick={() => {
          addItemToCart(product);
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
    </section>
  );
}
