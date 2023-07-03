import clsx from "clsx";
import ProtoTypes from "prop-types";

import "./Spinner.css";

const Spinner = ({
  animation = "spinner",
  size = "sm",
  className,
  ...props
}) => {
  return (
    <span
      className={clsx(
        animation ? animation : 'spinner',
        size === "sm" ? "w-4 h-4" : size === "md" ? "w-5 h-5" : "",
        className
      )}
      {...props}
    />
  );
};

export default Spinner;

Spinner.propTypes = {
  animation: ProtoTypes.oneOf(["spinner", "dots-1", 'grow', 'grow-1']),
  size: ProtoTypes.oneOf(["sm", "md"]),
  className: ProtoTypes.string,
};

Spinner.defaultProps = {
  animation: "spinner",
  size: "sm",
  className: undefined,
};
