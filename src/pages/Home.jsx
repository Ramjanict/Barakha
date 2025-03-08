import Card from "@/components/Card";
import CommonContainer from "@/components/common/CommonContainer";
import CommonSeparator from "@/components/common/CommonSeparator";
import Ramjan, { sliderlist } from "@/components/Slider";
const list = new Array(20).fill(null);
const Home = () => {
  return (
    <div className="">
      <Ramjan />
      <CommonContainer>
        <CommonSeparator>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {sliderlist.map((item, i) => (
              <Card item={item} key={i} />
            ))}
          </div>
        </CommonSeparator>
      </CommonContainer>
    </div>
  );
};

export default Home;
