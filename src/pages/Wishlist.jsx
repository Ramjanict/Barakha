import CommonContainer from "@/components/common/CommonContainer.jsx";
import CommonSeparator from "@/components/common/CommonSeparator";
import BentoFirst from "@/section/BentoFirst";
import BentoSecond from "@/section/BentoSecond";

const Wishlist = () => {
  return (
    <div className="bg-white">
      <CommonSeparator>
        <CommonContainer>
          <div className="flex flex-col w-full gap-6 ">
            <BentoFirst />
            <BentoSecond />
            <BentoFirst />
            <BentoSecond />
          </div>
        </CommonContainer>
      </CommonSeparator>
    </div>
  );
};

export default Wishlist;
