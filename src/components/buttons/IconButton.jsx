import { Children, cloneElement, createElement, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { buttonTheme, iconButtonTheme as theme } from "./theme";
import Ripple from "../ripple/Ripple";
import Button from "./Button";

const IconButton = forwardRef((props, ref) => {
  const {
    size = "md",
    as,
    variant,
    outline,
    disabled,
    className,
    children,
    gradientPosition,
    gradientColors,
    gradientMonochrome,
    gradientDuoTone,
    ...buttonProps
  } = props;

  return createElement(
    Button,
    {
      ref,
      disabled,
      size,
      variant,
      outline,
      gradientPosition,
      gradientColors,
      gradientMonochrome,
      gradientDuoTone,
      className: twMerge(theme.base, size && theme.size[size], className),
      ...buttonProps,
    },
    <>
      {Children.map(children, (child, idx) =>
        cloneElement(child, {
          className: twMerge(theme.iconSize[size]),
        })
      )}
      <Ripple />
    </>
  );
});

IconButton.displayName = "IconButton";

export default IconButton;
