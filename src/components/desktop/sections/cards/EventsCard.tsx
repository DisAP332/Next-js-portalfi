import Cookies from "@/components/global/cookies";
import axios from "axios";
import Edit from "../events/Edit";
import { useState } from "react";

export default function EventsCard(Props: any) {
  const [showEditModal, setShowEditModal] = useState({
    show: false,
    css: { display: "none" },
  });

  const [eventData, setEventData] = useState({
    name: Props.Name,
    date: Props.Date,
    time: Props.Time,
    description: Props.Description,
    cost: Props.Cost,
  });

  function handleDelete() {
    axios
      .delete(
        `https://server.portalfi-jbw.com/events/deleteEvent/${Props._id}`,
        {
          headers: {
            authorization: Cookies.getData("token"),
            user: Cookies.getData("user"),
          },
        }
      )
      .then((res) => {
        if (res.data.auth === false) {
          window.alert("Session expired. Please log back in");
          document.location.href = "/";
        }
        if (res.data.success === true) {
          Cookies.resetEventCookie(res.data.events);
          Props.setEvents(res.data.events);
        } else {
          window.alert("Error in deleting event");
        }
      });
  }

  const actions = {
    setShow: setShowEditModal,
    setEvents: Props.setEventData,
    setEvent: setEventData,
  };

  const data = {
    show: showEditModal,
    event: eventData,
    _id: Props._id,
  };

  return (
    <>
      <Edit actions={actions} data={data} />
      <div id="eventcard" className="eventsGrid text-slate-700">
        <div className="grid grid-cols-2">
          <h1>{Props.Date}</h1>
          <h1 className="ml-2">{Props.Time}</h1>
        </div>
        <div>
          <h1>{Props.Name}</h1>
        </div>
        <div>
          <h1>{Props.Cost}</h1>
        </div>
        <div>
          <h1>{Props.Description}</h1>
        </div>
        <div>
          <h1>{Props.Img}</h1>
        </div>
        <div className="text-slate-100 ml-4">
          <button
            className="editBtn bg-slate-400"
            onClick={() =>
              setShowEditModal({ show: true, css: { display: "flex" } })
            }
          >
            Edit
          </button>
          <button
            className="deleteBtn bg-red-600"
            onClick={() => handleDelete()}
          >
            delete
          </button>
        </div>
      </div>
    </>
  );
}
