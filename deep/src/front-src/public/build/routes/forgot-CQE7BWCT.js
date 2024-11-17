import {
  CALC_default
} from "/build/_shared/chunk-3FLRWJMW.js";
import {
  require_deno
} from "/build/_shared/chunk-WUR62FST.js";
import {
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
import {
  require_react
} from "/build/_shared/chunk-TVZC3ZTX.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/routes/forgot.tsx
var import_deno = __toESM(require_deno());

// app/components/account/ForgotForm.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/account/ForgotForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/account/ForgotForm.tsx"
  );
  import.meta.hot.lastModified = "1728767387048.1558";
}
var ForgotForm = ({
  supabase,
  domain_url
}) => {
  _s();
  const initialFormState = {
    email: ""
  };
  const [formData, setFormData] = (0, import_react.useState)(initialFormState);
  const [showError, setShowError] = (0, import_react.useState)(false);
  const [errorMessage, setErrorMessage] = (0, import_react.useState)("");
  const [showMessage, setShowMessage] = (0, import_react.useState)(false);
  const [message, setMessage] = (0, import_react.useState)("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${window.location.origin}/reset`;
    const {
      error
    } = await supabase.auth.resetPasswordForEmail(formData.email, {
      redirectTo: url
    });
    try {
      if (error) {
        setErrorMessage(error.message);
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 5e3);
      } else {
        setShowMessage(true);
        setMessage("Reset link sent to your email. If the proved email is registered in our database, then you should receive the link very soon.");
        setTimeout(() => {
          setShowMessage(false);
        }, 5e3);
      }
    } catch (error2) {
      console.error(error2);
    }
  };
  const handleInputChange = (e) => {
    const {
      name,
      value
    } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-sm rounded-lg shadow-lg bg-white p-6 space-y-6  dark:border-gray-700  ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2 text-center justify-center items-center ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold", children: "Forgot Password" }, void 0, false, {
        fileName: "app/components/account/ForgotForm.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-zinc-500 dark:text-zinc-400", children: "Enter your email so we can send you a reset link" }, void 0, false, {
        fileName: "app/components/account/ForgotForm.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/account/ForgotForm.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: CALC_default, alt: "IBM Logo", className: "block mx-auto w-24 object-cover" }, void 0, false, {
      fileName: "app/components/account/ForgotForm.tsx",
      lineNumber: 89,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/account/ForgotForm.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "block text-black font-medium mb-2 ", children: "Email" }, void 0, false, {
          fileName: "app/components/account/ForgotForm.tsx",
          lineNumber: 93,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "email", name: "email", value: formData.email || "", className: "w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100", onChange: handleInputChange }, void 0, false, {
          fileName: "app/components/account/ForgotForm.tsx",
          lineNumber: 96,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/account/ForgotForm.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "w-full border-2 border-black hover:bg-black text-black hover:text-white p-2 rounded transition duration-300 mt-5", onClick: handleSubmit, children: "Reset" }, void 0, false, {
        fileName: "app/components/account/ForgotForm.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/account/ForgotForm.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this),
    showMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-green-200 p-3 mb-3 rounded-md text-green-800", children: message }, void 0, false, {
      fileName: "app/components/account/ForgotForm.tsx",
      lineNumber: 102,
      columnNumber: 23
    }, this),
    showError && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-200 p-3 mb-3 rounded-md text-red-800 mt-6", children: errorMessage }, void 0, false, {
      fileName: "app/components/account/ForgotForm.tsx",
      lineNumber: 105,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/account/ForgotForm.tsx",
    lineNumber: 80,
    columnNumber: 10
  }, this);
};
_s(ForgotForm, "ZdbmxDK3Krm8YJs7SsTmv+JpYTQ=");
_c = ForgotForm;
var _c;
$RefreshReg$(_c, "ForgotForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/forgot.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/forgot.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/forgot.tsx"
  );
  import.meta.hot.lastModified = "1728767387048.1558";
}
var Forgot = () => {
  _s2();
  const {
    supabase,
    domainUrl
  } = useOutletContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " min-h-screen flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ForgotForm, { supabase, domain_url: domainUrl }, void 0, false, {
    fileName: "app/routes/forgot.tsx",
    lineNumber: 49,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/forgot.tsx",
    lineNumber: 48,
    columnNumber: 10
  }, this);
};
_s2(Forgot, "YSOlsDs4nE+ritM80b48aoYgBeg=", false, function() {
  return [useOutletContext];
});
_c2 = Forgot;
var forgot_default = Forgot;
var _c2;
$RefreshReg$(_c2, "Forgot");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  forgot_default as default
};
//# sourceMappingURL=/build/routes/forgot-CQE7BWCT.js.map
