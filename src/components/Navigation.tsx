import Image from "next/image";
import SettingsIcon from "../assets/icons/settings.svg";
import ProfileIcon from "../assets/icons/profile.svg";
import ContentIcon from "../assets/icons/content.svg";

export default function Navigation() {
  return (
    <div className="bg-slate-800 shadow-xl shadow-slate-700 navigation pt-10">
      <div className="gap-y-3 flex flex-col place-items-center">
        <button>
          <div className="border-r-2 border-slate-500 mr-5 pr-2">
            <Image src={ProfileIcon} alt="settings icon" />
          </div>
          Profile
        </button>
        <button>
          <div className="border-r-2 border-slate-500 mr-5 pr-2">
            <Image src={ContentIcon} alt="settings icon" width={22} />
          </div>
          Content
        </button>
      </div>
      <div className="gap-y-3 flex flex-col place-items-center border-t-2 border-slate-500 pt-10">
        <button>
          <div className="border-r-2 border-slate-500 mr-5 pr-2">
            <Image src={SettingsIcon} alt="settings icon" />
          </div>
          Settings
        </button>
      </div>
    </div>
  );
}
