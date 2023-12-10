"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { cn, formatCurrency } from "@/lib/utils";

import useCart from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { StoreItem } from "@/types";
import { v4 as uuidv4 } from "uuid";
type ShoppingCartProps = {
  isOpen: boolean;
  className?: string;
};
type ItemInCartWithQuantity = StoreItem & { quantity: number };

export function ShoppingCart({ isOpen, className }: ShoppingCartProps) {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();
  useEffect(() => {
    setIsMounted(true);
  }, [cart.isCartOpen]);

  if (!isMounted) {
    return null;
  }

  const itemsInCartWithQuantity: ItemInCartWithQuantity[] =
    cart.cartItems.reduce(
      (acc: ItemInCartWithQuantity[], current: StoreItem) => {
        const existingElement = acc.find((el) => el.id === current.id);

        if (existingElement) {
          existingElement.quantity++;
        } else {
          acc.push({
            ...current,
            quantity: 1,
          });
        }

        return acc;
      },
      [],
    );

  const getTotalPriceOfItemsInCart = () => {
    return itemsInCartWithQuantity.reduce((acc, current) => {
      return acc + current.price * current.quantity;
    }, 0);
  };

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: cart.cartItems.map((item) => item.id),
      },
    );
    window.location = response.data.url;
  };

  return (
    <Transition
      show={isOpen}
      enter="transition-transform duration-200 ease-in-out"
      enterFrom="translate-x-full"
      enterTo="translate-x-0"
      leave="transition-transform duration-200 ease-in-out"
      leaveFrom="translate-x-0"
      leaveTo="translate-x-full"
      className={cn(className, "flex flex-col")}
    >
      {itemsInCartWithQuantity.map((item) => {
        if (item.quantity <= 0) return;

        return (
          <>
            {item && (
              <div className="first:mt-28" key={uuidv4()}>
                <hr className="h-0.5  bg-gray-700" />
                <div className="mb-5 flex">
                  <p className=" w-52">{item.name}</p>
                  <p className="flex-1 ">({item.quantity})</p>
                  <p>{formatCurrency(item.quantity * item.price)}</p>
                  {/* MINUS ICON  */}
                  <svg
                    onClick={() => cart.removeItemFromCart(item)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className=" ml-1 h-5 w-5 translate-y-px cursor-pointer hover:opacity-80"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 12H6"
                    />
                  </svg>
                </div>
              </div>
            )}
          </>
        );
      })}

      <hr className="mt-28 h-0.5 bg-gray-700" />
      <div className="flex justify-between">
        <p className="font-bold">Total</p>
        <p className="font-bold">
          {formatCurrency(getTotalPriceOfItemsInCart())}
        </p>
      </div>

      <Button
        disabled={cart.cartItems.length === 0}
        onClick={onCheckout}
        className="group mt-10 w-52 justify-center self-center "
      >
        <p className="group-hover:translate-y-[1px] ">PASSER À LA CAISSE</p>
      </Button>
      {/* X ICON */}
      <svg
        onClick={() => cart.closeCart()}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="absolute left-0 top-0 m-4 hidden h-6 w-6 cursor-pointer hover:opacity-80 sm:block"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </Transition>
  );
}
