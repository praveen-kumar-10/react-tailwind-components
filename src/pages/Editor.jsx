import { useState } from "react";

import { ReactComponent as AlignLeftIcon } from "../assets/icons/align/left.svg";
import { ReactComponent as AlignRightIcon } from "../assets/icons/align/right.svg";
import { ReactComponent as AlignTopIcon } from "../assets/icons/align/top.svg";
import { ReactComponent as AlignBottomIcon } from "../assets/icons/align/bottom.svg";
import { ReactComponent as AlignHorizontalIcon } from "../assets/icons/align/horizontal.svg";
import { ReactComponent as AlignVerticalIcon } from "../assets/icons/align/vertical.svg";

import Button from "components/buttons/Button";

const Editor = () => {
  const [classNames, setClassNames] = useState([]);

  const onButtonClickHandler = (action) => {
    
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-1/4 border-r-2 border-solid flex flex-col">
        <div className="p-4 w-full h-fit flex justify-between border-b-2 border-solid">
          {Object.entries({
            "justify-start": <AlignLeftIcon />,
            "justify-center": <AlignHorizontalIcon />,
            "justify-end": <AlignRightIcon />,
            "align-top": <AlignTopIcon />,
            "align-center": <AlignVerticalIcon />,
            "align-bottom": <AlignBottomIcon />,
          }).map(([key, icon]) => (
            <span
              role="button"
              tabIndex={0}
              onClick={() => onButtonClickHandler(key)}
            >
              {icon}
            </span>
          ))}
        </div>
        <div className="p-4 flex flex-col">
          <input className="block-inline" name="width" placeholder="Width" />
          <input className="block-inline" name="height" placeholder="Height" />
        </div>
      </div>
      <div className="w-full p-4 flex justify-center items-center">
        <Button variant="primary" className={classNames}>
          Button
        </Button>
      </div>
    </div>
  );
};

export default Editor;
