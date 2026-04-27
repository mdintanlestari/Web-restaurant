"use client";

import { createContext, useContext, useEffect, useState } from "react";

const Cartcontext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // add to cart
  const addToCart = (item) => {
    setCart((prev) => {
      const exist = prev.find((i) => i.id === item.id);

      if (exist) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i,
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  //   minus qty
  const minusQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item,
      ),
    );
  };

  //   plus qty
  const plusQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  };

  //   delete
  const removeItem = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  //   total
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // update note
  const updateNote = (id, note) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, note } : item)),
    );
  };

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Cartcontext.Provider
      value={{
        cart,
        addToCart,
        minusQty,
        plusQty,
        removeItem,
        total,
        updateNote,
      }}
    >
      {children}
    </Cartcontext.Provider>
  );
};

export const useCart = () => useContext(Cartcontext);
