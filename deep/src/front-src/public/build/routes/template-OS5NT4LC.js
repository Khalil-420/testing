import {
  Button
} from "/build/_shared/chunk-OCIN7GG6.js";
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

// app/routes/template.tsx
var import_react = __toESM(require_react());

// public/Images/goodexample1.png
var goodexample1_default = "/build/_assets/goodexample1-FNKB4LEP.png";

// public/Images/goodexample2.png
var goodexample2_default = "/build/_assets/goodexample2-CFXNXKD2.png";

// public/Images/badexample1.png
var badexample1_default = "/build/_assets/badexample1-KG5TXFRK.png";

// public/Images/badexample2.png
var badexample2_default = "/build/_assets/badexample2-PCGSKFLX.png";

// public/Images/badexample3.png
var badexample3_default = "/build/_assets/badexample3-SBK4RK4B.png";

// public/Images/checkdistance.png
var checkdistance_default = "/build/_assets/checkdistance-4MH5DQ47.png";

// public/Images/goodexample3.png
var goodexample3_default = "/build/_assets/goodexample3-MARNJUDE.png";

// public/Images/IBM_SL_Upload_Template_v1.zip
var IBM_SL_Upload_Template_v1_default = "/build/_assets/IBM_SL_Upload_Template_v1-GNWOU5JM.zip";

