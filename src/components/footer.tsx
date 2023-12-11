"use client";
import Image from "next/image";
import { Typography, IconButton, Button } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 bg-gray-900 px-8 pt-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
            <Typography
              as="a"
              href="https://www.material-tailwind.com"
              target="_blank"
              variant="h5"
              color="white"
              className="mb-4"
              placeholder={""}
            >
              ClashOdds Journal
            </Typography>
            <Typography color="white" className="mb-12 font-normal" placeholder={""}>
            Unlock the Future of Betting with ClashOdds Journal!
            </Typography>
          </div>
          <div className="mt-8 w-full md:mt-0 md:w-auto">
            <Typography variant="h6" color="white" className="mb-3" placeholder={""}>
              Get the app
            </Typography>
            <div className="flex flex-col gap-2">
              <Button
              placeholder={""}
                color="white"
                className="flex items-center justify-center"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-google.png"
                  className="-mt-0.5 mr-2 h-6 w-6"
                  alt="ios"
                />
                Google Play
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <Typography
          placeholder={""}
            color="white"
            className="text-center font-normal opacity-75"
          >
            &copy; {CURRENT_YEAR} Made with{" "}
            <a href="#" target="_blank">
              VirtualForge Gaming Solution
            </a>
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
