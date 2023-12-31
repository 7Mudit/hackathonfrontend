import * as Icons from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { NavLink, matchPath, useLocation } from "react-router-dom";

import { resetCourseState } from "../../slices/courseSlice";

export default function SidebarLink({ link, iconName }) {
  const Icon = Icons[iconName];
  const location = useLocation();
  const dispatch = useDispatch();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <NavLink
      to={link.path}
      onClick={() => dispatch(resetCourseState())}
      className={`relative px-8 py-3  font-medium ${
        matchRoute(link.path)
          ? "bg-[#FE794F] rounded-[16px] text-white"
          : "text-[#4F547B] font-walsheimMed"
      } transition-all text-sm duration-1000 hover:scale-95 scale-90`}
    >
      {/* <span
        className={`absolute left-0 top-0 h-full w-[0.15rem] bg-darkblue ${
          matchRoute(link.path) ? "opacity-100" : "opacity-0"
        }`}
      ></span> */}
      <div className="flex items-center gap-x-2">
        {/* Icon Goes Here */}
        <Icon
          className={`text-lg 
        ${matchRoute(link.path) ? "text-white" : "text-[#4F547B]"}
        `}
        />
        <span
          className={`${matchRoute(link.path) ? "text-white" : "text-black"}`}
        >
          {link.name}
        </span>
      </div>
    </NavLink>
  );
}
