import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import { useContext } from "react";
import { CartContext } from "./RootLayout";

export function NavBar() {
  const { isCartSelected, toggleCart } = useContext(CartContext);
  return (
    <>
      <header className=' w-full bg-gray-800 flex text-white p-8 items-center'>
        <Link
          to='/'
          className='w-1/2 text-4xl font-mono font-semibold text-teal-200 ml-4'
        >
          Faux Co.
        </Link>
        <ul className='flex w-1/2 justify-center gap-20 text-2xl items-center ml-10'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/shop'>Shop</Link>
          </li>
          <li>
            <ShoppingCartIcon
              onClick={toggleCart}
              className='h-12 w-12 bg-gray-500 p-3 rounded-full cursor-pointer '
            />
          </li>
        </ul>
      </header>
    </>
  );
}
