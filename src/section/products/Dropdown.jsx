import { products } from "@/store/AppStore";

const Dropdown = ({ list }) => {
  const { handleSelectTitle, selectedTitle } = products();
  return (
    <div className="ml-4 border-l border-gray-200">
      {list.map((list, i) => (
        <div
          key={i}
          className={`cursor-pointer transition-all  hover:bg-[#F4F4F5]  rounded-md `}
          onClick={() => {
            handleSelectTitle(list);
          }}
        >
          <p
            className={`py-1 px-2 my-1  rounded-md ${
              selectedTitle === list && "bg-[#F4F4F5]"
            }`}
          >
            {list}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
