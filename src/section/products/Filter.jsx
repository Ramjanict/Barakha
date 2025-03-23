import { category } from "@/assets/Data";
import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import Dropdown from "./Dropdown";
const Filter = ({ sidebar, setSidebar }) => {
  const [dropdown, setDropdown] = useState(null);
  const [isRotated, setIsRotated] = useState({});

  const handleClick = (index) => {
    setIsRotated((pre) => ({
      ...pre,
      [index]: !pre[index],
    }));
    setDropdown((prev) => (prev === index ? null : index));
  };

  console.log("isRotated", isRotated);
  console.log("dropdown", dropdown);
  return (
    <div
      className={` transition-all duration-500  ${
        sidebar ? "w-fit" : "w-60"
      }  bg-[#FAFAFA] shadow-[0px_0px_1px_1px_rgba(0,0,0,0.05)] rounded-md `}
    >
      <div className={`flex flex-col ${sidebar && "items-center"} gap-2 p-2`}>
        {category.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              handleClick(i);
            }}
          >
            <div
              onClick={() => {
                setDropdown((pre) => !pre);
              }}
              className="flex items-center justify-between  cursor-pointer transition-all  hover:bg-[#F4F4F5] p-1 rounded-md "
            >
              <div className="flex items-center gap-1">
                <div className="text-3xl ">{item.icon}</div>
                <span className={`${sidebar && " transition-all  hidden"} `}>
                  {item.title}
                </span>
              </div>
              {!sidebar && (
                <span
                  id="arrow"
                  className={`text-xl text-gray-500 transform transition-transform duration-300 ${
                    isRotated[i] ? "rotate-90" : ""
                  } `}
                >
                  <RiArrowRightSLine />
                </span>
              )}
            </div>
            {isRotated[i] && !sidebar && <Dropdown />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
