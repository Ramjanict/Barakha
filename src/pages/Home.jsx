import BarakaPagination from "@/section/BarakaPagination.jsx";
import Card from "@/components/Card";
import CommonContainer from "@/common/CommonContainer";
import CommonSeparator from "@/common/CommonSeparator";
import HomeSlider from "@/components/HomeSlider";
import { products } from "@/store/AppStore";
import { useState } from "react";

const Home = () => {
  const { data } = products();
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const totalPost = data.length;
  const ProductData = data.slice(firstPostIndex, lastPostIndex);

  console.log("totalPost", ProductData);
  return (
    <div className="">
      <HomeSlider />
      <CommonContainer>
        <CommonSeparator>
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
      </CommonContainer>
    </div>
  );
};

export default Home;
