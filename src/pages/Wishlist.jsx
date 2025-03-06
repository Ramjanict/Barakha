import CommonContainer from "@/components/common/CommonContainer.jsx";
import CommonSeparator from "@/components/common/CommonSeparator";
import BentoFirst from "@/section/BentoFirst";
import BentoSecond from "@/section/BentoSecond";
import WishDelete from "@/section/WishDelete";

const Wishlist = () => {
  return (
    <div className="bg-white">
      <CommonSeparator>
        <CommonContainer>
          <div className="w-full p-4 rounded-xl ">
            <div className="flex flex-col w-full gap-6 p-4 ">
              <BentoFirst />
              <BentoSecond />
              <BentoFirst />
              <BentoSecond />
            </div>
          </div>
        </CommonContainer>
      </CommonSeparator>
    </div>
  );
};

export default Wishlist;
