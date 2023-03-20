import { useState } from "react";

export function Mailer() {
  const [mail, setMail] = useState({
    email: "",
    waPhone: "",
    message: "",
  });
  const changeValue = (e) => {
    const { name, value } = e.target;
    const obj = {
      ...mail,
      [name]: value,
    };
    setMail(obj);
  };
  const formMail = (e) => {
    e.preventDefault();
    console.log(mail);
  };
  return (
    <section className="text-slate-50 p-10">
      <h1 className="font-bold text-2xl">Contact us</h1>
      <div className=" w-1/2 mx-auto">
        <form onSubmit={formMail} className=" text-slate-900">
          <div>
            <label>Your Email</label>
            <input
              onChange={changeValue}
              name="email"
              type={"email"}
              className="w-full p-2 rounded-lg placeholder:font-bold"
              placeholder="insert Your email here"
            />
          </div>
          <div>
            <label>Your Whatsapp Number</label>
            <input
              type={"number"}
              onChange={changeValue}
              name="waPhone"
              className="w-full p-2 rounded-lg placeholder:font-bold text-black"
              placeholder="insert Your Whatsapp here"
            />
          </div>
          <div>
            <label>Your Messages</label>
            <textarea
              className="w-full rounded-lg h-60  text-gray-900 p-2"
              onChange={changeValue}
              name="message"
            ></textarea>
          </div>
          <button className="w-full bg-slate-300 text-gray-900 font-bold rounded-md hover:bg-yellow-500">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
