"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import Link from "next/link";

function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-gray-900 px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography
              placeholder={""}
              variant="h1"
              color="white"
              className="mb-4"
            >
              Unlock the Future of <br />
              Betting with ClashOdds App!
            </Typography>
            <Typography
              placeholder={""}
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"
            >
              Our app is here to empower you on your cock fighting for best
              strategy, anytime and anywhere.
            </Typography>
            <Typography
              placeholder={""}
              className="mb-4"
              color="white"
              variant="h6"
            >
              Get the app
            </Typography>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <Link href="https://gamepinoy.com/r/C-6A9BDEE2" passHref={true}>
                <Button
                  placeholder={""}
                  size="lg"
                  color="white"
                  className="flex justify-center items-center gap-3"
                >
                  Register
                </Button>
              </Link>

              <Link
                href="https://play.google.com/store/apps/details?id=com.iwkyra.swcclashodds&pcampaignid=web_share"
                passHref={true}
              >
                <Button
                  placeholder={""}
                  size="lg"
                  color="white"
                  className="flex justify-center items-center gap-3"
                >
                  <Image
                    width={256}
                    height={256}
                    src="/logos/logo-google.png"
                    alt="metamask"
                    className="w-6 h-6"
                  />
                  Google Play
                </Button>
              </Link>
            </div>
          </div>
          <Image
            width={470}
            height={576}
            src="/image/iphones_v1.png"
            alt="team work"
            className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <Typography
            variant="h3"
            color="blue-gray"
            className="mb-3"
            placeholder={""}
          >
            Your Trusted Companion
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-500 lg:w-5/12"
            placeholder={""}
          >
            ClashOdds isnt just a tool it&apos;s your trusted companion in the
            world of betting, guiding you towards optimal outcomes with every
            wager.
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;
