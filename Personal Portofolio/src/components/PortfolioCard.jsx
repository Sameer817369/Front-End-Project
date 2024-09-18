const PortfolioCard = ({ imgURL, name, label, tools, links }) => {
  return (
    <div className=" border-2 rounded-xl shadow-xl hover:scale-105 transition-transform py-16 px-14 flex flex-col lg:flex-row gap-8 w-full max-sm:w-full leading-2">
      <img src={imgURL} alt={name} width={480} height={380} />
      <div className="  mt-8 flex flex-col items-start gap-2  ">
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
          {name}
        </h3>
        <p className="mt-2 font-montserrat  text-slate-gray text-sm leading-normal">
          {label}
        </p>
        <div className="flex flex-wrap flex-1 mt-4 gap-2 w-full max-sm:w-full text-l leading-normal font-palanquin">
          {tools.map((tool, index) => (
            <span key={index} className="px-2 py-0.5 rounded-md bg-slate-200">
              {tool.tool}
            </span>
          ))}
        </div>
        <div className="mt-10  text-sm flex max-sm:flex-col gap-2">
          {links.map((link, linkID) => (
            <a
              key={linkID}
              href={link.link}
              rel={link.rel}
              target={link.target}
            >
              <button className="  px-4 py-2 text-gray-800 border border-slate-gray rounded-md max-sm:mb-2  hover:text-gray-400 transition duration-300">
                {link.name} &#8250;
              </button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
