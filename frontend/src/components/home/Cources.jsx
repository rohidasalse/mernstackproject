import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import lists from "../../../public/list.json";
import Card from "../Card";
import { Link } from "react-router-dom";
function Cources() {
  const filterData = lists.filter((data) => data.category === "free");
  return (
    <>
      <div className="sticky top-0 index z-50">
        <Navbar />
      </div>
      <div className="mt-3 md:mt-4 lg:mt-8 m-9 md:px-10 ms:px-4">
        <h1 className="text-center">hi</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          cupiditate sint, fugit inventore, voluptates voluptas, nesciunt
          commodi nostrum eligendi tempore quas ducimus ea molestias aspernatur
          praesentium repellat dignissimos minima sunt.
        </p>
        <Link to="/">
          <button class="bg-pink-500 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded mt-5">
            Click Me
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:grid-cols-2 z-0">
        {filterData.map((items) => (
          <Card item={items} key={items.id} />
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
export default Cources;
