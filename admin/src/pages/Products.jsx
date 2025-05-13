import { ProductTable } from "../components/ProductTable";
import { CategoryOverview } from "../components/CategoryOverview";

const Products = () => {
  return (
    <>
      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#333333] mb-4">
            Product Categories
          </h2>
          <CategoryOverview />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-[#333333] mb-4">
            Product Management
          </h2>
          <ProductTable />
        </div>
      </div>
    </>
  );
};

export default Products;
