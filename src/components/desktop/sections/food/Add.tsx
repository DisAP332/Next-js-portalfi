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
    Name: "",
    Description: "",
    Cost: "",
    Sale: {
      Is: false,
      Percentage: 0,
    },
    IsSpecial: false,
    Tags: {
      Spicy: false,
      Raw: false,
      Allergens: false,
    },
    Type: "burger",
    Ingredients: "",
  });

  class FoodItem {
    Name: string;
    Description: string;
    Cost: string;
    Sale: {
      Is: boolean;
      Percentage: number;
    };
    IsSpecial: boolean;
    Tags: {
      Spicy: boolean;
      Raw: boolean;
      Allergens: boolean;
    };
    Type: string;
    Ingredients: string;
    constructor(
      Name: string,
      Description: string,
      Cost: string,
      Sale: {
        Is: boolean;
        Percentage: number;
      },
      IsSpecial: boolean,
      Tags: {
        Spicy: boolean;
        Raw: boolean;
        Allergens: boolean;
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
      foodData.Name,
      foodData.Description,
      foodData.Cost,
      foodData.Sale,
      foodData.IsSpecial,
      foodData.Tags,
      foodData.Type,
      foodData.Ingredients
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
          setFoodData({
            Name: "",
            Description: "",
            Cost: "",
            Sale: {
              Is: false,
              Percentage: 0,
            },
            IsSpecial: false,
            Tags: {
              Spicy: false,
              Raw: false,
              Allergens: false,
            },
            Type: "not set",
            Ingredients: "",
          });

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
                value={foodData.Name}
                required
                onChange={(e) =>
                  setFoodData({ ...foodData, Name: e.target.value })
                }
              />
              Description:
              <textarea
                required
                value={foodData.Description}
                onChange={(e) =>
                  setFoodData({ ...foodData, Description: e.target.value })
                }
              />
              Cost:
              <input
                required
                value={foodData.Cost}
                type="number"
                onChange={(e) =>
                  setFoodData({ ...foodData, Cost: e.target.value })
                }
              />
              <div className="flex justify-between">
                Sale:
                {foodData.Sale.Is ? (
                  <button
                    onClick={() =>
                      setFoodData({
                        ...foodData,
                        Sale: {
                          Is: false,
                          Percentage: foodData.Sale.Percentage,
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
              {foodData.Sale.Is ? (
                <>
                  <input
                    required
                    value={foodData.Sale.Percentage}
                    type="number"
                    onChange={(e) =>
                      setFoodData({
                        ...foodData,
                        Sale: { Is: true, Percentage: Number(e.target.value) },
                      })
                    }
                  />
                </>
              ) : (
                <input
                  required
                  checked={foodData.Sale.Is}
                  type="checkbox"
                  onChange={() =>
                    setFoodData({
                      ...foodData,
                      Sale: { Is: true, Percentage: foodData.Sale.Percentage },
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
                    IsSpecial: foodData.IsSpecial ? false : true,
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
                      Tags: {
                        ...foodData.Tags,
                        Spicy: foodData.Tags.Spicy ? false : true,
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
                      Tags: {
                        ...foodData.Tags,
                        Raw: foodData.Tags.Raw ? false : true,
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
                      Tags: {
                        ...foodData.Tags,
                        Allergens: foodData.Tags.Allergens ? false : true,
                      },
                    });
                  }}
                />
              </div>
              Type:
              <select
                id="type"
                name="type"
                value={foodData.Type}
                onChange={(e) =>
                  setFoodData({ ...foodData, Type: e.target.value })
                }
              >
                <option value="burger">Entree</option>
                <option value="side">Side</option>
              </select>
              Ingredients:
              <input
                required
                value={foodData.Ingredients}
                type="string"
                onChange={(e) =>
                  setFoodData({ ...foodData, Ingredients: e.target.value })
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
