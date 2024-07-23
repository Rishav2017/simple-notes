import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div class="max-w-[2000px] mx-auto">
      <div className="flex flex-row items-center justify-between md:ml-32 md:mr-32 ml-4 mr-4 py-8 ">
        <div className="flex flex-row items-center gap-x-4">
          <h1 className="text-2xl">IC</h1>
          <h1 className="font-bold text-2xl">Simple Notes</h1>
        </div>

        <div className="hidden md:flex flex-row items-center gap-x-10">
          <div className="flex flex-row items-center gap-x-5">
            <div>Product</div>
            <div>Pricing</div>
            <div>Solutions</div>
            <div>Blog</div>
            <div>Resources</div>
          </div>
          <div>
            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 dark:text-white	 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              SignUp
            </button>
          </div>
        </div>
        <FontAwesomeIcon icon={faBars} className="md:hidden" />
      </div>
    </div>
  );
};

export default Header;
