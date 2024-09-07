import React from "react";
import { BsSuitDiamond } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope, FaRegCircle } from "react-icons/fa6";

const ContactForm: React.FC = () => {
  return (
    <section className="w-full h-full bg-white">
      {/* mobile screen */}
      <div className="py-8 pt-[4rem] px-6 lg:hidden">
        <h2 className="text-3xl font-bold text-start text-zinc-800 mb-4">
          Let&rsquo;s Make it Happen
        </h2>
        <p className="text-start mb-6 text-zinc-800">
          Ready to take the first step toward your dream property? Fill out the
          form below, and our real estate wizards will work their magic to find
          your perfect match. Don&apos;t wait; let&apos;s embark on this
          exciting journey together.
        </p>
        <form className="gap-y-4 mb-[2rem] mx-auto flex flex-col p-[0.5rem] justify-center items-center mt-[1.25rem] border border-neutral-100 shadow-md rounded-lg">
          <div className="w-full">
            <label className="block text-zinc-800 mb-[0.65rem]">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter First Name"
              className="w-full border rounded-md p-6 text-stone-500 py-[1rem] bg-red-50 border-red-200"
            />
          </div>
          <div className="w-full">
            <label className="block text-zinc-800 mb-[0.65rem]">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter Last Name"
              className="w-full border rounded-md p-6 py-[1rem] text-stone-500 bg-red-50 border-red-200"
            />
          </div>
          <div className="w-full">
            <label className="block text-zinc-800 mb-[0.65rem]">Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full border rounded-md p-6 py-[1rem] text-stone-500 bg-red-50 border-red-200"
            />
          </div>
          <div className="w-full">
            <label className="block text-zinc-800 mb-[0.65rem]">Phone</label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="w-full border rounded-md p-6 py-[1rem] text-stone-500 bg-red-50 border-red-200"
            />
          </div>
          <div className="w-full">
            <label className="block text-zinc-800 mb-[0.65rem]">
              Preferred Loaction
            </label>
            <select className="w-full border rounded-md p-6 py-[1rem] text-stone-500 bg-red-50 border-red-200">
              <option>Abuja</option>
            </select>
          </div>
          <div className="w-full">
            <label className="block text-zinc-800 mb-[0.65rem]">
              Property Type
            </label>
            <select className="w-full border rounded-md p-6 py-[1rem] text-stone-500 bg-red-50 border-red-200">
              <option>Select Property Type</option>
            </select>
          </div>
          <div className="w-full">
            <label className="block text-zinc-800 mb-[0.65rem]">
              No. of bathrooms
            </label>
            <select className="w-full border rounded-md p-6 py-[1rem] text-stone-500 bg-red-50 border-red-200">
              <option>Select No. of bathrooms</option>
            </select>
          </div>
          <div className="w-full">
            <label className="block text-zinc-800 mb-[0.65rem]">
              No. of bedrooms
            </label>
            <select className="w-full border rounded-md p-6 py-[1rem] text-stone-500 bg-red-50 border-red-200">
              <option>Select No. of bedrooms</option>
            </select>
          </div>
          <div className="w-full">
            <label className="block text-zinc-800 mb-[0.65rem]">Budget</label>
            <select className="w-full border rounded-md p-6 py-[1rem] text-stone-500 bg-red-50 border-red-200">
              <option>Select Budget</option>
            </select>
          </div>
          <div className="w-full">
            <label className="block text-zinc-800 mb-[0.65rem]">
              Preferred Contact Method
            </label>
            <div className="w-full border flex justify-start items-center rounded-md p-6 py-[1rem] text-stone-500 bg-red-50 border-red-200">
              <FaPhoneAlt size={22} className="text-red-700 mr-2" />
              <input
                type="email"
                placeholder="Enter Your Number"
                className="w-full bg-red-50"
              />
              <FaRegCircle size={22} className="text-red-300" />
            </div>
          </div>
          <div className="w-full border flex justify-start items-center rounded-md p-6 py-[1rem] mt-[2rem] text-stone-500 bg-red-50 border-red-200">
            <FaEnvelope size={22} className="text-red-700 mr-2" />
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full bg-red-50"
            />
            <FaRegCircle size={22} className="text-red-300" />
          </div>
          <div className="w-full">
            <label className="block text-zinc-800 mb-[0.65rem]">Message</label>
            <textarea
              placeholder="Enter your Message here.."
              className="w-full border h-[7.25rem] rounded-md p-6 py-[1rem] text-stone-500 bg-red-50 border-red-200"
            />
          </div>
          <div className="w-full h-full mt-[0.75rem] flex flex-col justify-between items-center">
            <div className="w-full mb-[1rem]">
              <label className="flex items-center w-full">
                <input type="checkbox" className="mr-2 w-fit" />
                <span className="text-neutral-400">
                  I agree with Terms of Use and Privacy Policy
                </span>
              </label>
            </div>
            <div className="w-full mt-[0.75rem] mb-[1rem]">
              <button
                type="submit"
                className="w-full bg-red-700 text-white rounded-md p-4 px-7 font-light hover:bg-red-700"
              >
                Send Your Message
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* desktop screen */}
      <div className="py-[4rem] px-4 hidden lg:block">
        <div className="px-[5rem] w-full h-full flex flex-col justify-between items-center">
          <h2 className="text-3xl text-zinc-800 text-start font-bold w-full mb-4">
            Let&rsquo;s Make it Happen
          </h2>
          <p className="text-start mb-6 pr-[8rem] text-gray-800">
            Ready to take the first step toward your dream property? Fill out
            the form below, and our real estate wizards will work their magic to
            find your perfect match. Don&rsquo;t wait; let&rsquo;s embark on
            this exciting journey together.
          </p>
        </div>
        <form className="gap-y-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 mt-[2.5rem] gap-6 p-[3rem] border border-neutral-100 shadow-md rounded-lg">
          <div>
            <label className="block text-zinc-800 mb-[0.65rem]">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter First Name"
              className="w-full border rounded-md p-6 text-stone-500 py-[1rem] bg-red-50 border-red-200"
            />
          </div>
          <div>
            <label className="block text-zinc-800 mb-[0.65rem]">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter Last Name"
              className="w-full border rounded-md p-6 py-[1rem] text-stone-500 bg-red-50 border-red-200"
            />
          </div>
          <div>
            <label className="block text-zinc-800 mb-[0.65rem]">Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full border rounded-md p-6 py-[1rem] text-stone-500 bg-red-50 border-red-200"
            />
          </div>
          <div>
            <label className="block text-zinc-800 mb-[0.65rem]">Phone</label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="w-full border rounded-md p-6 py-[1rem] text-stone-500 bg-red-50 border-red-200"
            />
          </div>
          <div>
            <label className="block text-zinc-800 mb-[0.65rem]">
              Preferred Loaction
            </label>
            <select className="w-full border rounded-md p-6 py-[1rem] text-stone-500 bg-red-50 border-red-200">
              <option>Abuja</option>
            </select>
          </div>
          <div>
            <label className="block text-zinc-800 mb-[0.65rem]">
              Property Type
            </label>
            <select className="w-full border rounded-md p-6 py-[1rem] text-stone-500 bg-red-50 border-red-200">
              <option>Select Property Type</option>
            </select>
          </div>
          <div>
            <label className="block text-zinc-800 mb-[0.65rem]">
              No. of bathrooms
            </label>
            <select className="w-full border rounded-md p-6 py-[1rem] text-stone-500 bg-red-50 border-red-200">
              <option>Select No. of bathrooms</option>
            </select>
          </div>
          <div>
            <label className="block text-zinc-800 mb-[0.65rem]">
              No. of bedrooms
            </label>
            <select className="w-full border rounded-md p-6 py-[1rem] text-stone-500 bg-red-50 border-red-200">
              <option>Select No. of bedrooms</option>
            </select>
          </div>
          <div className="col-span-2">
            <label className="block text-zinc-800 mb-[0.65rem]">Budget</label>
            <select className="w-full border rounded-md p-6 py-[1rem] text-stone-500 bg-red-50 border-red-200">
              <option>Select Budget</option>
            </select>
          </div>
          <div>
            <label className="block text-zinc-800 mb-[0.65rem]">
              Preferred Contact Method
            </label>
            <div className="w-full border flex justify-start items-center rounded-md p-6 py-[1rem] text-stone-500 bg-red-50 border-red-200">
              <FaPhoneAlt size={22} className="text-red-700 mr-2" />
              <input
                type="email"
                placeholder="Enter Your Number"
                className="w-full bg-red-50"
              />
              <FaRegCircle size={22} className="text-red-300" />
            </div>
          </div>
          <div className="w-full border flex justify-start items-center rounded-md p-6 py-[1rem] mt-[2rem] text-stone-500 bg-red-50 border-red-200">
            <FaEnvelope size={22} className="text-red-700 mr-2" />
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full bg-red-50"
            />
            <FaRegCircle size={22} className="text-red-300" />
          </div>
          <div className="col-span-3">
            <label className="block text-zinc-800 mb-[0.65rem]">Message</label>
            <textarea
              placeholder="Enter your Message here.."
              className="w-full border h-[7.25rem] rounded-md p-6 py-[1rem] text-stone-500 bg-red-50 border-red-200"
            />
          </div>
          <div className="w-full col-span-4 h-full mt-[0.75rem] flex justify-between items-center">
            <div className="col-span-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 " />
                <span className="text-neutral-400">
                  I agree with Terms of Use and Privacy Policy
                </span>
              </label>
            </div>
            <div className="col-span-2">
              <button
                type="submit"
                className="w-full bg-red-700 text-white rounded-md p-4 px-7 font-light hover:bg-red-700"
              >
                Send Your Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
