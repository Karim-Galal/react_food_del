import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("login"); // "login" | "signup"

  return (
    <div
      onClick={() => setShowLogin(false)} // overlay closes
      style={{
        background: "rgba(30, 41, 59, 0.5)",
      }}
      className="fixed w-full inset-0 bg-slate-700 bg-opacity-50 flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="p-3 absolute top-[50%] left-[50%] translate-[-50%] z-50 w-full max-w-sm"
      >
        <div className="p-4 relative bg-white border border-orange-300 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-orange-700">
          {/* Close Button */}
          <div
            onClick={() => setShowLogin(false)}
            className="absolute right-5 top-5 p-1 rounded-full cursor-pointer"
          >
            <FaTimes className="text-xl text-slate-500" />
          </div>

          {/* ---------------- Login Form ---------------- */}
          {currState === "login" && (
            <form className="space-y-6">
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                Sign in
              </h5>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="name@company.com"
                  className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white outline-none"
                  required
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-orange-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-orange-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <label
                    htmlFor="remember"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
                <span className="ms-auto text-sm text-gray-500 dark:text-gray-300">
                  Password help unavailable
                </span>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
              >
                Login to your account
              </button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?{" "}
                <button
                  type="button"
                  onClick={() => setCurrState("signup")}
                  className="text-orange-700 hover:underline dark:text-orange-500"
                >
                  Create account
                </button>
              </div>
            </form>
          )}

          {/* ---------------- Signup Form ---------------- */}
          {currState === "signup" && (
            <form className="space-y-6">
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                Create Account
              </h5>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Your name"
                  className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="emailSignup"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="emailSignup"
                  placeholder="name@company.com"
                  className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="passwordSignup"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="passwordSignup"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white outline-none"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
              >
                Sign up
              </button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setCurrState("login")}
                  className="text-orange-700 hover:underline dark:text-orange-500"
                >
                  Login
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
