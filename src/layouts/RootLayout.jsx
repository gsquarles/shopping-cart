import { Outlet } from "react-router";
import { NavBar } from "./NavBar";
import { ScrollRestoration } from "react-router-dom";
import { Footer } from "./Footer";
import { createContext, useState } from "react";

export const CartContext = createContext();

export function RootLayout() {
  const [isCartSelected, setIsCartSelected] = useState(false);

  function toggleCart() {
    setIsCartSelected((c) => !c);
  }
  return (
    <CartContext.Provider
      value={{ isCartSelected, setIsCartSelected, toggleCart }}
    >
      <NavBar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </CartContext.Provider>
  );
}
