import { IProduct } from "../entities/product-entity";

export const productos: IProduct[] = [
  {
    title: {
      es: "Nike Air",
      en: "Nike Air",
    },
    description: {
      es: "Zapatillas deportivas Nike Air",
      en: "Nike Air sports shoes",
    },
    price: {
      EUR: 120,
      DOLLAR: 150,
    },
    sku: {
      "11111111": {
        color: "rojo",
        size: 40,
        imageSquare: "01_square_v1-min.jpg",
        stock: 10,
      },
      "22222222": {
        color: "verde",
        size: 42,
        imageSquare: "02_square_v1-min.jpg",
        stock: 6,
      },
      "33333333": {
        color: "beige",
        size: 43,
        imageSquare: "03_square_v1-min.jpg",
        stock: 9,
      },
      "44444444": {
        color: "azul",
        size: 44,
        imageSquare: "04_square_v1-min.jpg",
        stock: 5,
      },
      "55555555": {
        color: "negro",
        size: 45,
        imageSquare: "05_square_v1-min.jpg",
        stock: 2,
      },
    },
    stock: 32,
    featured: true,
    imageLarge: "01_large-min.jpg",
    imageSquare: "01_square_v1-min.jpg",
  },
  {
    title: {
      es: "Nike Air MAX",
      en: "Nike Air MAX",
    },
    description: {
      es: "Zapatillas deportivas Nike Air MAX",
      en: "Nike Air MAX sports shoes",
    },
    price: {
      EUR: 120,
      DOLLAR: 150,
    },
    sku: {
      "23131222": {
        color: "rojo",
        size: 40,
        imageSquare: "06_square-min.jpg",
        stock: 10,
      },
      "41424444": {
        color: "azul",
        size: 42,
        imageSquare: "06_square-min.jpg",
        stock: 5,
      },
    },
    stock: 15,
    featured: true,
    imageLarge: "02_large-min.jpg",
    imageSquare: "06_square-min.jpg",
  },
  {
    title: {
      es: "Adidas Ultraboost",
      en: "Adidas Ultraboost",
    },
    description: {
      es: "Zapatillas deportivas Adidas Ultraboost",
      en: "Adidas Ultraboost sports shoes",
    },
    price: {
      EUR: 140,
      DOLLAR: 170,
    },
    sku: {
      "14545454": {
        color: "negro",
        size: 41,
        imageSquare: "07_square-min.jpg",
        stock: 8,
      },
      "24232323": {
        color: "blanco",
        size: 43,
        imageSquare: "07_square-min.jpg",
        stock: 6,
      },
    },
    stock: 14,
    featured: true,
    imageLarge: "03_large-min.jpg",
    imageSquare: "07_square-min.jpg",
  },
  {
    title: {
      es: "Puma Running",
      en: "Puma Running",
    },
    description: {
      es: "Zapatillas de correr Puma",
      en: "Puma running shoes",
    },
    price: {
      EUR: 90,
      DOLLAR: 110,
    },
    sku: {
      "61676767": {
        color: "verde",
        size: 42,
        imageSquare: "12_square-min.jpg",
        stock: 12,
      },
      "71787878": {
        color: "gris",
        size: 44,
        imageSquare: "12_square-min.jpg",
        stock: 4,
      },
    },
    stock: 16,
    featured: true,
    imageLarge: "04_large-min.jpg",
    imageSquare: "12_square-min.jpg",
  },
  {
    title: {
      es: "Reebok Classic",
      en: "Reebok Classic",
    },
    description: {
      es: "Zapatillas clásicas Reebok",
      en: "Reebok classic shoes",
    },
    price: {
      EUR: 75,
      DOLLAR: 95,
    },
    sku: {
      "12321212": {
        color: "negro",
        size: 40,
        imageSquare: "08_square-min.jpg",
        stock: 7,
      },
      "34443434": {
        color: "blanco",
        size: 41,
        imageSquare: "08_square-min.jpg",
        stock: 10,
      },
    },
    stock: 17,
    featured: true,
    imageLarge: "05_large-min.jpg",
    imageSquare: "08_square-min.jpg",
  },
  {
    title: {
      es: "Converse All Star",
      en: "Converse All Star",
    },
    description: {
      es: "Zapatillas Converse All Star",
      en: "Converse All Star shoes",
    },
    price: {
      EUR: 65,
      DOLLAR: 80,
    },
    sku: {
      "56566656": {
        color: "rojo",
        size: 39,
        imageSquare: "09_square-min.jpg",
        stock: 9,
      },
      "78781878": {
        color: "azul",
        size: 40,
        imageSquare: "09_square-min.jpg",
        stock: 6,
      },
    },
    stock: 15,
    featured: true,
    imageLarge: "02_large-min.jpg",
    imageSquare: "09_square-min.jpg",
  },
  {
    title: {
      es: "Vans Old Skool",
      en: "Vans Old Skool",
    },
    description: {
      es: "Zapatillas Vans Old Skool",
      en: "Vans Old Skool shoes",
    },
    price: {
      EUR: 70,
      DOLLAR: 85,
    },
    sku: {
      "23232393": {
        color: "negro",
        size: 42,
        imageSquare: "05_square-min.jpg",
        stock: 11,
      },
      "65656595": {
        color: "blanco",
        size: 41,
        imageSquare: "05_square-min.jpg",
        stock: 5,
      },
    },
    stock: 16,
    featured: true,
    imageLarge: "05_large-min.jpg",
    imageSquare: "05_square-min.jpg",
  },
  {
    title: {
      es: "New Balance 574",
      en: "New Balance 574",
    },
    description: {
      es: "Zapatillas New Balance 574",
      en: "New Balance 574 shoes",
    },
    price: {
      EUR: 80,
      DOLLAR: 100,
    },
    sku: {
      "89898919": {
        color: "gris",
        size: 43,
        imageSquare: "11_square-min.jpg",
        stock: 10,
      },
      "98989818": {
        color: "azul",
        size: 44,
        imageSquare: "11_square-min.jpg",
        stock: 8,
      },
    },
    stock: 18,
    featured: true,
    imageLarge: "03_large-min.jpg",
    imageSquare: "11_square-min.jpg",
  },
  {
    title: {
      es: "Asics Gel-Kayano",
      en: "Asics Gel-Kayano",
    },
    description: {
      es: "Zapatillas Asics Gel-Kayano",
      en: "Asics Gel-Kayano shoes",
    },
    price: {
      EUR: 130,
      DOLLAR: 160,
    },
    sku: {
      "12121210": {
        color: "blanco",
        size: 42,
        imageSquare: "13_square-min.jpg",
        stock: 7,
      },
      "32323230": {
        color: "negro",
        size: 41,
        imageSquare: "13_square-min.jpg",
        stock: 9,
      },
    },
    stock: 16,
    featured: true,
    imageLarge: "01_large-min.jpg",
    imageSquare: "13_square-min.jpg",
  },
  {
    title: {
      es: "Fila Disruptor",
      en: "Fila Disruptor",
    },
    description: {
      es: "Zapatillas Fila Disruptor",
      en: "Fila Disruptor shoes",
    },
    price: {
      EUR: 85,
      DOLLAR: 105,
    },
    sku: {
      "21898989": {
        color: "blanco",
        size: 39,
        imageSquare: "03_square-min.jpg",
        stock: 12,
      },
      "99121212": {
        color: "negro",
        size: 40,
        imageSquare: "03_square-min.jpg",
        stock: 8,
      },
    },
    stock: 20,
    featured: true,
    imageLarge: "04_large-min.jpg",
    imageSquare: "03_square-min.jpg",
  },
  {
    title: {
      es: "Under Armour HOVR",
      en: "Under Armour HOVR",
    },
    description: {
      es: "Zapatillas Under Armour HOVR",
      en: "Under Armour HOVR shoes",
    },
    price: {
      EUR: 110,
      DOLLAR: 135,
    },
    sku: {
      "98676767": {
        color: "gris",
        size: 43,
        imageSquare: "01_square-min.jpg",
        stock: 7,
      },
      "99545454": {
        color: "azul",
        size: 42,
        imageSquare: "01_square-min.jpg",
        stock: 10,
      },
    },
    stock: 17,
    featured: true,
    imageLarge: "02_large-min.jpg",
    imageSquare: "01_square-min.jpg",
  },
  {
    title: {
      es: "Salomon Speedcross",
      en: "Salomon Speedcross",
    },
    description: {
      es: "Zapatillas de trail Salomon Speedcross",
      en: "Salomon Speedcross trail shoes",
    },
    price: {
      EUR: 120,
      DOLLAR: 150,
    },
    sku: {
      "33121212": {
        color: "azul",
        size: 42,
        imageSquare: "10_square-min.jpg",
        stock: 8,
      },
      "65989898": {
        color: "negro",
        size: 41,
        imageSquare: "10_square-min.jpg",
        stock: 6,
      },
    },
    stock: 14,
    featured: true,
    imageLarge: "05_large-min.jpg",
    imageSquare: "10_square-min.jpg",
  },
  {
    title: {
      es: "Brooks Ghost",
      en: "Brooks Ghost",
    },
    description: {
      es: "Zapatillas Brooks Ghost",
      en: "Brooks Ghost shoes",
    },
    price: {
      EUR: 110,
      DOLLAR: 135,
    },
    sku: {
      "11365656": {
        color: "negro",
        size: 40,
        imageSquare: "15_square-min.jpg",
        stock: 11,
      },
      "12187878": {
        color: "blanco",
        size: 41,
        imageSquare: "15_square-min.jpg",
        stock: 9,
      },
    },
    stock: 20,
    featured: true,
    imageLarge: "03_large-min.jpg",
    imageSquare: "15_square-min.jpg",
  },
  {
    title: {
      es: "Mizuno Wave Rider",
      en: "Mizuno Wave Rider",
    },
    description: {
      es: "Zapatillas Mizuno Wave Rider",
      en: "Mizuno Wave Rider shoes",
    },
    price: {
      EUR: 100,
      DOLLAR: 125,
    },
    sku: {
      "98123232": {
        color: "azul",
        size: 42,
        imageSquare: "01_square-min.jpg",
        stock: 10,
      },
      "98221212": {
        color: "negro",
        size: 43,
        imageSquare: "01_square-min.jpg",
        stock: 8,
      },
    },
    stock: 18,
    featured: true,
    imageLarge: "01_large-min.jpg",
    imageSquare: "01_square-min.jpg",
  },
  {
    title: {
      es: "Saucony Triumph",
      en: "Saucony Triumph",
    },
    description: {
      es: "Zapatillas Saucony Triumph",
      en: "Saucony Triumph shoes",
    },
    price: {
      EUR: 115,
      DOLLAR: 145,
    },
    sku: {
      "48622323": {
        color: "negro",
        size: 41,
        imageSquare: "02_square-min.jpg",
        stock: 9,
      },
      "78143434": {
        color: "azul",
        size: 42,
        imageSquare: "02_square-min.jpg",
        stock: 6,
      },
    },
    stock: 15,
    featured: true,
    imageLarge: "03_large-min.jpg",
    imageSquare: "02_square-min.jpg",
  },
  {
    title: {
      es: "Hoka One One",
      en: "Hoka One One",
    },
    description: {
      es: "Zapatillas Hoka One One",
      en: "Hoka One One shoes",
    },
    price: {
      EUR: 130,
      DOLLAR: 160,
    },
    sku: {
      "78257478": {
        color: "negro",
        size: 40,
        imageSquare: "03_square-min.jpg",
        stock: 8,
      },
      "98987498": {
        color: "blanco",
        size: 41,
        imageSquare: "03_square-min.jpg",
        stock: 7,
      },
    },
    stock: 15,
    featured: true,
    imageLarge: "01_large-min.jpg",
    imageSquare: "03_square-min.jpg",
  },
  {
    title: {
      es: "Merrell Moab",
      en: "Merrell Moab",
    },
    description: {
      es: "Botas de senderismo Merrell Moab",
      en: "Merrell Moab hiking boots",
    },
    price: {
      EUR: 100,
      DOLLAR: 125,
    },
    sku: {
      "12121212": {
        color: "marrón",
        size: 42,
        imageSquare: "04_square-min.jpg",
        stock: 7,
      },
      "89786389": {
        color: "verde",
        size: 43,
        imageSquare: "04_square-min.jpg",
        stock: 10,
      },
    },
    stock: 17,
    featured: true,
    imageLarge: "04_large-min.jpg",
    imageSquare: "04_square-min.jpg",
  },
  {
    title: {
      es: "Timberland Chukka",
      en: "Timberland Chukka",
    },
    description: {
      es: "Botas Timberland Chukka",
      en: "Timberland Chukka boots",
    },
    price: {
      EUR: 150,
      DOLLAR: 180,
    },
    sku: {
      "67671589": {
        color: "marrón",
        size: 41,
        imageSquare: "05_square-min.jpg",
        stock: 5,
      },
      "78784751": {
        color: "negro",
        size: 42,
        imageSquare: "05_square-min.jpg",
        stock: 6,
      },
    },
    stock: 11,
    featured: true,
    imageLarge: "02_large-min.jpg",
    imageSquare: "05_square-min.jpg",
  },
  {
    title: {
      es: "Columbia Redmond",
      en: "Columbia Redmond",
    },
    description: {
      es: "Botas de senderismo Columbia Redmond",
      en: "Columbia Redmond hiking boots",
    },
    price: {
      EUR: 110,
      DOLLAR: 135,
    },
    sku: {
      "29992323": {
        color: "gris",
        size: 44,
        imageSquare: "06_square-min.jpg",
        stock: 6,
      },
      "54541463": {
        color: "marrón",
        size: 43,
        imageSquare: "06_square-min.jpg",
        stock: 8,
      },
    },
    stock: 14,
    featured: true,
    imageLarge: "05_large-min.jpg",
    imageSquare: "06_square-min.jpg",
  },
  {
    title: {
      es: "The North Face Ultra",
      en: "The North Face Ultra",
    },
    description: {
      es: "Zapatillas de trail The North Face Ultra",
      en: "The North Face Ultra trail shoes",
    },
    price: {
      EUR: 125,
      DOLLAR: 155,
    },
    sku: {
      "12124587": {
        color: "negro",
        size: 42,
        imageSquare: "07_square-min.jpg",
        stock: 7,
      },
      "34874634": {
        color: "azul",
        size: 43,
        imageSquare: "07_square-min.jpg",
        stock: 8,
      },
    },
    stock: 15,
    featured: true,
    imageLarge: "03_large-min.jpg",
    imageSquare: "07_square-min.jpg",
  },
  {
    title: {
      es: "Lowa Renegade",
      en: "Lowa Renegade",
    },
    description: {
      es: "Botas de senderismo Lowa Renegade",
      en: "Lowa Renegade hiking boots",
    },
    price: {
      EUR: 160,
      DOLLAR: 200,
    },
    sku: {
      "23239999": {
        color: "marrón",
        size: 42,
        imageSquare: "08_square-min.jpg",
        stock: 6,
      },
      "67688881": {
        color: "gris",
        size: 43,
        imageSquare: "08_square-min.jpg",
        stock: 7,
      },
    },
    stock: 13,
    featured: true,
    imageLarge: "01_large-min.jpg",
    imageSquare: "08_square-min.jpg",
  },
  {
    title: {
      es: "Arc'teryx Norvan",
      en: "Arc'teryx Norvan",
    },
    description: {
      es: "Zapatillas de trail Arc'teryx Norvan",
      en: "Arc'teryx Norvan trail shoes",
    },
    price: {
      EUR: 140,
      DOLLAR: 175,
    },
    sku: {
      "78787777": {
        color: "negro",
        size: 41,
        imageSquare: "09_square-min.jpg",
        stock: 9,
      },
      "98988888": {
        color: "azul",
        size: 42,
        imageSquare: "09_square-min.jpg",
        stock: 5,
      },
    },
    stock: 14,
    featured: true,
    imageLarge: "04_large-min.jpg",
    imageSquare: "09_square-min.jpg",
  },
  {
    title: {
      es: "Keen Targhee",
      en: "Keen Targhee",
    },
    description: {
      es: "Botas de senderismo Keen Targhee",
      en: "Keen Targhee hiking boots",
    },
    price: {
      EUR: 100,
      DOLLAR: 125,
    },
    sku: {
      "12127412": {
        color: "marrón",
        size: 42,
        imageSquare: "10_square-min.jpg",
        stock: 10,
      },
      "45128989": {
        color: "verde",
        size: 43,
        imageSquare: "10_square-min.jpg",
        stock: 7,
      },
    },
    stock: 17,
    featured: true,
    imageLarge: "02_large-min.jpg",
    imageSquare: "10_square-min.jpg",
  },
  {
    title: {
      es: "Under Armour Charged",
      en: "Under Armour Charged",
    },
    description: {
      es: "Zapatillas Under Armour Charged",
      en: "Under Armour Charged shoes",
    },
    price: {
      EUR: 105,
      DOLLAR: 130,
    },
    sku: {
      "12215454": {
        color: "negro",
        size: 41,
        imageSquare: "16_square-min.jpg",
        stock: 8,
      },
      "13316767": {
        color: "blanco",
        size: 42,
        imageSquare: "16_square-min.jpg",
        stock: 7,
      },
    },
    stock: 15,
    featured: true,
    imageLarge: "01_large-min.jpg",
    imageSquare: "16_square-min.jpg",
  },
  {
    title: {
      es: "Nike Pegasus",
      en: "Nike Pegasus",
    },
    description: {
      es: "Zapatillas Nike Pegasus",
      en: "Nike Pegasus shoes",
    },
    price: {
      EUR: 110,
      DOLLAR: 140,
    },
    sku: {
      "14417878": {
        color: "azul",
        size: 42,
        imageSquare: "17_square-min.jpg",
        stock: 9,
      },
      "14419898": {
        color: "negro",
        size: 43,
        imageSquare: "17_square-min.jpg",
        stock: 6,
      },
    },
    stock: 15,
    featured: true,
    imageLarge: "02_large-min.jpg",
    imageSquare: "17_square-min.jpg",
  },
  {
    title: {
      es: "Adidas NMD",
      en: "Adidas NMD",
    },
    description: {
      es: "Zapatillas Adidas NMD",
      en: "Adidas NMD shoes",
    },
    price: {
      EUR: 130,
      DOLLAR: 160,
    },
    sku: {
      "14141212": {
        color: "blanco",
        size: 40,
        imageSquare: "18_square-min.jpg",
        stock: 8,
      },
      "22223434": {
        color: "negro",
        size: 41,
        imageSquare: "18_square-min.jpg",
        stock: 7,
      },
    },
    stock: 15,
    featured: true,
    imageLarge: "03_large-min.jpg",
    imageSquare: "18_square-min.jpg",
  },
  {
    title: {
      es: "Puma Suede",
      en: "Puma Suede",
    },
    description: {
      es: "Zapatillas Puma Suede",
      en: "Puma Suede shoes",
    },
    price: {
      EUR: 75,
      DOLLAR: 95,
    },
    sku: {
      "15685499": {
        color: "rojo",
        size: 39,
        imageSquare: "19_square-min.jpg",
        stock: 10,
      },
      "67677410": {
        color: "negro",
        size: 40,
        imageSquare: "19_square-min.jpg",
        stock: 5,
      },
    },
    stock: 15,
    featured: true,
    imageLarge: "04_large-min.jpg",
    imageSquare: "19_square-min.jpg",
  },
  {
    title: {
      es: "New Balance 990",
      en: "New Balance 990",
    },
    description: {
      es: "Zapatillas New Balance 990",
      en: "New Balance 990 shoes",
    },
    price: {
      EUR: 150,
      DOLLAR: 180,
    },
    sku: {
      "00098989": {
        color: "gris",
        size: 42,
        imageSquare: "20_square-min.jpg",
        stock: 7,
      },
      "00089898": {
        color: "azul",
        size: 43,
        imageSquare: "20_square-min.jpg",
        stock: 8,
      },
    },
    stock: 15,
    featured: true,
    imageLarge: "05_large-min.jpg",
    imageSquare: "20_square-min.jpg",
  },
  {
    title: {
      es: "Reebok Nano",
      en: "Reebok Nano",
    },
    description: {
      es: "Zapatillas Reebok Nano",
      en: "Reebok Nano shoes",
    },
    price: {
      EUR: 115,
      DOLLAR: 145,
    },
    sku: {
      "10101202": {
        color: "negro",
        size: 40,
        imageSquare: "14_square-min.jpg",
        stock: 6,
      },
      "04040434": {
        color: "blanco",
        size: 41,
        imageSquare: "14_square-min.jpg",
        stock: 8,
      },
    },
    stock: 14,
    featured: true,
    imageLarge: "06_large-min.jpg",
    imageSquare: "14_square-min.jpg",
  },
  {
    title: {
      es: "Asics Gel-Nimbus",
      en: "Asics Gel-Nimbus",
    },
    description: {
      es: "Zapatillas Asics Gel-Nimbus",
      en: "Asics Gel-Nimbus shoes",
    },
    price: {
      EUR: 140,
      DOLLAR: 170,
    },
    sku: {
      "54545400": {
        color: "negro",
        size: 41,
        imageSquare: "15_square-min.jpg",
        stock: 8,
      },
      "67676000": {
        color: "blanco",
        size: 42,
        imageSquare: "15_square-min.jpg",
        stock: 7,
      },
    },
    stock: 15,
    featured: true,
    imageLarge: "07_large-min.jpg",
    imageSquare: "15_square-min.jpg",
  },
  {
    title: {
      es: "Mizuno Wave Inspire",
      en: "Mizuno Wave Inspire",
    },
    description: {
      es: "Zapatillas Mizuno Wave Inspire",
      en: "Mizuno Wave Inspire shoes",
    },
    price: {
      EUR: 110,
      DOLLAR: 135,
    },
    sku: {
      "78787001": {
        color: "azul",
        size: 41,
        imageSquare: "16_square-min.jpg",
        stock: 9,
      },
      "98989002": {
        color: "negro",
        size: 42,
        imageSquare: "16_square-min.jpg",
        stock: 6,
      },
    },
    stock: 15,
    featured: true,
    imageLarge: "08_large-min.jpg",
    imageSquare: "16_square-min.jpg",
  },
  {
    title: {
      es: "Saucony Kinvara",
      en: "Saucony Kinvara",
    },
    description: {
      es: "Zapatillas Saucony Kinvara",
      en: "Saucony Kinvara shoes",
    },
    price: {
      EUR: 100,
      DOLLAR: 125,
    },
    sku: {
      "12121003": {
        color: "negro",
        size: 40,
        imageSquare: "17_square-min.jpg",
        stock: 7,
      },
      "34343004": {
        color: "blanco",
        size: 41,
        imageSquare: "17_square-min.jpg",
        stock: 9,
      },
    },
    stock: 16,
    featured: true,
    imageLarge: "09_large-min.jpg",
    imageSquare: "17_square-min.jpg",
  },
  {
    title: {
      es: "Fila Ray Tracer",
      en: "Fila Ray Tracer",
    },
    description: {
      es: "Zapatillas Fila Ray Tracer",
      en: "Fila Ray Tracer shoes",
    },
    price: {
      EUR: 95,
      DOLLAR: 120,
    },
    sku: {
      "54545005": {
        color: "blanco",
        size: 40,
        imageSquare: "18_square-min.jpg",
        stock: 8,
      },
      "67676006": {
        color: "negro",
        size: 41,
        imageSquare: "18_square-min.jpg",
        stock: 6,
      },
    },
    stock: 14,
    featured: true,
    imageLarge: "10_large-min.jpg",
    imageSquare: "18_square-min.jpg",
  },
  {
    title: {
      es: "Brooks Adrenaline",
      en: "Brooks Adrenaline",
    },
    description: {
      es: "Zapatillas Brooks Adrenaline",
      en: "Brooks Adrenaline shoes",
    },
    price: {
      EUR: 120,
      DOLLAR: 150,
    },
    sku: {
      "78780077": {
        color: "negro",
        size: 42,
        imageSquare: "19_square-min.jpg",
        stock: 9,
      },
      "98980117": {
        color: "blanco",
        size: 43,
        imageSquare: "19_square-min.jpg",
        stock: 7,
      },
    },
    stock: 16,
    featured: true,
    imageLarge: "11_large-min.jpg",
    imageSquare: "19_square-min.jpg",
  },
  {
    title: {
      es: "On Cloud",
      en: "On Cloud",
    },
    description: {
      es: "Zapatillas On Cloud",
      en: "On Cloud shoes",
    },
    price: {
      EUR: 120,
      DOLLAR: 150,
    },
    sku: {
      "12121118": {
        color: "negro",
        size: 41,
        imageSquare: "16_square-min.jpg",
        stock: 8,
      },
      "34343119": {
        color: "blanco",
        size: 42,
        imageSquare: "16_square-min.jpg",
        stock: 6,
      },
    },
    stock: 14,
    featured: true,
    imageLarge: "06_large-min.jpg",
    imageSquare: "16_square-min.jpg",
  },
  {
    title: {
      es: "Altra Lone Peak",
      en: "Altra Lone Peak",
    },
    description: {
      es: "Zapatillas de trail Altra Lone Peak",
      en: "Altra Lone Peak trail shoes",
    },
    price: {
      EUR: 130,
      DOLLAR: 160,
    },
    sku: {
      "56565120": {
        color: "negro",
        size: 41,
        imageSquare: "17_square-min.jpg",
        stock: 10,
      },
      "67676121": {
        color: "gris",
        size: 42,
        imageSquare: "17_square-min.jpg",
        stock: 7,
      },
    },
    stock: 17,
    featured: true,
    imageLarge: "07_large-min.jpg",
    imageSquare: "17_square-min.jpg",
  },
  {
    title: {
      es: "New Balance Fresh Foam",
      en: "New Balance Fresh Foam",
    },
    description: {
      es: "Zapatillas New Balance Fresh Foam",
      en: "New Balance Fresh Foam shoes",
    },
    price: {
      EUR: 100,
      DOLLAR: 125,
    },
    sku: {
      "23232122": {
        color: "azul",
        size: 43,
        imageSquare: "18_square-min.jpg",
        stock: 9,
      },
      "89898123": {
        color: "rojo",
        size: 44,
        imageSquare: "18_square-min.jpg",
        stock: 8,
      },
    },
    stock: 17,
    featured: true,
    imageLarge: "08_large-min.jpg",
    imageSquare: "18_square-min.jpg",
  },
  {
    title: {
      es: "La Sportiva Bushido",
      en: "La Sportiva Bushido",
    },
    description: {
      es: "Zapatillas de trail La Sportiva Bushido",
      en: "La Sportiva Bushido trail shoes",
    },
    price: {
      EUR: 140,
      DOLLAR: 170,
    },
    sku: {
      "34343124": {
        color: "negro",
        size: 41,
        imageSquare: "19_square-min.jpg",
        stock: 7,
      },
      "78787125": {
        color: "amarillo",
        size: 42,
        imageSquare: "19_square-min.jpg",
        stock: 6,
      },
    },
    stock: 13,
    featured: true,
    imageLarge: "09_large-min.jpg",
    imageSquare: "19_square-min.jpg",
  },
  {
    title: {
      es: "Topo Athletic MTN Racer",
      en: "Topo Athletic MTN Racer",
    },
    description: {
      es: "Zapatillas de trail Topo Athletic MTN Racer",
      en: "Topo Athletic MTN Racer trail shoes",
    },
    price: {
      EUR: 130,
      DOLLAR: 160,
    },
    sku: {
      "12121126": {
        color: "azul",
        size: 42,
        imageSquare: "20_square-min.jpg",
        stock: 10,
      },
      "98989127": {
        color: "rojo",
        size: 43,
        imageSquare: "20_square-min.jpg",
        stock: 7,
      },
    },
    stock: 17,
    featured: true,
    imageLarge: "10_large-min.jpg",
    imageSquare: "20_square-min.jpg",
  },
  {
    title: {
      es: "Scarpa Spin Ultra",
      en: "Scarpa Spin Ultra",
    },
    description: {
      es: "Zapatillas de trail Scarpa Spin Ultra",
      en: "Scarpa Spin Ultra trail shoes",
    },
    price: {
      EUR: 135,
      DOLLAR: 165,
    },
    sku: {
      "67676128": {
        color: "negro",
        size: 41,
        imageSquare: "11_square-min.jpg",
        stock: 8,
      },
      "89898129": {
        color: "verde",
        size: 42,
        imageSquare: "11_square-min.jpg",
        stock: 6,
      },
    },
    stock: 14,
    featured: true,
    imageLarge: "11_large-min.jpg",
    imageSquare: "11_square-min.jpg",
  },
  {
    title: {
      es: "Dynafit Alpine Pro",
      en: "Dynafit Alpine Pro",
    },
    description: {
      es: "Zapatillas de trail Dynafit Alpine Pro",
      en: "Dynafit Alpine Pro trail shoes",
    },
    price: {
      EUR: 125,
      DOLLAR: 155,
    },
    sku: {
      "34343130": {
        color: "negro",
        size: 40,
        imageSquare: "12_square-min.jpg",
        stock: 9,
      },
      "78787131": {
        color: "naranja",
        size: 41,
        imageSquare: "12_square-min.jpg",
        stock: 7,
      },
    },
    stock: 16,
    featured: true,
    imageLarge: "12_large-min.jpg",
    imageSquare: "12_square-min.jpg",
  },
  {
    title: {
      es: "Nike Zoom Pegasus",
      en: "Nike Zoom Pegasus",
    },
    description: {
      es: "Zapatillas Nike Zoom Pegasus",
      en: "Nike Zoom Pegasus shoes",
    },
    price: {
      EUR: 115,
      DOLLAR: 145,
    },
    sku: {
      "12121133": {
        color: "azul",
        size: 42,
        imageSquare: "13_square-min.jpg",
        stock: 6,
      },
      "98989132": {
        color: "negro",
        size: 41,
        imageSquare: "13_square-min.jpg",
        stock: 8,
      },
    },
    stock: 14,
    featured: true,
    imageLarge: "13_large-min.jpg",
    imageSquare: "13_square-min.jpg",
  },
  {
    title: {
      es: "Hoka Speedgoat",
      en: "Hoka Speedgoat",
    },
    description: {
      es: "Zapatillas de trail Hoka Speedgoat",
      en: "Hoka Speedgoat trail shoes",
    },
    price: {
      EUR: 150,
      DOLLAR: 180,
    },
    sku: {
      "23232134": {
        color: "gris",
        size: 41,
        imageSquare: "14_square-min.jpg",
        stock: 10,
      },
      "54545135": {
        color: "verde",
        size: 42,
        imageSquare: "14_square-min.jpg",
        stock: 7,
      },
    },
    stock: 17,
    featured: true,
    imageLarge: "14_large-min.jpg",
    imageSquare: "14_square-min.jpg",
  },
  {
    title: {
      es: "Salewa Ultra Train",
      en: "Salewa Ultra Train",
    },
    description: {
      es: "Zapatillas de trail Salewa Ultra Train",
      en: "Salewa Ultra Train trail shoes",
    },
    price: {
      EUR: 135,
      DOLLAR: 165,
    },
    sku: {
      "78787137": {
        color: "azul",
        size: 41,
        imageSquare: "15_square-min.jpg",
        stock: 9,
      },
      "89898138": {
        color: "amarillo",
        size: 42,
        imageSquare: "15_square-min.jpg",
        stock: 8,
      },
    },
    stock: 17,
    featured: true,
    imageLarge: "15_large-min.jpg",
    imageSquare: "15_square-min.jpg",
  },
  {
    title: {
      es: "Adidas Terrex",
      en: "Adidas Terrex",
    },
    description: {
      es: "Zapatillas de trail running Adidas Terrex",
      en: "Adidas Terrex trail running shoes",
    },
    price: {
      EUR: 115,
      DOLLAR: 140,
    },
    sku: {
      "45454139": {
        color: "negro",
        size: 42,
        imageSquare: "16_square-min.jpg",
        stock: 9,
      },
      "56565140": {
        color: "verde",
        size: 43,
        imageSquare: "16_square-min.jpg",
        stock: 8,
      },
    },
    stock: 17,
    featured: true,
    imageLarge: "16_large-min.jpg",
    imageSquare: "16_square-min.jpg",
  },
  {
    title: {
      es: "Nike Free RN",
      en: "Nike Free RN",
    },
    description: {
      es: "Zapatillas minimalistas Nike Free RN",
      en: "Nike Free RN minimalist shoes",
    },
    price: {
      EUR: 95,
      DOLLAR: 120,
    },
    sku: {
      "21212142": {
        color: "rosa",
        size: 41,
        imageSquare: "17_square-min.jpg",
        stock: 7,
      },
      "87878141": {
        color: "blanco",
        size: 40,
        imageSquare: "17_square-min.jpg",
        stock: 10,
      },
    },
    stock: 17,
    featured: true,
    imageLarge: "17_large-min.jpg",
    imageSquare: "17_square-min.jpg",
  },
  {
    title: {
      es: "Under Armour Curry",
      en: "Under Armour Curry",
    },
    description: {
      es: "Zapatillas de baloncesto Under Armour Curry",
      en: "Under Armour Curry basketball shoes",
    },
    price: {
      EUR: 140,
      DOLLAR: 170,
    },
    sku: {
      "10101144": {
        color: "negro",
        size: 44,
        imageSquare: "18_square-min.jpg",
        stock: 8,
      },
      "99999143": {
        color: "azul",
        size: 43,
        imageSquare: "18_square-min.jpg",
        stock: 6,
      },
    },
    stock: 14,
    featured: true,
    imageLarge: "18_large-min.jpg",
    imageSquare: "18_square-min.jpg",
  },
  {
    title: {
      es: "Puma RS-X",
      en: "Puma RS-X",
    },
    description: {
      es: "Zapatillas deportivas Puma RS-X",
      en: "Puma RS-X sports shoes",
    },
    price: {
      EUR: 105,
      DOLLAR: 130,
    },
    sku: {
      "13131145": {
        color: "blanco",
        size: 39,
        imageSquare: "19_square-min.jpg",
        stock: 12,
      },
      "14141146": {
        color: "morado",
        size: 40,
        imageSquare: "19_square-min.jpg",
        stock: 9,
      },
    },
    stock: 21,
    featured: true,
    imageLarge: "19_large-min.jpg",
    imageSquare: "19_square-min.jpg",
  },
  {
    title: {
      es: "New Balance 880",
      en: "New Balance 880",
    },
    description: {
      es: "Zapatillas de running New Balance 880",
      en: "New Balance 880 running shoes",
    },
    price: {
      EUR: 120,
      DOLLAR: 150,
    },
    sku: {
      "15151147": {
        color: "gris",
        size: 42,
        imageSquare: "20_square-min.jpg",
        stock: 10,
      },
      "16161148": {
        color: "negro",
        size: 43,
        imageSquare: "20_square-min.jpg",
        stock: 5,
      },
    },
    stock: 15,
    featured: true,
    imageLarge: "20_large-min.jpg",
    imageSquare: "20_square-min.jpg",
  },
  {
    title: {
      es: "Skechers Go Run",
      en: "Skechers Go Run",
    },
    description: {
      es: "Zapatillas de running Skechers Go Run",
      en: "Skechers Go Run running shoes",
    },
    price: {
      EUR: 85,
      DOLLAR: 105,
    },
    sku: {
      "17171150": {
        color: "negro",
        size: 41,
        imageSquare: "11_square-min.jpg",
        stock: 11,
      },
      "18181151": {
        color: "rosa",
        size: 42,
        imageSquare: "11_square-min.jpg",
        stock: 9,
      },
    },
    stock: 20,
    featured: true,
    imageLarge: "01_large-min.jpg",
    imageSquare: "11_square-min.jpg",
  },
  {
    title: {
      es: "Hoka Clifton",
      en: "Hoka Clifton",
    },
    description: {
      es: "Zapatillas de running Hoka Clifton",
      en: "Hoka Clifton running shoes",
    },
    price: {
      EUR: 125,
      DOLLAR: 155,
    },
    sku: {
      "19191152": {
        color: "azul",
        size: 43,
        imageSquare: "12_square-min.jpg",
        stock: 8,
      },
      "20202153": {
        color: "blanco",
        size: 44,
        imageSquare: "12_square-min.jpg",
        stock: 6,
      },
    },
    stock: 14,
    featured: true,
    imageLarge: "02_large-min.jpg",
    imageSquare: "12_square-min.jpg",
  },
  {
    title: {
      es: "Brooks Glycerin",
      en: "Brooks Glycerin",
    },
    description: {
      es: "Zapatillas de running Brooks Glycerin",
      en: "Brooks Glycerin running shoes",
    },
    price: {
      EUR: 135,
      DOLLAR: 165,
    },
    sku: {
      "21212154": {
        color: "negro",
        size: 40,
        imageSquare: "13_square-min.jpg",
        stock: 7,
      },
      "22222155": {
        color: "gris",
        size: 41,
        imageSquare: "13_square-min.jpg",
        stock: 10,
      },
    },
    stock: 17,
    featured: true,
    imageLarge: "03_large-min.jpg",
    imageSquare: "13_square-min.jpg",
  },
  {
    title: {
      es: "Saucony Endorphin",
      en: "Saucony Endorphin",
    },
    description: {
      es: "Zapatillas de running Saucony Endorphin",
      en: "Saucony Endorphin running shoes",
    },
    price: {
      EUR: 110,
      DOLLAR: 135,
    },
    sku: {
      "23232156": {
        color: "blanco",
        size: 42,
        imageSquare: "14_square-min.jpg",
        stock: 9,
      },
      "24242157": {
        color: "naranja",
        size: 43,
        imageSquare: "14_square-min.jpg",
        stock: 8,
      },
    },
    stock: 17,
    featured: true,
    imageLarge: "04_large-min.jpg",
    imageSquare: "14_square-min.jpg",
  },
  {
    title: {
      es: "Altra Torin",
      en: "Altra Torin",
    },
    description: {
      es: "Zapatillas de running Altra Torin",
      en: "Altra Torin running shoes",
    },
    price: {
      EUR: 105,
      DOLLAR: 130,
    },
    sku: {
      "25252158": {
        color: "azul",
        size: 39,
        imageSquare: "15_square-min.jpg",
        stock: 12,
      },
      "26262159": {
        color: "negro",
        size: 40,
        imageSquare: "15_square-min.jpg",
        stock: 5,
      },
    },
    stock: 17,
    featured: true,
    imageLarge: "05_large-min.jpg",
    imageSquare: "15_square-min.jpg",
  },
  {
    title: {
      es: "Topo Athletic Phantom",
      en: "Topo Athletic Phantom",
    },
    description: {
      es: "Zapatillas de running Topo Athletic Phantom",
      en: "Topo Athletic Phantom running shoes",
    },
    price: {
      EUR: 120,
      DOLLAR: 150,
    },
    sku: {
      "27272160": {
        color: "gris",
        size: 41,
        imageSquare: "16_square-min.jpg",
        stock: 8,
      },
      "28282161": {
        color: "rojo",
        size: 42,
        imageSquare: "16_square-min.jpg",
        stock: 7,
      },
    },
    stock: 15,
    featured: true,
    imageLarge: "01_large-min.jpg",
    imageSquare: "16_square-min.jpg",
  },
  {
    title: {
      es: "On Running Cloudflow",
      en: "On Running Cloudflow",
    },
    description: {
      es: "Zapatillas de running On Running Cloudflow",
      en: "On Running Cloudflow running shoes",
    },
    price: {
      EUR: 135,
      DOLLAR: 165,
    },
    sku: {
      "29292163": {
        color: "blanco",
        size: 43,
        imageSquare: "17_square-min.jpg",
        stock: 6,
      },
      "30303111": {
        color: "negro",
        size: 44,
        imageSquare: "17_square-min.jpg",
        stock: 9,
      },
    },
    stock: 15,
    featured: true,
    imageLarge: "02_large-min.jpg",
    imageSquare: "17_square-min.jpg",
  },
  {
    title: {
      es: "Salomon Sense Ride",
      en: "Salomon Sense Ride",
    },
    description: {
      es: "Zapatillas de trail running Salomon Sense Ride",
      en: "Salomon Sense Ride trail running shoes",
    },
    price: {
      EUR: 115,
      DOLLAR: 140,
    },
    sku: {
      "31313164": {
        color: "verde",
        size: 40,
        imageSquare: "18_square-min.jpg",
        stock: 10,
      },
      "32323165": {
        color: "azul",
        size: 41,
        imageSquare: "18_square-min.jpg",
        stock: 7,
      },
    },
    stock: 17,
    featured: true,
    imageLarge: "03_large-min.jpg",
    imageSquare: "18_square-min.jpg",
  },
  {
    title: {
      es: "Munich CLIK",
      en: "Munich CLIK",
    },
    description: {
      es: "Zapatillas de moda Munich CLIK",
      en: "Munich CLIK moda shoes",
    },
    price: {
      EUR: 110,
      DOLLAR: 115,
    },
    sku: {
      "31313166": {
        color: "verde",
        size: 37,
        imageSquare: "18_square-min.jpg",
        stock: 10,
      },
      "32323167": {
        color: "azul",
        size: 38,
        imageSquare: "18_square-min.jpg",
        stock: 8,
      },
    },
    stock: 18,
    featured: true,
    imageLarge: "03_large-min.jpg",
    imageSquare: "18_square-min.jpg",
  },
  {
    title: {
      es: "Nike React",
      en: "Nike React",
    },
    description: {
      es: "Zapatillas Nike React",
      en: "Nike React shoes",
    },
    price: {
      EUR: 130,
      DOLLAR: 160,
    },
    sku: {
      "43434168": {
        color: "negro",
        size: 39,
        imageSquare: "19_square-min.jpg",
        stock: 9,
      },
      "45454169": {
        color: "blanco",
        size: 40,
        imageSquare: "19_square-min.jpg",
        stock: 7,
      },
    },
    stock: 16,
    featured: true,
    imageLarge: "04_large-min.jpg",
    imageSquare: "19_square-min.jpg",
  },
  {
    title: {
      es: "Adidas Stan Smith",
      en: "Adidas Stan Smith",
    },
    description: {
      es: "Zapatillas Adidas Stan Smith",
      en: "Adidas Stan Smith shoes",
    },
    price: {
      EUR: 100,
      DOLLAR: 120,
    },
    sku: {
      "56565170": {
        color: "blanco",
        size: 41,
        imageSquare: "20_square-min.jpg",
        stock: 8,
      },
      "67676171": {
        color: "verde",
        size: 42,
        imageSquare: "20_square-min.jpg",
        stock: 6,
      },
    },
    stock: 14,
    featured: true,
    imageLarge: "05_large-min.jpg",
    imageSquare: "20_square-min.jpg",
  },
];
