"use client";
import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { Sidebar, SidebarContent, useSidebar } from "@/components/ui/sidebar";
import {
  BanknoteArrowUp,
  CreditCard,
  Nfc,
  Plus,
  PlusIcon,
  Trash,
} from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { usePathname, useRouter } from "next/navigation";

function Confirmation({ setIsOpenConfirmation }) {
  const { cart, total, removeItem, updateNote } = useCart();
  const [confirm, setConfirm] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const router = useRouter();
  const pathName = usePathname();
  const handleConfirm = () => {
    setConfirm(true);

    setTimeout(() => {
      setConfirm(false);
    }, 1500);
  };

  useEffect(() => {
    setTimeout(() => {
      setisOpen(true);
    }, 10);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-1000 ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className={`fixed right-0 top-0 h-full w-[900px] z-50 transform transition-transform duration-1000 ${
          isClosing
            ? "translate-x-full"
            : isOpen
              ? "translate-x-0"
              : "translate-x-full"
        }`}
      >
        <Sidebar
          side="right"
          className={"w-[900px]"}
          onClick={(e) => e.stopPropagation()}
        >
          <SidebarContent className="h-full flex flex-col">
            <div className="flex h-screen overflow-hidden ">
              {/* Confirmation */}
              <div className="w-1/2  border-r border-gray-700 overflow-y-auto">
                <h1 className="text-xl font-bold mb-6"> Confirmation</h1>
                <div className="flex items-center justify-between">
                  <div className="pl-6">
                    <p>Orders #34562</p>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        router.push("/hot-dishes");
                      }}
                      className="mt-4 px-4 py-2 border border-[#FFCA40] rounded hover:bg-[#FFCA40] mx-10 cursor-pointer"
                    >
                      <PlusIcon />
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className=" p-4 rounded-xl flex flex-col gap-3"
                      >
                        {/* TOP */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={40}
                              height={40}
                              className="rounded-full"
                            />

                            <div>
                              <p className="text-black trucante w-40 text-sm">
                                {item.name}
                              </p>
                            </div>
                          </div>

                          <span className="bg-slate-400 w-10 h-10 flex items-center justify-center rounded text-black">
                            {item.qty}
                          </span>

                          <p className="text-black text-sm">
                            Rp {(item.price * item.qty).toLocaleString("id-ID")}
                          </p>
                        </div>

                        {/* NOTE */}
                        <div className="flex gap-2">
                          <input
                            value={item.note || ""}
                            onChange={(e) =>
                              updateNote(item.id, e.target.value)
                            }
                            placeholder="Order note..."
                            className="flex-1 p-2 rounded  text-gray-400 border text-sm"
                          />

                          <button
                            onClick={() => removeItem(item.id)}
                            className="w-10 h-10 flex items-center cursor-pointer justify-center border border-yellow-400 rounded"
                          >
                            <Trash className="w-4 h-4 text-red-500" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className=" flex flex-col w-[448px]  fixed bottom-0">
                  <div className="bg-gray-300 pt-3 pb-20 px-5">
                    <div className="flex items-center justify-between mb-4">
                      <p>Discount</p>
                      <p>Rp {(0).toLocaleString("id-ID")}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p>Sub total</p>
                      <span>Rp {total.toLocaleString("id-ID")}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* PAYMENT METHOD */}
              <div className="w-1/2 overflow-y-auto ">
                <div className=" pl-10 py-7">
                  <h1 className="font-bold text-2xl">Payment</h1>
                  <p>3 payment method available</p>
                </div>

                <div className="flex gap-3 mt-4 border-t pt-10 pl-10 text-black">
                  <button
                    className={
                      "w-28 h-24 border hover:border-yellow-400 cursor-pointer p-3 rounded-lg flex flex-col items-center justify-center gap-2"
                    }
                  >
                    <CreditCard className="w-6 h-6" />
                    <p className="text-sm">Credit Card</p>
                  </button>

                  <button className=" w-28 h-24 border hover:border-yellow-400 cursor-pointer p-3 rounded-lg flex flex-col items-center justify-center gap-2">
                    <Nfc />
                    <p>Paypal</p>
                  </button>

                  <button className=" w-28 h-24 border hover:border-yellow-400 cursor-pointer p-3 rounded-lg flex flex-col items-center justify-center gap-2">
                    <BanknoteArrowUp />
                    <p>Cash</p>
                  </button>
                </div>
                <div className="px-10">
                  <Field className={" mt-6"}>
                    <FieldLabel>Cardholder Name</FieldLabel>
                    <Input
                      placeholder="your name..."
                      className="flex-1 p-2 rounded  text-gray-400 border text-sm"
                    />
                  </Field>
                  <Field className={" mt-6"}>
                    <FieldLabel>Card Number</FieldLabel>
                    <Input
                      placeholder="Enter your card number..."
                      className="flex-1 p-2 rounded  text-gray-400 border text-sm"
                    />
                  </Field>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <Field>
                      <FieldLabel>Expiration Date</FieldLabel>
                      <Input
                        placeholder="Exp Date..."
                        className="flex-1 p-2 rounded  text-gray-400 border text-sm"
                      />
                    </Field>
                    <Field>
                      <FieldLabel>CVV</FieldLabel>
                      <Input
                        placeholder="Enter your CVV..."
                        className="flex-1 p-2 rounded  text-gray-400 border text-sm"
                      />
                    </Field>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-6 ">
                    <Field>
                      <FieldLabel>Order type</FieldLabel>
                      <Select defaultValue="dine in">
                        <SelectTrigger className="w-24 flex-1 p-2 rounded  text-gray-400 border text-sm ">
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
                    </Field>
                    <Field>
                      <FieldLabel>Table No</FieldLabel>
                      <Input
                        placeholder="Input table No..."
                        className="flex-1 p-2 rounded  text-gray-400 border text-sm"
                      />
                    </Field>
                  </div>
                </div>
                <div
                  className="flex px-10
             justify-between mt-10"
                >
                  <button
                    onClick={() => {
                      setIsClosing(true);

                      setTimeout(() => {
                        setIsOpenConfirmation(false);
                      }, 1000);
                    }}
                    className="w-44 h-14 border border-[#FFCA40] hover:bg-[#FFCA40] cursor-pointer px-6 py-3 rounded"
                  >
                    Cancel
                  </button>

                  <Dialog open={confirm} onOpenChange={setConfirm}>
                    <DialogContent
                      className={
                        "w-48 h-28 flex items-center justify-center text-[#FFCA40]"
                      }
                    >
                      <DialogHeader>
                        <DialogTitle>Order Success</DialogTitle>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>

                  <button
                    onClick={handleConfirm}
                    className="w-44 h-14 border border-[#FFCA40] hover:bg-[#FFCA40] cursor-pointer px-6 py-3 rounded"
                  >
                    Confirm Payment
                  </button>
                </div>
              </div>
            </div>
          </SidebarContent>
        </Sidebar>
      </div>
    </div>
  );
}

export default Confirmation;
