import Menu from "./Menu";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { HiOutlineMenu } from "react-icons/hi";

const SideMenu = () => {
  return (
    <Sheet className=" sm:hidden">
      <SheetTrigger asChild>
        <div className="text-3xl text-white cursor-pointer">
          <HiOutlineMenu />
        </div>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col gap-4">
          <Menu />
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default SideMenu;
