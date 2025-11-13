import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { FiShoppingCart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");

  // Fetch API data
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Search Optimization
  const filteredProducts = useMemo(() => {
    return products.filter((p) =>
      p.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [products, query]);

  return (
    <div className="min-h-screen bg-white">

      {/* NAVBAR */}
      <div className="w-full flex items-center justify-between px-8 py-4 shadow-sm bg-white">

        {/* LOGO */}
        <div className="flex items-center gap-2 text-2xl font-bold select-none">
          <FiShoppingCart className="text-3xl" />
          <span>Web3 Shopping Cart</span>
        </div>

        {/* SEARCH BAR */}
        <div className="relative w-60">
          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full border border-gray-400 rounded-xl pl-4 pr-12 py-2 
                       text-base bg-white focus:outline-none focus:ring-1 
                       focus:ring-gray-400"
          />

          {/* CLEAR BUTTON */}
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-10 top-1/2 -translate-y-1/2 
                         text-blue-600 font-bold text-sm"
            >
              ✕
            </button>
          )}

          {/* SEARCH ICON */}
          <CiSearch
            className="absolute right-3 top-1/2 -translate-y-1/2 
                       text-gray-600 text-xl"
          />
        </div>
      </div>

      {/* TITLE */}
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold mb-2">Store</h1>
        <p className="text-gray-600 text-lg">Buy with web3 wallet!</p>
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                      gap-8 max-w-7xl mx-auto p-6 mt-10">

        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500 text-lg col-span-3">
            No products found...
          </p>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center border-gray"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-64 object-contain mb-6"
              />

              <h2 className="text-lg font-semibold text-center mb-2">
                {product.title}
              </h2>

              {/* PRICE BOLD */}
              <p className="text-gray-700 font-medium-100 text-base mb-5">
                ${product.price} USD
              </p>

              {/* VIEW DETAILS BUTTON */}
              <button className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition">
                View Details
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
