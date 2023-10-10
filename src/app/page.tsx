"use client";
import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";

import CompanyHeader from "../assets/images/Name_Logo.png";
import Image from "next/image";
import Storage from "@/components/global/Storage";

export default function Home() {
  const router = useRouter();
  const initialState = { username: "", password: "" };
  const [loginInfo, setLoginInfo] = useState(initialState);

  const saveAllToLocalStorage = (res: AxiosResponse<any, any>) => {
    Storage.setItem("user", res.data.response.user);
    Storage.setItem("token", res.data.response.token);
    Storage.setItem("events", res.data.response.events);
    Storage.setItem("food", res.data.response.food);
    Storage.setItem("drinks", res.data.response.drinks);
    Storage.setItem("siteData", res.data.response.publishedData);
  };

  const handleLogin = async () => {
    await axios
      .post("https://server.portalfi-jbw.com/user/login", {
        username: loginInfo.username,
        password: loginInfo.password,
      })
      .then((res) => {
        if (res.data.success === true) {
          // save all data to local storage
          saveAllToLocalStorage(res);
          // dump the login info from state
          setLoginInfo(initialState);
          // move to the dashboard
          router.push("/dash");
        } else {
          window.alert("incorrect username/password");
        }
      });
  };

  return (
    <div className="text-slate-800 bg-slate-800 flex justify-center items-center  w-screen h-screen flex-col">
      <Image src={CompanyHeader} alt="Company Header" width={500} />
      <div className="w-1/3 rounded-t-3xl">
        <div className="bg-slate-600 text-slate-100 rounded-t-3xl">
          <h1 className="text-4xl p-4 text-center">Login</h1>
        </div>
        <div className=" bg-slate-100 h-full flex flex-col p-10 shadow-md shadow-slate-200">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, username: e.target.value })
            }
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, password: e.target.value })
            }
          />
          <button onClick={() => handleLogin()}>submit</button>
        </div>
      </div>
    </div>
  );
}
