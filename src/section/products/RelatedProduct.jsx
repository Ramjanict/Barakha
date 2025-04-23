import CommonHeader from "@/common/CommonHeader";
import CommonSeparator from "@/common/CommonSeparator";
import Card from "@/components/Card";
import BarakaPagination from "../BarakaPagination";

const RelatedProduct = ({ Relatedproduct }) => {
  return (
    <div>
      <CommonSeparator>
        <CommonHeader Class="py-2">Related Product</CommonHeader>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Relatedproduct.map((item, i) => (
            <Card product={item} key={i} id={item.id} />
          ))}
        </div>
        <BarakaPagination />
      </CommonSeparator>
    </div>
  );
};

export default RelatedProduct;
