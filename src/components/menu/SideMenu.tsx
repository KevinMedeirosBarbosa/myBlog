import React from "react";
import { CgProfile } from "react-icons/cg";
import { HomeIcon } from "@heroicons/react/24/outline";
import { MdTravelExplore } from "react-icons/md";
import { SlBell } from "react-icons/sl";
import { TbMessage } from "react-icons/tb";
import { CiBookmark } from "react-icons/ci";
import { CiViewList } from "react-icons/ci";

const navigation = [
  { name: "Home", href: "/home", icon: HomeIcon, count: "5", current: true },
  { name: "Explore", href: "#", icon: MdTravelExplore, current: false },
  {
    name: "Notifications",
    href: "#",
    icon: SlBell,
    count: "12",
    current: false,
  },
  {
    name: "Messages",
    href: "#",
    icon: TbMessage,
    count: "20+",
    current: false,
  },
  { name: "Bookmarks", href: "#", icon: CiBookmark, current: false },
  { name: "Lists", href: "#", icon: CiViewList, current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function SideMenu({ children }: any) {
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex items-center justify-between">
          <img
            src="https://seeklogo.com/images/M/MySpace-logo-709DE2C3F8-seeklogo.com.png"
            alt=""
            className="w-32 border rounded-sm"
          />
          <button className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
            <CgProfile className="w-10 h-8" />
          </button>
        </div>

        <ul role="list" className="space-y-1 flex-1 px-3">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-blue-600 text-white"
                    : "text-stone-700 hover:bg-blue-500 hover:text-white",
                  "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                )}
              >
                <item.icon
                  aria-hidden="true"
                  className={classNames(
                    item.current
                      ? "text-white"
                      : "text-stone-700 group-hover:text-white",
                    "h-6 w-6 shrink-0"
                  )}
                />
                {item.name}
                {item.count ? (
                  <span
                    aria-hidden="true"
                    className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-blue-600 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-indigo-500"
                  >
                    {item.count}
                  </span>
                ) : null}
              </a>
            </li>
          ))}
        </ul>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div className={`flex justify-between items-center w-52 ml-3`}>
            <div className="leading-4">
              <h4>John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}
