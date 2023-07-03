import { useState } from "react";
import ToggleButton from "../components/buttons/ToggleButton";

import { ReactComponent as CheckIcon } from "../assets/icons/checkmark/checkmark-circle.svg";

const row = `flex gap-4 flex-wrap`;

const ToggleButtonExample = () => {
  const [selected, setSelected] = useState(false);

  const [active, setActive] = useState();
  const [multipleActive, setMultipleActive] = useState([]);

  console.log(selected, active, multipleActive);
  return (
    <>
      <div className={row}>
        <ToggleButton
          value="check"
          selected={selected}
          onChange={() => setSelected(!selected)}
        >
          {selected ? "T" : "F"}
        </ToggleButton>

        <ToggleButton.Group
          value={active}
          onChange={(e, value) => setActive(value)}
        >
          <ToggleButton value={1}>1</ToggleButton>
          <ToggleButton value={2}>2</ToggleButton>
          <ToggleButton value={3}>3</ToggleButton>
          <ToggleButton value={4} disabled>
            4
          </ToggleButton>
        </ToggleButton.Group>

        <ToggleButton.Group
          value={multipleActive}
          multiple
          variant="dark"
          onChange={(e, value) => setMultipleActive(value)}
        >
          <ToggleButton value={1}>1</ToggleButton>
          <ToggleButton value={2}>2</ToggleButton>
          <ToggleButton value={3}>3</ToggleButton>
          <ToggleButton value={4} disabled>
            4
          </ToggleButton>
        </ToggleButton.Group>
      </div>
      <div className={row}>
        <ToggleButton.Group
          vertical
          value={active}
          onChange={(e, value) => setActive(value)}
        >
          <ToggleButton value={1}>1</ToggleButton>
          <ToggleButton value={2}>2</ToggleButton>
          <ToggleButton value={3}>3</ToggleButton>
          <ToggleButton value={4} disabled>
            4
          </ToggleButton>
        </ToggleButton.Group>
        
        <ToggleButton.Group
          value={multipleActive}
          multiple
          vertical
          onChange={(e, value) => setMultipleActive(value)}
        >
          <ToggleButton value={1}>1</ToggleButton>
          <ToggleButton value={2}>2</ToggleButton>
          <ToggleButton value={3}>3</ToggleButton>
          <ToggleButton value={4} disabled>
            4
          </ToggleButton>
        </ToggleButton.Group>
      </div>
    </>
  );
};

export default ToggleButtonExample;
