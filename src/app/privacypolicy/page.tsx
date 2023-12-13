"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

export default function Privacy() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-32 text-center">
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4"
          placeholder={""}
        >
          Privacy Policy
        </Typography>
        <Typography
          color="blue-gray"
          className="mb-2 font-bold uppercase"
          placeholder={""}
        >
          Last Updated: December 13, 2023
        </Typography>

        <div className="ml-36 mr-36 text-justify">
        <Typography
          color="blue-gray"
          className="mb-2 font-medium uppercase mt-2"
          placeholder={""}
        >
          This Privacy Policy outlines how SWC - ClashOdds ("we," "our," or
          "us") collects, uses, and safeguards information obtained from users
          of our mobile application ("the App"). By using the App, you agree to
          the terms of this Privacy Policy.
        </Typography>

        <Typography
          color="blue-gray"
          className="font-bold uppercase text-xl py-5"
          placeholder={""}
        >
          Information We Collect:
        </Typography>

        <Typography
          color="blue-gray"
          className="mb-2 font-medium uppercase mt-2"
          placeholder={""}
        >
          1. <strong>Non-Personal Information:</strong> We may collect
          non-personal information, such as device information, operating
          system, and usage patterns. This information helps us improve the
          App's functionality and enhance user experience.
        </Typography>

        <Typography
          color="blue-gray"
          className="mb-2 font-medium uppercase mt-2"
          placeholder={""}
        >
          2. <strong>User-Provided Information:</strong> The App does not
          collect any personally identifiable information. We do not request,
          store, or process any personal data such as names, addresses, or
          contact information.
        </Typography>

        <Typography
          color="blue-gray"
          className="font-bold uppercase text-xl py-5"
          placeholder={""}
        >
          How We Use Information:
        </Typography>

        <Typography
          color="blue-gray"
          className="mb-2 font-medium uppercase mt-2"
          placeholder={""}
        >
          1. <strong>Improving App Performance:</strong> Non-personal
          information is utilized to analyze trends, track user interactions,
          and enhance the overall performance of the App.
        </Typography>

        <Typography
          color="blue-gray"
          className="mb-2 font-medium uppercase mt-2"
          placeholder={""}
        >
          2. <strong>Customer Support:</strong> In the event you contact our
          customer support, we may collect information provided voluntarily to
          assist in resolving any issues or inquiries.
        </Typography>

        <Typography
          color="blue-gray"
          className="font-bold uppercase text-xl py-5"
          placeholder={""}
        >
          Information Sharing:
        </Typography>

        <Typography
          color="blue-gray"
          className="mb-2 font-medium uppercase mt-2"
          placeholder={""}
        >
          1. <strong>Third-Party Services:</strong> The App may use third-party
          services for analytics and performance monitoring. These services may
          collect non-personal information in accordance with their privacy
          policies.
        </Typography>

        <Typography
          color="blue-gray"
          className="mb-2 font-medium uppercase mt-2"
          placeholder={""}
        >
          2. <strong>Legal Requirements:</strong> We may disclose information if
          required to do so by law or in the good-faith belief that such action
          is necessary to comply with legal processes.
        </Typography>

        <Typography
          color="blue-gray"
          className="font-bold uppercase text-xl py-5"
          placeholder={""}
        >
          Security:
        </Typography>

        <Typography
          color="blue-gray"
          className="mb-2 font-medium uppercase mt-2"
          placeholder={""}
        >
          We employ industry-standard security measures to protect against
          unauthorized access, alteration, disclosure, or destruction of data.
          However, no method of transmission over the internet or electronic
          storage is entirely secure, and we cannot guarantee absolute security.
        </Typography>

        <Typography
          color="blue-gray"
          className="font-bold uppercase text-xl py-5"
          placeholder={""}
        >
          Children's Privacy:
        </Typography>

        <Typography
          color="blue-gray"
          className="mb-2 font-medium uppercase mt-2"
          placeholder={""}
        >
          The App is not intended for use by individuals under the age of 13. We
          do not knowingly collect personal information from children. If you
          believe a child has provided us with personal information, please
          contact us, and we will take steps to delete the information.
        </Typography>

        <Typography
          color="blue-gray"
          className="font-bold uppercase text-xl py-5"
          placeholder={""}
        >
          Changes to this Privacy Policy:
        </Typography>

        <Typography
          color="blue-gray"
          className="mb-2 font-medium uppercase mt-2"
          placeholder={""}
        >
          We reserve the right to update or modify this Privacy Policy at any
          time. Any changes will be reflected in the "Effective Date" at the top
          of the policy. Your continued use of the App after such modifications
          will constitute your acknowledgment of the modified policy.
        </Typography>

        <Typography
          color="blue-gray"
          className="font-bold uppercase text-xl py-5"
          placeholder={""}
        >
          Contact Us:
        </Typography>

        <Typography
          color="blue-gray"
          className="mb-2 font-medium uppercase mt-2"
          placeholder={""}
        >
          If you have any questions or concerns about this Privacy Policy,
          please contact us at administrator@clashodds.com.ph.
        </Typography>

        <p>Thank you for using SWC - ClashOdds!</p>
        </div>
      </div>
    </section>
  );
}
