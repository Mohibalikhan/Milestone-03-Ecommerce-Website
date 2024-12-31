import Link from "next/link";
import React from "react";


export default function Bag() {
    return (
      <div className="min-h-screen bg-[#FFFFFF]">
        {/* Container */}
        <div className="max-w-7xl mx-auto px-4 py-8  grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Bag Section */}
          <div className="lg:col-span-2 bg-[#FFFFFF] p-6">
            {/* Free Delivery Banner */}
            <div className="bg-gray-300 p-4 mb-6 rounded-md text-sm">
              <span>Free Delivery</span> applies to orders of ₹5,000 or more.{" "}
              <a href="#" className="text-[#111111] underline">
                View details
              </a>
            </div>
  
            {/* Bag Items */}
            <h2 className="text-4xl font-bold mb-4">Bag</h2>
            <div className="space-y-8">
  {/* Item 1 */}
  <div className="flex flex-wrap gap-4 sm:gap-6 md:flex-nowrap">
    <img
      src="Frame.png"
      alt="Nike Shirt"
      className="w-24 h-24 object-cover rounded-md border sm:w-32 sm:h-32"
    />
    <div className="flex-1">
      <h3 className="font-semibold text-sm sm:text-base">
        Nike Dri-FIT ADV TechKnit Ultra
      </h3>
      <p className="text-gray-500 text-xs sm:text-sm">
        Men&apos;s Short-Sleeve Running Top
        <br />
        Ashen Slate/Cobalt Bliss
      </p>
      <p className="text-xs sm:text-sm">
        <span className="font-bold">Size:</span> L
        <span className="mx-2">|</span>
        <span className="font-bold">Quantity:</span> 1
      </p>
      
    </div>
    <p className="font-bold text-sm sm:text-base">MRP: ₹ 3,895.00</p>
  </div>

  {/* Item 2 */}
  <div className="flex flex-wrap gap-4 sm:gap-6 md:flex-nowrap">
    <img
      src="shoe.png"
      alt="Nike Shoes"
      className="w-24 h-24 object-cover rounded-md border sm:w-32 sm:h-32"
    />
    <div className="flex-1">
      <h3 className="font-semibold text-sm sm:text-base">
        Nike Air Max 97 SE
      </h3>
      <p className="text-gray-500 text-xs sm:text-sm">
        Men&apos;s Shoes
        <br />
        Flat Pewter/Light Bone/Black/White
      </p>
      <p className="text-xs sm:text-sm">
        <span className="font-bold">Size:</span> 8
        <span className="mx-2">|</span>
        <span className="font-bold">Quantity:</span> 1
      </p>
     
    </div>
    <p className="font-bold text-sm sm:text-base">MRP: ₹ 16,995.00</p>
  </div>
</div>
</div>
  
          {/* Summary Section */}
          <div className="bg-[#FFFFFF] p-6">
            <h2 className="text-lg font-bold mb-6">Summary</h2>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>₹ 20,890.00</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Delivery & Handling:</span>
                <span>Free</span>
              </div>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between text-lg font-bold">
              <span>Total:</span>
              <span>₹ 20,890.00</span>
            </div>
            <Link href={"/CheckOut"}>
            <button className="w-full mt-6 bg-black text-white py-3 rounded-3xl font-medium">
              Member Checkout
            </button>
            </Link>
          </div>
        </div>
  
      
      </div>
    );
  }
  