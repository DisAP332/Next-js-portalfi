import Body from "@/components/desktop/Body";
import HeaderDesktop from "@/components/desktop/Header";
import Navigation from "@/components/desktop/Navigation";

import HeaderTablet from "@/components/tablet/Header";

export default function Profile() {
  return (
    <>
      <div id="app-desktop" className="h-screen w-screen">
        <HeaderDesktop />
        <div className="app-desktop-container">
          <Navigation />
          <Body />
        </div>
      </div>
      <div id="app-tablet" className="h-screen w-screen">
        <HeaderTablet />
      </div>
    </>
  );
}
