"use client";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
const formSchema = z.object({
  email: z.string().email({
    message: "Vous devez entrer une adresse courriel valide.",
  }),
});

export default function NewsLetterSignUpForm({
  className = "",
}: {
  className?: string;
}) {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);

      const response = await axios.post(`/api`, values);

      if (response.status === 201) {
        toast({ title: "Inscription à l'infolettre réussie." });
        return;
      }
      if (response.status === 200) {
        const { status, title } = response.data;
        if (status === 400 && title === "Member Exists") {
          toast({
            title: "Cette adresse courriel est déjà inscrite à l'infolettre.",
          });
          return;
        }
        toast({ title: "Inscription à l'infolettre réussie." });
        return;
      }

      throw new Error(response.data);
    } catch (error) {
      toast({ title: "Erreur lors de l'ajout de l'inscription." });
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("flex", className)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Pour ne rien manquer</FormLabel>
              <FormControl className="p-0">
                <Input
                  placeholder="adresse@courriel.com"
                  {...field}
                  className="border-b border-black bg-footer p-0"
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          size="reset"
          variant="default"
          type="submit"
          disabled={loading}
          className="group relative mb-6 mt-3 cursor-pointer rounded-full border border-black bg-footer pb-0 pt-0.5 text-base text-black hover:bg-gray-600 hover:bg-opacity-5 active:bg-opacity-10"
        >
          <span className="group-hover:invisible">
            S’INSCRIRE À L’INFOLETTRE
          </span>
          <span className="invisible absolute top-1 font-g2ciao text-sm group-hover:visible">
            S’INSCRIRE À L’INFOLETTRE
          </span>
        </Button>
      </form>
    </Form>
  );
}
