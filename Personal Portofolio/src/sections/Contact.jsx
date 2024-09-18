import ContactCard from "../components/ContactCard";
import { contactLinks } from "../constants";
const Contact = () => {
  return (
    <section id="contact">
      <div className="lg:text-left lg:ml-36  max-sm:text-left max-sm:mt-16 max-md:text-left  ">
        <p className="lg:max w-lg  text-lg font-montserrat text-slate-gray max-sm:text-sm">
          Contact
        </p>
        <h1 className="text-4xl font-palanquin font-bold max-sm:text-[45px]">
          Get in touch with me
        </h1>
        <p className="lg:max w-lg text-lg mt-2  font-montserrat text-slate-gray max-sm:text-sm">
          Let's connect
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-3 max-md:grid-cols-1 max-md:w-full  sm:grid-cols-1 grid-cols-1 sm:gap-6 gap-16 w-[80%]  mx-auto max-sm:w-full">
        {contactLinks.map((contact) => (
          <ContactCard key={contact.label} {...contact} />
        ))}
      </div>
    </section>
  );
};

export default Contact;
