"use client";
import Image from "next/image";
import Logo from "../../assets/images/FullLogo_Transparent.png";
import CompanyHeader from "../../assets/images/Name_Logo.png";
import ProfileIcon from "../../assets/icons/profile.svg";
import Link from "next/link";
import Storage from "../global/Storage";

export default function Header() {
  return (
    <>
      <nav className="header bg-slate-800 text-purple-50 gr shadow-md shadow-slate-300">
        <div className="flex justify-start border-b-2 border-slate-500">
          <div className="logo-sizing">
            <Image src={Logo} alt="Logo" />
          </div>
          <div className="company-header">
            <Image src={CompanyHeader} alt="Comapny Header" />
          </div>
        </div>
        <div className="bg-slate-100 mobile:hidden flex justify-between items-center pr-10 pl-5">
          <h2 className="text-slate-400">/hub/events</h2>
          <Link href={"/"}>
            <button className="bg-slate-800 h-5/6 pl-6 pr-6 rounded-2xl">
              Log Out
            </button>
          </Link>
        </div>
        <div className="flex items-center pl-10">
          <Image src={ProfileIcon} alt="settings icon" width={40} />
          <h1 className="pl-4">{Storage.getItem("user")}</h1>
        </div>
      </nav>
    </>
  );
}
