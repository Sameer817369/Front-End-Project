import { Hero, About, Portfolio, Contact, Footer } from "./sections/index";
import Nav from "./components/Nav";

export default function App() {
  return (
    <main className="relative overflow-hidden ">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b ">
        <Hero />
      </section>
      <section className="padding-x py-10">
        <About />
      </section>
      <section className="padding w-full">
        <Portfolio />
      </section>
      <section className="padding-x sm:py-24 max-w-full">
        <Contact />
      </section>
      <section className="padding-x padding-t pb-8 bg-black ">
        <Footer />
      </section>
    </main>
  );
}
