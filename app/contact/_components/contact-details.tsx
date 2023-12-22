import Link from "next/link";

const ContactDetails = () => {
  return (
    <section>
      <div className="flex lg:flex-row flex-col-reverse  ">
        <div className="w-full flex flex-col py-20 lg:py-36 pl-20 lg:pl-32 lg:w-1/3 text-white">
          <p className="text-2xl tracking-wider mb-10">Say Hello...</p>
          <Link
            href="mailto:info@greybeardpro.co.za"
            className="text-2xl tracking-wider mb-10"
            prefetch={false}
          >
            info@greybeardpro.co.za
          </Link>
          <Link
            href="tel:+27714167448"
            className="text-2xl tracking-wider mb-10"
            prefetch={false}
          >
            +27 71 416 7448
          </Link>
          <Link
            href="https://wa.me/27714167448"
            className="text-2xl tracking-wider mb-10"
            prefetch={false}
          >
            Whatsapp
          </Link>
          <p className="text-2xl tracking-wider mt-5 mb-10">
            4 Antrim Road <br />
            Bryanston <br />
            Johannesburg <br />
            2191
          </p>
        </div>
        <div className="px-5 flex-1 lg:h-screen bg-slate-700 py-20 lg:py-36 flex flex-col justify-center items-center">
          <h1 className="text-white font-extrabold text-5xl lg:text-[9rem] uppercase">
            Let&apos;s <br className="hidden lg:block" />
            <span className="lg:text-[12rem]">Get</span>
          </h1>

          <h2 className="text-white font-extrabold text-5xl lg:text-7xl uppercase outline-text">
            In Touch
          </h2>
        </div>
      </div>
    </section>
  );
};
export default ContactDetails;
