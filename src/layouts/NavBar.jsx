import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/solid";

export function NavBar() {
  return (
    <header className=' w-full bg-gray-800 flex text-white p-8 items-center'>
      <Link
        to='/'
        className='w-1/2 text-4xl font-mono font-semibold text-teal-200 ml-4'
      >
        Faux Co.
      </Link>
      <ul className='flex w-1/2 justify-center gap-10 text-2xl items-center ml-10'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/shop'>Shop</Link>
        </li>
        <li>
          <ShoppingCartIcon className='h-12 w-12 bg-gray-500 p-3 rounded-full ' />
        </li>
      </ul>
    </header>
  );
}
