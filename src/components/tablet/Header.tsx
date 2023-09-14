"use client";

import Image from "next/image";
import Logo from "../../assets/images/FullLogo_Transparent.png";
import CompanyHeader from "../../assets/images/Name_Logo.png";
import { HamToXBtn } from "../global/HamIcon";
import Navigation from "./Navigation";
import { useState } from "react";

export default function Header() {
  const [showNav, setShowNav] = useState(false);

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
        <div>e</div>
        <div>e</div>
        <div className="flex justify-end">
          <div onClick={() => setShowNav(!showNav)}>
            <HamToXBtn />
          </div>
          <Navigation show={showNav} setShow={setShowNav} />
        </div>
      </nav>
    </>
  );
}
