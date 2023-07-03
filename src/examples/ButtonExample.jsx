import { ReactComponent as TrashIcon } from "../assets/icons/trash/trash.svg";
import trashIcon from "../assets/icons/trash/trash.svg";

import Button from "../components/buttons/Button";

const row = `flex gap-4 flex-wrap`;

const VARIANTS = [
  "text",
  "link",
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

const OUTINE_VARIANTS = VARIANTS.slice(2);

const GRADIENT_DUOTONE = [
  "megatron",
  "amin",
  "flare",
  "burningorange",
  "wiretrap",
  "summerdog",
  "quepal",
  "sublimelight",
  "relaxingred",
  "mango",
  "electricviolet",
];

const SIZES = ["xs", "sm", "md", "lg", "xl"];

const LOADERS = ["spinner", "dots-1", "grow", "grow-1"];

const ROUNDED = {
  sm: "Small",
  md: "Medium",
  default: "Default",
  lg: "Large",
  xl: "Extra Large",
  "2xl": "2XL",
  "3xl": "3XL",
  full: "Full",
  none: "None",
};

const ButtonExample = () => {
  return (
    <>
      <div className={row}>
        {VARIANTS?.map((variant) => (
          <Button key={variant} variant={variant} className="capitalize">
            {variant}
          </Button>
        ))}
      </div>

      <div className={row}>
        {OUTINE_VARIANTS?.map((variant) => (
          <Button
            key={variant}
            soft
            variant={variant}
            rounded="lg"
            className="capitalize"
          >
            {variant}
          </Button>
        ))}
      </div>

      <div className={row}>
        {OUTINE_VARIANTS?.map((variant) => (
          <Button
            key={variant}
            outline
            variant={variant}
            className="capitalize"
          >
            {variant}
          </Button>
        ))}
      </div>

      <div className={row}>
        {OUTINE_VARIANTS?.map((variant) => (
          <Button
            key={variant}
            gradientMonochrome={variant}
            className="capitalize"
          >
            {variant}
          </Button>
        ))}
      </div>

      <div className={row}>
        {OUTINE_VARIANTS?.map((variant) => (
          <Button
            key={variant}
            gradientMonochrome={variant}
            className="capitalize border-0"
          >
            {variant}
          </Button>
        ))}
      </div>

      <div className={row}>
        {GRADIENT_DUOTONE?.map((variant) => (
          <Button
            key={variant}
            gradientDuoTone={variant}
            className="capitalize"
          >
            {variant}
          </Button>
        ))}
      </div>

      <div className={row}>
        <Button gradientColors={["red-600", "orange-600", "yellow-400"]}>
          Custom Gradient Button
        </Button>
        <Button
          gradientColors={[
            {
              color: "rose-500",
              stop: 10,
            },
            {
              color: "red-500",
              stop: 50,
            },
            {
              color: "yellow-400",
              stop: 90,
            },
          ]}
        >
          Custom Gradient Button
        </Button>
      </div>

      <div className="flex items-center gap-1">
        {SIZES?.map((size) => (
          <Button key={size} size={size}>
            Button
          </Button>
        ))}
      </div>

      <div className={row}>
        {Object.entries(ROUNDED)?.map(([rounded, label]) => (
          <Button key={rounded} rounded={rounded}>
            {`${label} Button`}
          </Button>
        ))}
      </div>

      <div className={row}>
        <Button as="button">Button Ele</Button>
        <Button as="div">Div</Button>
        <Button as="a" href="#">
          Anchor
        </Button>
      </div>

      <div className={row}>
        {LOADERS?.map((animation) => (
          <Button key={animation} isLoading loaderAnimation={animation}>
            Loading
          </Button>
        ))}
      </div>

      <div className={row}>
        <Button isLoading loaderPosition="end">
          Loading
        </Button>
        <Button isLoading loaderSize="md">
          Loading
        </Button>
        <Button isLoading loadingIndicator="Loading...">
          Button
        </Button>
      </div>

      <div className={row}>
        <Button startIcon={<TrashIcon />}>Button</Button>
        <Button endIcon={<TrashIcon />}>Button</Button>
      </div>

      <div className={row}>
        <Button disabled>Disabled</Button>
      </div>
    </>
  );
};

export default ButtonExample;
