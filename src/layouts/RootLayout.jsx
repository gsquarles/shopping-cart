import { Outlet } from "react-router";
import { NavBar } from "./NavBar";
import { ScrollRestoration } from "react-router-dom";
import { Footer } from "./Footer";

export function RootLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
}