// app/routes/template.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/template.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/template.tsx"
  );
  import.meta.hot.lastModified = "1728767387048.1558";
}
var Template = () => {
  _s();
  const [fetching, setFetching] = (0, import_react.useState)(false);
  const [_error, setError] = (0, import_react.useState)(false);
  const download = (url, name) => {
    if (!url) {
      throw new Error("Resource URL not provided!");
    }
    setFetching(true);
    fetch(url).then((response) => response.blob()).then((blob) => {
      setFetching(false);
      const blobURL = URL.createObjectURL(blob);
      const anchorElement = document.createElement("a");
      anchorElement.href = blobURL;
      if (name && name.length) {
        anchorElement.download = name;
      }
      document.body.appendChild(anchorElement);
      anchorElement.click();
    }).catch(() => setError(true));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen flex items-center justify-center flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      maxWidth: "800px"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-primary text-4xl font-bold font-mono mb-6", children: "Uploading your own data" }, void 0, false, {
      fileName: "app/routes/template.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/template.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      maxWidth: "800px"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-6", children: "In order to upload a file, you need to make sure that your file implements the following rules described as below. Furthermore, there is a template available for you to download and use." }, void 0, false, {
      fileName: "app/routes/template.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/template.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6", style: {
      maxWidth: "800px"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { disabled: fetching, variant: "default", onClick: () => download(IBM_SL_Upload_Template_v1_default, "Template_version_0.zip"), children: "Download Template" }, void 0, false, {
      fileName: "app/routes/template.tsx",
      lineNumber: 80,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/template.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      maxWidth: "800px"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary text-2xl font-bold font-mono mb-6", children: "1. Check the file type and extension" }, void 0, false, {
      fileName: "app/routes/template.tsx",
      lineNumber: 88,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/template.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-6", children: "Our platform supports the following file types:" }, void 0, false, {
        fileName: "app/routes/template.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
        "- Excel, of file extension ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: ".xls / .xlsx" }, void 0, false, {
          fileName: "app/routes/template.tsx",
          lineNumber: 96,
          columnNumber: 40
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/template.tsx",
        lineNumber: 95,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/template.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-6", children: "If the file extension is NOT one of the above, then our application will reject the file, and ask you to try again." }, void 0, false, {
        fileName: "app/routes/template.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/template.tsx",
      lineNumber: 92,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      maxWidth: "800px"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary text-2xl font-bold font-mono mb-6", children: "2. File structure" }, void 0, false, {
      fileName: "app/routes/template.tsx",
      lineNumber: 108,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/template.tsx",
      lineNumber: 105,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      maxWidth: "800px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-6", children: "In order for the file to be successfully uploaded and read, it will need to follow a specific structure. Currently, there are two main ways of structuring the data inside your file:" }, void 0, false, {
        fileName: "app/routes/template.tsx",
        lineNumber: 115,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "mb-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
          "- ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Using address" }, void 0, false, {
            fileName: "app/routes/template.tsx",
            lineNumber: 122,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/template.tsx",
          lineNumber: 121,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
          "- ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Distance mode" }, void 0, false, {
            fileName: "app/routes/template.tsx",
            lineNumber: 125,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/template.tsx",
          lineNumber: 124,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/template.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/template.tsx",
      lineNumber: 112,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      maxWidth: "800px"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-primary text-xl font-bold font-mono mb-6", children: "2.1. Using addresses" }, void 0, false, {
      fileName: "app/routes/template.tsx",
      lineNumber: 133,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/template.tsx",
      lineNumber: 130,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      maxWidth: "800px"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-6", children: [
      "In order to use addresses, you need to atleast use four cells. These four cells should have the titles: \xA0",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Origin city" }, void 0, false, {
        fileName: "app/routes/template.tsx",
        lineNumber: 142,
        columnNumber: 52
      }, this),
      ",",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Origin country" }, void 0, false, {
        fileName: "app/routes/template.tsx",
        lineNumber: 143,
        columnNumber: 11
      }, this),
      ", ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Destination city" }, void 0, false, {
        fileName: "app/routes/template.tsx",
        lineNumber: 143,
        columnNumber: 34
      }, this),
      ", and",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Destination country" }, void 0, false, {
        fileName: "app/routes/template.tsx",
        lineNumber: 144,
        columnNumber: 11
      }, this),
      ". Under each of these cells, you should write the information they describe. Remember: the data has to be BELOW the descriptive cells! For example, if cell ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "A1" }, void 0, false, {
        fileName: "app/routes/template.tsx",
        lineNumber: 146,
        columnNumber: 61
      }, this),
      "\xA0has the title",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Origin city" }, void 0, false, {
        fileName: "app/routes/template.tsx",
        lineNumber: 148,
        columnNumber: 11
      }, this),
      ", then the origin city name should be in the cell",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "A2" }, void 0, false, {
        fileName: "app/routes/template.tsx",
        lineNumber: 150,
        columnNumber: 11
      }, this),
      "."
    ] }, void 0, true, {
      fileName: "app/routes/template.tsx",
      lineNumber: 140,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/template.tsx",
      lineNumber: 137,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      maxWidth: "800px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: goodexample1_default, alt: "Example 1 of a valid excel file structure." }, void 0, false, {
        fileName: "app/routes/template.tsx",
        lineNumber: 157,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-6", children: "Example 1: a valid file structure using addresses." }, void 0, false, {
        fileName: "app/routes/template.tsx",
        lineNumber: 158,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/template.tsx",
      lineNumber: 154,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      maxWidth: "800px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: goodexample3_default, alt: "Example 2 of a valid excel file structure." }, void 0, false, {
        fileName: "app/routes/template.tsx",
        lineNumber: 166,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-6", children: "Example 2: a valid file structure using multiple addresses." }, void 0, false, {
        fileName: "app/routes/template.tsx",
        lineNumber: 167,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/template.tsx",
      lineNumber: 163,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      maxWidth: "800px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: badexample1_default, alt: "Example 3 of an invalid excel file structure." }, void 0, false, {
        fileName: "app/routes/template.tsx",
        lineNumber: 175,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-6", children: "Example 3: an invalid file structure using addresses." }, void 0, false, {
        fileName: "app/routes/template.tsx",
        lineNumber: 176,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/template.tsx",
      lineNumber: 172,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      maxWidth: "800px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: badexample2_default, alt: "Example 4 of an invalid excel file structure." }, void 0, false, {
        fileName: "app/routes/template.tsx",
        lineNumber: 184,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-6", children: "Example 4: another invalid file structure using addresses." }, void 0, false, {
        fileName: "app/routes/template.tsx",
        lineNumber: 185,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/template.tsx",
      lineNumber: 181,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      maxWidth: "800px"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-primary text-xl font-bold font-mono mb-6", children: "2.2. Using distance numbers" }, void 0, false, {
      fileName: "app/routes/template.tsx",
      lineNumber: 193,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/template.tsx",
      lineNumber: 190,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      maxWidth: "800px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-6", children: [
        "In order to give the distance (which is in kilometer), you need to atleast use two cells. One of the cells should have the title: \xA0",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Distance" }, void 0, false, {
          fileName: "app/routes/template.tsx",
          lineNumber: 204,
          columnNumber: 17
        }, this),
        ". Under each of these cells, you should write the distance length. Remember: the data has to be BELOW the descriptive cell! For example, if cell ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "A1" }, void 0, false, {
          fileName: "app/routes/template.tsx",
          lineNumber: 206,
          columnNumber: 38
        }, this),
        " has the title",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Distance" }, void 0, false, {
          fileName: "app/routes/template.tsx",
          lineNumber: 207,
          columnNumber: 11
        }, this),
        ", then the distance length should be in the cell",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "A2" }, void 0, false, {
          fileName: "app/routes/template.tsx",
          lineNumber: 208,
          columnNumber: 11
        }, this),
        "."
      ] }, void 0, true, {
        fileName: "app/routes/template.tsx",
        lineNumber: 201,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "REMEMBER:" }, void 0, false, {
          fileName: "app/routes/template.tsx",
          lineNumber: 212,
          columnNumber: 11
        }, this),
        "set 'use distance' on under the upload file page!"
      ] }, void 0, true, {
        fileName: "app/routes/template.tsx",
        lineNumber: 211,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: checkdistance_default, alt: "'use distance' should be activated if you want to provide distance numbers instead." }, void 0, false, {
        fileName: "app/routes/template.tsx",
        lineNumber: 214,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-6", children: "'use distance' should be activated if you want to provide distance numbers instead" }, void 0, false, {
        fileName: "app/routes/template.tsx",
        lineNumber: 215,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/template.tsx",
      lineNumber: 198,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      maxWidth: "800px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: goodexample2_default, alt: "Example 5 of a valid excel file structure." }, void 0, false, {
        fileName: "app/routes/template.tsx",
        lineNumber: 224,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-6", children: "Example 5: a valid file structure using distances." }, void 0, false, {
        fileName: "app/routes/template.tsx",
        lineNumber: 225,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/template.tsx",
      lineNumber: 221,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      maxWidth: "800px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: badexample3_default, alt: "Example 6 of an invalid excel file structure." }, void 0, false, {
        fileName: "app/routes/template.tsx",
        lineNumber: 233,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-6", children: "Example 6: an invalid file structure using distances." }, void 0, false, {
        fileName: "app/routes/template.tsx",
        lineNumber: 234,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/template.tsx",
      lineNumber: 230,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/template.tsx",
    lineNumber: 59,
    columnNumber: 10
  }, this);
};
_s(Template, "PFqbS3jKb/rXXVAFewXnKB7bGcg=");
_c = Template;
var template_default = Template;
var _c;
$RefreshReg$(_c, "Template");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  template_default as default
};
//# sourceMappingURL=/build/routes/template-OS5NT4LC.js.map
