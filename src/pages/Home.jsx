import Card from "@/components/Card";
import CommonContainer from "@/components/common/CommonContainer";
const list = new Array(20).fill(null);
const Home = () => {
  return (
    <div className="py-5 ">
      <CommonContainer>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {list.map((item) => (
            <Card />
          ))}
        </div>
      </CommonContainer>

     
    </div>
  );
};

export default Home;
