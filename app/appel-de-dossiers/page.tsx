import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
export default function AppelDeDossiers() {
  return (
    <div>
      <div className="relative mb-16 flex-1 lg:px-4 xl:mx-auto xl:w-full xl:max-w-7xl">
        <div className="fixed bottom-6 z-40 h-fit  w-full min-w-fit grow-0 px-4 sm:mx-4   sm:max-w-xs sm:p-0 lg:mx-0 ">
          <Button asChild className="w-full bg-white">
            <Link
              className="group/button "
              href="/appel-de-dossiers/soumission"
            >
              <span className="animate-pulse group-hover/button:animate-none">
                SOUMETTRE UNE OEUVRE
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="h-4 w-4  "
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
        <div className="relative h-[26rem] w-full overflow-hidden sm:px-4 lg:aspect-[5/2] lg:h-auto lg:px-0 ">
          <Image
            src="https://picsum.photos/1248/416"
            alt="Magazine Périphérie"
            width={1248}
            height={600}
            className="min-h-full object-cover object-left"
          />
          {/* ARROW BUTTON */}
        </div>

        <section className="flex flex-col gap-10 px-4 md:gap-16 lg:px-0">
          <div className=" mt-4 text-3xl leading-7">
            <hr className="mb-4 mt-6 hidden border-black lg:block" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ratione
            rerum totam fugit voluptas eaque similique impedit quasi incidunt,
            fuga ipsum. Natus, officiis animi eveniet facere asperiores eum
            necessitatibus quia.
          </div>

          <section>
            <h1 className="font-bold lg:hidden">Ce qui nous motive</h1>
            <hr className="mb-1 mt-2 border-black" />
            <div className="lg:flex">
              <h1 className="hidden lg:block lg:min-w-fit lg:flex-none lg:basis-80">
                Ce qui nous motive
              </h1>

              <p className=" text-sm leading-4 md:text-base  md:leading-5 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Numquam sint sapiente corporis dolore debitis quos rerum amet
                veniam commodi alias sit fugiat reprehenderit accusantium
                distinctio molestiae natus, ipsa similique expedita. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Minima veniam
                odit eum expedita molestias. Cum, magni corrupti in consectetur
                illum eum impedit! Sit suscipit distinctio quia itaque
                aspernatur sint minus!
              </p>
            </div>
          </section>

          <section>
            <h1 className="font-bold lg:hidden">Fonctionnement</h1>
            <hr className="mb-1 mt-2 border-black" />
            <div className="lg:flex">
              <h1 className="hidden lg:block lg:min-w-fit lg:flex-none lg:basis-80">
                Fonctionnement
              </h1>
              <div>
                <p className="mb-4 text-sm leading-4 md:text-base md:leading-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Numquam sint sapiente corporis dolore debitis quos rerum amet
                  veniam commodi alias sit fugiat reprehenderit accusantium
                  distinctio molestiae natus, ipsa similique expedita. Lorem,
                  ipsum dolor sit amet consectetur adipisicing elit. Minima
                  veniam odit eum expedita molestias. Cum, magni corrupti in
                  consectetur illum eum impedit! Sit suscipit distinctio quia
                  itaque aspernatur sint minus!
                </p>
                <hr className="mb-1 mt-2 border-black" />
                <p className=" text-sm leading-4 md:text-base md:leading-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Numquam sint sapiente corporis dolore debitis quos rerum amet
                  veniam commodi alias sit fugiat reprehenderit accusantium
                  distinctio molestiae natus, ipsa similique expedita. Lorem,
                  ipsum dolor sit amet consectetur adipisicing elit!
                </p>
              </div>
            </div>
          </section>

          <section>
            <h1 className="font-bold lg:hidden">Paraître dans Périphérie</h1>
            <hr className="mb-1 mt-2 border-black" />
            <div className="lg:flex">
              <h1 className="hidden lg:block lg:min-w-fit lg:flex-none lg:basis-80">
                Paraître dans Périphérie
              </h1>
              <div>
                <div className="md:flex ">
                  <p className="mb-2 md:min-w-fit md:flex-none md:basis-80">
                    Diffusion imprimée
                  </p>
                  <p className="mb-4 pl-24 text-sm leading-4 md:pl-0 md:text-base md:leading-5">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Numquam sint sapiente corporis dolore debitis quos rerum
                    amet veniam commodi alias sit fugiat reprehenderit
                    accusantium distinctio molestiae natus, ipsa similique
                    expedita. Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Minima veniam odit eum expedita molestias.
                    Cum, magni corrupti in consectetur illum eum impedit! Sit
                    suscipit distinctio quia itaque aspernatur sint minus!
                  </p>
                </div>
                <hr className="mb-1 mt-2 border-black" />
                <div className="md:flex">
                  <p className="mb-2 md:min-w-fit md:flex-none md:basis-80">
                    Diffusion numérique
                  </p>
                  <p className=" pl-24 text-sm leading-4 md:pl-0 md:text-base md:leading-5">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Numquam sint sapiente corporis dolore debitis quos rerum
                    amet veniam commodi alias sit fugiat reprehenderit
                    accusantium distinctio molestiae natus, ipsa similique
                    expedita. Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Minima veniam odit eum expedita molestias.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h1 className="font-bold lg:hidden">Soumettre une oeuvre</h1>
            <hr className="mb-1 mt-2 border-black" />
            <div className="lg:flex">
              <h1 className="hidden lg:block lg:min-w-fit lg:flex-none lg:basis-80">
                Soumettre une oeuvre
              </h1>
              <div>
                <div className="md:flex">
                  <p className="mb-2 md:min-w-fit md:flex-none md:basis-80">
                    Date de tombée
                  </p>
                  <p className="mb-4 pl-24 text-sm leading-4 md:pl-0 md:text-base md:leading-5">
                    15 mars 2024
                  </p>
                </div>
                <hr className="mb-1 mt-2 border-black" />
                <div className="md:flex">
                  <p className="mb-2 md:min-w-fit md:flex-none md:basis-80">
                    Détails techniques
                  </p>
                  <p className="mb-4 pl-24 text-sm leading-4 last:mb-10 md:pl-0 md:text-base md:leading-5">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
                    <br />
                    <br />
                    Numquam sint sapiente corporis dolore debitis quos rerum
                    amet veniam commodi alias sit fugiat reprehenderit
                    accusantium distinctio molestiae natus, ipsa similique
                    expedita. Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Minima veniam odit eum expedita molestias.
                    Cum, magni corrupti in consectetur illum eum impedit! Sit
                    suscipit distinctio quia itaque aspernatur sint minus!
                  </p>
                </div>
                <hr className="mb-1 mt-2 border-black" />
                <div className="md:flex">
                  <p className="mb-2 md:min-w-fit md:flex-none md:basis-80">
                    Ce qui doit être fourni
                  </p>
                  <p className="mb-2 pl-24 text-sm leading-4 last:mb-10 md:pl-0 md:text-base md:leading-5">
                    Tes coordonées
                    <br />
                    <br />
                    Numquam sint sapiente corporis dolore debitis quos rerum
                    amet veniam commodi alias sit fugiat reprehenderit
                    accusantium distinctio molestiae natus, ipsa similique
                    expedita. Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Minima veniam odit eum expedita molestias.{" "}
                    <br />
                    <br />
                    Ton oeuvre!
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h1 className="font-bold lg:hidden">Bon à savoir</h1>
            <hr className="mb-1 mt-2 border-black" />
            <div className="lg:flex">
              <h1 className="hidden lg:block lg:min-w-fit lg:flex-none lg:basis-80">
                Bon à savoir
              </h1>
              <div>
                <div className="md:flex">
                  <p className="mb-2 md:min-w-fit md:flex-none md:basis-80">
                    Exclusivité
                  </p>
                  <p className="mb-4 pl-24 text-sm  leading-4 last:mb-10 md:pl-0 md:text-base md:leading-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil nostrum quos ullam voluptatum delectus quasi aliquid
                    excepturi.
                  </p>
                </div>
                <hr className="mb-1 mt-2 border-black" />
                <div className="md:flex">
                  <p className="mb-2 md:min-w-fit md:flex-none md:basis-80">
                    Participations multiples
                  </p>
                  <p className="mb-4 pl-24 text-sm leading-4 last:mb-10 md:pl-0 md:text-base md:leading-5">
                    Un.e créateur.trice peut soumettre plusieurs oeuvres.
                  </p>
                </div>
                <hr className="mb-1 mt-2 border-black" />
                <div className="md:flex">
                  <p className="mb-2 md:min-w-fit md:flex-none md:basis-80">
                    Questions
                  </p>
                  <p className="mb-4 pl-24 text-sm leading-4 last:mb-10 md:pl-0 md:text-base md:leading-5">
                    Ce document ne répond pas à toutes vos questions? <br />
                    <br />
                    Contactez-nous au info@peripherie-lemag.com.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}
