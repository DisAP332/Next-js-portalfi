import Drinks from "../desktop/sections/drinks/Drinks";
import Events from "../desktop/sections/events/Events";
import Food from "../desktop/sections/food/Food";

export default function Body() {
  return (
    <div>
      <Events />
      <Drinks />
      <Food />
    </div>
  );
}
