import Link from "next/link";

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
      <div className="container md:mx-auto flex justify-between items-center ">
        <div>
          <Link href={'/'}>

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
