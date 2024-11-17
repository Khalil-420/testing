import {
  CALC_default
} from "/build/_shared/chunk-3FLRWJMW.js";
import {
  $e02a7d9cb1dc128c$export$c74125a8e3af6bb2,
  $f631663db3294ace$export$b39126d51d94e6f3
} from "/build/_shared/chunk-56YGGU2X.js";
import {
  $010c2913dbd2fe3d$export$5cae361ad82dce8b,
  $1746a345f3d73bb7$export$f680877a34711e37,
  $5cb92bef7577960e$export$177fb62ff3ec1f22,
  $71cd76cc60e0454e$export$6f32135080cb4c3,
  $8927f6f2acc4f386$export$250ffa63cdc0d034,
  $8927f6f2acc4f386$export$6d1a0317bde7de7f,
  $921a889cee6df7e8$export$99c2b779aa4e8b8b,
  $9f79659886946c16$export$e5c5a5f917a5871c,
  $b1b2314f5f9a1d84$export$25bec8c6f54ee79a,
  $c512c27ab02ef895$export$50c7b4e9d9f19c1,
  $e42e1063c40fb3ef$export$b9ecd428b558ff10,
  ChevronDown,
  GitHub,
  MessageDialog
} from "/build/_shared/chunk-XI7XXCOH.js";
import {
  $6ed0406888f73fc4$export$43e446d32b3d21af,
  $6ed0406888f73fc4$export$c7b2cbe3552a0d05,
  Button,
  _extends,
  cn,
  cva
} from "/build/_shared/chunk-OCIN7GG6.js";
import {
  require_deno
} from "/build/_shared/chunk-WUR62FST.js";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRevalidator
} from "/build/_shared/chunk-7KR3KC3F.js";
import {
  require_react_dom
} from "/build/_shared/chunk-H36SQQE5.js";
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

// css-bundle-plugin-ns:@remix-run/css-bundle
var cssBundleHref = "/build/css-bundle-T4LLRSST.css";

// app/root.tsx
var import_deno = __toESM(require_deno());
var import_react11 = __toESM(require_react());

// app/components/navbar.tsx
var import_react5 = __toESM(require_react());

// app/components/ui/navigation-menu.tsx
var React = __toESM(require_react());

// node_modules/@radix-ui/react-navigation-menu/dist/index.mjs
var import_react2 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var $ea1ef594cf570d83$export$439d29a4e110a164 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  return /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({}, props, {
    ref: forwardedRef,
    style: {
      // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
      position: "absolute",
      border: 0,
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      wordWrap: "normal",
      ...props.style
    }
  }));
});
var $ea1ef594cf570d83$export$be92b6f5f03c0fe9 = $ea1ef594cf570d83$export$439d29a4e110a164;

