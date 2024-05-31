const products = [
  {
    id: "1",
    title: "MESA - H40",
    price: 125000,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    image: "./foto5.jpg",
    stock: 12,
    category: "mesas",
  },
  {
    id: "2",
    title: "MESA - 3P",
    price: 163000,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. ",
    image:
      "./foto3.jpg",
    stock: 12,
    category: "mesas",
  },
  {
    id: "3",
    title: "MESA - OVAL HH",
    price: 182000,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. ",
    image: "./foto2.jpg",
    stock: 12,
    category: "mesas",
  },
  {
    id: "4",
    title: "MESA - DUALBOX",
    price: 205000,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    image: "./foto4.jpg",
    stock: 12,
    category: "mesas",
  },
  {
    id: "5",
    title:
      "REVESTIMIENTO - T10x10 ",
    price: 25000,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    image: "./muestras-terrazzo.webp",
    stock: 10,
    category: "revestimiento",
  },
  {
    id: "6",
    title:
      "REVESTIMIENTO - T10X20",
    price: 22000,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    image: "./revest1020.jpg",
    stock: 10,
    category: "revestimiento",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((product) => product.id === id));
    }, 500);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((product) => product.category === category));
    }, 500);
  });
};
