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

        {/* baner */}
        <Banner />
      </section>
      <Mydescribe />
      
      <section  id="skill" className="pt-16 bg-white  " > 
        <Skill />
        {/* History */}
        <span id="aboutme" className=" pt-20">
        <Histories />
        </span>
        <div className="bg-white p-10 pt-20" id="portofolio">
          <p className="font-bold text-2xl">Portofolio</p>
          <Slideshow />
        </div>
      </section>
      <span id="contactme" >
      <Mailer />
      </span>
      <Footer />
    </>
  );
}
