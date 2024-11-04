function Skill() {
  return (
    <section className="min-h-[400px] p-10 flex flex-col items-center">
      <div className="flex flex-col gap-10">
        <div className="underline font-semibold text-[30px] md:text-[40px] lg:text-[50px]">
          Experiences & Skills
        </div>
        <div className="flex flex-col gap-5 lg:flex lg:flex-row">
          <div className="bg-orange-400">Team Work</div>
          <div className="bg-red-400">Skills</div>
          <div className="bg-purple-400">Mentality</div>
          <div className="bg-lime-400">Growth</div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
