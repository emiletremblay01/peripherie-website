"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

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
import { toast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const FormSchema = z.object({
  prenom: z.string().min(2, {
    message: "prenom must be at least 2 characters.",
  }),
  nom: z.string().min(1),
  pronom: z
    .enum(["elle", "il", "iel", "ielles", "ielles", "ielles"])
    .optional(),
  adresse_courriel: z.string().email(),
  adresse_civique: z.string().min(1),
  numero_telephone: z.string().min(1),
  description: z.string().min(10),
  demarche: z.string().min(10),
  fichier: z.string(),
});

export default function Soumission() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      prenom: "",
      nom: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="mb-16 px-4 xl:mx-auto xl:w-full xl:max-w-7xl">
      <div className="h-20 w-full sm:hidden"></div>
      <hr className=" mb-1  border-black sm:mt-0" />
      <h1 className="mb-24 text-3xl font-bold">Remise du dossier</h1>
      <h1 className="mb-2 font-bold">Informations personnelles</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-2">
          <FormField
            control={form.control}
            name="prenom"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Prénom"
                    {...field}
                    className="border-b border-black"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nom"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Nom"
                    {...field}
                    className="border-b border-black"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pronom"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Pronoms (iel, il, elle...)"
                    {...field}
                    className="border-b border-black"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="adresse_courriel"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Adresse courriel"
                    {...field}
                    className="border-b border-black"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="adresse_civique"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Adresse civique"
                    {...field}
                    className="border-b border-black"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="numero_telephone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Numéro de téléphone"
                    {...field}
                    className="border-b border-black"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="invisible h-16"></div>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <label className="font-bold">Description de l'oeuvre</label>
                <FormControl>
                  <Textarea
                    placeholder="Description de l'oeuvre (facultatif) "
                    className=" h-48 resize-none  bg-footer placeholder:text-gray-400"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="invisible h-16"></div>

          <FormField
            control={form.control}
            name="demarche"
            render={({ field }) => (
              <FormItem>
                <label className="font-bold">Démarche</label>
                <FormControl>
                  <Textarea
                    placeholder="Description de la démarche "
                    className=" h-48 resize-none bg-footer placeholder:text-gray-400"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="invisible h-16"></div>

          <FormField
            control={form.control}
            name="fichier"
            render={({ field }) => (
              <FormItem>
                <label className="font-bold">Fichier</label>
                <FormControl>
                  <Input
                    type="file"
                    {...field}
                    className="rounded bg-footer p-2 text-gray-500 file:mr-4 file:rounded-lg file:border-0 file:bg-gray-400 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:cursor-pointer hover:file:bg-gray-500"
                  />
                </FormControl>
                <FormDescription>
                  Un seul fichier peut être envoyé
                </FormDescription>
              </FormItem>
            )}
          />
          <div className="invisible h-16"></div>

          <Button type="submit" className="w-full justify-center ">
            SOUMETTRE
          </Button>
        </form>
      </Form>
    </div>
  );
}

const CustomInputExample = () => {
  const [selectedFile, setSelectedFile] = useState("Please select a file");

  return (
    <div className="flex flex-row items-center">
      <Input
        type="file"
        id="custom-input"
        onChange={(e) =>
          setSelectedFile(
            e.target.files?.[0]?.name ?? "Aucun fichier sélectionné",
          )
        }
        hidden
      />
      <label
        htmlFor="custom-input"
        className="mr-4 block cursor-pointer rounded-md border-0 bg-pink-50
            px-4 py-2 text-sm  font-semibold
            text-pink-700  hover:bg-pink-100"
      >
        Choose file
      </label>
      <label className="text-sm text-slate-500">{selectedFile}</label>
    </div>
  );
};
