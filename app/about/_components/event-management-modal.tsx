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

const EventManagementModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-6 text-sm lg:text-lg text-white uppercase rounded-full bg-gradient-to-r from-black to-yellow-400">
          Event Management
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full text-white bg-transparent backdrop-blur-lg backdrop-opacity-5">
        <div className="flex items-end w-full bg-transparent backdrop-opacity-5">
          <div>
            <ul className="text-lg font-medium leading-9">
              <li>Promotional Activations</li>
              <li>Brand/Product Launches</li>
              <li>Live Shows</li>
              <li>Concerts</li>
              <li>Intimate Tailored Experiences</li>
              <li>Nightlife Experiences</li>
              <li>Entertainment Concierge</li>
              <li>Tours</li>
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
          Event Management
        </h3>
      </DialogContent>
    </Dialog>
  );
};
export default EventManagementModal;
