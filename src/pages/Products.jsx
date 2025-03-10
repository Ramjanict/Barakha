import CommonContainer from "@/components/common/CommonContainer";
import Filter from "@/section/products/Filter";
import ProductList from "@/section/products/ProductList";
const Products = () => {
  return (
    <div>
      <CommonContainer>
        <div className="flex ">
          <Filter />
          <ProductList />
        </div>
      </CommonContainer>
    </div>
  );
};

export default Products;
