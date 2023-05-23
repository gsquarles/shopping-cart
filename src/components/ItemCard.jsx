export function ItemCard({ id, image, description, title, price }) {
  return (
    <div
      id={id}
      className='w-[350px] h-[400px] border-2 flex flex-col  items-center rounded-lg'
    >
      <div className=' h-3/5 border-b-4  flex justify-center items-center overflow-hidden'>
        <img src={image} alt={description} className='w-2/5' />
      </div>
      <div>
        <h1>{title}</h1>
        <p>{price}</p>
      </div>
    </div>
  );
}
