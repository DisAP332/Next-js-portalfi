"use client";

import type { RootState } from "@/store";
import { useSelector } from "react-redux";

import AddIcon from "../../../assets/icons/add-new.svg";
import Image from "next/image";

import DrinksCard from "../cards/DrinksCard";
import { useState } from "react";
import Storage from "@/components/global/Storage";
import Add from "./Add";

export default function Drinks() {
  const toggler = useSelector(
    (state: RootState) => state.sectionToggler.drinks
  );
  const drinks = useSelector((state: RootState) => state.contentData.drinks);
  const [drinksData, setDrinksData] = useState(
    Storage.getItem("drinks") || [{}]
  );
  const [showAddModal, setShowAddModal] = useState({
    show: false,
    css: { display: "none" },
  });
  return (
    <>
      <Add
        show={showAddModal}
        setShow={setShowAddModal}
        setDrinks={setDrinksData}
      />
      <div
        style={toggler.hiderCSS}
        className="m-6 bg-slate-100 shadow-md pr-10 pl-10 pb-10 rounded-md h-5/6"
      >
        <div className="flex justify-between">
          <h1 className="text-slate-500 text-3xl font-sembold mt-4">Drinks</h1>
        </div>
        <div className="shadow-md">
          <div className="bg-slate-600 mt-3 rounded-t-xl drinksGrid p-2 contentHeader">
            <h1 className="text-center">Name</h1>
            <h1>Cost</h1>
            <h1 className="text-center">Catagory</h1>
            <h1 className="text-center">Description</h1>
            <h1 className="text-center">Ingredients</h1>
            <h1 className="text-center">IsSpecial</h1>
            <h1 className="text-center">actions</h1>
          </div>
          <div className="CardContainer">
            {drinks !== null && drinks.length >= 1 ? (
              drinks.map((items: { _id: string }) => (
                <div className="CardBox" key={items._id}>
                  <DrinksCard {...items} setDrinks={setDrinksData} />
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
