import React from "react";

import { IoPersonAddOutline } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { MdOutlineSettingsPhone } from "react-icons/md";
import { VscListSelection } from "react-icons/vsc";
import { TbSelector } from "react-icons/tb";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlineAddHome } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const AddUserForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
     <div className="w-full max-w-md mx-auto mt-10 bg-white/60 shadow-xl rounded-xl p-6 border border-gray-300"> 
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6">
          Create User Account
        </h2>

        <form className="space-y-2">
          <div className="py-1 relative">
            <div className="absolute top-4 left-2 flex justify-center items-center">
              <IoPersonAddOutline />
            </div>
            <input
              type="text"
              placeholder="Full Name"
              required
              className="px-8 w-full border border-gray-300 placeholder:text-gray-500 rounded-md py-2 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-duration-200"
            />
          </div>

          <div className="py-1 relative">
            <div className="absolute top-5 left-2 flex items-center justify-center">
              <MdOutlineMarkEmailRead />
            </div>
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full border border-gray-300 placeholder:text-gray-500 rounded-md px-8 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>

          <div className="py-1 relative">
            <div className="absolute top-4 left-2 flex items-center justify-center">
              <MdOutlineSettingsPhone />
            </div>
            <input
              type="text"
              placeholder="Phone Number"
              required
              className="w-full border border-gray-300 placeholder:text-gray-500 rounded-md px-8 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>

          <div className="py-1 relative">
            <div className="absolute top-4 left-2 flex items-center justify-center">
              <VscListSelection />
            </div>
            <select
              required
              className="w-full border border-gray-300 rounded-md px-7 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
            >
              <option disabled selected className="text-gray-500">
                Select Role
              </option>
              <option>Admin</option>
              <option>Driver</option>
              <option>User</option>
            </select>
          </div>

          <div className="py-1 relative">
            <div className="absolute top-4 left-1 flex items-center justify-center">
              <TbSelector />
            </div>
            <select
              required
              className="w-full border border-gray-300 rounded-md px-6 py-2 text-gray-500 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
            >
              <option disabled selected className="text-gray-500">
                Status
              </option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          <div
            required
            className="border border-gray-300 rounded-md px-8 py-1 relative"
          >
            <div className="absolute top-2 left-2 flex items-center justify-center">
              <IoPersonCircleOutline />
            </div>
            <label className="block text-gray-500 mb-2 ">Gender</label>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  className="accent-blue-600 pl-10"
                />
                <span className="ml-2 text-gray-700">Male</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  className="accent-blue-600 pl-10"
                />
                <span className="ml-2 text-gray-700">Female</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  className="accent-blue-600 pl-10"
                />
                <span className="ml-2 text-gray-700">Other</span>
              </label>
            </div>
          </div>

          <div className="py-1 relative">
            <div className="absolute top-4 left-2 flex items-center justify-center">
              <MdOutlineAddHome />
            </div>
            <input
              type="text"
              placeholder="Address"
              required
              className="w-full border border-gray-300 placeholder:text-gray-500 rounded-md px-8 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>

          <div className="py-1 relative">
            <div className="absolute top-4 left-2 flex items-center justify-center">
              <IoLocationOutline />
            </div>
            <input
              type="text"
              placeholder="State / City"
              required
              className="w-full border border-gray-300 placeholder:text-gray-500 rounded-md px-8 py-2 focus:outline-none focus:ring-2 mb-3 focus:ring-gray-600"
            />
          </div>

       <div className="w-full">
                <button
                  type="submit"
                  className="w-full rounded-lg font-semibold bg-gray-800 text-white hover:scale-105 hover:bg-gray-700 p-2 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  Submit
                </button>
              </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserForm;
