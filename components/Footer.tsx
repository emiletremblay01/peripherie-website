"use client";

import { v4 as uuidv4 } from "uuid";

import dataVilles from "@/data/villesAvecPointsDeVentes.json";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import NewsLetterSignUpForm from "./NewsLetterSignupForm";

type villeAvecPointsDeVente = {
  nom: string;
  pointsDeVente: string[];
};

const villesAvecPointsDeVente: villeAvecPointsDeVente[] = dataVilles;

export default function Footer() {
  return (
    <footer className="w-full shrink-0 border-t border-gray-900 bg-footer px-4 pt-4">
      <div className="mx-auto justify-between gap-2 sm:grid sm:grid-cols-2 sm:grid-rows-1">
        {/* LEFT SECTION */}
        <div className="sm:max-w-xs lg:max-w-sm 2xl:max-w-lg">
          <p className="">
            <a
              href="https://www.facebook.com/PeripherieLeMag"
              target="_blank"
              className="group"
            >
              <span className="group-hover:opacity-80">Facebook</span>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.9}
                stroke="currentColor"
                className="inline h-4 w-3.5 -translate-y-0.5 group-hover:opacity-80"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
          </p>
          <p className="">
            <a
              href="https://www.instagram.com/peripherie_lemag/"
              target="_blank"
              className="group"
            >
              <span className="group-hover:opacity-80">Instagram</span>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.9}
                stroke="currentColor"
                className="inline h-4 w-3.5 -translate-y-0.5 group-hover:opacity-80"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
          </p>

          <p className="">
            <a
              href="mailto:info@peripherie-lemag.com"
              className="hover:underline hover:opacity-80"
            >
              info@peripherie-lemag.com
            </a>
          </p>
          <NewsLetterSignUpForm className="mt-8 flex w-full flex-col sm:max-w-xs lg:max-w-sm 2xl:max-w-lg" />
        </div>
        {/* RIGHT SECTION */}
        <div className="sm:relative sm:max-w-xs lg:max-w-sm 2xl:max-w-lg">
          <p className="mb-3 sm:min-w-max sm:max-w-xs lg:max-w-sm 2xl:max-w-lg">
            Points de vente
          </p>
          <div className="sm:absolute sm:col-span-2 sm:w-full sm:max-w-xs lg:max-w-sm 2xl:max-w-lg">
            <Accordion type="single" collapsible>
              {villesAvecPointsDeVente.map((ville) => (
                <AccordionItem
                  key={ville.nom}
                  value={ville.nom}
                  className="border-black py-0 first:border-t"
                >
                  <AccordionTrigger className="group relative py-0">
                    <span className="group-hover:invisible">{ville.nom}</span>
                    <span className="invisible absolute top-1 -translate-y-px font-g2ciao text-sm group-hover:visible">
                      {ville.nom}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="">
                    <div className="float-right w-3/4">
                      {ville.pointsDeVente.map((pointDeVente) => (
                        <div key={uuidv4()} className="border-t border-black">
                          <p className="group relative text-base">
                            <span className="group-hover:invisible">
                              {pointDeVente}
                            </span>
                            <span className="invisible absolute left-0 top-1 -translate-y-px font-g2ciao text-sm group-hover:visible">
                              {pointDeVente}
                            </span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <p className="mt-24 sm:mb-0 sm:mt-14 sm:max-w-xs sm:leading-none lg:max-w-xl">
          © Périphérie
        </p>
        <p className="sm:col-start-1 sm:inline-block sm:max-w-xs lg:max-w-sm 2xl:max-w-lg">
          Le mag des nouvelles marges{" "}
          <span className="font-g2ciao sm:max-w-xs lg:max-w-sm 2xl:max-w-lg">
            créatives
          </span>
        </p>
        <p className="mt-8 sm:col-start-1 sm:block sm:max-w-xs lg:max-w-sm 2xl:max-w-lg">
          Design web par Émile Painchaud <br />
          Développement web par Émile Tremblay
        </p>
      </div>
    </footer>
  );
}
