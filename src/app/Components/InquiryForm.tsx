import React from "react";

interface Property {
  id: number;
  title: string;
  slug: string;
  location: string;
  description: string;
  price: string;
  imageUrl: string;
}

const InquiryForm: React.FC<{ property: Property | undefined }> = ({
  property,
}) => {
  return (
    <div className="mt-8 lg:mt-[4.25rem]">
      <h2 className="text-3xl tracking-wide text-center">
        Inquire About Seaside Serenity Villa
      </h2>
      <form className="mt-4 gap-y-4">
        <div className="flex flex-col justify-start gap-y-4 items-center">
          <label className="flex justify-center items-center">
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
  );
};

export default InquiryForm;
