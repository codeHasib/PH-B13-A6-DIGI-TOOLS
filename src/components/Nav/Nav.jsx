import { ShoppingCart } from "lucide-react";
import React from "react";

const Nav = ({ cart }) => {
  return (
    <>
      <nav className="border-b border-gray-300 sticky top-0 left-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto">
          <div className="navbar bg-base-100 border-none">
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
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />{" "}
                  </svg>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a>Products</a>
                  </li>
                  <li>
                    <a>Features</a>
                  </li>
                  <li>
                    <a>Pricing</a>
                  </li>
                  <li>
                    <a>Testimonials</a>
                  </li>
                  <li>
                    <a>FAQ</a>
                  </li>
                </ul>
              </div>
              <a className="text-[16px] md:text-xl lg:text-xl font-bold text-purple-500">
                DigiTools
              </a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a>Products</a>
                </li>
                <li>
                  <a>Features</a>
                </li>
                <li>
                  <a>Pricing</a>
                </li>
                <li>
                  <a>Testimonials</a>
                </li>
                <li>
                  <a>FAQ</a>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              <div className="relative">
                <span
                  className={
                    cart.length > 0
                      ? "inline-block absolute top-0 right-0 h-4.5 w-4.5 text-[12px] font-extrabold text-center rounded-full bg-red-400"
                      : null
                  }
                >
                  {cart.length > 0 ? cart.length : null}
                </span>
                <ShoppingCart height={"28px"} width={"28px"}></ShoppingCart>
              </div>
              <button className="btn btn-ghost p-2 lg:p-4 md:p-4">Login</button>
              <button className="btn btn-primary rounded-4xl p-2 lg:p-4 md:p-4">
                {" "}
                Get Started{" "}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
