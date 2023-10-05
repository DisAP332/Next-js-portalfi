import axios from "axios";
import { useState } from "react";
import Storage from "@/components/global/Storage";
import Edit from "../drinks/Edit";
import { useDispatch } from "react-redux";
import crudActions from "@/components/global/crudActions";
import { dataActions } from "@/app/slices/contentDataSlice";
import { pureFinalPropsSelectorFactory } from "react-redux/es/connect/selectorFactory";
// import { crudActions } from "@/app/slices/crudSlice";

export default function DrinksCard(Props: any) {
  const [showEditModal, setShowEditModal] = useState({
    show: false,
    css: { display: "none" },
  });

  const [drinkData, setDrinkData] = useState({
    name: Props.Name,
    cost: Props.Cost,
    category: Props.Category,
    description: Props.Description,
    ingredients: Props.Ingredients,
    isSpecial: Props.IsSpecial,
  });

  const dispatch = useDispatch();

  function handleDelete() {
    crudActions.Delete(Props._id, "drinks").then((res) => {
      if (res.success === true) {
        dispatch(
          dataActions({
            requested: "drinks",
            data: res.data,
          })
        );
      }
    });
  }

  const actions = {
    setShow: setShowEditModal,
    setDrinks: Props.setDrinks,
    setDrink: setDrinkData,
  };

  const data = {
    show: showEditModal,
    drink: drinkData,
    _id: Props._id,
  };

  return (
    <>
      <Edit actions={actions} data={data} />
      <div id="card" className="drinksGrid text-slate-700">
        <div>
          <h1>{Props.Name}</h1>
        </div>
        <div>
          <h1>{Props.Cost}$</h1>
        </div>
        <div>
          <h1>{Props.Category}</h1>
        </div>
        <div>
          {Props.Description.length < 30 ? (
            <h1>{Props.Description}</h1>
          ) : (
            <h1
              className="cursor-pointer"
              onClick={() => window.alert(Props.Description)}
            >
              {Props.Description.slice(0, 30) + "..."}
            </h1>
          )}
        </div>
        <div>
          {Props.Ingredients.length < 30 ? (
            <h1>{Props.Ingredients}</h1>
          ) : (
            <h1
              className="cursor-pointer"
              onClick={() => window.alert(Props.Ingredients)}
            >
              {Props.Ingredients.slice(0, 30) + "..."}
            </h1>
          )}
        </div>
        <div>
          <h1>{Props.IsSpecial ? "true" : "false"}</h1>
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
