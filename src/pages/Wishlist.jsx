import CommonContainer from "@/components/common/CommonContainer.jsx";
import BentoFirst from "@/section/BentoFirst";
import BentoSecond from "@/section/BentoSecond";
import WishDelete from "@/section/WishDelete";

const Wishlist = () => {
  return (
    <>
      <CommonContainer>
        <div className="w-full p-4 rounded-xl bg-custom-gradient">
          <div className="w-full p-4 flex flex-col gap-6 ">
            <BentoFirst />
            <BentoSecond />
            <BentoFirst />
            <BentoSecond />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <WishDelete />
        </div>
      </CommonContainer>
    </>
  );
};

export default Wishlist;
