import { RxAvatar } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex flex-col items-start lg:flex-row bg-base-100 mt-5 lg:mt-10">
      <div className="lg:w-1/2">
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
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl lg:text-4xl font-extrabold">Chef's Table</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Recipes</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Search</a>
          </li>
        </ul>
      </div>
      <div className="flex justify-end lg:gap-3 lg:w-1/2">
        <label className="input rounded-full flex items-center gap-2 bg-[#150B2B0D]">
        <IoSearchOutline />
          <input type="text" className="grow" placeholder="Search" />
        </label>

        <button className="rounded-full p-2 text-3xl bg-[#0BE58A]">
          <RxAvatar />
        </button>
      </div>
    </div>
  );
};

export default Header;
