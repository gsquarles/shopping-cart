import { FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className='fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white w-full text-center py-2'>
      <p className='text-sm'>&copy; 2023 gsquarles</p>
      <a
        href='https://github.com/gsquarles'
        target='_blank'
        rel='noopener noreferrer'
        className='text-white hover:text-gray-400 transition-colors duration-300'
      >
        <FaGithub className='inline-block text-2xl ml-1' />
      </a>
    </footer>
  );
}
