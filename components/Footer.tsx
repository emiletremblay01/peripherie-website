"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { v4 as uuidv4 } from "uuid";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type villeAvecPointsDeVente = {
  id: string;
  nom: string;
  pointsDeVente: string[];
};

const villesAvecPointsDeVente: villeAvecPointsDeVente[] = [
  {
    id: uuidv4(),
    nom: "Montréal",
    pointsDeVente: [
      "Boutique Atelier 10",
      "Librairie Raffin - Plaza St-Hubert",
      "Librairie Un livre à soi",
      "Librairie Gallimard",
      "Librairie JASMIN de l'UQÀM",
      "Boutique Ex-voto",
      "Boutique du Livart",
      "Boutique du Musée McCord",
      "Boutique du Centre canadien d'architecture",
    ],
  },
  {
    id: uuidv4(),
    nom: "Québec",
    pointsDeVente: [
      "Librairie du Quartier",
      "Boutique Un Coin du Monde",
      "Boutique du MNBAQ",
      "Librairie La Liberté",
    ],
  },
  {
    id: uuidv4(),
    nom: "Trois-Rivières",
    pointsDeVente: ["Librairie L'Exèdre"],
  },
  {
    id: uuidv4(),
    nom: "Mont-Tremblant",
    pointsDeVente: ["Librairie Carpe Diem"],
  },
];

const formSchema = z.object({
  email: z.string().email(),
});

export default function Footer() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <footer className="w-full shrink-0 border-t border-gray-900 bg-footer px-4 pt-4">
      <div className="mx-auto justify-between gap-2 sm:grid sm:grid-cols-2 sm:grid-rows-1">
        {/* LEFT SECTION */}
        <div className="sm:max-w-xs lg:max-w-sm 2xl:max-w-lg  ">
          <p className="">
            <a
              href="https://www.facebook.com/PeripherieLeMag"
              target="_blank"
              className="group "
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
              className="group "
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
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-8 flex w-full flex-col sm:max-w-xs lg:max-w-sm 2xl:max-w-lg "
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">
                      Pour ne rien manquer
                    </FormLabel>
                    <FormControl className="p-0">
                      <Input
                        placeholder="adresse@courriel.com"
                        {...field}
                        className="border-b border-black bg-footer p-0 "
                        required
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                size="reset"
                variant="default"
                type="submit"
                className="mb-6 mt-3 cursor-pointer rounded-full border border-black  bg-footer pb-0 pt-0.5 text-base text-black hover:bg-gray-600 hover:bg-opacity-5 active:bg-opacity-10  "
              >
                S’INSCRIRE À L’INFOLETTRE
              </Button>
            </form>
          </Form>
        </div>
        {/* RIGHT SECTION */}
        <div className="sm:relative sm:max-w-xs lg:max-w-sm 2xl:max-w-lg   ">
          <p className=" mb-3 sm:min-w-max sm:max-w-xs lg:max-w-sm 2xl:max-w-lg  ">
            Points de vente
          </p>
          <div className="sm:absolute sm:col-span-2 sm:w-full sm:max-w-xs lg:max-w-sm 2xl:max-w-lg  ">
            <Accordion type="single" collapsible>
              {villesAvecPointsDeVente.map((ville) => (
                <AccordionItem
                  key={ville.id}
                  value={ville.nom}
                  className="border-black py-0 first:border-t"
                >
                  <AccordionTrigger className="py-0">
                    {ville.nom}
                  </AccordionTrigger>
                  <AccordionContent>
                    {ville.pointsDeVente.map((pointDeVente) => (
                      <p key={uuidv4()} className="pl-2">
                        {pointDeVente}
                      </p>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <p className=" mt-24 sm:mb-0 sm:mt-14 sm:max-w-xs sm:leading-none lg:max-w-xl">
          © Périphérie
        </p>
        <p className=" sm:col-start-1 sm:inline-block sm:max-w-xs lg:max-w-sm 2xl:max-w-lg  ">
          Le mag des nouvelles marges{" "}
          <span className=" font-g2ciao sm:max-w-xs lg:max-w-sm 2xl:max-w-lg ">
            créatives
          </span>
        </p>
        <p className="mt-8  sm:col-start-1 sm:block sm:max-w-xs lg:max-w-sm 2xl:max-w-lg  ">
          Design web par Émile Painchaud <br />
          Développement web par Émile Tremblay
        </p>
      </div>
    </footer>
  );
}
