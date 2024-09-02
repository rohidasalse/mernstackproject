import React, { useEffect, useState } from "react";
import Login from "./Login";
function Navbar() {
  // this is for the dark and light theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("light");
      localStorage.setItem("theme", "light");
      document.body.classList.add("light");
    } else {
      element.classList.remove("light");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("light");
    }
  }, [theme]);
  // this is for scrolling the site
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navItem = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="services">Services</a>
      </li>
      <li>
        <a href="/contact">Contact Us</a>
      </li>
      <li>
        <a href="cources">Course</a>
      </li>
    </>
  );
  return (
    <>
      <div
        className={`max-w-screen-2xl container mx-auto md:px-10 ms:px-4 z-50 ${
          sticky ? "sticky top-0 bg-gray-900 shadow  md:px-10 ms:px-4" : ""
        }`}
      >
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navItem}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Rohidas Alse</a>
          </div>
          <div className="navbar-end gap-2">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navItem}</ul>
            </div>
            <div className="hidden md:block">
              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
            <div>
              <a
                className=""
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              ></a>
              <Login />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
