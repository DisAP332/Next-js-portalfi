import { useSelector, useDispatch } from "react-redux";
import { showorHiderMenu } from "@/app/slices/menuTogglerSlice";
import { showorHiderSection } from "@/app/slices/sectionTogglerSlice";
import type { RootState } from "@/store";

import ContentIcon from "../../../assets/icons/settings.svg";
import Image from "next/image";

export default function ContentDD() {
  const dispatch = useDispatch();
  const content = useSelector((state: RootState) => state.menuToggler.content);

  return (
    <div className="nav-toggleable flex flex-col place-items-center">
      <button
        onClick={() => dispatch(showorHiderMenu("content"))}
        style={content.toggledcss}
      >
        <div className="border-r-2 border-slate-500 mr-5 pr-2">
          <Image src={ContentIcon} alt="settings icon" width={22} />
        </div>
        Content
      </button>
      <div
        className="flex flex-col togglable-dropdown"
        style={content.dropdowncss}
      >
        <button onClick={() => dispatch(showorHiderSection("events"))}>
          Events
        </button>
        <button onClick={() => dispatch(showorHiderSection("food"))}>
          Food
        </button>
        <button>Drinks</button>
        <button>Advertisement</button>
        <button>Specials</button>
      </div>
    </div>
  );
}
