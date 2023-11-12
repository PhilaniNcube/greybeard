export default function ContactPage() {
  return (
    <main className="">
      <div className="relative flex justify-start items-start flex-col py-12">

        <div className="w-full lg:w-3/4 relative z-10 flex justify-start items-start flex-col px-4 md:px-6 xl:px-20">
          <h1 className="text-xl md:text-2xl xl:text-4xl font-extrabold leading-5 md:leading-6 xl:leading-9 text-center text-gray-800">
            Contact us
          </h1>
          <div className="mt-8 xl:mt-10 w-48 space-y-4 flex flex-col items-start justify-start">
            <p className="text-lg xl:text-xl leading-4 xl:leading-5 text-gray-800">
              Phone Number
            </p>
            <p className="text-base leading-normal text-gray-600">
              +27 71 416 7448
            </p>
          </div>
          <h1 className="mt-10 md:mt-12 xl:mt-14 text-xl xl:text-2xl leading-5 xl:leading-normal text-gray-800">
            Drop us a line
          </h1>
          <div className="mt-6 xl:mt-8 flex w-full flex-col justify-start items-start space-y-4 md:space-y-6 xl:space-y-8">
            <div className="flex w-full jusitfy-start items-start space-x-4 md:space-x-6 xl:space-x-8">
              <input
                type="text"
                name="name"
                className="px-4  md:px-5 xl:px-6  border border-gray-300 h-11 md:h-12 xl:h-14 flex justify-start w-full focus:outline-none items-center placeholder-gray-400 text-base md:text-lg xl:text-xl leading-4 xl:leading-5 text-gray-800"
                placeholder="Name"
              />
              <input
                type="email"
                name="email"
                className="px-4  md:px-5 xl:px-6 border border-gray-300 h-11 md:h-12 xl:h-14 flex justify-start w-full focus:outline-none items-center placeholder-gray-400 text-base md:text-lg xl:text-xl leading-4 xl:leading-5 text-gray-800"
                placeholder="Email"
              />
            </div>
            <div className="w-full">
              <textarea
                name="message"
                className="resize-none pb-32 md:pb-36 xl:pb-48 p-3 md:pt-5 xl:pt-6  md:px-5 xl:px-6  border border-gray-300 flex justify-start w-full focus:outline-none  items-start placeholder-gray-400 text-base md:text-lg xl:text-xl leading-4 xl:leading-5 text-gray-800"
                placeholder="Message"
                defaultValue={" "}
              />
            </div>
          </div>
          <button className="mt-6 w-full sm:w-48 h-11 bg-blue-600 text-center text-lg leading-none text-white hover:bg-gray-700 focus:bg-gray-900">
            Submit
          </button>
        </div>
      </div>
    </main>
  );
}
