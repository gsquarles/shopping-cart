import { Link } from "react-router-dom";
import backgroundImg from "../imgs/background-wave.png";
import homeImg from "../imgs/homeImg.jpg";

export function Home() {
  return (
    <div
      className='min-h-screen bg-cover bg-no-repeat flex p-10 justify-center items-center -mt-20'
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className='w-1/2 flex flex-col items-center gap-5 flex-wrap'>
        <h3 className='text-2xl uppercase text-gray-500 font-semibold tracking-widest'>
          Best Online Store of The Year
        </h3>
        <h2 className='text-4xl font-black px-16 mx-14 text-center'>
          Faux clothes, real prices, real quality, for the real buyer
        </h2>
        <Link
          to='/shop'
          className=' bg-gray-800 text-white py-8 px-20 text-2xl font-bold rounded-full'
        >
          Shop Now
        </Link>
      </div>
      <div className='w-1/2'>
        <img
          src={homeImg}
          alt='Home Image'
          className=' rounded-xl shadow w-3/4'
        />
      </div>
    </div>
  );
}
