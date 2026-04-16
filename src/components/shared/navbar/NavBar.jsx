import { NavLink } from "react-router";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `py-2 px-4 border-2 cursor-pointer ${isActive ? "rounded-md border-green-600 text-green-700" : "border-transparent"}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/books"}
          className={({ isActive }) =>
            `py-2 px-4 border-2 cursor-pointer ${isActive ? "rounded-md border-green-600 text-green-700" : "border-transparent"}`
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/pages-to-read"}
          className={({ isActive }) =>
            `py-2 px-4 border-2 cursor-pointer ${isActive ? "rounded-md border-green-600 text-green-700" : "border-transparent"}`
          }
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="shadow-sm">
      <div className="max-lg:collapse w-full rounded-md container mx-auto">
        <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
        <label
          htmlFor="navbar-1-toggle"
          className="fixed inset-0 hidden max-lg:peer-checked:block"
        ></label>
        <div className="collapse-title navbar">
          <div className="navbar-start">
            <label
              htmlFor="navbar-1-toggle"
              className="btn btn-ghost lg:hidden"
            >
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
            </label>
            <p className="text-xl font-bold ml-2 lg:ml-0">BookNest</p>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="text-sm menu-horizontal px-1 font-medium select-none">
              {links}
            </ul>
          </div>
          <div className="navbar-end space-x-3">
            <button className="btn bg-green-600 text-white">Sign In</button>
            <button className="btn bg-[#59C6D2] text-white hidden sm:block">
              Sign Up
            </button>
          </div>
        </div>

        <div className="collapse-content lg:hidden z-1">
          <ul className="menu">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
