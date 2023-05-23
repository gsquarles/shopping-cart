export function ItemCard({ id, image, description, title, price }) {
  return (
    <div
      id={id}
      className='w-[350px] h-[450px] border-2 flex flex-col  items-center rounded-lg'
    >
      <div className=' h-3/5 border-b-4  flex justify-center items-center overflow-hidden'>
        <img src={image} alt={description} className='w-2/5' />
      </div>
      <div className='flex flex-col items-start w-full p-4'>
        <h1 className=' text-xl font-bold'>{title}</h1>
        <p className=' text-lg mt-1'>${price}</p>
      </div>
      <button className='w-[90%] bg-black text-white p-2 mt-auto mb-2 text-xl font-bold'>
        Add to Cart
      </button>
    </div>
  );
}
