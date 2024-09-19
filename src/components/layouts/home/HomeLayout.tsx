import React from "react";
import SideMenu from "../../menu/SideMenu";
import MobileMenu from "../../menu/MobileMenu";

export default function HomeLayout() {
  return (
    <>
      <div className="md:flex hidden">
        <SideMenu />
      </div>
      <div className="md:hidden flex fixed bottom-0 w-full">
        <MobileMenu />
      </div>
    </>
  );
}
