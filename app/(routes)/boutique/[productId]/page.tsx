import getProduct from "@/actions/get-product";
import ProductInfo from "@/components/ProductInfo";

export const revalidate = 0;
export default async function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const product = await getProduct(params.productId);

  if (!product) return null;

  return (
    <section className="mb-16 flex-1">
      <div className="h-20 w-full sm:hidden"></div>
      <hr className="mx-4 mb-1 border-black sm:mt-0" />
      <div className="mb-16 flex flex-1 flex-col gap-5 px-4 ">
        <h1 className="mb-24 text-3xl font-bold ">Détails du produit</h1>
        <div className="flex flex-col xl:mx-auto xl:w-full xl:max-w-7xl">
          <ProductInfo
            classNames="flex max-w-sm flex-1 flex-col gap-1 self-center"
            product={product}
          />
        </div>
      </div>
    </section>
  );
}
