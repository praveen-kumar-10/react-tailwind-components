import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import { buttonToolbarTheme as theme } from "./theme";

const ButtonToolbar = forwardRef((props, ref) => {
  const { role = "toolbar", className, children, ...toolbarProps } = props;

  return (
    <div
      {...{
        ref,
        role,
        className: twMerge(theme.base, className),
        ...toolbarProps,
      }}
    >
      {children}
    </div>
  );
});

export default ButtonToolbar;
