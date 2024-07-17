import { IoIosCall } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isLocationsDropdownVisible, setLocationsDropdownVisible] =
    useState(false);
  const [isMumbaiDropdownVisible, setMumbaiDropdownVisible] = useState(false);
  const [isNaviMumbaiDropdownVisible, setNaviMumbaiDropdownVisible] =
    useState(false);
  const [isBangaloreDropdownVisible, setBangaloreDropdownVisible] =
    useState(false);
  const [isAhmedabadDropdownVisible, setAhmedabadDropdownVisible] =
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg "
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
                  setManagedSpaceDropdownVisible(false);
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
                  className={`p-2 w-40 absolute left-0 mt-2 bg-white shadow-lg rounded transition-all duration-200 ${
                    isLocationsDropdownVisible
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                >
                  <li
                    className="relative group border-b border-gray-400"
                    onMouseEnter={() => {
                      clearTimeout(timeoutId);
                      setMumbaiDropdownVisible(true);
                      setNaviMumbaiDropdownVisible(false);
                      setBangaloreDropdownVisible(false);
                      setAhmedabadDropdownVisible(false);
                    }}
                    onMouseLeave={() => {
                      timeoutId = setTimeout(
                        () => setMumbaiDropdownVisible(false),
                        1000
                      );
                    }}
                  >
                    <summary className="py-2 hover:text-yellow-500 border-2 border-transparent">
                      Mumbai
                    </summary>
                    <ul
                      className={`p-2 w-60 absolute left-full top-0 mt-2 bg-white shadow-lg rounded transition-all duration-200 ${
                        isMumbaiDropdownVisible
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }`}
                    >
                      <li className="py-2  hover:text-yellow-500 border-transparent border-b border-gray-400">
                        <button
                          onClick={() => navigate("/locations/Matulya-Centre")}
                        >
                          Matulya Centre, Lower Parel
                        </button>
                      </li>
                      <li className="py-2 hover:text-yellow-500 border-b border-gray-400 border-transparent">
                        <button onClick={() => navigate("/locations/Marathon")}>
                          Marathon, Lower Parel
                        </button>
                      </li>
                      <li className="py-2 hover:text-yellow-500 border-b border-gray-400 border-transparent">
                        <button
                          onClick={() =>
                            navigate("/locations/Sun-Mill-Compound")
                          }
                        >
                          Sun Mill Compound, Lower Parel
                        </button>
                      </li>
                      <li className="py-2 hover:text-yellow-500 border-b border-gray-400 border-transparent">
                        <button
                          onClick={() => navigate("/locations/Kamala-Mills")}
                        >
                          Kamala Mills, Lower Parel
                        </button>
                      </li>
                      <li className="py-2 hover:text-yellow-500 border-b border-gray-400 border-transparent">
                        <button
                          onClick={() => navigate("/locations/Sunshine-Tower")}
                        >
                          Sunshine Tower, Lower Parel
                        </button>
                      </li>
                      <li className="py-2 hover:text-yellow-500 border-b border-gray-400 border-transparent">
                        <button
                          onClick={() => navigate("/locations/Amore-Centre")}
                        >
                          Amore Centre, Khar
                        </button>
                      </li>
                      <li className="py-2 hover:text-yellow-500 border-b border-gray-400 border-transparent">
                        <button
                          onClick={() => navigate("/locations/Makhija-Archade")}
                        >
                          Makhija Archade, Bandra
                        </button>
                      </li>
                      <li className="py-2 hover:text-yellow-500 border-b border-gray-400 border-transparent">
                        <button onClick={() => navigate("/locations/MIDC")}>
                          MIDC, Andheri
                        </button>
                      </li>
                      <li className="py-2 hover:text-yellow-500 border-2         border-transparent">
                        <button
                          onClick={() =>
                            navigate("/locations/Pinnacle-Corporate-Park")
                          }
                        >
                          Pinnacle Corporate Park, BKC
                        </button>
                      </li>
                    </ul>
                  </li>
                  <li
                    className="relative group border-b border-gray-400"
                    onMouseEnter={() => {
                      clearTimeout(timeoutId);
                      setNaviMumbaiDropdownVisible(true);
                      setMumbaiDropdownVisible(false);
                      setBangaloreDropdownVisible(false);
                      setAhmedabadDropdownVisible(false);
                    }}
                    onMouseLeave={() => {
                      timeoutId = setTimeout(
                        () => setNaviMumbaiDropdownVisible(false),
                        1000
                      );
                    }}
                  >
                    <summary className="py-2 hover:text-yellow-500 border-2 border-transparent">
                      Navi Mumbai
                    </summary>
                    <ul
                      className={`p-2 w-60 absolute left-full top-0 mt-2 bg-white shadow-lg rounded transition-all duration-200 ${
                        isNaviMumbaiDropdownVisible
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }`}
                    >
                      <li className="py-2 hover:text-yellow-500 border-2 border-transparent">
                        <button
                          onClick={() =>
                            navigate("/locations/Millenium-Business-Park")
                          }
                        >
                          Millenium Business Park
                        </button>
                      </li>
                    </ul>
                  </li>
                  <li
                    className="relative group border-b border-gray-400"
                    onMouseEnter={() => {
                      clearTimeout(timeoutId);
                      setBangaloreDropdownVisible(true);
                      setMumbaiDropdownVisible(false);
                      setNaviMumbaiDropdownVisible(false);
                      setAhmedabadDropdownVisible(false);
                    }}
                    onMouseLeave={() => {
                      timeoutId = setTimeout(
                        () => setBangaloreDropdownVisible(false),
                        1000
                      );
                    }}
                  >
                    <summary className="py-2 hover:text-yellow-500 border-2 border-transparent">
                      Bangalore
                    </summary>
                    <ul
                      className={`p-2 w-60 absolute left-full top-0 mt-2 bg-white shadow-lg rounded transition-all duration-200 ${
                        isBangaloreDropdownVisible
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }`}
                    >
                      <li className="py-2 hover:text-yellow-500 border-2 border-transparent">
                        <button
                          onClick={() =>
                            navigate("/locations/Diamond-District")
                          }
                        >
                          Diamond District, Domlar
                        </button>
                      </li>
                    </ul>
                  </li>
                  <li
                    className="relative group"
                    onMouseEnter={() => {
                      clearTimeout(timeoutId);
                      setAhmedabadDropdownVisible(true);
                      setMumbaiDropdownVisible(false);
                      setBangaloreDropdownVisible(false);
                      setNaviMumbaiDropdownVisible(false);
                    }}
                    onMouseLeave={() => {
                      timeoutId = setTimeout(
                        () => setAhmedabadDropdownVisible(false),
                        1000
                      );
                    }}
                  >
                    <summary className="py-2 hover:text-yellow-500 border-2 border-transparent">
                      Ahmedabad
                    </summary>
                    <ul
                      className={`p-2 w-60 absolute left-full top-0 mt-2 bg-white shadow-lg rounded transition-all duration-200 ${
                        isAhmedabadDropdownVisible
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }`}
                    >
                      <li className="py-2 hover:text-yellow-500 border-2 border-transparent">
                        <button
                          onClick={() =>
                            navigate("/locations/Navratna-Corporate-Park")
                          }
                        >
                          Navratna Corporate Park, Ahmedabad
                        </button>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>{" "}
              <li>
                <button onClick={() => navigate("/service")}>Services</button>
              </li>
              <li
                onMouseEnter={() => {
                  clearTimeout(timeoutId);
                  setManagedSpaceDropdownVisible(true);
                  setLocationsDropdownVisible(false);
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
                  className={`p-2 w-60 absolute left-0 mt-2 bg-white shadow-lg rounded transition-all duration-200 ${
                    isManagedSpaceDropdownVisible
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                >
                  <li className="py-2 hover:text-yellow-500 border-b border-gray-400 border-transparent">
                    <button
                      onClick={() => navigate("/603-Lodha-Supremus-Center")}
                    >
                      603 Lodha Supremus Center (Thane)
                    </button>
                  </li>
                  <li className="py-2 hover:text-yellow-500 border-b border-gray-400 border-transparent">
                    <button onClick={() => navigate("/Naman-Midtown-Center")}>
                      Naman Midtown Center (Dadar)
                    </button>
                  </li>
                  <li className="py-2 hover:text-yellow-500 border-b border-transparent">
                    <button onClick={() => navigate("/603-MBC-Center")}>
                      603 MBC Center (Thane)
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
              <button onClick={() => navigate("/contactus")}>Contact Us</button>
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
                setManagedSpaceDropdownVisible(false);
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
                className={`p-2 w-40 absolute left-0 mt-2 bg-white shadow-lg rounded transition-all duration-200 ${
                  isLocationsDropdownVisible
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
              >
                <li
                  className="relative group border-b border-gray-400"
                  onMouseEnter={() => {
                    clearTimeout(timeoutId);
                    setMumbaiDropdownVisible(true);
                    setNaviMumbaiDropdownVisible(false);
                    setBangaloreDropdownVisible(false);
                    setAhmedabadDropdownVisible(false);
                  }}
                  onMouseLeave={() => {
                    timeoutId = setTimeout(
                      () => setMumbaiDropdownVisible(false),
                      1000
                    );
                  }}
                >
                  <summary className="py-2 hover:text-yellow-500 border-2 border-transparent">
                    Mumbai
                  </summary>
                  <ul
                    className={`p-2 w-60 absolute left-full top-0 mt-2 bg-white shadow-lg rounded transition-all duration-200 ${
                      isMumbaiDropdownVisible
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }`}
                  >
                    <li className="py-2  hover:text-yellow-500 border-b border-gray-400">
                      <button
                        onClick={() => navigate("/locations/Matulya-Centre")}
                      >
                        Matulya Centre, Lower Parel
                      </button>
                    </li>
                    <li className="py-2 hover:text-yellow-500 border-b border-gray-400">
                      <button onClick={() => navigate("/locations/Marathon")}>
                        Marathon, Lower Parel
                      </button>
                    </li>
                    <li className="py-2 hover:text-yellow-500 border-b border-gray-400">
                      <button
                        onClick={() => navigate("/locations/Sun-Mill-Compound")}
                      >
                        Sun Mill Compound, Lower Parel
                      </button>
                    </li>
                    <li className="py-2 hover:text-yellow-500 border-b border-gray-400">
                      <button
                        onClick={() => navigate("/locations/Kamala-Mills")}
                      >
                        Kamala Mills, Lower Parel
                      </button>
                    </li>
                    <li className="py-2 hover:text-yellow-500 border-b border-gray-400">
                      <button
                        onClick={() => navigate("/locations/Sunshine-Tower")}
                      >
                        Sunshine Tower, Lower Parel
                      </button>
                    </li>
                    <li className="py-2 hover:text-yellow-500 border-b border-gray-400">
                      <button
                        onClick={() => navigate("/locations/Amore-Centre")}
                      >
                        Amore Centre, Khar
                      </button>
                    </li>
                    <li className="py-2 hover:text-yellow-500 border-b border-gray-400">
                      <button
                        onClick={() => navigate("/locations/Makhija-Archade")}
                      >
                        Makhija Archade, Bandra
                      </button>
                    </li>
                    <li className="py-2 hover:text-yellow-500 border-b border-gray-400">
                      <button onClick={() => navigate("/locations/MIDC")}>
                        MIDC, Andheri
                      </button>
                    </li>
                    <li className="py-2 hover:text-yellow-500 border-2 border-transparent">
                      <button
                        onClick={() =>
                          navigate("/locations/Pinnacle-Corporate-Park")
                        }
                      >
                        Pinnacle Corporate Park, BKC
                      </button>
                    </li>
                  </ul>
                </li>
                <li
                  className="relative group border-b border-gray-400"
                  onMouseEnter={() => {
                    clearTimeout(timeoutId);
                    setNaviMumbaiDropdownVisible(true);
                    setMumbaiDropdownVisible(false);
                    setBangaloreDropdownVisible(false);
                    setAhmedabadDropdownVisible(false);
                  }}
                  onMouseLeave={() => {
                    timeoutId = setTimeout(
                      () => setNaviMumbaiDropdownVisible(false),
                      1000
                    );
                  }}
                >
                  <summary className="py-2 hover:text-yellow-500 border-2 border-transparent">
                    Navi Mumbai
                  </summary>
                  <ul
                    className={`p-2 w-60 absolute left-full top-0 mt-2 bg-white shadow-lg rounded transition-all duration-200 ${
                      isNaviMumbaiDropdownVisible
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }`}
                  >
                    <li className="py-2 hover:text-yellow-500 border-2 border-transparent">
                      <button
                        onClick={() =>
                          navigate("/locations/Millenium-Business-Park")
                        }
                      >
                        Millenium Business Park
                      </button>
                    </li>
                  </ul>
                </li>
                <li
                  className="relative group border-b border-gray-400"
                  onMouseEnter={() => {
                    clearTimeout(timeoutId);
                    setBangaloreDropdownVisible(true);
                    setMumbaiDropdownVisible(false);
                    setNaviMumbaiDropdownVisible(false);
                    setAhmedabadDropdownVisible(false);
                  }}
                  onMouseLeave={() => {
                    timeoutId = setTimeout(
                      () => setBangaloreDropdownVisible(false),
                      1000
                    );
                  }}
                >
                  <summary className="py-2 hover:text-yellow-500 border-2 border-transparent">
                    Bangalore
                  </summary>
                  <ul
                    className={`p-2 w-60 absolute left-full top-0 mt-2 bg-white shadow-lg rounded transition-all duration-200 ${
                      isBangaloreDropdownVisible
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }`}
                  >
                    <li className="py-2 hover:text-yellow-500 border-2 border-transparent">
                      <button
                        onClick={() => navigate("/locations/Diamond-District")}
                      >
                        Diamond District, Domlar
                      </button>
                    </li>
                  </ul>
                </li>
                <li
                  className="relative group"
                  onMouseEnter={() => {
                    clearTimeout(timeoutId);
                    setAhmedabadDropdownVisible(true);
                    setMumbaiDropdownVisible(false);
                    setBangaloreDropdownVisible(false);
                    setNaviMumbaiDropdownVisible(false);
                  }}
                  onMouseLeave={() => {
                    timeoutId = setTimeout(
                      () => setAhmedabadDropdownVisible(false),
                      1000
                    );
                  }}
                >
                  <summary className="py-2 hover:text-yellow-500 border-2 border-transparent">
                    Ahmedabad
                  </summary>
                  <ul
                    className={`p-2 w-60 absolute left-full top-0 mt-2 bg-white shadow-lg rounded transition-all duration-200 ${
                      isAhmedabadDropdownVisible
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }`}
                  >
                    <li className="py-2 hover:text-yellow-500 border-2 border-transparent">
                      <button
                        onClick={() =>
                          navigate("/locations/Navratna-Corporate-Park")
                        }
                      >
                        Navratna Corporate Park, Ahmedabad
                      </button>
                    </li>
                  </ul>
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
                setLocationsDropdownVisible(false);
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
                className={`p-2 w-60 absolute left-0 mt-2 bg-white shadow-lg rounded transition-all duration-200 ${
                  isManagedSpaceDropdownVisible
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
              >
                <li className="py-2 hover:text-yellow-500 border-b border-gray-400">
                  <button
                    onClick={() => navigate("/603-Lodha-Supremus-Center")}
                  >
                    603 Lodha Supremus Center (Thane)
                  </button>
                </li>
                <li className="py-2 hover:text-yellow-500 border-b border-gray-400">
                  <button onClick={() => navigate("/Naman-Midtown-Center")}>
                    Naman Midtown Center (Dadar)
                  </button>
                </li>
                <li className="py-2 hover:text-yellow-500 border-2 border-transparent">
                  <button onClick={() => navigate("/603-MBC-Center")}>
                    603 MBC Center (Thane)
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
              <button onClick={() => navigate("/contactus")}>Contact Us</button>
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

          <button className="btn bg-yellow-500 hover:bg-yellow-600 rounded-3xl text-white font-bold py-2 px-4 shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 flex items-center space-x-2">
            <IoIosCall className="h-6 w-5" />
            <span>Call now</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;