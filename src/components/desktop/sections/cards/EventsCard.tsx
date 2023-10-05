import Edit from "../events/Edit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import crudActions from "@/components/global/crudActions";
import { dataActions } from "@/app/slices/contentDataSlice";

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

  const dispatch = useDispatch();

  function handleDelete() {
    crudActions.Delete(Props._id, "events").then((res) => {
      if (res.success === true) {
        dispatch(
          dataActions({
            requested: "events",
            data: res.data,
          })
        );
      }
    });
  }

  const actions = {
    setShow: setShowEditModal,
    setEvents: Props.setEvents,
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
      <div id="card" className="eventsGrid text-slate-700">
        <div className="grid grid-cols-2">
          <h1>{Props.Date.slice(2, 10)}</h1>
          <h1 className="ml-4">{Props.Time}</h1>
        </div>
        <div>
          <h1>{Props.Name}</h1>
        </div>
        <div>
          <h1>{Props.Cost}$</h1>
        </div>
        <div>
          {Props.Description.length < 45 ? (
            <h1>{Props.Description}</h1>
          ) : (
            <h1
              className="cursor-pointer"
              onClick={() => window.alert(Props.Description)}
            >
              {Props.Description.slice(0, 45) + "..."}
            </h1>
          )}
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
