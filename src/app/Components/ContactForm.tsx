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
        <form className="gap-y-4 mb-[2rem] mx-auto flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-7 py-[1.85rem] md:pt-[3rem] md:pb-[2.35rem] px-12 md:px-[5rem] justify-center items-center mt-[1.25rem] border border-neutral-100 shadow-md rounded-lg">
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
          <div className="w-full">
            <label className="block text-zinc-50 mb-[0.65rem]">
              Inquiry Type
            </label>
            <select className="w-full border rounded-md p-6 py-[1rem] text-stone-500 bg-red-50 border-red-200">
              <option disabled>Select Inquiry Type</option>
              <option>Rent</option>
            </select>
          </div>
          <div className="w-full">
            <label className="block text-zinc-50 mb-[0.65rem]">
              How did you hear about us?
            </label>
            <select className="w-full border rounded-md p-6 py-[1rem] text-stone-500 bg-red-50 border-red-200">
              <option disabled>Select an option</option>
              <option>Social Media</option>
            </select>
          </div>

          <div className="w-full col-span-3">
            <label className="block text-zinc-50 mb-[0.65rem]">Message</label>
            <textarea
              placeholder="Enter your Message here.."
              className="w-full border h-[7.25rem] rounded-md p-6 py-[1rem] text-stone-500 bg-red-50 border-red-200"
            />
          </div>
          <div className="w-full col-span-3 flex flex-col md:flex-row justify-start md:justify-between items-center">
            <label className="flex justify-start items-center">
              <input type="checkbox" className="mr-2 " />
              <span className="text-neutral-400 font-light">
                I agree with Terms of Use and Privacy Policy
              </span>
            </label>
            <button className="w-fit px-5 mt-3 flex font-extralight justify-center items-center bg-red-700 hover:bg-red-600 p-4 rounded-md">
              Send Your Message
            </button>
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
            <button className="w-fit px-5 mt-3 flex font-extralight justify-center items-center bg-red-700 hover:bg-red-600 p-4 rounded-md">
              Send Your Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
