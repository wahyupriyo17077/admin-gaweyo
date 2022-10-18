import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Card, CardBody } from "@windmill/react-ui";
import PageTitle from "../components/Typography/PageTitle";
import response from "../utils/demo/tableData";
import { TableBody, TableContainer, Table, TableHeader, TableCell, TableRow, TableFooter, Avatar, Badge, Pagination } from "@windmill/react-ui";

function JobDashboard() {
  return (
    <>
      <PageTitle>Dashboard Lokasi</PageTitle>
      <div className="grid gap-1 mb-8 md:grid-cols-3">
        <Card colored className="">
          <CardBody>
            <a href="#">
              <img src="https://staging.gaweyo.com/media/stock-600x400/share_banner.png" />
            </a>
          </CardBody>
        </Card>
        <Card colored className="">
          <CardBody>
            <a href="#">
              <img src="https://staging.gaweyo.com/media/stock-600x400/polling.png" />
            </a>
          </CardBody>
        </Card>{" "}
        <Card colored className="">
          <CardBody>
            <a href="#">
              <img src="https://staging.gaweyo.com/media/stock-600x400/cek_lokasi.png" />
            </a>
          </CardBody>
        </Card>{" "}
        <Card colored className="">
          <CardBody>
            <a href="#">
              <img src="https://staging.gaweyo.com/media/stock-600x400/follow_subs_account.png" />
            </a>
          </CardBody>
        </Card>{" "}
        <Card colored className="">
          <CardBody>
            <a href="#">
              <img src="https://staging.gaweyo.com/media/stock-600x400/like_comment_post.png" />
            </a>
          </CardBody>
        </Card>
        <Card colored className="">
          <CardBody>
            <a href="#">
              <img src="https://staging.gaweyo.com/media/stock-600x400/install_daftar_aplikasi.png" />
            </a>
          </CardBody>
        </Card>
        <Card colored className="">
          <CardBody>
            <a href="#">
              <img src="https://staging.gaweyo.com/media/stock-600x400/survey.png" />
            </a>
          </CardBody>
        </Card>
        <Card colored className="">
          <CardBody>
            <a href="#">
              <img src="https://staging.gaweyo.com/media/stock-600x400/review_aplikasi.png" />
            </a>
          </CardBody>
        </Card>
        <Card colored className="">
          <CardBody>
            <a href="#">
              <img src="https://staging.gaweyo.com/media/stock-600x400/beli_review_produk.png" />
            </a>
          </CardBody>
        </Card>
        <Card colored className="">
          <CardBody>
            <a href="#">
              <img src="https://staging.gaweyo.com/media/stock-600x400/nonton_video.png" />
            </a>
          </CardBody>
        </Card>
      </div>{" "}
    </>
  );
}

export default JobDashboard;
