import { Link } from "react-router-dom";
import { IoBagOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>

      <li>
        <Link to="/categories">Cotegories</Link>
      </li>
      <li>
        <Link to="/Custom">Custom</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </>
  );

  return (
    <section>
      <nav className="max-w-screen-xl mx-auto navbar sticky top-0 z-50 bg-white">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>

          <Link to="/">
            <img className="w-36" src="/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden xl:flex">
          <ul className="menu menu-horizontal px-1 text-base">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <div className="mr-2 relative">
            <IoBagOutline className="text-3xl" />
            <p className="absolute right-0 -bottom-1 bg-black text-white text-[10px] rounded-full px-1">
              2
            </p>
          </div>
          <FaUserCircle className="text-3xl" />
        </div>
      </nav>
      <hr />
    </section>
  );
};

export default Navbar;
