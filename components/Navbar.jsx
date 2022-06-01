import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-[#14b3d8]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src={`/assets/navLogo4.png`}
          alt="/"
          width={175}
          height={80}
          quality={100}
        />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-300"
            : "fixed right-[100%] top-0 w-full h-screen ease-in duration-300"
        }
      ></div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[75%] sm:w-[65%] md-[45%] h-screen bg-[#14b3d8] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 h-screen ease-in duration-500"
        }
      >
        <div>
          <div className="flex w-full items-center justify-between">
            <Image
              src={`/assets/navLogo4.png`}
              alt="logo"
              width="100"
              height="50"
              quality={100}
            />
            <div
              onClick={handleNav}
              className="rounded-full shadow-md shadow-gray-900 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b border-gray-900 my-4">
            <p className="w-[85%] md:w-[90%] ">Let's build something</p>
          </div>
        </div>
        <div className="py-4 flex flex-col">
          <ul className="uppercase text-[#e3e3e3]">
            <Link href="/">
              <li className="py-4 text-sm">Home</li>
            </Link>
            <Link href="/">
              <li className="py-4 text-sm">About</li>
            </Link>
            <Link href="/">
              <li className="py-4 text-sm">Skills</li>
            </Link>
            <Link href="/">
              <li className="py-4 text-sm">Projects</li>
            </Link>
            <Link href="/">
              <li className="py-4 text-sm">Contact</li>
            </Link>
          </ul>
          <div className="pt-40">
            <p className="uppercase tracking-widest text-[#e3e3e3]">
              Let's Connect
            </p>
            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
              <div className="rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineTwitter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
