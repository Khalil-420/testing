import {
  $e02a7d9cb1dc128c$export$c74125a8e3af6bb2,
  $f631663db3294ace$export$b39126d51d94e6f3
} from "/build/_shared/chunk-56YGGU2X.js";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "/build/_shared/chunk-H4I6ZOZI.js";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  createproject_default,
  defaultChain,
  getTransportMethodLabel,
  loadChain
} from "/build/_shared/chunk-MSB7Y2RR.js";
import {
  $1746a345f3d73bb7$export$f680877a34711e37,
  $71cd76cc60e0454e$export$6f32135080cb4c3,
  $8927f6f2acc4f386$export$250ffa63cdc0d034,
  $921a889cee6df7e8$export$99c2b779aa4e8b8b,
  $9f79659886946c16$export$e5c5a5f917a5871c,
  $c512c27ab02ef895$export$50c7b4e9d9f19c1,
  $e42e1063c40fb3ef$export$b9ecd428b558ff10,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  TrashIcon
} from "/build/_shared/chunk-XI7XXCOH.js";
import {
  $6ed0406888f73fc4$export$c7b2cbe3552a0d05,
  Button,
  _extends,
  buttonVariants,
  cn
} from "/build/_shared/chunk-OCIN7GG6.js";
import {
  require_deno
} from "/build/_shared/chunk-WUR62FST.js";
import {
  Link,
  useFetcher,
  useLoaderData
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

// app/components/dashboard/dashboard.tsx
var import_react8 = __toESM(require_react());

// app/components/dashboard/ProjectCard.tsx
var import_react6 = __toESM(require_react());

// app/components/dashboard/popups/EditProjectPopUp.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/dashboard/popups/EditProjectPopUp.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/dashboard/popups/EditProjectPopUp.tsx"
  );
  import.meta.hot.lastModified = "1728767387048.1558";
}
var EditProjectPopUp = ({
  id,
  title,
  description,
  chain
}) => {
  _s();
  const [titleProject, setTitleProject] = (0, import_react.useState)(title);
  const [descriptionProject, setDescriptionProject] = (0, import_react.useState)(description);
  const fetcher = useFetcher();
  const handleUpdateProject = () => {
    console.log(chain);
    const project = {
      projId: id,
      title: titleProject,
      descriptionProject,
      calc: JSON.stringify(chain)
    };
    fetcher.submit(project, {
      method: "PATCH",
      action: "/api/project"
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, {}, void 0, false, {
      fileName: "app/components/dashboard/popups/EditProjectPopUp.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { value: titleProject || "", placeholder: "title", className: "w-full", onChange: (e) => setTitleProject(e.target.value) }, void 0, false, {
        fileName: "app/components/dashboard/popups/EditProjectPopUp.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { value: descriptionProject || "", placeholder: "Description", className: "w-full", onChange: (e) => setDescriptionProject(e.target.value) }, void 0, false, {
        fileName: "app/components/dashboard/popups/EditProjectPopUp.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogClose, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "h-10 inline-flex items-center justify-center whitespace-nowrap  text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#0043ce] text-primary-foreground hover:bg-[#002d9c]", to: id, children: "Edit Calculations" }, void 0, false, {
        fileName: "app/components/dashboard/popups/EditProjectPopUp.tsx",
        lineNumber: 59,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/dashboard/popups/EditProjectPopUp.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogClose, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { className: "border-black border rounded", variant: "default", onClick: handleUpdateProject, children: "Save Description Changes" }, void 0, false, {
        fileName: "app/components/dashboard/popups/EditProjectPopUp.tsx",
        lineNumber: 65,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/dashboard/popups/EditProjectPopUp.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogClose, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { className: "border-black border rounded", variant: "destructive", children: "Cancel" }, void 0, false, {
        fileName: "app/components/dashboard/popups/EditProjectPopUp.tsx",
        lineNumber: 71,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/dashboard/popups/EditProjectPopUp.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/dashboard/popups/EditProjectPopUp.tsx",
      lineNumber: 54,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/dashboard/popups/EditProjectPopUp.tsx",
    lineNumber: 52,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/dashboard/popups/EditProjectPopUp.tsx",
    lineNumber: 51,
    columnNumber: 10
  }, this);
};
_s(EditProjectPopUp, "LfupOFWCz3sjMsRbokpg828sF0c=", false, function() {
  return [useFetcher];
});
_c = EditProjectPopUp;
var _c;
$RefreshReg$(_c, "EditProjectPopUp");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/accordion.tsx
var React2 = __toESM(require_react());

// node_modules/@radix-ui/react-accordion/dist/index.mjs
var import_react4 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-collapsible/dist/index.mjs
var import_react3 = __toESM(require_react(), 1);
var $409067139f391064$var$COLLAPSIBLE_NAME = "Collapsible";
var [$409067139f391064$var$createCollapsibleContext, $409067139f391064$export$952b32dcbe73087a] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($409067139f391064$var$COLLAPSIBLE_NAME);
var [$409067139f391064$var$CollapsibleProvider, $409067139f391064$var$useCollapsibleContext] = $409067139f391064$var$createCollapsibleContext($409067139f391064$var$COLLAPSIBLE_NAME);
var $409067139f391064$export$6eb0f7ddcda6131f = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeCollapsible, open: openProp, defaultOpen, disabled, onOpenChange, ...collapsibleProps } = props;
  const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ (0, import_react3.createElement)($409067139f391064$var$CollapsibleProvider, {
    scope: __scopeCollapsible,
    disabled,
    contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
    open,
    onOpenToggle: (0, import_react3.useCallback)(
      () => setOpen(
        (prevOpen) => !prevOpen
      ),
      [
        setOpen
      ]
    )
  }, /* @__PURE__ */ (0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-state": $409067139f391064$var$getState(open),
    "data-disabled": disabled ? "" : void 0
  }, collapsibleProps, {
    ref: forwardedRef
  })));
});
var $409067139f391064$var$TRIGGER_NAME = "CollapsibleTrigger";
var $409067139f391064$export$c135dce7b15bbbdc = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeCollapsible, ...triggerProps } = props;
  const context = $409067139f391064$var$useCollapsibleContext($409067139f391064$var$TRIGGER_NAME, __scopeCollapsible);
  return /* @__PURE__ */ (0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    "aria-controls": context.contentId,
    "aria-expanded": context.open || false,
    "data-state": $409067139f391064$var$getState(context.open),
    "data-disabled": context.disabled ? "" : void 0,
    disabled: context.disabled
  }, triggerProps, {
    ref: forwardedRef,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, context.onOpenToggle)
  }));
});
var $409067139f391064$var$CONTENT_NAME = "CollapsibleContent";
var $409067139f391064$export$aadde00976f34151 = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { forceMount, ...contentProps } = props;
  const context = $409067139f391064$var$useCollapsibleContext($409067139f391064$var$CONTENT_NAME, props.__scopeCollapsible);
  return /* @__PURE__ */ (0, import_react3.createElement)(
    $921a889cee6df7e8$export$99c2b779aa4e8b8b,
    {
      present: forceMount || context.open
    },
    ({ present }) => /* @__PURE__ */ (0, import_react3.createElement)($409067139f391064$var$CollapsibleContentImpl, _extends({}, contentProps, {
      ref: forwardedRef,
      present
    }))
  );
});
var $409067139f391064$var$CollapsibleContentImpl = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeCollapsible, present, children, ...contentProps } = props;
  const context = $409067139f391064$var$useCollapsibleContext($409067139f391064$var$CONTENT_NAME, __scopeCollapsible);
  const [isPresent, setIsPresent] = (0, import_react3.useState)(present);
  const ref = (0, import_react3.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const heightRef = (0, import_react3.useRef)(0);
  const height = heightRef.current;
  const widthRef = (0, import_react3.useRef)(0);
  const width = widthRef.current;
  const isOpen = context.open || isPresent;
  const isMountAnimationPreventedRef = (0, import_react3.useRef)(isOpen);
  const originalStylesRef = (0, import_react3.useRef)();
  (0, import_react3.useEffect)(() => {
    const rAF = requestAnimationFrame(
      () => isMountAnimationPreventedRef.current = false
    );
    return () => cancelAnimationFrame(rAF);
  }, []);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    const node = ref.current;
    if (node) {
      originalStylesRef.current = originalStylesRef.current || {
        transitionDuration: node.style.transitionDuration,
        animationName: node.style.animationName
      };
      node.style.transitionDuration = "0s";
      node.style.animationName = "none";
      const rect = node.getBoundingClientRect();
      heightRef.current = rect.height;
      widthRef.current = rect.width;
      if (!isMountAnimationPreventedRef.current) {
        node.style.transitionDuration = originalStylesRef.current.transitionDuration;
        node.style.animationName = originalStylesRef.current.animationName;
      }
      setIsPresent(present);
    }
  }, [
    context.open,
    present
  ]);
  return /* @__PURE__ */ (0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-state": $409067139f391064$var$getState(context.open),
    "data-disabled": context.disabled ? "" : void 0,
    id: context.contentId,
    hidden: !isOpen
  }, contentProps, {
    ref: composedRefs,
    style: {
      [`--radix-collapsible-content-height`]: height ? `${height}px` : void 0,
      [`--radix-collapsible-content-width`]: width ? `${width}px` : void 0,
      ...props.style
    }
  }), isOpen && children);
});
function $409067139f391064$var$getState(open) {
  return open ? "open" : "closed";
}
var $409067139f391064$export$be92b6f5f03c0fe9 = $409067139f391064$export$6eb0f7ddcda6131f;
var $409067139f391064$export$41fb9f06171c75f4 = $409067139f391064$export$c135dce7b15bbbdc;
var $409067139f391064$export$7c6e2c02157bb7d2 = $409067139f391064$export$aadde00976f34151;

