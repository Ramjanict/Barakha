import Sort from "./Sort";
import BarakaPagination from "@/section/BarakaPagination.jsx";
import Card from "@/components/Card";
import { products } from "@/store/AppStore";

const ProductList = ({ setSidebar, sidebar }) => {
  const { data, filterTitleBased, filterCategoryBased } = products();

  const productWithTitle = filterTitleBased();
  const productWithCategory = filterCategoryBased();

  const filteredProducts =
    productWithCategory.length > 0 ? productWithCategory : productWithTitle;

  console.log("selectedTitle", productWithTitle);
  console.log("filterCategoryBased", productWithCategory);
  return (
    <div className="flex-1 ">
      <div>
        <Sort sidebar={sidebar} setSidebar={setSidebar} />
      </div>
      <div className="grid grid-cols-1 gap-4 py-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts?.map((item, i) => (
          <Card product={item} key={i} id={item.id} />
        ))}
      </div>
      <BarakaPagination />
    </div>
  );
};

export default ProductList;