// node_modules/@radix-ui/react-navigation-menu/dist/index.mjs
var $322c88a641701f3b$var$NAVIGATION_MENU_NAME = "NavigationMenu";
var [$322c88a641701f3b$var$Collection, $322c88a641701f3b$var$useCollection, $322c88a641701f3b$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
var [$322c88a641701f3b$var$FocusGroupCollection, $322c88a641701f3b$var$useFocusGroupCollection, $322c88a641701f3b$var$createFocusGroupCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
var [$322c88a641701f3b$var$createNavigationMenuContext, $322c88a641701f3b$export$fb8ea5af8c9fcdf0] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($322c88a641701f3b$var$NAVIGATION_MENU_NAME, [
  $322c88a641701f3b$var$createCollectionScope,
  $322c88a641701f3b$var$createFocusGroupCollectionScope
]);
var [$322c88a641701f3b$var$NavigationMenuProviderImpl, $322c88a641701f3b$var$useNavigationMenuContext] = $322c88a641701f3b$var$createNavigationMenuContext($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
var [$322c88a641701f3b$var$ViewportContentProvider, $322c88a641701f3b$var$useViewportContentContext] = $322c88a641701f3b$var$createNavigationMenuContext($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
var $322c88a641701f3b$export$5b2278cf1e8bcae2 = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, value: valueProp, onValueChange, defaultValue, delayDuration = 200, skipDelayDuration = 300, orientation = "horizontal", dir, ...NavigationMenuProps } = props;
  const [navigationMenu, setNavigationMenu] = (0, import_react2.useState)(null);
  const composedRef = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setNavigationMenu(node)
  );
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  const openTimerRef = (0, import_react2.useRef)(0);
  const closeTimerRef = (0, import_react2.useRef)(0);
  const skipDelayTimerRef = (0, import_react2.useRef)(0);
  const [isOpenDelayed, setIsOpenDelayed] = (0, import_react2.useState)(true);
  const [value1 = "", setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: valueProp,
    onChange: (value) => {
      const isOpen = value !== "";
      const hasSkipDelayDuration = skipDelayDuration > 0;
      if (isOpen) {
        window.clearTimeout(skipDelayTimerRef.current);
        if (hasSkipDelayDuration)
          setIsOpenDelayed(false);
      } else {
        window.clearTimeout(skipDelayTimerRef.current);
        skipDelayTimerRef.current = window.setTimeout(
          () => setIsOpenDelayed(true),
          skipDelayDuration
        );
      }
      onValueChange === null || onValueChange === void 0 || onValueChange(value);
    },
    defaultProp: defaultValue
  });
  const startCloseTimer = (0, import_react2.useCallback)(() => {
    window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(
      () => setValue(""),
      150
    );
  }, [
    setValue
  ]);
  const handleOpen = (0, import_react2.useCallback)((itemValue) => {
    window.clearTimeout(closeTimerRef.current);
    setValue(itemValue);
  }, [
    setValue
  ]);
  const handleDelayedOpen = (0, import_react2.useCallback)((itemValue) => {
    const isOpenItem = value1 === itemValue;
    if (isOpenItem)
      window.clearTimeout(closeTimerRef.current);
    else
      openTimerRef.current = window.setTimeout(() => {
        window.clearTimeout(closeTimerRef.current);
        setValue(itemValue);
      }, delayDuration);
  }, [
    value1,
    setValue,
    delayDuration
  ]);
  (0, import_react2.useEffect)(() => {
    return () => {
      window.clearTimeout(openTimerRef.current);
      window.clearTimeout(closeTimerRef.current);
      window.clearTimeout(skipDelayTimerRef.current);
    };
  }, []);
  return /* @__PURE__ */ (0, import_react2.createElement)($322c88a641701f3b$var$NavigationMenuProvider, {
    scope: __scopeNavigationMenu,
    isRootMenu: true,
    value: value1,
    dir: direction,
    orientation,
    rootNavigationMenu: navigationMenu,
    onTriggerEnter: (itemValue) => {
      window.clearTimeout(openTimerRef.current);
      if (isOpenDelayed)
        handleDelayedOpen(itemValue);
      else
        handleOpen(itemValue);
    },
    onTriggerLeave: () => {
      window.clearTimeout(openTimerRef.current);
      startCloseTimer();
    },
    onContentEnter: () => window.clearTimeout(closeTimerRef.current),
    onContentLeave: startCloseTimer,
    onItemSelect: (itemValue) => {
      setValue(
        (prevValue) => prevValue === itemValue ? "" : itemValue
      );
    },
    onItemDismiss: () => setValue("")
  }, /* @__PURE__ */ (0, import_react2.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.nav, _extends({
    "aria-label": "Main",
    "data-orientation": orientation,
    dir: direction
  }, NavigationMenuProps, {
    ref: composedRef
  })));
});
var $322c88a641701f3b$var$NavigationMenuProvider = (props) => {
  const { scope, isRootMenu, rootNavigationMenu, dir, orientation, children, value, onItemSelect, onItemDismiss, onTriggerEnter, onTriggerLeave, onContentEnter, onContentLeave } = props;
  const [viewport, setViewport] = (0, import_react2.useState)(null);
  const [viewportContent, setViewportContent] = (0, import_react2.useState)(/* @__PURE__ */ new Map());
  const [indicatorTrack, setIndicatorTrack] = (0, import_react2.useState)(null);
  return /* @__PURE__ */ (0, import_react2.createElement)($322c88a641701f3b$var$NavigationMenuProviderImpl, {
    scope,
    isRootMenu,
    rootNavigationMenu,
    value,
    previousValue: $010c2913dbd2fe3d$export$5cae361ad82dce8b(value),
    baseId: $1746a345f3d73bb7$export$f680877a34711e37(),
    dir,
    orientation,
    viewport,
    onViewportChange: setViewport,
    indicatorTrack,
    onIndicatorTrackChange: setIndicatorTrack,
    onTriggerEnter: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onTriggerEnter),
    onTriggerLeave: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onTriggerLeave),
    onContentEnter: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onContentEnter),
    onContentLeave: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onContentLeave),
    onItemSelect: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onItemSelect),
    onItemDismiss: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onItemDismiss),
    onViewportContentChange: (0, import_react2.useCallback)((contentValue, contentData) => {
      setViewportContent((prevContent) => {
        prevContent.set(contentValue, contentData);
        return new Map(prevContent);
      });
    }, []),
    onViewportContentRemove: (0, import_react2.useCallback)((contentValue) => {
      setViewportContent((prevContent) => {
        if (!prevContent.has(contentValue))
          return prevContent;
        prevContent.delete(contentValue);
        return new Map(prevContent);
      });
    }, [])
  }, /* @__PURE__ */ (0, import_react2.createElement)($322c88a641701f3b$var$Collection.Provider, {
    scope
  }, /* @__PURE__ */ (0, import_react2.createElement)($322c88a641701f3b$var$ViewportContentProvider, {
    scope,
    items: viewportContent
  }, children)));
};
var $322c88a641701f3b$var$LIST_NAME = "NavigationMenuList";
var $322c88a641701f3b$export$c361068a95fd2286 = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, ...listProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$LIST_NAME, __scopeNavigationMenu);
  const list = /* @__PURE__ */ (0, import_react2.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.ul, _extends({
    "data-orientation": context.orientation
  }, listProps, {
    ref: forwardedRef
  }));
  return /* @__PURE__ */ (0, import_react2.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, {
    style: {
      position: "relative"
    },
    ref: context.onIndicatorTrackChange
  }, /* @__PURE__ */ (0, import_react2.createElement)($322c88a641701f3b$var$Collection.Slot, {
    scope: __scopeNavigationMenu
  }, context.isRootMenu ? /* @__PURE__ */ (0, import_react2.createElement)($322c88a641701f3b$var$FocusGroup, {
    asChild: true
  }, list) : list));
});
var $322c88a641701f3b$var$ITEM_NAME = "NavigationMenuItem";
var [$322c88a641701f3b$var$NavigationMenuItemContextProvider, $322c88a641701f3b$var$useNavigationMenuItemContext] = $322c88a641701f3b$var$createNavigationMenuContext($322c88a641701f3b$var$ITEM_NAME);
var $322c88a641701f3b$export$ffdbb83a2de845c2 = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, value: valueProp, ...itemProps } = props;
  const autoValue = $1746a345f3d73bb7$export$f680877a34711e37();
  const value = valueProp || autoValue || "LEGACY_REACT_AUTO_VALUE";
  const contentRef = (0, import_react2.useRef)(null);
  const triggerRef = (0, import_react2.useRef)(null);
  const focusProxyRef = (0, import_react2.useRef)(null);
  const restoreContentTabOrderRef = (0, import_react2.useRef)(() => {
  });
  const wasEscapeCloseRef = (0, import_react2.useRef)(false);
  const handleContentEntry = (0, import_react2.useCallback)((side = "start") => {
    if (contentRef.current) {
      restoreContentTabOrderRef.current();
      const candidates = $322c88a641701f3b$var$getTabbableCandidates(contentRef.current);
      if (candidates.length)
        $322c88a641701f3b$var$focusFirst(side === "start" ? candidates : candidates.reverse());
    }
  }, []);
  const handleContentExit = (0, import_react2.useCallback)(() => {
    if (contentRef.current) {
      const candidates = $322c88a641701f3b$var$getTabbableCandidates(contentRef.current);
      if (candidates.length)
        restoreContentTabOrderRef.current = $322c88a641701f3b$var$removeFromTabOrder(candidates);
    }
  }, []);
  return /* @__PURE__ */ (0, import_react2.createElement)($322c88a641701f3b$var$NavigationMenuItemContextProvider, {
    scope: __scopeNavigationMenu,
    value,
    triggerRef,
    contentRef,
    focusProxyRef,
    wasEscapeCloseRef,
    onEntryKeyDown: handleContentEntry,
    onFocusProxyEnter: handleContentEntry,
    onRootContentClose: handleContentExit,
    onContentFocusOutside: handleContentExit
  }, /* @__PURE__ */ (0, import_react2.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.li, _extends({}, itemProps, {
    ref: forwardedRef
  })));
});
var $322c88a641701f3b$var$TRIGGER_NAME = "NavigationMenuTrigger";
var $322c88a641701f3b$export$37fe8002734d8f2 = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, disabled, ...triggerProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$TRIGGER_NAME, props.__scopeNavigationMenu);
  const itemContext = $322c88a641701f3b$var$useNavigationMenuItemContext($322c88a641701f3b$var$TRIGGER_NAME, props.__scopeNavigationMenu);
  const ref = (0, import_react2.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(ref, itemContext.triggerRef, forwardedRef);
  const triggerId = $322c88a641701f3b$var$makeTriggerId(context.baseId, itemContext.value);
  const contentId = $322c88a641701f3b$var$makeContentId(context.baseId, itemContext.value);
  const hasPointerMoveOpenedRef = (0, import_react2.useRef)(false);
  const wasClickCloseRef = (0, import_react2.useRef)(false);
  const open = itemContext.value === context.value;
  return /* @__PURE__ */ (0, import_react2.createElement)(import_react2.Fragment, null, /* @__PURE__ */ (0, import_react2.createElement)($322c88a641701f3b$var$Collection.ItemSlot, {
    scope: __scopeNavigationMenu,
    value: itemContext.value
  }, /* @__PURE__ */ (0, import_react2.createElement)($322c88a641701f3b$var$FocusGroupItem, {
    asChild: true
  }, /* @__PURE__ */ (0, import_react2.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    id: triggerId,
    disabled,
    "data-disabled": disabled ? "" : void 0,
    "data-state": $322c88a641701f3b$var$getOpenState(open),
    "aria-expanded": open,
    "aria-controls": contentId
  }, triggerProps, {
    ref: composedRefs,
    onPointerEnter: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerEnter, () => {
      wasClickCloseRef.current = false;
      itemContext.wasEscapeCloseRef.current = false;
    }),
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, $322c88a641701f3b$var$whenMouse(() => {
      if (disabled || wasClickCloseRef.current || itemContext.wasEscapeCloseRef.current || hasPointerMoveOpenedRef.current)
        return;
      context.onTriggerEnter(itemContext.value);
      hasPointerMoveOpenedRef.current = true;
    })),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, $322c88a641701f3b$var$whenMouse(() => {
      if (disabled)
        return;
      context.onTriggerLeave();
      hasPointerMoveOpenedRef.current = false;
    })),
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, () => {
      context.onItemSelect(itemContext.value);
      wasClickCloseRef.current = open;
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const verticalEntryKey = context.dir === "rtl" ? "ArrowLeft" : "ArrowRight";
      const entryKey = {
        horizontal: "ArrowDown",
        vertical: verticalEntryKey
      }[context.orientation];
      if (open && event.key === entryKey) {
        itemContext.onEntryKeyDown();
        event.preventDefault();
      }
    })
  })))), open && /* @__PURE__ */ (0, import_react2.createElement)(import_react2.Fragment, null, /* @__PURE__ */ (0, import_react2.createElement)($ea1ef594cf570d83$export$be92b6f5f03c0fe9, {
    "aria-hidden": true,
    tabIndex: 0,
    ref: itemContext.focusProxyRef,
    onFocus: (event) => {
      const content = itemContext.contentRef.current;
      const prevFocusedElement = event.relatedTarget;
      const wasTriggerFocused = prevFocusedElement === ref.current;
      const wasFocusFromContent = content === null || content === void 0 ? void 0 : content.contains(prevFocusedElement);
      if (wasTriggerFocused || !wasFocusFromContent)
        itemContext.onFocusProxyEnter(wasTriggerFocused ? "start" : "end");
    }
  }), context.viewport && /* @__PURE__ */ (0, import_react2.createElement)("span", {
    "aria-owns": contentId
  })));
});
var $322c88a641701f3b$var$LINK_SELECT = "navigationMenu.linkSelect";
var $322c88a641701f3b$export$6893bf21536567da = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, active, onSelect, ...linkProps } = props;
  return /* @__PURE__ */ (0, import_react2.createElement)($322c88a641701f3b$var$FocusGroupItem, {
    asChild: true
  }, /* @__PURE__ */ (0, import_react2.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.a, _extends({
    "data-active": active ? "" : void 0,
    "aria-current": active ? "page" : void 0
  }, linkProps, {
    ref: forwardedRef,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, (event1) => {
      const target = event1.target;
      const linkSelectEvent = new CustomEvent($322c88a641701f3b$var$LINK_SELECT, {
        bubbles: true,
        cancelable: true
      });
      target.addEventListener(
        $322c88a641701f3b$var$LINK_SELECT,
        (event) => onSelect === null || onSelect === void 0 ? void 0 : onSelect(event),
        {
          once: true
        }
      );
      $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, linkSelectEvent);
      if (!linkSelectEvent.defaultPrevented && !event1.metaKey) {
        const rootContentDismissEvent = new CustomEvent($322c88a641701f3b$var$ROOT_CONTENT_DISMISS, {
          bubbles: true,
          cancelable: true
        });
        $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, rootContentDismissEvent);
      }
    }, {
      checkForDefaultPrevented: false
    })
  })));
});
var $322c88a641701f3b$var$INDICATOR_NAME = "NavigationMenuIndicator";
var $322c88a641701f3b$export$8ddb526647c0d8fb = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { forceMount, ...indicatorProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$INDICATOR_NAME, props.__scopeNavigationMenu);
  const isVisible = Boolean(context.value);
  return context.indicatorTrack ? /* @__PURE__ */ import_react_dom.default.createPortal(/* @__PURE__ */ (0, import_react2.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || isVisible
  }, /* @__PURE__ */ (0, import_react2.createElement)($322c88a641701f3b$var$NavigationMenuIndicatorImpl, _extends({}, indicatorProps, {
    ref: forwardedRef
  }))), context.indicatorTrack) : null;
});
var $322c88a641701f3b$var$NavigationMenuIndicatorImpl = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, ...indicatorProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$INDICATOR_NAME, __scopeNavigationMenu);
  const getItems = $322c88a641701f3b$var$useCollection(__scopeNavigationMenu);
  const [activeTrigger, setActiveTrigger] = (0, import_react2.useState)(null);
  const [position, setPosition] = (0, import_react2.useState)(null);
  const isHorizontal = context.orientation === "horizontal";
  const isVisible = Boolean(context.value);
  (0, import_react2.useEffect)(() => {
    var _items$find;
    const items = getItems();
    const triggerNode = (_items$find = items.find(
      (item) => item.value === context.value
    )) === null || _items$find === void 0 ? void 0 : _items$find.ref.current;
    if (triggerNode)
      setActiveTrigger(triggerNode);
  }, [
    getItems,
    context.value
  ]);
  const handlePositionChange = () => {
    if (activeTrigger)
      setPosition({
        size: isHorizontal ? activeTrigger.offsetWidth : activeTrigger.offsetHeight,
        offset: isHorizontal ? activeTrigger.offsetLeft : activeTrigger.offsetTop
      });
  };
  $322c88a641701f3b$var$useResizeObserver(activeTrigger, handlePositionChange);
  $322c88a641701f3b$var$useResizeObserver(context.indicatorTrack, handlePositionChange);
  return position ? /* @__PURE__ */ (0, import_react2.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "aria-hidden": true,
    "data-state": isVisible ? "visible" : "hidden",
    "data-orientation": context.orientation
  }, indicatorProps, {
    ref: forwardedRef,
    style: {
      position: "absolute",
      ...isHorizontal ? {
        left: 0,
        width: position.size + "px",
        transform: `translateX(${position.offset}px)`
      } : {
        top: 0,
        height: position.size + "px",
        transform: `translateY(${position.offset}px)`
      },
      ...indicatorProps.style
    }
  })) : null;
});
var $322c88a641701f3b$var$CONTENT_NAME = "NavigationMenuContent";
var $322c88a641701f3b$export$38e00e996c2f93f7 = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { forceMount, ...contentProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$CONTENT_NAME, props.__scopeNavigationMenu);
  const itemContext = $322c88a641701f3b$var$useNavigationMenuItemContext($322c88a641701f3b$var$CONTENT_NAME, props.__scopeNavigationMenu);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(itemContext.contentRef, forwardedRef);
  const open = itemContext.value === context.value;
  const commonProps = {
    value: itemContext.value,
    triggerRef: itemContext.triggerRef,
    focusProxyRef: itemContext.focusProxyRef,
    wasEscapeCloseRef: itemContext.wasEscapeCloseRef,
    onContentFocusOutside: itemContext.onContentFocusOutside,
    onRootContentClose: itemContext.onRootContentClose,
    ...contentProps
  };
  return !context.viewport ? /* @__PURE__ */ (0, import_react2.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || open
  }, /* @__PURE__ */ (0, import_react2.createElement)($322c88a641701f3b$var$NavigationMenuContentImpl, _extends({
    "data-state": $322c88a641701f3b$var$getOpenState(open)
  }, commonProps, {
    ref: composedRefs,
    onPointerEnter: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerEnter, context.onContentEnter),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, $322c88a641701f3b$var$whenMouse(context.onContentLeave)),
    style: {
      // Prevent interaction when animating out
      pointerEvents: !open && context.isRootMenu ? "none" : void 0,
      ...commonProps.style
    }
  }))) : /* @__PURE__ */ (0, import_react2.createElement)($322c88a641701f3b$var$ViewportContentMounter, _extends({
    forceMount
  }, commonProps, {
    ref: composedRefs
  }));
});
var $322c88a641701f3b$var$ViewportContentMounter = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$CONTENT_NAME, props.__scopeNavigationMenu);
  const { onViewportContentChange, onViewportContentRemove } = context;
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    onViewportContentChange(props.value, {
      ref: forwardedRef,
      ...props
    });
  }, [
    props,
    forwardedRef,
    onViewportContentChange
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    return () => onViewportContentRemove(props.value);
  }, [
    props.value,
    onViewportContentRemove
  ]);
  return null;
});
var $322c88a641701f3b$var$ROOT_CONTENT_DISMISS = "navigationMenu.rootContentDismiss";
var $322c88a641701f3b$var$NavigationMenuContentImpl = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, value, triggerRef, focusProxyRef, wasEscapeCloseRef, onRootContentClose, onContentFocusOutside, ...contentProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$CONTENT_NAME, __scopeNavigationMenu);
  const ref = (0, import_react2.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(ref, forwardedRef);
  const triggerId = $322c88a641701f3b$var$makeTriggerId(context.baseId, value);
  const contentId = $322c88a641701f3b$var$makeContentId(context.baseId, value);
  const getItems = $322c88a641701f3b$var$useCollection(__scopeNavigationMenu);
  const prevMotionAttributeRef = (0, import_react2.useRef)(null);
  const { onItemDismiss } = context;
  (0, import_react2.useEffect)(() => {
    const content = ref.current;
    if (context.isRootMenu && content) {
      const handleClose = () => {
        var _triggerRef$current;
        onItemDismiss();
        onRootContentClose();
        if (content.contains(document.activeElement))
          (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 || _triggerRef$current.focus();
      };
      content.addEventListener($322c88a641701f3b$var$ROOT_CONTENT_DISMISS, handleClose);
      return () => content.removeEventListener($322c88a641701f3b$var$ROOT_CONTENT_DISMISS, handleClose);
    }
  }, [
    context.isRootMenu,
    props.value,
    triggerRef,
    onItemDismiss,
    onRootContentClose
  ]);
  const motionAttribute = (0, import_react2.useMemo)(() => {
    const items = getItems();
    const values = items.map(
      (item) => item.value
    );
    if (context.dir === "rtl")
      values.reverse();
    const index = values.indexOf(context.value);
    const prevIndex = values.indexOf(context.previousValue);
    const isSelected = value === context.value;
    const wasSelected = prevIndex === values.indexOf(value);
    if (!isSelected && !wasSelected)
      return prevMotionAttributeRef.current;
    const attribute = (() => {
      if (index !== prevIndex) {
        if (isSelected && prevIndex !== -1)
          return index > prevIndex ? "from-end" : "from-start";
        if (wasSelected && index !== -1)
          return index > prevIndex ? "to-start" : "to-end";
      }
      return null;
    })();
    prevMotionAttributeRef.current = attribute;
    return attribute;
  }, [
    context.previousValue,
    context.value,
    context.dir,
    getItems,
    value
  ]);
  return /* @__PURE__ */ (0, import_react2.createElement)($322c88a641701f3b$var$FocusGroup, {
    asChild: true
  }, /* @__PURE__ */ (0, import_react2.createElement)($5cb92bef7577960e$export$177fb62ff3ec1f22, _extends({
    id: contentId,
    "aria-labelledby": triggerId,
    "data-motion": motionAttribute,
    "data-orientation": context.orientation
  }, contentProps, {
    ref: composedRefs,
    onDismiss: () => {
      var _ref$current;
      const rootContentDismissEvent = new Event($322c88a641701f3b$var$ROOT_CONTENT_DISMISS, {
        bubbles: true,
        cancelable: true
      });
      (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.dispatchEvent(rootContentDismissEvent);
    },
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocusOutside, (event) => {
      var _context$rootNavigati;
      onContentFocusOutside();
      const target = event.target;
      if ((_context$rootNavigati = context.rootNavigationMenu) !== null && _context$rootNavigati !== void 0 && _context$rootNavigati.contains(target))
        event.preventDefault();
    }),
    onPointerDownOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownOutside, (event) => {
      var _context$viewport;
      const target = event.target;
      const isTrigger = getItems().some((item) => {
        var _item$ref$current;
        return (_item$ref$current = item.ref.current) === null || _item$ref$current === void 0 ? void 0 : _item$ref$current.contains(target);
      });
      const isRootViewport = context.isRootMenu && ((_context$viewport = context.viewport) === null || _context$viewport === void 0 ? void 0 : _context$viewport.contains(target));
      if (isTrigger || isRootViewport || !context.isRootMenu)
        event.preventDefault();
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
      const isTabKey = event.key === "Tab" && !isMetaKey;
      if (isTabKey) {
        const candidates = $322c88a641701f3b$var$getTabbableCandidates(event.currentTarget);
        const focusedElement = document.activeElement;
        const index = candidates.findIndex(
          (candidate) => candidate === focusedElement
        );
        const isMovingBackwards = event.shiftKey;
        const nextCandidates = isMovingBackwards ? candidates.slice(0, index).reverse() : candidates.slice(index + 1, candidates.length);
        if ($322c88a641701f3b$var$focusFirst(nextCandidates))
          event.preventDefault();
        else {
          var _focusProxyRef$curren;
          (_focusProxyRef$curren = focusProxyRef.current) === null || _focusProxyRef$curren === void 0 || _focusProxyRef$curren.focus();
        }
      }
    }),
    onEscapeKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onEscapeKeyDown, (event) => {
      wasEscapeCloseRef.current = true;
    })
  })));
});
var $322c88a641701f3b$var$VIEWPORT_NAME = "NavigationMenuViewport";
var $322c88a641701f3b$export$ee880b97cc6d44a5 = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { forceMount, ...viewportProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$VIEWPORT_NAME, props.__scopeNavigationMenu);
  const open = Boolean(context.value);
  return /* @__PURE__ */ (0, import_react2.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || open
  }, /* @__PURE__ */ (0, import_react2.createElement)($322c88a641701f3b$var$NavigationMenuViewportImpl, _extends({}, viewportProps, {
    ref: forwardedRef
  })));
});
var $322c88a641701f3b$var$NavigationMenuViewportImpl = /* @__PURE__ */ (0, import_react2.forwardRef)((props1, forwardedRef) => {
  const { __scopeNavigationMenu, children, ...viewportImplProps } = props1;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$VIEWPORT_NAME, __scopeNavigationMenu);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.onViewportChange);
  const viewportContentContext = $322c88a641701f3b$var$useViewportContentContext($322c88a641701f3b$var$CONTENT_NAME, props1.__scopeNavigationMenu);
  const [size, setSize] = (0, import_react2.useState)(null);
  const [content, setContent] = (0, import_react2.useState)(null);
  const viewportWidth = size ? (size === null || size === void 0 ? void 0 : size.width) + "px" : void 0;
  const viewportHeight = size ? (size === null || size === void 0 ? void 0 : size.height) + "px" : void 0;
  const open = Boolean(context.value);
  const activeContentValue = open ? context.value : context.previousValue;
  const handleSizeChange = () => {
    if (content)
      setSize({
        width: content.offsetWidth,
        height: content.offsetHeight
      });
  };
  $322c88a641701f3b$var$useResizeObserver(content, handleSizeChange);
  return /* @__PURE__ */ (0, import_react2.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-state": $322c88a641701f3b$var$getOpenState(open),
    "data-orientation": context.orientation
  }, viewportImplProps, {
    ref: composedRefs,
    style: {
      // Prevent interaction when animating out
      pointerEvents: !open && context.isRootMenu ? "none" : void 0,
      ["--radix-navigation-menu-viewport-width"]: viewportWidth,
      ["--radix-navigation-menu-viewport-height"]: viewportHeight,
      ...viewportImplProps.style
    },
    onPointerEnter: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props1.onPointerEnter, context.onContentEnter),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props1.onPointerLeave, $322c88a641701f3b$var$whenMouse(context.onContentLeave))
  }), Array.from(viewportContentContext.items).map(([value, { ref, forceMount, ...props }]) => {
    const isActive = activeContentValue === value;
    return /* @__PURE__ */ (0, import_react2.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
      key: value,
      present: forceMount || isActive
    }, /* @__PURE__ */ (0, import_react2.createElement)($322c88a641701f3b$var$NavigationMenuContentImpl, _extends({}, props, {
      ref: $6ed0406888f73fc4$export$43e446d32b3d21af(ref, (node) => {
        if (isActive && node)
          setContent(node);
      })
    })));
  }));
});
var $322c88a641701f3b$var$FOCUS_GROUP_NAME = "FocusGroup";
var $322c88a641701f3b$var$FocusGroup = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, ...groupProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$FOCUS_GROUP_NAME, __scopeNavigationMenu);
  return /* @__PURE__ */ (0, import_react2.createElement)($322c88a641701f3b$var$FocusGroupCollection.Provider, {
    scope: __scopeNavigationMenu
  }, /* @__PURE__ */ (0, import_react2.createElement)($322c88a641701f3b$var$FocusGroupCollection.Slot, {
    scope: __scopeNavigationMenu
  }, /* @__PURE__ */ (0, import_react2.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    dir: context.dir
  }, groupProps, {
    ref: forwardedRef
  }))));
});
var $322c88a641701f3b$var$ARROW_KEYS = [
  "ArrowRight",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown"
];
var $322c88a641701f3b$var$FOCUS_GROUP_ITEM_NAME = "FocusGroupItem";
var $322c88a641701f3b$var$FocusGroupItem = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, ...groupProps } = props;
  const getItems = $322c88a641701f3b$var$useFocusGroupCollection(__scopeNavigationMenu);
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$FOCUS_GROUP_ITEM_NAME, __scopeNavigationMenu);
  return /* @__PURE__ */ (0, import_react2.createElement)($322c88a641701f3b$var$FocusGroupCollection.ItemSlot, {
    scope: __scopeNavigationMenu
  }, /* @__PURE__ */ (0, import_react2.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({}, groupProps, {
    ref: forwardedRef,
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const isFocusNavigationKey = [
        "Home",
        "End",
        ...$322c88a641701f3b$var$ARROW_KEYS
      ].includes(event.key);
      if (isFocusNavigationKey) {
        let candidateNodes = getItems().map(
          (item) => item.ref.current
        );
        const prevItemKey = context.dir === "rtl" ? "ArrowRight" : "ArrowLeft";
        const prevKeys = [
          prevItemKey,
          "ArrowUp",
          "End"
        ];
        if (prevKeys.includes(event.key))
          candidateNodes.reverse();
        if ($322c88a641701f3b$var$ARROW_KEYS.includes(event.key)) {
          const currentIndex = candidateNodes.indexOf(event.currentTarget);
          candidateNodes = candidateNodes.slice(currentIndex + 1);
        }
        setTimeout(
          () => $322c88a641701f3b$var$focusFirst(candidateNodes)
        );
        event.preventDefault();
      }
    })
  })));
});
function $322c88a641701f3b$var$getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
}
function $322c88a641701f3b$var$focusFirst(candidates) {
  const previouslyFocusedElement = document.activeElement;
  return candidates.some((candidate) => {
    if (candidate === previouslyFocusedElement)
      return true;
    candidate.focus();
    return document.activeElement !== previouslyFocusedElement;
  });
}
function $322c88a641701f3b$var$removeFromTabOrder(candidates) {
  candidates.forEach((candidate) => {
    candidate.dataset.tabindex = candidate.getAttribute("tabindex") || "";
    candidate.setAttribute("tabindex", "-1");
  });
  return () => {
    candidates.forEach((candidate) => {
      const prevTabIndex = candidate.dataset.tabindex;
      candidate.setAttribute("tabindex", prevTabIndex);
    });
  };
}
function $322c88a641701f3b$var$useResizeObserver(element, onResize) {
  const handleResize = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onResize);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    let rAF = 0;
    if (element) {
      const resizeObserver = new ResizeObserver(() => {
        cancelAnimationFrame(rAF);
        rAF = window.requestAnimationFrame(handleResize);
      });
      resizeObserver.observe(element);
      return () => {
        window.cancelAnimationFrame(rAF);
        resizeObserver.unobserve(element);
      };
    }
  }, [
    element,
    handleResize
  ]);
}
function $322c88a641701f3b$var$getOpenState(open) {
  return open ? "open" : "closed";
}
function $322c88a641701f3b$var$makeTriggerId(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
function $322c88a641701f3b$var$makeContentId(baseId, value) {
  return `${baseId}-content-${value}`;
}
function $322c88a641701f3b$var$whenMouse(handler) {
  return (event) => event.pointerType === "mouse" ? handler(event) : void 0;
}
var $322c88a641701f3b$export$be92b6f5f03c0fe9 = $322c88a641701f3b$export$5b2278cf1e8bcae2;
var $322c88a641701f3b$export$54c2e3dc7acea9f5 = $322c88a641701f3b$export$c361068a95fd2286;
var $322c88a641701f3b$export$6d08773d2e66f8f2 = $322c88a641701f3b$export$ffdbb83a2de845c2;
var $322c88a641701f3b$export$41fb9f06171c75f4 = $322c88a641701f3b$export$37fe8002734d8f2;
var $322c88a641701f3b$export$a6c7ac8248d6e38a = $322c88a641701f3b$export$6893bf21536567da;
var $322c88a641701f3b$export$adb584737d712b70 = $322c88a641701f3b$export$8ddb526647c0d8fb;
var $322c88a641701f3b$export$7c6e2c02157bb7d2 = $322c88a641701f3b$export$38e00e996c2f93f7;
var $322c88a641701f3b$export$d5c6c08dc2d3ca7 = $322c88a641701f3b$export$ee880b97cc6d44a5;

// app/components/ui/navigation-menu.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/navigation-menu.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/navigation-menu.tsx"
  );
  import.meta.hot.lastModified = "1728767387048.1558";
}
var NavigationMenu = React.forwardRef(_c = ({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($322c88a641701f3b$export$be92b6f5f03c0fe9, { ref, className: cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className), ...props, children: [
  children,
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigationMenuViewport, {}, void 0, false, {
    fileName: "app/components/ui/navigation-menu.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/ui/navigation-menu.tsx",
  lineNumber: 30,
  columnNumber: 12
}, this));
_c2 = NavigationMenu;
NavigationMenu.displayName = $322c88a641701f3b$export$be92b6f5f03c0fe9.displayName;
var NavigationMenuList = React.forwardRef(_c3 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($322c88a641701f3b$export$54c2e3dc7acea9f5, { ref, className: cn("group flex flex-1 list-none items-center justify-center space-x-1", className), ...props }, void 0, false, {
  fileName: "app/components/ui/navigation-menu.tsx",
  lineNumber: 39,
  columnNumber: 12
}, this));
_c4 = NavigationMenuList;
NavigationMenuList.displayName = $322c88a641701f3b$export$54c2e3dc7acea9f5.displayName;
var NavigationMenuItem = $322c88a641701f3b$export$6d08773d2e66f8f2;
var navigationMenuTriggerStyle = cva("group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50");
var NavigationMenuTrigger = React.forwardRef(_c5 = ({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($322c88a641701f3b$export$41fb9f06171c75f4, { ref, className: cn(navigationMenuTriggerStyle(), "group", className), ...props, children: [
  children,
  " ",
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180", "aria-hidden": "true" }, void 0, false, {
    fileName: "app/components/ui/navigation-menu.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/ui/navigation-menu.tsx",
  lineNumber: 48,
  columnNumber: 12
}, this));
_c6 = NavigationMenuTrigger;
NavigationMenuTrigger.displayName = $322c88a641701f3b$export$41fb9f06171c75f4.displayName;
var NavigationMenuContent = React.forwardRef(_c7 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($322c88a641701f3b$export$7c6e2c02157bb7d2, { ref, className: cn("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ", className), ...props }, void 0, false, {
  fileName: "app/components/ui/navigation-menu.tsx",
  lineNumber: 57,
  columnNumber: 12
}, this));
_c8 = NavigationMenuContent;
NavigationMenuContent.displayName = $322c88a641701f3b$export$7c6e2c02157bb7d2.displayName;
var NavigationMenuLink = $322c88a641701f3b$export$a6c7ac8248d6e38a;
var NavigationMenuViewport = React.forwardRef(_c9 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: cn("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($322c88a641701f3b$export$d5c6c08dc2d3ca7, { className: cn("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]", className), ref, ...props }, void 0, false, {
  fileName: "app/components/ui/navigation-menu.tsx",
  lineNumber: 65,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/components/ui/navigation-menu.tsx",
  lineNumber: 64,
  columnNumber: 12
}, this));
_c10 = NavigationMenuViewport;
NavigationMenuViewport.displayName = $322c88a641701f3b$export$d5c6c08dc2d3ca7.displayName;
var NavigationMenuIndicator = React.forwardRef(_c11 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($322c88a641701f3b$export$adb584737d712b70, { ref, className: cn("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in", className), ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" }, void 0, false, {
  fileName: "app/components/ui/navigation-menu.tsx",
  lineNumber: 73,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/components/ui/navigation-menu.tsx",
  lineNumber: 72,
  columnNumber: 12
}, this));
_c12 = NavigationMenuIndicator;
NavigationMenuIndicator.displayName = $322c88a641701f3b$export$adb584737d712b70.displayName;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
var _c7;
var _c8;
var _c9;
var _c10;
var _c11;
var _c12;
$RefreshReg$(_c, "NavigationMenu$React.forwardRef");
$RefreshReg$(_c2, "NavigationMenu");
$RefreshReg$(_c3, "NavigationMenuList$React.forwardRef");
$RefreshReg$(_c4, "NavigationMenuList");
$RefreshReg$(_c5, "NavigationMenuTrigger$React.forwardRef");
$RefreshReg$(_c6, "NavigationMenuTrigger");
$RefreshReg$(_c7, "NavigationMenuContent$React.forwardRef");
$RefreshReg$(_c8, "NavigationMenuContent");
$RefreshReg$(_c9, "NavigationMenuViewport$React.forwardRef");
$RefreshReg$(_c10, "NavigationMenuViewport");
$RefreshReg$(_c11, "NavigationMenuIndicator$React.forwardRef");
$RefreshReg$(_c12, "NavigationMenuIndicator");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/scroll-area.tsx
var React2 = __toESM(require_react());

// node_modules/@radix-ui/react-scroll-area/dist/index.mjs
var import_react3 = __toESM(require_react(), 1);

// node_modules/@radix-ui/number/dist/index.mjs
function $ae6933e535247d3d$export$7d15b64cf5a3a4c4(value, [min, max]) {
  return Math.min(max, Math.max(min, value));
}

// node_modules/@radix-ui/react-scroll-area/dist/index.mjs
function $6c2e24571c90391f$export$3e6543de14f8614f(initialState, machine) {
  return (0, import_react3.useReducer)((state, event) => {
    const nextState = machine[state][event];
    return nextState !== null && nextState !== void 0 ? nextState : state;
  }, initialState);
}
var $57acba87d6e25586$var$SCROLL_AREA_NAME = "ScrollArea";
var [$57acba87d6e25586$var$createScrollAreaContext, $57acba87d6e25586$export$488468afe3a6f2b1] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($57acba87d6e25586$var$SCROLL_AREA_NAME);
var [$57acba87d6e25586$var$ScrollAreaProvider, $57acba87d6e25586$var$useScrollAreaContext] = $57acba87d6e25586$var$createScrollAreaContext($57acba87d6e25586$var$SCROLL_AREA_NAME);
var $57acba87d6e25586$export$ccf8d8d7bbf3c2cc = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeScrollArea, type = "hover", dir, scrollHideDelay = 600, ...scrollAreaProps } = props;
  const [scrollArea, setScrollArea] = (0, import_react3.useState)(null);
  const [viewport, setViewport] = (0, import_react3.useState)(null);
  const [content, setContent] = (0, import_react3.useState)(null);
  const [scrollbarX, setScrollbarX] = (0, import_react3.useState)(null);
  const [scrollbarY, setScrollbarY] = (0, import_react3.useState)(null);
  const [cornerWidth, setCornerWidth] = (0, import_react3.useState)(0);
  const [cornerHeight, setCornerHeight] = (0, import_react3.useState)(0);
  const [scrollbarXEnabled, setScrollbarXEnabled] = (0, import_react3.useState)(false);
  const [scrollbarYEnabled, setScrollbarYEnabled] = (0, import_react3.useState)(false);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setScrollArea(node)
  );
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  return /* @__PURE__ */ (0, import_react3.createElement)($57acba87d6e25586$var$ScrollAreaProvider, {
    scope: __scopeScrollArea,
    type,
    dir: direction,
    scrollHideDelay,
    scrollArea,
    viewport,
    onViewportChange: setViewport,
    content,
    onContentChange: setContent,
    scrollbarX,
    onScrollbarXChange: setScrollbarX,
    scrollbarXEnabled,
    onScrollbarXEnabledChange: setScrollbarXEnabled,
    scrollbarY,
    onScrollbarYChange: setScrollbarY,
    scrollbarYEnabled,
    onScrollbarYEnabledChange: setScrollbarYEnabled,
    onCornerWidthChange: setCornerWidth,
    onCornerHeightChange: setCornerHeight
  }, /* @__PURE__ */ (0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    dir: direction
  }, scrollAreaProps, {
    ref: composedRefs,
    style: {
      position: "relative",
      // Pass corner sizes as CSS vars to reduce re-renders of context consumers
      ["--radix-scroll-area-corner-width"]: cornerWidth + "px",
      ["--radix-scroll-area-corner-height"]: cornerHeight + "px",
      ...props.style
    }
  })));
});
var $57acba87d6e25586$var$VIEWPORT_NAME = "ScrollAreaViewport";
var $57acba87d6e25586$export$a21cbf9f11fca853 = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeScrollArea, children, ...viewportProps } = props;
  const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$VIEWPORT_NAME, __scopeScrollArea);
  const ref = (0, import_react3.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref, context.onViewportChange);
  return /* @__PURE__ */ (0, import_react3.createElement)(import_react3.Fragment, null, /* @__PURE__ */ (0, import_react3.createElement)("style", {
    dangerouslySetInnerHTML: {
      __html: `[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}`
    }
  }), /* @__PURE__ */ (0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-radix-scroll-area-viewport": ""
  }, viewportProps, {
    ref: composedRefs,
    style: {
      /**
      * We don't support `visible` because the intention is to have at least one scrollbar
      * if this component is used and `visible` will behave like `auto` in that case
      * https://developer.mozilla.org/en-US/docs/Web/CSS/overflowed#description
      *
      * We don't handle `auto` because the intention is for the native implementation
      * to be hidden if using this component. We just want to ensure the node is scrollable
      * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
      * the browser from having to work out whether to render native scrollbars or not,
      * we tell it to with the intention of hiding them in CSS.
      */
      overflowX: context.scrollbarXEnabled ? "scroll" : "hidden",
      overflowY: context.scrollbarYEnabled ? "scroll" : "hidden",
      ...props.style
    }
  }), /* @__PURE__ */ (0, import_react3.createElement)("div", {
    ref: context.onContentChange,
    style: {
      minWidth: "100%",
      display: "table"
    }
  }, children)));
});
var $57acba87d6e25586$var$SCROLLBAR_NAME = "ScrollAreaScrollbar";
var $57acba87d6e25586$export$2fabd85d0eba3c57 = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { forceMount, ...scrollbarProps } = props;
  const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea);
  const { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context;
  const isHorizontal = props.orientation === "horizontal";
  (0, import_react3.useEffect)(() => {
    isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true);
    return () => {
      isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
    };
  }, [
    isHorizontal,
    onScrollbarXEnabledChange,
    onScrollbarYEnabledChange
  ]);
  return context.type === "hover" ? /* @__PURE__ */ (0, import_react3.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarHover, _extends({}, scrollbarProps, {
    ref: forwardedRef,
    forceMount
  })) : context.type === "scroll" ? /* @__PURE__ */ (0, import_react3.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarScroll, _extends({}, scrollbarProps, {
    ref: forwardedRef,
    forceMount
  })) : context.type === "auto" ? /* @__PURE__ */ (0, import_react3.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarAuto, _extends({}, scrollbarProps, {
    ref: forwardedRef,
    forceMount
  })) : context.type === "always" ? /* @__PURE__ */ (0, import_react3.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarVisible, _extends({}, scrollbarProps, {
    ref: forwardedRef
  })) : null;
});
var $57acba87d6e25586$var$ScrollAreaScrollbarHover = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { forceMount, ...scrollbarProps } = props;
  const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea);
  const [visible, setVisible] = (0, import_react3.useState)(false);
  (0, import_react3.useEffect)(() => {
    const scrollArea = context.scrollArea;
    let hideTimer = 0;
    if (scrollArea) {
      const handlePointerEnter = () => {
        window.clearTimeout(hideTimer);
        setVisible(true);
      };
      const handlePointerLeave = () => {
        hideTimer = window.setTimeout(
          () => setVisible(false),
          context.scrollHideDelay
        );
      };
      scrollArea.addEventListener("pointerenter", handlePointerEnter);
      scrollArea.addEventListener("pointerleave", handlePointerLeave);
      return () => {
        window.clearTimeout(hideTimer);
        scrollArea.removeEventListener("pointerenter", handlePointerEnter);
        scrollArea.removeEventListener("pointerleave", handlePointerLeave);
      };
    }
  }, [
    context.scrollArea,
    context.scrollHideDelay
  ]);
  return /* @__PURE__ */ (0, import_react3.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || visible
  }, /* @__PURE__ */ (0, import_react3.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarAuto, _extends({
    "data-state": visible ? "visible" : "hidden"
  }, scrollbarProps, {
    ref: forwardedRef
  })));
});
var $57acba87d6e25586$var$ScrollAreaScrollbarScroll = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { forceMount, ...scrollbarProps } = props;
  const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea);
  const isHorizontal = props.orientation === "horizontal";
  const debounceScrollEnd = $57acba87d6e25586$var$useDebounceCallback(
    () => send("SCROLL_END"),
    100
  );
  const [state, send] = $6c2e24571c90391f$export$3e6543de14f8614f("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  (0, import_react3.useEffect)(() => {
    if (state === "idle") {
      const hideTimer = window.setTimeout(
        () => send("HIDE"),
        context.scrollHideDelay
      );
      return () => window.clearTimeout(hideTimer);
    }
  }, [
    state,
    context.scrollHideDelay,
    send
  ]);
  (0, import_react3.useEffect)(() => {
    const viewport = context.viewport;
    const scrollDirection = isHorizontal ? "scrollLeft" : "scrollTop";
    if (viewport) {
      let prevScrollPos = viewport[scrollDirection];
      const handleScroll = () => {
        const scrollPos = viewport[scrollDirection];
        const hasScrollInDirectionChanged = prevScrollPos !== scrollPos;
        if (hasScrollInDirectionChanged) {
          send("SCROLL");
          debounceScrollEnd();
        }
        prevScrollPos = scrollPos;
      };
      viewport.addEventListener("scroll", handleScroll);
      return () => viewport.removeEventListener("scroll", handleScroll);
    }
  }, [
    context.viewport,
    isHorizontal,
    send,
    debounceScrollEnd
  ]);
  return /* @__PURE__ */ (0, import_react3.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || state !== "hidden"
  }, /* @__PURE__ */ (0, import_react3.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarVisible, _extends({
    "data-state": state === "hidden" ? "hidden" : "visible"
  }, scrollbarProps, {
    ref: forwardedRef,
    onPointerEnter: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onPointerEnter,
      () => send("POINTER_ENTER")
    ),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onPointerLeave,
      () => send("POINTER_LEAVE")
    )
  })));
});
var $57acba87d6e25586$var$ScrollAreaScrollbarAuto = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea);
  const { forceMount, ...scrollbarProps } = props;
  const [visible, setVisible] = (0, import_react3.useState)(false);
  const isHorizontal = props.orientation === "horizontal";
  const handleResize = $57acba87d6e25586$var$useDebounceCallback(() => {
    if (context.viewport) {
      const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
      const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
      setVisible(isHorizontal ? isOverflowX : isOverflowY);
    }
  }, 10);
  $57acba87d6e25586$var$useResizeObserver(context.viewport, handleResize);
  $57acba87d6e25586$var$useResizeObserver(context.content, handleResize);
  return /* @__PURE__ */ (0, import_react3.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || visible
  }, /* @__PURE__ */ (0, import_react3.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarVisible, _extends({
    "data-state": visible ? "visible" : "hidden"
  }, scrollbarProps, {
    ref: forwardedRef
  })));
});
var $57acba87d6e25586$var$ScrollAreaScrollbarVisible = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { orientation = "vertical", ...scrollbarProps } = props;
  const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea);
  const thumbRef = (0, import_react3.useRef)(null);
  const pointerOffsetRef = (0, import_react3.useRef)(0);
  const [sizes, setSizes] = (0, import_react3.useState)({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  });
  const thumbRatio = $57acba87d6e25586$var$getThumbRatio(sizes.viewport, sizes.content);
  const commonProps = {
    ...scrollbarProps,
    sizes,
    onSizesChange: setSizes,
    hasThumb: Boolean(thumbRatio > 0 && thumbRatio < 1),
    onThumbChange: (thumb) => thumbRef.current = thumb,
    onThumbPointerUp: () => pointerOffsetRef.current = 0,
    onThumbPointerDown: (pointerPos) => pointerOffsetRef.current = pointerPos
  };
  function getScrollPosition(pointerPos, dir) {
    return $57acba87d6e25586$var$getScrollPositionFromPointer(pointerPos, pointerOffsetRef.current, sizes, dir);
  }
  if (orientation === "horizontal")
    return /* @__PURE__ */ (0, import_react3.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarX, _extends({}, commonProps, {
      ref: forwardedRef,
      onThumbPositionChange: () => {
        if (context.viewport && thumbRef.current) {
          const scrollPos = context.viewport.scrollLeft;
          const offset = $57acba87d6e25586$var$getThumbOffsetFromScroll(scrollPos, sizes, context.dir);
          thumbRef.current.style.transform = `translate3d(${offset}px, 0, 0)`;
        }
      },
      onWheelScroll: (scrollPos) => {
        if (context.viewport)
          context.viewport.scrollLeft = scrollPos;
      },
      onDragScroll: (pointerPos) => {
        if (context.viewport)
          context.viewport.scrollLeft = getScrollPosition(pointerPos, context.dir);
      }
    }));
  if (orientation === "vertical")
    return /* @__PURE__ */ (0, import_react3.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarY, _extends({}, commonProps, {
      ref: forwardedRef,
      onThumbPositionChange: () => {
        if (context.viewport && thumbRef.current) {
          const scrollPos = context.viewport.scrollTop;
          const offset = $57acba87d6e25586$var$getThumbOffsetFromScroll(scrollPos, sizes);
          thumbRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
        }
      },
      onWheelScroll: (scrollPos) => {
        if (context.viewport)
          context.viewport.scrollTop = scrollPos;
      },
      onDragScroll: (pointerPos) => {
        if (context.viewport)
          context.viewport.scrollTop = getScrollPosition(pointerPos);
      }
    }));
  return null;
});
var $57acba87d6e25586$var$ScrollAreaScrollbarX = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { sizes, onSizesChange, ...scrollbarProps } = props;
  const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea);
  const [computedStyle, setComputedStyle] = (0, import_react3.useState)();
  const ref = (0, import_react3.useRef)(null);
  const composeRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref, context.onScrollbarXChange);
  (0, import_react3.useEffect)(() => {
    if (ref.current)
      setComputedStyle(getComputedStyle(ref.current));
  }, [
    ref
  ]);
  return /* @__PURE__ */ (0, import_react3.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarImpl, _extends({
    "data-orientation": "horizontal"
  }, scrollbarProps, {
    ref: composeRefs,
    sizes,
    style: {
      bottom: 0,
      left: context.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
      right: context.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
      ["--radix-scroll-area-thumb-width"]: $57acba87d6e25586$var$getThumbSize(sizes) + "px",
      ...props.style
    },
    onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.x),
    onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.x),
    onWheelScroll: (event, maxScrollPos) => {
      if (context.viewport) {
        const scrollPos = context.viewport.scrollLeft + event.deltaX;
        props.onWheelScroll(scrollPos);
        if ($57acba87d6e25586$var$isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos))
          event.preventDefault();
      }
    },
    onResize: () => {
      if (ref.current && context.viewport && computedStyle)
        onSizesChange({
          content: context.viewport.scrollWidth,
          viewport: context.viewport.offsetWidth,
          scrollbar: {
            size: ref.current.clientWidth,
            paddingStart: $57acba87d6e25586$var$toInt(computedStyle.paddingLeft),
            paddingEnd: $57acba87d6e25586$var$toInt(computedStyle.paddingRight)
          }
        });
    }
  }));
});
var $57acba87d6e25586$var$ScrollAreaScrollbarY = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { sizes, onSizesChange, ...scrollbarProps } = props;
  const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea);
  const [computedStyle, setComputedStyle] = (0, import_react3.useState)();
  const ref = (0, import_react3.useRef)(null);
  const composeRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref, context.onScrollbarYChange);
  (0, import_react3.useEffect)(() => {
    if (ref.current)
      setComputedStyle(getComputedStyle(ref.current));
  }, [
    ref
  ]);
  return /* @__PURE__ */ (0, import_react3.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarImpl, _extends({
    "data-orientation": "vertical"
  }, scrollbarProps, {
    ref: composeRefs,
    sizes,
    style: {
      top: 0,
      right: context.dir === "ltr" ? 0 : void 0,
      left: context.dir === "rtl" ? 0 : void 0,
      bottom: "var(--radix-scroll-area-corner-height)",
      ["--radix-scroll-area-thumb-height"]: $57acba87d6e25586$var$getThumbSize(sizes) + "px",
      ...props.style
    },
    onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.y),
    onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.y),
    onWheelScroll: (event, maxScrollPos) => {
      if (context.viewport) {
        const scrollPos = context.viewport.scrollTop + event.deltaY;
        props.onWheelScroll(scrollPos);
        if ($57acba87d6e25586$var$isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos))
          event.preventDefault();
      }
    },
    onResize: () => {
      if (ref.current && context.viewport && computedStyle)
        onSizesChange({
          content: context.viewport.scrollHeight,
          viewport: context.viewport.offsetHeight,
          scrollbar: {
            size: ref.current.clientHeight,
            paddingStart: $57acba87d6e25586$var$toInt(computedStyle.paddingTop),
            paddingEnd: $57acba87d6e25586$var$toInt(computedStyle.paddingBottom)
          }
        });
    }
  }));
});
var [$57acba87d6e25586$var$ScrollbarProvider, $57acba87d6e25586$var$useScrollbarContext] = $57acba87d6e25586$var$createScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME);
var $57acba87d6e25586$var$ScrollAreaScrollbarImpl = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeScrollArea, sizes, hasThumb, onThumbChange, onThumbPointerUp, onThumbPointerDown, onThumbPositionChange, onDragScroll, onWheelScroll, onResize, ...scrollbarProps } = props;
  const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, __scopeScrollArea);
  const [scrollbar, setScrollbar] = (0, import_react3.useState)(null);
  const composeRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setScrollbar(node)
  );
  const rectRef = (0, import_react3.useRef)(null);
  const prevWebkitUserSelectRef = (0, import_react3.useRef)("");
  const viewport = context.viewport;
  const maxScrollPos = sizes.content - sizes.viewport;
  const handleWheelScroll = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onWheelScroll);
  const handleThumbPositionChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onThumbPositionChange);
  const handleResize = $57acba87d6e25586$var$useDebounceCallback(onResize, 10);
  function handleDragScroll(event) {
    if (rectRef.current) {
      const x2 = event.clientX - rectRef.current.left;
      const y2 = event.clientY - rectRef.current.top;
      onDragScroll({
        x: x2,
        y: y2
      });
    }
  }
  (0, import_react3.useEffect)(() => {
    const handleWheel = (event) => {
      const element = event.target;
      const isScrollbarWheel = scrollbar === null || scrollbar === void 0 ? void 0 : scrollbar.contains(element);
      if (isScrollbarWheel)
        handleWheelScroll(event, maxScrollPos);
    };
    document.addEventListener("wheel", handleWheel, {
      passive: false
    });
    return () => document.removeEventListener("wheel", handleWheel, {
      passive: false
    });
  }, [
    viewport,
    scrollbar,
    maxScrollPos,
    handleWheelScroll
  ]);
  (0, import_react3.useEffect)(handleThumbPositionChange, [
    sizes,
    handleThumbPositionChange
  ]);
  $57acba87d6e25586$var$useResizeObserver(scrollbar, handleResize);
  $57acba87d6e25586$var$useResizeObserver(context.content, handleResize);
  return /* @__PURE__ */ (0, import_react3.createElement)($57acba87d6e25586$var$ScrollbarProvider, {
    scope: __scopeScrollArea,
    scrollbar,
    hasThumb,
    onThumbChange: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onThumbChange),
    onThumbPointerUp: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onThumbPointerUp),
    onThumbPositionChange: handleThumbPositionChange,
    onThumbPointerDown: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onThumbPointerDown)
  }, /* @__PURE__ */ (0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, scrollbarProps, {
    ref: composeRefs,
    style: {
      position: "absolute",
      ...scrollbarProps.style
    },
    onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDown, (event) => {
      const mainPointer = 0;
      if (event.button === mainPointer) {
        const element = event.target;
        element.setPointerCapture(event.pointerId);
        rectRef.current = scrollbar.getBoundingClientRect();
        prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect;
        document.body.style.webkitUserSelect = "none";
        if (context.viewport)
          context.viewport.style.scrollBehavior = "auto";
        handleDragScroll(event);
      }
    }),
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, handleDragScroll),
    onPointerUp: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerUp, (event) => {
      const element = event.target;
      if (element.hasPointerCapture(event.pointerId))
        element.releasePointerCapture(event.pointerId);
      document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current;
      if (context.viewport)
        context.viewport.style.scrollBehavior = "";
      rectRef.current = null;
    })
  })));
});
var $57acba87d6e25586$var$THUMB_NAME = "ScrollAreaThumb";
var $57acba87d6e25586$export$9fba1154677d7cd2 = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { forceMount, ...thumbProps } = props;
  const scrollbarContext = $57acba87d6e25586$var$useScrollbarContext($57acba87d6e25586$var$THUMB_NAME, props.__scopeScrollArea);
  return /* @__PURE__ */ (0, import_react3.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || scrollbarContext.hasThumb
  }, /* @__PURE__ */ (0, import_react3.createElement)($57acba87d6e25586$var$ScrollAreaThumbImpl, _extends({
    ref: forwardedRef
  }, thumbProps)));
});
var $57acba87d6e25586$var$ScrollAreaThumbImpl = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeScrollArea, style, ...thumbProps } = props;
  const scrollAreaContext = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$THUMB_NAME, __scopeScrollArea);
  const scrollbarContext = $57acba87d6e25586$var$useScrollbarContext($57acba87d6e25586$var$THUMB_NAME, __scopeScrollArea);
  const { onThumbPositionChange } = scrollbarContext;
  const composedRef = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => scrollbarContext.onThumbChange(node)
  );
  const removeUnlinkedScrollListenerRef = (0, import_react3.useRef)();
  const debounceScrollEnd = $57acba87d6e25586$var$useDebounceCallback(() => {
    if (removeUnlinkedScrollListenerRef.current) {
      removeUnlinkedScrollListenerRef.current();
      removeUnlinkedScrollListenerRef.current = void 0;
    }
  }, 100);
  (0, import_react3.useEffect)(() => {
    const viewport = scrollAreaContext.viewport;
    if (viewport) {
      const handleScroll = () => {
        debounceScrollEnd();
        if (!removeUnlinkedScrollListenerRef.current) {
          const listener = $57acba87d6e25586$var$addUnlinkedScrollListener(viewport, onThumbPositionChange);
          removeUnlinkedScrollListenerRef.current = listener;
          onThumbPositionChange();
        }
      };
      onThumbPositionChange();
      viewport.addEventListener("scroll", handleScroll);
      return () => viewport.removeEventListener("scroll", handleScroll);
    }
  }, [
    scrollAreaContext.viewport,
    debounceScrollEnd,
    onThumbPositionChange
  ]);
  return /* @__PURE__ */ (0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-state": scrollbarContext.hasThumb ? "visible" : "hidden"
  }, thumbProps, {
    ref: composedRef,
    style: {
      width: "var(--radix-scroll-area-thumb-width)",
      height: "var(--radix-scroll-area-thumb-height)",
      ...style
    },
    onPointerDownCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownCapture, (event) => {
      const thumb = event.target;
      const thumbRect = thumb.getBoundingClientRect();
      const x2 = event.clientX - thumbRect.left;
      const y2 = event.clientY - thumbRect.top;
      scrollbarContext.onThumbPointerDown({
        x: x2,
        y: y2
      });
    }),
    onPointerUp: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerUp, scrollbarContext.onThumbPointerUp)
  }));
});
var $57acba87d6e25586$var$CORNER_NAME = "ScrollAreaCorner";
var $57acba87d6e25586$export$56969d565df7cc4b = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$CORNER_NAME, props.__scopeScrollArea);
  const hasBothScrollbarsVisible = Boolean(context.scrollbarX && context.scrollbarY);
  const hasCorner = context.type !== "scroll" && hasBothScrollbarsVisible;
  return hasCorner ? /* @__PURE__ */ (0, import_react3.createElement)($57acba87d6e25586$var$ScrollAreaCornerImpl, _extends({}, props, {
    ref: forwardedRef
  })) : null;
});
var $57acba87d6e25586$var$ScrollAreaCornerImpl = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeScrollArea, ...cornerProps } = props;
  const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$CORNER_NAME, __scopeScrollArea);
  const [width1, setWidth] = (0, import_react3.useState)(0);
  const [height1, setHeight] = (0, import_react3.useState)(0);
  const hasSize = Boolean(width1 && height1);
  $57acba87d6e25586$var$useResizeObserver(context.scrollbarX, () => {
    var _context$scrollbarX;
    const height = ((_context$scrollbarX = context.scrollbarX) === null || _context$scrollbarX === void 0 ? void 0 : _context$scrollbarX.offsetHeight) || 0;
    context.onCornerHeightChange(height);
    setHeight(height);
  });
  $57acba87d6e25586$var$useResizeObserver(context.scrollbarY, () => {
    var _context$scrollbarY;
    const width = ((_context$scrollbarY = context.scrollbarY) === null || _context$scrollbarY === void 0 ? void 0 : _context$scrollbarY.offsetWidth) || 0;
    context.onCornerWidthChange(width);
    setWidth(width);
  });
  return hasSize ? /* @__PURE__ */ (0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, cornerProps, {
    ref: forwardedRef,
    style: {
      width: width1,
      height: height1,
      position: "absolute",
      right: context.dir === "ltr" ? 0 : void 0,
      left: context.dir === "rtl" ? 0 : void 0,
      bottom: 0,
      ...props.style
    }
  })) : null;
});
function $57acba87d6e25586$var$toInt(value) {
  return value ? parseInt(value, 10) : 0;
}
function $57acba87d6e25586$var$getThumbRatio(viewportSize, contentSize) {
  const ratio = viewportSize / contentSize;
  return isNaN(ratio) ? 0 : ratio;
}
function $57acba87d6e25586$var$getThumbSize(sizes) {
  const ratio = $57acba87d6e25586$var$getThumbRatio(sizes.viewport, sizes.content);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
  return Math.max(thumbSize, 18);
}
function $57acba87d6e25586$var$getScrollPositionFromPointer(pointerPos, pointerOffset, sizes, dir = "ltr") {
  const thumbSizePx = $57acba87d6e25586$var$getThumbSize(sizes);
  const thumbCenter = thumbSizePx / 2;
  const offset = pointerOffset || thumbCenter;
  const thumbOffsetFromEnd = thumbSizePx - offset;
  const minPointerPos = sizes.scrollbar.paddingStart + offset;
  const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
  const maxScrollPos = sizes.content - sizes.viewport;
  const scrollRange = dir === "ltr" ? [
    0,
    maxScrollPos
  ] : [
    maxScrollPos * -1,
    0
  ];
  const interpolate = $57acba87d6e25586$var$linearScale([
    minPointerPos,
    maxPointerPos
  ], scrollRange);
  return interpolate(pointerPos);
}
function $57acba87d6e25586$var$getThumbOffsetFromScroll(scrollPos, sizes, dir = "ltr") {
  const thumbSizePx = $57acba87d6e25586$var$getThumbSize(sizes);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const scrollbar = sizes.scrollbar.size - scrollbarPadding;
  const maxScrollPos = sizes.content - sizes.viewport;
  const maxThumbPos = scrollbar - thumbSizePx;
  const scrollClampRange = dir === "ltr" ? [
    0,
    maxScrollPos
  ] : [
    maxScrollPos * -1,
    0
  ];
  const scrollWithoutMomentum = $ae6933e535247d3d$export$7d15b64cf5a3a4c4(scrollPos, scrollClampRange);
  const interpolate = $57acba87d6e25586$var$linearScale([
    0,
    maxScrollPos
  ], [
    0,
    maxThumbPos
  ]);
  return interpolate(scrollWithoutMomentum);
}
function $57acba87d6e25586$var$linearScale(input, output) {
  return (value) => {
    if (input[0] === input[1] || output[0] === output[1])
      return output[0];
    const ratio = (output[1] - output[0]) / (input[1] - input[0]);
    return output[0] + ratio * (value - input[0]);
  };
}
function $57acba87d6e25586$var$isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
  return scrollPos > 0 && scrollPos < maxScrollPos;
}
var $57acba87d6e25586$var$addUnlinkedScrollListener = (node, handler = () => {
}) => {
  let prevPosition = {
    left: node.scrollLeft,
    top: node.scrollTop
  };
  let rAF = 0;
  (function loop() {
    const position = {
      left: node.scrollLeft,
      top: node.scrollTop
    };
    const isHorizontalScroll = prevPosition.left !== position.left;
    const isVerticalScroll = prevPosition.top !== position.top;
    if (isHorizontalScroll || isVerticalScroll)
      handler();
    prevPosition = position;
    rAF = window.requestAnimationFrame(loop);
  })();
  return () => window.cancelAnimationFrame(rAF);
};
function $57acba87d6e25586$var$useDebounceCallback(callback, delay) {
  const handleCallback = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback);
  const debounceTimerRef = (0, import_react3.useRef)(0);
  (0, import_react3.useEffect)(
    () => () => window.clearTimeout(debounceTimerRef.current),
    []
  );
  return (0, import_react3.useCallback)(() => {
    window.clearTimeout(debounceTimerRef.current);
    debounceTimerRef.current = window.setTimeout(handleCallback, delay);
  }, [
    handleCallback,
    delay
  ]);
}
function $57acba87d6e25586$var$useResizeObserver(element, onResize) {
  const handleResize = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onResize);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    let rAF = 0;
    if (element) {
      const resizeObserver = new ResizeObserver(() => {
        cancelAnimationFrame(rAF);
        rAF = window.requestAnimationFrame(handleResize);
      });
      resizeObserver.observe(element);
      return () => {
        window.cancelAnimationFrame(rAF);
        resizeObserver.unobserve(element);
      };
    }
  }, [
    element,
    handleResize
  ]);
}
var $57acba87d6e25586$export$be92b6f5f03c0fe9 = $57acba87d6e25586$export$ccf8d8d7bbf3c2cc;
var $57acba87d6e25586$export$d5c6c08dc2d3ca7 = $57acba87d6e25586$export$a21cbf9f11fca853;
var $57acba87d6e25586$export$ac61190d9fc311a9 = $57acba87d6e25586$export$56969d565df7cc4b;

