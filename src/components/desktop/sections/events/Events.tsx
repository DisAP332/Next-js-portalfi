"use client";

import type { RootState } from "@/store";
import { useSelector } from "react-redux";
import AddIcon from "../../../../assets/icons/add-new.svg";
import Image from "next/image";
import EventsCard from "../cards/EventsCard";
import { useState } from "react";
import Add from "./Add";

export default function Events() {
  const toggler = useSelector(
    (state: RootState) => state.sectionToggler.events
  );
  const events = useSelector((state: RootState) => state.contentData.events);
  const [eventData, setEventData] = useState([{}] || [{}]);
  const [showAddModal, setShowAddModal] = useState({
    show: false,
    css: { display: "none" },
  });
  return (
    <>
      <Add
        show={showAddModal}
        setShow={setShowAddModal}
        setEvents={setEventData}
      />
      <div
        style={toggler.hiderCSS}
        className="m-6 bg-slate-100 shadow-md pr-10 pl-10 pb-10 rounded-md h-5/6"
      >
        <div className="flex justify-between">
          <h1 className="text-slate-500 text-3xl font-sembold mt-4">Events</h1>
        </div>
        <div className="shadow-md">
          <div className="bg-slate-600 mt-3 rounded-t-xl eventsGrid p-2">
            <h1 className="text-center">Date</h1>
            <h1>Name</h1>
            <h1 className="text-center">Ticket</h1>
            <h1 className="text-center">FAQ</h1>
            <h1 className="text-center">Img</h1>
            <h1 className="text-center">Actions</h1>
          </div>
          <div className="CardContainer">
            {events !== null && events.length ? (
              events.map((items: { _id: string }) => (
                <div className="CardBox" key={items._id}>
                  <EventsCard {...items} setEvents={setEventData} />
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="flex justify-end pt-4">
          <button
            className="bg-green-700 p-1 rounded-full"
            onClick={() =>
              setShowAddModal({ show: true, css: { display: "flex" } })
            }
          >
            <Image src={AddIcon} alt="Add Icon" width={60} />
          </button>
        </div>
      </div>
    </>
  );
}
