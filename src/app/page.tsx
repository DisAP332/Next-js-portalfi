"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import CompanyHeader from "../assets/images/Name_Logo.png";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const [loginInfo, setLoginInfo] = useState({ username: "", password: "" });

  const handleLogin = async () => {
    if (typeof window !== "undefined" && window.localStorage) {
      await axios
        .post("https://server.portalfi-jbw.com/user/login", {
          username: loginInfo.username,
          password: loginInfo.password,
        })
        .then((res) => {
          if (res.data.status === "success") {
            localStorage.setItem("JBWuser", res.data.user);
            localStorage.setItem("JBWevents", res.data.EventData);
            localStorage.setItem("JBWtoken", res.data.token);
            setLoginInfo({
              username: "",
              password: "",
            });
            router.push("/dash");
          } else {
            window.alert("incorrect username/password");
          }
        });
    }
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
