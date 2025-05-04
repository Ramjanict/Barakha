import CommonHeader from "@/common/CommonHeader";
import CommonSeparator from "@/common/CommonSeparator";
import Card from "@/components/Card";
import BarakaPagination from "../BarakaPagination";
import { useState } from "react";

const RelatedProduct = ({ relatedProduct }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 8;
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const totalPost = relatedProduct.length;
  const ProductData = relatedProduct.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <CommonSeparator>
        <CommonHeader Class="mb-2">Related Product</CommonHeader>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {ProductData.map((item, i) => (
            <Card product={item} key={i} id={item.id} />
          ))}
        </div>
        <BarakaPagination
          postPerPage={postPerPage}
          totalPost={totalPost}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </CommonSeparator>
    </div>
  );
};

export default RelatedProduct;
