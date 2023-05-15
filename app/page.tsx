import React from "react";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <div className="bg-base-200 dark:bg-base-900 h-3/5 p-4">
        <div className="flex items-center justify-center h-2/3">
          <div className="w-1/2">
            <img
              src="https://cdn.pixabay.com/photo/2017/03/12/13/41/colorful-2137080_640.jpg"
              className="rounded-xl w-full h-auto"
            />
          </div>
          <div className="w-1/2 px-8">
            <h2 className="card-title text-3xl mb-4">Welcome to Our Website</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio,
              tempore.
            </p>
            <div className="border-r border-base-300 dark:border-base-700 h-full absolute left-0 top-0"></div>
            <h3 className="text-xl font-bold mb-4">Why Choose Us</h3>
            <ul className="list-disc pl-6">
              <li>High-quality products and services</li>
              <li>Excellent customer support</li>
              <li>Affordable prices</li>
              <li>Easy-to-use platform</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
