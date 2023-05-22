import { Outlet } from "react-router";
import { NavBar } from "./NavBar";
import { ScrollRestoration } from "react-router-dom";

export function RootLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <ScrollRestoration />
    </>
  );
}
