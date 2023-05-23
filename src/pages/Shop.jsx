import { useLoaderData } from "react-router-dom";
import { ItemCard } from "../components/ItemCard";

export function Shop() {
  const items = useLoaderData();

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
    </>
  );
}
