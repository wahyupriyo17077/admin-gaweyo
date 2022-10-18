import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Card, CardBody } from "@windmill/react-ui";
import PageTitle from "../components/Typography/PageTitle";
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from "../icons";
import RoundIcon from "../components/RoundIcon";
import response from "../utils/demo/tableData";
import { TableBody, TableContainer, Table, TableHeader, TableCell, TableRow, TableFooter, Avatar, Badge, Pagination } from "@windmill/react-ui";

import { doughnutOptions, lineOptions, doughnutLegends, lineLegends } from "../utils/demo/chartsData";

function Dashboard() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  // pagination setup
  const resultsPerPage = 10;
  const totalResults = response.length;

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page]);

  return (
    <>
      <PageTitle>Dashboard</PageTitle>
      <div className="grid gap-4 mb-8 md:grid-cols-3">
        <Card colored className="text-black bg-white">
          <CardBody>
            <div className="w-5 h-6 mb-5 ml-5 mt-3">
              <img src="https://w7.pngwing.com/pngs/430/21/png-transparent-computer-icons-company-building-logo-company-building-blue-angle-company.png" />
            </div>
            <div className="ml-5">
              <span className="text-xl card-title font-weight-bolder text-dark-75 font-size-h2 mb-1 mt-6 d-block font-bold ">1</span>
              <h1 className="text-gray-400 text-s mb-3">Jumlah Perusahaan</h1>
            </div>
          </CardBody>
        </Card>
        <Card colored className="text-black bg-white">
          <CardBody>
            <div className="w-5 h-6 mb-5 ml-5 mt-2    ">
              <img src="https://cdn-icons-png.flaticon.com/512/17/17704.png" />
            </div>
            <div className="ml-5">
              <span className="text-xl card-title font-weight-bolder text-dark-75 font-size-h2 mb-1 mt-6 d-block font-bold ">69</span>
              <h1 className=" text-gray-400 text-s mb-3">Jumlah Pekerjaan</h1>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="grid gap-4 mb-8 md:grid-cols-3">
        <Card colored className="text-black bg-white">
          <CardBody>
            <div className="w-5 h-6 mb-5 ml-5 mt-3">
              <img src="https://www.svgrepo.com/show/17679/user.svg" />
            </div>
            <div className="ml-5">
              <span className="text-xl card-title font-weight-bolder text-dark-75 font-size-h2 mb-1 mt-6 d-block font-bold ">44</span>
              <h1 className="text-gray-400 text-s">Jumlah Pekerja</h1>
            </div>
          </CardBody>
        </Card>

        <Card colored className="text-black bg-white">
          <CardBody>
            <div className="ml-5 mt-3">
              <span className="text-xl card-title font-weight-bolder text-dark-75 font-size-h2 mb-1 mt-6 d-block font-bold ">44 </span>
              <h1 className="text-gray-400 text-s">Total Pekerja Pria</h1>
            </div>
            <div className="absolute-none bottom-5 right-3 ml-64 h-20 w-20">
              <img className="h-20 w-20" src="https://staging.gaweyo.com/media/svg/avatars/029-boy-11.svg" />
            </div>
          </CardBody>
        </Card>
        <Card colored className="text-black bg-white">
          <CardBody>
            <div className="ml-5 mt-3">
              <span className="text-xl card-title font-weight-bolder text-dark-75 font-size-h2 mb-1 mt-6 d-block font-bold ">44 </span>
              <h1 className="text-gray-400 text-s">Total Pekerja Wanita</h1>
            </div>
            <div className="absolute-none bottom-5 right-3 ml-64 h-20 w-20">
              <img className="h-20 w-20" src="https://staging.gaweyo.com/media/svg/avatars/014-girl-7.svg" />
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="grid gap-4 mb-8 md:grid-cols-3">
        <Card colored className="text-black bg-white">
          <CardBody>
            <div className="ml-2 mt-2 mb-5">
              <span className="text-x card-title font-weight-bolder text-dark-75 font-size-h2 mb-1 mt-6 d-block font-bold ">Usia Pekerja</span>
            </div>
            <div class="mb-5">
              <div class="bg-[#7c9bdb] flex">
                <span>
                  <img class="h-12 mx-auto" src="https://www.svgrepo.com/show/371377/line-v.svg" />
                </span>
                <a href="#" className=" text-dark-75 text-hover-primary font-weight-bold text-s mb-2">
                  3 Pekerja
                  <br /> <a className=" text-dark-75 text-hover-primary font-weight-bold text-xs mb-2 text-gray-400">40 Tahun Keatas</a>
                </a>
              </div>
            </div>
            <div class="mb-5">
              <div class="bg-[#7c9bdb] flex">
                <span>
                  <img class="h-12 mx-auto" src="https://www.svgrepo.com/show/371377/line-v.svg" />
                </span>
                <a href="#" className=" text-dark-75 text-hover-primary font-weight-bold text-s mb-2">
                  3 Pekerja
                  <br /> <a className=" text-dark-75 text-hover-primary font-weight-bold text-xs mb-2 text-gray-400">40 Tahun Keatas</a>
                </a>
              </div>
            </div>
            <div class="mb-5">
              <div class="bg-[#7c9bdb] flex">
                <span>
                  <img class="h-12 mx-auto" src="https://www.svgrepo.com/show/371377/line-v.svg" />
                </span>
                <a href="#" className=" text-dark-75 text-hover-primary font-weight-bold text-s mb-2">
                  3 Pekerja
                  <br /> <a className=" text-dark-75 text-hover-primary font-weight-bold text-xs mb-2 text-gray-400">40 Tahun Keatas</a>
                </a>
              </div>
            </div>
            <div class="mb-5">
              <div class="bg-[#7c9bdb] flex">
                <span>
                  <img class="h-12 mx-auto" src="https://www.svgrepo.com/show/371377/line-v.svg" />
                </span>
                <a href="#" className=" text-dark-75 text-hover-primary font-weight-bold text-s mb-2">
                  3 Pekerja
                  <br /> <a className=" text-dark-75 text-hover-primary font-weight-bold text-xs mb-2 text-gray-400">40 Tahun Keatas</a>
                </a>
              </div>
            </div>
            <div class="">
              <div class="bg-[#7c9bdb] flex">
                <span>
                  <img class="h-12 mx-auto" src="https://www.svgrepo.com/show/371377/line-v.svg" />
                </span>
                <a href="#" className=" text-dark-75 text-hover-primary font-weight-bold text-s mb-2">
                  3 Pekerja
                  <br /> <a className=" text-dark-75 text-hover-primary font-weight-bold text-xs mb-2 text-gray-400">40 Tahun Keatas</a>
                </a>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card colored className="text-black bg-white">
          <CardBody>
            <div className="ml-2 mt-2 mb-5">
              <span className="text-x card-title font-weight-bolder text-dark-75 font-size-h2 mb-1 mt-6 d-block font-bold ">Pekerja Paling Aktif</span>
            </div>
            <div class="mb-5">
              <div class="bg-[#7c9bdb] flex">
                <span>
                  <img className=" mr-3 h-12 mx-auto" src="https://staging.gaweyo.com/media/svg/avatars/009-boy-4.svg" />
                </span>
                <a href="#" className=" text-dark-75 text-hover-primary font-weight-bold text-s mb-2">
                  3 Pekerja
                  <br /> <a className=" text-dark-75 text-hover-primary font-weight-bold text-xs mb-2 text-gray-400">40 Tahun Keatas</a>
                </a>
              </div>
            </div>
            <div class="mb-5">
              <div class="bg-[#7c9bdb] flex">
                <span>
                  <img className=" mr-3 h-12 mx-auto" src="https://staging.gaweyo.com/media/svg/avatars/009-boy-4.svg" />
                </span>
                <a href="#" className=" text-dark-75 text-hover-primary font-weight-bold text-s mb-2">
                  3 Pekerja
                  <br /> <a className=" text-dark-75 text-hover-primary font-weight-bold text-xs mb-2 text-gray-400">40 Tahun Keatas</a>
                </a>
              </div>
            </div>
            <div class="mb-5">
              <div class="bg-[#7c9bdb] flex">
                <span>
                  <img className=" mr-3 h-12 mx-auto" src="https://staging.gaweyo.com/media/svg/avatars/009-boy-4.svg" />
                </span>
                <a href="#" className=" text-dark-75 text-hover-primary font-weight-bold text-s mb-2">
                  3 Pekerja
                  <br /> <a className=" text-dark-75 text-hover-primary font-weight-bold text-xs mb-2 text-gray-400">40 Tahun Keatas</a>
                </a>
              </div>
            </div>
            <div class="mb-5">
              <div class="bg-[#7c9bdb] flex">
                <span>
                  <img className=" h-12 mx-auto" src="https://staging.gaweyo.com/media/svg/avatars/009-boy-4.svg" />
                </span>
                <a href="#" className=" text-dark-75 text-hover-primary font-weight-bold text-s mb-2">
                  3 Pekerja
                  <br /> <a className=" text-dark-75 text-hover-primary font-weight-bold text-xs mb-2 text-gray-400">40 Tahun Keatas</a>
                </a>
              </div>
            </div>

            <div class="">
              <div class="bg-[#7c9bdb] flex">
                <span>
                  <img className=" h-12 mx-auto" src="https://staging.gaweyo.com/media/svg/avatars/009-boy-4.svg" />
                </span>
                <a href="#" className=" text-dark-75 text-hover-primary font-weight-bold text-s mb-2">
                  3 Pekerja
                  <br /> <a className=" text-dark-75 text-hover-primary font-weight-bold text-xs mb-2 text-gray-400">40 Tahun Keatas</a>
                </a>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card colored className="text-black bg-white">
          <CardBody></CardBody>
        </Card>
      </div>{" "}
    </>
  );
}

export default Dashboard;
