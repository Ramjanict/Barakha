import { category } from "@/assets/Data";
import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import Dropdown from "./Dropdown";
import { products } from "@/store/AppStore";

const Filter = ({ sidebar, setSidebar }) => {
  const { handleSelectCategory, selectedCategory } = products();
  const [isRotated, setIsRotated] = useState({});

  const handleClick = (index) => {
    setIsRotated((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div
      className={`transition-all duration-500 hidden sm:block ${
        sidebar ? "w-fit" : "w-60"
      } bg-[#FAFAFA] shadow-[0px_0px_1px_1px_rgba(0,0,0,0.05)] rounded-md`}
    >
      <div
        className={`w-full flex flex-col ${
          sidebar && "items-center"
        } gap-2 p-2`}
      >
        {category.map((item, i) => (
          <div key={i}>
            <div
              onClick={() => {
                handleSelectCategory(item.title);
                handleClick(i);
              }}
            >
              <div
                className={`flex items-center justify-between cursor-pointer transition-all hover:bg-[#F4F4F5] p-1 rounded-md ${
                  selectedCategory === item.title && "bg-[#F4F4F5]"
                }`}
              >
                <div className="flex items-center gap-1">
                  <div
                    onClick={() => {
                      setSidebar((pre) => !pre);
                    }}
                    className="text-3xl"
                  >
                    {item.icon}
                  </div>
                  <span className={`${sidebar && "transition-all hidden"}`}>
                    {item.title}
                  </span>
                </div>
                {!sidebar && (
                  <span
                    id="arrow"
                    className={`text-xl text-gray-500 transform transition-transform duration-300 ${
                      isRotated[i] ? "rotate-90" : ""
                    }`}
                  >
                    <RiArrowRightSLine />
                  </span>
                )}
              </div>
            </div>
            {isRotated[i] && !sidebar && <Dropdown list={item.list} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
