import Drinks from "../sections/drinks/Drinks";
import Events from "../sections/events/Events";
import Food from "../sections/food/Food";

export default function Body() {
  return (
    <div>
      <Events />
      <Drinks />
      <Food />
    </div>
  );
}
