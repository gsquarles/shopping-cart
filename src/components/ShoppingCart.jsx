import { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "../layouts/RootLayout";

export function ShoppingCart() {
  const {
    isCartSelected,
    setIsCartSelected,
    toggleCart,
    cartList,
    setCartList,
  } = useContext(CartContext);
  const cartRef = useRef(null);

  //Create state for total cost
  const [totalPrice, setTotalPrice] = useState(0);

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

  const handleIncrement = (id) => {
    const updatedCartList = cartList.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setCartList(updatedCartList);
  };

  const handleDecrement = (id) => {
    const updatedCartList = cartList.map((item) => {
      if (item.id === id) {
        const updatedQuantity = item.quantity - 1;
        if (updatedQuantity <= 0) {
          // Remove the item from the cartList
          return null;
        } else {
          return { ...item, quantity: updatedQuantity };
        }
      }
      return item;
    });

    const handleTotalPrice = () => {};

    // Remove null values from the updatedCartList
    const filteredCartList = updatedCartList.filter(Boolean);

    setCartList(filteredCartList);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const item of cartList) {
      const itemPrice = parseFloat(item.price);
      const itemQuantity = item.quantity;
      const itemTotalPrice = itemPrice * itemQuantity;
      totalPrice += itemTotalPrice;
    }
    return totalPrice;
  };

  useEffect(() => {
    const newTotalPrice = calculateTotalPrice();
    setTotalPrice(newTotalPrice);
  }, [cartList]);

  return (
    <>
      <div
        className='fixed top-0 right-0 h-screen w-1/3 bg-white p-4 flex flex-col items-center'
        ref={cartRef}
      >
        {/* Your shopping cart content goes here */}
        <h2 className='text-3xl font-bold mb-4'>Your Shopping Cart</h2>
        <div className='overflow-y-auto max-h-[55vh]'>
          {cartList.map((item, index) => (
            <div key={index} className='flex mb-4 '>
              <img src={item.image} alt='item image' className='w-1/5' />
              <div className='flex flex-col items-center w-3/5'>
                <h1 className='text-xl font-bold mb-2'>
                  {item.title.length > 10
                    ? item.title.substring(0, 14) + "..."
                    : item.title}
                </h1>
                <h2 className='text-lg mb-1'>
                  ${Number(item.price).toFixed(2)}
                </h2>
                <div className='flex w-3/4 justify-evenly items-center'>
                  <button
                    id={item.id}
                    className='text-2xl font-bold bg-gray-300 py-2 px-3'
                    onClick={() => handleDecrement(item.id)}
                  >
                    -
                  </button>
                  <p className='text-xl mx-4'>{item.quantity}</p>
                  <button
                    id={item.id}
                    className='text-2xl font-bold bg-gray-300 py-2 px-3'
                    onClick={() => handleIncrement(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className=''>
          <p className='text-xl font-semibold ml-6'>
            Total: ${totalPrice.toFixed(2)}
          </p>
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
