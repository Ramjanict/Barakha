import { category } from "@/assets/Data";

const Filter = () => {
  return (
    <div className="w-[250px] hidden lg:block ">
      <div className="flex flex-col gap-4 ">
        {category.map((category) => (
          <div className="flex items-center ">
            <div>{category.icon}</div>
            <h2 className="px-2 py-1">{category.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
{
  /* <div className="w-[250px] hidden lg:block ">
<div className="flex flex-col gap-4 ">
  {category.map((category) => (
    <div className="flex items-center ">
      <div>{category.icon}</div>
      <h2 className="px-2 py-1">{category.title}</h2>
    </div>
  ))}
</div>
</div> */
}
