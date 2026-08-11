export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  rating: number;
  category: string;
  brand: string;
}

export const Products: Product[] = [
  {
    id: 1,
    title: "Ford Mustang GT",
    image: "/images/products/mustang.jpg",
    price: 45000,
    rating: 5,
    brand: "Ford",
    category: "Sports Car",
  },
  {
    id: 2,
    title: "Dodge Challenger",
    image: "/images/products/challenger.jpg",
    price: 52000,
    rating: 4,
    brand: "Dodge",
    category: "Muscle Car",
  },
  {
    id: 3,
    title: "Chevrolet Camaro",
    image: "/images/products/camaro.jpg",
    price: 61000,
    rating: 5,
    brand: "Chevrolet",
    category: "Sports Car",
  },
  {
    id: 4,
    title: "Dodge Charger",
    image: "/images/products/charger.jpg",
    price: 75000,
    rating: 5,
    brand: "Dodge",
    category: "Sedan",
  },
  {
    id: 5,
    title: "Chevrolet Camaro",
    image: "/images/products/camaro.jpg",
    price: 61000,
    rating: 5,
    brand: "Chevrolet",
    category: "Sports Car",
  },
  {
    id: 6,
    title: "Dodge Charger",
    image: "/images/products/charger.jpg",
    price: 75000,
    rating: 5,
    brand: "Dodge",
    category: "Sedan",
  },
  {
    id: 7,
    title: "Ford Mustang GT",
    image: "/images/products/mustang.jpg",
    price: 45000,
    rating: 5,
    brand: "Ford",
    category: "Sports Car",
  },
  {
    id: 8,
    title: "Dodge Challenger",
    image: "/images/products/challenger.jpg",
    price: 52000,
    rating: 4,
    brand: "Dodge",
    category: "Muscle Car",
  },
];
