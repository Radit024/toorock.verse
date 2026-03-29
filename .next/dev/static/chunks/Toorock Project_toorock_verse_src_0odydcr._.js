(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Toorock Project/toorock.verse/src/lib/utils.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/clsx/dist/clsx.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/tailwind-merge/dist/bundle-mjs.mjs [client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Toorock Project/toorock.verse/src/components/ui/button.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/@radix-ui/react-slot/dist/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/class-variance-authority/dist/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/src/lib/utils.ts [client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/Toorock Project/toorock.verse/src/components/ui/button.tsx",
        lineNumber: 42,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Toorock Project/toorock.verse/src/components/ui/switch.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Switch",
    ()=>Switch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/@radix-ui/react-switch/dist/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/src/lib/utils.ts [client] (ecmascript)");
;
;
;
;
const Switch = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["Root"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"])("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50", className),
        ...props,
        ref: ref,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["Thumb"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")
        }, void 0, false, {
            fileName: "[project]/Toorock Project/toorock.verse/src/components/ui/switch.tsx",
            lineNumber: 18,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Toorock Project/toorock.verse/src/components/ui/switch.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Switch;
Switch.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Switch$React.forwardRef");
__turbopack_context__.k.register(_c1, "Switch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Toorock Project/toorock.verse/src/hooks/use-toast.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reducer",
    ()=>reducer,
    "toast",
    ()=>toast,
    "useToast",
    ()=>useToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/react/index.js [client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;
const actionTypes = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: "REMOVE_TOAST",
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_TOAST":
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case "UPDATE_TOAST":
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case "DISMISS_TOAST":
            {
                const { toastId } = action;
                // ! Side effects ! - This could be extracted into a dismissToast() action,
                // but I'll keep it here for simplicity
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach((toast)=>{
                        addToRemoveQueue(toast.id);
                    });
                }
                return {
                    ...state,
                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {
                            ...t,
                            open: false
                        } : t)
                };
            }
        case "REMOVE_TOAST":
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
    }
};
const listeners = [];
let memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast({ ...props }) {
    const id = genId();
    const update = (props)=>dispatch({
            type: "UPDATE_TOAST",
            toast: {
                ...props,
                id
            }
        });
    const dismiss = ()=>dispatch({
            type: "DISMISS_TOAST",
            toastId: id
        });
    dispatch({
        type: "ADD_TOAST",
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open)=>{
                if (!open) dismiss();
            }
        }
    });
    return {
        id: id,
        dismiss,
        update
    };
}
function useToast() {
    _s();
    const [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](memoryState);
    __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useToast.useEffect": ()=>{
            listeners.push(setState);
            return ({
                "useToast.useEffect": ()=>{
                    const index = listeners.indexOf(setState);
                    if (index > -1) {
                        listeners.splice(index, 1);
                    }
                }
            })["useToast.useEffect"];
        }
    }["useToast.useEffect"], [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: "DISMISS_TOAST",
                toastId
            })
    };
}
_s(useToast, "SPWE98mLGnlsnNfIwu/IAKTSZtk=");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Toorock Project/toorock.verse/src/components/PageTransition.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [client] (ecmascript)");
;
;
const PageTransition = ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 12
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: -12
        },
        transition: {
            duration: 0.25,
            ease: "easeOut"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Toorock Project/toorock.verse/src/components/PageTransition.tsx",
        lineNumber: 4,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = PageTransition;
const __TURBOPACK__default__export__ = PageTransition;
var _c;
__turbopack_context__.k.register(_c, "PageTransition");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Toorock Project/toorock.verse/src/components/ThemeToggle.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/moon.js [client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/sun.js [client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/react/index.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const ThemeToggle = ()=>{
    _s();
    const [dark, setDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        "ThemeToggle.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                return localStorage.getItem("theme") === "dark";
            }
            //TURBOPACK unreachable
            ;
        }
    }["ThemeToggle.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            const root = document.documentElement;
            if (dark) {
                root.classList.add("dark");
                localStorage.setItem("theme", "dark");
            } else {
                root.classList.remove("dark");
                localStorage.setItem("theme", "light");
            }
        }
    }["ThemeToggle.useEffect"], [
        dark
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>setDark(!dark),
        className: "p-2 border border-border hover:border-primary text-muted-foreground hover:text-primary transition-colors",
        "aria-label": "Toggle theme",
        children: dark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
            className: "h-3.5 w-3.5"
        }, void 0, false, {
            fileName: "[project]/Toorock Project/toorock.verse/src/components/ThemeToggle.tsx",
            lineNumber: 29,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
            className: "h-3.5 w-3.5"
        }, void 0, false, {
            fileName: "[project]/Toorock Project/toorock.verse/src/components/ThemeToggle.tsx",
            lineNumber: 29,
            columnNumber: 49
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Toorock Project/toorock.verse/src/components/ThemeToggle.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ThemeToggle, "ubYH9NP60Ad3o4rafkp8kcpADXw=");
_c = ThemeToggle;
const __TURBOPACK__default__export__ = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Toorock Project/toorock.verse/src/integrations/supabase/client.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
// This file is automatically generated. Do not edit it directly.
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/@supabase/supabase-js/dist/index.mjs [client] (ecmascript) <locals>");
;
const SUPABASE_URL = ("TURBOPACK compile-time value", "https://bchzbsarfgznlllzupff.supabase.co") ?? __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.VITE_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = ("TURBOPACK compile-time value", "sb_publishable_EzHYl459cwhtVvKstWMw2g_zri-VEjg") ?? __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.VITE_SUPABASE_PUBLISHABLE_KEY;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: {
        storage: localStorage,
        persistSession: true,
        autoRefreshToken: true
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Toorock Project/toorock.verse/src/components/ImageUpload.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/upload.js [client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/x.js [client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/loader-circle.js [client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/src/integrations/supabase/client.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/src/hooks/use-toast.ts [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const ImageUpload = ({ value, onChange, onUploaded })=>{
    _s();
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dragOver, setDragOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const uploadFile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageUpload.useCallback[uploadFile]": async (file)=>{
            if (!file.type.startsWith("image/")) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toast"])({
                    title: "Error",
                    description: "Please select an image file",
                    variant: "destructive"
                });
                return;
            }
            if (file.size > 2 * 1024 * 1024) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toast"])({
                    title: "Error",
                    description: "Image must be under 2MB",
                    variant: "destructive"
                });
                return;
            }
            setUploading(true);
            const ext = file.name.split(".").pop();
            const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].storage.from("article-images").upload(path, file);
            if (error) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toast"])({
                    title: "Upload failed",
                    description: error.message,
                    variant: "destructive"
                });
                setUploading(false);
                return;
            }
            const { data: urlData } = __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].storage.from("article-images").getPublicUrl(path);
            onChange(urlData.publicUrl);
            onUploaded?.(urlData.publicUrl);
            setUploading(false);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Uploaded",
                description: "Image ready"
            });
        }
    }["ImageUpload.useCallback[uploadFile]"], [
        onChange,
        onUploaded
    ]);
    const handleFileChange = (e)=>{
        const file = e.target.files?.[0];
        if (file) uploadFile(file);
    };
    const handleDrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageUpload.useCallback[handleDrop]": (e)=>{
            e.preventDefault();
            setDragOver(false);
            const file = e.dataTransfer.files?.[0];
            if (file) uploadFile(file);
        }
    }["ImageUpload.useCallback[handleDrop]"], [
        uploadFile
    ]);
    const handleDragOver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageUpload.useCallback[handleDragOver]": (e)=>{
            e.preventDefault();
            setDragOver(true);
        }
    }["ImageUpload.useCallback[handleDragOver]"], []);
    const handleDragLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageUpload.useCallback[handleDragLeave]": (e)=>{
            e.preventDefault();
            setDragOver(false);
        }
    }["ImageUpload.useCallback[handleDragLeave]"], []);
    const handleClear = ()=>{
        onChange("");
        if (inputRef.current) inputRef.current.value = "";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "font-meta text-[10px] uppercase tracking-wider text-muted-foreground block",
                children: "Image"
            }, void 0, false, {
                fileName: "[project]/Toorock Project/toorock.verse/src/components/ImageUpload.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            value ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative inline-block",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: value,
                        alt: "Preview",
                        className: "w-full max-w-xs h-32 object-cover border border-border"
                    }, void 0, false, {
                        fileName: "[project]/Toorock Project/toorock.verse/src/components/ImageUpload.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleClear,
                        className: "absolute top-1 right-1 bg-background/80 p-1 border border-border hover:bg-destructive hover:text-destructive-foreground transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "h-3 w-3"
                        }, void 0, false, {
                            fileName: "[project]/Toorock Project/toorock.verse/src/components/ImageUpload.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Toorock Project/toorock.verse/src/components/ImageUpload.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Toorock Project/toorock.verse/src/components/ImageUpload.tsx",
                lineNumber: 79,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onDrop: handleDrop,
                onDragOver: handleDragOver,
                onDragLeave: handleDragLeave,
                onClick: ()=>inputRef.current?.click(),
                className: `w-full max-w-xs h-32 border-2 border-dashed bg-secondary flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors ${dragOver ? "border-primary bg-primary/5" : "border-border hover:border-primary"} ${uploading ? "opacity-50 pointer-events-none" : ""}`,
                children: uploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "h-5 w-5 text-muted-foreground animate-spin"
                }, void 0, false, {
                    fileName: "[project]/Toorock Project/toorock.verse/src/components/ImageUpload.tsx",
                    lineNumber: 102,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                            className: `h-5 w-5 ${dragOver ? "text-primary" : "text-muted-foreground"}`
                        }, void 0, false, {
                            fileName: "[project]/Toorock Project/toorock.verse/src/components/ImageUpload.tsx",
                            lineNumber: 105,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-meta text-[10px] uppercase tracking-wider text-muted-foreground text-center px-4",
                            children: dragOver ? "Drop image here" : "Drag & drop or click to upload"
                        }, void 0, false, {
                            fileName: "[project]/Toorock Project/toorock.verse/src/components/ImageUpload.tsx",
                            lineNumber: 106,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/Toorock Project/toorock.verse/src/components/ImageUpload.tsx",
                lineNumber: 90,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: inputRef,
                type: "file",
                accept: "image/*",
                onChange: handleFileChange,
                className: "hidden"
            }, void 0, false, {
                fileName: "[project]/Toorock Project/toorock.verse/src/components/ImageUpload.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                value: value,
                onChange: (e)=>onChange(e.target.value),
                className: "w-full bg-secondary border border-border px-3 py-2 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary",
                placeholder: "Or paste image URL..."
            }, void 0, false, {
                fileName: "[project]/Toorock Project/toorock.verse/src/components/ImageUpload.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Toorock Project/toorock.verse/src/components/ImageUpload.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ImageUpload, "c4/DG5/Y59Tc/S0k/5FSuqtYFVw=");
_c = ImageUpload;
const __TURBOPACK__default__export__ = ImageUpload;
var _c;
__turbopack_context__.k.register(_c, "ImageUpload");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Toorock Project/toorock.verse/src/lib/api.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addCollaborator",
    ()=>addCollaborator,
    "createArticle",
    ()=>createArticle,
    "dbToArticle",
    ()=>dbToArticle,
    "deleteArticle",
    ()=>deleteArticle,
    "deleteStorageFilesByUrls",
    ()=>deleteStorageFilesByUrls,
    "extractStoragePathFromUrl",
    ()=>extractStoragePathFromUrl,
    "fetchAdminUploadLeaderboard",
    ()=>fetchAdminUploadLeaderboard,
    "fetchAdminUploaderCategoryOverview",
    ()=>fetchAdminUploaderCategoryOverview,
    "fetchAllArticles",
    ()=>fetchAllArticles,
    "fetchArticleBySlug",
    ()=>fetchArticleBySlug,
    "fetchArticleCollaborationInvites",
    ()=>fetchArticleCollaborationInvites,
    "fetchArticleCollaborators",
    ()=>fetchArticleCollaborators,
    "fetchMyCollaborationInvites",
    ()=>fetchMyCollaborationInvites,
    "fetchPublishedArticles",
    ()=>fetchPublishedArticles,
    "inviteCollaborator",
    ()=>inviteCollaborator,
    "removeCollaborator",
    ()=>removeCollaborator,
    "respondToCollaborationInvite",
    ()=>respondToCollaborationInvite,
    "updateArticle",
    ()=>updateArticle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/src/integrations/supabase/client.ts [client] (ecmascript)");
;
const ARTICLE_IMAGE_BUCKET = "article-images";
const LIST_ARTICLE_COLUMNS = [
    "id",
    "slug",
    "title",
    "category",
    "categories",
    "image_url",
    "author_name",
    "author_role",
    "author_avatar",
    "author_bio",
    "read_time",
    "is_breaking",
    "owner_id",
    "published",
    "created_at",
    "updated_at"
].join(",");
const FULL_ARTICLE_COLUMNS = `${LIST_ARTICLE_COLUMNS},content`;
const isRecoverableRpcError = (message, fnName)=>{
    const lower = message.toLowerCase();
    return lower.includes(fnName.toLowerCase()) || lower.includes("schema cache") || lower.includes("structure of query does not match function result type");
};
const fetchPublishedArticles = async (options)=>{
    const selectColumns = options?.includeContent ? FULL_ARTICLE_COLUMNS : LIST_ARTICLE_COLUMNS;
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from("articles").select(selectColumns).eq("published", true).order("created_at", {
        ascending: false
    });
    if (error) throw new Error(error.message);
    return data ?? [];
};
const fetchAllArticles = async ()=>{
    const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
    if (!user) throw new Error("Not logged in");
    const { data: collabRows, error: collabError } = await __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from("article_collaborators").select("article_id").eq("collaborator_id", user.id);
    if (collabError) throw new Error(collabError.message);
    const collaboratorArticleIds = Array.from(new Set((collabRows ?? []).map((row)=>row.article_id).filter(Boolean)));
    const collaboratorIdClause = collaboratorArticleIds.length > 0 ? `,id.in.(${collaboratorArticleIds.join(",")})` : "";
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from("articles").select("*").or(`owner_id.eq.${user.id}${collaboratorIdClause}`).order("created_at", {
        ascending: false
    });
    if (error) throw new Error(error.message);
    return data ?? [];
};
const fetchArticleBySlug = async (slug)=>{
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from("articles").select(FULL_ARTICLE_COLUMNS).eq("slug", slug).eq("published", true).single();
    if (error) return null;
    return data;
};
const createArticle = async (article)=>{
    const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
    // Never trust incoming owner_id from caller.
    const articleData = {
        ...article,
        owner_id: user?.id || null
    };
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from("articles").insert(articleData).select().single();
    if (error) throw new Error(error.message);
    return data;
};
const updateArticle = async (id, updates)=>{
    const safeUpdates = {
        ...updates
    };
    // Ownership is immutable from frontend updates.
    delete safeUpdates.owner_id;
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from("articles").update(safeUpdates).eq("id", id).select().single();
    if (error) throw new Error(error.message);
    return data;
};
const deleteArticle = async (id)=>{
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from("articles").delete().eq("id", id);
    if (error) throw new Error(error.message);
};
const extractStoragePathFromUrl = (url, bucket = ARTICLE_IMAGE_BUCKET)=>{
    try {
        const parsed = new URL(url);
        const marker = `/storage/v1/object/public/${bucket}/`;
        const idx = parsed.pathname.indexOf(marker);
        if (idx === -1) return null;
        const encodedPath = parsed.pathname.slice(idx + marker.length);
        if (!encodedPath) return null;
        return decodeURIComponent(encodedPath);
    } catch  {
        return null;
    }
};
const deleteStorageFilesByUrls = async (urls)=>{
    const uniquePaths = Array.from(new Set(urls.map((url)=>extractStoragePathFromUrl(url)).filter((p)=>!!p)));
    if (uniquePaths.length === 0) return;
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].storage.from(ARTICLE_IMAGE_BUCKET).remove(uniquePaths);
    if (error) throw new Error(error.message);
};
const fetchArticleCollaborators = async (articleId)=>{
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].rpc("list_article_collaborators", {
        p_article_id: articleId
    });
    if (!error) {
        return data ?? [];
    }
    const recoverableRpc = isRecoverableRpcError(error.message, "list_article_collaborators");
    if (!recoverableRpc) {
        throw new Error(error.message);
    }
    // Fallback for projects where DB migration is not applied yet.
    const { data: fallbackData, error: fallbackError } = await __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from("article_collaborators").select("collaborator_id, created_at").eq("article_id", articleId).order("created_at", {
        ascending: false
    });
    if (fallbackError) throw new Error(fallbackError.message);
    return (fallbackData ?? []).map((item)=>({
            collaborator_id: item.collaborator_id,
            email: item.collaborator_id,
            added_at: item.created_at
        }));
};
const addCollaborator = async (articleId, email)=>{
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].rpc("add_article_collaborator", {
        p_article_id: articleId,
        p_email: email
    });
    if (error) throw new Error(error.message);
};
const removeCollaborator = async (articleId, collaboratorId)=>{
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].rpc("remove_article_collaborator", {
        p_article_id: articleId,
        p_collaborator_id: collaboratorId
    });
    if (error) throw new Error(error.message);
};
const inviteCollaborator = async (articleId, inviteeId)=>{
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].rpc("invite_article_collaborator", {
        p_article_id: articleId,
        p_invitee_id: inviteeId
    });
    if (error) throw new Error(error.message);
};
const fetchArticleCollaborationInvites = async (articleId)=>{
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].rpc("list_article_collaboration_invites", {
        p_article_id: articleId
    });
    if (!error) {
        return data ?? [];
    }
    const recoverableRpc = isRecoverableRpcError(error.message, "list_article_collaboration_invites");
    if (!recoverableRpc) throw new Error(error.message);
    const { data: fallbackData, error: fallbackError } = await __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from("article_collaboration_invites").select("id, invitee_id, status, created_at, responded_at").eq("article_id", articleId).order("created_at", {
        ascending: false
    });
    if (fallbackError) throw new Error(fallbackError.message);
    return (fallbackData ?? []).map((item)=>({
            invite_id: item.id,
            invitee_id: item.invitee_id,
            invitee_email: item.invitee_id,
            status: item.status,
            created_at: item.created_at,
            responded_at: item.responded_at
        }));
};
const fetchMyCollaborationInvites = async ()=>{
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].rpc("list_my_collaboration_invites");
    if (!error) {
        return data ?? [];
    }
    const recoverableRpc = isRecoverableRpcError(error.message, "list_my_collaboration_invites");
    if (!recoverableRpc) throw new Error(error.message);
    const { data: fallbackData, error: fallbackError } = await __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from("article_collaboration_invites").select("id, article_id, inviter_id, created_at, status, articles(id, slug, title)").eq("invitee_id", (await __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser()).data.user?.id ?? "").eq("status", "pending").order("created_at", {
        ascending: false
    });
    if (fallbackError) throw new Error(fallbackError.message);
    return (fallbackData ?? []).map((item)=>{
        const article = Array.isArray(item.articles) ? item.articles[0] : item.articles;
        return {
            invite_id: item.id,
            article_id: item.article_id,
            article_slug: article?.slug ?? item.article_id,
            article_title: article?.title ?? "Untitled Article",
            inviter_id: item.inviter_id,
            inviter_email: item.inviter_id,
            created_at: item.created_at,
            status: item.status
        };
    });
};
const respondToCollaborationInvite = async (inviteId, action)=>{
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].rpc("respond_article_collaboration_invite", {
        p_invite_id: inviteId,
        p_action: action
    });
    if (error) throw new Error(error.message);
};
const fetchAdminUploadLeaderboard = async ()=>{
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].rpc("admin_upload_leaderboard");
    if (!error) {
        const normalized = (data ?? []).map((row)=>({
                user_id: row.user_id,
                display_name: row.display_name ?? row.email ?? row.user_id,
                registered_at: row.registered_at,
                total_articles: Number(row.total_articles ?? 0),
                published_articles: Number(row.published_articles ?? 0),
                draft_articles: Number(row.draft_articles ?? 0),
                last_upload_at: row.last_upload_at ?? null
            }));
        return sortLeaderboardRows(normalized);
    }
    const missingRpc = error.message.includes("admin_upload_leaderboard") || error.message.includes("schema cache");
    if (!missingRpc) {
        throw new Error(error.message);
    }
    // Fallback for projects where DB migration is not applied yet.
    // We aggregate from visible articles so leaderboard still syncs across accounts
    // (at least for records current user is allowed to read by RLS).
    const { data: userData, error: userError } = await __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
    if (userError) throw new Error(userError.message);
    if (!userData.user) return [];
    const { data: articleRows, error: articleError } = await __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from("articles").select("owner_id, published, created_at, author_name");
    if (articleError) throw new Error(articleError.message);
    const grouped = new Map();
    for (const row of articleRows ?? []){
        if (!row.owner_id) continue;
        const existing = grouped.get(row.owner_id);
        const inferredDisplay = row.author_name?.trim() || `Editor ${row.owner_id.slice(0, 8)}`;
        if (!existing) {
            grouped.set(row.owner_id, {
                user_id: row.owner_id,
                display_name: row.owner_id === userData.user.id ? userData.user.user_metadata?.name || (userData.user.email?.split("@")[0] ?? inferredDisplay) : inferredDisplay,
                registered_at: row.owner_id === userData.user.id ? userData.user.created_at : row.created_at,
                total_articles: 1,
                published_articles: row.published ? 1 : 0,
                draft_articles: row.published ? 0 : 1,
                last_upload_at: row.created_at
            });
            continue;
        }
        existing.total_articles += 1;
        if (row.published) existing.published_articles += 1;
        else existing.draft_articles += 1;
        if (!existing.last_upload_at || row.created_at > existing.last_upload_at) {
            existing.last_upload_at = row.created_at;
        }
    }
    if (!grouped.has(userData.user.id)) {
        grouped.set(userData.user.id, {
            user_id: userData.user.id,
            display_name: userData.user.user_metadata?.name || (userData.user.email?.split("@")[0] ?? userData.user.id),
            registered_at: userData.user.created_at,
            total_articles: 0,
            published_articles: 0,
            draft_articles: 0,
            last_upload_at: null
        });
    }
    return sortLeaderboardRows(Array.from(grouped.values()));
};
const fetchAdminUploaderCategoryOverview = async (userId)=>{
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from("articles").select("category, published, created_at").eq("owner_id", userId);
    if (error) throw new Error(error.message);
    const grouped = new Map();
    for (const row of data ?? []){
        const category = row.category?.trim() || "Uncategorized";
        const current = grouped.get(category);
        if (!current) {
            grouped.set(category, {
                category,
                total_articles: 1,
                published_articles: row.published ? 1 : 0,
                draft_articles: row.published ? 0 : 1,
                last_upload_at: row.created_at
            });
            continue;
        }
        current.total_articles += 1;
        if (row.published) current.published_articles += 1;
        else current.draft_articles += 1;
        if (!current.last_upload_at || row.created_at > current.last_upload_at) {
            current.last_upload_at = row.created_at;
        }
    }
    return [
        ...grouped.values()
    ].sort((a, b)=>{
        if (b.total_articles !== a.total_articles) return b.total_articles - a.total_articles;
        if (b.published_articles !== a.published_articles) return b.published_articles - a.published_articles;
        if ((b.last_upload_at ?? "") !== (a.last_upload_at ?? "")) return (b.last_upload_at ?? "").localeCompare(a.last_upload_at ?? "");
        return a.category.localeCompare(b.category);
    });
};
function sortLeaderboardRows(rows) {
    return [
        ...rows
    ].sort((a, b)=>{
        if (b.total_articles !== a.total_articles) return b.total_articles - a.total_articles;
        if (b.published_articles !== a.published_articles) return b.published_articles - a.published_articles;
        if ((b.last_upload_at ?? "") !== (a.last_upload_at ?? "")) return (b.last_upload_at ?? "").localeCompare(a.last_upload_at ?? "");
        return (a.registered_at ?? "").localeCompare(b.registered_at ?? "");
    });
}
const dbToArticle = (db)=>({
        id: db.slug || db.id,
        image: db.image_url || "",
        title: db.title,
        category: db.categories?.[0] || db.category,
        categories: db.categories?.length ? db.categories : [
            db.category
        ],
        date: formatRelativeDate(db.created_at),
        isBreaking: db.is_breaking,
        author: {
            name: db.author_name,
            role: db.author_role,
            avatar: db.author_avatar,
            bio: db.author_bio
        },
        readTime: db.read_time,
        content: db.content ?? []
    });
