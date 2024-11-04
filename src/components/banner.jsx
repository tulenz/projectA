function Banner() {
  return (
    <section className="bg-gray-200 min-h-[400px] p-10 flex flex-col items-center gap-10 lg:flex-row lg:justify-around">
      <div className="flex flex-col gap-10">
        <div className="bg-blue-500 border-solid border-[3px] border-black flex items-center shadow-lg shadow-slate-300">
          <div className="p-6 text-[30px] md:text-[40px] lg:text-[50px] font-semibold text-white underline text-transition duration-500">
            Our company !
          </div>
        </div>
        <div className="max-w-[600px] text-[20px] lg:text-[30px] text-transition duration-500 p-6 bg-white border-2 border-gray-300 rounded-lg shadow-md ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est
          quas explicabo ipsam pariatur sunt iste labore iure ut. Illum officia
          perferendis excepturi dolorum enim magni error. Rem, dicta
          perferendis!
        </div>
      </div>
      <div className=" relative flex justify-center">
        <div className="max-w-[500px] lg:max-w-[800px] z-10 ">
          <img
            src="/images/working-photo.png"
            alt=""
            className="rounded-[50px] border-4 border-blue-500 shadow-xl shadow-slate-900"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
