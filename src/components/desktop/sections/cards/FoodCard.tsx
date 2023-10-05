import axios from "axios";
import Edit from "../food/Edit";
import { useState } from "react";
import Storage from "@/components/global/Storage";
import { useDispatch } from "react-redux";
import crudActions from "@/components/global/crudActions";
import { dataActions } from "@/app/slices/contentDataSlice";

export default function FoodCard(Props: any) {
  const [showEditModal, setShowEditModal] = useState({
    show: false,
    css: { display: "none" },
  });

  const [foodData, setFoodData] = useState({
    Name: Props.Name,
    Description: Props.Description,
    Cost: Props.Cost,
    Sale: {
      Is: Props.Sale.Is,
      Percentage: Props.Sale.Percentage,
    },
    IsSpecial: Props.IsSpecial,
    Tags: {
      Spicy: Props.Tags.Spicy,
      Raw: Props.Tags.Raw,
      Allergens: Props.Tags.Allergens,
    },
    Type: Props.Type,
    Ingredients: Props.Ingredients,
  });

  const dispatch = useDispatch();

  function handleDelete() {
    crudActions.Delete(Props._id, "food").then((res) => {
      if (res.success === true) {
        dispatch(
          dataActions({
            requested: "food",
            data: res.data,
          })
        );
      }
    });
  }
  const actions = {
    setShow: setShowEditModal,
    setFoodItems: Props.setFoodItems,
    setFoodItem: setFoodData,
  };

  const data = {
    show: showEditModal,
    foodItem: foodData,
    _id: Props._id,
  };

  return (
    <>
      <Edit actions={actions} data={data} />
      <div id="card" className="foodGrid text-slate-700">
        <div>
          <h1>{Props.Name}</h1>
        </div>
        <div>
          {Props.Description.length < 14 ? (
            <h1>{Props.Description}</h1>
          ) : (
            <h1
              className="cursor-pointer"
              onClick={() => window.alert(Props.Description)}
            >
              {Props.Description.slice(0, 14) + "..."}
            </h1>
          )}
        </div>
        <div className="flex justify-center">
          <h1>{Props.Cost}$</h1>
        </div>
        <div className="flex justify-center">
          {Props.Sale.Is ? <h1>{Props.Sale.Percentage}%</h1> : <h1>None</h1>}
        </div>
        <div className="flex justify-center">
          <h1>{Props.IsSpecial ? "yes" : "no"}</h1>
        </div>
        <div className="flex justify-center">
          <h1>
            {Props.Tags.Spicy ? "*Spicy" : ""}
            {Props.Tags.Raw ? "*Raw" : ""}
            {Props.Tags.Allergens ? "*Alergens" : ""}
          </h1>
        </div>
        <div>
          {Props.Ingredients.length < 14 ? (
            <h1>{Props.Ingredients}</h1>
          ) : (
            <h1
              className="cursor-pointer"
              onClick={() => window.alert(Props.Ingredients)}
            >
              {Props.Ingredients.slice(0, 14) + "..."}
            </h1>
          )}
        </div>
        <div className="flex justify-center">{Props.Type}</div>
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
