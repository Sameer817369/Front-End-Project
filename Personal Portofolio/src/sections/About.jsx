import ScrollToContact from "../components/ScrollToContact";
const About = () => {
  return (
    <section
      id="about"
      className="lg:w-[80%] w-full lg:ml-56 flex xl:flex-row max-sm:w-full flex-col justify-evenly  md:-mt-10 "
    >
      <div className=" ml-32  xl:w-2/5 mt-2 max-sm:-ml-8 max-xl:padding-x  max-lg-w-full">
        <h1 className=" font-palanquin font-bold text-4xl xl:text-4xl max-sm:leading-[82px] lg:mt-5   max-sm:text-[48px]  max-md:-ml-48 md:-ml-48   max-sm:text-left  max-sm:ml-0">
          <span className="max-sm:hidden">A</span>{" "}
          <span className="max-sm:uppercase">d</span>edicated Front-end
          Developer <span className="max-sm:hidden">with passion</span> <br />
          from Kathmandu📍
        </h1>
      </div>
      <div className="w-full xl:w-2/5  ">
        <p className=" font-montserrat text-left w-[80%] leading-8 text-lg text-slate-gray md:pt-6 max-md:pt-4 ">
          I am a student with a strong focus on creating dynamic and engaging
          user experiences. Specializing in HTML, CSS, and JavaScript, I
          leverage frameworks like React to build interactive web applications.
          My proficiency in Tailwind CSS allows me to design visually appealing
          layouts that are both responsive and efficient. I strive to enhance my
          skills in the ever-evolving world of web development.
        </p>
        <div className="flex  justify-start ">
          <button
            onClick={ScrollToContact}
            className=" px-6 py-2 text-gray-800 border border-slate-gray rounded-md mt-6 hover:text-gray-500 transition duration-300"
          >
            Contact Me &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
