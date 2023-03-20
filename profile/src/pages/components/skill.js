export function Skill() {
  return (
    <div className="flex justify-center gap-3 bg-white p-5">
      <div
        id="card"
        className=" w-56 bg-slate-50 shadow-lg p-5 rounded border  hover:bg-yellow-300 hover:shadow-2xl"
      >
        <h1 className="font-bold text-xl uppercase underline text-center mb-2">
          FrontEnd
        </h1>
        <p>I Have Lots of skills</p>
        <p> i can use library of Vue.js, Next.js, React.js JQuery and etc</p>
      </div>
      <div
        id="card"
        className="   w-56 bg-slate-50 shadow-lg p-5 rounded border  hover:bg-yellow-300 hover:shadow-2xl"
      >
        <h1 className="font-bold text-xl uppercase underline text-center mb-2">
          BackEnd
        </h1>
        <p>I Have Lots of skills</p>
        <p>
          i can use Node.Js and lots of library in node js example Bcrypt, JWT,
          Nodemailer, Socket.io etc
        </p>
      </div>
      <div
        id="card"
        className="w-56 bg-slate-50 shadow-lg p-5 rounded border   hover:bg-yellow-300 hover:shadow-2xl"
      >
        <h1 className="font-bold text-xl uppercase underline text-center mb-2">
          Mobile App
        </h1>
        <p>I Have skill of React native</p>
        <p>
          i can use library of expo and combine and other library for develops
          mobile
        </p>
      </div>
    </div>
  );
}
