import Link from "next/link";
import { FaDev, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";

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
        </div>
      </div>
      <div className="container md:mx-auto flex justify-between items-center ">
        <div>
          <Link href={"/"}>
            <h1 className="text-[30px] font-bold ">Gardenia Paradise </h1>
          </Link>
        </div>
        <div>
          <nav className="md:block hidden">
            <menu className="flex space-x-2 ">
              {navMenu.map((item, index) => (
                <li key={index}>
                  <Link href={"/"}>{item.name}</Link>
                </li>
              ))}
            </menu>
          </nav>
        </div>
        <div>
          <button>Book Now</button>
        </div>
      </div>
    </header>
  );
}
