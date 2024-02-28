"use client";

import * as React from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { useState } from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";
import { v4 as uuidv4 } from "uuid";
import { ShoppingCart } from "@/components/ShoppingCart";
import { Button } from "@/components/ui/button";
import useCart from "@/hooks/useCart";
import Image from "next/image";

const pages = [
  // { id: uuidv4(), name: "Boutique", path: "/boutique" },
  { id: uuidv4(), name: "Éditions", path: "/editions" },
  { id: uuidv4(), name: "À propos", path: "/a-propos" },
  // { id: uuidv4(), name: "Appel de dossiers", path: "/appel-de-dossiers" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleMenu = () =>
    setMobileMenuOpen((isMobileMenuOpen) => !isMobileMenuOpen);

  const { getTotalOfItemsInCart, isCartOpen, openCart, closeCart } = useCart();
  const toggleCart = () => {
    isCartOpen ? closeCart() : openCart();
  };
  return (
    <>
      <nav
        id="DESKTOP_NAVBAR"
        className="relative hidden w-full sm:flex sm:justify-end sm:px-4 sm:pb-16 sm:pt-6 sm:text-lg"
      >
        <NavigationMenu className="hidden max-w-none sm:flex sm:basis-full">
          <NavigationMenuList className="flex gap-5">
            <Link
              href="/"
              className="absolute -left-52 -top-2 hidden w-20 rounded-full 2xl:block"
            >
              <svg
                id="Calque_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 490.03 450.37"
              >
                <path d="M324.89,244.56c-3.05,10.47-7.62,19.58-14.76,27.34-7.4,8.03-16.78,12.01-27.32,13.74-9.85,1.61-19.61,1.26-29.35-.93-4.63-1.04-8.84-3.01-12.92-5.27-12.04-6.68-23.9-13.66-34.16-22.99-1.67-1.52-3.26-3.11-5.04-4.82-.84,6.05-2.61,11.69-5.87,16.81-3.26,5.11-7.08,9.64-12.45,12.68-4.52,2.56-9.05,5.1-13.56,7.67-2.61,1.49-5.13,3.09-7.19,5.33-1.05,1.15-2.41,1.81-4.03,1.58-1.64-.23-2.79-1.16-3.14-2.8-.44-2.11,.58-3.55,2.34-4.58,4.57-2.68,9.3-5.05,14.31-6.78,15.08-5.22,23.88-15.66,26.2-31.44,1.83-12.47,4.18-24.88,8.62-36.65,3.29-8.72,6.99-17.52,15.05-23.47,3.74-2.76,7.15-6.03,10.07-9.73,1.64-2.08,1.53-3.6-.39-5.52-3.25-3.25-8.58-3.95-13.28-1.65-3.99,1.95-7.47,4.65-10.88,7.47-2.85,2.35-5.52,4.96-9.08,6.31-.62,.24-1.14,.82-1.64,1.31-6.27,6.21-11.41,12.98-13.82,21.8-2.25,8.22-5.58,16.14-9.08,23.94-.34,.75-.52,2-1.6,1.81-1.3-.22-.98-1.5-.9-2.41,1.45-14.92,6.09-28.73,14.75-41.04,3.5-4.98,8.67-8.24,13.25-12.1,3.92-3.29,7.93-6.47,11.86-9.75,2.11-1.76,4.01-3.73,5.22-6.25,1.78-3.72,.68-6.11-3.35-7.1-3.06-.75-6.16-.33-9.2,.2-4.6,.81-9.13,2.13-13.35,4.07-6.08,2.79-12,5.94-17.84,9.19-6.28,3.49-8.86,9.82-11.45,16.01-1.03,2.45-1.98,5-3.58,7.04-4.81,6.16-7.57,13.27-10.19,20.48-.39,1.07-.96,2.07-1.44,3.11-.31,.66-.69,1.38-1.53,1.12-.84-.26-.71-1.12-.7-1.82,.04-2.33,.85-4.48,1.61-6.62,2.44-6.88,4.9-13.76,8.45-20.17,2.19-3.96,3.12-8.38,5.05-12.45,3.18-6.72,7.99-11.58,14.83-14.34,4.76-1.92,9.15-4.53,13.66-6.91,2.99-1.58,3.24-2.84,.82-5.2-4.43-4.31-9.8-5.51-15.62-3.55-6.77,2.29-13.19,5.42-19.29,9.17-4.08,2.51-7.05,6.07-9.7,9.97-3.22,4.74-6.43,9.47-10.34,13.71-2.28,2.47-3.48,5.71-4.89,8.74-2.72,5.83-5.29,11.73-7.98,17.57-.44,.95-.67,2.56-2.22,2.07-1.47-.46-.96-1.98-.8-3.01,.7-4.47,2.12-8.77,4.17-12.75,1.27-2.47,.64-4.54-.88-6-4.11-3.92-8.55-7.5-13.13-11.45-1.07,6.66-2.21,12.87-2.38,19.2-.14,5.38-.16,10.75-.37,16.13-.32,8.3,1.17,16.49,2.77,24.6,.79,4.02,.93,8.05,1.23,12.07,.86,11.54,.15,23.09,.05,34.64-.03,3.57-1.32,5.16-3.44,4.93-2.13-.22-2.97-2.11-2.19-5.57,2.21-9.68,1.5-19.46,1.06-29.23-.4-8.8-1.79-17.51-2.66-26.26-.57-5.74-.11-11.65,.5-17.42,.49-4.63,.09-9.16-.37-13.69-.69-6.74-.11-13.24,1.39-19.89,2.15-9.56,5.97-18.57,8.23-28.06,1.22-5.12,3.81-9.25,8.07-12.31,9.59-6.88,20.02-11.85,31.89-12.97,7.26-.69,14.02,2.19,20.91,3.94,4.14,1.05,4.29,1.25,6.14-2.77,9.58-20.77,32.87-24.74,46.79-19.57,7.74,2.88,15.24,6.43,22.83,9.7,.79,.34,1.37,.89,2.39,.33,7.89-4.32,16.55-4.5,25.22-4.48,4.33,.01,8.75,.22,12.73,1.89,3.38,1.42,6.59,1.05,9.91,.59,9.46-1.31,23.64,5.53,28.1,13.74,.56,1.04,1.16,1.31,2.21,1.42,11.55,1.15,18.38,7,21.15,18.17,1.05,4.25,2.57,8.42,2.62,12.88,.01,1.14,.91,1.42,1.61,1.89,5.58,3.73,10.9,7.8,16.21,11.88,9.9,7.62,16.3,17.22,18.36,29.75,2.81,17.03-1.47,31.74-13.35,44.26-2.49,2.63-5.1,5.12-7.89,7.44-2.74,2.28-5.86,3.89-9.26,5.19,.7,1.01,1.81,1.04,2.7,1.36,5.54,2.02,11.11,3.94,16.65,5.96,4.37,1.59,5.33,4.5,2.86,8.46-.37,.6-.75,1.22-1.25,1.71-7.53,7.32-15.17,14.55-25.23,18.32-2.55,.96-3.02,1.91-2.04,4.44,4.52,11.6,2.28,22.31-4.84,32.17-2.27,3.15-5.07,5.95-8.32,8.07-17.92,11.7-36.98,14.66-57.17,6.65-6.42-2.54-11.87-6.62-15.66-12.56-5.99-9.39-3.35-19.65,6.46-24.97,6.3-3.42,13.32-4.54,20.25-5.8,16.56-3.03,33.03-6.41,49.33-10.62,12.13-3.13,22.54-9.4,31.86-17.62,.86-.76,1.58-1.66,2.39-2.47,1.13-1.16,.89-1.96-.59-2.5-4.46-1.64-8.88-3.39-13.38-4.9-9.77-3.29-19.6-6.4-28.38-12.03-2.96-1.9-5.7-4.07-8.43-6.8Zm-32.61-54.36c-13.35-3.74-25.97-2.67-37.28,5.57-8.44,6.15-13.72,15.03-18.99,23.81-.53,.88-.74,1.96-1.06,2.96-3.73,11.97-3.96,24.07-1.47,36.31,.92,4.55,2.11,8.66,5.88,11.97,9.83,8.64,21.37,11.9,34.12,11.77,4.63-.05,9.22-.57,13.82-2.01-3.26-6-6.17-11.92-7.85-18.36-3.15-12.06-3.75-24.39-3.43-36.75,.25-9.76,2.46-19.06,8.76-26.94,2.3-2.88,4.76-5.62,7.49-8.34Zm42.06-23.4c-6.98-.14-13.06,1.08-18.69,4.51-6.43,3.91-11.11,9.38-15.17,15.57-1.03,1.57-.71,2.08,.77,2.89,3.96,2.15,7.58,4.81,10.82,7.93,11.86,11.41,16.52,25.26,13.79,41.52-.18,1.07-.13,1.7,.82,2.44,7.02,5.41,14.52,9.95,22.79,13.19,.56,.22,1.3,.63,1.73,.44,4.1-1.76,8.75-2.09,12.4-5.01,1.78-1.42,3.97-2.42,1.14-4.86-.55-.47-.74-1.38-1.04-2.11-4.39-10.63-7.9-21.48-8.79-33.04-.94-12.33,.17-24.29,6.2-35.38,.58-1.07,.3-1.28-.67-1.59-8.72-2.77-17.37-5.86-26.09-6.48Zm14.95-10.6c-.5-4.42-1.95-8.29-3.12-12.21-2.06-6.94-6.96-10.79-13.78-12.41-6.1-1.45-12.27-.86-18.41-.24-3.66,.37-7.33,.8-10.78,2.28-9.55,4.1-15.71,11.91-21.69,19.89-.77,1.03-1.21,2.35-1.62,3.6-1.68,5.2,.94,8.15,6.32,7.15,3.55-.66,6.74-2.21,9.31-4.7,6.19-6,13.74-9.3,21.83-11.78,7.17-2.2,14-1.49,20.55,1.87,3.8,1.95,7.42,4.27,11.36,6.57Zm-26.99-30.58c-4.1-4.64-8.46-8.23-14.17-9.34-11.29-2.19-21.84,.14-31.63,6.11-9.99,6.09-15.85,14.99-17.85,26.46-.56,3.21,.46,4.24,3.72,3.89,2.69-.29,5-1.62,7.3-2.93,6.85-3.88,12.86-8.95,19.17-13.6,6.27-4.62,13.11-7.9,20.86-9.04,4-.59,8.02-.99,12.6-1.55Zm-37.31-12.81c-8.01-.59-15.96-.59-23.79,.87-10.08,1.89-17.48,7.17-20.59,17.43-.49,1.61-.24,3.12,.24,4.66,.52,1.7,1.87,2.29,3.28,1.76,3.67-1.39,7.53-2.31,10.75-4.87,9.42-7.49,18.46-15.61,30.11-19.85Z" />
              </svg>
            </Link>
            {pages.map((page) => (
              <NavigationMenuItem
                key={page.id}
                className="group/font relative min-w-fit"
              >
                <Link href={page.path} legacyBehavior passHref>
                  <NavigationMenuLink>
                    <p className="font-bold group-hover/font:opacity-0">
                      {page.name}
                    </p>
                    <p className="absolute top-0.5 z-10 hidden min-w-max font-g2ciao text-base group-hover/font:block">
                      {page.name}
                    </p>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>{" "}
          <div className="absolute right-0 top-1/2 flex -translate-y-1/2">
            {/* Panier button */}
            <Button
              onClick={toggleCart}
              className={cn(" gap-1 hover:text-opacity-80 hover:no-underline", {
                invisible: getTotalOfItemsInCart() <= 0,
              })}
              variant="link"
            >
              <span>Panier</span>
              {getTotalOfItemsInCart()}
            </Button>
            {/* ARROW BUTTON */}
            <Button
              asChild
              className="hidden h-fit w-56 max-w-sm flex-none gap-4 lg:hidden"
            >
              <Link className="" href="/boutique">
                PRÉCOMMANDER
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </Button>
          </div>
        </NavigationMenu>
      </nav>

      <nav id="MOBILE_NAVBAR" className="sm:hidden">
        <header className="fixed z-50 flex w-full items-center justify-between bg-transparent px-4 pt-2 mix-blend-difference sm:hidden">
          <div className="overflow-clip">
            <Link
              href="/"
              onClick={() => {
                setMobileMenuOpen(false);
              }}
            >
              <Image
                src="/images/peripherie_logotype_noir.png"
                alt="logo"
                width={112}
                height={47}
                className="w-28 -translate-x-2 invert"
              />
            </Link>
          </div>
          <div className="flex items-center gap-5 bg-transparent">
            <button
              className={cn("invert hover:opacity-80", {
                invisible: getTotalOfItemsInCart() <= 0,
              })}
              onClick={() => {
                setMobileMenuOpen(false);
                toggleCart();
              }}
            >
              <span>Panier </span>
              {getTotalOfItemsInCart()}
            </button>
            <button
              onClick={() => {
                toggleMenu();
                closeCart();
              }}
              className="group flex h-5 w-6 flex-col justify-between overflow-visible"
            >
              <div
                className={cn(
                  "h-1 w-full origin-right bg-white transition-transform ease-in-out",
                  { "-rotate-45 scale-95": isMobileMenuOpen },
                )}
              ></div>
              <div
                className={cn(
                  "h-1 w-full bg-white transition-transform ease-in-out",
                  { "translate-x-16": isMobileMenuOpen },
                )}
              ></div>

              <div
                className={cn(
                  "h-1 w-full origin-right bg-white transition-transform ease-in-out",
                  { "rotate-45 scale-95": isMobileMenuOpen },
                )}
              ></div>
            </button>
          </div>
        </header>

        {/* Menu */}
        <Transition
          show={isMobileMenuOpen}
          enter="transition-transform duration-200 ease-in-out"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition-transform duration-200 ease-in-out"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
          className="fixed left-0 top-0 z-10 h-full w-full bg-white px-4"
        >
          {pages.map((page) => (
            <div className="first:mt-28" key={page.name}>
              <hr className="mb-1 h-0.5 bg-gray-700" />
              <p className="text-3xl font-bold">
                <Link
                  onClick={toggleMenu}
                  href={page.path}
                  className="hover:text-gray-300"
                >
                  {page.name}
                </Link>
              </p>
            </div>
          ))}
        </Transition>
      </nav>
      <ShoppingCart
        isOpen={isCartOpen}
        className="fixed right-0 top-0 z-[49] h-full w-full bg-white px-4 shadow min-[524px]:w-96"
      />
    </>
  );
}
