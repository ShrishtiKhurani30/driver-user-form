import React from "react";
import "../../index.css";

const DriverForm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto mt-10 bg-white/60 shadow-xl rounded-xl p-6 border border-gray-300">
        <h1 className="text-lg sm:text-2xl font-bold text-center text-gray-800 mb-6">
          Driver Form
        </h1>

        <form className="space-y-4">
          <div className="grid [@media(max-width:500px)]:grid-cols-2 grid-cols-1 gap-4 gap-y-3">
            <input
              type="text"
              placeholder="Driver Name"
              className="border border-gray-300 p-2 rounded w-full placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all duration-200" required
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-2 rounded w-full placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all duration-200" required
            />
            <input
              type="phone"
              placeholder="Phone Number"
              className="border border-gray-300 p-2 rounded w-full placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all duration-200" required
            />

            <select required
              className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all duration-200"
            >
              <option disabled selected className="text-gray-500">
                Select Vehicle Type
              </option>
              <option className="text-gray-800">Sedan</option>
              <option className="text-gray-800">SUV</option>
              <option className="text-gray-800">Compact</option>
              <option className="text-gray-800">Luxury</option>
              <option className="text-gray-800">Minivan</option>
              <option className="text-gray-800">Other</option>
            </select>

            <select required
              className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all duration-200"
            >
              <option disabled selected className="text-gray-500">
                Status
              </option>
              <option className="text-gray-800">Active</option>
              <option className="text-gray-800">Inactive</option>
              <option className="text-gray-800">Pending</option>
            </select>

            <input
              type="number"
              placeholder="Rating"
              className="border border-gray-300 p-2 rounded w-full placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all duration-200" required
            />
            <input
              type="number"
              placeholder="Completed Rides"
              className="border border-gray-300 p-2 rounded w-full placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all duration-200" required
            />
          </div>

          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-10 sm:px-10 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 text-sm sm:text-base md:text:lg"
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DriverForm;
