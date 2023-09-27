import Food from "./sections/food/Food";
import Events from "./sections/events/Events";
import Drinks from "./sections/drinks/Drinks";

export default function Body() {
  return (
    <div>
      <Events />
      <Food />
      <Drinks />
    </div>
  );
}
