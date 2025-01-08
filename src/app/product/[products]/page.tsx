import Link from 'next/link';
import Image from 'next/image';
import type { StaticImageData } from 'next/image'; // Import StaticImageData type

// Static images import
import product1 from '../../../components/assests/s1.png';
import product2 from '../../../components/assests/s2.png';
import product3 from '../../../components/assests/s3.png';
import product4 from '../../../components/assests/s4.png';
import product5 from '../../../components/assests/s5.png';
import product6 from '../../../components/assests/s6.png';
import product7 from '../../../components/assests/s7.png';
import product8 from '../../../components/assests/s8.png';
import product9 from '../../../components/assests/s9.png';
import product10 from '../../../components/assests/s10.png';
import product11 from '../../../components/assests/s11.png';
import product12 from '../../../components/assests/s12.png';
import product13 from '../../../components/assests/s13.png';
import product14 from '../../../components/assests/s14.png';
import product15 from '../../../components/assests/s15.png';
import product16 from '../../../components/assests/s16.png';
import product17 from '../../../components/assests/s17.png';
import product18 from '../../../components/assests/s18.png';
import product19 from '../../../components/assests/s19.png';
import product20 from '../../../components/assests/s20.png';
import product21 from '../../../components/assests/s21.png';

// Map for product images
const productImages: { [key: string]: StaticImageData } = {
  '1': product1,
  '2': product2,
  '3': product3,
  '4': product4,
  '5': product5,
  '6': product6,
  '7': product7,
  '8': product8,
  '9': product9,
  '10': product10,
  '11': product11,
  '12': product12,
  '13': product13,
  '14': product14,
  '15': product15,
  '16': product16,
  '17': product17,
  '18': product18,
  '19': product19,
  '20': product20,
  '21': product21,
  '22': product1,
  '23': product2,
  '24': product3,
  '25': product4,
  '26': product5,
  '27': product6,
  '28': product7,
  '29': product8,
  '30': product9,
};

const Page = async ({ params }: { params: Promise<{ products: string }> }) => {
  try {
    const resolvedParams = await params; // Resolve the promise
    const productId = resolvedParams.products;

    // Fetch product data
    const fetchdata = await fetch(`https://dummyjson.com/products/${productId}`);
    const response = await fetchdata.json();

    // Check if response contains valid data
    if (!response || response.error) {
      return <div>Product not found.</div>;
    }

    // Get the corresponding image from the map
    const productImage = productImages[productId] || product1; // Fallback to product1 if not found

    return (
      <>
        <div>
          <div className="p-4 pb-5 gap-6 sm:p-10">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:flex lg:flex-wrap justify-center items-center gap-6">
              {/* Product Image */}
              <div className="w-full lg:w-3/6 xl:w-1/4 flex justify-center items-center">
                <Image
                  src={productImage}
                  width={350}
                  height={50}
                  alt="product image"
                  className="bg-slate-200 h-96"
                />
              </div>

              {/* Product Details */}
              <div className="w-full lg:w-1/3 xl:w-1/2 flex flex-col items-start p-4 pb-5 gap-4 sm:p-10">
                <p className="font-bold text-lg lg:text-xl">Product Id: {response.id}</p>
                <h3 className="text-lg lg:text-xl">
                  <span className="font-bold">Title:</span> {response.title}
                </h3>
                <p className="text-lg lg:text-xl">
                  <span className="font-bold">Category:</span> {response.category}
                </p>
                <p className="text-lg lg:text-xl">
                  <span className="font-bold">Description:</span> {response.description}
                </p>
                <p className="text-lg lg:text-xl">
                  <span className="font-bold">Price:</span> ${response.price}
                </p>
                <p className="text-lg lg:text-xl">
                  <span className="font-bold">Brand:</span> {response.brand}
                </p>
                <Link
                  href="/cart"
                  className="bg-black text-white p-3 w-full sm:w-48 text-center rounded hover:bg-gray-800"
                >
                  Add to Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error('Error fetching product:', error);
    return <div>Failed to load product data. Please try again later.</div>;
  }
};

export default Page;
