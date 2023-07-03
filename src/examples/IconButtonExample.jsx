import IconButton from "../components/buttons/IconButton";

import { ReactComponent as SettingsIcon } from "../assets/icons/settings/settings.svg";

const row = `flex gap-4 flex-wrap`;

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

const IconButtonExample = () => {
  return (
    <>
      {/* <div className={row + " items-center"}>
        {VARIANTS?.map((variant) => (
          <IconButton variant={variant}>
            <SettingsIcon />
          </IconButton>
        ))}
      </div>
      <div className={row + " items-center"}>
        {VARIANTS?.map((variant) => (
          <IconButton className="border-0" gradientMonochrome={variant}>
            <SettingsIcon />
          </IconButton>
        ))}
      </div>
      <div className={row + " items-center"}>
        {GRADIENT_DUOTONE?.map((variant) => (
          <IconButton gradientDuoTone={variant}>
            <SettingsIcon />
          </IconButton>
        ))}
      </div>
      <div className={row + " items-center"}>
        {VARIANTS?.map((variant) => (
          <IconButton outline variant={variant}>
            <SettingsIcon />
          </IconButton>
        ))}
      </div> */}
      <div className={row}>
        <IconButton variant='text'>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton outline>
          <SettingsIcon />
        </IconButton>
      </div>

      <div className={row + " items-center"}>
        {SIZES?.map((size) => (
          <IconButton variant="secondary" size={size}>
            <SettingsIcon />
          </IconButton>
        ))}
      </div>
    </>
  );
};

export default IconButtonExample;
