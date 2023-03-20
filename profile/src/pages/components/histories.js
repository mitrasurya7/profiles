export function Histories() {
  const Hacktiv8 =
    "https://sertiva.id/credential/a3e12b90-d8d0-4543-9b76-3259fe6e15b1";
  const JDicoding = "https://www.dicoding.com/certificates/N9ZO7MR5RZG5";
  return (
    <div className="bg-slate-200 p-10 shadow-xl border">
      <div className="font-bold text-slate-900 text-2xl">Histories</div>
      <div className=" w-1/2 mx-auto  text-slate-900">
        <h1 className="text-center font-semibold text-lg underline m-5 text-slate-900">
          Education Background
        </h1>
        <div className=" flex justify-between">
          <p className="font-medium">Hacktiv8 Indonesia</p>
          <p className="font-medium">October 2022 - march 2023</p>
        </div>
        <div className=" flex justify-between">
          <p className=" font-medium">Vocational High School 8 Jember</p>
          <p className="font-medium">Juli 2011 - Juni 2014</p>
        </div>
      </div>
      <div className=" w-1/2 mx-auto  text-slate-900">
        <h1 className="text-center font-semibold text-lg underline m-5 text-slate-900">
          Certificate
        </h1>
        <div className=" flex justify-between">
          <a href={Hacktiv8} className="font-medium hover:text-yellow-700">
            Graduate Of Hacktiv8
          </a>
          <p className="font-medium">October 2022 - march 2023</p>
        </div>
        <div className=" flex justify-between">
          <a href={JDicoding} className="font-medium hover:text-yellow-700">
            Javascript from Dicoding
          </a>
          <p className="font-medium">22 Juni 2022</p>
        </div>
      </div>
    </div>
  );
}
