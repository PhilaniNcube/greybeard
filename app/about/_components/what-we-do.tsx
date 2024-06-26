import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import CreativeCornerModal from "./creative-corner-modal";
import TalentManagementModal from "./talent-management-modal";
import EventManagementModal from "./event-management-modal";
import DigitalMarketingModal from "./digital-marketing-modal";
import { cn } from "@/lib/utils";
import { agrandir } from "@/app/fonts";

const WhatWeDo = () => {
  return (
    <section className="relative py-8 min-h-dvh" id="what-we-do">
      <Image
        src="/images/visor.webp"
        width={1920}
        height={1080}
        alt="Background"
        className="absolute inset-0 hidden object-cover object-top w-full lg:block"
      />
      <div className="container relative grid grid-cols-2 gap-8 py-20 h-dvh">
        <div className="hidden w-full lg:block" />
        <div className="w-full col-span-2 lg:col-span-1">
          <h1
            className={cn(
              "text-4xl lg:text-7xl text-white lg:-translate-x-6 uppercase font-extrabold tracking-wider"
            , agrandir.className)}
          >
            What We Do
          </h1>

          <p className="w-full py-4 text-sm font-medium leading-7 text-white md:text-md text-balance">
            Our team collectively has over 20 years of combined experience in
            the entertainment industry and their respective marketing fields. We
            are always ready to help you with your business goals. We understand
            that when it comes to your valuable business, you want nothing but
            the best. That is why we give our best shot with every project we
            undertake.
          </p>
          <p className="w-full py-4 text-sm font-medium leading-7 text-white md:text-md text-balance">
            Events and marketing activations are our calling! Our creative
            agency has a major focus on events and marketing campaigns
            conceptualisation. We use social media and live events to engage
            your audience on a deeper level, to inspire and connect your
            customers with you.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-8 pb-16">
            <CreativeCornerModal />
            <TalentManagementModal />
            <EventManagementModal />
            <DigitalMarketingModal />
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhatWeDo;
