import Storage from "@/components/global/Storage";
import axios from "axios";
import { useState } from "react";

interface propsTypes {
  actions: {
    setShow: Function;
    setDrink: Function;
    setDrinks: Function;
  };
  data: {
    show: {
      css: object;
    };
    drink: {
      name: string;
      cost: string;
      category: string;
      description: string;
      ingredients: string;
      isSpecial: boolean;
    };
    _id: string;
  };
}

export default function Edit(Props: propsTypes) {
  const [drinkData, setDrinkData] = useState({
    name: Props.data.drink.name,
    cost: Props.data.drink.cost,
    category: Props.data.drink.category,
    description: Props.data.drink.description,
    ingredients: Props.data.drink.ingredients,
    isSpecial: Props.data.drink.isSpecial,
  });

  class Drink {
    _id: string;
    Name: string;
    Cost: string;
    Category: string;
    Description: string;
    Ingredients: string;
    IsSpecial: boolean;
    constructor(
      _id: string,
      Name: string,
      Cost: string,
      Category: string,
      Description: string,
      Ingredients: string,
      IsSpecial: boolean
    ) {
      this._id = _id;
      this.Name = Name;
      this.Cost = Cost;
      this.Category = Category;
      this.Description = Description;
      this.Ingredients = Ingredients;
      this.IsSpecial = IsSpecial;
    }
  }

  const handleDrinkSubmit = (ID: string) => {
    console.log(ID);
    const drink = new Drink(
      ID,
      drinkData.name,
      drinkData.cost,
      drinkData.category,
      drinkData.description,
      drinkData.ingredients,
      drinkData.isSpecial
    );
    console.log(drink);
    axios
      .put(
        `http://localhost:8080/drinks/${ID}`,
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
          Props.actions.setDrink({
            name: drinkData.name,
            cost: drinkData.cost,
            category: drinkData.category,
            description: drinkData.description,
            ingredients: drinkData.ingredients,
            isSpecial: drinkData.isSpecial,
          });
          Storage.setItem("drinks", res.data.response.drinks);
          Props.actions.setDrinks(res.data.response.drinks);
          Props.actions.setShow({ show: false, css: { display: "none" } });
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
          <div>Edit Drink</div>
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
            onClick={() => handleDrinkSubmit(Props.data._id)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}