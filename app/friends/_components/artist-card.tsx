import React from "react";
import Image from 'next/image'

export default function Artist({artist}:{artist:{image:string, name:string}}) {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden relative ">
        <Image
          className="w-full aspect-[3/4] object-cover"
          src={artist.image}
          width={300}
          height={450}
          alt={artist.name}
        />
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-blue-500/40 p-6">
          <div className="flex items-end h-full justify-between">
            <div className="flex items-center">
              <div className="relative"></div>
              <div className="ml-4">
                <p className="text-xl md:text-2xl font-bold text-white">
                  {artist.name}
                </p>
              </div>
            </div>
            <div className="mt-6 sm:mt-0 flex sm:block items-center"></div>
          </div>
        </div>
      </div>
    </>
  );
}