// app/components/ui/scroll-area.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/scroll-area.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/scroll-area.tsx"
  );
  import.meta.hot.lastModified = "1728767387048.1558";
}
var ScrollArea = React2.forwardRef(_c13 = ({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)($57acba87d6e25586$export$be92b6f5f03c0fe9, { ref, className: cn("relative overflow-hidden", className), ...props, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)($57acba87d6e25586$export$d5c6c08dc2d3ca7, { className: "h-full w-full rounded-[inherit]", children }, void 0, false, {
    fileName: "app/components/ui/scroll-area.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollBar, {}, void 0, false, {
    fileName: "app/components/ui/scroll-area.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)($57acba87d6e25586$export$ac61190d9fc311a9, {}, void 0, false, {
    fileName: "app/components/ui/scroll-area.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/ui/scroll-area.tsx",
  lineNumber: 29,
  columnNumber: 12
}, this));
_c22 = ScrollArea;
ScrollArea.displayName = $57acba87d6e25586$export$be92b6f5f03c0fe9.displayName;
var ScrollBar = React2.forwardRef(_c32 = ({
  className,
  orientation = "vertical",
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)($57acba87d6e25586$export$2fabd85d0eba3c57, { ref, orientation, className: cn("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className), ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)($57acba87d6e25586$export$9fba1154677d7cd2, { className: "relative flex-1 rounded-full bg-border" }, void 0, false, {
  fileName: "app/components/ui/scroll-area.tsx",
  lineNumber: 43,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/components/ui/scroll-area.tsx",
  lineNumber: 42,
  columnNumber: 12
}, this));
_c42 = ScrollBar;
ScrollBar.displayName = $57acba87d6e25586$export$2fabd85d0eba3c57.displayName;
var _c13;
var _c22;
var _c32;
var _c42;
$RefreshReg$(_c13, "ScrollArea$React.forwardRef");
$RefreshReg$(_c22, "ScrollArea");
$RefreshReg$(_c32, "ScrollBar$React.forwardRef");
$RefreshReg$(_c42, "ScrollBar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/navbar.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/navbar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/navbar.tsx"
  );
  import.meta.hot.lastModified = "1728767387048.1558";
}
var NavBar = ({
  serverSession,
  supabase
}) => {
  _s();
  const [isOpen, setIsOpen] = (0, import_react5.useState)(false);
  const [error, setError] = (0, import_react5.useState)(null);
  const [open, setOpen] = (0, import_react5.useState)(false);
  const [message, setMessage] = (0, import_react5.useState)("");
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setMessage("You have been signed out");
    setOpen(true);
    setIsOpen(false);
  };
  const navElem = [{
    value: "Calculate Emissions",
    href: "/calculate-emissions"
  }, {
    value: "Dashboard",
    href: "/projects"
  }, {
    value: "How to Guide",
    href: "/guide"
  }, {
    value: "Template",
    href: "/template"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "flex h-20 w-full shrink-0 items-center px-4 md:px-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { className: "mr-6 flex items-center", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: CALC_default, alt: "Calc IBM Logo", className: " h-14 ml-5" }, void 0, false, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 63,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MessageDialog, { message, open, setopen: setOpen }, void 0, false, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: "lg:flex lg:gap-5 lg:items-center hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavigationMenu, { className: "invisible lg:visible px-4 lg:px-6 h-16 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavigationMenuList, { children: navElem.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavigationMenuItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavigationMenuLink, { as: "a", href: item.href, className: navigationMenuTriggerStyle(), children: item.value }, void 0, false, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 71,
      columnNumber: 19
    }, this) }, index, false, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 70,
      columnNumber: 45
    }, this)) }, void 0, false, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 69,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 68,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "ml-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "lg:block hidden mt-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex gap-4", children: serverSession ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { onClick: handleSignOut, children: "Sign out" }, void 0, false, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 82,
        columnNumber: 32
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/signin", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { className: "lg:block", variant: "default", children: "Sign In" }, void 0, false, {
            fileName: "app/components/navbar.tsx",
            lineNumber: 84,
            columnNumber: 21
          }, this),
          " "
        ] }, void 0, true, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 83,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/signup", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { className: "lg:block", variant: "default", children: "Sign Up" }, void 0, false, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 89,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 88,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 82,
        columnNumber: 84
      }, this) }, void 0, false, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 81,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { className: "rounded-full lg:hidden", size: "icon", variant: "ghost", onClick: toggleMenu, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MenuIcon, { className: "h-6 w-6" }, void 0, false, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 97,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "sr-only", children: "Toggle mobile menu" }, void 0, false, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 98,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 96,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { className: "rounded-full hidden lg:block", size: "icon", variant: "ghost", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "sr-only", children: "Toggle user menu" }, void 0, false, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 101,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 100,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 79,
      columnNumber: 9
    }, this),
    isOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 lg:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ScrollArea, { className: "h-[300px] px-1 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "space-y-1 p-2 ", children: [
      navElem.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: item.href, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { className: "w-full justify-start font-normal bg-slate-50 text-black", onClick: () => setIsOpen(false), children: item.value }, index, false, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 109,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 108,
        columnNumber: 47
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex gap-4 justify-center items-center", children: serverSession ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { onClick: handleSignOut, children: "Sign out" }, void 0, false, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 114,
        columnNumber: 36
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/signin", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { className: "lg:block", variant: "default", onClick: () => setIsOpen(false), children: "Sign In" }, void 0, false, {
            fileName: "app/components/navbar.tsx",
            lineNumber: 116,
            columnNumber: 25
          }, this),
          " "
        ] }, void 0, true, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 115,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/signup", onClick: () => setIsOpen(false), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { className: "lg:block", variant: "default", children: "Sign Up" }, void 0, false, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 121,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 120,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 114,
        columnNumber: 88
      }, this) }, void 0, false, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 113,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 107,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 106,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 105,
      columnNumber: 20
    }, this)
  ] }, "1", true, {
    fileName: "app/components/navbar.tsx",
    lineNumber: 61,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/navbar.tsx",
    lineNumber: 60,
    columnNumber: 10
  }, this);
};
_s(NavBar, "BsqZOddyzJvtS8nIeNGlIWDeLmE=");
_c14 = NavBar;
function MenuIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { ...props, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("line", { x1: "4", x2: "20", y1: "12", y2: "12" }, void 0, false, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 137,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("line", { x1: "4", x2: "20", y1: "6", y2: "6" }, void 0, false, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 138,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("line", { x1: "4", x2: "20", y1: "18", y2: "18" }, void 0, false, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 139,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/navbar.tsx",
    lineNumber: 136,
    columnNumber: 10
  }, this);
}
_c23 = MenuIcon;
function ScaleIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { ...props, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" }, void 0, false, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 145,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" }, void 0, false, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 146,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M7 21h10" }, void 0, false, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 147,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M12 3v18" }, void 0, false, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 148,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" }, void 0, false, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 149,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/navbar.tsx",
    lineNumber: 144,
    columnNumber: 10
  }, this);
}
_c33 = ScaleIcon;
var _c14;
var _c23;
var _c33;
$RefreshReg$(_c14, "NavBar");
$RefreshReg$(_c23, "MenuIcon");
$RefreshReg$(_c33, "ScaleIcon");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/styles/global.css
var global_default = "/build/_assets/global-QOQX5B5P.css";

