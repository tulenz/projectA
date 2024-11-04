function Intro() {
  return (
    <section className="bg-gray-200 min-h-[400px] flex flex-col justify-center items-center p-10 gap-10 ">
      <div className="text-[40px] md:text-[60px] lg:text-[80px] text-transition duration-500 font-bold">
        <span className=" ">Great </span>
        <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
          Product{" "}
        </span>
        <span className=" ">is </span>
        <br />
        <span className=" ">Built by Great </span>
        <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
          Teams{" "}
        </span>
      </div>
      <div className="text-[20px]">
        We help build and manage a team of world-class developers to bring your
        vison to life
      </div>
      <div>
        <button className="bg-purple-400 p-5 rounded-[20px] shadow-xl hover:bg-purple-600 w-[150px] md:w-[200px] lg:w-[300px] width-transition duration-500 md:text-[20px] lg:text-[30px] font-semibold">
          Join Us!
        </button>
      </div>
      <div className="max-w-[600px]">
        <img src="/images/team.png" alt="" className="" />
      </div>
    </section>
  );
}

export default Intro;
