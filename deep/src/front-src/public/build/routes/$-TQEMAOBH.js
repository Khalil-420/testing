import {
  Link,
  useOutletContext
} from "/build/_shared/chunk-7KR3KC3F.js";
import "/build/_shared/chunk-H36SQQE5.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import {
  createHotContext
} from "/build/_shared/chunk-E6SGNXN2.js";
import "/build/_shared/chunk-N4FG5RPV.js";
import "/build/_shared/chunk-TVZC3ZTX.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/assets/dump-truck.gif
var dump_truck_default = "/build/_assets/dump-truck-NBU7V4OA.gif";

// app/routes/$.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/$.tsx"
  );
  import.meta.hot.lastModified = "1728767387048.1558";
}
var notfound = () => {
  const { supabase, domainUrl } = useOutletContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center justify-center min-h-[100dvh] gap-6 px-4 md:px-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://ayran-ibm-sl.deno.dev/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "img",
      {
        alt: "404 Illustration",
        className: "max-w-[300px] sm:max-w-[400px]",
        height: 400,
        src: dump_truck_default,
        style: {
          aspectRatio: "400/400",
          objectFit: "cover"
        },
        width: 400
      },
      void 0,
      false,
      {
        fileName: "app/routes/$.tsx",
        lineNumber: 27,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/$.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl", children: "Oops! Page not found." }, void 0, false, {
        fileName: "app/routes/$.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-500 dark:text-gray-400 max-w-[500px]", children: "The page you are looking for doesn't exist or has been moved. Let's get you back on track." }, void 0, false, {
        fileName: "app/routes/$.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Link,
        {
          className: "inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300",
          to: "/",
          children: "Go to Homepage"
        },
        void 0,
        false,
        {
          fileName: "app/routes/$.tsx",
          lineNumber: 47,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/$.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/$.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
};
var __default = notfound;
export {
  __default as default
};
//# sourceMappingURL=/build/routes/$-TQEMAOBH.js.map
