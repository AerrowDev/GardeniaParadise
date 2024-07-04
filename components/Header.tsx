import Link from "next/link";
import {
  FaDev,
  FaFacebookF,
  FaInstagram,
  FaRegUser,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLockOpenOutline, IoShareSocialOutline } from "react-icons/io5";

export default function Header() {
  const navMenu = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Amenties", link: "/" },
    { id: 3, name: "Menus", link: "/" },
    { id: 4, name: "Packages", link: "/" },
    { id: 5, name: "Contact Us", link: "/" },
  ];

  return (
    <header className="sticky top-0 bg-white">
      <div className="bg-[url('/assets/img/parallax6.jpg')] bg-cover bg-no-repeat w-full">
        <div className="container md:mx-auto flex justify-between py-2">
          <div className="flex items-center justify-center gap-x-4">
            <div className="flex gap-x-2 items-center text-white">
              <IoShareSocialOutline className="text-white" />
              OUR SOCIAL
            </div>
            <div className="flex gap-x-2 text-white">
              <FaFacebookF />
              <FaXTwitter />
              <FaYoutube />
              <FaInstagram />
              <Link
                href={
                  "http://www.nicdarkthemes.com/themes/hotel/wp/demo/chalet-wordpress-theme/my-account/"
                }
              >
                <FaDev />
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center gap-x-2 text-white">
            <Link href={"/"}>
              <div className="flex items-center justify-center gap-x-2">
                <FaRegUser />
                Register
              </div>
            </Link>
            <Link href={"/"}>
              <div className="flex items-center justify-center gap-x-2">
                <IoLockOpenOutline />
                Login
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="  md:mx-auto flex flex-col justify-between items-center ">
        <div className="min-h-[100px] flex items-center justify-center border-b-[1px] w-full">
          <Link href={"/"}>
            <h1 className="text-[30px] font-bold ">Gardenia Paradise </h1>
          </Link>
        </div>
        <div className="min-h-[50px] flex items-center justify-center w-full  border-b-[1px] gap-x-2.5">
          <div>
            <nav className="md:block hidden ">
              <menu className="flex space-x-2 w-full relative">
                {navMenu.map((item, index) => (
                  <li
                    key={index}
                    className="after:absolute after:w-[1px] after:h-full  after:bg-gray-300/[30] "
                  >
                    <Link
                      href={"/"}
                      className="tracking-[3px] text-[13px]/[13px] uppercase  mx-4"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </menu>
            </nav>
          </div>
          <div>
            <button className="bg-orange-700 text-white rounded-xl px-2">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
