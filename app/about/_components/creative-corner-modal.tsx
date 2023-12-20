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


const CreativeCornerModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full text-white bg-gradient-to-r from-black  px-6 uppercase text-lg to-yellow-400">
          Creative Corner
        </Button>
      </DialogTrigger>
      <DialogContent className="text-white backdrop-blur-lg bg-transparent backdrop-opacity-5 w-full">
        <div className="w-full flex items-end bg-transparent backdrop-opacity-5">
          <div>
            <h3 className="text-2xl font-bold">
              Send a brief to our “Creative Corner” for the following:
            </h3>
            <ul className="text-lg leading-9 font-medium">
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
        <h3 className="text-2xl px-6 text-white -translate-x-6 uppercase font-extrabold tracking-wider">
          Creative Corner
        </h3>
      </DialogContent>
    </Dialog>
  );
};
export default CreativeCornerModal;
