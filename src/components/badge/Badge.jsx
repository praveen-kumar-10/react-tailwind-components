import { Children, cloneElement, createElement, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

// import { color } from "../theme";
import { badgeTheme as theme } from "./theme";
import { baseTheme, color, rounded } from "../theme";

const Badge = forwardRef((props, ref) => {
  const {
    as: Component = "span",
    size = "sm",
    variant = "primary",
    className,
    children,
    rounded,
    pill = false,
    startIcon: StartIcon,
    endIcon: EndIcon,
  } = props;

  return createElement(
    Component,
    {
      className: twMerge(
        theme.base,
        size && theme.size[size],
        !children && (StartIcon || EndIcon) && "px-1 rounded-full",
        variant ? theme.variant[variant] : theme.variant.primary,
        rounded && baseTheme.rounded[rounded],
        pill && "rounded-full",
        className
      ),
    },
    <>
      {StartIcon && (
        <StartIcon
          className={twMerge(
            "inline",
            children && "mr-1",
            theme.iconSizes[size]
          )}
        />
      )}

      {children}

      {EndIcon && (
        <EndIcon
          className={twMerge(
            "inline",
            children && "ml-1",
            theme.iconSizes[size]
          )}
        />
      )}
    </>
  );
});

Badge.displayName = "Badge";

export default Badge;
