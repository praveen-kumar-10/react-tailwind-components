import { forwardRef } from "react";

import { notificationBadgeTheme as theme } from "./theme";
import { twMerge } from "tailwind-merge";
import Badge from "./Badge";

const NotificationBadge = forwardRef((props, ref) => {
  const {
    variant,
    content,
    max = 99,
    showZero = false,
    className,
    children,
    originX = "right",
    originY = "top",
  } = props;

  return (
    <span className={twMerge(theme.base)}>
      {children}
      {(content !== 0 || showZero) && (
        <Badge
          pill
          variant={variant}
          size="xs"
          className={twMerge(
            theme.badge.base,
            theme.badge.origin[originY ?? "top"][originX?? "right"],
            className
          )}
        >
          {containsOnlyNumbers(content)
            ? parseInt(content) > max
              ? `${max}+`
              : content
            : content}
        </Badge>
      )}
    </span>
  );
});

NotificationBadge.displayName = "NotificationBadge";

export default NotificationBadge;

function containsOnlyNumbers(str) {
  return /^[0-9]+$/.test(str);
}
