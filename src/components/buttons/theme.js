
const size = {
  xs: "text-xs px-2 py-1",
  sm: "text-sm px-3 py-1.5",
  md: "text-sm px-4 py-2",
  lg: "text-base px-5 py-2.5",
  xl: "text-base px-6 py-3",
};

const shadow = {
  none: "shadow-none",
  default: "shadow",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
  "2xl": "shadow-2xl",
  inner: "shadow-inner",
};

const gradientPosition = {
  top: "bg-gradient-to-t",
  left: "bg-gradient-to-l",
  bottom: "bg-gradient-to-b",
  right: "bg-gradient-to-r",
  "top-left": "bg-gradient-to-tl",
  "top-right": "bg-gradient-to-tr",
  "bottom-left": "bg-gradient-to-bl",
  "bottom-right": "bg-gradient-to-br",
};

const gradientDuoTone = {
  megatron: "from-teal-300 via-yellow-200 to-red-400 text-black border-0",
  amin: "from-purple-700 to-indigo-700 text-white border-0",
  flare: "from-orange-600 to-yellow-400 border-0",
  burningorange: "from-rose-600 to-orange-500 border-0",
  wiretrap: "from-fuchsia-600 via-rose-600 to-orange-600 border-0",
  summerdog: "from-lime-300 to-teal-300 text-black border-0",
  quepal: "from-emerald-400 to-lime-400 text-black border-0",
  sublimelight: "from-pink-500 to-indigo-500 border-0",
  relaxingred: "from-yellow-100 to-red-600 text-black border-0",
  mango: "from-amber-300 to-orange-400 border-0",
  electricviolet: "from-indigo-500 to-violet-600 border-0",
};

const gradientMonochrome = {
  primary: "from-indigo-500 via-indigo-600 to-indigo-700",
  secondary: "from-gray-500 via-gray-600 to-gray-700",
  success: "from-green-500 via-green-600 to-green-700",
  warning: "from-yellow-400 via-yellow-500 to-yellow-600 text-black",
  danger: "from-red-500 via-red-600 to-red-700",
  info: "from-sky-500 via-sky-600 to-sky-700",
  dark: "from-gray-500 via-gray-600 to-gray-700",
  light: "from-slate-100 via-slate-200 to-slate-400 text-black",
  slate: "from-slate-500 via-slate-600 to-slate-700",
  zinc: "from-zinc-500 via-zinc-600 to-zinc-700",
  neutral: "from-neutral-500 via-neutral-600 to-neutral-700",
  stone: "from-stone-500 via-stone-600 to-stone-700",
  orange: "from-orange-500 via-orange-600 to-orange-700",
  amber: "from-amber-500 via-amber-600 to-amber-700",
  yellow: "from-yellow-500 via-yellow-600 to-yellow-700",
  lime: "from-lime-500 via-lime-600 to-lime-700",
  green: "from-green-500 via-green-600 to-green-700",
  emerald: "from-emerald-500 via-emerald-600 to-emerald-700",
  teal: "from-teal-500 via-teal-600 to-teal-700",
  cyan: "from-cyan-500 via-cyan-600 to-cyan-700",
  sky: "from-sky-500 via-sky-600 to-sky-700",
  blue: "from-blue-500 via-blue-600 to-blue-700",
  violet: "from-violet-500 via-violet-600 to-violet-700",
  purple: "from-purple-500 via-purple-600 to-purple-700",
  fuchsia: "from-fuchsia-500 via-fuchsia-600 to-fuchsia-700",
  pink: "from-pink-500 via-pink-600 to-pink-700",
  rose: "from-rose-500 via-rose-600 to-rose-700",
};

