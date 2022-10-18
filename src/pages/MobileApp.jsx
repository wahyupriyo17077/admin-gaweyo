import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Card, CardBody, TableFooter, Pagination, Label, Select, Button, Input } from "@windmill/react-ui";
import style from "../assets/css/map.css";
import { SearchIcon } from "../icons";

import PageTitle from "../components/Typography/PageTitle";
import Cards from "./Cards";
import "../assets/css/previleges.css";
import ButtonAksi from "../components/ButtonAksi/ButtonAksi";

import response from "../utils/demo/tableData";
import SearchAndAdd from "../components/ButtonAksi/SearchAndAdd";
const response2 = response.concat([]);

function MobileApp() {
  const [pageTable1, setPageTable1] = useState(1);
  const [pageTable2, setPageTable2] = useState(1);

  // setup data for every table
  const [dataTable1, setDataTable1] = useState([]);
  const [dataTable2, setDataTable2] = useState([]);

  // pagination setup
  const resultsPerPage = 10;
  const totalResults = response.length;

  // pagination change control
  function onPageChangeTable1(p) {
    setPageTable1(p);
  }

  // pagination change control
  function onPageChangeTable2(p) {
    setPageTable2(p);
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setDataTable1(response.slice((pageTable1 - 1) * resultsPerPage, pageTable1 * resultsPerPage));
  }, [pageTable1]);

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setDataTable2(response2.slice((pageTable2 - 1) * resultsPerPage, pageTable2 * resultsPerPage));
  }, [pageTable2]);

  return (
    <>
      <PageTitle>Data Mobile Pages</PageTitle>
      <SearchAndAdd />

      <Card colored className="text-black bg-white">
        <CardBody>
          {/* table */}

          <div class="overflow-x-auto relative">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400">
                <tr>
                  <th scope="col" class="py-3 px-6">
                    Urutan
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Tipe
                  </th>
                  <th scope="col" class="py-3 px-6">
                    {" "}
                    Nama Halaman
                  </th>
                  <th scope="col" class="py-3 px-6">
                    {" "}
                    Endpoint
                  </th>
                  <th scope="col" class="py-3 px-6">
                    {" "}
                    Dibuat Pada
                  </th>
                  <th scope="col" class="py-3 px-6">
                    {" "}
                    Diupdate Pada
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b tex">
                  <th scope="row" class="py-4 px-6 font-medium text-black whitespace-nowrap">
                    1
                  </th>
                  <td class="py-4 px-6">Admin</td>
                  <td class="py-4 px-6"></td>
                  <td class="py-4 px-6"></td>
                  <td class="py-4 px-6"></td>
                  <td class="py-4 px-6"></td>
                  <ButtonAksi />
                </tr>
                <tr class="bg-white border-b ">
                  <th scope="row" class="py-4 px-6 font-medium text-black whitespace-nowrap">
                    2
                  </th>
                  <td class="py-4 px-6">Super Admin</td>
                  <td class="py-4 px-6"></td>
                  <td class="py-4 px-6"></td>
                  <td class="py-4 px-6"></td>
                  <td class="py-4 px-6"></td>
                  <ButtonAksi />
                </tr>
                <tr class="bg-white">
                  <th scope="row" class="py-4 px-6 font-medium text-black whitespace-nowrap">
                    3
                  </th>
                  <td class="py-4 px-6">User</td>
                  <td class="py-4 px-6"></td>
                  <td class="py-4 px-6"></td>
                  <td class="py-4 px-6"></td>
                  <td class="py-4 px-6"></td>
                  <ButtonAksi />
                </tr>
              </tbody>
            </table>
          </div>
        </CardBody>
        <TableFooter>
          <Pagination totalResults={totalResults} resultsPerPage={resultsPerPage} onChange={onPageChangeTable1} label="Table navigation" />
        </TableFooter>
      </Card>
    </>
  );
}

export default MobileApp;
