export interface SaleItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  buttonText: string;
  link: string;
}

export const saleItems: SaleItem[] = [
  {
    id: 1,
    title: "YEAR END SALE",
    subtitle: "Up To 50% OFF On Selected Muscle Cars",
    image: "/images/sale/sale-1.jpg",
    buttonText: "Shop Now",
    link: "/products",
  },
  {
    id: 2,
    title: "NEW ARRIVALS",
    subtitle: "Discover Our Latest Performance Collection",
    image: "/images/sale/sale-2.jpg",
    buttonText: "Explore",
    link: "/products",
  },
];
