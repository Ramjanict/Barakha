import { NavLink } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../../components/ui/sheet";
import { CgMenuLeftAlt } from "react-icons/cg";
const SideMenu = () => {
  return (
    <div className=" lg:hidden">
      <Sheet className="">
        <SheetTrigger asChild>
          <div className="text-4xl font-extrabold cursor-pointer text-mainColor">
            <CgMenuLeftAlt />
          </div>
        </SheetTrigger>
        <SheetContent className="px-0 ">
          <div className="flex flex-col pt-4">
            <NavLink className="p-2 hover:text-white hover:bg-mainColor">
              Home
            </NavLink>
            <NavLink className="p-2 hover:text-white hover:bg-mainColor">
              About Us
            </NavLink>
            <NavLink className="p-2 hover:text-white hover:bg-mainColor">
              Products
            </NavLink>
            <NavLink className="p-2 hover:text-white hover:bg-mainColor">
              Career
            </NavLink>
            <NavLink className="p-2 hover:text-white hover:bg-mainColor">
              Contact
            </NavLink>
            <NavLink className="p-2 hover:text-white hover:bg-mainColor">
              Inquire now
            </NavLink>
            <NavLink className="p-2 hover:text-white hover:bg-mainColor">
              Inquire now
            </NavLink>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default SideMenu;
