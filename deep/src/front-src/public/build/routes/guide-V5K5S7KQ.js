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

// public/Images/CalculatorWholePage1.png
var CalculatorWholePage1_default = "/build/_assets/CalculatorWholePage1-Q2VB2EZN.png";

// public/Images/CalculatorLeftSection1.png
var CalculatorLeftSection1_default = "/build/_assets/CalculatorLeftSection1-XZZH2AT4.png";

// public/Images/CalculatorMiddleSection1.png
var CalculatorMiddleSection1_default = "/build/_assets/CalculatorMiddleSection1-H4ZGPTX4.png";

// public/Images/CalculatorMiddleSection2.png
var CalculatorMiddleSection2_default = "/build/_assets/CalculatorMiddleSection2-OWOLSS7X.png";

// public/Images/CalculatorRightSection1.png
var CalculatorRightSection1_default = "/build/_assets/CalculatorRightSection1-DOFX4HTJ.png";

// public/Images/CalculatorRightSection2.png
var CalculatorRightSection2_default = "/build/_assets/CalculatorRightSection2-KCO72BFR.png";

// public/Images/CalculatorRightSectionDist1.png
var CalculatorRightSectionDist1_default = "/build/_assets/CalculatorRightSectionDist1-3EOLEFZR.png";

// public/Images/CalculatorRightSectionDist2.png
var CalculatorRightSectionDist2_default = "/build/_assets/CalculatorRightSectionDist2-K656VILS.png";

