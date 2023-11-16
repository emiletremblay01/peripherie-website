import { BoutiqueCard } from "@/components/BoutiqueCard";
import getProducts from "@/actions/get-products";

const Boutique = async () => {
  const items = await getProducts({ isArchived: false });

  return (
    <section className="mb-16 flex-1">
      <div className="h-20 w-full sm:hidden"></div>

      <hr className="mx-4 mb-1  border-black sm:mt-0" />
      <h1 className="mb-24 ml-4 text-3xl font-bold">Boutique</h1>
      <div className="flex grow flex-col flex-wrap items-center justify-center gap-12 sm:flex-row sm:gap-6 sm:px-4 ">
        {items.map((item) => (
          <BoutiqueCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};

export default Boutique;
