"use client";
import Layout from "@/app/components/Layout";
import React from "react";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import { useSearch } from "../context/SearchContext";

const menus = [
  {
    id: "appetizer-1",
    name: "Bruschetta Tomato Basil",
    price: 43000,
    bowls: "20 Bowls available",
    image: "/images/menu/image1.png",
  },
  {
    id: "appetizer-2",
    name: "Garlic Bread Cheese",
    price: 35000,
    bowls: "18 Bowls available",
    image: "/images/menu/image1.png",
  },
  {
    id: "appetizer-3",
    name: "Chicken Spring Rolls",
    price: 50000,
    bowls: "15 Bowls available",
    image: "/images/menu/image1.png",
  },
  {
    id: "appetizer-4",
    name: "Mini Shrimp Cocktail",
    price: 43000,
    bowls: "19 Bowls available",
    image: "/images/menu/image1.png",
  },
  {
    id: "appetizer-5",
    name: "Stuffed Mushrooms",
    price: 35000,
    bowls: "11 Bowls available",
    image: "/images/menu/image1.png",
  },
  {
    id: "appetizer-6",
    name: "Mozzarella Sticks",
    price: 35000,
    bowls: "6 Bowls available",
    image: "/images/menu/image1.png",
  },
  {
    id: "appetizer-7",
    name: "Nachos Supreme",
    price: 43000,
    bowls: "19 Bowls available",
    image: "/images/menu/image1.png",
  },
  {
    id: "appetizer-8",
    name: "Chicken Wings BBQ",
    price: 35000,
    bowls: "11 Bowls available",
    image: "/images/menu/image1.png",
  },
  {
    id: "appetizer-9",
    name: "Mini Sandwich Platter",
    price: 35000,
    bowls: "6 Bowls available",
    image: "/images/menu/image1.png",
  },
];

function HotDishes() {
  const { addToCart } = useCart();
  const { search } = useSearch();

  const filteredmenu = menus.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <Layout>
        <div className="grid grid-cols-3 gap-6">
          {filteredmenu.map((menu, index) => (
            <div
              key={index}
              onClick={() => addToCart(menu)}
              className="rounded-xl bg-[#1f1d2b] p-6 pt-16 text-center mb-20 w-48 h-60 relative cursor-pointer transition-all duration-300 hover:-translate-y-2"
            >
              {/* IMAGE */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-35 h-35 rounded-full overflow-hidden">
                <Image
                  src={menu.image}
                  alt={menu.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* TEXT */}
              <div className="mt-16">
                <h2 className="text-white mt-4 text-sm">{menu.name}</h2>
                <p className="text-white">
                  Rp {menu.price.toLocaleString("id-ID")}
                </p>
                <p className="text-gray-400 text-sm">{menu.bowls}</p>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
}

export default HotDishes;
