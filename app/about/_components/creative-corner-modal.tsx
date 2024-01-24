"use client"

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
import { cn } from "@/lib/utils";
import { agrandir } from "@/app/fonts";


const CreativeCornerModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-6 text-sm lg:text-lg text-white uppercase rounded-full bg-gradient-to-r from-black to-yellow-400">
          Creative Corner
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full text-white bg-transparent backdrop-blur-lg backdrop-opacity-5">
        <div className="flex items-end w-full bg-transparent backdrop-opacity-5">
          <div>
            <h3 className="text-2xl font-bold">
              Send a brief to our “Creative Corner” for the following:
            </h3>
            <ul className="text-lg font-medium leading-9">
              <li>App Development</li>
              <li>Website Development</li>
              <li>Graphic Design</li>
              <li>Brand/Corporate Identity Development</li>
              <li>Photography / Videography</li>
              <li>Corporate Gifting</li>
            </ul>
          </div>
        </div>{" "}
        <Separator className="my-3" />
        <h3
          className={cn(
            "text-2xl px-6 text-white -translate-x-6 uppercase font-extrabold tracking-wider"
          , agrandir.className)}
        >
          Creative Corner
        </h3>
      </DialogContent>
    </Dialog>
  );
};
export default CreativeCornerModal;
