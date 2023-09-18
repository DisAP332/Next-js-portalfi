import Storage from "@/components/global/Storage";
import axios from "axios";
import { useState } from "react";

interface propsTypes {
  show: {
    show: boolean;
    css: object;
  };
  setShow: Function;
  setEvents: Function;
}

export default function Add(Props: propsTypes) {
  const [eventData, setEventData] = useState({
    name: "",
    date: "",
    time: "",
    description: "",
    cost: "",
  });

  class Event {
    Date: string;
    Name: string;
    Time: string;
    Description: string;
    Cost: string;
    constructor(
      Date: string,
      Name: string,
      Time: string,
      Description: string,
      Cost: string
    ) {
      this.Date = Date;
      this.Name = Name;
      this.Time = Time;
      this.Description = Description;
      this.Cost = Cost;
    }
  }

  const handleEventSubmit = async () => {
    const event = new Event(
      eventData.date,
      eventData.name,
      eventData.time,
      eventData.description,
      eventData.cost
    );
    axios
      .post(
        "https://server.portalfi-jbw.com/events/createEvent",
        { Data: event },
        {
          headers: {
            authorization: Storage.getItem("token"),
            user: Storage.getItem("user"),
          },
        }
      )
      .then((res: any) => {
        if (res.data.auth === false) {
          window.alert("token has expired. please log back in");
        }
        if (!res.data.success) {
          window.alert("event not created :(");
        } else {
          setEventData({
            name: "",
            date: "",
            time: "",
            description: "",
            cost: "",
          });
          Storage.setItem("events", res.data.events);
          Props.setEvents(res.data.events);
          Props.setShow({ show: false, css: { display: "none" } });
        }
      });
  };
  return (
    <div
      className="fixed top-0 inset-0 bg-black
      bg-opacity-30
      backdrop-blur-sm flex justify-center items-center"
      //   onClick={() => Props.setShow({ show: false, css: { display: "none" } })}
      style={Props.show.css}
    >
      <div className="modal w-1/2 shadow-md rounded-t-xl shadow-slate-600">
        <div className="bg-slate-700 text-center text-3xl pt-2 pb-2 rounded-t-xl grid grid-cols-3">
          <div />
          <div>Add Event</div>
          <div className="flex justify-end mr-3">
            <button
              onClick={() =>
                Props.setShow({ show: false, css: { display: "none" } })
              }
            >
              X
            </button>
          </div>
        </div>
        <div className="bg-slate-100">
          <div className="flex justify-center pt-8 pb-8">
            <form className="flex flex-col text-slate-800">
              Date:
              <input
                type="date"
                value={eventData.date}
                required
                onChange={(e) =>
                  setEventData({ ...eventData, date: e.target.value })
                }
              />
              Name:
              <input
                required
                value={eventData.name}
                type="string"
                onChange={(e) =>
                  setEventData({ ...eventData, name: e.target.value })
                }
              />
              Time Opens:
              <input
                required
                type="time"
                value={eventData.time}
                onChange={(e) =>
                  setEventData({ ...eventData, time: e.target.value })
                }
              />
              Description:
              <textarea
                required
                value={eventData.description}
                onChange={(e) =>
                  setEventData({ ...eventData, description: e.target.value })
                }
              />
              Door Cost:
              <input
                required
                value={eventData.cost}
                type="number"
                onChange={(e) =>
                  setEventData({ ...eventData, cost: e.target.value })
                }
              />
            </form>
          </div>
        </div>
        <div className="bg-slate-700 flex justify-end">
          <button
            className="bg-slate-300 pt-1 pb-1 pr-3 pl-3 m-3 rounded-xl text-xl"
            onClick={() => handleEventSubmit()}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