// app/components/cookies/CookieConsent.tsx
var import_react6 = __toESM(require_react());

// node_modules/vanilla-cookieconsent/dist/cookieconsent.esm.js
var e = "opt-in";
var t = "opt-out";
var o = "show--consent";
var n = "show--preferences";
var a = "disable--interaction";
var s = "data-category";
var c = "div";
var r = "button";
var i = "aria-hidden";
var l = "btn-group";
var d = "click";
var f = "data-role";
var _ = "consentModal";
var u = "preferencesModal";
var p = class {
  constructor() {
    this.t = { mode: e, revision: 0, autoShow: true, lazyHtmlGeneration: true, autoClearCookies: true, manageScriptTags: true, hideFromBots: true, cookie: { name: "cc_cookie", expiresAfterDays: 182, domain: "", path: "/", sameSite: "Lax" } }, this.o = { i: {}, l: "", _: {}, u: {}, p: {}, m: [], v: false, h: null, C: null, S: null, M: "", D: true, T: false, k: false, A: false, N: false, H: [], V: false, I: true, L: [], j: false, F: "", P: false, O: [], R: [], B: [], G: [], J: false, U: false, $: false, q: [], K: [], W: [], X: {}, Y: {}, Z: {}, ee: {}, te: {}, oe: [] }, this.ne = { ae: {}, se: {} }, this.ce = {}, this.re = { ie: "cc:onFirstConsent", le: "cc:onConsent", de: "cc:onChange", fe: "cc:onModalShow", _e: "cc:onModalHide", ue: "cc:onModalReady" };
  }
};
var m = new p();
var g = (e2, t2) => e2.indexOf(t2);
var b = (e2, t2) => -1 !== g(e2, t2);
var v = (e2) => Array.isArray(e2);
var y = (e2) => "string" == typeof e2;
var h = (e2) => !!e2 && "object" == typeof e2 && !v(e2);
var C = (e2) => "function" == typeof e2;
var w = (e2) => Object.keys(e2);
var S = (e2) => Array.from(new Set(e2));
var x = () => document.activeElement;
var M = (e2) => e2.preventDefault();
var D = (e2, t2) => e2.querySelectorAll(t2);
var k = (e2) => {
  const t2 = document.createElement(e2);
  return e2 === r && (t2.type = e2), t2;
};
var E = (e2, t2, o2) => e2.setAttribute(t2, o2);
var A = (e2, t2, o2) => {
  e2.removeAttribute(o2 ? "data-" + t2 : t2);
};
var N = (e2, t2, o2) => e2.getAttribute(o2 ? "data-" + t2 : t2);
var H = (e2, t2) => e2.appendChild(t2);
var V = (e2, t2) => e2.classList.add(t2);
var I = (e2, t2) => V(e2, "cm__" + t2);
var L = (e2, t2) => V(e2, "pm__" + t2);
var j = (e2, t2) => e2.classList.remove(t2);
var F = (e2) => {
  if ("object" != typeof e2)
    return e2;
  if (e2 instanceof Date)
    return new Date(e2.getTime());
  let t2 = Array.isArray(e2) ? [] : {};
  for (let o2 in e2) {
    let n2 = e2[o2];
    t2[o2] = F(n2);
  }
  return t2;
};
var O = (e2, t2) => dispatchEvent(new CustomEvent(e2, { detail: t2 }));
var R = (e2, t2, o2, n2) => {
  e2.addEventListener(t2, o2), n2 && m.o.m.push({ pe: e2, me: t2, ge: o2 });
};
var B = () => {
  const e2 = m.t.cookie.expiresAfterDays;
  return C(e2) ? e2(m.o.F) : e2;
};
var G = (e2, t2) => {
  const o2 = e2 || [], n2 = t2 || [];
  return o2.filter((e3) => !b(n2, e3)).concat(n2.filter((e3) => !b(o2, e3)));
};
var J = (e2) => {
  m.o.R = S(e2), m.o.F = (() => {
    let e3 = "custom";
    const { R: t2, O: o2, B: n2 } = m.o, a2 = t2.length;
    return a2 === o2.length ? e3 = "all" : a2 === n2.length && (e3 = "necessary"), e3;
  })();
};
var U = (e2, t2, o2, n2) => {
  const a2 = "accept-", { show: s2, showPreferences: c2, hide: r2, hidePreferences: i2, acceptCategory: l2 } = t2, f2 = e2 || document, _2 = (e3) => D(f2, `[data-cc="${e3}"]`), u2 = (e3, t3) => {
    M(e3), l2(t3), i2(), r2();
  }, p2 = _2("show-preferencesModal"), g2 = _2("show-consentModal"), b2 = _2(a2 + "all"), v2 = _2(a2 + "necessary"), y2 = _2(a2 + "custom"), h2 = m.t.lazyHtmlGeneration;
  for (const e3 of p2)
    E(e3, "aria-haspopup", "dialog"), R(e3, d, (e4) => {
      M(e4), c2();
    }), h2 && (R(e3, "mouseenter", (e4) => {
      M(e4), m.o.N || o2(t2, n2);
    }, true), R(e3, "focus", () => {
      m.o.N || o2(t2, n2);
    }));
  for (let e3 of g2)
    E(e3, "aria-haspopup", "dialog"), R(e3, d, (e4) => {
      M(e4), s2(true);
    }, true);
  for (let e3 of b2)
    R(e3, d, (e4) => {
      u2(e4, "all");
    }, true);
  for (let e3 of y2)
    R(e3, d, (e4) => {
      u2(e4);
    }, true);
  for (let e3 of v2)
    R(e3, d, (e4) => {
      u2(e4, []);
    }, true);
};
var $ = (e2, t2) => {
  e2 && (t2 && (e2.tabIndex = -1), e2.focus(), t2 && e2.removeAttribute("tabindex"));
};
var z = (e2, t2) => {
  const o2 = (n2) => {
    n2.target.removeEventListener("transitionend", o2), "opacity" === n2.propertyName && "1" === getComputedStyle(e2).opacity && $(((e3) => 1 === e3 ? m.ne.be : m.ne.ve)(t2));
  };
  R(e2, "transitionend", o2);
};
var q;
var K = (e2) => {
  clearTimeout(q), e2 ? V(m.ne.ye, a) : q = setTimeout(() => {
    j(m.ne.ye, a);
  }, 500);
};
var Q = ["M 19.5 4.5 L 4.5 19.5 M 4.5 4.501 L 19.5 19.5", "M 3.572 13.406 L 8.281 18.115 L 20.428 5.885", "M 21.999 6.94 L 11.639 17.18 L 2.001 6.82 "];
var W = (e2 = 0, t2 = 1.5) => `<svg viewBox="0 0 24 24" stroke-width="${t2}"><path d="${Q[e2]}"/></svg>`;
var X = (e2) => {
  const t2 = m.ne, o2 = m.o;
  ((e3) => {
    const n2 = e3 === t2.he, a2 = o2.i.disablePageInteraction ? t2.ye : n2 ? t2.Ce : t2.ye;
    R(a2, "keydown", (t3) => {
      if ("Tab" !== t3.key || !(n2 ? o2.k && !o2.A : o2.A))
        return;
      const a3 = x(), s2 = n2 ? o2.q : o2.K;
      0 !== s2.length && (t3.shiftKey ? a3 !== s2[0] && e3.contains(a3) || (M(t3), $(s2[1])) : a3 !== s2[1] && e3.contains(a3) || (M(t3), $(s2[0])));
    }, true);
  })(e2);
};
var Y = ["[href]", r, "input", "details", "[tabindex]"].map((e2) => e2 + ':not([tabindex="-1"])').join(",");
var Z = (e2) => {
  const { o: t2, ne: o2 } = m, n2 = (e3, t3) => {
    const o3 = D(e3, Y);
    t3[0] = o3[0], t3[1] = o3[o3.length - 1];
  };
  1 === e2 && t2.T && n2(o2.he, t2.q), 2 === e2 && t2.N && n2(o2.we, t2.K);
};
var ee = (e2, t2, o2) => {
  const { de: n2, le: a2, ie: s2, _e: c2, ue: r2, fe: i2 } = m.ce, l2 = m.re;
  if (t2) {
    const n3 = { modalName: t2 };
    return e2 === l2.fe ? C(i2) && i2(n3) : e2 === l2._e ? C(c2) && c2(n3) : (n3.modal = o2, C(r2) && r2(n3)), O(e2, n3);
  }
  const d2 = { cookie: m.o.p };
  e2 === l2.ie ? C(s2) && s2(F(d2)) : e2 === l2.le ? C(a2) && a2(F(d2)) : (d2.changedCategories = m.o.L, d2.changedServices = m.o.ee, C(n2) && n2(F(d2))), O(e2, F(d2));
};
var te = (e2, t2) => {
  try {
    return e2();
  } catch (e3) {
    return !t2 && console.warn("CookieConsent:", e3), false;
  }
};
var oe = (e2) => {
  const { Y: t2, ee: o2, O: n2, X: a2, oe: c2, p: r2, L: i2 } = m.o;
  for (const e3 of n2) {
    const n3 = o2[e3] || t2[e3] || [];
    for (const o3 of n3) {
      const n4 = a2[e3][o3];
      if (!n4)
        continue;
      const { onAccept: s2, onReject: c3 } = n4;
      !n4.Se && b(t2[e3], o3) ? (n4.Se = true, C(s2) && s2()) : n4.Se && !b(t2[e3], o3) && (n4.Se = false, C(c3) && c3());
    }
  }
  if (!m.t.manageScriptTags)
    return;
  const l2 = c2, d2 = e2 || r2.categories || [], f2 = (e3, n3) => {
    if (n3 >= e3.length)
      return;
    const a3 = c2[n3];
    if (a3.xe)
      return f2(e3, n3 + 1);
    const r3 = a3.Me, l3 = a3.De, _2 = a3.Te, u2 = b(d2, l3), p2 = !!_2 && b(t2[l3], _2);
    if (!_2 && !a3.ke && u2 || !_2 && a3.ke && !u2 && b(i2, l3) || _2 && !a3.ke && p2 || _2 && a3.ke && !p2 && b(o2[l3] || [], _2)) {
      a3.xe = true;
      const t3 = N(r3, "type", true);
      A(r3, "type", !!t3), A(r3, s);
      let o3 = N(r3, "src", true);
      o3 && A(r3, "src", true);
      const c3 = k("script");
      c3.textContent = r3.innerHTML;
      for (const { nodeName: e4 } of r3.attributes)
        E(c3, e4, r3[e4] || N(r3, e4));
      t3 && (c3.type = t3), o3 ? c3.src = o3 : o3 = r3.src;
      const i3 = !!o3 && (!t3 || ["text/javascript", "module"].includes(t3));
      if (i3 && (c3.onload = c3.onerror = () => {
        f2(e3, ++n3);
      }), r3.replaceWith(c3), i3)
        return;
    }
    f2(e3, ++n3);
  };
  f2(l2, 0);
};
var ne = "bottom";
var ae = "left";
var se = "center";
var ce = "right";
var re = "inline";
var ie = "wide";
var le = "pm--";
var de = ["middle", "top", ne];
var fe = [ae, se, ce];
var _e = { box: { Ee: [ie, re], Ae: de, Ne: fe, He: ne, Ve: ce }, cloud: { Ee: [re], Ae: de, Ne: fe, He: ne, Ve: se }, bar: { Ee: [re], Ae: de.slice(1), Ne: [], He: ne, Ve: "" } };
var ue = { box: { Ee: [], Ae: [], Ne: [], He: "", Ve: "" }, bar: { Ee: [ie], Ae: [], Ne: [ae, ce], He: "", Ve: ae } };
var pe = (e2) => {
  const t2 = m.o.i.guiOptions, o2 = t2 && t2.consentModal, n2 = t2 && t2.preferencesModal;
  0 === e2 && me(m.ne.he, _e, o2, "cm--", "box", "cm"), 1 === e2 && me(m.ne.we, ue, n2, le, "box", "pm");
};
var me = (e2, t2, o2, n2, a2, s2) => {
  e2.className = s2;
  const c2 = o2 && o2.layout, r2 = o2 && o2.position, i2 = o2 && o2.flipButtons, l2 = !o2 || false !== o2.equalWeightButtons, d2 = c2 && c2.split(" ") || [], f2 = d2[0], _2 = d2[1], u2 = f2 in t2 ? f2 : a2, p2 = t2[u2], g2 = b(p2.Ee, _2) && _2, v2 = r2 && r2.split(" ") || [], y2 = v2[0], h2 = n2 === le ? v2[0] : v2[1], C2 = b(p2.Ae, y2) ? y2 : p2.He, w2 = b(p2.Ne, h2) ? h2 : p2.Ve, S2 = (t3) => {
    t3 && V(e2, n2 + t3);
  };
  S2(u2), S2(g2), S2(C2), S2(w2), i2 && S2("flip");
  const x2 = s2 + "__btn--secondary";
  if ("cm" === s2) {
    const { Ie: e3, Le: t3 } = m.ne;
    e3 && (l2 ? j(e3, x2) : V(e3, x2)), t3 && (l2 ? j(t3, x2) : V(t3, x2));
  } else {
    const { je: e3 } = m.ne;
    e3 && (l2 ? j(e3, x2) : V(e3, x2));
  }
};
var ge = (e2, t2) => {
  const o2 = m.o, n2 = m.ne, { hide: a2, hidePreferences: s2, acceptCategory: _2 } = e2, p2 = (e3) => {
    _2(e3), s2(), a2();
  }, g2 = o2.u && o2.u.preferencesModal;
  if (!g2)
    return;
  const b2 = g2.title, v2 = g2.closeIconLabel, C2 = g2.acceptAllBtn, S2 = g2.acceptNecessaryBtn, x2 = g2.savePreferencesBtn, M2 = g2.sections || [], D2 = C2 || S2 || x2;
  if (n2.Fe)
    n2.Pe = k(c), L(n2.Pe, "body");
  else {
    n2.Fe = k(c), V(n2.Fe, "pm-wrapper");
    const e3 = k("div");
    V(e3, "pm-overlay"), H(n2.Fe, e3), R(e3, d, s2), n2.we = k(c), V(n2.we, "pm"), E(n2.we, "role", "dialog"), E(n2.we, i, true), E(n2.we, "aria-modal", true), E(n2.we, "aria-labelledby", "pm__title"), R(n2.ye, "keydown", (e4) => {
      27 === e4.keyCode && s2();
    }, true), n2.Oe = k(c), L(n2.Oe, "header"), n2.Re = k("h2"), L(n2.Re, "title"), n2.Re.id = "pm__title", n2.Be = k(r), L(n2.Be, "close-btn"), E(n2.Be, "aria-label", g2.closeIconLabel || ""), R(n2.Be, d, s2), n2.Ge = k("span"), n2.Ge.innerHTML = W(), H(n2.Be, n2.Ge), n2.Je = k(c), L(n2.Je, "body"), n2.Ue = k(c), L(n2.Ue, "footer");
    var T = k(c);
    V(T, "btns");
    var A2 = k(c), N2 = k(c);
    L(A2, l), L(N2, l), H(n2.Ue, A2), H(n2.Ue, N2), H(n2.Oe, n2.Re), H(n2.Oe, n2.Be), n2.ve = k(c), E(n2.ve, "tabIndex", -1), H(n2.we, n2.ve), H(n2.we, n2.Oe), H(n2.we, n2.Je), D2 && H(n2.we, n2.Ue), H(n2.Fe, n2.we);
  }
  let I2;
  b2 && (n2.Re.innerHTML = b2, v2 && E(n2.Be, "aria-label", v2)), M2.forEach((e3, t3) => {
    const a3 = e3.title, s3 = e3.description, l2 = e3.linkedCategory, f2 = l2 && o2.P[l2], _3 = e3.cookieTable, u2 = _3 && _3.body, p3 = _3 && _3.caption, m2 = u2 && u2.length > 0, b3 = !!f2, v3 = b3 && o2.X[l2], C3 = h(v3) && w(v3) || [], S3 = b3 && (!!s3 || !!m2 || w(v3).length > 0);
    var x3 = k(c);
    if (L(x3, "section"), S3 || s3) {
      var M3 = k(c);
      L(M3, "section-desc-wrapper");
    }
    let D3 = C3.length;
    if (S3 && D3 > 0) {
      const e4 = k(c);
      L(e4, "section-services");
      for (const t4 of C3) {
        const o3 = v3[t4], n3 = o3 && o3.label || t4, a4 = k(c), s4 = k(c), r2 = k(c), i2 = k(c);
        L(a4, "service"), L(i2, "service-title"), L(s4, "service-header"), L(r2, "service-icon");
        const d2 = be(n3, t4, f2, true, l2);
        i2.innerHTML = n3, H(s4, r2), H(s4, i2), H(a4, s4), H(a4, d2), H(e4, a4);
      }
      H(M3, e4);
    }
    if (a3) {
      var T2 = k(c), A3 = k(b3 ? r : c);
      if (L(T2, "section-title-wrapper"), L(A3, "section-title"), A3.innerHTML = a3, H(T2, A3), b3) {
        const e4 = k("span");
        e4.innerHTML = W(2, 3.5), L(e4, "section-arrow"), H(T2, e4), x3.className += "--toggle";
        const t4 = be(a3, l2, f2);
        let o3 = g2.serviceCounterLabel;
        if (D3 > 0 && y(o3)) {
          let e5 = k("span");
          L(e5, "badge"), L(e5, "service-counter"), E(e5, i, true), E(e5, "data-servicecounter", D3), o3 && (o3 = o3.split("|"), o3 = o3.length > 1 && D3 > 1 ? o3[1] : o3[0], E(e5, "data-counterlabel", o3)), e5.innerHTML = D3 + (o3 ? " " + o3 : ""), H(A3, e5);
        }
        if (S3) {
          L(x3, "section--expandable");
          var N3 = l2 + "-desc";
          E(A3, "aria-expanded", false), E(A3, "aria-controls", N3);
        }
        H(T2, t4);
      } else
        E(A3, "role", "heading"), E(A3, "aria-level", "3");
      H(x3, T2);
    }
    if (s3) {
      var F2 = k("p");
      L(F2, "section-desc"), F2.innerHTML = s3, H(M3, F2);
    }
    if (S3 && (E(M3, i, "true"), M3.id = N3, ((e4, t4, o3) => {
      R(A3, d, () => {
        t4.classList.contains("is-expanded") ? (j(t4, "is-expanded"), E(o3, "aria-expanded", "false"), E(e4, i, "true")) : (V(t4, "is-expanded"), E(o3, "aria-expanded", "true"), E(e4, i, "false"));
      });
    })(M3, x3, A3), m2)) {
      const e4 = k("table"), o3 = k("thead"), a4 = k("tbody");
      if (p3) {
        const t4 = k("caption");
        L(t4, "table-caption"), t4.innerHTML = p3, e4.appendChild(t4);
      }
      L(e4, "section-table"), L(o3, "table-head"), L(a4, "table-body");
      const s4 = _3.headers, r2 = w(s4), i2 = n2.$e.createDocumentFragment(), l3 = k("tr");
      for (const e5 of r2) {
        const o4 = s4[e5], n3 = k("th");
        n3.id = "cc__row-" + o4 + t3, E(n3, "scope", "col"), L(n3, "table-th"), n3.innerHTML = o4, H(i2, n3);
      }
      H(l3, i2), H(o3, l3);
      const d2 = n2.$e.createDocumentFragment();
      for (const e5 of u2) {
        const o4 = k("tr");
        L(o4, "table-tr");
        for (const n3 of r2) {
          const a5 = s4[n3], r3 = e5[n3], i3 = k("td"), l4 = k(c);
          L(i3, "table-td"), E(i3, "data-column", a5), E(i3, "headers", "cc__row-" + a5 + t3), l4.insertAdjacentHTML("beforeend", r3), H(i3, l4), H(o4, i3);
        }
        H(d2, o4);
      }
      H(a4, d2), H(e4, o3), H(e4, a4), H(M3, e4);
    }
    (S3 || s3) && H(x3, M3);
    const P = n2.Pe || n2.Je;
    b3 ? (I2 || (I2 = k(c), L(I2, "section-toggles")), I2.appendChild(x3)) : I2 = null, H(P, I2 || x3);
  }), C2 && (n2.ze || (n2.ze = k(r), L(n2.ze, "btn"), E(n2.ze, f, "all"), H(A2, n2.ze), R(n2.ze, d, () => p2("all"))), n2.ze.innerHTML = C2), S2 && (n2.je || (n2.je = k(r), L(n2.je, "btn"), E(n2.je, f, "necessary"), H(A2, n2.je), R(n2.je, d, () => p2([]))), n2.je.innerHTML = S2), x2 && (n2.qe || (n2.qe = k(r), L(n2.qe, "btn"), L(n2.qe, "btn--secondary"), E(n2.qe, f, "save"), H(N2, n2.qe), R(n2.qe, d, () => p2())), n2.qe.innerHTML = x2), n2.Pe && (n2.we.replaceChild(n2.Pe, n2.Je), n2.Je = n2.Pe), pe(1), o2.N || (o2.N = true, ee(m.re.ue, u, n2.we), t2(e2), H(n2.Ce, n2.Fe), X(n2.we), setTimeout(() => V(n2.Fe, "cc--anim"), 100)), Z(2);
};
function be(e2, t2, o2, n2, a2) {
  const c2 = m.o, r2 = m.ne, l2 = k("label"), f2 = k("input"), _2 = k("span"), u2 = k("span"), p2 = k("span"), g2 = k("span"), v2 = k("span");
  if (g2.innerHTML = W(1, 3), v2.innerHTML = W(0, 3), f2.type = "checkbox", V(l2, "section__toggle-wrapper"), V(f2, "section__toggle"), V(g2, "toggle__icon-on"), V(v2, "toggle__icon-off"), V(_2, "toggle__icon"), V(u2, "toggle__icon-circle"), V(p2, "toggle__label"), E(_2, i, "true"), n2 ? (V(l2, "toggle-service"), E(f2, s, a2), r2.se[a2][t2] = f2) : r2.ae[t2] = f2, n2 ? ((e3) => {
    R(f2, "change", () => {
      const t3 = r2.se[e3], o3 = r2.ae[e3];
      c2.Z[e3] = [];
      for (let o4 in t3) {
        const n3 = t3[o4];
        n3.checked && c2.Z[e3].push(n3.value);
      }
      o3.checked = c2.Z[e3].length > 0;
    });
  })(a2) : ((e3) => {
    R(f2, d, () => {
      const t3 = r2.se[e3], o3 = f2.checked;
      c2.Z[e3] = [];
      for (let n3 in t3)
        t3[n3].checked = o3, o3 && c2.Z[e3].push(n3);
    });
  })(t2), f2.value = t2, p2.textContent = e2.replace(/<.*>.*<\/.*>/gm, ""), H(u2, v2), H(u2, g2), H(_2, u2), c2.D)
    (o2.readOnly || o2.enabled) && (f2.checked = true);
  else if (n2) {
    const e3 = c2.Y[a2];
    f2.checked = o2.readOnly || b(e3, t2);
  } else
    b(c2.R, t2) && (f2.checked = true);
  return o2.readOnly && (f2.disabled = true), H(l2, f2), H(l2, _2), H(l2, p2), l2;
}
var ve = () => {
  const e2 = k("span");
  return m.ne.Ke || (m.ne.Ke = e2), e2;
};
var ye = (e2, t2) => {
  const o2 = m.o, n2 = m.ne, { hide: a2, showPreferences: s2, acceptCategory: u2 } = e2, p2 = o2.u && o2.u.consentModal;
  if (!p2)
    return;
  const g2 = p2.acceptAllBtn, b2 = p2.acceptNecessaryBtn, v2 = p2.showPreferencesBtn, y2 = p2.closeIconLabel, h2 = p2.footer, C2 = p2.label, w2 = p2.title, S2 = (e3) => {
    a2(), u2(e3);
  };
  if (!n2.Qe) {
    n2.Qe = k(c), n2.he = k(c), n2.We = k(c), n2.Xe = k(c), n2.Ye = k(c), V(n2.Qe, "cm-wrapper"), V(n2.he, "cm"), I(n2.We, "body"), I(n2.Xe, "texts"), I(n2.Ye, "btns"), E(n2.he, "role", "dialog"), E(n2.he, "aria-modal", "true"), E(n2.he, i, "false"), E(n2.he, "aria-describedby", "cm__desc"), C2 ? E(n2.he, "aria-label", C2) : w2 && E(n2.he, "aria-labelledby", "cm__title");
    const e3 = "box", t3 = o2.i.guiOptions, a3 = t3 && t3.consentModal, s3 = (a3 && a3.layout || e3).split(" ")[0] === e3;
    w2 && y2 && s3 && (n2.Le || (n2.Le = k(r), n2.Le.innerHTML = W(), I(n2.Le, "btn"), I(n2.Le, "btn--close"), R(n2.Le, d, () => {
      S2([]);
    }), H(n2.We, n2.Le)), E(n2.Le, "aria-label", y2)), H(n2.We, n2.Xe), (g2 || b2 || v2) && H(n2.We, n2.Ye), n2.be = k(c), E(n2.be, "tabIndex", -1), H(n2.he, n2.be), H(n2.he, n2.We), H(n2.Qe, n2.he);
  }
  w2 && (n2.Ze || (n2.Ze = k("h2"), n2.Ze.className = n2.Ze.id = "cm__title", H(n2.Xe, n2.Ze)), n2.Ze.innerHTML = w2);
  let x2 = p2.description;
  if (x2 && (o2.V && (x2 = x2.replace("{{revisionMessage}}", o2.I ? "" : p2.revisionMessage || "")), n2.et || (n2.et = k("p"), n2.et.className = n2.et.id = "cm__desc", H(n2.Xe, n2.et)), n2.et.innerHTML = x2), g2 && (n2.tt || (n2.tt = k(r), H(n2.tt, ve()), I(n2.tt, "btn"), E(n2.tt, f, "all"), R(n2.tt, d, () => {
    S2("all");
  })), n2.tt.firstElementChild.innerHTML = g2), b2 && (n2.Ie || (n2.Ie = k(r), H(n2.Ie, ve()), I(n2.Ie, "btn"), E(n2.Ie, f, "necessary"), R(n2.Ie, d, () => {
    S2([]);
  })), n2.Ie.firstElementChild.innerHTML = b2), v2 && (n2.ot || (n2.ot = k(r), H(n2.ot, ve()), I(n2.ot, "btn"), I(n2.ot, "btn--secondary"), E(n2.ot, f, "show"), R(n2.ot, "mouseenter", () => {
    o2.N || ge(e2, t2);
  }), R(n2.ot, d, s2)), n2.ot.firstElementChild.innerHTML = v2), n2.nt || (n2.nt = k(c), I(n2.nt, l), g2 && H(n2.nt, n2.tt), b2 && H(n2.nt, n2.Ie), (g2 || b2) && H(n2.We, n2.nt), H(n2.Ye, n2.nt)), n2.ot && !n2.st && (n2.st = k(c), n2.Ie && n2.tt ? (I(n2.st, l), H(n2.st, n2.ot), H(n2.Ye, n2.st)) : (H(n2.nt, n2.ot), I(n2.nt, l + "--uneven"))), h2) {
    if (!n2.ct) {
      let e3 = k(c), t3 = k(c);
      n2.ct = k(c), I(e3, "footer"), I(t3, "links"), I(n2.ct, "link-group"), H(t3, n2.ct), H(e3, t3), H(n2.he, e3);
    }
    n2.ct.innerHTML = h2;
  }
  pe(0), o2.T || (o2.T = true, ee(m.re.ue, _, n2.he), t2(e2), H(n2.Ce, n2.Qe), X(n2.he), setTimeout(() => V(n2.Qe, "cc--anim"), 100)), Z(1), U(n2.We, e2, ge, t2);
};
var he = (e2) => {
  if (!y(e2))
    return null;
  if (e2 in m.o._)
    return e2;
  let t2 = e2.slice(0, 2);
  return t2 in m.o._ ? t2 : null;
};
var Ce = () => m.o.l || m.o.i.language.default;
var we = (e2) => {
  e2 && (m.o.l = e2);
};
var Se = async (e2) => {
  const t2 = m.o;
  let o2 = he(e2) ? e2 : Ce(), n2 = t2._[o2];
  return y(n2) ? n2 = await (async (e3) => {
    try {
      const t3 = await fetch(e3);
      return await t3.json();
    } catch (e4) {
      return console.error(e4), false;
    }
  })(n2) : C(n2) && (n2 = await n2()), !!n2 && (t2.u = n2, we(o2), true);
};
var xe = () => {
  let e2 = m.o.i.language.rtl, t2 = m.ne.Ce;
  e2 && t2 && (v(e2) || (e2 = [e2]), b(e2, m.o.l) ? V(t2, "cc--rtl") : j(t2, "cc--rtl"));
};
var Me = () => {
  const e2 = m.ne;
  if (e2.Ce)
    return;
  e2.Ce = k(c), e2.Ce.id = "cc-main", e2.Ce.setAttribute("data-nosnippet", ""), xe();
  let t2 = m.o.i.root;
  t2 && y(t2) && (t2 = document.querySelector(t2)), (t2 || e2.$e.body).appendChild(e2.Ce);
};
var De = (e2) => te(() => localStorage.removeItem(e2));
var Te = (e2, t2) => {
  if (t2 instanceof RegExp)
    return e2.filter((e3) => t2.test(e3));
  {
    const o2 = g(e2, t2);
    return o2 > -1 ? [e2[o2]] : [];
  }
};
var ke = (e2) => {
  const { hostname: t2, protocol: o2 } = location, { name: n2, path: a2, domain: s2, sameSite: c2, useLocalStorage: r2 } = m.t.cookie, i2 = e2 ? (() => {
    const e3 = m.o.S, t3 = e3 ? /* @__PURE__ */ new Date() - e3 : 0;
    return 864e5 * B() - t3;
  })() : 864e5 * B(), l2 = /* @__PURE__ */ new Date();
  l2.setTime(l2.getTime() + i2), m.o.p.expirationTime = l2.getTime();
  const d2 = JSON.stringify(m.o.p);
  let f2 = n2 + "=" + encodeURIComponent(d2) + (0 !== i2 ? "; expires=" + l2.toUTCString() : "") + "; Path=" + a2 + "; SameSite=" + c2;
  b(t2, ".") && (f2 += "; Domain=" + s2), "https:" === o2 && (f2 += "; Secure"), r2 ? ((e3, t3) => {
    te(() => localStorage.setItem(e3, t3));
  })(n2, d2) : document.cookie = f2, m.o.p;
};
var Ee = (e2, t2, o2) => {
  if (0 === e2.length)
    return;
  const n2 = o2 || m.t.cookie.domain, a2 = t2 || m.t.cookie.path, s2 = "www." === n2.slice(0, 4), c2 = s2 && n2.substring(4), r2 = (e3, t3) => {
    document.cookie = e3 + "=; path=" + a2 + (t3 ? "; domain=." + t3 : "") + "; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  };
  for (const t3 of e2)
    r2(t3), r2(t3, n2), s2 && r2(t3, c2);
};
var Ae = (e2) => {
  const t2 = e2 || m.t.cookie.name, o2 = m.t.cookie.useLocalStorage;
  return ((e3, t3) => {
    let o3;
    return o3 = te(() => JSON.parse(t3 ? e3 : decodeURIComponent(e3)), true) || {}, o3;
  })(o2 ? (n2 = t2, te(() => localStorage.getItem(n2)) || "") : Ne(t2, true), o2);
  var n2;
};
var Ne = (e2, t2) => {
  const o2 = document.cookie.match("(^|;)\\s*" + e2 + "\\s*=\\s*([^;]+)");
  return o2 ? t2 ? o2.pop() : e2 : "";
};
var He = (e2) => {
  const t2 = document.cookie.split(/;\s*/), o2 = [];
  for (const n2 of t2) {
    let t3 = n2.split("=")[0];
    e2 ? te(() => {
      e2.test(t3) && o2.push(t3);
    }) : o2.push(t3);
  }
  return o2;
};
var Ve = (o2, n2 = []) => {
  ((e2, t2) => {
    const { O: o3, R: n3, B: a2, N: s2, Z: c2, G: r2, X: i2 } = m.o;
    let l2 = [];
    if (e2) {
      v(e2) ? l2.push(...e2) : y(e2) && (l2 = "all" === e2 ? o3 : [e2]);
      for (const e3 of o3)
        c2[e3] = b(l2, e3) ? w(i2[e3]) : [];
    } else
      l2 = [...n3, ...r2], s2 && (l2 = (() => {
        const e3 = m.ne.ae;
        if (!e3)
          return [];
        let t3 = [];
        for (let o4 in e3)
          e3[o4].checked && t3.push(o4);
        return t3;
      })());
    l2 = l2.filter((e3) => !b(o3, e3) || !b(t2, e3)), l2.push(...a2), J(l2);
  })(o2, n2), ((e2) => {
    const t2 = m.o, { Z: o3, B: n3, Y: a2, X: s2, O: c2 } = t2, r2 = c2;
    t2.te = F(a2);
    for (const e3 of r2) {
      const c3 = s2[e3], r3 = w(c3), i2 = o3[e3] && o3[e3].length > 0, l2 = b(n3, e3);
      if (0 !== r3.length) {
        if (a2[e3] = [], l2)
          a2[e3].push(...r3);
        else if (i2) {
          const t3 = o3[e3];
          a2[e3].push(...t3);
        } else
          a2[e3] = t2.Z[e3];
        a2[e3] = S(a2[e3]);
      }
    }
  })(), (() => {
    const o3 = m.o;
    o3.L = m.t.mode === t && o3.D ? G(o3.G, o3.R) : G(o3.R, o3.p.categories);
    let n3 = o3.L.length > 0, a2 = false;
    for (const e2 of o3.O)
      o3.ee[e2] = G(o3.Y[e2], o3.te[e2]), o3.ee[e2].length > 0 && (a2 = true);
    const s2 = m.ne.ae;
    for (const e2 in s2)
      s2[e2].checked = b(o3.R, e2);
    for (const e2 of o3.O) {
      const t2 = m.ne.se[e2], n4 = o3.Y[e2];
      for (const e3 in t2)
        t2[e3].checked = b(n4, e3);
    }
    o3.C || (o3.C = /* @__PURE__ */ new Date()), o3.M || (o3.M = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (e2) => (e2 ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e2 / 4).toString(16))), o3.p = { categories: F(o3.R), revision: m.t.revision, data: o3.h, consentTimestamp: o3.C.toISOString(), consentId: o3.M, services: F(o3.Y) };
    let c2 = false;
    const r2 = n3 || a2;
    (o3.D || r2) && (o3.D && (o3.D = false, c2 = true), o3.S = o3.S ? /* @__PURE__ */ new Date() : o3.C, o3.p.lastConsentTimestamp = o3.S.toISOString(), ke(), m.t.autoClearCookies && (c2 || r2) && ((e2) => {
      const t2 = m.o, o4 = He(), n4 = ((e3) => {
        const t3 = m.o;
        return (e3 ? t3.O : t3.L).filter((e4) => {
          const o5 = t3.P[e4];
          return !!o5 && !o5.readOnly && !!o5.autoClear;
        });
      })(e2);
      for (const e3 in t2.ee)
        for (const n5 of t2.ee[e3]) {
          const a3 = t2.X[e3][n5].cookies;
          if (!b(t2.Y[e3], n5) && a3)
            for (const e4 of a3) {
              const t3 = Te(o4, e4.name);
              Ee(t3, e4.path, e4.domain);
            }
        }
      for (const a3 of n4) {
        const n5 = t2.P[a3].autoClear, s3 = n5 && n5.cookies || [], c3 = b(t2.L, a3), r3 = !b(t2.R, a3), i2 = c3 && r3;
        if (e2 ? r3 : i2) {
          n5.reloadPage && i2 && (t2.j = true);
          for (const e3 of s3) {
            const t3 = Te(o4, e3.name);
            Ee(t3, e3.path, e3.domain);
          }
        }
      }
    })(c2), oe()), c2 && (ee(m.re.ie), ee(m.re.le), m.t.mode === e) || (r2 && ee(m.re.de), o3.j && (o3.j = false, location.reload()));
  })();
};
var Ie = (e2) => {
  const t2 = m.o.D ? [] : m.o.R;
  return b(t2, e2);
};
var je = (e2, t2) => {
  const o2 = m.o.D ? [] : m.o.Y[t2] || [];
  return b(o2, e2);
};
var Oe = (e2) => {
  const { ne: t2, o: n2 } = m;
  if (!n2.k) {
    if (!n2.T) {
      if (!e2)
        return;
      ye(Je, Me);
    }
    n2.k = true, n2.U = x(), n2.v && K(true), z(t2.he, 1), V(t2.ye, o), E(t2.he, i, "false"), setTimeout(() => {
      $(m.ne.be);
    }, 100), ee(m.re.fe, _);
  }
};
var Re = () => {
  const { ne: e2, o: t2, re: n2 } = m;
  t2.k && (t2.k = false, t2.v && K(), $(e2.Ke, true), j(e2.ye, o), E(e2.he, i, "true"), $(t2.U), t2.U = null, ee(n2._e, _));
};
var Be = () => {
  const e2 = m.o;
  e2.A || (e2.N || ge(Je, Me), e2.A = true, e2.k ? e2.$ = x() : e2.U = x(), z(m.ne.we, 2), V(m.ne.ye, n), E(m.ne.we, i, "false"), setTimeout(() => {
    $(m.ne.ve);
  }, 100), ee(m.re.fe, u));
};
var Ge = () => {
  const e2 = m.o;
  e2.A && (e2.A = false, (() => {
    const e3 = We(), t2 = m.o.P, o2 = m.ne.ae, n2 = m.ne.se, a2 = (e4) => b(m.o.G, e4);
    for (const s2 in o2) {
      const c2 = !!t2[s2].readOnly;
      o2[s2].checked = c2 || (e3 ? Ie(s2) : a2(s2));
      for (const t3 in n2[s2])
        n2[s2][t3].checked = c2 || (e3 ? je(t3, s2) : a2(s2));
    }
  })(), $(m.ne.Ge, true), j(m.ne.ye, n), E(m.ne.we, i, "true"), e2.k ? ($(e2.$), e2.$ = null) : ($(e2.U), e2.U = null), ee(m.re._e, u));
};
var Je = { show: Oe, hide: Re, showPreferences: Be, hidePreferences: Ge, acceptCategory: Ve };
var We = () => !m.o.D;
var Xe = async (e2) => {
  const { o: o2, t: n2, re: a2 } = m, c2 = window;
  if (!c2._ccRun) {
    if (c2._ccRun = true, ((e3) => {
      const { ne: o3, t: n3, o: a3 } = m, c3 = n3, r3 = a3, { cookie: i3 } = c3, l2 = m.ce, d2 = e3.cookie, f2 = e3.categories, _2 = w(f2) || [], u2 = navigator, p2 = document;
      o3.$e = p2, o3.ye = p2.documentElement, i3.domain = location.hostname, r3.i = e3, r3.P = f2, r3.O = _2, r3._ = e3.language.translations, r3.v = !!e3.disablePageInteraction, l2.ie = e3.onFirstConsent, l2.le = e3.onConsent, l2.de = e3.onChange, l2._e = e3.onModalHide, l2.fe = e3.onModalShow, l2.ue = e3.onModalReady;
      const { mode: g2, autoShow: v2, lazyHtmlGeneration: y2, autoClearCookies: C2, revision: S2, manageScriptTags: x2, hideFromBots: M2 } = e3;
      g2 === t && (c3.mode = g2), "boolean" == typeof C2 && (c3.autoClearCookies = C2), "boolean" == typeof x2 && (c3.manageScriptTags = x2), "number" == typeof S2 && S2 >= 0 && (c3.revision = S2, r3.V = true), "boolean" == typeof v2 && (c3.autoShow = v2), "boolean" == typeof y2 && (c3.lazyHtmlGeneration = y2), false === M2 && (c3.hideFromBots = false), true === c3.hideFromBots && u2 && (r3.J = u2.userAgent && /bot|crawl|spider|slurp|teoma/i.test(u2.userAgent) || u2.webdriver), h(d2) && (c3.cookie = { ...i3, ...d2 }), c3.autoClearCookies, r3.V, c3.manageScriptTags, ((e4) => {
        const { P: t2, X: o4, Y: n4, Z: a4, B: s2 } = m.o;
        for (let c4 of e4) {
          const e5 = t2[c4], r4 = e5.services || {}, i4 = h(r4) && w(r4) || [];
          o4[c4] = {}, n4[c4] = [], a4[c4] = [], e5.readOnly && (s2.push(c4), n4[c4] = i4), m.ne.se[c4] = {};
          for (let e6 of i4) {
            const t3 = r4[e6];
            t3.Se = false, o4[c4][e6] = t3;
          }
        }
      })(_2), (() => {
        if (!m.t.manageScriptTags)
          return;
        const e4 = m.o, t2 = D(document, "script[" + s + "]");
        for (const o4 of t2) {
          let t3 = N(o4, s), n4 = o4.dataset.service || "", a4 = false;
          if (t3 && "!" === t3.charAt(0) && (t3 = t3.slice(1), a4 = true), "!" === n4.charAt(0) && (n4 = n4.slice(1), a4 = true), b(e4.O, t3) && (e4.oe.push({ Me: o4, xe: false, ke: a4, De: t3, Te: n4 }), n4)) {
            const o5 = e4.X[t3];
            o5[n4] || (o5[n4] = { Se: false });
          }
        }
      })(), we((() => {
        const e4 = m.o.i.language.autoDetect;
        if (e4) {
          const t2 = { browser: navigator.language, document: document.documentElement.lang }, o4 = he(t2[e4]);
          if (o4)
            return o4;
        }
        return Ce();
      })());
    })(e2), o2.J)
      return;
    (() => {
      const e3 = m.o, o3 = m.t, n3 = Ae(), { categories: a3, services: s2, consentId: c3, consentTimestamp: r3, lastConsentTimestamp: i3, data: l2, revision: d2 } = n3, f2 = v(a3);
      e3.p = n3, e3.M = c3;
      const _2 = !!c3 && y(c3);
      e3.C = r3, e3.C && (e3.C = new Date(r3)), e3.S = i3, e3.S && (e3.S = new Date(i3)), e3.h = void 0 !== l2 ? l2 : null, e3.V && _2 && d2 !== o3.revision && (e3.I = false), e3.D = !(_2 && e3.I && e3.C && e3.S && f2), o3.cookie.useLocalStorage && !e3.D && (e3.D = (/* @__PURE__ */ new Date()).getTime() > (n3.expirationTime || 0), e3.D && De(o3.cookie.name)), e3.D, (() => {
        const e4 = m.o;
        for (const o4 of e4.O) {
          const n4 = e4.P[o4];
          if (n4.readOnly || n4.enabled) {
            e4.G.push(o4);
            const n5 = e4.X[o4] || {};
            for (let a4 in n5)
              e4.Z[o4].push(a4), e4.i.mode === t && e4.Y[o4].push(a4);
          }
        }
      })(), e3.D ? o3.mode === t && (e3.R = [...e3.G]) : (e3.Z = { ...e3.Y }, e3.Y = { ...e3.Y, ...s2 }, J([...e3.B, ...a3]));
    })();
    const i2 = We();
    if (!await Se())
      return false;
    if (U(null, r2 = Je, ge, Me), m.o.D && ye(r2, Me), m.t.lazyHtmlGeneration || ge(r2, Me), n2.autoShow && !i2 && Oe(true), i2)
      return oe(), ee(a2.le);
    n2.mode === t && oe(o2.G);
  }
  var r2;
};

