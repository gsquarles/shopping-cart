import { useContext, useEffect, useRef } from "react";
import { CartContext } from "../layouts/RootLayout";

export function ShoppingCart() {
  const { isCartSelected, setIsCartSelected, toggleCart } =
    useContext(CartContext);
  const cartRef = useRef(null);

  //Create state for total cost

  useEffect(() => {
    // Function to handle click outside of the cart
    function handleClickOutside(event) {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartSelected(false);
      }
    }

    //Attatch the click event listener
    document.addEventListener("mousedown", handleClickOutside);

    //Clean up the event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className='fixed top-0 right-0 h-screen w-1/3 bg-white p-4 flex flex-col items-center'
        ref={cartRef}
      >
        {/* Your shopping cart content goes here */}
        <h2 className='text-xl font-bold mb-4'>Your Shopping Cart</h2>
        {/* Map through Items below */}

        <div className=''>
          <p className='text-xl font-semibold'>Total: $99.99</p>
          <button className=' bg-green-400 text-white w-44 px-4 py-3 rounded mt-4 text-xl'>
            Checkout
          </button>
          <br />
          <button
            className=' bg-red-500 text-white w-44 px-4 py-3 rounded mt-4 text-xl'
            onClick={toggleCart}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}
