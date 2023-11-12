"use client";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { oswald } from "../fonts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const WhatWeDo = () => {

  const component = useRef(null)

  return (
    <section ref={component}>
      <div className="py-8 container">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-6">
          <div className="flex flex-col justify-center items-start">
            <h2
              className={cn(
                "text-4xl font-bold mb-4 uppercase text-blue-600",
                oswald.className
              )}
            >
              What we do
            </h2>
            <p className="text-md">
              Events and marketing activations are our calling! For all
              businesses, from small to largeenterprises, we bring your brief to
              life. Our creative agency has a major focus on eventsand marketing
              campaigns conceptualisation. We use social media and live events
              toengage your audience on a deeper level, to inspire and connect
              your customers with you.We help you reach your target audience in
              the best way possible.
            </p>
            <Image src="/images/decks.jpg" alt="Decks" width={1920} height={1280} className="w-full aspect-video mt-3" />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  <h3 className={oswald.className}>Creative Corner</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <Image
                    src="/images/creative.png"
                    alt="creative corner"
                    className="w-full aspect-video"
                    width={1456}
                    height={816}
                  />
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link href="/creative">
                  <Button
                    variant="outline"
                    type="button"
                    className="uppercase font-bold bg-blue-600 text-white"
                  >
                    View Page
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <h3 className={oswald.className}>Talent Management</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <Image
                    src="/images/talent.png"
                    alt="talent"
                    className="w-full aspect-video"
                    width={1456}
                    height={816}
                  />
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link href="/talent">
                  <Button
                    variant="outline"
                    type="button"
                    className="uppercase font-bold bg-blue-600 text-white"
                  >
                    View Page
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <h3 className={oswald.className}>Event Management</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <Image
                    src="/images/event.png"
                    alt="event"
                    className="w-full aspect-video"
                    width={1456}
                    height={816}
                  />
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link href="/event">
                  <Button
                    variant="outline"
                    type="button"
                    className="uppercase font-bold bg-blue-600 text-white"
                  >
                    View Page
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <h3 className={oswald.className}>Digital Marketing</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <Image
                    src="/images/marketing.png"
                    alt="talent"
                    className="w-full aspect-video"
                    width={1456}
                    height={816}
                  />
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link href="/marketing">
                  <Button
                    variant="outline"
                    type="button"
                    className="uppercase font-bold bg-blue-600 text-white"
                  >
                    View Page
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhatWeDo;
