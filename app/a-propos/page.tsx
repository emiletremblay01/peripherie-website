"use client";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function APropos() {
  return (
    <div className="mb-16 flex flex-1 flex-col items-stretch  sm:px-4 xl:mx-auto xl:w-full xl:max-w-7xl">
      <div className="relative z-0 h-[26rem] w-full ">
        <Image
          src="/images/a_propos_sm.jpg"
          alt="Magazine Périphérie"
          fill={true}
          className="hidden object-cover object-left-top sm:block"
        />
        <Image
          src="/images/a_propos.jpg"
          alt="Magazine Périphérie"
          fill={true}
          className="object-cover object-left-top sm:hidden"
        />
      </div>

      <section className="px-4 sm:px-0">
        <hr className=" mb-4 mt-6 hidden border-black lg:block" />
        <div className=" lg:flex">
          <h1 className="mt-24 font-bold lg:mt-0 lg:grow-0 lg:basis-80 lg:font-normal lg:leading-5 ">
            L’essence de Périphérie
          </h1>
          <hr className="mb-1 mt-2 border-black lg:hidden" />

          <div className="lg:flex-1">
            <p className=" mb-4 leading-5 ">
              De l’architecture à la bédé, en passant par les arts culinaires et
              et l’urbanisme, la création est un monde infiniment vaste, qu’il
              nous appartient de redéfinir. Et c’est le pari de notre jeune
              équipe : proposer un repère imprimé qui mise sur l’exploration
              d’une sélection éclectique de sujets intemporels, présentés dans
              une variété de formats longs.
            </p>
            <p className=" mb-4 leading-5 ">
              Notre terrain de jeu ? L’émergence, l’ombre et l’alternatif.
              Périphérie sonde les marges des mondes créatifs via des portraits
              subjectifs, des narrations immersives et des entrevues intimistes.
              Notre équipe estime qu’il importe de produire des contenus riches,
              tant dans le fond que dans la forme, qui célèbrent le travail
              d’artistes émergent·es et de créateur·rices qui oeuvrent en
              périphérie de la culture. Chaque numéro compte plus d’une centaine
              de pages et s’articule autour d’un thème relatif à la création.
            </p>
            <p className=" mb-4 leading-5 ">
              Périphérie est en vente dans une vingtaine de librairies
              indépendantes et boutiques d’art à travers le Québec.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-24 px-4 sm:px-0">
        <hr className="mb-4   hidden border-black lg:block" />
        <div className="lg:flex">
          <h1 className=" font-bold lg:basis-80 lg:font-normal lg:leading-5 ">
            L’équipe
          </h1>
          <hr className="mb-1 mt-2 border-black lg:hidden" />
          <div className="lg:flex-1">
            <p className=" mb-4 leading-5 ">
              Périphérie est mené de front par une jeune équipe indépendante,
              formée de membres de la relève francophone des mondes du
              journalisme, de la littérature, du design et de la photographie.
            </p>
            <hr className="mb-1 mt-2 border-black lg:hidden" />
            <div className="mb-4 grid min-w-min max-w-xl grid-cols-2  text-xs sm:text-base ">
              <p>Florence La Rochelle</p>
              <p>Fondatrice et rédactrice en chef</p>
              <p>Émile Painchaud</p>
              <p>Directeur artistique</p>
              <p>André Rainville (@villedepluie)</p>
              <p>Photographe</p>
              <p>Paul Fontaine</p>
              <p>Éditeur</p>
              <p>Émilie Brisson</p>
              <p>Éditrice</p>
              <p>Renaud Chicoine-McKenzie</p>
              <p>Éditeur</p>
              <p>Camile de Schrooder</p>
              <p>Rédactrice</p>
              <p>Carl-Samuel Provost-Claudel</p>
              <p>Rédacteur</p>
              <p>Charlotte Marschall</p>
              <p>Rédactrice</p>
              <p>Claire-Marine Beha</p>
              <p>Rédactrice</p>
              <p>Clémence Desfils</p>
              <p>Rédactrice</p>
              <p>Laurie Michaud</p>
              <p>Rédactrice</p>
              <p>Lori Isbister</p>
              <p>Rédactrice</p>
              <p>Manon Bénédicte Baudouin</p>
              <p>Rédactrice</p>
              <p>Marilou LeBel Dupuis</p>
              <p>Rédactrice</p>
              <p>Thomas Vaillancourt</p>
              <p>Rédacteur</p>
              <p>Safia Lukawecki</p>
              <p>Rédactrice</p>
              <p>Laure Painchaud</p>
              <p>Correctrice</p>
              <p>Émile Tremblay</p>
              <p>Développeur web</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
