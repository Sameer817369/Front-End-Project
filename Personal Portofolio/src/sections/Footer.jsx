import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className=" text-white py-8 w-[80%] max-sm:w-full  max-md:w-full mx-auto ">
      <div className="flex flex-col items-center max-w-screen-xl mx-auto">
        <div className="text-center">
          <a href="/">
            <h1 className="font-montserrat font-bold text-3xl -mt-8">
              Sameer.dev
            </h1>
          </a>
        </div>
        <div className="mt-4 w-full">
          <ul className="flex justify-center space-x-20 max-sm:space-x-5">
            {footerLinks.map((link) => (
              <li className="hover:underline" key={link.name}>
                <a href={link.link} target={link.target} rel={link.rel}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full mt-4">
          <hr className="border-t border-slate-gray" />
        </div>
        <div className="mt-4 text-center">
          <h1>&#169; 2024 Sameer. All rights reserved</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
