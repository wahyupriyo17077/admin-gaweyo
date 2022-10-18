import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Card, CardBody } from "@windmill/react-ui";
import PageTitle from "../components/Typography/PageTitle";

function FinanceDashboard() {
  return (
    <>
      <PageTitle>Dashboard Finance</PageTitle>
      <div className="grid gap-4 mb-8 md:grid-cols-4">
        <Card colored className="text-black bg-white">
          <CardBody>
            <div className="w-5 h-6 mb-5 ml-5 mt-3">
              <img src="https://w7.pngwing.com/pngs/430/21/png-transparent-computer-icons-company-building-logo-company-building-blue-angle-company.png" />
            </div>
            <div className="ml-5">
              <span className="text-xl card-title font-weight-bolder text-dark-75 font-size-h2 mb-1 mt-6 d-block font-bold ">Rp 2.172.601,00</span>
              <h1 className="text-gray-400 text-s mb-3">Saldo Seluruh Pekerja</h1>
            </div>
          </CardBody>
        </Card>
        <Card colored className="text-black bg-white">
          <CardBody>
            <div className="w-5 h-6 mb-5 ml-5 mt-3">
              <img src="https://www.svgrepo.com/show/17679/user.svg" />
            </div>
            <div className="ml-5">
              <span className="text-xl card-title font-weight-bolder text-dark-75 font-size-h2 mb-1 mt-6 d-block font-bold ">Rp 1.493.115,00</span>
              <h1 className="text-gray-400 text-s">Pendapatan Seluruh Pekerja</h1>
            </div>
          </CardBody>
        </Card>
        <Card colored className="text-black bg-white">
          <CardBody>
            <div className="w-5 h-6 mb-5 ml-5 mt-3">
              <img src="https://www.svgrepo.com/show/8135/user.svg" />
            </div>
            <div className="ml-5">
              <span className="text-xl card-title font-weight-bolder text-dark-75 font-size-h2 mb-1 mt-6 d-block font-bold ">Rp 250,00</span>
              <h1 className="text-gray-400 text-s">Komisi Pemilik Referral</h1>
            </div>
          </CardBody>
        </Card>
        <Card colored className="text-black bg-white">
          <CardBody>
            <div className="w-6 h-6 mb-5 ml-5 mt-3">
              <img src="https://www.svgrepo.com/show/14476/user.svg" />
            </div>
            <div className="ml-5">
              <span className="text-xl card-title font-weight-bolder text-dark-75 font-size-h2 mb-1 mt-6 d-block font-bold ">Rp 0,00</span>
              <h1 className="text-gray-400 text-s">Komisi Pengguna Referral</h1>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default FinanceDashboard;
