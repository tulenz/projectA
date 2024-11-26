import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faRocket,
  faHeart,
  faArrowUpRightDots,
} from "@fortawesome/free-solid-svg-icons";

function Skill() {
  return (
    <section className="min-h-[400px] p-10 flex flex-col bg-gray-200">
      <div className="flex flex-col gap-10 justify-center items-center">
        <div className="underline font-semibold text-[30px] md:text-[40px] lg:text-[50px]">
          Experiences & Skills
        </div>
        <div className="flex flex-col items-center gap-10 lg:flex lg:flex-row">
          <div className=" bg-orange-400 hover:bg-orange-600 duration-500 flex flex-col justify-center items-center gap-5 p-5 rounded-[20px] shadow-xl ">
            <div className="text-[30px] md:text-[40px] lg:text-[50px]">
              TeamWork
            </div>
            <div>
              <FontAwesomeIcon icon={faUserPlus} className="min-h-[50px]" />
            </div>
            <div className="text-[15px] md:text-[20px] lg:text-[25px]">
              Working with us will enhance your teamwork skills and improve
              communication efficiency.
            </div>
          </div>
          <div className=" bg-red-400 hover:bg-red-600 duration-500 flex flex-col justify-center items-center gap-5 p-5 rounded-[20px] shadow-xl ">
            <div className="text-[30px] md:text-[40px] lg:text-[50px]">
              Skills
            </div>
            <div>
              <FontAwesomeIcon icon={faRocket} className="min-h-[50px]" />
            </div>
            <div className="text-[15px] md:text-[20px] lg:text-[25px]">
              Working with us will enhance your teamwork skills and improve
              communication efficiency.
            </div>
          </div>
          <div className=" bg-purple-400 hover:bg-purple-600 duration-500 flex flex-col justify-center items-center gap-5 p-5 rounded-[20px] shadow-xl ">
            <div className="text-[30px] md:text-[40px] lg:text-[50px]">
              Mentality
            </div>
            <div>
              <FontAwesomeIcon icon={faHeart} className="min-h-[50px]" />
            </div>
            <div className="text-[15px] md:text-[20px] lg:text-[25px]">
              Working with us will enhance your teamwork skills and improve
              communication efficiency.
            </div>
          </div>
          <div className=" bg-lime-400 hover:bg-lime-600 duration-500 flex flex-col justify-center items-center gap-5 p-5 rounded-[20px] shadow-xl ">
            <div className="text-[30px] md:text-[40px] lg:text-[50px]">
              Growth
            </div>
            <div>
              <FontAwesomeIcon
                icon={faArrowUpRightDots}
                className="min-h-[50px]"
              />
            </div>
            <div className="text-[15px] md:text-[20px] lg:text-[25px]">
              Working with us will enhance your teamwork skills and improve
              communication efficiency.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
