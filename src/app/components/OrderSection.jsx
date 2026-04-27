"use client";
import React from "react";
import { Button } from "@/components/ui/button";

import { SidebarContent, Sidebar } from "@/components/ui/sidebar";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import { ChevronUp, ChevronDown, Trash } from "lucide-react";
import Confirmation from "./Confirmation";
function OrderSection() {
  const { cart, plusQty, minusQty, removeItem, total, updateNote } = useCart();
  const [isOpenConfirmation, setIsOpenConfirmation] = React.useState(false);
  return (
    <Sidebar
      side="right"
      className="w-137.5 z-30 h-screen flex flex-col bg-black/35 "
    >
      {!isOpenConfirmation && (
        <SidebarContent className="h-full flex flex-col">
          <div className=" rounded pt-6 ">
            <h4 className="pb-3 pl-5">Order</h4>
            <div className="flex gap-10 mb-5 pl-5">
              <Button className={"text-[#FFCA40] hover:text-white"}>
                Dine In
              </Button>
              <Button>Take It</Button>
              <Button>Delivery</Button>
            </div>
            {/* cart list */}
            <div className="flex-1 overflow-y-auto gap-4 w-full pb-40">
              {cart.length === 0 ? (
                <p className="pl-5">Order is empty</p>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className=" p-3 rounded-lg flex flex-col gap-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={40}
                          height={40}
                          className="rounded"
                        />

                        <div className="min-w-0">
                          <p className="text-black text-sm truncate w-40">
                            {item.name}
                          </p>
                          <p className="text-black text-xs">
                            Rp {item.price.toLocaleString("id-ID")}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="bg-slate-400 w-10 h-10 flex items-center justify-center rounded text-black">
                          {item.qty}
                        </span>

                        <div className="flex flex-col">
                          <button onClick={() => plusQty(item.id)}>
                            <ChevronUp />
                          </button>
                          <button onClick={() => minusQty(item.id)}>
                            <ChevronDown />
                          </button>
                        </div>
                      </div>

                      <p className="text-black text-sm">
                        Rp {(item.price * item.qty).toLocaleString("id-ID")}
                      </p>
                    </div>

                    {/* Note & button */}
                    <div className="flex gap-2 items-center">
                      <input
                        placeholder="Order note..."
                        onChange={(e) => updateNote(item.id, e.target.value)}
                        className="flex-1 p-2 rounded  texFFCA40t-gray-400 border text-sm"
                      />

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 border-[#] flex items-center justify-center border-2 rounded-md w-10 h-10 cursor-pointer"
                      >
                        <Trash className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Total */}
            <div className=" flex flex-col w-[550px] fixed bottom-0">
              <div className="bg-gray-300 pt-3 px-5">
                <div className="flex items-center justify-between mb-4">
                  <p>Discount</p>
                  <p>Rp {(0).toLocaleString("id-ID")}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Sub total</p>
                  <span>Rp {total.toLocaleString("id-ID")}</span>
                </div>
                <Button
                  onClick={() => setIsOpenConfirmation(true)}
                  className={
                    "w-full bg-[#FFCA40] text-white rounded-md text-lg py-5 cursor-pointer mt-10 mb-6 hover:shadow-amber-400 hover:bg-amber-500 "
                  }
                >
                  Continue to Payment
                </Button>
              </div>
            </div>
          </div>
        </SidebarContent>
      )}
      {isOpenConfirmation && (
        <Confirmation setIsOpenConfirmation={setIsOpenConfirmation} />
      )}
    </Sidebar>
  );
}

export default OrderSection;
