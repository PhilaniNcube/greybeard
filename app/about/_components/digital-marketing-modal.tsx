"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { agrandir } from "@/app/fonts";
import { cn } from "@/lib/utils";

const DigitalMarketingModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-6 text-sm lg:text-lg text-white uppercase rounded-full bg-gradient-to-r from-black to-yellow-400">
          Digital Marketing
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full text-white bg-transparent backdrop-blur-lg backdrop-opacity-5">
        <div className="flex items-end w-full bg-transparent backdrop-opacity-5">
          <div>
            <h3 className="text-2xl font-bold">Our Services:</h3>
            <ul className="text-lg font-medium leading-9">
              <li>Social Media</li>
              <li>Account/Page Management</li>
              <li>Sales Driven Campaigns</li>
              <li>Advertising</li>
              <li>Influencer Marketing</li>
            </ul>
          </div>
        </div>{" "}
        <Separator className="my-3" />
        <h3
          className={cn(
            "text-2xl px-6 text-white -translate-x-6 uppercase font-extrabold tracking-wider",
            agrandir.className
          )}
        >
          Digital Marketing
        </h3>
      </DialogContent>
    </Dialog>
  );
};
export default DigitalMarketingModal;
