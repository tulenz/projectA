import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBuilding } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const goToHomePage = () => {
    navigate("/");
  };

  const goToAboutPage = () => {
    navigate("/about");
  };

  const goToContactPage = () => {
    navigate("/contact");
  };

  return (
    <section className=" bg-blue-500 text-black flex w-full justify-between items-center  pr-10">
      {/* ไอคอนสำหรับเปิด dropdown */}
      <FontAwesomeIcon
        icon={faBuilding}
        onClick={goToHomePage}
        className="pl-10 min-h-[30px] cursor-pointer"
      />
      <FontAwesomeIcon
        icon={faBars}
        onClick={toggleDropdown}
        className="cursor-pointer p-2 min-h-[30px] md:hidden"
      />

      {/* เมนู dropdown */}
      {isDropdownOpen && (
        <div className=" bg-white ">
          <ul>
            <li
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={goToHomePage}
            >
              หน้าหลัก
            </li>
            <li
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={goToAboutPage}
            >
              เกี่ยวกับ
            </li>
            <li
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={goToContactPage}
            >
              ติดต่อบริษัท
            </li>
          </ul>
        </div>
      )}

      <div className="hidden md:flex gap-8 md:min-h-[80px] items-center text-[20px] lg:text-[30px]">
        <div className="cursor-pointer" onClick={goToHomePage}>
          หน้าหลัก
        </div>
        <div className="cursor-pointer" onClick={goToAboutPage}>
          เกี่ยวกับ
        </div>
        <div className="cursor-pointer" onClick={goToContactPage}>
          ติดต่อบริษัท
        </div>
      </div>
    </section>
  );
}

export default Header;
