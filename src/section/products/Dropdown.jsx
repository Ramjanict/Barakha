import { products } from "@/store/AppStore";

const Dropdown = ({ list }) => {
  const { handleSelectTitle } = products();
  return (
    <div className="p-2 ml-4 border-l border-gray-200 ">
      {list.map((list, i) => (
        <p
          key={i}
          className="cursor-pointer transition-all  hover:bg-[#F4F4F5] py-1 px-2 rounded-md "
          onClick={() => {
            handleSelectTitle(list);
          }}
        >
          {list}
        </p>
      ))}
    </div>
  );
};

export default Dropdown;
