import { office } from "@/assets/Data";
import CommonContainer from "@/components/common/CommonContainer";
import CommonSeparator from "@/components/common/CommonSeparator";
import { CgMail } from "react-icons/cg";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { FaLocationDot } from "react-icons/fa6";
import ContactForm from "@/section/contact/ContactForm";
const Contact = () => {
  return (
    <div>
      <CommonContainer>
        <CommonSeparator>
          <h2 className="pb-3 text-xl font-bold sm:text-2xl md:text-4xl">
            Our Office Branches
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {office.map((item, i) => (
              <div className="p-4 rounded-md shadow hover:bg-gray-100 transition-all duration-500  hover:-translate-y-[5px]">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <div className="flex gap-[2px]">
                  <span className="pt-1">
                    <FaLocationDot />
                  </span>
                  <p>{item.address}</p>
                </div>
                <div className="flex gap-[2px]">
                  <span className="pt-1 ">
                    <CgMail />
                  </span>
                  <p>{item.email}</p>
                </div>
                <div className="flex gap-[2px]">
                  <span className="pt-1">
                    <LiaPhoneVolumeSolid />
                  </span>

                  <h2>{item.cell}</h2>
                </div>
              </div>
            ))}
          </div>
        </CommonSeparator>

        <CommonSeparator>
          <ContactForm />
        </CommonSeparator>
      </CommonContainer>
    </div>
  );
};

export default Contact;
