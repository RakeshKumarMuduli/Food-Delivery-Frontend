
 import Card from '../Component/Card'
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Customernavbar from '../Component/Navbar'
import Footer from '../Component/Footer'
function Customer() {
  const [data, setData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  if (data == null) {
    return <div className="text-red-800 text-xl font-bold">Data fetching.......</div>;
  }

  const handleClick = () => {
    const search = inputValue.toLowerCase();
    if (search === "") {
      setSelectedCategory("all");
    } else {
      setSelectedCategory(`${search}`);
    }
  };

  const filteredCategories =
    selectedCategory === "all"
      ? data.categories
      : data.categories.filter((category) =>
          category.category_name.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="container mx-auto px-4 py-1 bg-slate-300 ">
      <div><Customernavbar /></div>
      <div className="flex space-x-5 my-4 ">
        <button
          className={`px-4 py-2 bg-blue-500 text-white rounded ${
            selectedCategory === "all" ? "bg-blue-700" : ""
          }`}
          onClick={() => setSelectedCategory("all")}
        >
          All
        </button>

        <button
          className={`px-4 py-2 bg-blue-500 text-white rounded ${
            selectedCategory === "Men" ? "bg-blue-700" : ""
          }`}
          onClick={() => setSelectedCategory("Men")}
        >
          Men
        </button>

        <button
          className={`px-4 py-2 bg-blue-500 text-white rounded ${
            selectedCategory === "Women" ? "bg-blue-700" : ""
          }`}
          onClick={() => setSelectedCategory("Women")}
        >
          Women
        </button>

        <button
          className={`px-4 py-2 bg-blue-500 text-white rounded ${
            selectedCategory === "Kids" ? "bg-blue-700" : ""
          }`}
          onClick={() => setSelectedCategory("Kids")}
        >
          Kids
        </button>

        {/* Updated Search Bar */}
        <div className="flex items-center shadow-lg">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search for categories..."
            className="w-64 pl-4 pr-2 py-3 rounded-s-md border border-gray-600  focus:ring-black transition-all duration-200"
          />
          <button
            onClick={handleClick}
            className="px-6 py-3 bg-black h-full text-white rounded-r-md hover:bg-gray-800 transition-all duration-300 flex items-center justify-center"
          >
            <FaSearch className="h-6 w-5" />
          </button>
        </div>
      </div>

      {filteredCategories.length === 0 ? (
        <div className="text-center py-10">
          <div
            className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md inline-block"
            role="alert"
          >
            <p className="font-bold text-xl">No results found</p>
            <p>We couldn't find any categories matching your search.</p>
          </div>
        </div>
      ) : (
        filteredCategories.map((category) => (
          <div key={category.category_name} className="my-8">
            <h2 className="text-3xl font-serif font-bold mb-4">
              {category.category_name}
            </h2>
            <div className="grid grid-cols-4 gap-4">
              {category.category_products.map((item,index) => (
                <Card key={item.id}  name={item.title} badge={item.badge_text} comp={item.compare_at_price} price={item.price} img={item.image} item={item}  />
              ))}
            </div>
          </div>
        ))
      )}
      <div><Footer/></div>
    </div>
  );
};

export default Customer