const soft = {
  primary: "bg-indigo-600/30 text-indigo-900 dark:text-indigo-100 font-bold",
  secondary: "bg-gray-600/30 text-gray-900 dark:text-gray-300 font-bold",
  success: "bg-green-500/30 text-green-900 dark:text-green-400 font-bold",
  warning: "bg-yellow-500/30 text-yellow-700 dark:text-yellow-300 font-bold",
  danger:
    "bg-red-600/30 text-red-900 dark:bg-red-300/80 dark:text-red-900 font-bold",
  info: "bg-sky-600/30 text-sky-900 dark:text-sky-300 font-bold",
  dark: "bg-gray-600/30 text-gray-900 dark:text-gray-200 font-bold",
  light:
    "bg-slate-100 dark:bg-slate-50/10 text-slate-900 dark:text-slate-200 font-bold",
  slate: "bg-slate-600/30 text-slate-900 dark:text-slate-200 font-bold",
  zinc: "bg-zinc-600/30 text-zinc-900 dark:text-zinc-200 font-bold",
  neutral: "bg-neutral-600/30 text-neutral-900 dark:text-neutral-200 font-bold",
  stone: "bg-stone-600/30 text-stone-900 dark:text-stone-200 font-bold",
  orange: "bg-orange-600/30 text-orange-900 dark:text-orange-200 font-bold",
  amber: "bg-amber-600/30 text-amber-900 dark:text-amber-200 font-bold",
  yellow: "bg-yellow-400/30 text-yellow-700 dark:text-yellow-200 font-bold",
  lime: "bg-lime-600/30 text-lime-900 dark:text-lime-200 font-bold",
  green: "bg-green-600/30 text-green-900 dark:text-green-200 font-bold",
  emerald: "bg-emerald-600/30 text-emerald-900 dark:text-emerald-200 font-bold",
  teal: "bg-teal-600/30 text-teal-900 dark:text-teal-200 font-bold",
  cyan: "bg-cyan-600/30 text-cyan-900 dark:text-cyan-200 font-bold",
  sky: "bg-sky-600/30 text-sky-900 dark:text-sky-200 font-bold",
  blue: "bg-blue-600/30 text-blue-900 dark:text-blue-200 font-bold",
  violet: "bg-violet-600/20 text-violet-900 dark:text-violet-300 font-bold",
  purple: "bg-purple-600/20 text-purple-900 dark:text-purple-300 font-bold",
  fuchsia: "bg-fuchsia-600/20 text-fuchsia-900 dark:text-fuchsia-300 font-bold",
  pink: "bg-pink-600/20 text-pink-900 dark:text-pink-300 font-bold",
  rose: "bg-rose-600/20 text-rose-900 dark:text-rose-300 font-bold",
};

const variant = {
  text: "shadow-none text-black dark:text-white",
  link: "underline shadow-none dark:text-white",
  primary:
    "bg-indigo-600 text-white enabled:hover:bg-indigo-600/60 aria-pressed:bg-indigo-700 shadow-indigo-700/50",
  secondary:
    "bg-gray-600 text-white enabled:hover:bg-gray-600/60 aria-pressed:bg-gray-700 shadow-gray-700/50",
  success:
    "bg-green-600 text-white enabled:hover:bg-green-600/60 aria-pressed:bg-green-700 shadow-green-700/50",
  warning:
    "bg-yellow-400 enabled:hover:bg-yellow-400/60 aria-pressed:bg-yellow-700 shadow-yellow-700/50",
  danger:
    "bg-red-600 text-white enabled:hover:bg-red-600/60 aria-pressed:bg-red-700 shadow-red-700/50",
  info: "bg-sky-400 text-white enabled:hover:bg-sky-600/60 aria-pressed:bg-sky-700 shadow-sky-700/50",
  dark: "bg-gray-800 text-white enabled:hover:bg-gray-800/60 aria-pressed:bg-gray-900 shadow-gray-900/50",
  light: "bg-slate-100 enabled:hover:bg-slate-100/60 aria-pressed:bg-slate-700 shadow-slate-700/50",
  slate:
    "bg-slate-600 text-white enabled:hover:bg-slate-600/60 aria-pressed:bg-slate-700 shadow-slate-700/50",
  zinc: "bg-zinc-600 text-white enabled:hover:bg-zinc-600/60 aria-pressed:bg-zinc-700 shadow-zinc-700/50",
  neutral:
    "bg-neutral-600 text-white enabled:hover:bg-neutral-600/60 aria-pressed:bg-neutral-700 shadow-neutral-700/50",
  stone:
    "bg-stone-600 text-white enabled:hover:bg-stone-600/60 aria-pressed:bg-stone-700 shadow-stone-700/50",
  orange:
    "bg-orange-600 text-white enabled:hover:bg-orange-600/60 aria-pressed:bg-orange-700 shadow-orange-700/50",
  amber:
    "bg-amber-600 text-white enabled:hover:bg-amber-600/60 aria-pressed:bg-amber-700 shadow-amber-700/50",
  yellow:
    "bg-yellow-400 enabled:hover:bg-yellow-400/60 aria-pressed:bg-yellow-700 shadow-yellow-700/50",
  lime: "bg-lime-600 text-white enabled:hover:bg-lime-600/60 aria-pressed:bg-lime-700 shadow-lime-700/50",
  green:
    "bg-green-600 text-white enabled:hover:bg-green-600/60 aria-pressed:bg-green-700 shadow-green-700/50",
  emerald:
    "bg-emerald-600 text-white enabled:hover:bg-emerald-600/60 aria-pressed:bg-emerald-700 shadow-emerald-700/50",
  teal: "bg-teal-600 text-white enabled:hover:bg-teal-600/60 aria-pressed:bg-teal-700 shadow-teal-700/50",
  cyan: "bg-cyan-600 text-white enabled:hover:bg-cyan-600/60 aria-pressed:bg-cyan-700 shadow-cyan-700/50",
  sky: "bg-sky-600 text-white enabled:hover:bg-sky-600/60 aria-pressed:bg-sky-700 shadow-sky-700/50",
  blue: "bg-blue-600 text-white enabled:hover:bg-blue-600/60 aria-pressed:bg-blue-700 shadow-blue-700/50",
  violet:
    "bg-violet-600 text-white enabled:hover:bg-violet-600/60 aria-pressed:bg-violet-700 shadow-violet-700/50",
  purple:
    "bg-purple-600 text-white enabled:hover:bg-purple-600/60 aria-pressed:bg-purple-700 shadow-purple-700/50",
  fuchsia:
    "bg-fuchsia-600 text-white enabled:hover:bg-fuchsia-600/60 aria-pressed:bg-fuchsia-700 shadow-fuchsia-700/50",
  pink: "bg-pink-600 text-white enabled:hover:bg-pink-600/60 aria-pressed:bg-pink-700 shadow-pink-700/50",
  rose: "bg-rose-600 text-white enabled:hover:bg-rose-600/60 aria-pressed:bg-rose-700 shadow-rose-700/50",
};