// app/routes/guide.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/guide.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/guide.tsx"
  );
  import.meta.hot.lastModified = "1728767387048.1558";
}
var GuidePage = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen flex items-center justify-center flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      maxWidth: "800px"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-primary text-4xl font-bold font-mono mb-6", children: "Guide to using the Calculator" }, void 0, false, {
      fileName: "app/routes/guide.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/guide.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      maxWidth: "800px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-6", children: "In this how-to guide, we will guide you through the process of using our calculator, whether you prefer to enter your information manually or, upload a datasheet. You can start using the calculator today and take the first step towards reducing your impact!" }, void 0, false, {
        fileName: "app/routes/guide.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-6", children: [
        "You can access the calculator by pressing the 'Calculate Emissions' tab on the navigation bar above, or press this link",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/calculate-emissions", style: {
          color: "#3d815c"
        }, children: "here." }, void 0, false, {
          fileName: "app/routes/guide.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/guide.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/guide.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      maxWidth: "800px"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary text-2xl font-bold font-mono mb-6", children: "1. On entering the calculator page" }, void 0, false, {
      fileName: "app/routes/guide.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/guide.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      maxWidth: "800px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-6", children: "When entering the calculator page, you may immediately notice three 'sections' on the page. The left side, which contains information about the current project, the middle section, which shows you each individual step that you have so far (just one if you just opened the page), and the right section. The right section allows you to type the individual data that you have about the transport - it is type, the cargo weight, as well as the address. Let us explore the individual sections in detail:" }, void 0, false, {
        fileName: "app/routes/guide.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: CalculatorWholePage1_default, alt: "The main page when clicking the 'Calculate Emissions' tab in the navigation tab above." }, void 0, false, {
        fileName: "app/routes/guide.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-6", children: "The main page when clicking the 'Calculate Emissions' tab in the navigation tab above." }, void 0, false, {
        fileName: "app/routes/guide.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/guide.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      maxWidth: "800px"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary text-xl font-bold font-mono mb-6", children: "1.1. The left section" }, void 0, false, {
      fileName: "app/routes/guide.tsx",
      lineNumber: 89,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/guide.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      maxWidth: "800px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-6", children: "On the left side of the page, we can see information regarding the current calculation. We have the project name, as well as all the routes and its associated stages with it. While you will not give the actual data (like addresses and tonnage) from here, you can still choose to upload a datasheet of your destinations if you wish to." }, void 0, false, {
        fileName: "app/routes/guide.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: CalculatorLeftSection1_default, width: 345, height: 440, alt: "The left section of the Calculator page." }, void 0, false, {
        fileName: "app/routes/guide.tsx",
        lineNumber: 104,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-6", children: "The left section of the Calculator page." }, void 0, false, {
        fileName: "app/routes/guide.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/guide.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      maxWidth: "800px"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary text-xl font-bold font-mono mb-6", children: "1.2. The middle section" }, void 0, false, {
      fileName: "app/routes/guide.tsx",
      lineNumber: 111,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/guide.tsx",
      lineNumber: 108,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      maxWidth: "800px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-6", children: "In the middle section, you can find information about the current information that you have provided for the current stage. Upon entering the page for the first time, or just creating a new route, this section will not show much, other than the route number (which is just number one), as well as a base stage only showing the transport method. If you have multiple stages that you\u2019ll like to provide, then you can just press the blue \u2018Add Stage\u2019 button to add the next stage of your transportation." }, void 0, false, {
        fileName: "app/routes/guide.tsx",
        lineNumber: 118,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-6", children: "For example: say that you have transport going from Helsinki, to Stockholm, to Copenhagen. That is three different cities in total. Then, you can simply start with Helsinki to Stockholm; you can add Helsinki, Finland as the origin address, and then Stockholm, Sweden as the destination address. And then, when you want to add Stockholm to Copenhagen as the next destination, you can simply press \u2018Add Stage\u2019 to create the next stage going from Stockholm to Copenhagen." }, void 0, false, {
        fileName: "app/routes/guide.tsx",
        lineNumber: 129,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-6", children: "Note: when adding a new stage, our calculator will create a new stage where the origin address is just the destination address of the last stage. Of course, you can edit this if you wish." }, void 0, false, {
        fileName: "app/routes/guide.tsx",
        lineNumber: 139,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: CalculatorMiddleSection1_default, width: 345, height: 440, alt: "The middle section of the Calculator page, initially being empty." }, void 0, false, {
        fileName: "app/routes/guide.tsx",
        lineNumber: 145,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-6", children: "The middle section of the Calculator page, initially being empty." }, void 0, false, {
        fileName: "app/routes/guide.tsx",
        lineNumber: 146,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: CalculatorMiddleSection2_default, width: 345, height: 440, alt: "The middle section of the Calculator page, after being populated with (example) data." }, void 0, false, {
        fileName: "app/routes/guide.tsx",
        lineNumber: 150,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-6", children: "The middle section of the Calculator page, after being populated with (example) data." }, void 0, false, {
        fileName: "app/routes/guide.tsx",
        lineNumber: 151,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/guide.tsx",
      lineNumber: 115,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      maxWidth: "800px"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary text-xl font-bold font-mono mb-6", children: "1.3. The right section" }, void 0, false, {
      fileName: "app/routes/guide.tsx",
      lineNumber: 160,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/guide.tsx",
      lineNumber: 157,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      maxWidth: "800px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-6", children: [
        "The right section of the calculator page will be your main point in which you provide the data (again unless you",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/template", style: {
          color: "#3d815c"
        }, children: "upload a file" }, void 0, false, {
          fileName: "app/routes/guide.tsx",
          lineNumber: 170,
          columnNumber: 11
        }, this),
        "). In this section, you will provide the actual data that you wish to include in your calculations."
      ] }, void 0, true, {
        fileName: "app/routes/guide.tsx",
        lineNumber: 167,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-6", children: "There are four main pieces of information that you\u2019ll need to provide: the transport type (default value being \u2018truck\u2019), the cargo weight (in tonnage), the origin address (where the cargo is going from), and the destination address (where the cargo is going to). Upon clicking the \u2018Calculate\u2019 button, you will retrieve a popup telling you the total tonnage of CO2 that has been calculated from your input. The middle section of the page will then be updated to reflect the data that you have added for the current stage." }, void 0, false, {
        fileName: "app/routes/guide.tsx",
        lineNumber: 177,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-6", children: "As explained with an example under \u20181.2. The middle section\u2019, if you wish to add multiple stages to your total calculation, then you can simply press the blue \u2018Add Stage\u2019 button and add as many stages as you wish." }, void 0, false, {
        fileName: "app/routes/guide.tsx",
        lineNumber: 188,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: CalculatorRightSection1_default, width: 345, height: 440, alt: "The right section of the Calculator page, initially being empty." }, void 0, false, {
        fileName: "app/routes/guide.tsx",
        lineNumber: 195,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-6", children: "The right section of the Calculator page, initially being empty." }, void 0, false, {
        fileName: "app/routes/guide.tsx",
        lineNumber: 196,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: CalculatorRightSection2_default, width: 345, height: 440, alt: "The right section of the Calculator page, after being populated with (example) data." }, void 0, false, {
        fileName: "app/routes/guide.tsx",
        lineNumber: 200,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-6", children: "The right section of the Calculator page, after being populated with (example) data." }, void 0, false, {
        fileName: "app/routes/guide.tsx",
        lineNumber: 201,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/guide.tsx",
      lineNumber: 164,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      maxWidth: "800px"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary text-l font-bold font-mono mb-6", children: "1.3.1. Distance instead of addresses?" }, void 0, false, {
      fileName: "app/routes/guide.tsx",
      lineNumber: 210,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/guide.tsx",
      lineNumber: 207,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      maxWidth: "800px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-6", children: "If you wish to use distances (provided in kilometers) instead of specific addresses, then you will need to click the \u2018Use Distance?\u2019 button to active distance mode. It\u2019s very similar to the previous method; instead, you just need to provide a single distance for each stage that you wish to add to your calculations." }, void 0, false, {
        fileName: "app/routes/guide.tsx",
        lineNumber: 217,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: CalculatorRightSectionDist1_default, width: 345, height: 440, alt: "The right section of the Calculator page, initially being empty." }, void 0, false, {
        fileName: "app/routes/guide.tsx",
        lineNumber: 225,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-6", children: "The right section of the Calculator page, initially being empty." }, void 0, false, {
        fileName: "app/routes/guide.tsx",
        lineNumber: 226,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: CalculatorRightSectionDist2_default, width: 345, height: 440, alt: "The right section of the Calculator page, after being populated with (example) data." }, void 0, false, {
        fileName: "app/routes/guide.tsx",
        lineNumber: 230,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-6", children: "The right section of the Calculator page, after being populated with (example) data." }, void 0, false, {
        fileName: "app/routes/guide.tsx",
        lineNumber: 231,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/guide.tsx",
      lineNumber: 214,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/guide.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
};
_c = GuidePage;
var guide_default = GuidePage;
var _c;
$RefreshReg$(_c, "GuidePage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  guide_default as default
};
//# sourceMappingURL=/build/routes/guide-V5K5S7KQ.js.map
