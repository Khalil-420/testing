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

// app/routes/signin.tsx
var import_deno = __toESM(require_deno());
var import_deno2 = __toESM(require_deno());

// app/components/account/SignInForm.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/account/SignInForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/account/SignInForm.tsx"
  );
  import.meta.hot.lastModified = "1728767387048.1558";
}
var SignInForm = ({
  supabase,
  setMessagesign,
  setSignIn
}) => {
  _s();
  const initialFormState = {
    email: "",
    password: ""
  };
  const [formData, setFormData] = (0, import_react.useState)(initialFormState);
  const [showError, setShowError] = (0, import_react.useState)(false);
  const [errorMessage, setErrorMessage] = (0, import_react.useState)("");
  const [showMessage, setShowMessage] = (0, import_react.useState)(false);
  const [message, setMessage] = (0, import_react.useState)("");
  const [counter, setCounter] = (0, import_react.useState)(0);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      data,
      error
    } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password
    });
    try {
      if (error) {
        setCounter(counter + 1);
        if (counter === 5) {
          setErrorMessage("You have tried to login too many times. Please try again later.");
          setShowError(true);
          const url = `${window.location.origin}/reset`;
          const {
            error: error2
          } = await supabase.auth.resetPasswordForEmail(formData.email, {
            redirectTo: url
          });
          if (error2) {
            setErrorMessage(error2.message);
            setShowError(true);
            setTimeout(() => {
              setShowError(false);
            }, 5e3);
          }
          setTimeout(() => {
            setShowError(false);
            setMessage("We have sent you an email to reset your password. Please check your email including any spam or junk folders.");
            setShowMessage(true);
            setCounter(0);
          }, 4e3);
          setTimeout(() => {
            setShowMessage(false);
          }, 1e4);
        } else {
          setErrorMessage(error.message);
          setShowError(true);
          setTimeout(() => {
            setShowError(false);
          }, 5e3);
        }
      } else {
        setMessage("You have been signed in");
        setMessagesign("You have been signed in");
        setSignIn(true);
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-sm rounded-lg shadow-lg bg-white p-6 space-y-6  dark:border-gray-700 ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2 text-center justify-center items-center ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold", children: "Sign In" }, void 0, false, {
        fileName: "app/components/account/SignInForm.tsx",
        lineNumber: 118,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-zinc-500 dark:text-zinc-400", children: "Enter your email to sign in to IBM-SL" }, void 0, false, {
        fileName: "app/components/account/SignInForm.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/account/SignInForm.tsx",
      lineNumber: 117,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: CALC_default, alt: "IBM Logo", className: "block mx-auto w-24 object-cover" }, void 0, false, {
      fileName: "app/components/account/SignInForm.tsx",
      lineNumber: 125,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/account/SignInForm.tsx",
      lineNumber: 124,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "block text-black font-medium mb-2", children: "Email" }, void 0, false, {
          fileName: "app/components/account/SignInForm.tsx",
          lineNumber: 129,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "email", name: "email", value: formData.email || "", className: "w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100", onChange: handleInputChange }, void 0, false, {
          fileName: "app/components/account/SignInForm.tsx",
          lineNumber: 132,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/account/SignInForm.tsx",
        lineNumber: 128,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", className: "block text-black font-medium mb-2", children: "Password" }, void 0, false, {
          fileName: "app/components/account/SignInForm.tsx",
          lineNumber: 136,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "password", id: "password", name: "password", value: formData.password || "", className: "w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100", onChange: handleInputChange }, void 0, false, {
          fileName: "app/components/account/SignInForm.tsx",
          lineNumber: 139,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/account/SignInForm.tsx",
        lineNumber: 135,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "w-full border-2 border-black hover:bg-black text-black hover:text-white p-2 rounded transition duration-300", onClick: handleSubmit, children: "Sign In" }, void 0, false, {
        fileName: "app/components/account/SignInForm.tsx",
        lineNumber: 141,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/forgot", className: "text-blue-500 hover:underline", children: "Forgot Password ?" }, void 0, false, {
        fileName: "app/components/account/SignInForm.tsx",
        lineNumber: 145,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/account/SignInForm.tsx",
        lineNumber: 144,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/account/SignInForm.tsx",
      lineNumber: 127,
      columnNumber: 7
    }, this),
    showError && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-200 p-3 mb-3 rounded-md text-red-800 mt-6", children: errorMessage }, void 0, false, {
      fileName: "app/components/account/SignInForm.tsx",
      lineNumber: 151,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/account/SignInForm.tsx",
    lineNumber: 116,
    columnNumber: 10
  }, this);
};
_s(SignInForm, "cz1u8i5e0ud3X1g5gW//sA+ElDw=");
_c = SignInForm;
var _c;
$RefreshReg$(_c, "SignInForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/signin.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/signin.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/signin.tsx"
  );
  import.meta.hot.lastModified = "1728767387048.1558";
}
var SignIn = () => {
  _s2();
  const {
    supabase,
    domainUrl
  } = useOutletContext();
  const {
    setOpenSign,
    setMessage
  } = useOutletContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " min-h-screen flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SignInForm, { supabase, setSignIn: setOpenSign, setMessagesign: setMessage }, void 0, false, {
    fileName: "app/routes/signin.tsx",
    lineNumber: 59,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/signin.tsx",
    lineNumber: 58,
    columnNumber: 10
  }, this);
};
_s2(SignIn, "Mhe5X4FrNMUuSvN5/D10N/acXW0=", false, function() {
  return [useOutletContext, useOutletContext];
});
_c2 = SignIn;
var signin_default = SignIn;
var _c2;
$RefreshReg$(_c2, "SignIn");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  signin_default as default
};
//# sourceMappingURL=/build/routes/signin-C6LUNXH7.js.map
