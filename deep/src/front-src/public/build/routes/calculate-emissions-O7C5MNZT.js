import {
  Calculator_default,
  defaultChain
} from "/build/_shared/chunk-MSB7Y2RR.js";
import "/build/_shared/chunk-XI7XXCOH.js";
import "/build/_shared/chunk-OCIN7GG6.js";
import {
  require_deno
} from "/build/_shared/chunk-WUR62FST.js";
import {
  init_dist,
  useLoaderData,
  useLocation,
  useNavigate
} from "/build/_shared/chunk-7KR3KC3F.js";
import "/build/_shared/chunk-H36SQQE5.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import {
  createHotContext
} from "/build/_shared/chunk-E6SGNXN2.js";
import "/build/_shared/chunk-N4FG5RPV.js";
import {
  require_react
} from "/build/_shared/chunk-TVZC3ZTX.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/routes/calculate-emissions.tsx
var import_react = __toESM(require_react());
init_dist();
var import_deno = __toESM(require_deno());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/calculate-emissions.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/calculate-emissions.tsx"
  );
  import.meta.hot.lastModified = "1728767387048.1558";
}
var CalculateEmissionsPage = () => {
  _s();
  const navigate = useNavigate();
  const location = useLocation();
  (0, import_react.useEffect)(() => {
    const unloadHandler = (event) => {
      event.preventDefault();
    };
    window.addEventListener("beforeunload", unloadHandler);
    return () => {
      window.removeEventListener("beforeunload", unloadHandler);
    };
  }, [location]);
  const initialChain = defaultChain(
    // Use these two cities as examples for the user. Maybe change later.
    {
      city: "",
      country: ""
    },
    {
      city: "",
      country: ""
    }
  );
  const [chain, setChain] = (0, import_react.useState)(initialChain);
  window.onbeforeunload = function() {
    return true;
  };
  const {
    userId
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " min-h-screen flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Calculator_default, { isProject: false, userId, chain, setChain }, void 0, false, {
    fileName: "app/routes/calculate-emissions.tsx",
    lineNumber: 75,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/calculate-emissions.tsx",
    lineNumber: 74,
    columnNumber: 10
  }, this);
};
_s(CalculateEmissionsPage, "+EfySvQF+ez9TQYV9xFz4zDQ4m8=", false, function() {
  return [useNavigate, useLocation, useLoaderData];
});
_c = CalculateEmissionsPage;
var calculate_emissions_default = CalculateEmissionsPage;
var _c;
$RefreshReg$(_c, "CalculateEmissionsPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  calculate_emissions_default as default
};
//# sourceMappingURL=/build/routes/calculate-emissions-O7C5MNZT.js.map
