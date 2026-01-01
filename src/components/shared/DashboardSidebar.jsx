import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";

const DashboardSidebar = () => {
  return (
    <div className="w-60 bg-blue-800 h-screen p-4 fixed top-0 left-0">
      <Link href={"/"}>
        <div className="flex gap-2 items-center">
          <Image
            width={60}
            height={60}
            src={logo}
            alt=""
            className="w-12 object-cover"
          />
          <h2 className="text-2xl text-center font-semibold">Car Cleanify</h2>
        </div>
      </Link>
      <div className="flex flex-col gap-2 mt-12">
        <Link href={"/dashboard/profile"}>Profile</Link>
        <Link href={"/dashboard/my-bookings"}>My Bookings</Link>
      </div>
    </div>
  );
};

export default DashboardSidebar;
