import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
// import { BiSearch } from "react-icons/bi";
import "./Navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { categories } from "../../services/apis";
import { useSelector } from "react-redux";
import ProfileDropDown from "../Auth/ProfileDropDown";
import { apiConnector } from "../../services/apiconnector";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  // const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);

  const [subLinks, setSubLinks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API);
        setSubLinks(res.data.data);
        console.log(res);
      } catch (error) {
        console.log("Could not fetch Categories.", error);
      }
      setLoading(false);
    })();
  }, []);
  return (
    <>
      <div className="flex sticky top-[20px] mx-auto z-[1000] flex-row w-[70%] rounded-[10px] shadow-lg bg-white p-4 justify-between items-center">
        {/* logo */}
        <div className="flex flex-row justify-center items-center gap-3">
          <img src={logo} alt="logo" />
          <h1 className="font-semibold">Courseway</h1>
        </div>
        <div className="flex flex-row gap-5">
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <div className="flex flex-row cursor-pointer group relative gap-[0.5rem] items-center">
          <div className="text-[15px]">Categories</div>

          <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-white p-2 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px] border-black border">
            <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-white border-r-2 border-b-2"></div>
            {loading ? (
              <p className="text-center">Loading...</p>
            ) : subLinks.length ? (
              <>
                {subLinks
                  ?.filter((subLink) => subLink?.courses?.length > 0)
                  ?.map((subLink, i) => (
                    <Link
                      to={`/catalog/${subLink.name
                        .split(" ")
                        .join("-")
                        .toLowerCase()}`}
                      className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                      key={i}
                    >
                      <p className="font-walsheimMed font-[400] text-darkblue">{subLink.name}</p>
                    </Link>
                  ))}
              </>
            ) : (
              <p className="text-center">No Courses Found</p>
            )}
          </div>
        </div>
          <NavLink to="/pages">Pages</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <div className="flex flex-row gap-3 items-center">
        <Link to="/dashboard/cart" className="relative">
          <AiOutlineShoppingCart size={20} />
          {totalItems > 0 && (
              <span className="animate-bounce items-center flex justify-center w-5 h-5 absolute -top-3 
              left-[7.5px] rounded-full bg-[#FE794F] text-white text-[12px]">
                {totalItems}
              </span>
            )}
          </Link>
          {token === null && <Link to="/login">Log In</Link>}
          {token === null && (
            <Link
              to="/signup"
              className="text-white bg-[#FE794F] py-3 px-5 transition-all duration-300 hover:scale-110 rounded-[10px]"
            >
              Register
            </Link>
          )}
          {token !== null && <ProfileDropDown />}
        </div>
      </div>
    </>
  );
};

export default Navbar;
