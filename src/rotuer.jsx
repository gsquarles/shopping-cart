import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { RootLayout } from "./layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "shop",
        element: <Shop />,
        loader: ({ request: { signal } }) => {
          return fetch("https://fakestoreapi.com/products?limit=12", {
            signal,
          });
        },
      },
    ],
  },
]);
