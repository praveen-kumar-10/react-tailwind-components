import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { buttonTheme as theme } from "./theme";
import Ripple from "../ripple/Ripple";
import ToggleButtonGroup from "./ToggleButtonGroup";

const ToggleButton = forwardRef((props, ref) => {
  const {
    value,
    selected,
    onClick,
    onChange,
    size = "md",
    className,
    disabled,
    children,
    variant = "primary",
    ...toggleButtonProps
  } = props;

  const handleChange = (e) => {
    if (onClick) {
      onClick(e, value);
    }

    if (onChange) {
      onChange(e, value);
    }
  };

  return (
    <button
      ref={ref}
      value={value}
      disabled={disabled}
      onClick={handleChange}
      aria-pressed={selected}
      className={twMerge(
        theme?.base,
        theme.variant[variant],
        size && (theme.size[size] || theme.size.md),
        disabled && theme.disabled,
        className,
        )}
        {...toggleButtonProps}
    >
      {children}
      <Ripple />
    </button>
  );
});

ToggleButton.displayName = "ToggleButton";

export default Object.assign(ToggleButton, {
  Group: ToggleButtonGroup,
});
