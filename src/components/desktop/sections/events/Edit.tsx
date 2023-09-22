import Storage from "@/components/global/Storage";
import axios from "axios";
import { useState } from "react";

interface propsTypes {
  actions: {
    setShow: Function;
    setEvent: Function;
    setEvents: Function;
  };
  data: {
    show: {
      css: object;
    };
    event: {
      name: string;
      date: string;
      time: string;
      description: string;
      cost: string;
    };
    _id: string;
  };
}

export default function Edit(Props: propsTypes) {
  // manage currently edited events state
  const [eventData, setEventData] = useState({
    name: Props.data.event.name,
    date: Props.data.event.date,
    time: Props.data.event.time,
    description: Props.data.event.description,
    cost: Props.data.event.cost,
  });

  //   defined types
  class Event {
    _id: string;
    Date: string;
    Name: string;
    Time: string;
    Description: string;
    Cost: string;
    constructor(
      _id: string,
      Date: string,
      Name: string,
      Time: string,
      Description: string,
      Cost: string
    ) {
      this._id = _id;
      this.Date = Date;
      this.Name = Name;
      this.Time = Time;
      this.Description = Description;
      this.Cost = Cost;
    }
  }

  const handleSaveEdit = (ID: string) => {
    const event = new Event(
      ID,
      eventData.date,
      eventData.name,
      eventData.time,
      eventData.description,
      eventData.cost
    );
    console.log(event);
    axios
      .put(
        `http://localhost:8080/events/${ID}`,
        { Data: event },
        {
          headers: {
            authorization: Storage.getItem("token"),
            user: Storage.getItem("user"),
          },
        }
      )
      .then((res: any) => {
        console.log(res.data);
        if (res.data.auth === false) {
          window.alert("token has expired. please log back in");
        }
        if (res.data.success === true) {
          Props.actions.setEvent({
            date: eventData.date,
            name: eventData.name,
            time: eventData.time,
            description: eventData.description,
            cost: eventData.cost,
          });
          Storage.setItem("events", res.data.response.events);
          Props.actions.setEvents(res.data.response.events);
          Props.actions.setShow({ show: false, css: { display: "none" } });
        } else {
          window.alert(res.data.response);
        }
      });
  };

  return (
    <div
      className="fixed top-0 inset-0 bg-black
        bg-opacity-30
        backdrop-blur-sm flex justify-center items-center"
      style={Props.data.show.css}
    >
      <div className="modal w-1/2 shadow-md rounded-t-xl shadow-slate-600">
        <div className="bg-slate-700 text-center text-3xl pt-2 pb-2 rounded-t-xl grid grid-cols-3">
          <div />
          <div>Edit Event</div>
          <div className="flex justify-end mr-3">
            <button
              onClick={() =>
                Props.actions.setShow({ show: false, css: { display: "none" } })
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
            onClick={() => handleSaveEdit(Props.data._id)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
