"use client";

import type { RootState } from "@/store";
import { useSelector } from "react-redux";

import AddIcon from "../../../../assets/icons/add-new.svg";
import Image from "next/image";

import { useState } from "react";
import Add from "./Add";
import Storage from "@/components/global/Storage";
import FoodCard from "../cards/FoodCard";

export default function Food() {
  const food = useSelector((state: RootState) => state.sectionToggler.food);
  const [foodData, setFoodData] = useState(Storage.getItem("foodItems") || {});
  const [showAddModal, setShowAddModal] = useState({
    show: false,
    css: { display: "none" },
  });
  console.log(foodData);
  return (
    <>
      <Add
        show={showAddModal}
        setShow={setShowAddModal}
        setFoodItems={setFoodData}
      />
      <div
        style={food.hiderCSS}
        className="m-6 bg-slate-100 shadow-md pr-10 pl-10 pb-10 rounded-md h-5/6"
      >
        <div className="flex justify-between">
          <h1 className="text-slate-500 text-3xl font-sembold mt-4">
            Food Menu
          </h1>
        </div>
        <div className="shadow-md">
          <div className="bg-slate-600 mt-3 rounded-t-xl foodGrid p-2">
            <h1 className="text-center">Name</h1>
            <h1>Desc</h1>
            <h1 className="text-center">Cost</h1>
            <h1 className="text-center">Sale?</h1>
            <h1 className="text-center">Special?</h1>
            <h1 className="text-center">tags</h1>
            <h1>Ingrendients</h1>
            <h1>Type</h1>
            <h1 className="text-center">Actions</h1>
          </div>
          <div className="eventCardContainer">
            {foodData !== null ? (
              foodData.map((items: { _id: string }) => (
                <div className="eventCardBox" key={items._id}>
                  <FoodCard {...items} setFoodItems={setFoodData} />
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="flex justify-end pt-4">
          <button
            className="bg-green-700 p-1 rounded-full"
            onClick={() =>
              setShowAddModal({ show: true, css: { display: "flex" } })
            }
          >
            <Image src={AddIcon} alt="Add Icon" width={60} />
          </button>
        </div>
      </div>
    </>
  );
}
