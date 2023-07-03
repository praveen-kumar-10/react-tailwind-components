import clsx from "clsx";
// import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";
import Spinner from "../src/components/loader/Spinner";

import { forwardRef, useMemo, Fragment } from "react";
import Ripple from "components/ripple/Ripple";

/**
 * Loaders - https://dev.to/afif/i-made-100-css-loaders-for-your-next-project-4eje
 */

/**
 * todos:
 * Add 'active' prop, so if passed the button will shown in active state.
 * Add focus styles
 *
 *
 * Check the Icon Buttons, 'aria-label' should be passed in this case for screen readers
 */

const tailwindButtonClassName = `inline
py-2
px-4 
flex
items-center
gap-2
rounded
hover:opacity-80
disabled:opacity-75
disabled:hover:opacity-75
relative
overflow-hidden
`;
// rounded-full
// focus:ring-4
// focus:opacity-80

const SIZES = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2",
  lg: "px-5 py-2.5 text-lg",
};

const VARIANTS = {
  text: "bg-transparent",
  primary: "bg-blue-600 text-white",
  secondary: "bg-gray-600 text-white",
  success: "bg-green-600 text-white",
  warning: "bg-yellow-400",
  danger: "bg-red-600 text-white",
  info: "bg-sky-400 text-white",
  light: "bg-white",
  dark: "bg-gray-900 text-white",
  link: "bg-transparent underline",
};

const OUTLINE_VARIANTS = {
  primary: "text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white",
  secondary: "text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-white",
  success:
    "text-green-600 border-green-600 hover:bg-green-600 hover:text-white",
  warning:
    "text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-black",
  danger: "text-red-600 border-red-600 hover:bg-red-600 hover:text-white",
  info: "text-sky-400 border-sky-400 hover:bg-sky-400 hover:text-black",
  light: "text-white border-white hover:bg-white hover:text-black",
  dark: "text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white",
};

const Button = forwardRef((props, ref) => {
  const {
    size = "md",
    type = "button",
    elementType: ElementType = "button",
    startIcon,
    endIcon,
    className,
    variant = "text",
    outline = false,
    isLoading = false,
    isLoader = true,
    loaderSize = "sm",
    loaderAnimation = "spinner",
    loaderPosition = "start",
    loadingIndicator,
    children,
    disabled,
    active,
    ...buttonProps
  } = props;

  let accessibilityProps = useMemo(() => {
    // todo: Change the above with Map, just for optimization
    let accessibilityMap = {};

    if (ElementType !== "button") {
      accessibilityMap = { role: "button", tabIndex: 0 };
    }

    return accessibilityMap;
  }, [ElementType]);

  let buttonChildren = useMemo(() => {
    let btnChildren = [];

    startIcon && btnChildren.push(startIcon);

    isLoading && loadingIndicator
      ? btnChildren.push(loadingIndicator)
      : btnChildren.push(children);

    endIcon && btnChildren.push(endIcon);

    if (isLoading && isLoader) {
      let loaderProps = {
        size: loaderSize,
        animation: loaderAnimation,
      };
      if (loaderPosition === "start")
        btnChildren.unshift(<Spinner {...loaderProps} />);
      else if (loaderPosition === "end")
        btnChildren.push(<Spinner {...loaderProps} />);
    }
    return btnChildren;
  }, [
    children,
    endIcon,
    isLoader,
    isLoading,
    loaderAnimation,
    loaderPosition,
    loaderSize,
    loadingIndicator,
    startIcon,
  ]);

  return (
    <ElementType
      {...{
        ...buttonProps,
        ...accessibilityProps,
        ref,
        type,
        disabled: disabled || isLoading,
      }}
      className={clsx(
        tailwindButtonClassName?.split("\n")?.join(" "),
        variant && !outline && VARIANTS[variant],
        outline && ["border-2 border-solid", OUTLINE_VARIANTS[variant]],
        size && SIZES[size],
        isLoading && "cursor-wait",
        disabled && "cursor-not-allowed",
        className
      )}
    >
      {buttonChildren?.map((child, idx) => (
        <Fragment key={idx}>{child}</Fragment>
      ))}

      <Ripple />
    </ElementType>
  );
});

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  elementType: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  variant: PropTypes.oneOf([
    "text",
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
    "link",
  ]),
  outline: PropTypes.bool,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  isLoader: PropTypes.bool,
  loader: PropTypes.node,
  loaderSize: PropTypes.oneOf(["sm", "md"]),
  loaderAnimation: PropTypes.oneOf(["spinner", "dots-1"]),
  loaderPosition: PropTypes.oneOf(["start", "end"]),
  loadingIndicator: PropTypes.node,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: "button",
  variant: "text",
  elementType: undefined,
  outline: false,
  startIcon: undefined,
  endIcon: undefined,
  className: undefined,
  isLoading: false,
  isLoader: true,
  loader: undefined,
  loaderSize: "sm",
  loaderAnimation: "spinner",
  loaderPosition: "start",
  loadingIndicator: undefined,
  disabled: false,
  children: undefined,
  onClick: undefined,
};

export default Button;
