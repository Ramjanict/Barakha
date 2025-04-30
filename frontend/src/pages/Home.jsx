import { useState } from "react";
import { products } from "@/store/AppStore";
import BarakaPagination from "@/section/BarakaPagination.jsx";
import Card from "@/components/Card";
import CommonContainer from "@/common/CommonContainer";
import CommonSeparator from "@/common/CommonSeparator";
import HomeSlider from "@/components/HomeSlider";

const Home = () => {
  const { data } = products();
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 8;
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const totalPost = data.length;
  const ProductData = data.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <HomeSlider />
      <CommonContainer>
        <CommonSeparator>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {ProductData.map((item) => (
              <Card key={item.id} product={item} id={item.id} />
            ))}
          </div>
        </CommonSeparator>
        <BarakaPagination
          postPerPage={postPerPage}
          totalPost={totalPost}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </CommonContainer>
    </div>
  );
};

export default Home;
