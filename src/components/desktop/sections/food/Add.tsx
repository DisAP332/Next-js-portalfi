import Storage from "@/components/global/Storage";
import axios from "axios";
import { useState } from "react";

interface propsTypes {
  show: {
    show: boolean;
    css: object;
  };
  setShow: Function;
  setFoodItems: Function;
}

export default function Add(Props: propsTypes) {
  const [foodData, setFoodData] = useState({
    name: "",
    description: "",
    cost: "",
    sale: {
      is: false,
      percentage: 0,
    },
    isSpecial: false,
    tags: {
      spicy: false,
      raw: false,
      allergens: false,
    },
    type: "not set",
    ingredients: "",
  });

  class FoodItem {
    Name: string;
    Description: string;
    Cost: string;
    Sale: {
      is: boolean;
      percentage: number;
    };
    IsSpecial: boolean;
    Tags: {
      spicy: boolean;
      raw: boolean;
      allergens: boolean;
    };
    Type: string;
    Ingredients: string;
    constructor(
      Name: string,
      Description: string,
      Cost: string,
      Sale: {
        is: boolean;
        percentage: number;
      },
      IsSpecial: boolean,
      Tags: {
        spicy: boolean;
        raw: boolean;
        allergens: boolean;
      },
      Type: string,
      Ingredients: string
    ) {
      this.Name = Name;
      this.Description = Description;
      this.Cost = Cost;
      this.Sale = Sale;
      this.IsSpecial = IsSpecial;
      this.Tags = Tags;
      this.Type = Type;
      this.Ingredients = Ingredients;
    }
  }

  function handleFoodItemSubmit() {
    const foodItem = new FoodItem(
      foodData.name,
      foodData.description,
      foodData.cost,
      foodData.sale,
      foodData.isSpecial,
      foodData.tags,
      foodData.type,
      foodData.ingredients
    );
    axios
      .post(
        "http://localhost:8080/food",
        { Data: foodItem },
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
          Storage.setItem("foodItems", res.data.response.foodItems);
          Props.setFoodItems(res.data.response.foodItems);
          Props.setShow({ show: false, css: { display: "none" } });
        }
      });
  }

  return (
    <div
      className="fixed top-0 inset-0 bg-black
      bg-opacity-30
      backdrop-blur-sm flex justify-center items-center"
      style={Props.show.css}
    >
      <div className="modal w-1/2 shadow-md rounded-t-xl shadow-slate-600">
        <div className="bg-slate-700 text-center text-3xl pt-2 pb-2 rounded-t-xl grid grid-cols-3">
          <div />
          <div>Add Food Item</div>
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
                value={foodData.name}
                required
                onChange={(e) =>
                  setFoodData({ ...foodData, name: e.target.value })
                }
              />
              Description:
              <textarea
                required
                value={foodData.description}
                onChange={(e) =>
                  setFoodData({ ...foodData, description: e.target.value })
                }
              />
              Cost:
              <input
                required
                value={foodData.cost}
                type="number"
                onChange={(e) =>
                  setFoodData({ ...foodData, cost: e.target.value })
                }
              />
              <div className="flex justify-between">
                Sale:
                {foodData.sale.is ? (
                  <button
                    onClick={() =>
                      setFoodData({
                        ...foodData,
                        sale: {
                          is: false,
                          percentage: foodData.sale.percentage,
                        },
                      })
                    }
                  >
                    X
                  </button>
                ) : (
                  <></>
                )}
              </div>
              {foodData.sale.is ? (
                <>
                  <input
                    required
                    value={foodData.sale.percentage}
                    type="number"
                    onChange={(e) =>
                      setFoodData({
                        ...foodData,
                        sale: { is: true, percentage: Number(e.target.value) },
                      })
                    }
                  />
                </>
              ) : (
                <input
                  required
                  checked={foodData.sale.is}
                  type="checkbox"
                  onChange={() =>
                    setFoodData({
                      ...foodData,
                      sale: { is: true, percentage: foodData.sale.percentage },
                    })
                  }
                />
              )}
              is Special?
              <input
                type="checkbox"
                onClick={() => {
                  setFoodData({
                    ...foodData,
                    isSpecial: foodData.isSpecial ? false : true,
                  });
                }}
              />
              tags:
              <div className="flex justify-around">
                Spicy
                <input
                  type="checkbox"
                  onClick={() => {
                    setFoodData({
                      ...foodData,
                      tags: {
                        ...foodData.tags,
                        spicy: foodData.tags.spicy ? false : true,
                      },
                    });
                  }}
                />
                Raw{" "}
                <input
                  type="checkbox"
                  onClick={() => {
                    setFoodData({
                      ...foodData,
                      tags: {
                        ...foodData.tags,
                        raw: foodData.tags.raw ? false : true,
                      },
                    });
                  }}
                />
                Alergens
                <input
                  type="checkbox"
                  onClick={() => {
                    setFoodData({
                      ...foodData,
                      tags: {
                        ...foodData.tags,
                        allergens: foodData.tags.allergens ? false : true,
                      },
                    });
                  }}
                />
              </div>
              Type:
              <select
                id="type"
                name="type"
                value={foodData.type}
                onChange={(e) =>
                  setFoodData({ ...foodData, type: e.target.value })
                }
              >
                <option value="burger">Entree</option>
                <option value="side">Side</option>
              </select>
              Ingredients:
              <input
                required
                value={foodData.ingredients}
                type="string"
                onChange={(e) =>
                  setFoodData({ ...foodData, ingredients: e.target.value })
                }
              />
            </form>
          </div>
        </div>
        <div className="bg-slate-700 flex justify-end">
          <button
            className="bg-slate-300 pt-1 pb-1 pr-3 pl-3 m-3 rounded-xl text-xl"
            onClick={() => handleFoodItemSubmit()}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
