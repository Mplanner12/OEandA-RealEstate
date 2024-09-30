const LetsConnect = () => {
  return (
    <section className="w-full h-full bg-white">
      <div className="py-12 px-4 lg:hidden">
        <h2 className="text-3xl font-bold text-center mb-4">Let’s Connect</h2>
        <p className="text-center mb-6">
          We&apos;re excited to connect with you and learn more about your real
          estate goals. Use the form below to get in touch.
        </p>
        <form className="gap-y-4 max-w-lg mx-auto">
          <div>
            <label className="block font-semibold">First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              className="w-full border rounded-md p-2"
            />
          </div>
          <div>
            <label className="block font-semibold">Last Name</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              className="w-full border rounded-md p-2"
            />
          </div>
          <div>
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full border rounded-md p-2"
            />
          </div>
          <div>
            <label className="block font-semibold">Phone</label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="w-full border rounded-md p-2"
            />
          </div>
          <div>
            <label className="block font-semibold">Inquiry Type</label>
            <select className="w-full border rounded-md p-2">
              <option>Select Inquiry Type</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold">
              How Did You Hear About Us?
            </label>
            <select className="w-full border rounded-md p-2">
              <option>Select</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold">Message</label>
            <textarea
              placeholder="Enter your Message here.."
              className="w-full border rounded-md p-2"
            />
          </div>
          <div>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> I agree with Terms of
              Use and Privacy Policy
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white rounded-md p-2 font-semibold hover:bg-red-600"
          >
            Send Your Message
          </button>
        </form>
      </div>
      <div className="py-[4rem] px-4 hidden lg:block">
        <div className="px-[5rem] w-full h-full flex flex-col justify-between items-center">
          <h2 className="w-full text-4xl text-start font-bold mb-4 text-gray-900">
            Let’s Connect
          </h2>
          <p className="text-start mb-6 pr-[8rem] text-gray-800">
            We&apos;re excited to connect with you and learn more about your
            real estate goals. Use the form below to get in touch with ORA
            EGBUNIKE & ASSOCIATES. Whether youre a prospective client, partner,
            or simply curious about our service&apos;s, we&apos;re here to
            answer your questions and provide the assistance you need.
          </p>
        </div>
        <form className="gap-y-4 mb-[2rem] mx-auto flex flex-col md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-x-7 py-[1.85rem] md:pt-[3rem] md:pb-[2.35rem] px-12 md:px-[5rem] justify-center items-center mt-[1.25rem] border border-neutral-100 shadow-md rounded-lg">
          <div className="w-full">
            <label className="block text-zinc-50 mb-[0.65rem]">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter First Name"
              className="w-full border rounded-md p-6 text-stone-500 py-[1rem] bg-red-50 border-red-200"
            />
          </div>
          <div className="w-full">
            <label className="block text-zinc-50 mb-[0.65rem]">Last Name</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              className="w-full border rounded-md p-6 py-[1rem] text-stone-500 bg-red-50 border-red-200"
            />
          </div>
          <div className="w-full">
            <label className="block text-zinc-50 mb-[0.65rem]">Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full border rounded-md p-6 py-[1rem] text-stone-500 bg-red-50 border-red-200"
            />
          </div>
          <div className="w-full">
            <label className="block text-zinc-50 mb-[0.65rem]">Phone</label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="w-full border rounded-md p-6 py-[1rem] text-stone-500 bg-red-50 border-red-200"
            />
          </div>
          <div className="w-full col-span-4">
            <label className="block text-zinc-50 mb-[0.65rem]">Message</label>
            <textarea
              placeholder="Enter your Message here.."
              className="w-full border h-[7.25rem] rounded-md p-6 py-[1rem] text-stone-500 bg-red-50 border-red-200"
            />
          </div>
          <div className="w-full col-span-4 flex flex-col md:flex-row justify-start md:justify-between items-center">
            <label className="flex justify-start items-center">
              <input type="checkbox" className="mr-2 " />
              <span className="text-neutral-400 font-light">
                I agree with Terms of Use and Privacy Policy
              </span>
            </label>
            <button className="w-fit text-white px-5 mt-3 flex font-extralight justify-center items-center bg-red-700 hover:bg-red-600 p-4 rounded-md">
              Send Your Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LetsConnect;
