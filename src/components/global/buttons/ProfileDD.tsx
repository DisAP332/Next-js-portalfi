import { useSelector, useDispatch } from "react-redux";
import { showorHiderMenu } from "@/app/slices/menuTogglerSlice";
import type { RootState } from "@/store";

import ProfileIcon from "../../../assets/icons/profile.svg";
import Image from "next/image";

export default function ProfileDD() {
  const dispatch = useDispatch();
  const profile = useSelector((state: RootState) => state.menuToggler.profile);

  return (
    <div className="nav-toggleable flex flex-col place-items-center">
      {/* ---- begin profile menu ------ */}
      <button
        onClick={() => dispatch(showorHiderMenu("profile"))}
        style={profile.toggledcss}
      >
        <div className="flex">
          <div className="border-r-2 border-slate-500 mr-5 pr-2">
            <Image src={ProfileIcon} alt="settings icon" />
          </div>
          Profile
        </div>
      </button>
      <div
        className="flex flex-col togglable-dropdown"
        style={profile.dropdowncss}
      >
        <button>Settings</button>
        <button>Logout</button>
      </div>
    </div>
  );
}
