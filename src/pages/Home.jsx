import { productList } from "@/assets/Data";
import BarakaPagination from "@/section/BarakaPagination.jsx";
import Card from "@/components/Card";
import CommonContainer from "@/common/CommonContainer";
import CommonSeparator from "@/common/CommonSeparator";
import HomeSlider from "@/components/HomeSlider";

const Home = () => {
  return (
    <div className="">
      <HomeSlider />
      <CommonContainer>
        <CommonSeparator>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {productList.map((item, i) => (
              <Card item={item} key={i} id={item.id} />
            ))}
          </div>
          <BarakaPagination />
        </CommonSeparator>
      </CommonContainer>
    </div>
  );
};

export default Home;