// node_modules/@radix-ui/react-accordion/dist/index.mjs
var $1bf158f521e1b1b4$var$ACCORDION_NAME = "Accordion";
var $1bf158f521e1b1b4$var$ACCORDION_KEYS = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
];
var [$1bf158f521e1b1b4$var$Collection, $1bf158f521e1b1b4$var$useCollection, $1bf158f521e1b1b4$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($1bf158f521e1b1b4$var$ACCORDION_NAME);
var [$1bf158f521e1b1b4$var$createAccordionContext, $1bf158f521e1b1b4$export$9748edc328a73be1] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($1bf158f521e1b1b4$var$ACCORDION_NAME, [
  $1bf158f521e1b1b4$var$createCollectionScope,
  $409067139f391064$export$952b32dcbe73087a
]);
var $1bf158f521e1b1b4$var$useCollapsibleScope = $409067139f391064$export$952b32dcbe73087a();
var $1bf158f521e1b1b4$export$a766cd26d0d69044 = /* @__PURE__ */ import_react4.default.forwardRef((props, forwardedRef) => {
  const { type, ...accordionProps } = props;
  const singleProps = accordionProps;
  const multipleProps = accordionProps;
  return /* @__PURE__ */ import_react4.default.createElement($1bf158f521e1b1b4$var$Collection.Provider, {
    scope: props.__scopeAccordion
  }, type === "multiple" ? /* @__PURE__ */ import_react4.default.createElement($1bf158f521e1b1b4$var$AccordionImplMultiple, _extends({}, multipleProps, {
    ref: forwardedRef
  })) : /* @__PURE__ */ import_react4.default.createElement($1bf158f521e1b1b4$var$AccordionImplSingle, _extends({}, singleProps, {
    ref: forwardedRef
  })));
});
$1bf158f521e1b1b4$export$a766cd26d0d69044.propTypes = {
  type(props) {
    const value = props.value || props.defaultValue;
    if (props.type && ![
      "single",
      "multiple"
    ].includes(props.type))
      return new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.");
    if (props.type === "multiple" && typeof value === "string")
      return new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.");
    if (props.type === "single" && Array.isArray(value))
      return new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.");
    return null;
  }
};
var [$1bf158f521e1b1b4$var$AccordionValueProvider, $1bf158f521e1b1b4$var$useAccordionValueContext] = $1bf158f521e1b1b4$var$createAccordionContext($1bf158f521e1b1b4$var$ACCORDION_NAME);
var [$1bf158f521e1b1b4$var$AccordionCollapsibleProvider, $1bf158f521e1b1b4$var$useAccordionCollapsibleContext] = $1bf158f521e1b1b4$var$createAccordionContext($1bf158f521e1b1b4$var$ACCORDION_NAME, {
  collapsible: false
});
var $1bf158f521e1b1b4$var$AccordionImplSingle = /* @__PURE__ */ import_react4.default.forwardRef((props, forwardedRef) => {
  const { value: valueProp, defaultValue, onValueChange = () => {
  }, collapsible = false, ...accordionSingleProps } = props;
  const [value, setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  return /* @__PURE__ */ import_react4.default.createElement($1bf158f521e1b1b4$var$AccordionValueProvider, {
    scope: props.__scopeAccordion,
    value: value ? [
      value
    ] : [],
    onItemOpen: setValue,
    onItemClose: import_react4.default.useCallback(
      () => collapsible && setValue(""),
      [
        collapsible,
        setValue
      ]
    )
  }, /* @__PURE__ */ import_react4.default.createElement($1bf158f521e1b1b4$var$AccordionCollapsibleProvider, {
    scope: props.__scopeAccordion,
    collapsible
  }, /* @__PURE__ */ import_react4.default.createElement($1bf158f521e1b1b4$var$AccordionImpl, _extends({}, accordionSingleProps, {
    ref: forwardedRef
  }))));
});
var $1bf158f521e1b1b4$var$AccordionImplMultiple = /* @__PURE__ */ import_react4.default.forwardRef((props, forwardedRef) => {
  const { value: valueProp, defaultValue, onValueChange = () => {
  }, ...accordionMultipleProps } = props;
  const [value1 = [], setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  const handleItemOpen = import_react4.default.useCallback(
    (itemValue) => setValue(
      (prevValue = []) => [
        ...prevValue,
        itemValue
      ]
    ),
    [
      setValue
    ]
  );
  const handleItemClose = import_react4.default.useCallback(
    (itemValue) => setValue(
      (prevValue = []) => prevValue.filter(
        (value) => value !== itemValue
      )
    ),
    [
      setValue
    ]
  );
  return /* @__PURE__ */ import_react4.default.createElement($1bf158f521e1b1b4$var$AccordionValueProvider, {
    scope: props.__scopeAccordion,
    value: value1,
    onItemOpen: handleItemOpen,
    onItemClose: handleItemClose
  }, /* @__PURE__ */ import_react4.default.createElement($1bf158f521e1b1b4$var$AccordionCollapsibleProvider, {
    scope: props.__scopeAccordion,
    collapsible: true
  }, /* @__PURE__ */ import_react4.default.createElement($1bf158f521e1b1b4$var$AccordionImpl, _extends({}, accordionMultipleProps, {
    ref: forwardedRef
  }))));
});
var [$1bf158f521e1b1b4$var$AccordionImplProvider, $1bf158f521e1b1b4$var$useAccordionContext] = $1bf158f521e1b1b4$var$createAccordionContext($1bf158f521e1b1b4$var$ACCORDION_NAME);
var $1bf158f521e1b1b4$var$AccordionImpl = /* @__PURE__ */ import_react4.default.forwardRef((props, forwardedRef) => {
  const { __scopeAccordion, disabled, dir, orientation = "vertical", ...accordionProps } = props;
  const accordionRef = import_react4.default.useRef(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(accordionRef, forwardedRef);
  const getItems = $1bf158f521e1b1b4$var$useCollection(__scopeAccordion);
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  const isDirectionLTR = direction === "ltr";
  const handleKeyDown = $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
    var _triggerCollection$cl;
    if (!$1bf158f521e1b1b4$var$ACCORDION_KEYS.includes(event.key))
      return;
    const target = event.target;
    const triggerCollection = getItems().filter((item) => {
      var _item$ref$current;
      return !((_item$ref$current = item.ref.current) !== null && _item$ref$current !== void 0 && _item$ref$current.disabled);
    });
    const triggerIndex = triggerCollection.findIndex(
      (item) => item.ref.current === target
    );
    const triggerCount = triggerCollection.length;
    if (triggerIndex === -1)
      return;
    event.preventDefault();
    let nextIndex = triggerIndex;
    const homeIndex = 0;
    const endIndex = triggerCount - 1;
    const moveNext = () => {
      nextIndex = triggerIndex + 1;
      if (nextIndex > endIndex)
        nextIndex = homeIndex;
    };
    const movePrev = () => {
      nextIndex = triggerIndex - 1;
      if (nextIndex < homeIndex)
        nextIndex = endIndex;
    };
    switch (event.key) {
      case "Home":
        nextIndex = homeIndex;
        break;
      case "End":
        nextIndex = endIndex;
        break;
      case "ArrowRight":
        if (orientation === "horizontal") {
          if (isDirectionLTR)
            moveNext();
          else
            movePrev();
        }
        break;
      case "ArrowDown":
        if (orientation === "vertical")
          moveNext();
        break;
      case "ArrowLeft":
        if (orientation === "horizontal") {
          if (isDirectionLTR)
            movePrev();
          else
            moveNext();
        }
        break;
      case "ArrowUp":
        if (orientation === "vertical")
          movePrev();
        break;
    }
    const clampedIndex = nextIndex % triggerCount;
    (_triggerCollection$cl = triggerCollection[clampedIndex].ref.current) === null || _triggerCollection$cl === void 0 || _triggerCollection$cl.focus();
  });
  return /* @__PURE__ */ import_react4.default.createElement($1bf158f521e1b1b4$var$AccordionImplProvider, {
    scope: __scopeAccordion,
    disabled,
    direction: dir,
    orientation
  }, /* @__PURE__ */ import_react4.default.createElement($1bf158f521e1b1b4$var$Collection.Slot, {
    scope: __scopeAccordion
  }, /* @__PURE__ */ import_react4.default.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, accordionProps, {
    "data-orientation": orientation,
    ref: composedRefs,
    onKeyDown: disabled ? void 0 : handleKeyDown
  }))));
});
var $1bf158f521e1b1b4$var$ITEM_NAME = "AccordionItem";
var [$1bf158f521e1b1b4$var$AccordionItemProvider, $1bf158f521e1b1b4$var$useAccordionItemContext] = $1bf158f521e1b1b4$var$createAccordionContext($1bf158f521e1b1b4$var$ITEM_NAME);
var $1bf158f521e1b1b4$export$d99097c13d4dac9f = /* @__PURE__ */ import_react4.default.forwardRef((props, forwardedRef) => {
  const { __scopeAccordion, value, ...accordionItemProps } = props;
  const accordionContext = $1bf158f521e1b1b4$var$useAccordionContext($1bf158f521e1b1b4$var$ITEM_NAME, __scopeAccordion);
  const valueContext = $1bf158f521e1b1b4$var$useAccordionValueContext($1bf158f521e1b1b4$var$ITEM_NAME, __scopeAccordion);
  const collapsibleScope = $1bf158f521e1b1b4$var$useCollapsibleScope(__scopeAccordion);
  const triggerId = $1746a345f3d73bb7$export$f680877a34711e37();
  const open1 = value && valueContext.value.includes(value) || false;
  const disabled = accordionContext.disabled || props.disabled;
  return /* @__PURE__ */ import_react4.default.createElement($1bf158f521e1b1b4$var$AccordionItemProvider, {
    scope: __scopeAccordion,
    open: open1,
    disabled,
    triggerId
  }, /* @__PURE__ */ import_react4.default.createElement($409067139f391064$export$be92b6f5f03c0fe9, _extends({
    "data-orientation": accordionContext.orientation,
    "data-state": $1bf158f521e1b1b4$var$getState(open1)
  }, collapsibleScope, accordionItemProps, {
    ref: forwardedRef,
    disabled,
    open: open1,
    onOpenChange: (open) => {
      if (open)
        valueContext.onItemOpen(value);
      else
        valueContext.onItemClose(value);
    }
  })));
});
var $1bf158f521e1b1b4$var$HEADER_NAME = "AccordionHeader";
var $1bf158f521e1b1b4$export$5e3e5deaaf81ee41 = /* @__PURE__ */ import_react4.default.forwardRef((props, forwardedRef) => {
  const { __scopeAccordion, ...headerProps } = props;
  const accordionContext = $1bf158f521e1b1b4$var$useAccordionContext($1bf158f521e1b1b4$var$ACCORDION_NAME, __scopeAccordion);
  const itemContext = $1bf158f521e1b1b4$var$useAccordionItemContext($1bf158f521e1b1b4$var$HEADER_NAME, __scopeAccordion);
  return /* @__PURE__ */ import_react4.default.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.h3, _extends({
    "data-orientation": accordionContext.orientation,
    "data-state": $1bf158f521e1b1b4$var$getState(itemContext.open),
    "data-disabled": itemContext.disabled ? "" : void 0
  }, headerProps, {
    ref: forwardedRef
  }));
});
var $1bf158f521e1b1b4$var$TRIGGER_NAME = "AccordionTrigger";
var $1bf158f521e1b1b4$export$94e939b1f85bdd73 = /* @__PURE__ */ import_react4.default.forwardRef((props, forwardedRef) => {
  const { __scopeAccordion, ...triggerProps } = props;
  const accordionContext = $1bf158f521e1b1b4$var$useAccordionContext($1bf158f521e1b1b4$var$ACCORDION_NAME, __scopeAccordion);
  const itemContext = $1bf158f521e1b1b4$var$useAccordionItemContext($1bf158f521e1b1b4$var$TRIGGER_NAME, __scopeAccordion);
  const collapsibleContext = $1bf158f521e1b1b4$var$useAccordionCollapsibleContext($1bf158f521e1b1b4$var$TRIGGER_NAME, __scopeAccordion);
  const collapsibleScope = $1bf158f521e1b1b4$var$useCollapsibleScope(__scopeAccordion);
  return /* @__PURE__ */ import_react4.default.createElement($1bf158f521e1b1b4$var$Collection.ItemSlot, {
    scope: __scopeAccordion
  }, /* @__PURE__ */ import_react4.default.createElement($409067139f391064$export$41fb9f06171c75f4, _extends({
    "aria-disabled": itemContext.open && !collapsibleContext.collapsible || void 0,
    "data-orientation": accordionContext.orientation,
    id: itemContext.triggerId
  }, collapsibleScope, triggerProps, {
    ref: forwardedRef
  })));
});
var $1bf158f521e1b1b4$var$CONTENT_NAME = "AccordionContent";
var $1bf158f521e1b1b4$export$985b9a77379b54a0 = /* @__PURE__ */ import_react4.default.forwardRef((props, forwardedRef) => {
  const { __scopeAccordion, ...contentProps } = props;
  const accordionContext = $1bf158f521e1b1b4$var$useAccordionContext($1bf158f521e1b1b4$var$ACCORDION_NAME, __scopeAccordion);
  const itemContext = $1bf158f521e1b1b4$var$useAccordionItemContext($1bf158f521e1b1b4$var$CONTENT_NAME, __scopeAccordion);
  const collapsibleScope = $1bf158f521e1b1b4$var$useCollapsibleScope(__scopeAccordion);
  return /* @__PURE__ */ import_react4.default.createElement($409067139f391064$export$7c6e2c02157bb7d2, _extends({
    role: "region",
    "aria-labelledby": itemContext.triggerId,
    "data-orientation": accordionContext.orientation
  }, collapsibleScope, contentProps, {
    ref: forwardedRef,
    style: {
      ["--radix-accordion-content-height"]: "var(--radix-collapsible-content-height)",
      ["--radix-accordion-content-width"]: "var(--radix-collapsible-content-width)",
      ...props.style
    }
  }));
});
function $1bf158f521e1b1b4$var$getState(open) {
  return open ? "open" : "closed";
}
var $1bf158f521e1b1b4$export$be92b6f5f03c0fe9 = $1bf158f521e1b1b4$export$a766cd26d0d69044;
var $1bf158f521e1b1b4$export$6d08773d2e66f8f2 = $1bf158f521e1b1b4$export$d99097c13d4dac9f;
var $1bf158f521e1b1b4$export$8b251419efc915eb = $1bf158f521e1b1b4$export$5e3e5deaaf81ee41;
var $1bf158f521e1b1b4$export$41fb9f06171c75f4 = $1bf158f521e1b1b4$export$94e939b1f85bdd73;
var $1bf158f521e1b1b4$export$7c6e2c02157bb7d2 = $1bf158f521e1b1b4$export$985b9a77379b54a0;