// app/components/cookies/CookieConsentConfig.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/cookies/CookieConsentConfig.ts"
  );
  import.meta.hot.lastModified = "1728767387048.1558";
}
var pluginConfig = {
  guiOptions: {
    consentModal: {
      layout: "box",
      position: "bottom right",
      equalWeightButtons: true,
      flipButtons: false
    },
    preferencesModal: {
      layout: "box",
      position: "left",
      equalWeightButtons: true,
      flipButtons: false
    }
  },
  onFirstConsent: function() {
    console.log("onFirstAction fired");
  },
  onConsent: function({ cookie }) {
    console.log("onConsent fired ...");
  },
  onChange: function({ changedCategories, cookie }) {
    console.log("onChange fired ...");
  },
  categories: {
    necessary: {
      readOnly: true,
      enabled: true
    },
    analytics: {
      autoClear: {
        cookies: [
          {
            name: /^(_ga|_gid)/
          }
        ]
      }
    }
  },
  language: {
    default: "en",
    translations: {
      en: {
        consentModal: {
          title: "Hello traveller, it's cookie time!",
          description: 'Our website uses tracking cookies to understand how you interact with it. The tracking will be enabled only if you accept explicitly. <a href="#privacy-policy" data-cc="show-preferencesModal" class="cc__link">Manage preferences</a>',
          acceptAllBtn: "Accept all",
          acceptNecessaryBtn: "Reject all",
          showPreferencesBtn: "Manage preferences",
          //closeIconLabel: 'Close',
          footer: `
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">terms of service</a>
          `
        },
        preferencesModal: {
          title: "Cookie preferences",
          acceptAllBtn: "Accept all",
          acceptNecessaryBtn: "Reject all",
          savePreferencesBtn: "Save preferences",
          closeIconLabel: "Close",
          sections: [
            {
              title: "Cookie Usage",
              description: 'We use cookies to ensure the basic functionalities of our website and to enhance your online experience. You can choose to opt-in or opt-out of each category at any time. For more details about cookies and how we handle your sensitive data, please read our full <a href="/privacy" class="cc__link">privacy policy</a>.'
            },
            {
              title: "Strictly necessary cookies",
              description: "These cookies are essential for the website to function properly. They ensure basic functionalities and security features of the website, anonymously.",
              linkedCategory: "necessary"
            },
            {
              title: "More information",
              description: 'For any queries regarding our policy on cookies and your choices, please <a class="cc__link" href="#hananinas.com">contact us</a>.'
            }
          ]
        }
      }
    }
  }
};
var CookieConsentConfig_default = pluginConfig;

