import ButtonExample from "./examples/ButtonExample";
import ButtonGroupExample from "./examples/ButtonGroupExample";
import ToggleButtonExample from "./examples/ToggleButtonExample";

import "./App.css";
import IconButtonExample from "./examples/IconButtonExample";
import BadgeExample from "./examples/BadgeExample";

function App() {
  return (
    <div className="font-mono bg-white dark:bg-gray-950 p-10 flex flex-col gap-8">
      <BadgeExample />
      <ButtonExample />
      <ButtonGroupExample />
      <ToggleButtonExample />
      <IconButtonExample />
    </div>
  );
}

export default App;
