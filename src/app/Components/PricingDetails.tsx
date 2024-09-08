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

const PricingDetails: React.FC<{ property: Property | undefined }> = ({
  property,
}) => {
  return (
    <div className="mt-8">
      <h2 className="text-3xl font-semibold">Comprehensive Pricing Details</h2>
      <p className="w-full text-sm mt-4 text-neutral-500 lg:w-[72%]">
        At Oraegbekun, transparency is key. We want you to have a clear
        understanding of all costs associated with your property investment.
        Below, we break down the pricing for Seaside Serenity Villa to help you
        make an informed decision
      </p>
      <div className="flex flex-col justify-start gap-y-[1.5rem] mt-[2.5rem]">
        <div className="w-full h-full flex justify-start items-center py-4 px-8 lg:px-3 rounded border border-neutral-900">
          <p className="text-base">Note</p>
          <p className="text-sm text-neutral-500 ml-2 pl-2 border-l border-neutral-900">
            The figures provided are estimates and may vary depending on the
            property, location, and individual circumstances.
          </p>
        </div>
        <div className="p-2 bg-neutral-950 rounded text-white">
          <div className="flex flex-col lg:flex-row justify-start items-center lg:items-start gap-y-4 gap-4 lg:gap-0">
            {/* Listing Price Section */}
            <div className="w-full lg:w-1/3 p-6 border border-neutral-900 lg:border-0 rounded">
              <h3 className="font-light text-sm text-neutral-400 mb-2">
                Listing Price
              </h3>
              <p className="text-xl">₦1,250,000</p>
              {/* <div className="w-full h-full flex flex-col justify-start items-start gap-y-4"></div> */}
            </div>
            <div className="w-full h-full flex flex-col justify-start items-center gap-y-8">
              {/* Additional Fees Section */}
              <div className="w-full p-6 lg:p-10 lg:pb-8 border border-neutral-900 rounded-lg space-y-4">
                <div>
                  <div className="flex justify-start items-center text-lg mb-2 pb-[1.75rem] border-b border-neutral-900">
                    <p className="w-full h-full flex justify-start items-center">
                      Additional Fees
                    </p>
                    <button className="hidden lg:flex justify-center items-center rounded-lg mt-2 w-full lg:w-[9rem] bg-neutral-900 hover:bg-gray-700 text-white text-sm p-3">
                      Learn More
                    </button>
                  </div>
                  <div className="flex justify-between items-start">
                    <div className="w-full h-full flex flex-col justify-start items-start gap-x-4">
                      <div className="flex flex-col justify-start items-start mt-4">
                        <p className="text-sm font-light text-neutral-400">
                          Property Transfer Tax
                        </p>
                      </div>
                      <div className="text-sm flex justify-start items-center text-neutral-500 gap-x-[1rem] mt-2">
                        <p className="font-normal text-white text-lg">
                          ₦25,000
                        </p>
                        <p className="w-full lg:w-[10.5rem] text-xs lg:bg-neutral-900 rounded-full flex justify-start lg:justify-center lg:items-center lg:border border-neutral-900 p-2">
                          Based on the sale price and local regulations
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-full flex flex-col justify-start items-start gap-x-4 pl-[1.5rem] border-l border-neutral-900">
                      <div className="flex flex-col justify-start items-start mt-4">
                        <p className="text-sm font-light text-neutral-400">
                          Legal Fees
                        </p>
                      </div>
                      <div className="text-sm flex justify-start items-center text-neutral-500 gap-x-[1rem] mt-2">
                        <p className="font-normal text-white text-lg">
                          ₦3,000{" "}
                        </p>
                        <p className="w-full lg:w-[10.5rem] text-xs lg:bg-neutral-900 rounded-full flex justify-start lg:justify-center lg:items-center lg:border border-neutral-900 p-2">
                          Approximate cost for legal services, including title
                        </p>
                      </div>
                    </div>
                  </div>
                  <button className="lg:hidden mt-2 w-full bg-neutral-900 hover:bg-gray-700 text-white text-sm p-2 rounded">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Total Initial Costs Section */}
              <div className="w-full p-6 lg:p-10 lg:pb-8 border border-neutral-900 rounded-lg space-y-4">
                <div>
                  <div className="flex justify-start items-center text-lg mb-2 pb-[1.75rem] border-b border-neutral-900">
                    <p className="w-full h-full flex justify-start items-center">
                      Total Initial Costs{" "}
                    </p>
                    <button className="hidden lg:flex justify-center items-center rounded-lg mt-2 w-full lg:w-[9rem] bg-neutral-900 hover:bg-gray-700 text-white text-sm p-3">
                      Learn More
                    </button>
                  </div>
                  <div className="flex justify-between items-start">
                    <div className="w-full h-full flex flex-col justify-start items-start gap-x-4">
                      <div className="flex flex-col justify-start items-start mt-4">
                        <p className="text-sm font-light text-neutral-400">
                          Down Payment{" "}
                        </p>
                      </div>
                      <div className="text-sm flex justify-start items-center text-neutral-500 gap-x-[1rem] mt-2">
                        <p className="font-normal text-white text-lg">
                          N250,000{" "}
                        </p>
                        <p className="w-full lg:w-[10.5rem] text-xs lg:bg-neutral-900 rounded-full flex justify-start lg:justify-center lg:items-center lg:border border-neutral-900 p-2">
                          20%{" "}
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-full flex flex-col justify-start items-start gap-x-4 pl-[1.5rem] border-l border-neutral-900">
                      <div className="flex flex-col justify-start items-start mt-4">
                        <p className="text-sm font-light text-neutral-400">
                          Additional Fees{" "}
                        </p>
                      </div>
                      <div className="text-sm flex justify-start items-center text-neutral-500 gap-x-[1rem] mt-2">
                        <p className="font-normal text-white text-lg">
                          N29,700{" "}
                        </p>
                        <p className="w-full lg:w-[11.5rem] text-xs lg:bg-neutral-900 rounded-full flex justify-start lg:justify-center lg:items-center lg:border border-neutral-900 p-2">
                          Property transfer tax, legal fees, inspection,
                          insurance{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <button className="lg:hidden mt-2 w-full bg-neutral-900 hover:bg-gray-700 text-white text-sm p-2 rounded">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingDetails;
