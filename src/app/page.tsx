"use client";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import saveCookies from "@/components/global/cookies";
import Cookies from "@/components/global/cookies";

export default function Home() {
  const router = useRouter();
  const [loginInfo, setLoginInfo] = useState({ username: "", password: "" });

  const handleLogin = async () => {
    await axios
      .post("https://server.portalfi-jbw.com/user/login", {
        username: loginInfo.username,
        password: loginInfo.password,
      })
      .then((res) => {
        if (res.data.status === "success") {
          console.log(res.data);
          Cookies.setData(res.data.user, res.data.token, res.data.EventData);
          setLoginInfo({
            username: "",
            password: "",
          });
          router.push("/dash");
        } else {
          window.alert("incorrect username/password");
          setLoginInfo({
            username: "",
            password: "",
          });
        }
      });
  };

  return (
    <div className="text-slate-500">
      <Link href={"/dash"}>dashboard</Link>
      Username{" "}
      <input
        onChange={(e) =>
          setLoginInfo({ ...loginInfo, username: e.target.value })
        }
      />
      Password{" "}
      <input
        onChange={(e) =>
          setLoginInfo({ ...loginInfo, password: e.target.value })
        }
      />
      <button onClick={() => handleLogin()}>submit</button>
    </div>
  );
}
