import { Children, cloneElement, createElement, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { buttonGroupTheme as theme } from "./theme";

const ToggleButtonGroup = forwardRef((props, ref) => {
  const {
    as: Component = "div",
    role = "group",
    size = "md",
    vertical = false,
    variant = "primary",
    outline = false,
    className,
    children,
    value,
    onChange,
    multiple,
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
      {Children.map(children, (child, idx) => {
        const { value: childValue } = child.props;

        const handleChange = (e) => {
          if (multiple) {
            !value.includes(childValue) && onChange(e, [...value, childValue]);
            value.includes(childValue) &&
              onChange(
                e,
                value.filter((val) => val !== childValue)
              );
          } else onChange(e, value === childValue ? null : childValue);
        };

        return cloneElement(child, {
          selected: multiple
            ? value?.includes(childValue)
            : value === childValue,
          onChange: handleChange,
          variant: variant ? variant : "primary",
          outline,
          size: size ? size : "md",
          className: twMerge(
            "w-full",
            outline,
            variant === "text" && [
              vertical
                ? "border-slate-200 border-x-0 border-t-0 last:border-0 rounded-none"
                : "border-slate-200 border-y-0 border-l-0 last:border-0 rounded-none",
              "enabled:hover:bg-slate-100/10 dark:text-white",
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
        });
      })}
    </>
  );
});

export default ToggleButtonGroup;
