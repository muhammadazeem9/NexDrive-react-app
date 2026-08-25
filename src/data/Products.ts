export interface Product {
  id: number;
  title: string;
  image: string;
  images?: string[];
  price: number;
  rating: number;
  category: string;
  brand: string;
}

const carImage = (brand: string, model: string) =>
  `https://carapi.trustcar.info/getImage?make=${encodeURIComponent(
    brand,
  )}&model=${encodeURIComponent(model)}`;

export const Products: Product[] = [
  {
    id: 1,
    title: "Ford Mustang GT",
    image: carImage("Ford", "Mustang"),
    images: [carImage("Ford", "Mustang"), carImage("Ford", "Mustang")],
    price: 45000,
    rating: 5,
    brand: "Ford",
    category: "Sports Car",
  },

  {
    id: 2,
    title: "Dodge Challenger",
    image: carImage("Dodge", "Challenger"),
    images: [carImage("Dodge", "Challenger")],
    price: 52000,
    rating: 4,
    brand: "Dodge",
    category: "Muscle Car",
  },

  {
    id: 3,
    title: "Chevrolet Camaro",
    image: carImage("Chevrolet", "Camaro"),
    images: [carImage("Chevrolet", "Camaro")],
    price: 61000,
    rating: 5,
    brand: "Chevrolet",
    category: "Sports Car",
  },

  {
    id: 4,
    title: "Dodge Charger",
    image: carImage("Dodge", "Charger"),
    images: [carImage("Dodge", "Charger")],
    price: 75000,
    rating: 5,
    brand: "Dodge",
    category: "Sedan",
  },

  {
    id: 5,
    title: "BMW M4",
    image: carImage("BMW", "M4"),
    images: [carImage("BMW", "M4")],
    price: 89500,
    rating: 5,
    brand: "BMW",
    category: "Sports Car",
  },

  {
    id: 6,
    title: "Porsche 911",
    image: carImage("Porsche", "911"),
    images: [carImage("Porsche", "911")],
    price: 128000,
    rating: 5,
    brand: "Porsche",
    category: "Sports Car",
  },

  {
    id: 7,
    title: "Mercedes-Benz C-Class",
    image: carImage("Mercedes-Benz", "C-Class"),
    images: [carImage("Mercedes-Benz", "C-Class")],
    price: 58500,
    rating: 5,
    brand: "Mercedes-Benz",
    category: "Sedan",
  },

  {
    id: 8,
    title: "Audi R8",
    image: carImage("Audi", "R8"),
    images: [carImage("Audi", "R8")],
    price: 165000,
    rating: 5,
    brand: "Audi",
    category: "Supercar",
  },
  {
    id: 9,
    title: "Toyota GR Supra",
    image: carImage("Toyota", "GR Supra"),
    images: [carImage("Toyota", "GR Supra")],
    price: 58000,
    rating: 5,
    brand: "Toyota",
    category: "Sports Car",
  },

  {
    id: 10,
    title: "Nissan GT-R",
    image: carImage("Nissan", "GT-R"),
    images: [carImage("Nissan", "GT-R")],
    price: 121000,
    rating: 5,
    brand: "Nissan",
    category: "Sports Car",
  },

  {
    id: 11,
    title: "Lamborghini Huracan",
    image: carImage("Lamborghini", "Huracan"),
    images: [carImage("Lamborghini", "Huracan")],
    price: 249000,
    rating: 5,
    brand: "Lamborghini",
    category: "Supercar",
  },

  {
    id: 12,
    title: "Ferrari 488",
    image: carImage("Ferrari", "488"),
    images: [carImage("Ferrari", "488")],
    price: 330000,
    rating: 5,
    brand: "Ferrari",
    category: "Supercar",
  },

  {
    id: 13,
    title: "McLaren 720S",
    image: carImage("McLaren", "720S"),
    images: [carImage("McLaren", "720S")],
    price: 310000,
    rating: 5,
    brand: "McLaren",
    category: "Supercar",
  },

  {
    id: 14,
    title: "Tesla Model S",
    image: carImage("Tesla", "Model S"),
    images: [carImage("Tesla", "Model S")],
    price: 89990,
    rating: 4,
    brand: "Tesla",
    category: "Electric Car",
  },
  {
    id: 15,
    title: "Audi Q7",
    image: carImage("Audi", "Q7"),
    images: [carImage("Audi", "Q7")],
    price: 62000,
    rating: 5,
    brand: "Audi",
    category: "SUV",
  },
  {
    id: 16,
    title: "BMW M5",
    image: carImage("BMW", "M5"),
    images: [carImage("BMW", "M5")],
    price: 120000,
    rating: 5,
    brand: "BMW",
    category: "Sedan",
  },

  {
    id: 17,
    title: "Audi RS7",
    image: carImage("Audi", "RS7"),
    images: [carImage("Audi", "RS7")],
    price: 130000,
    rating: 5,
    brand: "Audi",
    category: "Sports Sedan",
  },

  {
    id: 18,
    title: "Mercedes-AMG GT",
    image: carImage("Mercedes-Benz", "AMG GT"),
    images: [carImage("Mercedes-Benz", "AMG GT")],
    price: 136000,
    rating: 5,
    brand: "Mercedes-Benz",
    category: "Sports Car",
  },

  {
    id: 19,
    title: "Chevrolet Corvette C8",
    image: carImage("Chevrolet", "Corvette"),
    images: [carImage("Chevrolet", "Corvette")],
    price: 70000,
    rating: 5,
    brand: "Chevrolet",
    category: "Sports Car",
  },
  {
    id: 20,
    title: "Ford Explorer",
    image: carImage("Ford", "Explorer"),
    images: [carImage("Ford", "Explorer")],
    price: 38000,
    rating: 4,
    brand: "Ford",
    category: "SUV",
  },
  {
    id: 21,
    title: "Range Rover Sport",
    image: carImage("Land Rover", "Range Rover Sport"),
    images: [carImage("Land Rover", "Range Rover Sport")],
    price: 95000,
    rating: 5,
    brand: "Land Rover",
    category: "SUV",
  },

  {
    id: 22,
    title: "Porsche Cayenne",
    image: carImage("Porsche", "Cayenne"),
    images: [carImage("Porsche", "Cayenne")],
    price: 85000,
    rating: 5,
    brand: "Porsche",
    category: "SUV",
  },

  {
    id: 23,
    title: "Jeep Wrangler",
    image: carImage("Jeep", "Wrangler"),
    images: [carImage("Jeep", "Wrangler")],
    price: 42000,
    rating: 4,
    brand: "Jeep",
    category: "SUV",
  },

  {
    id: 24,
    title: "Toyota Land Cruiser",
    image: carImage("Toyota", "Land Cruiser"),
    images: [carImage("Toyota", "Land Cruiser")],
    price: 87000,
    rating: 5,
    brand: "Toyota",
    category: "SUV",
  },
];
