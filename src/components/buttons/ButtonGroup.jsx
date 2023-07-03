import { Children, cloneElement, createElement, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import { buttonGroupTheme as theme } from "./theme";

const ButtonGroup = forwardRef((props, ref) => {
  const {
    as: Component = "div",
    role = "group",
    size = "md",
    vertical = false,
    variant = "primary",
    soft = false,
    outline = false,
    className,
    children,
    ...groupProps
  } = props;

  return createElement(
    Component,
    {
      ref,
      role,
      className: twMerge(theme.base, vertical && theme.vertical, className),
    },
    <>
      {Children.map(children, (child, idx) =>
        cloneElement(child, {
          variant: variant ? variant : "primary",
          outline,
          soft,
          size: size ? size : "md",
          className: twMerge(
            "w-full",
            outline,
            variant === "text" && [
              vertical
                ? "border-slate-200 border-x-0 border-t-0 last:border-0 rounded-none"
                : "border-slate-200 border-y-0 border-l-0 last:border-0 rounded-none",
              "enabled:hover:bg-slate-100/10",
            ],
            variant !== "text" &&
              theme.position[vertical ? "vertical" : "base"][
                !Array.isArray(children)
                  ? "none"
                  : idx === 0
                  ? "start"
                  : idx === children.length - 1
                  ? "end"
                  : "middle"
              ],
            className
          ),
          ...groupProps,
        })
      )}
    </>
  );
});

export default ButtonGroup;