function formatRelativeDate(dateStr) {
    const now = new Date();
    const date = new Date(dateStr);
    const diffMs = now.getTime() - date.getTime();
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
    if (diffHrs < 1) return "Just now";
    if (diffHrs < 24) return `${diffHrs} hours ago`;
    const diffDays = Math.floor(diffHrs / 24);
    if (diffDays === 1) return "1 day ago";
    return `${diffDays} days ago`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/react-router-dom/dist/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/react-router/dist/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/plus.js [client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/pencil.js [client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/trash-2.js [client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/eye.js [client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/eye-off.js [client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/arrow-left.js [client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/zap.js [client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/search.js [client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/filter.js [client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/chart-column.js [client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/file-text.js [client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/circle-check.js [client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/circle-alert.js [client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/external-link.js [client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/chevron-down.js [client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/chevron-up.js [client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/x.js [client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/copy.js [client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/chevron-left.js [client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/chevron-right.js [client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/arrow-up.js [client] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/arrow-down.js [client] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/activity.js [client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/globe.js [client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$align$2d$left$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignLeft$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/align-left.js [client] (ecmascript) <export default as AlignLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/menu.js [client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/image.js [client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/bell.js [client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$1$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading1$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/heading-1.js [client] (ecmascript) <export default as Heading1>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$2$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading2$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/heading-2.js [client] (ecmascript) <export default as Heading2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/quote.js [client] (ecmascript) <export default as Quote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pilcrow$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pilcrow$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/pilcrow.js [client] (ecmascript) <export default as Pilcrow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/log-out.js [client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$user$2d$round$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCircle2$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/circle-user-round.js [client] (ecmascript) <export default as UserCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/user.js [client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/user-plus.js [client] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bold$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bold$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/bold.js [client] (ecmascript) <export default as Bold>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$table$2d$2$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table2$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/table-2.js [client] (ecmascript) <export default as Table2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$italic$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Italic$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/italic.js [client] (ecmascript) <export default as Italic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$underline$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Underline$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/underline.js [client] (ecmascript) <export default as Underline>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$strikethrough$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Strikethrough$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/strikethrough.js [client] (ecmascript) <export default as Strikethrough>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/code-xml.js [client] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/list.js [client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/grip-vertical.js [client] (ecmascript) <export default as GripVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/src/components/ui/button.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/src/components/ui/switch.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/src/hooks/use-toast.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$components$2f$PageTransition$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/src/components/PageTransition.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$components$2f$ThemeToggle$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/src/components/ThemeToggle.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$components$2f$ImageUpload$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/src/components/ImageUpload.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/src/integrations/supabase/client.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$lib$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/src/lib/api.ts [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
;
const CATEGORIES = [
    "Anime",
    "Games",
    "Esports",
    "Culture",
    "Movies",
    "Tech",
    "Reviews"
];
const PAGE_SIZE = 12;
const emptyForm = {
    slug: "",
    title: "",
    category: "Anime",
    categories: [
        "Anime"
    ],
    image_url: "",
    author_name: "",
    author_role: "Editor",
    author_avatar: "",
    author_bio: "",
    read_time: "3 min read",
    is_breaking: false,
    owner_id: null,
    content: [
        ""
    ],
    published: false
};
const ACTION_COLOR = {
    created: "text-green-500",
    updated: "text-blue-400",
    deleted: "text-destructive",
    published: "text-green-500",
    unpublished: "text-muted-foreground",
    duplicated: "text-primary"
};
const TABLE_BLOCK_PREFIX = "::table::";
const BULLETS_BLOCK_PREFIX = "::bullets::";
const BLOCK_HISTORY_LIMIT = 80;
const INLINE_WRAPPERS = {
    bold: {
        open: "**",
        close: "**",
        sample: "bold"
    },
    italic: {
        open: "*",
        close: "*",
        sample: "italic"
    },
    underline: {
        open: "__",
        close: "__",
        sample: "underline"
    },
    strike: {
        open: "~~",
        close: "~~",
        sample: "strike"
    },
    code: {
        open: "`",
        close: "`",
        sample: "code"
    }
};
function getErrorMessage(error) {
    return error instanceof Error ? error.message : String(error);
}
function parseInlineFormatting(text) {
    const withLineBreaks = (value, keyPrefix)=>{
        const lines = value.split("\n");
        return lines.flatMap((line, idx)=>{
            if (idx === 0) return [
                line
            ];
            return [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, `${keyPrefix}-br-${idx}`, false, {
                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                    lineNumber: 105,
                    columnNumber: 15
                }, this),
                line
            ];
        });
    };
    const chunks = text.split(/(\*\*[^*]+\*\*|__[^_]+__|~~[^~]+~~|`[^`]+`|\*[^*]+\*)/g);
    return chunks.map((chunk, i)=>{
        if (chunk.startsWith("**") && chunk.endsWith("**") && chunk.length > 4) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                className: "font-semibold text-foreground",
                children: withLineBreaks(chunk.slice(2, -2), `b-${i}`)
            }, i, false, {
                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                lineNumber: 112,
                columnNumber: 14
            }, this);
        }
        if (chunk.startsWith("__") && chunk.endsWith("__") && chunk.length > 4) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "underline decoration-2 underline-offset-2",
                children: withLineBreaks(chunk.slice(2, -2), `u-${i}`)
            }, i, false, {
                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                lineNumber: 115,
                columnNumber: 14
            }, this);
        }
        if (chunk.startsWith("~~") && chunk.endsWith("~~") && chunk.length > 4) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "line-through opacity-80",
                children: withLineBreaks(chunk.slice(2, -2), `s-${i}`)
            }, i, false, {
                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                lineNumber: 118,
                columnNumber: 14
            }, this);
        }
        if (chunk.startsWith("`") && chunk.endsWith("`") && chunk.length > 2) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                className: "font-mono text-[0.92em] px-1 py-0.5 bg-secondary border border-border",
                children: withLineBreaks(chunk.slice(1, -1), `c-${i}`)
            }, i, false, {
                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                lineNumber: 121,
                columnNumber: 14
            }, this);
        }
        if (chunk.startsWith("*") && chunk.endsWith("*") && chunk.length > 2) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                className: "italic",
                children: withLineBreaks(chunk.slice(1, -1), `i-${i}`)
            }, i, false, {
                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                lineNumber: 124,
                columnNumber: 14
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: withLineBreaks(chunk, `p-${i}`)
        }, i, false, {
            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
            lineNumber: 126,
            columnNumber: 12
        }, this);
    });
}
function parseTableRows(raw) {
    return raw.split("\n").map((line)=>line.trim()).filter(Boolean).map((line)=>line.split("|").map((cell)=>cell.trim()));
}
function contentToBlocks(content) {
    const items = content.filter((s)=>s !== undefined);
    if (items.length === 0) return [
        {
            id: crypto.randomUUID(),
            type: "text",
            value: ""
        }
    ];
    return items.map((item)=>{
        const id = crypto.randomUUID();
        if (item.startsWith(TABLE_BLOCK_PREFIX)) return {
            id,
            type: "table",
            value: item.slice(TABLE_BLOCK_PREFIX.length)
        };
        if (item.startsWith(BULLETS_BLOCK_PREFIX)) return {
            id,
            type: "bullets",
            value: item.slice(BULLETS_BLOCK_PREFIX.length)
        };
        if (item.startsWith("## ")) return {
            id,
            type: "heading",
            value: item.slice(3)
        };
        if (item.startsWith("### ")) return {
            id,
            type: "subheading",
            value: item.slice(4)
        };
        if (item.startsWith("> ")) return {
            id,
            type: "quote",
            value: item.slice(2)
        };
        if (/^https?:\/\//.test(item)) return {
            id,
            type: "image",
            value: item
        };
        return {
            id,
            type: "text",
            value: item
        };
    });
}
function blocksToContent(blockList) {
    return blockList.map((b)=>{
        if (b.type === "table") return `${TABLE_BLOCK_PREFIX}${b.value}`;
        if (b.type === "bullets") return `${BULLETS_BLOCK_PREFIX}${b.value}`;
        if (b.type === "heading") return `## ${b.value}`;
        if (b.type === "subheading") return `### ${b.value}`;
        if (b.type === "quote") return `> ${b.value}`;
        return b.value;
    }).filter((s)=>s.trim() !== "");
}
function cloneBlocks(blockList) {
    return blockList.map((b)=>({
            ...b
        }));
}
const AdminDashboard = ()=>{
    _s();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNavigate"])();
    const [checked, setChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [authed, setAuthed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminDashboard.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].auth.getSession().then({
                "AdminDashboard.useEffect": ({ data })=>{
                    if (!data.session) {
                        navigate("/admin/login", {
                            replace: true
                        });
                    } else {
                        setAuthed(true);
                    }
                    setChecked(true);
                }
            }["AdminDashboard.useEffect"]);
        }
    }["AdminDashboard.useEffect"], [
        navigate
    ]);
    if (!checked || !authed) return null;
    const handleLogout = async ()=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
        navigate("/admin/login", {
            replace: true
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdminDashboardContent, {
        onLogout: handleLogout
    }, void 0, false, {
        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
        lineNumber: 191,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AdminDashboard, "bld4D8ELMU9d2vWydEDyOnk8+WE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNavigate"]
    ];
});
_c = AdminDashboard;
const AdminDashboardContent = ({ onLogout })=>{
    _s1();
    const [articles, setArticles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [collaboratorsMap, setCollaboratorsMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [invitesMap, setInvitesMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [incomingInvites, setIncomingInvites] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [availableEditors, setAvailableEditors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentUserId, setCurrentUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [collabArticle, setCollabArticle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [collabOpen, setCollabOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [collabEmailInput, setCollabEmailInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [collabLoading, setCollabLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [inviteActionId, setInviteActionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("overview");
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(emptyForm);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [refreshing, setRefreshing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDirty, setIsDirty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activityLog, setActivityLog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [previewOpen, setPreviewOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const blockEditorRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const blockPreviewRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const draggedBlockIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sessionUploadedImageUrlsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const [blocks, setBlocks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: crypto.randomUUID(),
            type: "text",
            value: ""
        }
    ]);
    const blockHistoryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])({
        undo: [],
        redo: []
    });
    const [dragOverBlockId, setDragOverBlockId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [focusedBlockId, setFocusedBlockId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // profile
    const [profileOpen, setProfileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userEmail, setUserEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        role: "Editor",
        avatar: "",
        bio: ""
    });
    const [profileSaving, setProfileSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminDashboardContent.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser().then({
                "AdminDashboardContent.useEffect": ({ data })=>{
                    if (!data.user) return;
                    setCurrentUserId(data.user.id);
                    setUserEmail(data.user.email ?? "");
                    const m = data.user.user_metadata ?? {};
                    setProfile({
                        name: m.name ?? "",
                        role: m.role ?? "Editor",
                        avatar: m.avatar ?? "",
                        bio: m.bio ?? ""
                    });
                }
            }["AdminDashboardContent.useEffect"]);
        }
    }["AdminDashboardContent.useEffect"], []);
    const saveProfile = async ()=>{
        setProfileSaving(true);
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].auth.updateUser({
            data: profile
        });
        if (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Error",
                description: error.message,
                variant: "destructive"
            });
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Profile saved"
            });
        }
        setProfileSaving(false);
    };
    // list filters
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [filterCategory, setFilterCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [filterStatus, setFilterStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [sortField, setSortField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("created_at");
    const [sortDir, setSortDir] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("desc");
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const logAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AdminDashboardContent.useCallback[logAction]": (action, title)=>{
            setActivityLog({
                "AdminDashboardContent.useCallback[logAction]": (prev)=>[
                        {
                            id: crypto.randomUUID(),
                            action,
                            title,
                            timestamp: new Date()
                        },
                        ...prev.slice(0, 49)
                    ]
            }["AdminDashboardContent.useCallback[logAction]"]);
        }
    }["AdminDashboardContent.useCallback[logAction]"], []);
    const isOwner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AdminDashboardContent.useCallback[isOwner]": (article)=>{
            return !!currentUserId && article.owner_id === currentUserId;
        }
    }["AdminDashboardContent.useCallback[isOwner]"], [
        currentUserId
    ]);
    const getArticleCategories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AdminDashboardContent.useCallback[getArticleCategories]": (article)=>{
            return article.categories && article.categories.length > 0 ? article.categories : [
                article.category
            ];
        }
    }["AdminDashboardContent.useCallback[getArticleCategories]"], []);
    const loadCollaborators = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AdminDashboardContent.useCallback[loadCollaborators]": async (articleId)=>{
            const list = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$lib$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fetchArticleCollaborators"])(articleId);
            setCollaboratorsMap({
                "AdminDashboardContent.useCallback[loadCollaborators]": (prev)=>({
                        ...prev,
                        [articleId]: list
                    })
            }["AdminDashboardContent.useCallback[loadCollaborators]"]);
        }
    }["AdminDashboardContent.useCallback[loadCollaborators]"], []);
    const loadArticleInvites = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AdminDashboardContent.useCallback[loadArticleInvites]": async (articleId)=>{
            const list = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$lib$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fetchArticleCollaborationInvites"])(articleId);
            setInvitesMap({
                "AdminDashboardContent.useCallback[loadArticleInvites]": (prev)=>({
                        ...prev,
                        [articleId]: list
                    })
            }["AdminDashboardContent.useCallback[loadArticleInvites]"]);
        }
    }["AdminDashboardContent.useCallback[loadArticleInvites]"], []);
    const loadIncomingInvites = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AdminDashboardContent.useCallback[loadIncomingInvites]": async ()=>{
            try {
                const list = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$lib$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fetchMyCollaborationInvites"])();
                setIncomingInvites(list.filter({
                    "AdminDashboardContent.useCallback[loadIncomingInvites]": (item)=>item.status === "pending"
                }["AdminDashboardContent.useCallback[loadIncomingInvites]"]));
            } catch (err) {
                const msg = err instanceof Error ? err.message : String(err);
                console.error("[AdminDashboard] fetchMyCollaborationInvites error:", msg);
            }
        }
    }["AdminDashboardContent.useCallback[loadIncomingInvites]"], []);
    const loadInviteCandidates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AdminDashboardContent.useCallback[loadInviteCandidates]": async ()=>{
            try {
                const list = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$lib$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fetchAdminUploadLeaderboard"])();
                setAvailableEditors(list);
            } catch (err) {
                const msg = err instanceof Error ? err.message : String(err);
                console.error("[AdminDashboard] fetchAdminUploadLeaderboard error:", msg);
                setAvailableEditors([]);
            }
        }
    }["AdminDashboardContent.useCallback[loadInviteCandidates]"], []);
    const handleManageCollaborators = async (article)=>{
        if (!isOwner(article)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Owner only",
                description: "Only article owner can manage collaborators.",
                variant: "destructive"
            });
            return;
        }
        try {
            setCollabArticle(article);
            setCollabEmailInput("");
            setCollabOpen(true);
            setCollabLoading(true);
            await Promise.all([
                loadCollaborators(article.id),
                loadArticleInvites(article.id),
                loadInviteCandidates()
            ]);
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Failed to load collaborators",
                description: getErrorMessage(error),
                variant: "destructive"
            });
        } finally{
            setCollabLoading(false);
        }
    };
    const handleInviteCollaborator = async (inviteeId)=>{
        if (!collabArticle) return;
        try {
            setInviteActionId(inviteeId);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$lib$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["inviteCollaborator"])(collabArticle.id, inviteeId);
            await loadArticleInvites(collabArticle.id);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Invite sent",
                description: "Collaboration invitation has been sent."
            });
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Failed to invite",
                description: getErrorMessage(error),
                variant: "destructive"
            });
        } finally{
            setInviteActionId(null);
        }
    };
    const handleRespondInvite = async (inviteId, action)=>{
        try {
            setInviteActionId(inviteId);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$lib$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["respondToCollaborationInvite"])(inviteId, action);
            await Promise.all([
                loadIncomingInvites(),
                loadArticles(true)
            ]);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toast"])({
                title: action === "accepted" ? "Invite accepted" : "Invite rejected"
            });
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Failed to respond invite",
                description: getErrorMessage(error),
                variant: "destructive"
            });
        } finally{
            setInviteActionId(null);
        }
    };
    const handleAddCollaborator = async ()=>{
        if (!collabArticle) return;
        const email = collabEmailInput.trim();
        if (!email) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Email required",
                description: "Please input collaborator email.",
                variant: "destructive"
            });
            return;
        }
        try {
            setCollabLoading(true);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$lib$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["addCollaborator"])(collabArticle.id, email);
            await loadCollaborators(collabArticle.id);
            setCollabEmailInput("");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Collaborator added"
            });
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Failed to add collaborator",
                description: getErrorMessage(error),
                variant: "destructive"
            });
        } finally{
            setCollabLoading(false);
        }
    };
    const handleRemoveCollaborator = async (collaboratorId)=>{
        if (!collabArticle) return;
        try {
            setCollabLoading(true);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$lib$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["removeCollaborator"])(collabArticle.id, collaboratorId);
            await loadCollaborators(collabArticle.id);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Collaborator removed"
            });
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Failed to remove collaborator",
                description: getErrorMessage(error),
                variant: "destructive"
            });
        } finally{
            setCollabLoading(false);
        }
    };
    const handleOpenFormCollaborators = async ()=>{
        if (!editingId) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Save article first",
                description: "You can add collaborators after the article is created."
            });
            return;
        }
        const article = articles.find((a)=>a.id === editingId);
        if (!article) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Article not found",
                description: "Please refresh and try again.",
                variant: "destructive"
            });
            return;
        }
        await handleManageCollaborators(article);
    };
    const markDirty = ()=>setIsDirty(true);
    const registerUploadedImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AdminDashboardContent.useCallback[registerUploadedImage]": (url)=>{
            if (!url) return;
            sessionUploadedImageUrlsRef.current.add(url);
        }
    }["AdminDashboardContent.useCallback[registerUploadedImage]"], []);
    const extractImageUrlsFromBlocks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AdminDashboardContent.useCallback[extractImageUrlsFromBlocks]": (blockList)=>{
            return blockList.filter({
                "AdminDashboardContent.useCallback[extractImageUrlsFromBlocks]": (b)=>b.type === "image"
            }["AdminDashboardContent.useCallback[extractImageUrlsFromBlocks]"]).map({
                "AdminDashboardContent.useCallback[extractImageUrlsFromBlocks]": (b)=>b.value
            }["AdminDashboardContent.useCallback[extractImageUrlsFromBlocks]"]).filter({
                "AdminDashboardContent.useCallback[extractImageUrlsFromBlocks]": (url)=>/^https?:\/\//.test(url)
            }["AdminDashboardContent.useCallback[extractImageUrlsFromBlocks]"]);
        }
    }["AdminDashboardContent.useCallback[extractImageUrlsFromBlocks]"], []);
    const extractImageUrlsFromArticle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AdminDashboardContent.useCallback[extractImageUrlsFromArticle]": (article)=>{
            const cover = article.image_url ? [
                article.image_url
            ] : [];
            const body = (article.content ?? []).filter({
                "AdminDashboardContent.useCallback[extractImageUrlsFromArticle].body": (item)=>/^https?:\/\//.test(item)
            }["AdminDashboardContent.useCallback[extractImageUrlsFromArticle].body"]);
            return [
                ...cover,
                ...body
            ];
        }
    }["AdminDashboardContent.useCallback[extractImageUrlsFromArticle]"], []);
    const cleanupTemporaryUploads = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AdminDashboardContent.useCallback[cleanupTemporaryUploads]": async ()=>{
            const urls = Array.from(sessionUploadedImageUrlsRef.current);
            if (urls.length === 0) return;
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$lib$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["deleteStorageFilesByUrls"])(urls);
            } catch (err) {
                console.error("[AdminDashboard] failed to cleanup temporary uploads:", err);
            } finally{
                sessionUploadedImageUrlsRef.current.clear();
            }
        }
    }["AdminDashboardContent.useCallback[cleanupTemporaryUploads]"], []);
    const switchView = async (newView)=>{
        if (view === "form" && isDirty) {
            if (!confirm("You have unsaved changes. Leave anyway?")) return;
            await cleanupTemporaryUploads();
        }
        setIsDirty(false);
        setView(newView);
    };
    const loadArticles = async (silent = false)=>{
        if (!silent) setLoading(true);
        else setRefreshing(true);
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$lib$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fetchAllArticles"])();
            setArticles(data);
        } catch (err) {
            const msg = err instanceof Error ? err.message : String(err);
            console.error("[AdminDashboard] fetchAllArticles error:", msg);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Failed to load articles",
                description: msg,
                variant: "destructive"
            });
        }
        setLoading(false);
        setRefreshing(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminDashboardContent.useEffect": ()=>{
            loadArticles();
        }
    }["AdminDashboardContent.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminDashboardContent.useEffect": ()=>{
            loadIncomingInvites();
        }
    }["AdminDashboardContent.useEffect"], [
        loadIncomingInvites
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminDashboardContent.useEffect": ()=>{
            const channel = __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].channel("admin-dashboard-realtime").on("postgres_changes", {
                event: "*",
                schema: "public",
                table: "articles"
            }, {
                "AdminDashboardContent.useEffect.channel": ()=>{
                    loadArticles(true);
                }
            }["AdminDashboardContent.useEffect.channel"]).on("postgres_changes", {
                event: "*",
                schema: "public",
                table: "article_collaborators"
            }, {
                "AdminDashboardContent.useEffect.channel": ()=>{
                    loadArticles(true);
                }
            }["AdminDashboardContent.useEffect.channel"]).on("postgres_changes", {
                event: "*",
                schema: "public",
                table: "article_collaboration_invites"
            }, {
                "AdminDashboardContent.useEffect.channel": ()=>{
                    loadArticles(true);
                    loadIncomingInvites();
                }
            }["AdminDashboardContent.useEffect.channel"]).subscribe();
            return ({
                "AdminDashboardContent.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].removeChannel(channel);
                }
            })["AdminDashboardContent.useEffect"];
        }
    }["AdminDashboardContent.useEffect"], [
        loadIncomingInvites
    ]);
    // Ctrl+S saves form
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminDashboardContent.useEffect": ()=>{
            const handler = {
                "AdminDashboardContent.useEffect.handler": (e)=>{
                    if ((e.ctrlKey || e.metaKey) && e.key === "s" && view === "form") {
                        e.preventDefault();
                        formRef.current?.requestSubmit();
                    }
                }
            }["AdminDashboardContent.useEffect.handler"];
            window.addEventListener("keydown", handler);
            return ({
                "AdminDashboardContent.useEffect": ()=>window.removeEventListener("keydown", handler)
            })["AdminDashboardContent.useEffect"];
        }
    }["AdminDashboardContent.useEffect"], [
        view
    ]);
    // --- Stats ---
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdminDashboardContent.useMemo[stats]": ()=>{
            const published = articles.filter({
                "AdminDashboardContent.useMemo[stats]": (a)=>a.published
            }["AdminDashboardContent.useMemo[stats]"]).length;
            return {
                total: articles.length,
                published,
                drafts: articles.filter({
                    "AdminDashboardContent.useMemo[stats]": (a)=>!a.published
                }["AdminDashboardContent.useMemo[stats]"]).length,
                breaking: articles.filter({
                    "AdminDashboardContent.useMemo[stats]": (a)=>a.is_breaking
                }["AdminDashboardContent.useMemo[stats]"]).length,
                publishRate: articles.length ? Math.round(published / articles.length * 100) : 0,
                byCategory: CATEGORIES.map({
                    "AdminDashboardContent.useMemo[stats]": (c)=>({
                            name: c,
                            count: articles.filter({
                                "AdminDashboardContent.useMemo[stats]": (a)=>getArticleCategories(a).includes(c)
                            }["AdminDashboardContent.useMemo[stats]"]).length
                        })
                }["AdminDashboardContent.useMemo[stats]"]),
                latestPublish: articles.filter({
                    "AdminDashboardContent.useMemo[stats]": (a)=>a.published
                }["AdminDashboardContent.useMemo[stats]"]).sort({
                    "AdminDashboardContent.useMemo[stats]": (a, b)=>b.updated_at.localeCompare(a.updated_at)
                }["AdminDashboardContent.useMemo[stats]"])[0] ?? null
            };
        }
    }["AdminDashboardContent.useMemo[stats]"], [
        articles,
        getArticleCategories
    ]);
    // --- Filtered & sorted list ---
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdminDashboardContent.useMemo[filtered]": ()=>{
            let list = [
                ...articles
            ];
            if (searchQuery.trim()) list = list.filter({
                "AdminDashboardContent.useMemo[filtered]": (a)=>a.title.toLowerCase().includes(searchQuery.toLowerCase()) || a.slug.toLowerCase().includes(searchQuery.toLowerCase())
            }["AdminDashboardContent.useMemo[filtered]"]);
            if (filterCategory !== "All") list = list.filter({
                "AdminDashboardContent.useMemo[filtered]": (a)=>getArticleCategories(a).includes(filterCategory)
            }["AdminDashboardContent.useMemo[filtered]"]);
            if (filterStatus === "Published") list = list.filter({
                "AdminDashboardContent.useMemo[filtered]": (a)=>a.published
            }["AdminDashboardContent.useMemo[filtered]"]);
            if (filterStatus === "Draft") list = list.filter({
                "AdminDashboardContent.useMemo[filtered]": (a)=>!a.published
            }["AdminDashboardContent.useMemo[filtered]"]);
            if (filterStatus === "Breaking") list = list.filter({
                "AdminDashboardContent.useMemo[filtered]": (a)=>a.is_breaking
            }["AdminDashboardContent.useMemo[filtered]"]);
            list.sort({
                "AdminDashboardContent.useMemo[filtered]": (a, b)=>{
                    const va = a[sortField];
                    const vb = b[sortField];
                    return sortDir === "asc" ? va.localeCompare(vb) : vb.localeCompare(va);
                }
            }["AdminDashboardContent.useMemo[filtered]"]);
            return list;
        }
    }["AdminDashboardContent.useMemo[filtered]"], [
        articles,
        searchQuery,
        filterCategory,
        filterStatus,
        sortField,
        sortDir,
        getArticleCategories
    ]);
    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
    // Reset to page 1 on filter change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminDashboardContent.useEffect": ()=>{
            setPage(1);
        }
    }["AdminDashboardContent.useEffect"], [
        searchQuery,
        filterCategory,
        filterStatus,
        sortField,
        sortDir
    ]);
    // Word count
    const wordCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdminDashboardContent.useMemo[wordCount]": ()=>{
            const perBlock = blocks.map({
                "AdminDashboardContent.useMemo[wordCount].perBlock": (b)=>b.type !== "image" && b.value.trim() ? b.value.trim().split(/\s+/).length : 0
            }["AdminDashboardContent.useMemo[wordCount].perBlock"]);
            return {
                perBlock,
                total: perBlock.reduce({
                    "AdminDashboardContent.useMemo[wordCount]": (a, b)=>a + b
                }["AdminDashboardContent.useMemo[wordCount]"], 0)
            };
        }
    }["AdminDashboardContent.useMemo[wordCount]"], [
        blocks
    ]);
    // --- Form handlers ---
    const handleNew = async ()=>{
        if (view === "form" && isDirty) {
            if (!confirm("You have unsaved changes. Start a new article anyway?")) return;
            await cleanupTemporaryUploads();
        }
        setForm({
            ...emptyForm,
            author_name: profile.name,
            author_role: profile.role,
            author_avatar: profile.avatar,
            author_bio: profile.bio
        });
        setBlocks([
            {
                id: crypto.randomUUID(),
                type: "text",
                value: ""
            }
        ]);
        blockHistoryRef.current = {
            undo: [],
            redo: []
        };
        sessionUploadedImageUrlsRef.current.clear();
        setEditingId(null);
        setIsDirty(false);
        setView("form");
    };
    const handleEdit = async (article)=>{
        if (view === "form" && isDirty) {
            if (!confirm("You have unsaved changes. Switch to this article?")) return;
            await cleanupTemporaryUploads();
        }
        setForm({
            slug: article.slug,
            title: article.title,
            category: article.category,
            categories: getArticleCategories(article),
            image_url: article.image_url || "",
            author_name: article.author_name,
            author_role: article.author_role,
            author_avatar: article.author_avatar,
            author_bio: article.author_bio ?? "",
            read_time: article.read_time,
            is_breaking: article.is_breaking,
            owner_id: article.owner_id,
            content: article.content.length > 0 ? article.content : [
                ""
            ],
            published: article.published
        });
        setEditingId(article.id);
        setBlocks(contentToBlocks(article.content.length > 0 ? article.content : [
            ""
        ]));
        blockHistoryRef.current = {
            undo: [],
            redo: []
        };
        sessionUploadedImageUrlsRef.current.clear();
        setIsDirty(false);
        setView("form");
    };
    const handleDuplicate = async (article)=>{
        if (view === "form" && isDirty) {
            if (!confirm("You have unsaved changes. Duplicate this article?")) return;
            await cleanupTemporaryUploads();
        }
        setForm({
            slug: `copy-of-${article.slug}`,
            title: `Copy of ${article.title}`,
            category: article.category,
            categories: getArticleCategories(article),
            image_url: article.image_url || "",
            author_name: article.author_name,
            author_role: article.author_role,
            author_avatar: article.author_avatar,
            author_bio: article.author_bio ?? "",
            read_time: article.read_time,
            is_breaking: false,
            owner_id: article.owner_id,
            content: [
                ...article.content
            ],
            published: false
        });
        setEditingId(null);
        setBlocks(contentToBlocks(article.content));
        blockHistoryRef.current = {
            undo: [],
            redo: []
        };
        sessionUploadedImageUrlsRef.current.clear();
        setIsDirty(true);
        setView("form");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toast"])({
            title: "Duplicated",
            description: "Edit and save as a new article."
        });
    };
    const handleDelete = async (id)=>{
        const art = articles.find((a)=>a.id === id);
        if (!confirm("Delete this article?")) return;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$lib$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["deleteArticle"])(id);
            if (art) {
                const imageUrls = extractImageUrlsFromArticle(art);
                if (imageUrls.length > 0) {
                    try {
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$lib$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["deleteStorageFilesByUrls"])(imageUrls);
                    } catch (imgErr) {
                        console.error("[AdminDashboard] failed to delete article images:", imgErr);
                    }
                }
            }
            logAction("deleted", art?.title ?? id);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Deleted",
                description: "Article removed."
            });
            setSelected((prev)=>{
                const s = new Set(prev);
                s.delete(id);
                return s;
            });
            loadArticles(true);
        } catch  {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Error",
                description: "Failed to delete",
                variant: "destructive"
            });
        }
    };
    const handleBulkDelete = async ()=>{
        if (!confirm(`Delete ${selected.size} selected article(s)?`)) return;
        try {
            const selectedArticles = articles.filter((a)=>selected.has(a.id));
            await Promise.all([
                ...selected
            ].map((id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$lib$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["deleteArticle"])(id)));
            const allImageUrls = selectedArticles.flatMap((article)=>extractImageUrlsFromArticle(article));
            if (allImageUrls.length > 0) {
                try {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$lib$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["deleteStorageFilesByUrls"])(allImageUrls);
                } catch (imgErr) {
                    console.error("[AdminDashboard] failed to delete some bulk article images:", imgErr);
                }
            }
            logAction("deleted", `${selected.size} articles`);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Deleted",
                description: `${selected.size} articles removed.`
            });
            setSelected(new Set());
            loadArticles(true);
        } catch  {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Error",
                description: "Bulk delete failed",
                variant: "destructive"
            });
        }
    };
    const handleBulkPublish = async (publish)=>{
        try {
            await Promise.all([
                ...selected
            ].map((id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$lib$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["updateArticle"])(id, {
                    published: publish
                })));
            logAction(publish ? "published" : "unpublished", `${selected.size} articles`);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toast"])({
                title: publish ? "Published" : "Unpublished",
                description: `${selected.size} articles updated.`
            });
            setSelected(new Set());
            loadArticles(true);
        } catch  {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Error",
                description: "Bulk update failed",
                variant: "destructive"
            });
        }
    };
    const handleTogglePublish = async (article)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$lib$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["updateArticle"])(article.id, {
                published: !article.published
            });
            logAction(article.published ? "unpublished" : "published", article.title);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toast"])({
                title: article.published ? "Unpublished" : "Published"
            });
            loadArticles(true);
        } catch  {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Error",
                description: "Failed to update",
                variant: "destructive"
            });
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!form.title.trim() || !form.slug.trim()) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Error",
                description: "Title and slug are required",
                variant: "destructive"
            });
            return;
        }
        setSaving(true);
        try {
            const normalizedCategories = Array.from(new Set((form.categories || []).filter(Boolean)));
            const primaryCategory = normalizedCategories[0] || form.category || CATEGORIES[0];
            const payload = {
                ...form,
                category: primaryCategory,
                categories: normalizedCategories.length > 0 ? normalizedCategories : [
                    primaryCategory
                ],
                image_url: form.image_url || null,
                content: blocksToContent(blocks)
            };
            if (editingId) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$lib$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["updateArticle"])(editingId, payload);
                logAction("updated", form.title);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toast"])({
                    title: "Updated",
                    description: "Article saved."
                });
            } else {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$lib$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["createArticle"])(payload);
                logAction("created", form.title);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toast"])({
                    title: "Created",
                    description: "New article added."
                });
            }
            const referencedUrls = new Set([
                ...payload.image_url ? [
                    payload.image_url
                ] : [],
                ...extractImageUrlsFromBlocks(blocks)
            ]);
            const uploadedUrls = Array.from(sessionUploadedImageUrlsRef.current);
            const removable = uploadedUrls.filter((url)=>!referencedUrls.has(url));
            if (removable.length > 0) {
                try {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$lib$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["deleteStorageFilesByUrls"])(removable);
                } catch (cleanupErr) {
                    console.error("[AdminDashboard] failed to cleanup unreferenced uploads after save:", cleanupErr);
                }
            }
            sessionUploadedImageUrlsRef.current.clear();
            setIsDirty(false);
            setView("articles");
            loadArticles(true);
        } catch (err) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Error",
                description: err.message || "Failed to save",
                variant: "destructive"
            });
        }
        setSaving(false);
    };
    const handleTitleChange = (title)=>{
        const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
        setForm((prev)=>({
                ...prev,
                title,
                ...editingId ? {} : {
                    slug
                }
            }));
        markDirty();
    };
    const toggleFormCategory = (category)=>{
        setForm((prev)=>{
            const exists = prev.categories.includes(category);
            const nextCategories = exists ? prev.categories.filter((c)=>c !== category) : [
                ...prev.categories,
                category
            ];
            const guaranteed = nextCategories.length > 0 ? nextCategories : [
                category
            ];
            return {
                ...prev,
                categories: guaranteed,
                category: guaranteed[0]
            };
        });
        markDirty();
    };
    const updateBlock = (index, value)=>{
        blockHistoryRef.current.undo.push(cloneBlocks(blocks));
        if (blockHistoryRef.current.undo.length > BLOCK_HISTORY_LIMIT) blockHistoryRef.current.undo.shift();
        blockHistoryRef.current.redo = [];
        const newBlocks = [
            ...blocks
        ];
        newBlocks[index] = {
            ...newBlocks[index],
            value
        };
        setBlocks(newBlocks);
        markDirty();
    };
    const addBlock = (type)=>{
        blockHistoryRef.current.undo.push(cloneBlocks(blocks));
        if (blockHistoryRef.current.undo.length > BLOCK_HISTORY_LIMIT) blockHistoryRef.current.undo.shift();
        blockHistoryRef.current.redo = [];
        setBlocks([
            ...blocks,
            {
                id: crypto.randomUUID(),
                type,
                value: ""
            }
        ]);
        markDirty();
    };
    const removeBlock = (index)=>{
        if (blocks.length <= 1) return;
        blockHistoryRef.current.undo.push(cloneBlocks(blocks));
        if (blockHistoryRef.current.undo.length > BLOCK_HISTORY_LIMIT) blockHistoryRef.current.undo.shift();
        blockHistoryRef.current.redo = [];
        setBlocks(blocks.filter((_, i)=>i !== index));
        markDirty();
    };
    const moveBlock = (index, dir)=>{
        const newIndex = index + dir;
        if (newIndex < 0 || newIndex >= blocks.length) return;
        blockHistoryRef.current.undo.push(cloneBlocks(blocks));
        if (blockHistoryRef.current.undo.length > BLOCK_HISTORY_LIMIT) blockHistoryRef.current.undo.shift();
        blockHistoryRef.current.redo = [];
        const newBlocks = [
            ...blocks
        ];
        [newBlocks[index], newBlocks[newIndex]] = [
            newBlocks[newIndex],
            newBlocks[index]
        ];
        setBlocks(newBlocks);
        markDirty();
    };
    const moveBlockById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AdminDashboardContent.useCallback[moveBlockById]": (fromId, toId)=>{
            if (fromId === toId) return;
            const fromIndex = blocks.findIndex({
                "AdminDashboardContent.useCallback[moveBlockById].fromIndex": (b)=>b.id === fromId
            }["AdminDashboardContent.useCallback[moveBlockById].fromIndex"]);
            const toIndex = blocks.findIndex({
                "AdminDashboardContent.useCallback[moveBlockById].toIndex": (b)=>b.id === toId
            }["AdminDashboardContent.useCallback[moveBlockById].toIndex"]);
            if (fromIndex < 0 || toIndex < 0 || fromIndex === toIndex) return;
            blockHistoryRef.current.undo.push(cloneBlocks(blocks));
            if (blockHistoryRef.current.undo.length > BLOCK_HISTORY_LIMIT) blockHistoryRef.current.undo.shift();
            blockHistoryRef.current.redo = [];
            const reordered = [
                ...blocks
            ];
            const [moved] = reordered.splice(fromIndex, 1);
            reordered.splice(toIndex, 0, moved);
            setBlocks(reordered);
            markDirty();
        }
    }["AdminDashboardContent.useCallback[moveBlockById]"], [
        blocks,
        markDirty
    ]);
    const undoBlocks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AdminDashboardContent.useCallback[undoBlocks]": ()=>{
            const prev = blockHistoryRef.current.undo.pop();
            if (!prev) return;
            blockHistoryRef.current.redo.push(cloneBlocks(blocks));
            setBlocks(cloneBlocks(prev));
            markDirty();
        }
    }["AdminDashboardContent.useCallback[undoBlocks]"], [
        blocks,
        markDirty
    ]);
    const redoBlocks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AdminDashboardContent.useCallback[redoBlocks]": ()=>{
            const next = blockHistoryRef.current.redo.pop();
            if (!next) return;
            blockHistoryRef.current.undo.push(cloneBlocks(blocks));
            if (blockHistoryRef.current.undo.length > BLOCK_HISTORY_LIMIT) blockHistoryRef.current.undo.shift();
            setBlocks(cloneBlocks(next));
            markDirty();
        }
    }["AdminDashboardContent.useCallback[redoBlocks]"], [
        blocks,
        markDirty
    ]);
    const applyInlineFormat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AdminDashboardContent.useCallback[applyInlineFormat]": (blockId, format)=>{
            const textarea = blockEditorRefs.current[blockId];
            const block = blocks.find({
                "AdminDashboardContent.useCallback[applyInlineFormat].block": (b)=>b.id === blockId
            }["AdminDashboardContent.useCallback[applyInlineFormat].block"]);
            if (!textarea || !block || block.type === "image") return;
            const wrapper = INLINE_WRAPPERS[format];
            const start = textarea.selectionStart ?? 0;
            const end = textarea.selectionEnd ?? 0;
            const source = block.value;
            const hasSelection = end > start;
            let nextValue = source;
            let nextStart = start;
            let nextEnd = end;
            if (hasSelection) {
                const selected = source.slice(start, end);
                nextValue = `${source.slice(0, start)}${wrapper.open}${selected}${wrapper.close}${source.slice(end)}`;
                nextStart = start + wrapper.open.length;
                nextEnd = end + wrapper.open.length;
            } else {
                const insert = `${wrapper.open}${wrapper.sample}${wrapper.close}`;
                nextValue = `${source.slice(0, start)}${insert}${source.slice(start)}`;
                nextStart = start + wrapper.open.length;
                nextEnd = start + wrapper.open.length + wrapper.sample.length;
            }
            blockHistoryRef.current.undo.push(cloneBlocks(blocks));
            if (blockHistoryRef.current.undo.length > BLOCK_HISTORY_LIMIT) blockHistoryRef.current.undo.shift();
            blockHistoryRef.current.redo = [];
            setBlocks({
                "AdminDashboardContent.useCallback[applyInlineFormat]": (prev)=>prev.map({
                        "AdminDashboardContent.useCallback[applyInlineFormat]": (b)=>b.id === blockId ? {
                                ...b,
                                value: nextValue
                            } : b
                    }["AdminDashboardContent.useCallback[applyInlineFormat]"])
            }["AdminDashboardContent.useCallback[applyInlineFormat]"]);
            markDirty();
            requestAnimationFrame({
                "AdminDashboardContent.useCallback[applyInlineFormat]": ()=>{
                    const el = blockEditorRefs.current[blockId];
                    if (!el) return;
                    el.focus();
                    el.setSelectionRange(nextStart, nextEnd);
                }
            }["AdminDashboardContent.useCallback[applyInlineFormat]"]);
        }
    }["AdminDashboardContent.useCallback[applyInlineFormat]"], [
        blocks,
        markDirty
    ]);
    const applyBulletsToBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AdminDashboardContent.useCallback[applyBulletsToBlock]": (blockId)=>{
            const textarea = blockEditorRefs.current[blockId];
            const block = blocks.find({
                "AdminDashboardContent.useCallback[applyBulletsToBlock].block": (b)=>b.id === blockId
            }["AdminDashboardContent.useCallback[applyBulletsToBlock].block"]);
            if (!textarea || !block || block.type === "image") return;
            const source = block.value;
            const start = textarea.selectionStart ?? 0;
            const end = textarea.selectionEnd ?? 0;
            const lineStart = source.lastIndexOf("\n", Math.max(0, start - 1)) + 1;
            const rawLineEnd = source.indexOf("\n", end);
            const lineEnd = rawLineEnd === -1 ? source.length : rawLineEnd;
            const selectedLines = source.slice(lineStart, lineEnd);
            const lines = selectedLines.split("\n");
            const allBulleted = lines.every({
                "AdminDashboardContent.useCallback[applyBulletsToBlock].allBulleted": (line)=>line.trim() === "" || /^\s*(?:[-*]|•)\s+/.test(line)
            }["AdminDashboardContent.useCallback[applyBulletsToBlock].allBulleted"]);
            const transformed = lines.map({
                "AdminDashboardContent.useCallback[applyBulletsToBlock].transformed": (line)=>{
                    if (line.trim() === "") return line;
                    if (allBulleted) return line.replace(/^(\s*)(?:[-*]|•)\s+/, "$1");
                    return /^\s*(?:[-*]|•)\s+/.test(line) ? line : `• ${line}`;
                }
            }["AdminDashboardContent.useCallback[applyBulletsToBlock].transformed"]).join("\n");
            const nextValue = `${source.slice(0, lineStart)}${transformed}${source.slice(lineEnd)}`;
            blockHistoryRef.current.undo.push(cloneBlocks(blocks));
            if (blockHistoryRef.current.undo.length > BLOCK_HISTORY_LIMIT) blockHistoryRef.current.undo.shift();
            blockHistoryRef.current.redo = [];
            setBlocks({
                "AdminDashboardContent.useCallback[applyBulletsToBlock]": (prev)=>prev.map({
                        "AdminDashboardContent.useCallback[applyBulletsToBlock]": (b)=>b.id === blockId ? {
                                ...b,
                                value: nextValue
                            } : b
                    }["AdminDashboardContent.useCallback[applyBulletsToBlock]"])
            }["AdminDashboardContent.useCallback[applyBulletsToBlock]"]);
            markDirty();
            requestAnimationFrame({
                "AdminDashboardContent.useCallback[applyBulletsToBlock]": ()=>{
                    const el = blockEditorRefs.current[blockId];
                    if (!el) return;
                    el.focus();
                    el.setSelectionRange(lineStart, lineStart + transformed.length);
                }
            }["AdminDashboardContent.useCallback[applyBulletsToBlock]"]);
        }
    }["AdminDashboardContent.useCallback[applyBulletsToBlock]"], [
        blocks,
        markDirty
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminDashboardContent.useEffect": ()=>{
            const onKeyDown = {
                "AdminDashboardContent.useEffect.onKeyDown": (e)=>{
                    if (!(e.ctrlKey || e.metaKey)) return;
                    const active = document.activeElement;
                    if (!(active instanceof HTMLTextAreaElement)) return;
                    const blockId = active.dataset.blockId;
                    if (!blockId) return;
                    const key = e.key.toLowerCase();
                    if (key === "b") {
                        e.preventDefault();
                        applyInlineFormat(blockId, "bold");
                    } else if (key === "i") {
                        e.preventDefault();
                        applyInlineFormat(blockId, "italic");
                    } else if (key === "u") {
                        e.preventDefault();
                        applyInlineFormat(blockId, "underline");
                    } else if (e.shiftKey && key === "x") {
                        e.preventDefault();
                        applyInlineFormat(blockId, "strike");
                    } else if (e.shiftKey && key === "k") {
                        e.preventDefault();
                        applyInlineFormat(blockId, "code");
                    } else if (e.shiftKey && (key === "8" || key === "l")) {
                        e.preventDefault();
                        applyBulletsToBlock(blockId);
                    } else if (key === "z" && !e.shiftKey) {
                        e.preventDefault();
                        undoBlocks();
                    } else if (key === "y" && !e.shiftKey || key === "z" && e.shiftKey) {
                        e.preventDefault();
                        redoBlocks();
                    }
                }
            }["AdminDashboardContent.useEffect.onKeyDown"];
            window.addEventListener("keydown", onKeyDown);
            return ({
                "AdminDashboardContent.useEffect": ()=>window.removeEventListener("keydown", onKeyDown)
            })["AdminDashboardContent.useEffect"];
        }
    }["AdminDashboardContent.useEffect"], [
        applyInlineFormat,
        applyBulletsToBlock,
        undoBlocks,
        redoBlocks
    ]);
    const toggleSort = (field)=>{
        if (sortField === field) setSortDir((d)=>d === "asc" ? "desc" : "asc");
        else {
            setSortField(field);
            setSortDir("desc");
        }
    };
    const toggleSelect = (id)=>{
        setSelected((prev)=>{
            const s = new Set(prev);
            if (s.has(id)) s.delete(id);
            else s.add(id);
            return s;
        });
    };
    const toggleSelectAll = ()=>{
        if (selected.size === paginated.length) setSelected(new Set());
        else setSelected(new Set(paginated.map((a)=>a.id)));
    };
    const SortIcon = ({ field })=>sortField === field ? sortDir === "asc" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
            className: "h-3 w-3 inline ml-0.5"
        }, void 0, false, {
            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
            lineNumber: 995,
            columnNumber: 29
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: "h-3 w-3 inline ml-0.5"
        }, void 0, false, {
            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
            lineNumber: 995,
            columnNumber: 79
        }, ("TURBOPACK compile-time value", void 0)) : null;
    const syncFormattedEditorScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AdminDashboardContent.useCallback[syncFormattedEditorScroll]": (blockId)=>{
            const editor = blockEditorRefs.current[blockId];
            const preview = blockPreviewRefs.current[blockId];
            if (!editor || !preview) return;
            preview.scrollTop = editor.scrollTop;
            preview.scrollLeft = editor.scrollLeft;
        }
    }["AdminDashboardContent.useCallback[syncFormattedEditorScroll]"], []);
    const renderInlineOverlayContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AdminDashboardContent.useCallback[renderInlineOverlayContent]": (block, placeholder)=>{
            if (!block.value) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-muted-foreground/40",
                    children: placeholder
                }, void 0, false, {
                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                    lineNumber: 1009,
                    columnNumber: 14
                }, ("TURBOPACK compile-time value", void 0));
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "whitespace-pre-wrap break-words",
                children: parseInlineFormatting(block.value)
            }, void 0, false, {
                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                lineNumber: 1013,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0));
        }
    }["AdminDashboardContent.useCallback[renderInlineOverlayContent]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$components$2f$PageTransition$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-background",
            children: [
                collabOpen && collabArticle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-xl border border-border bg-background",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between px-4 py-3 border-b border-border",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-heading text-lg tracking-widest text-foreground",
                                                children: "COLLABORATION"
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 1029,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-body text-xs text-muted-foreground line-clamp-1",
                                                children: collabArticle.title
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 1030,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                        lineNumber: 1028,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setCollabOpen(false),
                                        className: "p-1.5 text-muted-foreground hover:text-foreground transition-colors",
                                        title: "Close",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1037,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                        lineNumber: 1032,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                lineNumber: 1027,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: collabEmailInput,
                                                onChange: (e)=>setCollabEmailInput(e.target.value),
                                                placeholder: "admin@email.com",
                                                className: "flex-1 bg-background border border-border px-3 py-2 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 1043,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["Button"], {
                                                type: "button",
                                                onClick: handleAddCollaborator,
                                                disabled: collabLoading,
                                                className: "font-meta text-xs uppercase tracking-wider",
                                                children: "Add"
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 1049,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                        lineNumber: 1042,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-border",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-3 py-2 border-b border-border bg-secondary/40",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-meta text-[10px] uppercase tracking-wider text-muted-foreground",
                                                    children: "Collaborators"
                                                }, void 0, false, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 1061,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 1060,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "divide-y divide-border max-h-64 overflow-y-auto",
                                                children: [
                                                    collabLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-body text-xs text-muted-foreground px-3 py-3",
                                                        children: "Loading..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                        lineNumber: 1065,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    !collabLoading && (collaboratorsMap[collabArticle.id] ?? []).length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-body text-xs text-muted-foreground px-3 py-3",
                                                        children: "No collaborators yet."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                        lineNumber: 1068,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    !collabLoading && (collaboratorsMap[collabArticle.id] ?? []).map((collab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between px-3 py-2.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "min-w-0",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-body text-sm text-foreground truncate",
                                                                            children: collab.email
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 1073,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-meta text-[9px] text-muted-foreground",
                                                                            children: [
                                                                                "Added ",
                                                                                new Date(collab.added_at).toLocaleDateString("en-GB")
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 1074,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                    lineNumber: 1072,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleRemoveCollaborator(collab.collaborator_id),
                                                                    className: "font-meta text-[10px] uppercase tracking-wider text-muted-foreground hover:text-destructive transition-colors",
                                                                    children: "Remove"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                    lineNumber: 1076,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, collab.collaborator_id, true, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 1071,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 1063,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                        lineNumber: 1059,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-border",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-3 py-2 border-b border-border bg-secondary/40",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-meta text-[10px] uppercase tracking-wider text-muted-foreground",
                                                    children: "Pending Invites"
                                                }, void 0, false, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 1089,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 1088,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "divide-y divide-border max-h-40 overflow-y-auto",
                                                children: [
                                                    (invitesMap[collabArticle.id] ?? []).filter((invite)=>invite.status === "pending").length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-body text-xs text-muted-foreground px-3 py-3",
                                                        children: "No pending invites."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                        lineNumber: 1093,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    (invitesMap[collabArticle.id] ?? []).filter((invite)=>invite.status === "pending").map((invite)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-3 py-2.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-body text-sm text-foreground truncate",
                                                                    children: invite.invitee_email
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                    lineNumber: 1099,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-meta text-[9px] text-muted-foreground",
                                                                    children: [
                                                                        "Invited ",
                                                                        new Date(invite.created_at).toLocaleDateString("en-GB")
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                    lineNumber: 1100,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, invite.invite_id, true, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 1098,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 1091,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                        lineNumber: 1087,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-border",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-3 py-2 border-b border-border bg-secondary/40",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-meta text-[10px] uppercase tracking-wider text-muted-foreground",
                                                    children: "Invite Editors"
                                                }, void 0, false, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 1110,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 1109,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "divide-y divide-border max-h-56 overflow-y-auto",
                                                children: [
                                                    availableEditors.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-body text-xs text-muted-foreground px-3 py-3",
                                                        children: "No editors available."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                        lineNumber: 1114,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    availableEditors.map((editor)=>{
                                                        const existingCollaborators = new Set((collaboratorsMap[collabArticle.id] ?? []).map((item)=>item.collaborator_id));
                                                        const pendingInvites = new Set((invitesMap[collabArticle.id] ?? []).filter((invite)=>invite.status === "pending").map((invite)=>invite.invitee_id));
                                                        const isSelf = editor.user_id === currentUserId;
                                                        const isAlreadyCollaborator = existingCollaborators.has(editor.user_id);
                                                        const isPending = pendingInvites.has(editor.user_id);
                                                        const disabled = isSelf || isAlreadyCollaborator || isPending || !!inviteActionId;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between px-3 py-2.5 gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "min-w-0",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-body text-sm text-foreground truncate",
                                                                            children: editor.display_name || editor.user_id
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 1131,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-meta text-[9px] text-muted-foreground truncate",
                                                                            children: editor.user_id
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 1132,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                    lineNumber: 1130,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    disabled: disabled,
                                                                    onClick: ()=>handleInviteCollaborator(editor.user_id),
                                                                    className: "font-meta text-[10px] uppercase tracking-wider border px-2.5 py-1.5 transition-colors border-border text-muted-foreground hover:text-primary hover:border-primary disabled:opacity-40 disabled:cursor-not-allowed",
                                                                    children: isSelf ? "You" : isAlreadyCollaborator ? "Added" : isPending ? "Invited" : "Invite"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                    lineNumber: 1134,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, editor.user_id, true, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 1129,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0));
                                                    })
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 1112,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                        lineNumber: 1108,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                lineNumber: 1041,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                        lineNumber: 1026,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                    lineNumber: 1025,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                previewOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 z-50 bg-background/95 backdrop-blur-sm overflow-y-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container max-w-3xl py-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-6 sticky top-0 bg-background/90 backdrop-blur-sm py-3 -mx-4 px-4 border-b border-border",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-meta text-[10px] uppercase tracking-wider text-muted-foreground border border-border px-2 py-1",
                                                children: "PREVIEW MODE"
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 1158,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            !form.published && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-meta text-[10px] uppercase tracking-wider text-muted-foreground border border-border px-2 py-1",
                                                children: "DRAFT"
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 1160,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                        lineNumber: 1157,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setPreviewOpen(false),
                                        className: "flex items-center gap-1.5 font-meta text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors border border-border px-3 py-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 1167,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Close"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                        lineNumber: 1163,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                lineNumber: 1156,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            form.image_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: form.image_url,
                                alt: "",
                                className: "w-full aspect-video object-cover mb-6"
                            }, void 0, false, {
                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                lineNumber: 1172,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-3 flex items-center gap-2 flex-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-meta text-[10px] uppercase tracking-wider text-primary border border-primary px-1.5 py-0.5",
                                        children: form.category
                                    }, void 0, false, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                        lineNumber: 1176,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    form.is_breaking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-meta text-[10px] uppercase tracking-wider text-destructive border border-destructive px-1.5 py-0.5",
                                        children: "Breaking"
                                    }, void 0, false, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                        lineNumber: 1178,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                lineNumber: 1175,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-heading text-4xl md:text-5xl text-foreground tracking-widest mb-4 leading-tight",
                                children: form.title || "Untitled Article"
                            }, void 0, false, {
                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                lineNumber: 1182,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-8 pb-6 border-b border-border",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-9 h-9 bg-primary flex items-center justify-center shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-heading text-sm text-primary-foreground",
                                            children: form.author_avatar || "??"
                                        }, void 0, false, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1188,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                        lineNumber: 1187,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-body text-sm text-foreground",
                                                children: form.author_name || "Anonymous"
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 1191,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-meta text-[10px] text-muted-foreground uppercase tracking-wider",
                                                children: [
                                                    form.author_role,
                                                    " · ",
                                                    form.read_time
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 1192,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                        lineNumber: 1190,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                lineNumber: 1186,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-5",
                                children: blocks.filter((b)=>b.value.trim()).length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-body text-sm text-muted-foreground italic",
                                    children: "No content yet..."
                                }, void 0, false, {
                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                    lineNumber: 1200,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)) : blocks.filter((b)=>b.value.trim()).map((block)=>{
                                    if (block.type === "image") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: block.value,
                                        alt: "",
                                        className: "w-full object-cover",
                                        onError: (e)=>{
                                            e.target.style.display = "none";
                                        }
                                    }, block.id, false, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                        lineNumber: 1203,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0));
                                    if (block.type === "table") {
                                        const rows = parseTableRows(block.value);
                                        if (rows.length === 0) return null;
                                        const [head, ...body] = rows;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "overflow-x-auto border border-border",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                className: "w-full border-collapse",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                        className: "bg-secondary/40",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: head.map((cell, ci)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "border border-border px-3 py-2 text-left font-meta text-[10px] uppercase tracking-wider text-foreground",
                                                                    children: parseInlineFormatting(cell)
                                                                }, ci, false, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                    lineNumber: 1215,
                                                                    columnNumber: 33
                                                                }, ("TURBOPACK compile-time value", void 0)))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 1213,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                        lineNumber: 1212,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        children: body.map((row, ri)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                className: "hover:bg-secondary/20",
                                                                children: head.map((_, ci)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "border border-border px-3 py-2 font-body text-sm text-foreground/90",
                                                                        children: parseInlineFormatting(row[ci] ?? "")
                                                                    }, ci, false, {
                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                        lineNumber: 1225,
                                                                        columnNumber: 35
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            }, ri, false, {
                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                lineNumber: 1223,
                                                                columnNumber: 31
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                        lineNumber: 1221,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 1211,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, block.id, false, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1210,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0));
                                    }
                                    if (block.type === "bullets") {
                                        const points = block.value.split("\n").map((line)=>line.replace(/^\s*(?:[-*]|•)\s?/, "").trim()).filter(Boolean);
                                        if (points.length === 0) return null;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "list-disc pl-6 space-y-1",
                                            children: points.map((point, pi)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "font-body text-base text-foreground leading-relaxed",
                                                    children: parseInlineFormatting(point)
                                                }, pi, false, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 1245,
                                                    columnNumber: 27
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, block.id, false, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1243,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0));
                                    }
                                    if (block.type === "heading") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-heading text-3xl text-foreground tracking-widest leading-tight",
                                        children: parseInlineFormatting(block.value)
                                    }, block.id, false, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                        lineNumber: 1251,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0));
                                    if (block.type === "subheading") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-heading text-xl text-foreground tracking-widest leading-tight",
                                        children: parseInlineFormatting(block.value)
                                    }, block.id, false, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                        lineNumber: 1254,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0));
                                    if (block.type === "quote") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                        className: "border-l-2 border-primary pl-4 font-body text-base text-muted-foreground italic leading-relaxed",
                                        children: parseInlineFormatting(block.value)
                                    }, block.id, false, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                        lineNumber: 1257,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0));
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-body text-base text-foreground leading-relaxed",
                                        children: parseInlineFormatting(block.value)
                                    }, block.id, false, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                        lineNumber: 1259,
                                        columnNumber: 26
                                    }, ("TURBOPACK compile-time value", void 0));
                                })
                            }, void 0, false, {
                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                lineNumber: 1198,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-12 pt-6 border-t border-border",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-meta text-[10px] uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                className: "h-3 w-3"
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 1266,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Search Engine Preview"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                        lineNumber: 1265,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-border p-4 space-y-1 bg-secondary/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-meta text-[10px] text-green-600 dark:text-green-400",
                                                children: [
                                                    "ToRock.verse/article/",
                                                    form.slug || "article-slug"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 1269,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-body text-sm text-blue-400 hover:underline cursor-pointer",
                                                children: form.title || "Article Title — ToRock Verse"
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 1272,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-body text-xs text-muted-foreground line-clamp-2",
                                                children: blocks.find((b)=>b.type === "text" && b.value.trim())?.value || "Article description preview will appear here based on your first paragraph..."
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 1275,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                        lineNumber: 1268,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                lineNumber: 1264,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 grid grid-cols-3 gap-4",
                                children: [
                                    {
                                        label: "Words",
                                        value: wordCount.total
                                    },
                                    {
                                        label: "Blocks",
                                        value: blocks.filter((b)=>b.value.trim()).length
                                    },
                                    {
                                        label: "Est. Read",
                                        value: `${Math.max(1, Math.ceil(wordCount.total / 200))} min`
                                    }
                                ].map(({ label, value })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-border p-3 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-heading text-2xl text-foreground",
                                                children: value
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 1289,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-meta text-[9px] uppercase tracking-wider text-muted-foreground",
                                                children: label
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 1290,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, label, true, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                        lineNumber: 1288,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                lineNumber: 1282,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                        lineNumber: 1155,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                    lineNumber: 1154,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 z-50 sm:hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-background/80 backdrop-blur-sm",
                            onClick: ()=>setMenuOpen(false)
                        }, void 0, false, {
                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                            lineNumber: 1302,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 left-0 bottom-0 w-72 bg-background border-r border-border flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between px-5 h-14 border-b border-border shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-heading text-2xl text-primary tracking-widest",
                                                    children: "ToRock"
                                                }, void 0, false, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 1311,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-meta text-[9px] uppercase tracking-wider text-muted-foreground border border-border px-1.5 py-0.5",
                                                    children: "ADMIN"
                                                }, void 0, false, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 1312,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1310,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setMenuOpen(false),
                                            className: "p-2 text-muted-foreground hover:text-foreground transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 1318,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1314,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                    lineNumber: 1309,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 py-3 overflow-y-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-meta text-[9px] uppercase tracking-wider text-muted-foreground px-5 mb-2",
                                            children: "Navigation"
                                        }, void 0, false, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1324,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        [
                                            [
                                                "overview",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
                                                "Overview",
                                                activityLog.length > 0 ? String(activityLog.length) : null
                                            ],
                                            [
                                                "articles",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
                                                "Articles",
                                                articles.length > 0 ? String(articles.length) : null
                                            ],
                                            [
                                                "notifications",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"],
                                                "Notifications",
                                                incomingInvites.length > 0 ? String(incomingInvites.length) : null
                                            ],
                                            [
                                                "form",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"],
                                                editingId ? "Edit Article" : "New Article",
                                                null
                                            ]
                                        ].map(([v, Icon, label, badge])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    if (v === "form") handleNew();
                                                    else switchView(v);
                                                    setMenuOpen(false);
                                                },
                                                className: `w-full flex items-center gap-3 px-5 py-3 font-meta text-sm uppercase tracking-wider transition-colors ${view === v ? "text-primary bg-primary/8 border-r-2 border-primary" : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        className: "h-4 w-4 shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                        lineNumber: 1343,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex-1 text-left",
                                                        children: label
                                                    }, void 0, false, {
                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                        lineNumber: 1344,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-meta text-[9px] bg-primary/15 text-primary px-1.5 py-0.5",
                                                        children: badge
                                                    }, void 0, false, {
                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                        lineNumber: 1346,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, v, true, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 1331,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-t border-border mt-3 pt-3 mx-5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-meta text-[9px] uppercase tracking-wider text-muted-foreground mb-2",
                                                children: "Actions"
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 1352,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1351,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                loadArticles(true);
                                                setMenuOpen(false);
                                            },
                                            className: "w-full flex items-center gap-3 px-5 py-3 font-meta text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                    className: `h-4 w-4 shrink-0 ${refreshing ? "animate-spin" : ""}`
                                                }, void 0, false, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 1358,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Refresh data"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1354,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Link"], {
                                            to: "/",
                                            onClick: ()=>setMenuOpen(false),
                                            className: "flex items-center gap-3 px-5 py-3 font-meta text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                    className: "h-4 w-4 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 1366,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Back to site"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1361,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Link"], {
                                            to: "/admin/leaderboard",
                                            onClick: ()=>setMenuOpen(false),
                                            className: "flex items-center gap-3 px-5 py-3 font-meta text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                                    className: "h-4 w-4 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 1374,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Leaderboard"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1369,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-t border-border mt-3 pt-3 mx-5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-meta text-[9px] uppercase tracking-wider text-muted-foreground mb-2",
                                                children: "Account"
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 1379,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1378,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                switchView("profile");
                                                setMenuOpen(false);
                                            },
                                            className: `w-full flex items-center gap-3 px-5 py-3 font-meta text-sm uppercase tracking-wider transition-colors ${view === "profile" ? "text-primary bg-primary/8 border-r-2 border-primary" : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$user$2d$round$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCircle2$3e$__["UserCircle2"], {
                                                    className: "h-4 w-4 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 1386,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Profile"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1381,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setMenuOpen(false);
                                                onLogout();
                                            },
                                            className: "w-full flex items-center gap-3 px-5 py-3 font-meta text-sm uppercase tracking-wider text-muted-foreground hover:text-destructive hover:bg-secondary/60 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                    className: "h-4 w-4 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 1393,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Sign out"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1389,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                    lineNumber: 1323,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                isDirty && view === "form" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t border-border px-5 py-3 shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-meta text-[10px] uppercase tracking-wider text-primary animate-pulse flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1.5 h-1.5 rounded-full bg-primary inline-block"
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 1402,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Unsaved changes"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                        lineNumber: 1401,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                    lineNumber: 1400,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                            lineNumber: 1307,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                    lineNumber: 1300,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-b border-border bg-background sticky top-0 z-40",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container flex items-center justify-between h-14 gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 sm:gap-4 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setMenuOpen(true),
                                        className: "sm:hidden p-2 -ml-2 text-muted-foreground hover:text-primary transition-colors shrink-0",
                                        "aria-label": "Open menu",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1421,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                        lineNumber: 1416,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Link"], {
                                        to: "/",
                                        className: "font-heading text-xl sm:text-3xl text-primary tracking-widest truncate",
                                        children: "ToRock Verse"
                                    }, void 0, false, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                        lineNumber: 1423,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-meta text-[10px] uppercase tracking-wider text-muted-foreground border border-border px-2 py-0.5 shrink-0",
                                        children: "ADMIN"
                                    }, void 0, false, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                        lineNumber: 1424,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isDirty && view === "form" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-meta text-[10px] uppercase tracking-wider text-primary animate-pulse shrink-0 hidden sm:inline",
                                        children: "● Unsaved"
                                    }, void 0, false, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                        lineNumber: 1426,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                lineNumber: 1414,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 sm:gap-3 shrink-0",
                                children: [
                                    isDirty && view === "form" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-meta text-[10px] text-primary animate-pulse sm:hidden",
                                        children: "●"
                                    }, void 0, false, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                        lineNumber: 1431,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$components$2f$ThemeToggle$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                        lineNumber: 1433,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>switchView("notifications"),
                                        className: "hidden sm:flex items-center gap-1.5 border border-border px-2.5 py-1.5 font-meta text-xs uppercase tracking-wider text-muted-foreground hover:text-primary hover:border-primary transition-colors relative",
                                        title: "Notifications",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 1439,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Notifications"
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 1440,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            incomingInvites.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-meta text-[9px] bg-primary/15 text-primary px-1.5 py-0.5",
                                                children: incomingInvites.length
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 1442,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                        lineNumber: 1434,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>loadArticles(true),
                                        className: "p-2 text-muted-foreground hover:text-primary transition-colors hidden sm:block",
                                        title: "Refresh",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                            className: `h-4 w-4 ${refreshing ? "animate-spin" : ""}`
                                        }, void 0, false, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1450,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                        lineNumber: 1445,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Link"], {
                                        to: "/",
                                        className: "hidden sm:flex items-center gap-1.5 font-meta text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 1453,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Back to site"
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 1453,
                                                columnNumber: 54
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                        lineNumber: 1452,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Link"], {
                                        to: "/admin/leaderboard",
                                        className: "hidden sm:flex items-center gap-1.5 font-meta text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 1456,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Leaderboard"
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 1456,
                                                columnNumber: 54
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                        lineNumber: 1455,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative hidden sm:block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setProfileOpen((v)=>!v),
                                                className: "flex items-center gap-2 font-meta text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors border border-border px-2.5 py-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-5 h-5 bg-primary flex items-center justify-center font-heading text-[10px] text-primary-foreground",
                                                        children: profile.avatar || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                            className: "h-3 w-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 1465,
                                                            columnNumber: 40
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                        lineNumber: 1464,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "max-w-[80px] truncate",
                                                        children: profile.name || userEmail.split("@")[0] || "Admin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                        lineNumber: 1467,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: "h-3 w-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                        lineNumber: 1468,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 1460,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            profileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "fixed inset-0 z-40",
                                                        onClick: ()=>setProfileOpen(false)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                        lineNumber: 1472,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute right-0 top-full mt-1 w-48 bg-background border border-border shadow-lg z-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "px-4 py-3 border-b border-border",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-body text-sm text-foreground truncate",
                                                                        children: profile.name || "Admin"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                        lineNumber: 1475,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-meta text-[10px] text-muted-foreground truncate",
                                                                        children: userEmail
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                        lineNumber: 1476,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                lineNumber: 1474,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    setProfileOpen(false);
                                                                    switchView("notifications");
                                                                    window.scrollTo({
                                                                        top: 0,
                                                                        behavior: "smooth"
                                                                    });
                                                                },
                                                                className: "w-full flex items-center gap-2.5 px-4 py-2.5 font-meta text-xs uppercase tracking-wider text-muted-foreground hover:text-primary hover:bg-secondary/60 transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                                                        className: "h-3.5 w-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                        lineNumber: 1486,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Notifications"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                        lineNumber: 1487,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    incomingInvites.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "ml-auto font-meta text-[9px] bg-primary/15 text-primary px-1.5 py-0.5",
                                                                        children: incomingInvites.length
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                        lineNumber: 1489,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                lineNumber: 1478,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    setProfileOpen(false);
                                                                    switchView("profile");
                                                                },
                                                                className: "w-full flex items-center gap-2.5 px-4 py-2.5 font-meta text-xs uppercase tracking-wider text-muted-foreground hover:text-primary hover:bg-secondary/60 transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$user$2d$round$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCircle2$3e$__["UserCircle2"], {
                                                                        className: "h-3.5 w-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                        lineNumber: 1498,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " Profile"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                lineNumber: 1494,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    setProfileOpen(false);
                                                                    onLogout();
                                                                },
                                                                className: "w-full flex items-center gap-2.5 px-4 py-2.5 font-meta text-xs uppercase tracking-wider text-muted-foreground hover:text-destructive hover:bg-secondary/60 transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                                        className: "h-3.5 w-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                        lineNumber: 1504,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " Sign out"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                lineNumber: 1500,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                        lineNumber: 1473,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                        lineNumber: 1459,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                lineNumber: 1429,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                        lineNumber: 1413,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                    lineNumber: 1412,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-b border-border bg-background hidden sm:block",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container flex gap-0 overflow-x-auto scrollbar-none",
                        children: [
                            [
                                "overview",
                                __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
                                "Overview",
                                activityLog.length > 0 ? String(activityLog.length) : null
                            ],
                            [
                                "articles",
                                __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
                                "Articles",
                                articles.length > 0 ? String(articles.length) : null
                            ],
                            [
                                "notifications",
                                __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"],
                                "Notifications",
                                incomingInvites.length > 0 ? String(incomingInvites.length) : null
                            ],
                            [
                                "form",
                                __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"],
                                editingId ? "Edit Article" : "New Article",
                                null
                            ]
                        ].map(([v, Icon, label, badge])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    if (v === "form") handleNew();
                                    else switchView(v);
                                },
                                className: `flex items-center gap-2 px-3 sm:px-4 py-3 font-meta text-xs uppercase tracking-wider border-b-2 transition-colors whitespace-nowrap shrink-0 ${view === v ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                        lineNumber: 1529,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    label,
                                    badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-meta text-[9px] bg-primary/15 text-primary px-1.5 py-0.5",
                                        children: badge
                                    }, void 0, false, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                        lineNumber: 1532,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, v, true, {
                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                lineNumber: 1523,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                        lineNumber: 1516,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                    lineNumber: 1515,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sm:hidden border-b border-border bg-secondary/30",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container flex items-center gap-2 h-9",
                        children: [
                            view === "overview" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                className: "h-3.5 w-3.5 text-primary"
                            }, void 0, false, {
                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                lineNumber: 1542,
                                columnNumber: 37
                            }, ("TURBOPACK compile-time value", void 0)),
                            view === "articles" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                className: "h-3.5 w-3.5 text-primary"
                            }, void 0, false, {
                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                lineNumber: 1543,
                                columnNumber: 37
                            }, ("TURBOPACK compile-time value", void 0)),
                            view === "notifications" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                className: "h-3.5 w-3.5 text-primary"
                            }, void 0, false, {
                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                lineNumber: 1544,
                                columnNumber: 42
                            }, ("TURBOPACK compile-time value", void 0)),
                            view === "form" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "h-3.5 w-3.5 text-primary"
                            }, void 0, false, {
                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                lineNumber: 1545,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-meta text-[10px] uppercase tracking-wider text-primary",
                                children: [
                                    view === "overview" && "Overview",
                                    view === "articles" && "Articles",
                                    view === "notifications" && "Notifications",
                                    view === "form" && (editingId ? "Edit Article" : "New Article")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                lineNumber: 1546,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                        lineNumber: 1541,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                    lineNumber: 1540,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "container py-6 max-w-6xl",
                    children: [
                        view === "notifications" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "font-heading text-3xl text-foreground tracking-widest",
                                            children: "NOTIFICATIONS"
                                        }, void 0, false, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1559,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-meta text-[10px] uppercase tracking-wider text-muted-foreground",
                                            children: [
                                                incomingInvites.length,
                                                " pending"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1560,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                    lineNumber: 1558,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                incomingInvites.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border border-border p-10 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                            className: "h-8 w-8 text-muted-foreground/50 mx-auto mb-3"
                                        }, void 0, false, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1567,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-body text-sm text-muted-foreground",
                                            children: "No collaboration invitations right now."
                                        }, void 0, false, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1568,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                    lineNumber: 1566,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border border-primary/40 bg-primary/5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4 py-3 border-b border-primary/30 flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "font-heading text-lg tracking-widest text-foreground",
                                                    children: "INVITATION NOTIFICATIONS"
                                                }, void 0, false, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 1573,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-meta text-[10px] uppercase tracking-wider text-primary",
                                                    children: [
                                                        incomingInvites.length,
                                                        " pending"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 1574,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1572,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "divide-y divide-primary/20",
                                            children: incomingInvites.map((invite)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-4 py-3 flex items-center justify-between gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "min-w-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-body text-sm text-foreground truncate",
                                                                    children: [
                                                                        "Invite to collaborate on: ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-semibold",
                                                                            children: invite.article_title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 1581,
                                                                            columnNumber: 55
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                    lineNumber: 1580,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-meta text-[10px] text-muted-foreground truncate",
                                                                    children: [
                                                                        "From ",
                                                                        invite.inviter_email,
                                                                        " • ",
                                                                        new Date(invite.created_at).toLocaleDateString("en-GB")
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                    lineNumber: 1583,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 1579,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 shrink-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>handleRespondInvite(invite.invite_id, "accepted"),
                                                                    disabled: inviteActionId === invite.invite_id,
                                                                    className: "font-meta text-[10px] uppercase tracking-wider border border-green-500 text-green-500 hover:bg-green-500/10 px-2.5 py-1.5 transition-colors disabled:opacity-40",
                                                                    children: "Accept"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                    lineNumber: 1588,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>handleRespondInvite(invite.invite_id, "rejected"),
                                                                    disabled: inviteActionId === invite.invite_id,
                                                                    className: "font-meta text-[10px] uppercase tracking-wider border border-destructive text-destructive hover:bg-destructive/10 px-2.5 py-1.5 transition-colors disabled:opacity-40",
                                                                    children: "Reject"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                    lineNumber: 1596,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 1587,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, invite.invite_id, true, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 1578,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1576,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                    lineNumber: 1571,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                            lineNumber: 1557,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        view === "overview" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "font-heading text-3xl text-foreground tracking-widest",
                                            children: "OVERVIEW"
                                        }, void 0, false, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1617,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        stats.latestPublish && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-meta text-[10px] uppercase tracking-wider text-muted-foreground",
                                            children: [
                                                "Last published: ",
                                                new Date(stats.latestPublish.updated_at).toLocaleDateString("en-GB", {
                                                    day: "2-digit",
                                                    month: "short",
                                                    year: "2-digit"
                                                })
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1619,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                    lineNumber: 1616,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4",
                                    children: [
                                        {
                                            label: "Total",
                                            value: stats.total,
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
                                            color: "text-foreground"
                                        },
                                        {
                                            label: "Published",
                                            value: stats.published,
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"],
                                            color: "text-green-500"
                                        },
                                        {
                                            label: "Drafts",
                                            value: stats.drafts,
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"],
                                            color: "text-muted-foreground"
                                        },
                                        {
                                            label: "Breaking",
                                            value: stats.breaking,
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"],
                                            color: "text-primary"
                                        },
                                        {
                                            label: "Publish Rate",
                                            value: `${stats.publishRate}%`,
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
                                            color: "text-blue-400"
                                        }
                                    ].map(({ label, value, icon: Icon, color })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border border-border p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-meta text-[10px] uppercase tracking-wider text-muted-foreground",
                                                            children: label
                                                        }, void 0, false, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 1636,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                            className: `h-4 w-4 ${color}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 1637,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 1635,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `font-heading text-4xl ${color}`,
                                                    children: value
                                                }, void 0, false, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 1639,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, label, true, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1634,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                    lineNumber: 1626,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-[1fr_360px] gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border border-border",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border-b border-border px-4 py-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "font-heading text-lg tracking-widest text-foreground",
                                                        children: "ARTICLES BY CATEGORY"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                        lineNumber: 1648,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 1647,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "divide-y divide-border",
                                                    children: [
                                                        stats.byCategory.map(({ name, count })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-4 px-4 py-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-meta text-xs uppercase tracking-wider text-muted-foreground w-20 shrink-0",
                                                                        children: name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                        lineNumber: 1653,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1 bg-secondary h-2 overflow-hidden",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "bg-primary h-2 transition-all duration-500",
                                                                            style: {
                                                                                width: stats.total ? `${count / stats.total * 100}%` : "0%"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 1655,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                        lineNumber: 1654,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-heading text-sm text-foreground w-8 text-right shrink-0",
                                                                        children: count
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                        lineNumber: 1660,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>{
                                                                            setFilterCategory(name);
                                                                            switchView("articles");
                                                                        },
                                                                        className: "font-meta text-[9px] uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors shrink-0 w-8",
                                                                        children: "View"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                        lineNumber: 1661,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, name, true, {
                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                lineNumber: 1652,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))),
                                                        stats.total === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-body text-sm text-muted-foreground px-4 py-6 text-center",
                                                            children: "No articles yet."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 1670,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 1650,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1646,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border border-border flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between border-b border-border px-4 py-3 shrink-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                                    className: "h-3.5 w-3.5 text-muted-foreground"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                    lineNumber: 1679,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                    className: "font-heading text-lg tracking-widest text-foreground",
                                                                    children: "ACTIVITY LOG"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                    lineNumber: 1680,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 1678,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        activityLog.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setActivityLog([]),
                                                            className: "font-meta text-[9px] uppercase tracking-wider text-muted-foreground hover:text-destructive transition-colors",
                                                            children: "Clear"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 1683,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 1677,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "divide-y divide-border overflow-y-auto max-h-72 flex-1",
                                                    children: activityLog.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-center justify-center py-10 gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                                className: "h-6 w-6 text-muted-foreground/40"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                lineNumber: 1694,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-body text-xs text-muted-foreground",
                                                                children: "No activity in this session yet."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                lineNumber: 1695,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                        lineNumber: 1693,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)) : activityLog.map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3 px-4 py-2.5 hover:bg-secondary/30 transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `font-meta text-[9px] uppercase tracking-wider w-20 shrink-0 ${ACTION_COLOR[entry.action]}`,
                                                                    children: entry.action
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                    lineNumber: 1700,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-body text-xs text-foreground flex-1 min-w-0 truncate",
                                                                    children: entry.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                    lineNumber: 1703,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-meta text-[9px] text-muted-foreground shrink-0",
                                                                    children: entry.timestamp.toLocaleTimeString("en-GB", {
                                                                        hour: "2-digit",
                                                                        minute: "2-digit",
                                                                        second: "2-digit"
                                                                    })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                    lineNumber: 1704,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, entry.id, true, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 1699,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 1691,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1676,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                    lineNumber: 1644,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border border-border",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between border-b border-border px-4 py-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "font-heading text-lg tracking-widest text-foreground",
                                                    children: "RECENT ARTICLES"
                                                }, void 0, false, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 1718,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>switchView("articles"),
                                                    className: "font-meta text-[10px] uppercase tracking-wider text-primary hover:underline",
                                                    children: "View All"
                                                }, void 0, false, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 1719,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1717,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "divide-y divide-border",
                                            children: [
                                                articles.slice(0, 5).map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3 px-4 py-3 hover:bg-secondary/50 transition-colors",
                                                        children: [
                                                            a.image_url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: a.image_url,
                                                                alt: "",
                                                                className: "w-10 h-8 object-cover border border-border shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                lineNumber: 1727,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-10 h-8 bg-muted border border-border shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                lineNumber: 1729,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-body text-sm text-foreground truncate",
                                                                        children: a.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                        lineNumber: 1732,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2 mt-0.5",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-meta text-[9px] uppercase tracking-wider text-primary",
                                                                                children: a.category
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                lineNumber: 1734,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `font-meta text-[9px] uppercase tracking-wider ${a.published ? "text-green-500" : "text-muted-foreground"}`,
                                                                                children: a.published ? "Published" : "Draft"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                lineNumber: 1735,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                        lineNumber: 1733,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                lineNumber: 1731,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-1 shrink-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleEdit(a),
                                                                        className: "p-1.5 text-muted-foreground hover:text-primary transition-colors",
                                                                        title: "Edit",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                            className: "h-3.5 w-3.5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 1742,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                        lineNumber: 1741,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleDuplicate(a),
                                                                        className: "p-1.5 text-muted-foreground hover:text-primary transition-colors",
                                                                        title: "Duplicate",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                            className: "h-3.5 w-3.5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 1745,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                        lineNumber: 1744,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    isOwner(a) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleManageCollaborators(a),
                                                                        className: "p-1.5 text-muted-foreground hover:text-primary transition-colors",
                                                                        title: "Manage Collaborators",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                                                                            className: "h-3.5 w-3.5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 1749,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                        lineNumber: 1748,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Link"], {
                                                                        to: `/article/${a.slug}`,
                                                                        target: "_blank",
                                                                        className: "p-1.5 text-muted-foreground hover:text-primary transition-colors",
                                                                        title: "View live",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                            className: "h-3.5 w-3.5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 1753,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                        lineNumber: 1752,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                lineNumber: 1740,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, a.id, true, {
                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                        lineNumber: 1725,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))),
                                                loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-body text-sm text-muted-foreground px-4 py-6 text-center",
                                                    children: "Loading..."
                                                }, void 0, false, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 1758,
                                                    columnNumber: 31
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1723,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                    lineNumber: 1716,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleNew,
                                    className: "font-meta text-xs uppercase tracking-wider gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1763,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " New Article"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                    lineNumber: 1762,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                            lineNumber: 1615,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        view === "articles" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "font-heading text-3xl text-foreground tracking-widest",
                                            children: "ARTICLES"
                                        }, void 0, false, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1772,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: handleNew,
                                            className: "font-meta text-xs uppercase tracking-wider gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 1774,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " New Article"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1773,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                    lineNumber: 1771,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-full sm:w-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                    className: "absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground"
                                                }, void 0, false, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 1781,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: searchQuery,
                                                    onChange: (e)=>setSearchQuery(e.target.value),
                                                    placeholder: "Search articles...",
                                                    className: "bg-secondary border border-border pl-8 pr-8 py-1.5 text-xs font-meta text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary w-full sm:w-52"
                                                }, void 0, false, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 1782,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSearchQuery(""),
                                                    className: "absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "h-3 w-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                        lineNumber: 1790,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 1789,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1780,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                                    className: "h-3.5 w-3.5 text-muted-foreground"
                                                }, void 0, false, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 1795,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: filterCategory,
                                                    onChange: (e)=>setFilterCategory(e.target.value),
                                                    className: "bg-secondary border border-border px-2 py-1.5 text-xs font-meta text-foreground focus:outline-none focus:border-primary",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "All",
                                                            children: "All Categories"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 1801,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        CATEGORIES.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: c,
                                                                children: c
                                                            }, c, false, {
                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                lineNumber: 1802,
                                                                columnNumber: 44
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 1796,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: filterStatus,
                                                    onChange: (e)=>setFilterStatus(e.target.value),
                                                    className: "bg-secondary border border-border px-2 py-1.5 text-xs font-meta text-foreground focus:outline-none focus:border-primary",
                                                    children: [
                                                        "All",
                                                        "Published",
                                                        "Draft",
                                                        "Breaking"
                                                    ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: s,
                                                            children: s
                                                        }, s, false, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 1809,
                                                            columnNumber: 75
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 1804,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1794,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-meta text-[10px] text-muted-foreground ml-auto",
                                            children: [
                                                filtered.length,
                                                " of ",
                                                articles.length,
                                                " articles"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1812,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                    lineNumber: 1779,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                selected.size > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center gap-3 px-4 py-2 border border-primary bg-primary/5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-meta text-xs uppercase tracking-wider text-primary",
                                            children: [
                                                selected.size,
                                                " selected"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1820,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleBulkPublish(true),
                                            className: "font-meta text-[10px] uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                    className: "h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 1822,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " Publish"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1821,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleBulkPublish(false),
                                            className: "font-meta text-[10px] uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                    className: "h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 1825,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " Unpublish"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1824,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleBulkDelete,
                                            className: "font-meta text-[10px] uppercase tracking-wider text-muted-foreground hover:text-destructive transition-colors flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    className: "h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 1828,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " Delete"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1827,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSelected(new Set()),
                                            className: "ml-auto text-muted-foreground hover:text-foreground",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 1831,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1830,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                    lineNumber: 1819,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-body text-sm text-muted-foreground py-12 text-center",
                                    children: "Loading..."
                                }, void 0, false, {
                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                    lineNumber: 1837,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)) : filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border border-border p-12 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                            className: "h-8 w-8 text-muted-foreground mx-auto mb-3"
                                        }, void 0, false, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1840,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-body text-sm text-muted-foreground",
                                            children: "No articles found."
                                        }, void 0, false, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1841,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                    lineNumber: 1839,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border border-border",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hidden md:grid grid-cols-[24px_60px_1fr_90px_110px_80px_130px] gap-3 px-4 py-2 border-b border-border bg-secondary/50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: selected.size === paginated.length && paginated.length > 0,
                                                            onChange: toggleSelectAll,
                                                            className: "accent-primary mt-0.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 1848,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-meta text-[9px] uppercase tracking-wider text-muted-foreground",
                                                            children: "Image"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 1854,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>toggleSort("title"),
                                                            className: "font-meta text-[9px] uppercase tracking-wider text-muted-foreground hover:text-foreground text-left flex items-center",
                                                            children: [
                                                                "Title ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SortIcon, {
                                                                    field: "title"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                    lineNumber: 1856,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 1855,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>toggleSort("category"),
                                                            className: "font-meta text-[9px] uppercase tracking-wider text-muted-foreground hover:text-foreground text-left flex items-center",
                                                            children: [
                                                                "Category ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SortIcon, {
                                                                    field: "category"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                    lineNumber: 1859,
                                                                    columnNumber: 34
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 1858,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-meta text-[9px] uppercase tracking-wider text-muted-foreground",
                                                            children: "Status"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 1861,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>toggleSort("created_at"),
                                                            className: "font-meta text-[9px] uppercase tracking-wider text-muted-foreground hover:text-foreground text-left flex items-center",
                                                            children: [
                                                                "Date ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SortIcon, {
                                                                    field: "created_at"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                    lineNumber: 1863,
                                                                    columnNumber: 30
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 1862,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-meta text-[9px] uppercase tracking-wider text-muted-foreground text-right",
                                                            children: "Actions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 1865,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 1847,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "divide-y divide-border",
                                                    children: paginated.map((article)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `hover:bg-secondary/50 transition-colors ${selected.has(article.id) ? "bg-primary/5" : ""}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "md:hidden flex items-start gap-3 px-4 py-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            checked: selected.has(article.id),
                                                                            onChange: ()=>toggleSelect(article.id),
                                                                            className: "accent-primary mt-1 shrink-0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 1876,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        article.image_url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: article.image_url,
                                                                            alt: "",
                                                                            className: "w-16 h-12 object-cover border border-border shrink-0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 1883,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-16 h-12 bg-muted border border-border flex items-center justify-center shrink-0",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-meta text-[7px] text-muted-foreground",
                                                                                children: "NO IMG"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                lineNumber: 1886,
                                                                                columnNumber: 33
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 1885,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-1 min-w-0",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-body text-sm text-foreground leading-snug line-clamp-2",
                                                                                    children: article.title
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                    lineNumber: 1890,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-meta text-[9px] text-muted-foreground block truncate",
                                                                                    children: [
                                                                                        "/",
                                                                                        article.slug
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                    lineNumber: 1891,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center gap-2 mt-1 flex-wrap",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "font-meta text-[9px] uppercase tracking-wider text-primary",
                                                                                            children: article.category
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                            lineNumber: 1893,
                                                                                            columnNumber: 33
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            onClick: ()=>handleTogglePublish(article),
                                                                                            className: `font-meta text-[9px] uppercase tracking-wider ${article.published ? "text-green-500" : "text-muted-foreground"}`,
                                                                                            children: article.published ? "● Live" : "○ Draft"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                            lineNumber: 1894,
                                                                                            columnNumber: 33
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        article.is_breaking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "font-meta text-[9px] uppercase tracking-wider text-primary border border-primary px-1",
                                                                                            children: "Breaking"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                            lineNumber: 1901,
                                                                                            columnNumber: 35
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                    lineNumber: 1892,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 1889,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex flex-col gap-0.5 shrink-0",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>handleEdit(article),
                                                                                    className: "p-1.5 text-muted-foreground hover:text-primary transition-colors",
                                                                                    title: "Edit",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                                        className: "h-3.5 w-3.5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                        lineNumber: 1907,
                                                                                        columnNumber: 33
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                    lineNumber: 1906,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                article.published && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Link"], {
                                                                                    to: `/article/${article.slug}`,
                                                                                    target: "_blank",
                                                                                    className: "p-1.5 text-muted-foreground hover:text-primary transition-colors",
                                                                                    title: "View live",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                                        className: "h-3.5 w-3.5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                        lineNumber: 1911,
                                                                                        columnNumber: 35
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                    lineNumber: 1910,
                                                                                    columnNumber: 33
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>handleDelete(article.id),
                                                                                    className: "p-1.5 text-muted-foreground hover:text-destructive transition-colors",
                                                                                    title: "Delete",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                        className: "h-3.5 w-3.5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                        lineNumber: 1915,
                                                                                        columnNumber: 33
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                    lineNumber: 1914,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 1905,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                    lineNumber: 1875,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "hidden md:grid grid-cols-[24px_60px_1fr_90px_110px_80px_130px] gap-3 items-center px-4 py-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            checked: selected.has(article.id),
                                                                            onChange: ()=>toggleSelect(article.id),
                                                                            className: "accent-primary shrink-0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 1922,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        article.image_url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: article.image_url,
                                                                            alt: "",
                                                                            className: "w-14 h-10 object-cover border border-border"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 1929,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-14 h-10 bg-muted border border-border flex items-center justify-center shrink-0",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-meta text-[7px] text-muted-foreground",
                                                                                children: "NO IMG"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                lineNumber: 1932,
                                                                                columnNumber: 33
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 1931,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "min-w-0",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-body text-sm text-foreground truncate",
                                                                                    children: article.title
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                    lineNumber: 1936,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-meta text-[9px] text-muted-foreground",
                                                                                    children: [
                                                                                        "/",
                                                                                        article.slug
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                    lineNumber: 1937,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 1935,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-meta text-[10px] uppercase tracking-wider text-primary",
                                                                            children: article.category
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 1939,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>handleTogglePublish(article),
                                                                                    className: `relative inline-flex h-4 w-8 items-center rounded-full transition-colors focus:outline-none ${article.published ? "bg-green-500" : "bg-muted-foreground/30"}`,
                                                                                    title: article.published ? "Unpublish" : "Publish",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: `inline-block h-3 w-3 transform rounded-full bg-white shadow transition-transform ${article.published ? "translate-x-4" : "translate-x-0.5"}`
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                        lineNumber: 1946,
                                                                                        columnNumber: 33
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                    lineNumber: 1941,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex flex-col gap-0",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: `font-meta text-[9px] uppercase tracking-wider ${article.published ? "text-green-500" : "text-muted-foreground"}`,
                                                                                            children: article.published ? "Live" : "Draft"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                            lineNumber: 1949,
                                                                                            columnNumber: 33
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        article.is_breaking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "font-meta text-[9px] uppercase tracking-wider text-primary",
                                                                                            children: "Breaking"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                            lineNumber: 1953,
                                                                                            columnNumber: 35
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                    lineNumber: 1948,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 1940,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-meta text-[9px] text-muted-foreground",
                                                                            children: new Date(article.created_at).toLocaleDateString("en-GB", {
                                                                                day: "2-digit",
                                                                                month: "short",
                                                                                year: "2-digit"
                                                                            })
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 1957,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-0.5 justify-end shrink-0",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>handleEdit(article),
                                                                                    className: "p-1.5 text-muted-foreground hover:text-primary transition-colors",
                                                                                    title: "Edit",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                                        className: "h-3.5 w-3.5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                        lineNumber: 1962,
                                                                                        columnNumber: 33
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                    lineNumber: 1961,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>handleDuplicate(article),
                                                                                    className: "p-1.5 text-muted-foreground hover:text-primary transition-colors",
                                                                                    title: "Duplicate",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                                        className: "h-3.5 w-3.5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                        lineNumber: 1965,
                                                                                        columnNumber: 33
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                    lineNumber: 1964,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                isOwner(article) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>handleManageCollaborators(article),
                                                                                    className: "p-1.5 text-muted-foreground hover:text-primary transition-colors",
                                                                                    title: "Manage Collaborators",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                                                                                        className: "h-3.5 w-3.5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                        lineNumber: 1969,
                                                                                        columnNumber: 35
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                    lineNumber: 1968,
                                                                                    columnNumber: 33
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                article.published && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Link"], {
                                                                                    to: `/article/${article.slug}`,
                                                                                    target: "_blank",
                                                                                    className: "p-1.5 text-muted-foreground hover:text-primary transition-colors",
                                                                                    title: "View live",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                                        className: "h-3.5 w-3.5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                        lineNumber: 1974,
                                                                                        columnNumber: 35
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                    lineNumber: 1973,
                                                                                    columnNumber: 33
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>handleDelete(article.id),
                                                                                    className: "p-1.5 text-muted-foreground hover:text-destructive transition-colors",
                                                                                    title: "Delete",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                        className: "h-3.5 w-3.5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                        lineNumber: 1978,
                                                                                        columnNumber: 33
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                    lineNumber: 1977,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 1960,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                    lineNumber: 1921,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, article.id, true, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 1870,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 1868,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1845,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between pt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-meta text-[10px] text-muted-foreground uppercase tracking-wider",
                                                    children: [
                                                        "Page ",
                                                        page,
                                                        " of ",
                                                        totalPages,
                                                        " · ",
                                                        filtered.length,
                                                        " articles"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 1990,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setPage((p)=>Math.max(1, p - 1)),
                                                            disabled: page === 1,
                                                            className: "p-1.5 text-muted-foreground hover:text-primary disabled:opacity-30 transition-colors",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                lineNumber: 1999,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 1994,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        Array.from({
                                                            length: totalPages
                                                        }, (_, i)=>i + 1).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setPage(p),
                                                                className: `w-7 h-7 font-meta text-[10px] uppercase tracking-wider transition-colors ${p === page ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`,
                                                                children: p
                                                            }, p, false, {
                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                lineNumber: 2002,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setPage((p)=>Math.min(totalPages, p + 1)),
                                                            disabled: page === totalPages,
                                                            className: "p-1.5 text-muted-foreground hover:text-primary disabled:opacity-30 transition-colors",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                lineNumber: 2015,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 2010,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 1993,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 1989,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                            lineNumber: 1770,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        view === "form" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-5 pb-24 lg:pb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between gap-3 pb-4 border-b border-border",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "font-heading text-2xl sm:text-3xl text-foreground tracking-widest truncate",
                                                    children: editingId ? "EDIT ARTICLE" : "NEW ARTICLE"
                                                }, void 0, false, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 2032,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 mt-1.5 flex-wrap",
                                                    children: [
                                                        editingId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-meta text-[9px] text-muted-foreground uppercase tracking-wider border border-border px-1.5 py-0.5 truncate max-w-[180px]",
                                                            children: editingId
                                                        }, void 0, false, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 2037,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-meta text-[9px] border border-border px-1.5 py-0.5 uppercase tracking-wider text-muted-foreground hidden sm:inline",
                                                            children: "Ctrl+S"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 2041,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-meta text-[9px] uppercase tracking-wider text-muted-foreground hidden sm:inline",
                                                            children: "to save"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 2042,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        isDirty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-meta text-[9px] uppercase tracking-wider text-primary flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-1.5 h-1.5 rounded-full bg-primary animate-pulse inline-block"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                    lineNumber: 2045,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                "Unsaved"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 2044,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 2035,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 2031,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: handleOpenFormCollaborators,
                                                    disabled: !editingId,
                                                    className: "flex items-center gap-1.5 font-meta text-xs uppercase tracking-wider text-muted-foreground hover:text-primary border border-border hover:border-primary px-2.5 py-2 transition-colors disabled:opacity-40 disabled:cursor-not-allowed",
                                                    title: editingId ? "Add collaborator" : "Save article first",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                                                            className: "h-3.5 w-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 2059,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hidden sm:inline ml-1",
                                                            children: "Add Collaborator"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 2059,
                                                            columnNumber: 57
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 2052,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setPreviewOpen(true),
                                                    className: "flex items-center gap-1.5 font-meta text-xs uppercase tracking-wider text-muted-foreground hover:text-primary border border-border hover:border-primary px-2.5 py-2 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                            className: "h-3.5 w-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 2066,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hidden sm:inline ml-1",
                                                            children: "Preview"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 2066,
                                                            columnNumber: 52
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 2061,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>switchView("articles"),
                                                    className: "flex items-center gap-1.5 font-meta text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground border border-border px-2.5 py-2 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                            className: "h-3.5 w-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 2073,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hidden sm:inline ml-1",
                                                            children: "Cancel"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 2073,
                                                            columnNumber: 50
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 2068,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 2051,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                    lineNumber: 2030,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    ref: formRef,
                                    onSubmit: handleSubmit,
                                    className: "grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 items-start",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4 order-first lg:order-last",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border border-border",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 px-4 py-2.5 border-b border-border bg-secondary/40",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-meta text-[10px] uppercase tracking-wider text-muted-foreground",
                                                                children: "Cover Image"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                lineNumber: 2086,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 2085,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$components$2f$ImageUpload$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                value: form.image_url,
                                                                onChange: (url)=>{
                                                                    setForm({
                                                                        ...form,
                                                                        image_url: url
                                                                    });
                                                                    markDirty();
                                                                },
                                                                onUploaded: registerUploadedImage
                                                            }, void 0, false, {
                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                lineNumber: 2089,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 2088,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 2084,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border border-border",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 px-4 py-2.5 border-b border-border bg-secondary/40",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-meta text-[10px] uppercase tracking-wider text-muted-foreground",
                                                                children: "Publish Settings"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                lineNumber: 2100,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 2099,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "divide-y divide-border",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-secondary/50 transition-colors",
                                                                    onClick: ()=>{
                                                                        setForm((f)=>({
                                                                                ...f,
                                                                                published: !f.published
                                                                            }));
                                                                        markDirty();
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-meta text-xs uppercase tracking-wider text-foreground",
                                                                                    children: "Published"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                    lineNumber: 2109,
                                                                                    columnNumber: 27
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-meta text-[9px] text-muted-foreground mt-0.5",
                                                                                    children: "Visible on the site"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                    lineNumber: 2110,
                                                                                    columnNumber: 27
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 2108,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `relative inline-flex h-5 w-9 items-center rounded-full transition-colors shrink-0 ${form.published ? "bg-green-500" : "bg-muted-foreground/30"}`,
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${form.published ? "translate-x-4" : "translate-x-0.5"}`
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                lineNumber: 2113,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 2112,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                    lineNumber: 2104,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-secondary/50 transition-colors",
                                                                    onClick: ()=>{
                                                                        setForm((f)=>({
                                                                                ...f,
                                                                                is_breaking: !f.is_breaking
                                                                            }));
                                                                        markDirty();
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-meta text-xs uppercase tracking-wider text-foreground",
                                                                                    children: "Breaking News"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                    lineNumber: 2122,
                                                                                    columnNumber: 27
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-meta text-[9px] text-muted-foreground mt-0.5",
                                                                                    children: "Shows red BREAKING badge"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                    lineNumber: 2123,
                                                                                    columnNumber: 27
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 2121,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `relative inline-flex h-5 w-9 items-center rounded-full transition-colors shrink-0 ${form.is_breaking ? "bg-primary" : "bg-muted-foreground/30"}`,
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${form.is_breaking ? "translate-x-4" : "translate-x-0.5"}`
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                lineNumber: 2126,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 2125,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                    lineNumber: 2117,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 2102,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 2098,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border border-border",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 px-4 py-2.5 border-b border-border bg-secondary/40",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-meta text-[10px] uppercase tracking-wider text-muted-foreground",
                                                                children: "Categorisation"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                lineNumber: 2135,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 2134,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-4 grid grid-cols-1 gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "font-meta text-[9px] uppercase tracking-wider text-muted-foreground block mb-1.5",
                                                                            children: "Categories"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 2139,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "grid grid-cols-2 gap-2",
                                                                            children: CATEGORIES.map((c)=>{
                                                                                const selected = form.categories.includes(c);
                                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: ()=>toggleFormCategory(c),
                                                                                    className: `px-2 py-1.5 border font-meta text-[10px] uppercase tracking-wider transition-colors text-left ${selected ? "border-primary text-primary bg-primary/10" : "border-border text-muted-foreground hover:text-foreground hover:border-primary"}`,
                                                                                    children: c
                                                                                }, c, false, {
                                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                    lineNumber: 2144,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0));
                                                                            })
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 2140,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-meta text-[9px] text-muted-foreground mt-2",
                                                                            children: [
                                                                                "Primary: ",
                                                                                form.categories[0] || form.category
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 2155,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                    lineNumber: 2138,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "font-meta text-[9px] uppercase tracking-wider text-muted-foreground block mb-1.5",
                                                                            children: "Read Time"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 2160,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            value: form.read_time,
                                                                            onChange: (e)=>{
                                                                                setForm({
                                                                                    ...form,
                                                                                    read_time: e.target.value
                                                                                });
                                                                                markDirty();
                                                                            },
                                                                            className: "w-full bg-background border border-border px-3 py-2 font-body text-sm text-foreground focus:outline-none focus:border-primary"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 2161,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                    lineNumber: 2159,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 2137,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 2133,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-3 divide-x divide-border border border-border",
                                                    children: [
                                                        {
                                                            label: "Words",
                                                            value: wordCount.total
                                                        },
                                                        {
                                                            label: "Blocks",
                                                            value: blocks.filter((b)=>b.value.trim()).length
                                                        },
                                                        {
                                                            label: "Min Read",
                                                            value: Math.max(1, Math.ceil(wordCount.total / 200))
                                                        }
                                                    ].map(({ label, value })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center py-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-heading text-xl text-foreground",
                                                                    children: value
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                    lineNumber: 2178,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-meta text-[8px] uppercase tracking-wider text-muted-foreground mt-0.5",
                                                                    children: label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                    lineNumber: 2179,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, label, true, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 2177,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 2171,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border border-border p-3 flex items-center justify-between gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-meta text-[10px] uppercase tracking-wider text-foreground",
                                                                    children: form.published ? "Published" : "Draft"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                    lineNumber: 2187,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-body text-[11px] text-muted-foreground mt-0.5",
                                                                    children: form.published ? "Visible on main page" : "Not visible to readers"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                    lineNumber: 2190,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 2186,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["Switch"], {
                                                            checked: form.published,
                                                            onCheckedChange: (v)=>{
                                                                setForm({
                                                                    ...form,
                                                                    published: v
                                                                });
                                                                markDirty();
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 2194,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 2185,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hidden lg:flex gap-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        type: "submit",
                                                        disabled: saving,
                                                        className: "flex-1 font-meta text-xs uppercase tracking-wider h-10",
                                                        children: saving ? "Saving..." : editingId ? "Update" : "Save"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                        lineNumber: 2202,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 2201,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 2081,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border border-border",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 px-4 py-2.5 border-b border-border bg-secondary/40",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-meta text-[10px] uppercase tracking-wider text-muted-foreground",
                                                                children: "Article Details"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                lineNumber: 2214,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 2213,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-4 space-y-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "font-meta text-[9px] uppercase tracking-wider text-muted-foreground block mb-1.5",
                                                                            children: "Title *"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 2218,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            value: form.title,
                                                                            onChange: (e)=>handleTitleChange(e.target.value),
                                                                            className: "w-full bg-background border border-border px-3 py-2.5 font-body text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary",
                                                                            placeholder: "Article title..."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 2219,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                    lineNumber: 2217,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "font-meta text-[9px] uppercase tracking-wider text-muted-foreground block mb-1.5",
                                                                            children: [
                                                                                "Slug * ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "normal-case tracking-normal",
                                                                                    children: "(auto-generated, URL-safe)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                    lineNumber: 2228,
                                                                                    columnNumber: 34
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 2227,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    value: form.slug,
                                                                                    onChange: (e)=>{
                                                                                        setForm({
                                                                                            ...form,
                                                                                            slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-")
                                                                                        });
                                                                                        markDirty();
                                                                                    },
                                                                                    className: "flex-1 min-w-0 bg-background border border-border px-3 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary",
                                                                                    placeholder: "article-slug"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                    lineNumber: 2231,
                                                                                    columnNumber: 27
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: ()=>{
                                                                                        setForm({
                                                                                            ...form,
                                                                                            slug: form.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
                                                                                        });
                                                                                        markDirty();
                                                                                    },
                                                                                    className: "shrink-0 px-3 py-2.5 border border-border text-muted-foreground hover:text-primary hover:border-primary font-meta text-[10px] uppercase tracking-wider transition-colors",
                                                                                    children: "Regen"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                    lineNumber: 2237,
                                                                                    columnNumber: 27
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 2230,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                    lineNumber: 2226,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 2216,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 2212,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border border-border",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between px-4 py-2.5 border-b border-border bg-secondary/40",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-meta text-[10px] uppercase tracking-wider text-muted-foreground",
                                                                    children: "Content"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                    lineNumber: 2252,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-meta text-[9px] text-muted-foreground flex items-center gap-1.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$align$2d$left$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignLeft$3e$__["AlignLeft"], {
                                                                            className: "h-3 w-3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 2254,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        " ",
                                                                        wordCount.total,
                                                                        " words · ",
                                                                        blocks.length,
                                                                        " block",
                                                                        blocks.length !== 1 ? "s" : ""
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                    lineNumber: 2253,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 2251,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-4 py-2 border-b border-border bg-secondary/20 font-meta text-[9px] uppercase tracking-wider text-muted-foreground",
                                                            children: "Shortcuts: Ctrl+B Bold · Ctrl+I Italic · Ctrl+U Underline · Ctrl+Shift+X Strike · Ctrl+Shift+K Code · Ctrl+Shift+8 Bullets · Ctrl+Z Undo · Ctrl+Y / Ctrl+Shift+Z Redo"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 2257,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-4 space-y-2",
                                                            children: [
                                                                blocks.map((block, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `border transition-colors ${dragOverBlockId === block.id ? "border-primary" : "border-border hover:border-primary/40"}`,
                                                                        onDragOver: (e)=>{
                                                                            e.preventDefault();
                                                                            if (draggedBlockIdRef.current && draggedBlockIdRef.current !== block.id) {
                                                                                e.dataTransfer.dropEffect = "move";
                                                                                setDragOverBlockId(block.id);
                                                                            }
                                                                        },
                                                                        onDragLeave: ()=>{
                                                                            if (dragOverBlockId === block.id) setDragOverBlockId(null);
                                                                        },
                                                                        onDrop: (e)=>{
                                                                            e.preventDefault();
                                                                            const draggedId = draggedBlockIdRef.current || e.dataTransfer.getData("text/plain");
                                                                            if (draggedId) moveBlockById(draggedId, block.id);
                                                                            draggedBlockIdRef.current = null;
                                                                            setDragOverBlockId(null);
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center justify-between px-3 py-1.5 border-b border-border bg-secondary/20",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                        value: block.type,
                                                                                        onChange: (e)=>{
                                                                                            const newType = e.target.value;
                                                                                            blockHistoryRef.current.undo.push(cloneBlocks(blocks));
                                                                                            if (blockHistoryRef.current.undo.length > BLOCK_HISTORY_LIMIT) blockHistoryRef.current.undo.shift();
                                                                                            blockHistoryRef.current.redo = [];
                                                                                            const newBlocks = [
                                                                                                ...blocks
                                                                                            ];
                                                                                            newBlocks[i] = {
                                                                                                ...block,
                                                                                                type: newType,
                                                                                                value: newType === "image" ? "" : block.value
                                                                                            };
                                                                                            setBlocks(newBlocks);
                                                                                            markDirty();
                                                                                        },
                                                                                        className: "bg-transparent font-meta text-[9px] uppercase tracking-wider text-muted-foreground hover:text-primary focus:outline-none cursor-pointer",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                value: "text",
                                                                                                children: "¶ Paragraph"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                                lineNumber: 2299,
                                                                                                columnNumber: 31
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                value: "heading",
                                                                                                children: "H1 Heading"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                                lineNumber: 2300,
                                                                                                columnNumber: 31
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                value: "subheading",
                                                                                                children: "H2 Subheading"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                                lineNumber: 2301,
                                                                                                columnNumber: 31
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                value: "quote",
                                                                                                children: "❝ Quote"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                                lineNumber: 2302,
                                                                                                columnNumber: 31
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                value: "bullets",
                                                                                                children: "• Bullets"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                                lineNumber: 2303,
                                                                                                columnNumber: 31
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                value: "table",
                                                                                                children: "▦ Table"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                                lineNumber: 2304,
                                                                                                columnNumber: 31
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                value: "image",
                                                                                                children: "⬛ Image"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                                lineNumber: 2305,
                                                                                                columnNumber: 31
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                        lineNumber: 2285,
                                                                                        columnNumber: 29
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center gap-0.5",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                type: "button",
                                                                                                draggable: true,
                                                                                                onDragStart: (e)=>{
                                                                                                    draggedBlockIdRef.current = block.id;
                                                                                                    e.dataTransfer.effectAllowed = "move";
                                                                                                    e.dataTransfer.setData("text/plain", block.id);
                                                                                                },
                                                                                                onDragEnd: ()=>{
                                                                                                    draggedBlockIdRef.current = null;
                                                                                                    setDragOverBlockId(null);
                                                                                                },
                                                                                                className: "p-1 text-muted-foreground hover:text-primary transition-colors cursor-grab active:cursor-grabbing",
                                                                                                title: "Drag to reorder",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__["GripVertical"], {
                                                                                                    className: "h-3 w-3"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                                    lineNumber: 2323,
                                                                                                    columnNumber: 33
                                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                                lineNumber: 2308,
                                                                                                columnNumber: 31
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            block.type !== "image" && wordCount.perBlock[i] > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "font-meta text-[9px] text-muted-foreground mr-2",
                                                                                                children: [
                                                                                                    wordCount.perBlock[i],
                                                                                                    "w"
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                                lineNumber: 2326,
                                                                                                columnNumber: 33
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            block.type !== "image" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                        type: "button",
                                                                                                        onClick: ()=>applyInlineFormat(block.id, "bold"),
                                                                                                        className: "p-1 text-muted-foreground hover:text-primary transition-colors",
                                                                                                        title: "Bold (**text**)",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bold$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bold$3e$__["Bold"], {
                                                                                                            className: "h-3 w-3"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                                            lineNumber: 2336,
                                                                                                            columnNumber: 37
                                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                                        lineNumber: 2330,
                                                                                                        columnNumber: 35
                                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                        type: "button",
                                                                                                        onClick: ()=>applyInlineFormat(block.id, "italic"),
                                                                                                        className: "p-1 text-muted-foreground hover:text-primary transition-colors",
                                                                                                        title: "Italic (*text*)",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$italic$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Italic$3e$__["Italic"], {
                                                                                                            className: "h-3 w-3"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                                            lineNumber: 2344,
                                                                                                            columnNumber: 37
                                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                                        lineNumber: 2338,
                                                                                                        columnNumber: 35
                                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                        type: "button",
                                                                                                        onClick: ()=>applyInlineFormat(block.id, "underline"),
                                                                                                        className: "p-1 text-muted-foreground hover:text-primary transition-colors",
                                                                                                        title: "Underline (__text__)",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$underline$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Underline$3e$__["Underline"], {
                                                                                                            className: "h-3 w-3"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                                            lineNumber: 2352,
                                                                                                            columnNumber: 37
                                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                                        lineNumber: 2346,
                                                                                                        columnNumber: 35
                                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                        type: "button",
                                                                                                        onClick: ()=>applyInlineFormat(block.id, "strike"),
                                                                                                        className: "p-1 text-muted-foreground hover:text-primary transition-colors",
                                                                                                        title: "Strikethrough (~~text~~)",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$strikethrough$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Strikethrough$3e$__["Strikethrough"], {
                                                                                                            className: "h-3 w-3"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                                            lineNumber: 2360,
                                                                                                            columnNumber: 37
                                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                                        lineNumber: 2354,
                                                                                                        columnNumber: 35
                                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                        type: "button",
                                                                                                        onClick: ()=>applyInlineFormat(block.id, "code"),
                                                                                                        className: "p-1 text-muted-foreground hover:text-primary transition-colors",
                                                                                                        title: "Code (`text`)",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"], {
                                                                                                            className: "h-3 w-3"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                                            lineNumber: 2368,
                                                                                                            columnNumber: 37
                                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                                        lineNumber: 2362,
                                                                                                        columnNumber: 35
                                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                        type: "button",
                                                                                                        onClick: ()=>applyBulletsToBlock(block.id),
                                                                                                        className: "p-1 text-muted-foreground hover:text-primary transition-colors",
                                                                                                        title: "Bullets (Ctrl+Shift+8)",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                                                                                                            className: "h-3 w-3"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                                            lineNumber: 2376,
                                                                                                            columnNumber: 37
                                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                                        lineNumber: 2370,
                                                                                                        columnNumber: 35
                                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                                ]
                                                                                            }, void 0, true),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                type: "button",
                                                                                                onClick: ()=>moveBlock(i, -1),
                                                                                                disabled: i === 0,
                                                                                                className: "p-1 text-muted-foreground hover:text-primary disabled:opacity-20 transition-colors",
                                                                                                title: "Move up",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                                                                                                    className: "h-3 w-3"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                                    lineNumber: 2381,
                                                                                                    columnNumber: 33
                                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                                lineNumber: 2380,
                                                                                                columnNumber: 31
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                type: "button",
                                                                                                onClick: ()=>moveBlock(i, 1),
                                                                                                disabled: i === blocks.length - 1,
                                                                                                className: "p-1 text-muted-foreground hover:text-primary disabled:opacity-20 transition-colors",
                                                                                                title: "Move down",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                                                                                                    className: "h-3 w-3"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                                    lineNumber: 2384,
                                                                                                    columnNumber: 33
                                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                                lineNumber: 2383,
                                                                                                columnNumber: 31
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            blocks.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                type: "button",
                                                                                                onClick: ()=>removeBlock(i),
                                                                                                className: "p-1 text-muted-foreground hover:text-destructive transition-colors ml-1",
                                                                                                title: "Remove block",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                                    className: "h-3 w-3"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                                    lineNumber: 2388,
                                                                                                    columnNumber: 35
                                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                                lineNumber: 2387,
                                                                                                columnNumber: 33
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                        lineNumber: 2307,
                                                                                        columnNumber: 29
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                lineNumber: 2284,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            block.type === "image" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "p-3",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$components$2f$ImageUpload$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    value: block.value,
                                                                                    onUploaded: registerUploadedImage,
                                                                                    onChange: (url)=>{
                                                                                        blockHistoryRef.current.undo.push(cloneBlocks(blocks));
                                                                                        if (blockHistoryRef.current.undo.length > BLOCK_HISTORY_LIMIT) blockHistoryRef.current.undo.shift();
                                                                                        blockHistoryRef.current.redo = [];
                                                                                        const newBlocks = [
                                                                                            ...blocks
                                                                                        ];
                                                                                        newBlocks[i] = {
                                                                                            ...block,
                                                                                            value: url
                                                                                        };
                                                                                        setBlocks(newBlocks);
                                                                                        markDirty();
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                    lineNumber: 2396,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                lineNumber: 2395,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0)) : block.type === "bullets" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "p-3 space-y-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "font-meta text-[9px] uppercase tracking-wider text-muted-foreground",
                                                                                        children: "One bullet per line (otomatis pakai •)"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                        lineNumber: 2412,
                                                                                        columnNumber: 31
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                                        ref: (el)=>{
                                                                                            blockEditorRefs.current[block.id] = el;
                                                                                        },
                                                                                        "data-block-id": block.id,
                                                                                        value: block.value,
                                                                                        onChange: (e)=>updateBlock(i, e.target.value),
                                                                                        rows: 5,
                                                                                        className: "w-full bg-background border border-border px-3 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary resize-y",
                                                                                        placeholder: "• Point pertama\n• Point kedua\n• Point ketiga"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                        lineNumber: 2413,
                                                                                        columnNumber: 31
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                lineNumber: 2411,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0)) : block.type === "table" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "p-3 space-y-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "font-meta text-[9px] uppercase tracking-wider text-muted-foreground",
                                                                                        children: 'Use separator "|" per column and new line per row'
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                        lineNumber: 2425,
                                                                                        columnNumber: 31
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                                        ref: (el)=>{
                                                                                            blockEditorRefs.current[block.id] = el;
                                                                                        },
                                                                                        "data-block-id": block.id,
                                                                                        value: block.value,
                                                                                        onChange: (e)=>updateBlock(i, e.target.value),
                                                                                        rows: 5,
                                                                                        className: "w-full bg-background border border-border px-3 py-2.5 font-mono text-xs text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary resize-y",
                                                                                        placeholder: "Category | Total | Published\nAnime | 12 | 10\nGames | 8 | 7"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                        lineNumber: 2426,
                                                                                        columnNumber: 31
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                lineNumber: 2424,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0)) : block.type === "heading" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "relative",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        ref: (el)=>{
                                                                                            blockPreviewRefs.current[block.id] = el;
                                                                                        },
                                                                                        className: `pointer-events-none absolute inset-0 overflow-hidden px-3 py-2.5 font-heading text-2xl text-foreground ${focusedBlockId === block.id ? "hidden" : ""}`,
                                                                                        children: renderInlineOverlayContent(block, "Heading text...")
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                        lineNumber: 2438,
                                                                                        columnNumber: 31
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                                        ref: (el)=>{
                                                                                            blockEditorRefs.current[block.id] = el;
                                                                                        },
                                                                                        "data-block-id": block.id,
                                                                                        value: block.value,
                                                                                        onChange: (e)=>updateBlock(i, e.target.value),
                                                                                        onFocus: ()=>setFocusedBlockId(block.id),
                                                                                        onBlur: ()=>setFocusedBlockId((prev)=>prev === block.id ? null : prev),
                                                                                        onScroll: ()=>syncFormattedEditorScroll(block.id),
                                                                                        rows: 2,
                                                                                        className: `relative z-10 w-full bg-transparent px-3 py-2.5 font-heading text-2xl caret-foreground selection:bg-primary/20 focus:outline-none resize-none ${focusedBlockId === block.id ? "text-foreground placeholder:text-muted-foreground/40 selection:text-foreground" : "text-transparent placeholder:text-transparent selection:text-transparent"}`,
                                                                                        placeholder: "Heading text..."
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                        lineNumber: 2444,
                                                                                        columnNumber: 31
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                lineNumber: 2437,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0)) : block.type === "subheading" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "relative",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        ref: (el)=>{
                                                                                            blockPreviewRefs.current[block.id] = el;
                                                                                        },
                                                                                        className: `pointer-events-none absolute inset-0 overflow-hidden px-3 py-2.5 font-heading text-lg text-foreground ${focusedBlockId === block.id ? "hidden" : ""}`,
                                                                                        children: renderInlineOverlayContent(block, "Subheading text...")
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                        lineNumber: 2459,
                                                                                        columnNumber: 31
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                                        ref: (el)=>{
                                                                                            blockEditorRefs.current[block.id] = el;
                                                                                        },
                                                                                        "data-block-id": block.id,
                                                                                        value: block.value,
                                                                                        onChange: (e)=>updateBlock(i, e.target.value),
                                                                                        onFocus: ()=>setFocusedBlockId(block.id),
                                                                                        onBlur: ()=>setFocusedBlockId((prev)=>prev === block.id ? null : prev),
                                                                                        onScroll: ()=>syncFormattedEditorScroll(block.id),
                                                                                        rows: 2,
                                                                                        className: `relative z-10 w-full bg-transparent px-3 py-2.5 font-heading text-lg caret-foreground selection:bg-primary/20 focus:outline-none resize-none ${focusedBlockId === block.id ? "text-foreground placeholder:text-muted-foreground/40 selection:text-foreground" : "text-transparent placeholder:text-transparent selection:text-transparent"}`,
                                                                                        placeholder: "Subheading text..."
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                        lineNumber: 2465,
                                                                                        columnNumber: 31
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                lineNumber: 2458,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0)) : block.type === "quote" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "w-1 bg-primary/60 shrink-0 m-2 mr-0 rounded-sm"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                        lineNumber: 2480,
                                                                                        columnNumber: 31
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "relative flex-1",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                ref: (el)=>{
                                                                                                    blockPreviewRefs.current[block.id] = el;
                                                                                                },
                                                                                                className: `pointer-events-none absolute inset-0 overflow-hidden px-3 py-2.5 font-body text-sm text-foreground italic ${focusedBlockId === block.id ? "hidden" : ""}`,
                                                                                                children: renderInlineOverlayContent(block, "Quote text...")
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                                lineNumber: 2482,
                                                                                                columnNumber: 33
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                                                ref: (el)=>{
                                                                                                    blockEditorRefs.current[block.id] = el;
                                                                                                },
                                                                                                "data-block-id": block.id,
                                                                                                value: block.value,
                                                                                                onChange: (e)=>updateBlock(i, e.target.value),
                                                                                                onFocus: ()=>setFocusedBlockId(block.id),
                                                                                                onBlur: ()=>setFocusedBlockId((prev)=>prev === block.id ? null : prev),
                                                                                                onScroll: ()=>syncFormattedEditorScroll(block.id),
                                                                                                rows: 3,
                                                                                                className: `relative z-10 w-full bg-transparent px-3 py-2.5 font-body text-sm caret-foreground selection:bg-primary/20 italic focus:outline-none resize-y ${focusedBlockId === block.id ? "text-foreground placeholder:text-muted-foreground/40 selection:text-foreground" : "text-transparent placeholder:text-transparent selection:text-transparent"}`,
                                                                                                placeholder: "Quote text..."
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                                lineNumber: 2488,
                                                                                                columnNumber: 33
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                        lineNumber: 2481,
                                                                                        columnNumber: 31
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                lineNumber: 2479,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "relative",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        ref: (el)=>{
                                                                                            blockPreviewRefs.current[block.id] = el;
                                                                                        },
                                                                                        className: `pointer-events-none absolute inset-0 overflow-hidden px-3 py-2.5 font-body text-sm text-foreground ${focusedBlockId === block.id ? "hidden" : ""}`,
                                                                                        children: renderInlineOverlayContent(block, `Write paragraph ${i + 1}...`)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                        lineNumber: 2504,
                                                                                        columnNumber: 31
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                                        ref: (el)=>{
                                                                                            blockEditorRefs.current[block.id] = el;
                                                                                        },
                                                                                        "data-block-id": block.id,
                                                                                        value: block.value,
                                                                                        onChange: (e)=>updateBlock(i, e.target.value),
                                                                                        onFocus: ()=>setFocusedBlockId(block.id),
                                                                                        onBlur: ()=>setFocusedBlockId((prev)=>prev === block.id ? null : prev),
                                                                                        onScroll: ()=>syncFormattedEditorScroll(block.id),
                                                                                        rows: 4,
                                                                                        className: `relative z-10 w-full bg-transparent px-3 py-2.5 font-body text-sm caret-foreground selection:bg-primary/20 focus:outline-none resize-y ${focusedBlockId === block.id ? "text-foreground placeholder:text-muted-foreground/40 selection:text-foreground" : "text-transparent placeholder:text-transparent selection:text-transparent"}`,
                                                                                        placeholder: `Write paragraph ${i + 1}...`
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                        lineNumber: 2510,
                                                                                        columnNumber: 31
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                lineNumber: 2503,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, block.id, true, {
                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                        lineNumber: 2262,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-wrap gap-2 pt-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>addBlock("text"),
                                                                            className: "flex items-center gap-1.5 py-2 px-3 border border-dashed border-border text-muted-foreground hover:text-primary hover:border-primary font-meta text-[10px] uppercase tracking-wider transition-colors",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pilcrow$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pilcrow$3e$__["Pilcrow"], {
                                                                                    className: "h-3.5 w-3.5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                    lineNumber: 2529,
                                                                                    columnNumber: 27
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                " Text"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 2528,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>addBlock("heading"),
                                                                            className: "flex items-center gap-1.5 py-2 px-3 border border-dashed border-border text-muted-foreground hover:text-primary hover:border-primary font-meta text-[10px] uppercase tracking-wider transition-colors",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$1$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading1$3e$__["Heading1"], {
                                                                                    className: "h-3.5 w-3.5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                    lineNumber: 2532,
                                                                                    columnNumber: 27
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                " Heading"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 2531,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>addBlock("subheading"),
                                                                            className: "flex items-center gap-1.5 py-2 px-3 border border-dashed border-border text-muted-foreground hover:text-primary hover:border-primary font-meta text-[10px] uppercase tracking-wider transition-colors",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$2$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading2$3e$__["Heading2"], {
                                                                                    className: "h-3.5 w-3.5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                    lineNumber: 2535,
                                                                                    columnNumber: 27
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                " Subheading"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 2534,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>addBlock("quote"),
                                                                            className: "flex items-center gap-1.5 py-2 px-3 border border-dashed border-border text-muted-foreground hover:text-primary hover:border-primary font-meta text-[10px] uppercase tracking-wider transition-colors",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"], {
                                                                                    className: "h-3.5 w-3.5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                    lineNumber: 2538,
                                                                                    columnNumber: 27
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                " Quote"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 2537,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>addBlock("bullets"),
                                                                            className: "flex items-center gap-1.5 py-2 px-3 border border-dashed border-border text-muted-foreground hover:text-primary hover:border-primary font-meta text-[10px] uppercase tracking-wider transition-colors",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pilcrow$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pilcrow$3e$__["Pilcrow"], {
                                                                                    className: "h-3.5 w-3.5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                    lineNumber: 2541,
                                                                                    columnNumber: 27
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                " Bullets"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 2540,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>addBlock("table"),
                                                                            className: "flex items-center gap-1.5 py-2 px-3 border border-dashed border-border text-muted-foreground hover:text-primary hover:border-primary font-meta text-[10px] uppercase tracking-wider transition-colors",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$table$2d$2$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table2$3e$__["Table2"], {
                                                                                    className: "h-3.5 w-3.5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                    lineNumber: 2544,
                                                                                    columnNumber: 27
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                " Table"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 2543,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>addBlock("image"),
                                                                            className: "flex items-center gap-1.5 py-2 px-3 border border-dashed border-border text-muted-foreground hover:text-primary hover:border-primary font-meta text-[10px] uppercase tracking-wider transition-colors",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                                                    className: "h-3.5 w-3.5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                                    lineNumber: 2547,
                                                                                    columnNumber: 27
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                " Image"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                            lineNumber: 2546,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                    lineNumber: 2527,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 2260,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 2250,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border border-border",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 px-4 py-2.5 border-b border-border bg-secondary/40",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                                    className: "h-3.5 w-3.5 text-muted-foreground"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                    lineNumber: 2556,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-meta text-[10px] uppercase tracking-wider text-muted-foreground",
                                                                    children: "Search Engine Preview"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                    lineNumber: 2557,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 2555,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-secondary/40 border border-border p-4 space-y-1.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-meta text-[10px] text-green-600 dark:text-green-400 truncate",
                                                                        children: [
                                                                            "ToRock.verse/article/",
                                                                            form.slug || "article-slug"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                        lineNumber: 2561,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-body text-sm text-blue-400 line-clamp-1",
                                                                        children: form.title || "Article Title — ToRock Verse"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                        lineNumber: 2564,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-body text-xs text-muted-foreground line-clamp-2",
                                                                        children: blocks.find((b)=>b.type === "text" && b.value.trim())?.value || "Article preview text will appear here based on your first paragraph..."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                        lineNumber: 2567,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                lineNumber: 2560,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 2559,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 2554,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 2209,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                    lineNumber: 2078,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-background border-t border-border px-4 py-3 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center gap-2 flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["Switch"], {
                                                    checked: form.published,
                                                    onCheckedChange: (v)=>{
                                                        setForm({
                                                            ...form,
                                                            published: v
                                                        });
                                                        markDirty();
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 2579,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-meta text-[10px] uppercase tracking-wider text-foreground truncate",
                                                    children: form.published ? "Published" : "Draft"
                                                }, void 0, false, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                    lineNumber: 2583,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 2578,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "button",
                                            onClick: ()=>formRef.current?.requestSubmit(),
                                            disabled: saving,
                                            className: "font-meta text-xs uppercase tracking-wider h-10 px-5",
                                            children: saving ? "Saving..." : "Save"
                                        }, void 0, false, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 2587,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "button",
                                            variant: "outline",
                                            onClick: ()=>switchView("articles"),
                                            className: "font-meta text-xs uppercase tracking-wider h-10 px-4",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                            lineNumber: 2595,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                    lineNumber: 2577,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                            lineNumber: 2027,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        view === "profile" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container py-8 max-w-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-border",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 px-6 py-4 border-b border-border",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$user$2d$round$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCircle2$3e$__["UserCircle2"], {
                                                className: "h-4 w-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 2612,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "font-heading text-lg tracking-widest text-foreground",
                                                children: "ADMIN PROFILE"
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 2613,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                        lineNumber: 2611,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 space-y-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-meta text-[9px] uppercase tracking-wider text-muted-foreground block mb-1.5",
                                                        children: "Email (account)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                        lineNumber: 2619,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full bg-secondary/40 border border-border px-3 py-2.5 font-body text-sm text-muted-foreground",
                                                        children: userEmail || "—"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                        lineNumber: 2620,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 2618,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-14 h-14 bg-primary border border-border flex items-center justify-center font-heading text-xl text-primary-foreground shrink-0",
                                                        children: profile.avatar || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                            className: "h-6 w-6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                            lineNumber: 2628,
                                                            columnNumber: 42
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                        lineNumber: 2627,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-body text-sm text-foreground",
                                                                children: profile.name || "—"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                lineNumber: 2631,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-meta text-[10px] uppercase tracking-wider text-muted-foreground",
                                                                children: profile.role
                                                            }, void 0, false, {
                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                lineNumber: 2632,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                        lineNumber: 2630,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 2626,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-meta text-[9px] uppercase tracking-wider text-muted-foreground block mb-1.5",
                                                        children: "Display Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                        lineNumber: 2638,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: profile.name,
                                                        onChange: (e)=>setProfile({
                                                                ...profile,
                                                                name: e.target.value
                                                            }),
                                                        className: "w-full bg-background border border-border px-3 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary",
                                                        placeholder: "Full name..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                        lineNumber: 2639,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 2637,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "font-meta text-[9px] uppercase tracking-wider text-muted-foreground block mb-1.5",
                                                                children: "Role / Title"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                lineNumber: 2650,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: profile.role,
                                                                onChange: (e)=>setProfile({
                                                                        ...profile,
                                                                        role: e.target.value
                                                                    }),
                                                                className: "w-full bg-background border border-border px-3 py-2.5 font-body text-sm text-foreground focus:outline-none focus:border-primary",
                                                                placeholder: "Editor"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                lineNumber: 2651,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                        lineNumber: 2649,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "font-meta text-[9px] uppercase tracking-wider text-muted-foreground block mb-1.5",
                                                                children: "Initials (2 chars)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                lineNumber: 2660,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: profile.avatar,
                                                                onChange: (e)=>setProfile({
                                                                        ...profile,
                                                                        avatar: e.target.value.toUpperCase().slice(0, 2)
                                                                    }),
                                                                className: "w-full bg-background border border-border px-3 py-2.5 font-heading text-lg text-foreground focus:outline-none focus:border-primary text-center",
                                                                maxLength: 2,
                                                                placeholder: "AB"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                lineNumber: 2661,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                        lineNumber: 2659,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 2647,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-meta text-[9px] uppercase tracking-wider text-muted-foreground block mb-1.5",
                                                        children: [
                                                            "Bio ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "normal-case tracking-normal",
                                                                children: "(shown on article pages)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                lineNumber: 2673,
                                                                columnNumber: 125
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                        lineNumber: 2673,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        value: profile.bio,
                                                        onChange: (e)=>setProfile({
                                                                ...profile,
                                                                bio: e.target.value
                                                            }),
                                                        className: "w-full bg-background border border-border px-3 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-none",
                                                        rows: 4,
                                                        placeholder: "Short bio about this author..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                        lineNumber: 2674,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 2672,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3 pt-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        onClick: saveProfile,
                                                        disabled: profileSaving,
                                                        className: "font-meta text-xs uppercase tracking-wider h-10 flex-1",
                                                        children: profileSaving ? "Saving..." : "Save Profile"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                        lineNumber: 2684,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "outline",
                                                        onClick: ()=>onLogout(),
                                                        className: "font-meta text-xs uppercase tracking-wider h-10 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                                className: "h-3.5 w-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                                lineNumber: 2688,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " Sign out"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                        lineNumber: 2687,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                                lineNumber: 2683,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                        lineNumber: 2616,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                                lineNumber: 2610,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                            lineNumber: 2609,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
                    lineNumber: 1555,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
            lineNumber: 1021,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminDashboard.tsx",
        lineNumber: 1020,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(AdminDashboardContent, "2Xwa12+KmWfbk6YmGTGp3ez8uOM=");
_c1 = AdminDashboardContent;
const __TURBOPACK__default__export__ = AdminDashboard;
var _c, _c1;
__turbopack_context__.k.register(_c, "AdminDashboard");
__turbopack_context__.k.register(_c1, "AdminDashboardContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Toorock%20Project_toorock_verse_src_0odydcr._.js.map