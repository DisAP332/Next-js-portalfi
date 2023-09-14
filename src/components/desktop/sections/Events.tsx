"use client";

import type { RootState } from "@/store";
import { useSelector } from "react-redux";

import AddIcon from "../../../assets/icons/add-new.svg";
import Image from "next/image";

export default function Events() {
  const events = useSelector((state: RootState) => state.sectionToggler.events);

  return (
    <div style={events.hiderCSS} className="m-6 bg-slate-100 shadow-md p-6 ">
      <div className="flex justify-between">
        <h1 className="text-slate-500 text-2xl mt-4">Events</h1>
        <button className="bg-green-700 p-1 rounded-full">
          <Image src={AddIcon} alt="Add Icon" width={60} />
        </button>
      </div>
      <div>
        <div className="bg-slate-500 mt-3 rounded-t-xl eventsHead p-2">
          <h1>Date</h1>
          <h1>Name</h1>
          <h1>Ticket</h1>
          <h1>FAQ</h1>
          <h1>Img</h1>
          <h1>Actions</h1>
        </div>
      </div>
    </div>
  );
}
