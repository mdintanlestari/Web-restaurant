"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname } from "next/navigation";
import { useSearch } from "../context/SearchContext";

function Navbar() {
  const today = new Date();
  const pathName = usePathname();
  const { search, setSearch } = useSearch();

  const date = today.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="fixed top-0 w-full  bg-white z-30">
      <div className="w-[600px]">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl">Made Resto</h1>
            <p>{date}</p>
          </div>

          <div className="relative left-18">
            <Search className="absolute mt-2 ml-3 text-gray-400" />
            <input
              type="text"
              value={search}
              placeholder="Search for food, coffee, etc.."
              onChange={(e) => setSearch(e.target.value)}
              className=" border rounded-lg p-2 pl-10 bg-gray-200 w-60"
            />
          </div>
        </div>

        <div className="flex gap-10 pt-5">
          <Link
            href="/hot-dishes"
            className={
              pathName === "/hot-dishes"
                ? "text-[#FFCA40] font-bold"
                : "text-black"
            }
          >
            Hot Dishes
          </Link>
          <Link
            href="/cold-dishes"
            className={
              pathName === "/cold-dishes"
                ? "text-[#FFCA40] font-bold"
                : "text-black"
            }
          >
            Cold Dishes
          </Link>
          <Link
            href="/soup"
            className={
              pathName === "/soup" ? "text-[#FFCA40] font-bold" : "text-black"
            }
          >
            Soup
          </Link>
          <Link
            href="/grill"
            className={
              pathName === "/grill" ? "text-[#FFCA40] font-bold" : "text-black"
            }
          >
            Grill
          </Link>
          <Link
            href="/appetizer"
            className={
              pathName === "/appetizer"
                ? "text-[#FFCA40] font-bold"
                : "text-black"
            }
          >
            Appetizer
          </Link>
          <Link
            href="/dessert"
            className={
              pathName === "/dessert"
                ? "text-[#FFCA40] font-bold"
                : "text-black"
            }
          >
            Dessert
          </Link>
        </div>

        <div className="flex items-center justify-between  pt-5">
          <h3 className="">Choose Dishes</h3>

          <Select defaultValue="dine in">
            <SelectTrigger className="w-24  ">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="dine in">Dine In</SelectItem>
                <SelectItem value="take it">Take It</SelectItem>
                <SelectItem value="Delivery">Delivery</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
