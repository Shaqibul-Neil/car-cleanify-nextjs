"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const ServicesSearching = () => {
  const router = useRouter();
  //getting other search value
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(router, searchParams, pathName);
    const searchTerm = e.target.search?.value;
    const params = new URLSearchParams(searchParams.toString());
    if (searchTerm) {
      params.set("searchTerm", searchTerm);
    } else {
      params.delete("searchTerm");
    }
    //console.log(searchTerm);
    router.push(`${pathName}?${params.toString()}`);
  };
  return (
    <div className="mb-12">
      <form onSubmit={handleSearch}>
        <div className="my-8 flex items-center justify-center">
          <input
            name="search"
            type="text"
            placeholder="Search here"
            className="py-2 px-2 bg-white text-black rounded-l-lg shadow w-150"
          />
          <button className="bg-blue-500 py-2 px-5 cursor-pointer rounded-r-lg">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServicesSearching;
