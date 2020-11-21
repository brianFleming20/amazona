import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Brian",
      email: "admin@example.com",
      password: bcrypt.hashAsync (`1234`, 8),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashAsync (`5678`, 8),
      isAdmin: false,
    },

  ],
  products: [
    {
      _id: '1',
      name: 'consectetur adipiscing elit',
      category: 'Shirts',
      image: 'https://picsum.photos/200/300.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      _id: '2',
      name: 'Adidas Fit Shirt',
      category: 'Shirts',
      image: 'https://picsum.photos/200/300/?blur.jpg',
      price: 100,
      countInStock: 20,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      _id: '3',
      name: 'Lacoste Free Shirt',
      category: 'Shirts',
      image: 'https://picsum.photos/200/300.jpg',
      price: 220,
      countInStock: 0,
      brand: 'Lacoste',
      rating: 4.8,
      numReviews: 17,
      description: 'high quality product',
    },
    {
      _id: '4',
      name: 'Nike Slim Pant',
      category: 'Pants',
      image: 'https://picsum.photos/200/300.jpg',
      price: 78,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      _id: '5',
      name: 'Puma Slim Pant',
      category: 'Pants',
      image: 'https://picsum.photos/200/300.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      _id: '6',
      name: 'Adidas Fit Pant',
      category: 'Pants',
      image: 'https://picsum.photos/200/300.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
  ],
};
export default data;
