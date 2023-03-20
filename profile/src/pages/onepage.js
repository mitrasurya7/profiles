import { Slideshow } from "./components/slideshow";
import { Mailer } from "./components/mailer";
import { Histories } from "./components/histories";
import { Banner } from "./components/banner";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Skill } from "./components/skill";
import { Mydescribe } from "./components/mydescribe";
export function Onepage() {
  return (
    <>
      <section className="text-white p-10">
        <Navbar />
        {/* baner */}
        <Banner />
      </section>
      <Mydescribe />
      <section>
        <Skill />
        {/* History */}
        <Histories />
        <div className="bg-white p-10">
          <p className="font-bold text-2xl">Portofolio</p>
          <Slideshow />
        </div>
      </section>
      <Mailer />
      <Footer />
    </>
  );
}
