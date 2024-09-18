import { skillsLinks } from "../constants";
import profileImage from "../assets/images/profile.png";
const Hero = () => {
  return (
    <section className="w-full flex xl:flex-row flex-col  justify-center items-center max-md:-mt-12  max-sm:mt-0 min-h-screen gap-20">
      <div className="xl:w-2/5 flex flex-col justify-center items-start lg:w-[80%]  max-xl:padding-x pt-28 max-sm:-mt-32 ">
        <h1 className="mt-10 font-palanquin text-4xl  max-sm:text-[50px] max-sm:leading-[82px] font-bold ">
          Passionate Front-End React Developer👋
        </h1>
        <p className="font-montserrat text-slate-gray text-left text-lg leading-8 mt-6 mb-14 sm:max-w-m ">
          Hi, I'm Sameer Parajuli, a student and aspiring frontend developer. I
          specialize in React and have a passion for creating engaging user
          experiences.
        </p>
        <div className="flex flex-wrap  items-center gap-14">
          <p className="text-2xl max-sm:text-l font-palanquin font-bold">
            Skills
          </p>
          {skillsLinks.map((item, index) => (
            <div key={index}>
              <img src={item.imgUrl} width={60} height={60} />
            </div>
          ))}
        </div>
      </div>
      <div className="max-sm:flex justify-center">
        <img
          src={profileImage}
          width={350}
          alt="Profile"
          className="rounded-full max-sm:w-[60%]  max-sm:mr-4"
        />
      </div>
    </section>
  );
};

export default Hero;
