import { useLoaderData } from "react-router-dom";
import { ItemCard } from "../components/ItemCard";
import { useContext } from "react";
import { CartContext } from "../layouts/RootLayout";
import { ShoppingCart } from "../components/ShoppingCart";

export function Shop() {
  const items = useLoaderData();
  const { isCartSelected, toggleCart } = useContext(CartContext);

  return (
    <>
      <main className='flex flex-wrap gap-10 justify-center p-8 mb-20'>
        {items.map((item) => (
          <ItemCard
            key={item.id}
            id={item.id}
            image={item.image}
            description={item.description}
            title={item.title}
            price={item.price}
          />
        ))}
      </main>
      {isCartSelected && <ShoppingCart />}
    </>
  );
}
