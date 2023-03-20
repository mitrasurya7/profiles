import profile from "../../assets/profile.png";
import Image from "next/image";

export function Banner() {
  return (
    <section>
      <div id="profile" className="p-5">
        <div className=" absolute top-60 left-40 z-10">
          <h1 className="font-bold text-4xl text-slate-300">
            Hi I'm Mitra Surya
          </h1>
          <h1 className=" text-5xl font-bold text-yellow-400">
            Fullstack Developer Javascript
          </h1>
          <h1 className=" text-bold font-bold text-5xl">
            in Jember, Indonesia
          </h1>
          <div className="pt-5">
            <button className="border p-2 hover:text-yellow-300 font-bold hover:border-yellow-300">
              CONTACT ME
            </button>
          </div>
        </div>
      </div>
      <Image
        src={profile}
        className=" object-fill w-80 grayscale rounded-md relative mx-auto left-56"
      />
    </section>
  );
}
