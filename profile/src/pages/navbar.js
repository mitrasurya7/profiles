import React from 'react';
 const Navbar = () => {
  return (
    <div className=" p-5 flex flex-row justify-between text-white">
      <h1 className=" font-bold text-3xl">MS7.</h1>
      <div>
        <ul className="flex flex-row gap-5 text-sm font-bold text-slate-100">
          <li className="p-2 hover:text-yellow-300">
            <a href="#aboutme">ABOUT ME</a>
          </li>
          <li className="p-2 hover:text-yellow-300 " >
            <a href="#contactme">CONTACT ME</a>
          </li>
          <li className="p-2 hover:text-yellow-300">
            <a href="#">RESUME</a>
          </li>
          <li className="p-2 hover:text-yellow-300">
            <a href="#portofolio">PORTOFOLIO</a>
          </li>
          <li className="p-2 hover:text-yellow-300 border border-white">
            <a href="#contactme">HIRE ME</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar