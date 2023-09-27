import axios from "axios";
import Edit from "../food/Edit";
import { useState } from "react";
import Storage from "@/components/global/Storage";

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

  function handleDelete() {
    axios
      .delete(`http://localhost:8080/food/${Props._id}`, {
        headers: {
          authorization: Storage.getItem("token"),
          user: Storage.getItem("user"),
        },
      })
      .then((res) => {
        if (res.data.auth === false) {
          window.alert("Session expired. Please log back in");
          document.location.href = "/";
        }
        if (res.data.success === true) {
          Storage.setItem("foodItems", res.data.response.foodItems);
          Props.setFoodItems(res.data.response.foodItems);
        } else {
          window.alert("Error in deleting Food Item");
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
      <div id="eventcard" className="foodGrid text-slate-700">
        <div>
          <h1>{Props.Name}</h1>
        </div>
        <div>
          <h1>{Props.Description}</h1>
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
          <h1>{Props.Ingredients}</h1>
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
