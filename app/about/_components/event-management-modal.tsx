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

const EventManagementModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full text-white bg-gradient-to-r from-black  px-6 uppercase text-lg to-yellow-400">
        Event Management
        </Button>
      </DialogTrigger>
      <DialogContent className="text-white backdrop-blur-lg bg-transparent backdrop-opacity-5 w-full">
        <div className="w-full flex items-end bg-transparent backdrop-opacity-5">
          <div>
            <ul className="text-lg leading-9 font-medium">
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
        <h3 className="text-2xl px-6 text-white -translate-x-6 uppercase font-extrabold tracking-wider">
        Event Management
        </h3>
      </DialogContent>
    </Dialog>
  );
};
export default EventManagementModal;
