import { StoreItem } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProducts = async (query: {
  isArchived?: boolean;
}): Promise<StoreItem[]> => {
  try {
    const url = qs.stringifyUrl({
      url: URL,
      query: {
        isArchived: query.isArchived,
      },
    });

    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    });

    if (!res.ok) {
      // If the response status is not OK (e.g., 404 or 500), throw an error
      throw new Error(`Failed to fetch products. Status: ${res.status}`);
    }

    return res.json();
  } catch (error: any) {
    // Handle errors here
    console.error("Error fetching products:", error.message);
    throw error; // Re-throw the error to maintain consistency in error handling
  }
};

export default getProducts;
