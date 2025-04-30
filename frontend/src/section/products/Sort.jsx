import { IoGrid } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";

const Sort = ({ setSidebar, sidebar, setCard }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div
        onClick={() => {
          setSidebar((pre) => !pre);
        }}
        className={`text-2xl cursor-pointer hidden sm:block ${
          sidebar && "rotate-180"
        }`}
      >
        <span>
          <TbLayoutSidebarLeftCollapseFilled />
        </span>
      </div>

      <div className="flex items-center justify-end w-full gap-2 ">
        <div>
          <Select className="bg-red-500">
            <SelectTrigger className="w-[100px]  rounded-full">
              <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Latest</SelectItem>
              <SelectItem value="dark">Popular</SelectItem>
              <SelectItem value="system">Top rated</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <span
          onClick={() => setCard("list")}
          className="hidden text-2xl cursor-pointer sm:block"
        >
          <BsList />
        </span>
        <span
          onClick={() => setCard("grid")}
          className="hidden text-2xl cursor-pointer sm:block"
        >
          <IoGrid />
        </span>
      </div>
    </div>
  );
};

export default Sort;
