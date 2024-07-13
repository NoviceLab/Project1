import { IoIosCall } from "react-icons/io";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About Us</a>
              </li>

              <li>
                <details>
                  <summary>Locations</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <details>
                  <summary>Managed space solutions</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Partner with us </a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
          <Link to="/">
            {" "}
            <img
              src="https://www.603thecoworkingspace.com/wp-content/uploads/2015/12/603_logo-no-bg-e1716361533484.png"
              className="h-15 w-20 "
            ></img>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex mr-28 ">
          <ul className="menu menu-horizontal px-1  ">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About Us</a>
            </li>

            <li>
              <details>
                <summary>Locations</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <details>
                <summary>Managed space solutions</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Partner with us </a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <a className="btn rounded-2xl w-28  ">Login</a>

          <a className="btn bg-yellow-500 rounded-3xl">
            {" "}
            <IoIosCall className="h-6 w-5" />
            Call now
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
