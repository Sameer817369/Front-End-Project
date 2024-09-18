import { contactLinks } from "../constants";

const ContactCard = ({ imgURL, label, title, links }) => {
  return (
    <div className="flex-1 sm:w-[350] sm:min-w-[290px] shadow-3xl w-full rounded-[20px]  px-10 py-10">
      <div className=" flex w-11 h-11 justify-center items-center">
        <img src={imgURL} alt={label} width={30} height={30} />
      </div>
      <h3 className="mt-5 font-palanquin text-2xl leading-normal font-bold">
        {title}
      </h3>
      <p className="mt-3 break-words font-montserrat text-l leading-normal text-slate-gray">
        {label}
      </p>
      <div className="mt-3">
        {links.map((linkItem, index) => (
          <a
            key={index}
            href={linkItem.link}
            className=" hover:underline cursor-pointer"
            target={linkItem.target}
            rel={linkItem.rel || ""}
          >
            {linkItem.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactCard;
