import Link from "next/link";
import { NavData } from "../data/navbar";

export default function Navbar() {
  const { Logo, links } = NavData;
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link href={Logo.href} className="text-[#16f2b3] text-3xl font-bold">
            {Logo.name}
          </Link>
        </div>
        <ul
          className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
          id="navbar-default"
        >
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="block px-4 py-2 no-underline outline-none hover:no-underline"
              >
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                  {link.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
