"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  CursorArrowRaysIcon,
  HeartIcon,
  LightBulbIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: CursorArrowRaysIcon,
    title: "Simplify Your Betting Experience",
    children:
      "Gone are the days of spreadsheet chaos. ClashOdds Journal empowers you to effortlessly record and track all your bets, transforming data into valuable insights at your fingertips. Navigate the exciting world of odds and wagers with ease, whether you're a novice or a seasoned pro.",
  },
  {
    icon: LightBulbIcon,
    title: "Analytics that Propel You Forward",
    children:
      "Dive into our analytics feature to dissect your betting patterns, identify strengths, and pinpoint areas for improvement. ClashOdds doesn't just track; it propels you forward by providing actionable insights to refine your strategy. It's not just about placing bets; it's about making informed decisions that lead to triumph.",
  },
  {
    icon: LockClosedIcon,
    title: "Real-time Technology, Real-time Advantage",
    children:
      "We're committed to taking your betting experience to the next level. ClashOdds incorporates cutting-edge technology and real-time data to ensure you're always ahead of the game. Receive live updates, expert analyses, and insider tips that give you the competitive advantage needed to outsmart the odds.",
  },
  {
    icon: HeartIcon,
    title: "Personalized Progress Tracking",
    children:
      "Stay on top of your betting journey with progress tracking and personalized recommendations to keep you motivated.",
  },
];

export function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography className="mb-2 font-bold uppercase">
          Your Learning App
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Diverse Learning Resources
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 ">
          Access your learning materials on the go. Whether you&apos;re
          commuting, waiting for a friend, or just have a few minutes to spare,
          our app fits seamlessly into your busy life.
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;
