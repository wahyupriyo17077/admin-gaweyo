import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Card, CardBody, Label, Select, Button, icon } from "@windmill/react-ui";
import style from "../assets/css/map.css";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import PageTitle from "../components/Typography/PageTitle";
function DashboardUserActive() {
  return (
    <>
      <PageTitle>Dashboard User Active (2 User Acticve)</PageTitle>
      <div className="grid md:grid-cols-4 mb-3">
        <CardBody>
          <Label className="mt-4">
            <Select className="mt-1">
              <option>Hari ini</option>
              <option>Besok</option>
              <option>kemarin</option>
              <option>minggu besok</option>
            </Select>
          </Label>
        </CardBody>

        <CardBody>
          <Label className="mt-4">
            <Select className="mt-1">
              <option>Hari ini</option>
              <option>Besok</option>
              <option>kemarin</option>
              <option>minggu besok</option>
            </Select>
          </Label>
        </CardBody>

        <CardBody>
          <Label className="mt-4">
            <Select className="mt-1">
              <option>Hari ini</option>
              <option>Besok</option>
              <option>kemarin</option>
              <option>minggu besok</option>
            </Select>
          </Label>
        </CardBody>
        <button class="bg-blue-500 hover:bg-blue-700 text-x  text-white font-bold w-32 mt-8 ml-10 h-10 focus:outline-none focus:shadow-outline" type="button">
          Apply Filter
        </button>
      </div>{" "}
      <Card>
        <div className="markercluster-map">
          <Map center={[45.4, -75.7]} zoom={12}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
          </Map>
        </div>
      </Card>
    </>
  );
}

export default DashboardUserActive;
