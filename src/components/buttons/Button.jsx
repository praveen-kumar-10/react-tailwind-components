import { forwardRef, useMemo, createElement } from "react";
import { twMerge } from "tailwind-merge";

import { buttonTheme as theme } from "./theme";

import Spinner from "../loader/Spinner";
import Ripple from "../ripple/Ripple";

import ButtonGroup from "./ButtonGroup";
import ButtonToolbar from "./ButtonToolbar";
import { baseTheme } from "../theme";

const Button = forwardRef((props, ref) => {
  const {
    size = "md",
    type = "button",
    as: Component = "button",
    startIcon,
    endIcon,
    className,
    variant = "primary",
    soft = false,
    outline = false,
    isLoading = false,
    isLoader = true,
    loaderSize = "sm",
    loaderAnimation = "spinner",
    loaderPosition = "start",
    loadingIndicator,
    children,
    disabled,
    // active,
    shadow = "none",
    rounded,
    gradientPosition = "right",
    gradientColors,
    gradientMonochrome,
    gradientDuoTone,
    ...buttonProps
  } = props;

  let accessibilityProps = useMemo(() => {
    // todo: Change the above with Map, just for optimization
    let accessibilityMap = {};

    if (Component !== "button") {
      accessibilityMap = { role: "button", tabIndex: 0 };
    }

    return accessibilityMap;
  }, [Component]);

  let loaderProps = useMemo(() => {
    return {
      size: loaderSize,
      animation: loaderAnimation,
    };
  }, [loaderAnimation, loaderSize]);

  let customGradient = useMemo(() => {
    if (Array.isArray(gradientColors)) {
      return gradientColors.map((gradient, idx) => {
        if (typeof gradient === "object") {
          if (idx === 0)
            return [
              gradient?.color && `from-${gradient?.color}`,
              gradient?.stop && `from-${gradient?.stop}%`,
            ];
          else if (idx === gradientColors?.length - 1)
            return [
              gradient?.color && `to-${gradient?.color}`,
              gradient?.stop && `to-${gradient?.stop}%`,
            ];
          else
            return [
              gradient?.color && `via-${gradient?.color}`,
              gradient?.stop && `via-${gradient?.stop}%`,
            ];
        } else {
          return idx === 0
            ? `from-${gradient}`
            : idx === gradientColors?.length - 1
            ? `to-${gradient}`
            : `via-${gradient}`;
        }
      });
    }
  }, [gradientColors]);

  return createElement(
    Component,
    {
      ref,
      type,
      disabled: disabled || isLoading,
      className: twMerge(
        theme.base,
        shadow && theme.shadow[shadow],
        variant && (theme.variant[variant] ?? theme.variant.primary),
        outline && [
          "bg-transparent enabled:hover:text-white",
          theme.outline[variant],
        ],
        soft && [theme.soft[variant]],
        gradientPosition &&
          (gradientMonochrome || gradientDuoTone) && [
            theme.gradientPosition[gradientPosition],
            "enabled:hover:bg-gradient-to-br",
          ],
        gradientColors && [
          "border-0",
          theme.gradientPosition[gradientPosition],
          ...customGradient,
        ],
        gradientMonochrome && theme.gradientMonochrome[gradientMonochrome],
        gradientDuoTone && theme.gradientDuoTone[gradientDuoTone],
        disabled && theme.disabled,
        isLoading && theme.isLoading,
        size && (theme.size[size] || theme.size.md),
        rounded && (baseTheme.rounded[rounded] ?? theme.rounded.default),
        className
      ),
      ...buttonProps,
      ...accessibilityProps,
    },
    <>
      {isLoading && isLoader && loaderPosition === "start" && (
        <Spinner {...loaderProps} />
      )}

      {startIcon && startIcon}

      {isLoading && loadingIndicator ? (
        <span>{loadingIndicator}</span>
      ) : (
        <span>{children}</span>
      )}

      {endIcon && endIcon}

      {isLoading && isLoader && loaderPosition === "end" && (
        <Spinner {...loaderProps} />
      )}

      {!isLoading && !disabled && <Ripple />}
    </>
  );
});

Button.displayName = "Button";

export default Object.assign(Button, {
  Group: ButtonGroup,
  Toolbar: ButtonToolbar,
});
