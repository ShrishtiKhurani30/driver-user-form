import React from "react";
import "../../index.css";

const DriverForm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto mt-10 bg-white/40 shadow-2xl rounded-2xl p-6 border border-gray-300 m-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6">
          Driver Form
        </h1>

        <form className="space-y-3">
          <div className="grid grid-cols-1 gap-4 gap-y-3">
            <input
              type="text"
              placeholder="Driver Name"
              className="w-full max-w-lg sm:max-w-full border border-gray-300 p-2 rounded-xl px-5 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all duration-200"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full max-w-lg sm:max-w-full border border-gray-300 p-2 rounded-xl px-5 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all duration-200"
              required
            />
            <input
              type="phone"
              placeholder="Phone Number"
              className="w-full max-w-lg sm:max-w-full border border-gray-300 p-2 rounded-xl px-5 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all duration-200"
              required
            />

            <select
              required
              className="w-full max-w-lg sm:max-w-full border border-gray-300 p-2 rounded-xl px-5 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all duration-200"
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

            <select
              required
              className="w-full max-w-lg sm:max-w-full border border-gray-300 p-2 rounded-xl px-5 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all duration-200"
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
              className="w-full max-w-lg sm:max-w-full border border-gray-300 p-2 rounded-xl px-5 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all duration-200"
              required
            />
            <input
              type="number"
              placeholder="Completed Rides"
              className="w-full max-w-lg sm:max-w-full border border-gray-300 p-2 rounded-xl px-5 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all duration-200 mb-4"
              required
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

export default DriverForm;
