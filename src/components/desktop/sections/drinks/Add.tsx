import Storage from "@/components/global/Storage";
import axios from "axios";
import { useState } from "react";

interface propsTypes {
  show: {
    show: boolean;
    css: object;
  };
  setShow: Function;
  setDrinks: Function;
}

export default function Add(Props: propsTypes) {
  const [drinkData, setDrinkData] = useState({
    name: "",
    cost: "",
    category: "",
    description: "",
    ingredients: "",
    isSpecial: false,
  });

  class Drink {
    Name: string;
    Cost: string;
    Category: string;
    Description: string;
    Ingredients: string;
    IsSpecial: boolean;
    constructor(
      Name: string,
      Cost: string,
      Category: string,
      Description: string,
      Ingredients: string,
      IsSpecial: boolean
    ) {
      this.Name = Name;
      this.Cost = Cost;
      this.Category = Category;
      this.Description = Description;
      this.Ingredients = Ingredients;
      this.IsSpecial = IsSpecial;
    }
  }

  const handleDrinkSubmit = async () => {
    const drink = new Drink(
      drinkData.name,
      drinkData.cost,
      drinkData.category,
      drinkData.description,
      drinkData.ingredients,
      drinkData.isSpecial
    );
    console.log(drink);
    axios
      .post(
        "http://localhost:8080/drinks",
        { Data: drink },
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
        if (res.data.success === false) {
          window.alert(res.data.response);
        } else {
          setDrinkData({
            name: "",
            cost: "",
            category: "",
            description: "",
            ingredients: "",
            isSpecial: false,
          });
          Storage.setItem("drinks", res.data.response.drinks);
          Props.setDrinks(res.data.response.drinks);
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
          <div>Add Drink</div>
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
              Name:
              <input
                type="string"
                value={drinkData.name}
                required
                onChange={(e) =>
                  setDrinkData({ ...drinkData, name: e.target.value })
                }
              />
              Cost:
              <input
                required
                value={drinkData.cost}
                type="number"
                onChange={(e) =>
                  setDrinkData({ ...drinkData, cost: e.target.value })
                }
              />
              Category:
              <input
                required
                value={drinkData.category}
                type="string"
                onChange={(e) =>
                  setDrinkData({ ...drinkData, category: e.target.value })
                }
              />
              Description:
              <input
                required
                value={drinkData.description}
                type="string"
                onChange={(e) =>
                  setDrinkData({ ...drinkData, description: e.target.value })
                }
              />
              Ingredients:
              <input
                required
                value={drinkData.ingredients}
                type="string"
                onChange={(e) =>
                  setDrinkData({ ...drinkData, ingredients: e.target.value })
                }
              />
              Is Special?:
              <input
                required
                value={drinkData.ingredients}
                type="checkbox"
                onClick={(e) =>
                  setDrinkData({
                    ...drinkData,
                    isSpecial: drinkData.isSpecial ? false : true,
                  })
                }
              />
            </form>
          </div>
        </div>
        <div className="bg-slate-700 flex justify-end">
          <button
            className="bg-slate-300 pt-1 pb-1 pr-3 pl-3 m-3 rounded-xl text-xl"
            onClick={() => handleDrinkSubmit()}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
