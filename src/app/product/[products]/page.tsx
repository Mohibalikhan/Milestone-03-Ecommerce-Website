"use client"; // This marks the component as client-side

import Image from "next/image";
import { useState, useEffect } from "react";
import type { StaticImageData } from "next/image";

// Importing product images
import product1 from "../../../components/assests/s1.png";
import product2 from "../../../components/assests/s2.png";
import product3 from "../../../components/assests/s3.png";
import product4 from "../../../components/assests/s4.png";
import product5 from "../../../components/assests/s5.png";
import product6 from "../../../components/assests/s6.png";
import product7 from "../../../components/assests/s7.png";
import product8 from "../../../components/assests/s8.png";
import product9 from "../../../components/assests/s9.png";
import product10 from "../../../components/assests/s10.png";
import product11 from "../../../components/assests/s11.png";
import product12 from "../../../components/assests/s12.png";
import product13 from "../../../components/assests/s13.png";
import product14 from "../../../components/assests/s14.png";
import product15 from "../../../components/assests/s15.png";
import product16 from "../../../components/assests/s16.png";
import product17 from "../../../components/assests/s17.png";
import product18 from "../../../components/assests/s18.png";
import product19 from "../../../components/assests/s19.png";
import product20 from "../../../components/assests/s20.png";
import product21 from "../../../components/assests/s21.png";

// Define the product type based on the data you expect from the API
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string; // Adjust to match the API response
}

const productImages: { [key: string]: StaticImageData } = {
  "1": product1,
  "2": product2,
  "3": product3,
  "4": product4,
  "5": product5,
  "6": product6,
  "7": product7,
  "8": product8,
  "9": product9,
  "10": product10,
  "11": product11,
  "12": product12,
  "13": product13,
  "14": product14,
  "15": product15,
  "16": product16,
  "17": product17,
  "18": product18,
  "19": product19,
  "20": product20,
  "21": product21,
};

const Page = () => {
  const [product, setProduct] = useState<Product | null>(null); // Use Product type instead of any
  const [addedToCart, setAddedToCart] = useState(false); // State for the add to cart button text
  const [loading, setLoading] = useState(true); // State for loading status
  const [isClient, setIsClient] = useState(false); // State to check if client-side

  const productId = 1; // Example product ID, you can replace this with a dynamic value

  // We use useEffect to mark the component as client-side
  useEffect(() => {
    setIsClient(true); // Update state to indicate we are on the client-side
  }, []);

  // Fetch the product data inside useEffect to avoid async/await directly in the component
  useEffect(() => {
    if (!productId || !isClient) {
      // If productId is not available or not client-side, do not try to fetch data
      return;
    }

    const fetchProduct = async () => {
      try {
        setLoading(true); // Start loading
        const fetchdata = await fetch(
          `https://dummyjson.com/products/${productId}`
        );

        // Check if response is okay
        if (!fetchdata.ok) {
          throw new Error("Failed to fetch product data");
        }

        const response = await fetchdata.json();
        setProduct(response); // Set product data in state
      } catch (error) {
        console.error("Failed to fetch product:", error);
        setProduct(null); // Handle error by setting product to null
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchProduct();
  }, [productId, isClient]); // Only run when `productId` changes or client-side flag updates

  // Check if product exists and fetch the image from productImages, fallback to product1
  const productImage = product && product.id ? productImages[String(product.id)] : product1;

  // Handle the add to cart action
  const handleAddToCart = () => {
    setAddedToCart(true);

    // Reset the button text after 2 seconds (simulate adding to cart process)
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  // If loading or product data hasn't loaded yet, return a loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // If product data is not available, show an error message
  if (!product) {
    return <div>Error: Product not found!</div>;
  }

  return (
    <div className="bg-white py-6 sm:py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Left Column (Image) */}
          <div className="sm:w-1/2 flex justify-center items-center p-4">
            <Image
              src={productImage}
              alt="Product Image"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>

          {/* Right Column (Product Details) */}
          <div className="sm:w-1/2 flex flex-col justify-start items-start p-4 space-y-4">
            <p className="font-bold text-lg">Product Id: {product.id}</p>
            <h3 className="text-2xl font-bold">{product.title}</h3>
            <p className="text-sm text-gray-600">
              <span className="font-bold">Category:</span> {product.category}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-bold">Description:</span> {product.description}
            </p>
            <p className="text-xl font-semibold text-black">
              <span className="font-bold">Price:</span> ${product.price}
            </p>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="bg-black text-white py-2 px-6 w-full sm:w-auto text-center rounded-md hover:bg-gray-800 transition-all"
            >
              {addedToCart ? "Added Successfully!" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
