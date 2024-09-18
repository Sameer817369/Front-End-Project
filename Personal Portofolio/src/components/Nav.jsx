import { navLinks } from "../constants";
import { github } from "../assets/icons";
import MobileNav from "./MobileNav";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <header className="padding-x py-8 z-10 w-full ">
      <nav className="flex justify-between items-center max-containe">
        <a href="/">
          {
            <h1 className=" relative font-montserrat font-bold text-3xl hover:scale-110 transition-transform">
              Sameer.dev
            </h1>
          }
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
          {navLinks.map((item) => (
            <li key={item.label}>
              {item.isExternal ? (
                <a
                  href={item.link}
                  target={item.target}
                  rel={item.rel}
                  className="font-montserrat leading-normal font-semibold text-l hover:opacity-[0.7] transition-opacity"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  to={item.href}
                  smooth={true}
                  duration={500}
                  className="font-montserrat leading-normal font-semibold text-l hover:opacity-[0.7] transition-opacity cursor-pointer"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="max-lg:hidden">
          <a
            className="flex gap-2 hover:opacity-[0.7] transition-opacity"
            href="https://github.com/Sameer817369"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} width={25} height={25} />
            <h1 className="font-montserrat font-semibold text-l">
              Sameer Parajuli
            </h1>
          </a>
        </div>

        <MobileNav />
      </nav>
    </header>
  );
};

export default Nav;
