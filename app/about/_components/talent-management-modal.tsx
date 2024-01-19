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
import { cn } from "@/lib/utils";
import { archivo } from "@/app/fonts";

const TalentManagementModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-6 text-lg text-white uppercase rounded-full bg-gradient-to-r from-black to-yellow-400">
          Talent Management
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full text-white bg-transparent backdrop-blur-lg backdrop-opacity-5">
        <div className="flex items-end w-full bg-transparent backdrop-opacity-5">
          <div>
            <ul className="text-lg font-medium leading-9">
              <li>Bookings Management</li>
              <li>Road Management</li>
              <li>Marketing (Brand & products/services)</li>
              <li>Brand Endorsements & Sponsorships</li>
              <li>IP Development</li>
              <li>PR</li>
              <li>Legal Support</li>
            </ul>
          </div>
        </div>{" "}
        <Separator className="my-3" />
        <h3
          className={cn(
            "text-2xl px-6 text-white -translate-x-6 uppercase font-extrabold tracking-wider",
            archivo.className
          )}
        >
          Talent Management
        </h3>
      </DialogContent>
    </Dialog>
  );
};
export default TalentManagementModal;
