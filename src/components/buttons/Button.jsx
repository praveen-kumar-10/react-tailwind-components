import clsx from "clsx";
import PropTypes from "prop-types";
import Spinner from "../loader/Spinner";

import { forwardRef, useMemo } from "react";

/**
 * Loaders - https://dev.to/afif/i-made-100-css-loaders-for-your-next-project-4eje, https://dev.to/afif/i-made-100-css-loaders-for-your-next-project-4eje
 */

const tailwindButtonClassName = `
py-2
px-4 
flex
items-center
gap-2
rounded
hover:opacity-80
focus:opacity-80
disabled:opacity-75
disabled:hover:opacity-75
`;

const VARIANTS = {
  text: "bg-transparent",
  primary: "bg-blue-600 text-white",
  secondary: "bg-gray-800 text-white",
  success: "bg-green-600 text-white",
  warning: "bg-yellow-400",
  danger: "bg-red-600",
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
    ...buttonProps
  } = props;

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
      {...buttonProps}
      {...{ ref, type, disabled: isLoading || disabled }}
      className={clsx(
        tailwindButtonClassName?.split("\n")?.join(" "),
        variant && !outline && VARIANTS[variant],
        outline && ["border-2 border-solid", OUTLINE_VARIANTS[variant]],
        className
      )}
    >
      {buttonChildren?.map((child) => (
        <>{child}</>
      ))}
    </ElementType>
  );
});

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
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
