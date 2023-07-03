import Badge from "../components/badge/Badge";

import { ReactComponent as CheckMarkIcon } from "../assets/icons/checkmark/checkmark.svg";
import { ReactComponent as CrossIcon } from "../assets/icons/close/close.svg";

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
    </>
  );
};

export default BadgeExample;
