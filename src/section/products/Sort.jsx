import { IoGrid } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IoFilterOutline } from "react-icons/io5";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";

const Sort = ({ setSidebar, sidebar }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div
        onClick={() => {
          setSidebar((pre) => !pre);
        }}
        className={`text-2xl cursor-pointer ${sidebar && "rotate-180"}`}
      >
        <span>
          <TbLayoutSidebarLeftCollapseFilled />
        </span>
      </div>
      <div className="text-xl font-medium">
        <h2 className="hidden md:block">Product title with best title</h2>
        <span className=" md:hidden">
          <IoFilterOutline />
        </span>
      </div>

      <div className="flex items-center gap-2">
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

        <span className="text-2xl cursor-pointer">
          <BsList />
        </span>
        <span className="text-2xl cursor-pointer">
          <IoGrid />
        </span>
      </div>
    </div>
  );
};

export default Sort;
