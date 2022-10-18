import React from "react";

import CTA from "../components/CTA";
import PageTitle from "../components/Typography/PageTitle";
import SectionTitle from "../components/Typography/SectionTitle";
import { Input, HelperText, Label, Select, Textarea } from "@windmill/react-ui";

import { MailIcon } from "../icons";

function GeneralSetting() {
  return (
    <>
      <PageTitle>General Setting</PageTitle>

      <div className="px-4 py-3 mb-4 bg-white rounded-lg shadow-md">
        <Label>
          <span>App Name</span>
          <input className="mt-3 bg-gray-100 shadow appearance-none rounded w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" placeholder="Gaweyo Staging"></input>{" "}
        </Label>{" "}
        <Label>
          <span>app description </span>
          <input class=" mt-3 bg-gray-100 shadow appearance-none rounded w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" placeholder="Gig Jobs Platform"></input>{" "}
        </Label>{" "}
        <Label>
          <span>register </span>
          <input class="mt-3 bg-gray-100 shadow appearance-none rounded w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" placeholder="true"></input>{" "}
        </Label>{" "}
        <Label>
          <span>email verification</span>
          <input class="mt-3 bg-gray-100 shadow appearance-none rounded w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" placeholder="false"></input>{" "}
        </Label>
        <button class="bg-blue-500 hover:bg-blue-700 mt-10 text-white font-bold py-3 px-5 rounded focus:outline-none focus:shadow-outline" type="button" block>
          Simpan
        </button>{" "}
      </div>
    </>
  );
}

export default GeneralSetting;
