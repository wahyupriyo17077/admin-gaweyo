import React from "react";

import CTA from "../components/CTA";
import PageTitle from "../components/Typography/PageTitle";
import SectionTitle from "../components/Typography/SectionTitle";
import { Input, HelperText, Label, Select, Textarea } from "@windmill/react-ui";

import { MailIcon } from "../icons";

function MobileSetting() {
  return (
    <>
      <PageTitle>Mobile Settings </PageTitle>

      <div className="px-4 py-3 mb-4 bg-white rounded-lg shadow-md">
        <Label>
          <span className=" text-black">mobile app version </span>
          <input className="mt-3 bg-gray-100 shadow appearance-none rounded w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" placeholder="3.2.0.3"></input>{" "}
        </Label>{" "}
        <Label>
          <span className=" text-black">force update </span>
          <input class=" mt-3 bg-gray-100 shadow appearance-none rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" placeholder="0"></input>
          <a className="text-xs">Beri Notifikasi Wajib Update Pada User versi lama</a>
        </Label>{" "}
        <Label>
          <div className="mt-4">
            <span className=" text-black">mobile maintenance setting </span>
            <input class="mt-3 bg-gray-100 shadow appearance-none rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" placeholder="0"></input>
            <a className="text-xs">Setting sedang maintenance di mobile app. Tidak Aktif (0) Aktif (1)</a>
          </div>
        </Label>{" "}
        <button class="bg-blue-500 hover:bg-blue-700 mt-10 text-white font-bold py-3 px-5 rounded focus:outline-none focus:shadow-outline" type="button" block>
          Simpan
        </button>{" "}
      </div>
    </>
  );
}

export default MobileSetting;
