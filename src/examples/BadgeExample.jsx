import Badge from "../components/badge/Badge";

import { ReactComponent as CheckMarkIcon } from "../assets/icons/checkmark/checkmark.svg";
import { ReactComponent as CrossIcon } from "../assets/icons/close/close.svg";
import { ReactComponent as MessageIcon } from "../assets/icons/message/message-square.svg";

import NotificationBadge from "../components/badge/NotificationBadge";

const VARIANTS = [
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
  "info",
  "light",
  "dark",
  "slate",
  "zinc",
  "neutral",
  "stone",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
];

const row = `flex gap-4 flex-wrap items-center`;

const BadgeExample = () => {
  return (
    <>
      <div className={row}>
        {VARIANTS?.map((variant) => (
          <Badge
            pill
            size="sm"
            variant={variant}
            startIcon={CheckMarkIcon}
            // endIcon={CrossIcon}
            className="capitalize"
          >
            {variant}
          </Badge>
        ))}
      </div>
      <div className={row}>
        <Badge variant="success" startIcon={CheckMarkIcon}>
          StartIcon
        </Badge>
        <Badge variant="danger" endIcon={CrossIcon}>
          EndIcon
        </Badge>
        <Badge variant="" size="xs">
          Extra Small
        </Badge>
        <Badge variant="success" size="xs" endIcon={CrossIcon} />
        <Badge variant="success" endIcon={CrossIcon} />
      </div>

      <div className={row}>
        <NotificationBadge variant="success" content={1}>
          <MessageIcon />
        </NotificationBadge>
        <NotificationBadge
          variant="success"
          content={1}
          originX="right"
          originY="bottom"
        >
          <MessageIcon />
        </NotificationBadge>
        <NotificationBadge
          variant="success"
          content={1}
          originX="left"
          originY="bottom"
        >
          <MessageIcon />
        </NotificationBadge>

        <NotificationBadge
          variant="success"
          content={1}
          originX="left"
          originY="top"
        >
          <MessageIcon />
        </NotificationBadge>
      </div>
    </>
  );
};

export default BadgeExample;
