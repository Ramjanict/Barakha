import BarakaPagination from "@/section/BarakaPagination.jsx";
import Card from "@/components/Card";
import CommonContainer from "@/common/CommonContainer";
import CommonSeparator from "@/common/CommonSeparator";
import HomeSlider from "@/components/HomeSlider";
import { products } from "@/store/AppStore";

const Home = () => {
  const { data } = products();

  return (
    <div className="">
      <HomeSlider />
      <CommonContainer>
        <CommonSeparator>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data.map((item, i) => (
              <Card product={item} key={i} id={item.id} />
            ))}
          </div>
          <BarakaPagination />
        </CommonSeparator>
      </CommonContainer>
    </div>
  );
};

export default Home;