export const buttonTheme = {
  base: "relative inline-block flex items-center justify-center gap-2 rounded border border-transparent overflow-hidden",
  size,
  shadow,
  variant,
  outline: {
    primary: "text-indigo-600 border-indigo-600 enabled:hover:bg-indigo-600",
    secondary: "text-gray-600 border-gray-600 enabled:hover:bg-gray-600",
    success: "text-green-600 border-green-600 enabled:hover:bg-green-600",
    warning:
      "text-yellow-400 border-yellow-400 enabled:hover:bg-yellow-400 enabled:hover:text-black",
    danger: "text-red-600 border-red-600 enabled:hover:bg-red-600",
    info: "text-sky-400 border-sky-400 enabled:hover:bg-sky-400",
    dark: "text-gray-900 border-gray-900 enabled:hover:bg-gray-900",
    light:
      "text-slate-100 border-slate-100 enabled:hover:bg-slate-100 enabled:hover:text-black",
    slate: "text-slate-600 border-slate-600 enabled:hover:bg-slate-600",
    zinc: "text-zinc-600 border-zinc-600 enabled:hover:bg-zinc-600",
    neutral: "text-neutral-600 border-neutral-600 enabled:hover:bg-neutral-600",
    stone: "text-stone-600 border-stone-600 enabled:hover:bg-stone-600",
    orange: "text-orange-600 border-orange-600 enabled:hover:bg-orange-600",
    amber: "text-amber-600 border-amber-600 enabled:hover:bg-amber-600",
    yellow: "text-yellow-400 border-yellow-400 enabled:hover:bg-yellow-400",
    lime: "text-lime-600 border-lime-600 enabled:hover:bg-lime-600",
    green: "text-green-600 border-green-600 enabled:hover:bg-green-600",
    emerald: "text-emerald-600 border-emerald-600 enabled:hover:bg-emerald-600",
    teal: "text-teal-600 border-teal-600 enabled:hover:bg-teal-600",
    cyan: "text-cyan-600 border-cyan-600 enabled:hover:bg-cyan-600",
    sky: "text-sky-600 border-sky-600 enabled:hover:bg-sky-600",
    blue: "text-blue-600 border-blue-600 enabled:hover:bg-blue-600",
    violet: "text-violet-600 border-violet-600 enabled:hover:bg-violet-600",
    purple: "text-purple-600 border-purple-600 enabled:hover:bg-purple-600",
    fuchsia: "text-fuchsia-600 border-fuchsia-600 enabled:hover:bg-fuchsia-600",
    pink: "text-pink-600 border-pink-600 enabled:hover:bg-pink-600",
    rose: "text-rose-600 border-rose-600 enabled:hover:bg-rose-600",
  },
  soft,
  gradientPosition,
  gradientMonochrome,
  gradientDuoTone,
  disabled: "cursor-not-allowed opacity-70",
  isLoading: "cursor-wait opacity-70",
};

export const buttonToolbarTheme = {
  base: "flex flex-wrap gap-2",
};

export const buttonGroupTheme = {
  base: "inline-flex",
  vertical: "w-fit flex flex-col items-center",
  position: {
    base: {
      none: "rounded-md",
      start: "rounded-r-none",
      middle: "rounded-none border-l-0",
      end: "rounded-l-none border-l-0",
    },
    vertical: {
      none: "rounded-md",
      start: "rounded-b-none",
      middle: "rounded-none border-t-0",
      end: "rounded-t-none border-t-0",
    },
  },
};

export const iconButtonTheme = {
  base: "w-fit h-fit box-border relative inline-block flex items-center justify-center gap-2 rounded-full overflow-hidden hover:bg-white/20",
  size: {
    xs: "text-xs px-1.5 py-1.5",
    sm: "text-sm px-1.5 py-1.5",
    md: "text-sm px-2 py-2",
    lg: "text-base px-2 py-2",
    xl: "text-base px-2 py-2",
  },
  iconSize: {
    xs: "w-5 h-5",
    sm: "w-6 h-6",
    md: "w-7 h-7",
    lg: "w-8 h-8",
    xl: "w-9 h-9",
  },
};