// node_modules/@radix-ui/react-icons/dist/react-icons.esm.js
var import_react5 = __toESM(require_react());
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var _excluded$W = ["color"];
var ChevronDownIcon = /* @__PURE__ */ (0, import_react5.forwardRef)(function(_ref, forwardedRef) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$W);
  return (0, import_react5.createElement)("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props, {
    ref: forwardedRef
  }), (0, import_react5.createElement)("path", {
    d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
var _excluded$X = ["color"];
var ChevronLeftIcon = /* @__PURE__ */ (0, import_react5.forwardRef)(function(_ref, forwardedRef) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$X);
  return (0, import_react5.createElement)("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props, {
    ref: forwardedRef
  }), (0, import_react5.createElement)("path", {
    d: "M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
var _excluded$Y = ["color"];
var ChevronRightIcon = /* @__PURE__ */ (0, import_react5.forwardRef)(function(_ref, forwardedRef) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$Y);
  return (0, import_react5.createElement)("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props, {
    ref: forwardedRef
  }), (0, import_react5.createElement)("path", {
    d: "M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
var _excluded$1J = ["color"];
var DotsHorizontalIcon = /* @__PURE__ */ (0, import_react5.forwardRef)(function(_ref, forwardedRef) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$1J);
  return (0, import_react5.createElement)("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props, {
    ref: forwardedRef
  }), (0, import_react5.createElement)("path", {
    d: "M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});

// app/components/ui/accordion.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/accordion.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/accordion.tsx"
  );
  import.meta.hot.lastModified = "1728767387048.1558";
}
var Accordion = $1bf158f521e1b1b4$export$be92b6f5f03c0fe9;
var AccordionItem = React2.forwardRef(_c2 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)($1bf158f521e1b1b4$export$6d08773d2e66f8f2, { ref, className: cn("border-b", className), ...props }, void 0, false, {
  fileName: "app/components/ui/accordion.tsx",
  lineNumber: 30,
  columnNumber: 12
}, this));
_c22 = AccordionItem;
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React2.forwardRef(_c3 = ({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)($1bf158f521e1b1b4$export$8b251419efc915eb, { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)($1bf158f521e1b1b4$export$41fb9f06171c75f4, { ref, className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", className), ...props, children: [
  children,
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronDownIcon, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" }, void 0, false, {
    fileName: "app/components/ui/accordion.tsx",
    lineNumber: 40,
    columnNumber: 7
  }, this)
] }, void 0, true, {
  fileName: "app/components/ui/accordion.tsx",
  lineNumber: 38,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/components/ui/accordion.tsx",
  lineNumber: 37,
  columnNumber: 12
}, this));
_c4 = AccordionTrigger;
AccordionTrigger.displayName = $1bf158f521e1b1b4$export$41fb9f06171c75f4.displayName;
var AccordionContent = React2.forwardRef(_c5 = ({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)($1bf158f521e1b1b4$export$7c6e2c02157bb7d2, { ref, className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: cn("pb-4 pt-0", className), children }, void 0, false, {
  fileName: "app/components/ui/accordion.tsx",
  lineNumber: 50,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/components/ui/accordion.tsx",
  lineNumber: 49,
  columnNumber: 12
}, this));
_c6 = AccordionContent;
AccordionContent.displayName = $1bf158f521e1b1b4$export$7c6e2c02157bb7d2.displayName;
var _c2;
var _c22;
var _c3;
var _c4;
var _c5;
var _c6;
$RefreshReg$(_c2, "AccordionItem$React.forwardRef");
$RefreshReg$(_c22, "AccordionItem");
$RefreshReg$(_c3, "AccordionTrigger$React.forwardRef");
$RefreshReg$(_c4, "AccordionTrigger");
$RefreshReg$(_c5, "AccordionContent$React.forwardRef");
$RefreshReg$(_c6, "AccordionContent");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/dashboard/ProjectCard.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/dashboard/ProjectCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/dashboard/ProjectCard.tsx"
  );
  import.meta.hot.lastModified = "1728767387048.1558";
}
var ProjectCard = ({
  id,
  title,
  description,
  emission,
  routes,
  chain
}) => {
  _s2();
  const fetcher = useFetcher();
  const handleDeleteProject = () => {
    const formData = {
      projId: id
    };
    fetcher.submit(formData, {
      method: "DELETE",
      action: "/api/project"
    });
  };
  const [calcChain, setCalcChain] = (0, import_react6.useState)(loadChain(chain));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card, { className: "min-h-32 bg-white shadow-md rounded-lg ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CardHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CardTitle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: title }, void 0, false, {
        fileName: "app/components/dashboard/ProjectCard.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/dashboard/ProjectCard.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CardDescription, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: description }, void 0, false, {
        fileName: "app/components/dashboard/ProjectCard.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/dashboard/ProjectCard.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/dashboard/ProjectCard.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
      "Estimation amount: ",
      emission ? emission : 0,
      " kg"
    ] }, void 0, true, {
      fileName: "app/components/dashboard/ProjectCard.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/dashboard/ProjectCard.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CardFooter, { className: "flex justify-between gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dialog, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogTrigger, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { variant: "destructive", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TrashIcon, {}, void 0, false, {
          fileName: "app/components/dashboard/ProjectCard.tsx",
          lineNumber: 69,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/dashboard/ProjectCard.tsx",
          lineNumber: 68,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/dashboard/ProjectCard.tsx",
          lineNumber: 67,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogContent, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogTitle, { children: [
              "Delete project '",
              title,
              "'?"
            ] }, void 0, true, {
              fileName: "app/components/dashboard/ProjectCard.tsx",
              lineNumber: 74,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogDescription, { children: [
              "This action cannot be undone. Are you sure you want to permanently delete project '",
              title,
              "' from our servers?"
            ] }, void 0, true, {
              fileName: "app/components/dashboard/ProjectCard.tsx",
              lineNumber: 75,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/dashboard/ProjectCard.tsx",
            lineNumber: 73,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogClose, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { className: "border-black border rounded", variant: "secondary", children: "Cancel" }, void 0, false, {
            fileName: "app/components/dashboard/ProjectCard.tsx",
            lineNumber: 81,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/dashboard/ProjectCard.tsx",
            lineNumber: 80,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogClose, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { className: "border-black border rounded", variant: "destructive", onClick: handleDeleteProject, children: "Delete" }, void 0, false, {
            fileName: "app/components/dashboard/ProjectCard.tsx",
            lineNumber: 86,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/dashboard/ProjectCard.tsx",
            lineNumber: 85,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/dashboard/ProjectCard.tsx",
          lineNumber: 72,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/dashboard/ProjectCard.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dialog, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { variant: "outline", className: "border-black border rounded", children: "Overview" }, void 0, false, {
          fileName: "app/components/dashboard/ProjectCard.tsx",
          lineNumber: 94,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/dashboard/ProjectCard.tsx",
          lineNumber: 93,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogContent, { className: "flex flex-col gap-4 max-w-md md:max-w-xl", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogTitle, { children: title }, void 0, false, {
              fileName: "app/components/dashboard/ProjectCard.tsx",
              lineNumber: 100,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogDescription, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: description }, void 0, false, {
              fileName: "app/components/dashboard/ProjectCard.tsx",
              lineNumber: 102,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/components/dashboard/ProjectCard.tsx",
              lineNumber: 101,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/dashboard/ProjectCard.tsx",
            lineNumber: 99,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Accordion, { type: "single", collapsible: true, children: routes.map((route, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AccordionItem, { value: "item " + index, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AccordionTrigger, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { children: route.name }, void 0, false, {
              fileName: "app/components/dashboard/ProjectCard.tsx",
              lineNumber: 109,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/dashboard/ProjectCard.tsx",
              lineNumber: 108,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AccordionContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Table, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableCaption, { children: [
                "Emissions in total: ",
                route.emission,
                " for route",
                " ",
                route.name
              ] }, void 0, true, {
                fileName: "app/components/dashboard/ProjectCard.tsx",
                lineNumber: 113,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableRow, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableHead, { className: "w-[100px]", children: "Transport Form" }, void 0, false, {
                  fileName: "app/components/dashboard/ProjectCard.tsx",
                  lineNumber: 119,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableHead, { children: "Distance (km)" }, void 0, false, {
                  fileName: "app/components/dashboard/ProjectCard.tsx",
                  lineNumber: 122,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableHead, { children: "From" }, void 0, false, {
                  fileName: "app/components/dashboard/ProjectCard.tsx",
                  lineNumber: 123,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableHead, { children: "To" }, void 0, false, {
                  fileName: "app/components/dashboard/ProjectCard.tsx",
                  lineNumber: 124,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableHead, { children: "Cargo Weight" }, void 0, false, {
                  fileName: "app/components/dashboard/ProjectCard.tsx",
                  lineNumber: 125,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableHead, { className: "text-right", children: "Amount of CO2 (kg)" }, void 0, false, {
                  fileName: "app/components/dashboard/ProjectCard.tsx",
                  lineNumber: 126,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/dashboard/ProjectCard.tsx",
                lineNumber: 118,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/components/dashboard/ProjectCard.tsx",
                lineNumber: 117,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableBody, { children: route.stages.map((stage, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableRow, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableCell, { children: getTransportMethodLabel(stage.transportMethod) }, void 0, false, {
                  fileName: "app/components/dashboard/ProjectCard.tsx",
                  lineNumber: 134,
                  columnNumber: 29
                }, this),
                stage.usesAddress ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableCell, { children: stage.distance_km }, void 0, false, {
                    fileName: "app/components/dashboard/ProjectCard.tsx",
                    lineNumber: 139,
                    columnNumber: 35
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableCell, { children: stage.from.city }, void 0, false, {
                    fileName: "app/components/dashboard/ProjectCard.tsx",
                    lineNumber: 140,
                    columnNumber: 35
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableCell, { children: stage.to.city }, void 0, false, {
                    fileName: "app/components/dashboard/ProjectCard.tsx",
                    lineNumber: 141,
                    columnNumber: 35
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableCell, { className: "text-right", children: stage.cargo }, void 0, false, {
                    fileName: "app/components/dashboard/ProjectCard.tsx",
                    lineNumber: 142,
                    columnNumber: 35
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/dashboard/ProjectCard.tsx",
                  lineNumber: 138,
                  columnNumber: 50
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableCell, { children: stage.distance }, void 0, false, {
                    fileName: "app/components/dashboard/ProjectCard.tsx",
                    lineNumber: 146,
                    columnNumber: 35
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableCell, {}, void 0, false, {
                    fileName: "app/components/dashboard/ProjectCard.tsx",
                    lineNumber: 147,
                    columnNumber: 35
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableCell, {}, void 0, false, {
                    fileName: "app/components/dashboard/ProjectCard.tsx",
                    lineNumber: 148,
                    columnNumber: 35
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableCell, { className: "text-right", children: stage.cargo }, void 0, false, {
                    fileName: "app/components/dashboard/ProjectCard.tsx",
                    lineNumber: 149,
                    columnNumber: 35
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/dashboard/ProjectCard.tsx",
                  lineNumber: 145,
                  columnNumber: 39
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableCell, { className: "text-right", children: stage.emission ? stage.emission : 0 }, void 0, false, {
                  fileName: "app/components/dashboard/ProjectCard.tsx",
                  lineNumber: 154,
                  columnNumber: 29
                }, this)
              ] }, index2, true, {
                fileName: "app/components/dashboard/ProjectCard.tsx",
                lineNumber: 133,
                columnNumber: 61
              }, this)) }, void 0, false, {
                fileName: "app/components/dashboard/ProjectCard.tsx",
                lineNumber: 132,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/dashboard/ProjectCard.tsx",
              lineNumber: 112,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/dashboard/ProjectCard.tsx",
              lineNumber: 111,
              columnNumber: 19
            }, this)
          ] }, index, true, {
            fileName: "app/components/dashboard/ProjectCard.tsx",
            lineNumber: 107,
            columnNumber: 45
          }, this)) }, void 0, false, {
            fileName: "app/components/dashboard/ProjectCard.tsx",
            lineNumber: 106,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { children: "View Graphs" }, void 0, false, {
            fileName: "app/components/dashboard/ProjectCard.tsx",
            lineNumber: 165,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/dashboard/ProjectCard.tsx",
            lineNumber: 164,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/dashboard/ProjectCard.tsx",
          lineNumber: 98,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/dashboard/ProjectCard.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dialog, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { variant: "outline", className: "border-black border rounded", children: [
          "Edit",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { className: "w-6 h-6 text-gray-800 dark:text-white", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m10.8 17.8-6.4 2.1 2.1-6.4m4.3 4.3L19 9a3 3 0 0 0-4-4l-8.4 8.6m4.3 4.3-4.3-4.3m2.1 2.1L15 9.1m-2.1-2 4.2 4.2" }, void 0, false, {
            fileName: "app/components/dashboard/ProjectCard.tsx",
            lineNumber: 175,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/dashboard/ProjectCard.tsx",
            lineNumber: 174,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/dashboard/ProjectCard.tsx",
          lineNumber: 172,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/dashboard/ProjectCard.tsx",
          lineNumber: 171,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(EditProjectPopUp, { id, title, description, chain }, void 0, false, {
          fileName: "app/components/dashboard/ProjectCard.tsx",
          lineNumber: 179,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/dashboard/ProjectCard.tsx",
        lineNumber: 170,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/dashboard/ProjectCard.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/dashboard/ProjectCard.tsx",
    lineNumber: 53,
    columnNumber: 10
  }, this);
};
_s2(ProjectCard, "dK9yzEZmC3+YMKc/P4239Su807Q=", false, function() {
  return [useFetcher];
});
_c7 = ProjectCard;
var _c7;
$RefreshReg$(_c7, "ProjectCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/pagination.tsx
var React4 = __toESM(require_react());
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/pagination.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/pagination.tsx"
  );
  import.meta.hot.lastModified = "1728767387048.1558";
}
var Pagination = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("nav", { role: "navigation", "aria-label": "pagination", className: cn("mx-auto flex w-full justify-center", className), ...props }, void 0, false, {
  fileName: "app/components/ui/pagination.tsx",
  lineNumber: 28,
  columnNumber: 7
}, this);
_c8 = Pagination;
Pagination.displayName = "Pagination";
var PaginationContent = React4.forwardRef(_c23 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { ref, className: cn("flex flex-row items-center gap-1", className), ...props }, void 0, false, {
  fileName: "app/components/ui/pagination.tsx",
  lineNumber: 34,
  columnNumber: 12
}, this));
_c32 = PaginationContent;
PaginationContent.displayName = "PaginationContent";
var PaginationItem = React4.forwardRef(_c42 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { ref, className: cn("", className), ...props }, void 0, false, {
  fileName: "app/components/ui/pagination.tsx",
  lineNumber: 40,
  columnNumber: 12
}, this));
_c52 = PaginationItem;
PaginationItem.displayName = "PaginationItem";
var PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { "aria-current": isActive ? "page" : void 0, className: cn(buttonVariants({
  variant: isActive ? "outline" : "ghost",
  size
}), className), ...props }, void 0, false, {
  fileName: "app/components/ui/pagination.tsx",
  lineNumber: 48,
  columnNumber: 7
}, this);
_c62 = PaginationLink;
PaginationLink.displayName = "PaginationLink";
var PaginationPrevious = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(PaginationLink, { "aria-label": "Go to previous page", size: "default", className: cn("gap-1 pl-2.5", className), ...props, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ChevronLeftIcon, { className: "h-4 w-4" }, void 0, false, {
    fileName: "app/components/ui/pagination.tsx",
    lineNumber: 58,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Previous" }, void 0, false, {
    fileName: "app/components/ui/pagination.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/ui/pagination.tsx",
  lineNumber: 57,
  columnNumber: 7
}, this);
_c72 = PaginationPrevious;
PaginationPrevious.displayName = "PaginationPrevious";
var PaginationNext = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(PaginationLink, { "aria-label": "Go to next page", size: "default", className: cn("gap-1 pr-2.5", className), ...props, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Next" }, void 0, false, {
    fileName: "app/components/ui/pagination.tsx",
    lineNumber: 67,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ChevronRightIcon, { className: "h-4 w-4" }, void 0, false, {
    fileName: "app/components/ui/pagination.tsx",
    lineNumber: 68,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/ui/pagination.tsx",
  lineNumber: 66,
  columnNumber: 7
}, this);
_c82 = PaginationNext;
PaginationNext.displayName = "PaginationNext";
var PaginationEllipsis = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { "aria-hidden": true, className: cn("flex h-9 w-9 items-center justify-center", className), ...props, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DotsHorizontalIcon, { className: "h-4 w-4" }, void 0, false, {
    fileName: "app/components/ui/pagination.tsx",
    lineNumber: 76,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "sr-only", children: "More pages" }, void 0, false, {
    fileName: "app/components/ui/pagination.tsx",
    lineNumber: 77,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/ui/pagination.tsx",
  lineNumber: 75,
  columnNumber: 7
}, this);
_c9 = PaginationEllipsis;
PaginationEllipsis.displayName = "PaginationEllipsis";
var _c8;
var _c23;
var _c32;
var _c42;
var _c52;
var _c62;
var _c72;
var _c82;
var _c9;
$RefreshReg$(_c8, "Pagination");
$RefreshReg$(_c23, "PaginationContent$React.forwardRef");
$RefreshReg$(_c32, "PaginationContent");
$RefreshReg$(_c42, "PaginationItem$React.forwardRef");
$RefreshReg$(_c52, "PaginationItem");
$RefreshReg$(_c62, "PaginationLink");
$RefreshReg$(_c72, "PaginationPrevious");
$RefreshReg$(_c82, "PaginationNext");
$RefreshReg$(_c9, "PaginationEllipsis");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/dashboard/dashboard.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/dashboard/dashboard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/dashboard/dashboard.tsx"
  );
  import.meta.hot.lastModified = "1728767387048.1558";
}
var Dashboard = ({
  Projects,
  UserId
}) => {
  _s3();
  const [currentPage, setCurrentPage] = (0, import_react8.useState)(1);
  const [searchTerm, setSearchTerm] = (0, import_react8.useState)("");
  const itemsPerPage = 6;
  const [filteredProjectsByUser, setFilteredProjectsByUser] = (0, import_react8.useState)([]);
  (0, import_react8.useEffect)(() => {
    const filtered = Projects.filter((project) => project.user_id === UserId);
    setFilteredProjectsByUser(filtered);
  }, [Projects, UserId]);
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredProjects = filteredProjectsByUser.filter((project) => project.title.toLowerCase().includes(searchTerm.toLowerCase()));
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const projectsOnPage = filteredProjects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "text-3xl font-bold my-2 text-center", children: "My Projects" }, void 0, false, {
      fileName: "app/components/dashboard/dashboard.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col mx-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-full flex flex-row justify-between my-10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Input, { type: "text", placeholder: "Search for a project", className: "w-full", value: searchTerm, onChange: handleSearch }, void 0, false, {
          fileName: "app/components/dashboard/dashboard.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(createproject_default, { UserId, chain: defaultChain() }, void 0, false, {
          fileName: "app/components/dashboard/dashboard.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/dashboard/dashboard.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 justify-self-stretch max-w-full gap-4", children: projectsOnPage.map((p, index) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ProjectCard, { id: p.id, title: p.title, description: p.description, routes: p.routes, emission: p.emissions, chain: p.chain }, index, false, {
          fileName: "app/components/dashboard/dashboard.tsx",
          lineNumber: 67,
          columnNumber: 18
        }, this);
      }) }, void 0, false, {
        fileName: "app/components/dashboard/dashboard.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "my-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Pagination, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PaginationContent, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PaginationPrevious, { href: "#", size: "default", onClick: handlePreviousPage }, void 0, false, {
          fileName: "app/components/dashboard/dashboard.tsx",
          lineNumber: 75,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/dashboard/dashboard.tsx",
          lineNumber: 74,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PaginationLink, { href: "#", size: "default", children: currentPage }, void 0, false, {
          fileName: "app/components/dashboard/dashboard.tsx",
          lineNumber: 78,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/dashboard/dashboard.tsx",
          lineNumber: 77,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PaginationEllipsis, {}, void 0, false, {
          fileName: "app/components/dashboard/dashboard.tsx",
          lineNumber: 83,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/dashboard/dashboard.tsx",
          lineNumber: 82,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PaginationNext, { href: "#", size: "default", onClick: handleNextPage }, void 0, false, {
          fileName: "app/components/dashboard/dashboard.tsx",
          lineNumber: 86,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/dashboard/dashboard.tsx",
          lineNumber: 85,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/dashboard/dashboard.tsx",
        lineNumber: 73,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/dashboard/dashboard.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/dashboard/dashboard.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/dashboard/dashboard.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/dashboard/dashboard.tsx",
    lineNumber: 57,
    columnNumber: 10
  }, this);
};
_s3(Dashboard, "Gq45W87FXXAnuOJAHl58/DXnFwI=");
_c10 = Dashboard;
var dashboard_default = Dashboard;
var _c10;
$RefreshReg$(_c10, "Dashboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/projects._index.tsx
var import_deno = __toESM(require_deno());
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/projects._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/projects._index.tsx"
  );
  import.meta.hot.lastModified = "1728767387048.1558";
}
var ProjectsPage = () => {
  _s4();
  const {
    projects,
    userId
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(dashboard_default, { Projects: projects, UserId: userId }, void 0, false, {
    fileName: "app/routes/projects._index.tsx",
    lineNumber: 59,
    columnNumber: 10
  }, this);
};
_s4(ProjectsPage, "CaZRf9OidLRQEH/X2WFlUoEqr30=", false, function() {
  return [useLoaderData];
});
_c11 = ProjectsPage;
var projects_index_default = ProjectsPage;
var _c11;
$RefreshReg$(_c11, "ProjectsPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  projects_index_default as default
};
//# sourceMappingURL=/build/routes/projects._index-NXFM4CGW.js.map
