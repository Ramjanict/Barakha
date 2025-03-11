import { NavLink } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "../../components/ui/sheet";
import { CgMenuLeftAlt } from "react-icons/cg";
import { navbarlists } from "@/components/ui/Menu";
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
            {navbarlists.map((item, i) => (
              <SheetClose asChild>
                <NavLink
                  asChild
                  to={item.link}
                  key={i}
                  className="p-2 hover:text-white hover:bg-mainColor"
                >
                  {item.label}
                </NavLink>
              </SheetClose>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default SideMenu;
