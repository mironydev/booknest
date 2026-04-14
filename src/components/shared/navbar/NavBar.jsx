import React, { useState } from "react";

const NavBar = () => {
  const [isactive, setIsActive] = useState("home");

  const handleActiveButton = (value) => {
    setIsActive(value);
  };

  return (
    <div className="bg-base-200 shadow-sm">
      <div className="max-lg:collapse w-full rounded-md container mx-auto">
        <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
        <label
          htmlFor="navbar-1-toggle"
          className="fixed inset-0 hidden max-lg:peer-checked:block"
        ></label>
        <div className="collapse-title navbar">
          <div className="navbar-start">
            <label
              htmlFor="navbar-1-toggle"
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
            </label>
            <p className="text-xl font-bold ml-2 lg:ml-0">BookNest</p>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="text-sm menu-horizontal px-1 font-medium space-x-1 select-none">
              <li>
                <button
                  onClick={() => {
                    handleActiveButton("home");
                  }}
                  className={`py-2 px-4 border-2 cursor-pointer ${isactive === "home" ? "rounded-md border-green-600 text-green-700" : "border-transparent"}`}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleActiveButton("listedbooks");
                  }}
                  className={`py-2 px-4 border-2 cursor-pointer ${isactive === "listedbooks" ? "rounded-md border-green-600 text-green-700" : "border-transparent"}`}
                >
                  Listed Books
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleActiveButton("pagestoread");
                  }}
                  className={`py-2 px-4 border-2 cursor-pointer ${isactive === "pagestoread" ? "rounded-md border-green-600 text-green-700" : "border-transparent"}`}
                >
                  Pages to Read
                </button>
              </li>
            </ul>
          </div>
          <div className="navbar-end space-x-3">
            <button className="btn bg-green-600 text-white">Sign In</button>
            <button className="btn bg-[#59C6D2] text-white hidden sm:block">
              Sign Up
            </button>
          </div>
        </div>

        <div className="collapse-content lg:hidden z-1">
          <ul className="menu">
            <li>
              <button>Home</button>
            </li>
            <li>
              <button>Listed Books</button>
            </li>
            <li>
              <button>Pages to Read</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
