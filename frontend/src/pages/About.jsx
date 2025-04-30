import CommonContainer from "@/common/CommonContainer";
import CommonSeparator from "@/common/CommonSeparator";

const About = () => {
  return (
    <CommonContainer>
      <CommonSeparator>
        <div className="flex flex-col w-full max-w-4xl gap-4 text-lg text-justify sm:text-xl ">
          <p>
            <span className="font-semibold">Barakha Enterprise Ltd.</span> was
            established in March 2023, our mission is to serve customers
            worldwide by providing top quality minerals, metals, and
            agricultural products at competitive prices. Reputation,
            transparency and responsibility before, during and after
            transactions with customers are our core values. Commitment to
            ethical business standards is the basis for Barakha Enterprise Ltd.
            to become one of the businesses with sustainable development in the
            industry. With presence in 6 countries through our partners and
            affiliates, we today have a demonstrated global reach and scale.
          </p>
          <p>
            Our team of experienced trading professionals help clients move
            physical commodities across the world as per their requirements. We
            source from the lands of plentiful and bring/distribute it to where
            there is a demand. We have built strong connections across the globe
            due to our excellent understanding of market dynamics and highly
            efficient logistic solutions that we provide to our clients.
          </p>
        </div>
      </CommonSeparator>
    </CommonContainer>
  );
};

export default About;
