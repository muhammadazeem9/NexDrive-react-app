import type { Product } from "../../../data/Products";

type FilterOptions = {
  search: string;
  category: string[];
  brand: string[];
  price: number[];
  rating: number | null;
  sort: string;
};

export const filterProducts = (products: Product[], filters: FilterOptions) => {
  const { search, category, brand, price, rating, sort } = filters;

  const filteredProducts = products.filter((product) => {
    const searchMatch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch =
      category.length === 0 || category.includes(product.category);

    const brandMatch = brand.length === 0 || brand.includes(product.brand);

    const priceMatch =
      price.length === 0 ||
      (product.price >= price[0] && product.price <= price[1]);

    const ratingMatch = rating === null || product.rating >= rating;

    return (
      searchMatch && categoryMatch && brandMatch && priceMatch && ratingMatch
    );
  });

  // Sorting
  return filteredProducts.sort((a, b) => {
    switch (sort) {
      case "price-low":
        return a.price - b.price;

      case "price-high":
        return b.price - a.price;

      case "rating":
        return b.rating - a.rating;

      case "newest":
      default:
        return b.id - a.id;
    }
  });
};
