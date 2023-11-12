import React from "react";
import Image from "next/image";

function TalentCard({talent}:{talent:{name:string, image:string, description:string}}) {
  return (
    <>
      {/* Card is full width. Use in 12 col grid for best view. */}
      {/* Card code block start */}
      <div className="flex flex-col-reverse lg:flex-row w-full bg-white shadow rounded">
        <div className="w-full lg:w-1/2">
          <div className="pt-4 lg:pt-6 pb-4 lg:pb-6 pl-4 lg:pl-6 pr-4 lg:pr-6">

            <h2 className="text-gray-800  mt-4 mb-2 tracking-normal text-xl lg:text-2xl font-bold">
             {talent.name}
            </h2>
            <p className="mb-6 font-normal text-gray-800  text-sm tracking-normal w-full">
        {talent.description}
            </p>

          </div>

        </div>
        <div className="flex justify-end w-full lg:w-1/2 rounded-t lg:rounded-t-none lg:rounded-r">
          <Image
            className="w-full object-cover aspect-[3/4] rounded-t lg:rounded-r lg:rounded-t-none"
            src={talent.image}
            alt={talent.name}
            width={400}
            height={600}
          />
        </div>


      </div>
      {/* Card code block end */}
    </>
  );
}
export default TalentCard;
