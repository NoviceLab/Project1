import { IoIosCall } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isLocationsDropdownVisible, setLocationsDropdownVisible] =
    useState(false);
  const [isManagedSpaceDropdownVisible, setManagedSpaceDropdownVisible] =
    useState(false);
  let timeoutId: NodeJS.Timeout;

  const navigate = useNavigate();

  return (
    <>
      <div className="navbar bg-base-100 font-sans text-base leading-8 tracking-normal text-customGray">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
            >
              <li className="hover:">
                <button onClick={() => navigate("/")}>Home</button>
              </li>
              <li>
                <button onClick={() => navigate("/about-us")}>About Us</button>{" "}
              </li>
              <li
                onMouseEnter={() => {
                  clearTimeout(timeoutId);
                  setLocationsDropdownVisible(true);
                }}
                onMouseLeave={() => {
                  timeoutId = setTimeout(
                    () => setLocationsDropdownVisible(false),
                    2000
                  );
                }}
                className="relative group"
              >
                <summary className="cursor-pointer py-2  hover:text-yellow-500 border-2 border-transparent">
                  Locations
                </summary>
                <ul
                  className={`p-2 absolute left-0 mt-2 bg-white shadow-lg rounded transition-all duration-200 ${
                    isLocationsDropdownVisible
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                >
                  <li className="py-2  hover:text-yellow-500 border-2 border-transparent">
                    <button onClick={() => navigate("/locations/mumbai")}>
                      Mumbai
                    </button>
                  </li>
                  <li className="py-2 hover:text-yellow-500 border-2 border-transparent">
                    <button onClick={() => navigate("/locations/bangalore")}>
                      Bangalore
                    </button>
                  </li>
                </ul>
              </li>
              <li
                onMouseEnter={() => {
                  clearTimeout(timeoutId);
                  setManagedSpaceDropdownVisible(true);
                }}
                onMouseLeave={() => {
                  timeoutId = setTimeout(
                    () => setManagedSpaceDropdownVisible(false),
                    2000
                  );
                }}
                className="relative group"
              >
                <summary className="cursor-pointer py-2 hover:text-yellow-500 border-2 border-transparent">
                  Managed Space Solutions
                </summary>
                <ul
                  className={`p-2 absolute left-0 mt-2 bg-white shadow-lg rounded transition-all duration-200 ${
                    isManagedSpaceDropdownVisible
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                >
                  <li className="py-2 hover:text-yellow-500 border-2 border-transparent">
                    <button onClick={() => navigate("/managed-space/option1")}>
                      Option 1
                    </button>
                  </li>
                  <li className="py-2 hover:text-yellow-500 border-2 border-transparent">
                    <button onClick={() => navigate("/managed-space/option2")}>
                      Option 2
                    </button>{" "}
                  </li>
                </ul>
              </li>
              <li>
                <button onClick={() => navigate("/partner")}>
                  Partner with us
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/contact")}>Contact Us</button>{" "}
              </li>
            </ul>
          </div>
          <button onClick={() => navigate("/")}>
            <img
              src="https://www.603thecoworkingspace.com/wp-content/uploads/2015/12/603_logo-no-bg-e1716361533484.png"
              className="h-15 w-20 "
            ></img>
          </button>
        </div>
        <div className="navbar-center hidden lg:flex mr-28 ">
          <ul className="menu menu-horizontal px-1  ">
            <li>
              <button onClick={() => navigate("/")}>Home</button>
            </li>
            <li>
              <button onClick={() => navigate("/about-us")}>About Us</button>
            </li>

            <li
              onMouseEnter={() => {
                clearTimeout(timeoutId);
                setLocationsDropdownVisible(true);
              }}
              onMouseLeave={() => {
                timeoutId = setTimeout(
                  () => setLocationsDropdownVisible(false),
                  2000
                );
              }}
              className="relative group"
            >
              <summary className="cursor-pointer py-2  hover:text-yellow-500 border-2 border-transparent">
                Locations
              </summary>
              <ul
                className={`p-2 absolute left-0 mt-2 bg-white shadow-lg rounded transition-all duration-200 ${
                  isLocationsDropdownVisible
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
              >
                <li className="py-2  hover:text-yellow-500 border-2 border-transparent">
                  <button onClick={() => navigate("/locations/mumbai")}>
                    Mumbai
                  </button>
                </li>
                <li className="py-2  hover:text-yellow-500 border-2 border-transparent">
                  <button onClick={() => navigate("/locations/bangalore")}>
                    Bangalore
                  </button>{" "}
                </li>
              </ul>
            </li>
            <li>
              <button onClick={() => navigate("/service")}>Services</button>
            </li>
            <li
              onMouseEnter={() => {
                clearTimeout(timeoutId);
                setManagedSpaceDropdownVisible(true);
              }}
              onMouseLeave={() => {
                timeoutId = setTimeout(
                  () => setManagedSpaceDropdownVisible(false),
                  2000
                );
              }}
              className="relative group"
            >
              <summary className="cursor-pointer py-2 hover:text-yellow-500 border-2 border-transparent">
                Managed Space Solutions
              </summary>
              <ul
                className={`p-2 absolute left-0 mt-2 bg-white shadow-lg rounded transition-all duration-200 ${
                  isManagedSpaceDropdownVisible
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
              >
                <li className="py-2 hover:text-yellow-500 border-2 border-transparent">
                  <button onClick={() => navigate("/managed-space/option1")}>
                    Option 1
                  </button>
                </li>
                <li className="py-2 hover:text-yellow-500 border-2 border-transparent">
                  <button onClick={() => navigate("/managed-space/option2")}>
                    Option 2
                  </button>
                </li>
              </ul>
            </li>
            <li>
              <button onClick={() => navigate("/partner")}>
                Partner with us
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/contact")}>Contact Us</button>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-5">
        <button
  onClick={() => navigate("/login")}
  className="btn rounded-3xl w-28 hover:bg-yellow-500 text-slate-gray font-bold py-2 px-4 border-2 border-#817a78 shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
>
  Login
</button>

<button
  className="btn bg-yellow-500 hover:bg-yellow-600 rounded-3xl text-white font-bold py-2 px-4 shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 flex items-center space-x-2"
>
  <IoIosCall className="h-6 w-5" />
  <span>Call now</span>
</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