// app/components/cookies/CookieConsent.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/cookies/CookieConsent.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/cookies/CookieConsent.tsx"
  );
}
var CookieConsentComponent = () => {
  _s2();
  (0, import_react6.useEffect)(() => {
    Xe(CookieConsentConfig_default);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { className: "text-xs hover:underline underline-offset-4", href: "#", onClick: Be, children: "Show Cookie Preferences" }, void 0, false, {
    fileName: "app/components/cookies/CookieConsent.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_s2(CookieConsentComponent, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c15 = CookieConsentComponent;
var CookieConsent_default = CookieConsentComponent;
var _c15;
$RefreshReg$(_c15, "CookieConsentComponent");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/footer.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/footer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/footer.tsx"
  );
  import.meta.hot.lastModified = "1728767387048.1558";
}
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("footer", { className: "flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-4 sm:mt-0 flex flex-col md:flex-row items-center gap-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { className: "text-xs hover:underline underline-offset-4", to: "/terms", children: "Terms of Service" }, void 0, false, {
      fileName: "app/components/footer.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { className: "text-xs hover:underline underline-offset-4", to: "/privacy", children: "Privacy Policy" }, void 0, false, {
      fileName: "app/components/footer.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CookieConsent_default, {}, void 0, false, {
      fileName: "app/components/footer.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { className: "text-xs hover:underline underline-offset-4", to: "https://github.com/IBM-Sustainable-Logistics", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex gap-2", children: [
      "View on GitHub ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(GitHub, {}, void 0, false, {
        fileName: "app/components/footer.tsx",
        lineNumber: 38,
        columnNumber: 28
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/footer.tsx",
      lineNumber: 37,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/footer.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { className: "text-xs hover:underline underline-offset-4", to: "https://ibm-sl-api.deno.dev/", children: "Are you a developer ? Try our api" }, void 0, false, {
      fileName: "app/components/footer.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/footer.tsx",
    lineNumber: 27,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/footer.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c16 = Footer;
var _c16;
$RefreshReg$(_c16, "Footer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/lib/supabase.ts
var import_react9 = __toESM(require_react());
import { createBrowserClient } from "https://esm.sh/@supabase/ssr@0.1.0";
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/lib/supabase.ts"
  );
  import.meta.hot.lastModified = "1728767387048.1558";
}
var useSupabase = ({ env, serverSession }) => {
  const [supabase] = (0, import_react9.useState)(
    () => createBrowserClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY)
  );
  const serverAccessToken = serverSession?.access_token;
  const revalidator = useRevalidator();
  (0, import_react9.useEffect)(() => {
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.access_token !== serverAccessToken) {
        revalidator.revalidate();
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [supabase.auth, serverAccessToken, revalidator]);
  return { supabase };
};

// app/root.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: global_default
}, ...cssBundleHref ? [{
  rel: "stylesheet",
  href: cssBundleHref
}] : []];
function App() {
  _s3();
  const {
    env,
    serverSession,
    domainUrl
  } = useLoaderData();
  const {
    supabase
  } = useSupabase({
    env,
    serverSession
  });
  const [openSign, setOpenSign] = import_react11.default.useState(false);
  const [message, setMessage] = import_react11.default.useState("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("link", { href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap", rel: "stylesheet" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(NavBar, { serverSession, supabase }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(MessageDialog, { message, open: openSign, setopen: setOpenSign }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Outlet, { context: {
        supabase,
        domainUrl,
        setOpenSign,
        setMessage
      } }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(LiveReload, { port: 8002 }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Footer, {}, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 102,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 73,
    columnNumber: 10
  }, this);
}
_s3(App, "eM2tdM/jp4Q6QAprbFcEirziLFU=", false, function() {
  return [useLoaderData, useSupabase];
});
_c17 = App;
var _c17;
$RefreshReg$(_c17, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links
};
/*! Bundled license information:

vanilla-cookieconsent/dist/cookieconsent.esm.js:
  (*!
  * CookieConsent 3.0.1
  * https://github.com/orestbida/cookieconsent
  * Author Orest Bida
  * Released under the MIT License
  *)
*/
//# sourceMappingURL=/build/root-BXEEGLRZ.js.map
