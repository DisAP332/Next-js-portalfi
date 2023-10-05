import Food from "./sections/food/Food";
import Events from "./sections/events/Events";
import Drinks from "./sections/drinks/Drinks";
import HomePageOptions from "../global/options/HomePageOptions";

export default function Body() {
  return (
    <div>
      <Events />
      <Food />
      <Drinks />
      <HomePageOptions />
    </div>
  );
}
