import axios from "axios";
import { useState } from "react";
import Storage from "@/components/global/Storage";
import Edit from "../drinks/Edit";

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

  function handleDelete() {
    axios
      .delete(`http://localhost:8080/drinks/${Props._id}`, {
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
          Storage.setItem("drinks", res.data.response.drinks);
          Props.setDrinks(res.data.response.drinks);
        } else {
          window.alert("Error in deleting drink");
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
      <div id="eventcard" className="drinksGrid text-slate-700">
        <div>
          <h1>{Props.Name}</h1>
        </div>
        <div>
          <h1>{Props.Cost}</h1>
        </div>
        <div>
          <h1>{Props.Catagory}$</h1>
        </div>
        <div>
          <h1>{Props.Description}</h1>
        </div>
        <div>
          <h1>{Props.Ingredients}</h1>
        </div>
        <div>
          <h1>{Props.IsSpecial}</h1>
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
