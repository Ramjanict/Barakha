const ContactForm = () => {
  return (
    <form className="flex flex-col max-w-3xl gap-4 ">
      <div>
        <h2 className="text-xl font-bold sm:text-2xl md:text-4xl">
          Contact Us
        </h2>
        <p className=" sm:text-lg">
          Fill up the form below to send us a message.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <input
          className="w-full p-3 text-xl rounded-md shadow outline-none ring-1 ring-gray-200"
          type="text"
          placeholder="First name"
        />
        <input
          className="w-full p-3 text-xl rounded-md shadow outline-none ring-1 ring-gray-200"
          type="text"
          placeholder="Last name"
        />
      </div>
      <input
        className="w-full p-3 text-xl rounded-md shadow outline-none ring-1 ring-gray-200"
        type="email"
        placeholder="Your email"
      />
      <textarea
        className="w-full p-3 text-xl rounded-md shadow outline-none ring-1 ring-gray-200"
        placeholder="Your message"
        rows={10}
      />

      <button className="p-3 text-xl font-bold text-white rounded-md shadow bg-mainColor w-fit">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
