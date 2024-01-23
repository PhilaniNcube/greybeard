import { archivo } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { Facebook, Instagram, Mail, MailIcon, MapIcon, PhoneIcon, PinIcon, SmartphoneIcon, Twitter } from "lucide-react";
import Link from "next/link";

const ContactDetails = () => {
  return (
    <section>
      <div className="flex flex-col-reverse lg:flex-row ">
        <div className="flex flex-col w-full py-20 pl-20 text-white lg:py-36 lg:pl-32 lg:w-1/3">
          <p className="mb-10 text-2xl tracking-wider">Say Hello...</p>
          <Link
            href="mailto:info@greybeardpro.co.za"
            className="flex items-center mb-10 text-md tracking-wider gap-x-3"
            prefetch={false}
          >
            <Mail className="w-6 h-6" />
            info@greybeardpro.co.za
          </Link>
          <Link
            href="tel:+27714167448"
            className="flex items-center mb-10 text-md tracking-wider gap-x-3"
            prefetch={false}
          >
            <PhoneIcon className="w-6 h-6" />
            +27 71 416 7448
          </Link>
          <Link
            href="https://wa.me/27714167448"
            className="flex items-center mb-10 text-md tracking-wider gap-x-3"
            prefetch={false}
          >
            <SmartphoneIcon className="w-6 h-6" />
            Whatsapp
          </Link>
          <div className="flex items-start mb-10 text-md tracking-wider gap-x-3">
            <MapIcon className="w-6 h-6" />
            <p className=" mb-10 text-md tracking-wider">
              4 Antrim Road <br />
              Bryanston <br />
              Johannesburg <br />
              2191
            </p>
          </div>

          <div className="flex items-center gap-x-3">
            <Link href="www.facebook.com/">
              <Facebook className="w-12 h-12" />
            </Link>
            <Link href="www.instagram.com/">
              <Instagram className="w-12 h-12" />
            </Link>
            <Link href="www.twitter.com/">
              <Twitter className="w-12 h-12" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 px-5 py-20 bg-gray-900 lg:h-screen lg:py-36">
          <h1
            className={cn(
              "text-white font-extrabold text-5xl lg:text-[9rem] uppercase",
              archivo.className
            )}
          >
            Let&apos;s <br className="hidden lg:block" />
            <span className="lg:text-[12rem]">Get</span>
          </h1>

          <h2 className="text-5xl font-extrabold text-white uppercase lg:text-7xl outline-text">
            In Touch
          </h2>
        </div>
      </div>
    </section>
  );
};
export default ContactDetails;
