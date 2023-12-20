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

const DigitalMarketingModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full text-white bg-gradient-to-r from-black  px-6 uppercase text-lg to-yellow-400">
         Digital Marketing
        </Button>
      </DialogTrigger>
      <DialogContent className="text-white backdrop-blur-lg bg-transparent backdrop-opacity-5 w-full">
        <div className="w-full flex items-end bg-transparent backdrop-opacity-5">
          <div>
            <h3 className="text-2xl font-bold">
             Our Services:
            </h3>
            <ul className="text-lg leading-9 font-medium">
              <li>Social Media</li>
              <li>Account/Page Management</li>
              <li>Sales Driven Campaigns</li>
              <li>Advertising</li>
              <li>Influencer Marketing</li>
            </ul>
          </div>
        </div>{" "}
        <Separator className="my-3" />
        <h3 className="text-2xl px-6 text-white -translate-x-6 uppercase font-extrabold tracking-wider">
         Digital Marketing
        </h3>
      </DialogContent>
    </Dialog>
  );
};
export default DigitalMarketingModal;
