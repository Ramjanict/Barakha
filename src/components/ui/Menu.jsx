import { NavLink } from "react-router-dom";
import Searchbar from "@/section/Navbar/Searchbar";

 export const navbarlists = [
   { label: "Home", link: "/" },
   { label: "About Us", link: "/about-us" },
   { label: "Products", link: "/products" },
   { label: "Career", link: "/career" },
   { label: "Contact", link: "/contact" },
   { label: "Inquire now ", link: "/inqure" },
   { label: "Wishlist", link: "/wishlist" },
 ];

const Menu = () => {
  return (
    <>
      <div className="items-center justify-between hidden gap-3 text-lg lg:flex ">
        {navbarlists.map((item, i) => (
          <NavLink to={item.link} key={i}>
            {item.label}
          </NavLink>
        ))}
        <Searchbar />
      </div>
    </>
  );
};

export default Menu;
