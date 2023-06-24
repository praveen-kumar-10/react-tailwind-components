import { ReactComponent as TrashIcon } from "assets/icons/trash/trash.svg";

import Button from "./components/buttons/Button";

import "./App.css";

const row = `flex gap-4 flex-wrap`;

const VARIANTS = [
  "text",
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
  "info",
  "light",
  "dark",
  "link",
];

const OUTINE_VARIANTS = [
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
  "info",
  "light",
  "dark",
];

function App() {
  return (
    <div className="font-mono h-screen bg-white dark:bg-slate-700 p-10 flex flex-col gap-4">
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
            outline
            variant={variant}
            className="capitalize"
          >
            {variant}
          </Button>
        ))}
      </div>
      <div className={row}>
        <Button elementType="button">Button Ele</Button>
        <Button elementType="div">Div</Button>
        <Button elementType="a">A</Button>
      </div>
      <div className={row}>
        <Button variant="primary" isLoading>
          Loading
        </Button>
        <Button variant="primary" isLoading loaderAnimation="dots-1">
          Loading
        </Button>
        <Button variant="primary" isLoading loaderPosition="end">
          Loading
        </Button>
        <Button variant="primary" isLoading loaderSize="md">
          Loading
        </Button>
        <Button variant="primary" isLoading loadingIndicator="Loading...">
          Button
        </Button>
        <Button variant="primary" startIcon={<TrashIcon />}>
          Button
        </Button>
        <Button variant="primary" endIcon={<TrashIcon />}>
          Button
        </Button>
        <Button variant="primary" disabled>
          Disabled
        </Button>
      </div>
    </div>
  );
}

export default App;
