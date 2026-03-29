module.exports = [
"[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/shared/src/utils.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeClasses",
    ()=>mergeClasses,
    "toKebabCase",
    ()=>toKebabCase
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
;
}),
"[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/defaultAttributes.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
}),
"[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/Icon.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Icon
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/defaultAttributes.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/shared/src/utils.js [ssr] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>{
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
;
}),
"[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/createLucideIcon.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/shared/src/utils.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/Icon.js [ssr] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["toKebabCase"])(iconName)}`, className),
            ...props
        }));
    Component.displayName = `${iconName}`;
    return Component;
};
;
}),
"[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/facebook.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Facebook
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/createLucideIcon.js [ssr] (ecmascript)");
;
const Facebook = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("Facebook", [
    [
        "path",
        {
            d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
            key: "1jg4f8"
        }
    ]
]);
;
}),
"[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/facebook.js [ssr] (ecmascript) <export default as Facebook>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Facebook",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/facebook.js [ssr] (ecmascript)");
}),
"[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/instagram.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Instagram
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/createLucideIcon.js [ssr] (ecmascript)");
;
const Instagram = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("Instagram", [
    [
        "rect",
        {
            width: "20",
            height: "20",
            x: "2",
            y: "2",
            rx: "5",
            ry: "5",
            key: "2e1cvw"
        }
    ],
    [
        "path",
        {
            d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
            key: "9exkf1"
        }
    ],
    [
        "line",
        {
            x1: "17.5",
            x2: "17.51",
            y1: "6.5",
            y2: "6.5",
            key: "r4j83e"
        }
    ]
]);
;
}),
"[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/instagram.js [ssr] (ecmascript) <export default as Instagram>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Instagram",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/instagram.js [ssr] (ecmascript)");
}),
"[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/youtube.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Youtube
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/createLucideIcon.js [ssr] (ecmascript)");
;
const Youtube = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("Youtube", [
    [
        "path",
        {
            d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
            key: "1q2vi4"
        }
    ],
    [
        "path",
        {
            d: "m10 15 5-3-5-3z",
            key: "1jp15x"
        }
    ]
]);
;
}),
"[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/youtube.js [ssr] (ecmascript) <export default as Youtube>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Youtube",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/youtube.js [ssr] (ecmascript)");
}),
"[externals]/react-router-dom [external] (react-router-dom, cjs, [project]/Toorock Project/toorock.verse/node_modules/react-router-dom)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-router-dom-b86d1f0a4e0d6540", () => require("react-router-dom-b86d1f0a4e0d6540"));

module.exports = mod;
}),
"[project]/Toorock Project/toorock.verse/node_modules/react-fast-compare/index.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */ var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;
// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js
function equal(a, b) {
    // START: fast-deep-equal es6/index.js 3.1.3
    if (a === b) return true;
    if (a && b && typeof a == 'object' && typeof b == 'object') {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
            length = a.length;
            if (length != b.length) return false;
            for(i = length; i-- !== 0;)if (!equal(a[i], b[i])) return false;
            return true;
        }
        // START: Modifications:
        // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
        //    to co-exist with es5.
        // 2. Replace `for of` with es5 compliant iteration using `for`.
        //    Basically, take:
        //
        //    ```js
        //    for (i of a.entries())
        //      if (!b.has(i[0])) return false;
        //    ```
        //
        //    ... and convert to:
        //
        //    ```js
        //    it = a.entries();
        //    while (!(i = it.next()).done)
        //      if (!b.has(i.value[0])) return false;
        //    ```
        //
        //    **Note**: `i` access switches to `i.value`.
        var it;
        if (hasMap && a instanceof Map && b instanceof Map) {
            if (a.size !== b.size) return false;
            it = a.entries();
            while(!(i = it.next()).done)if (!b.has(i.value[0])) return false;
            it = a.entries();
            while(!(i = it.next()).done)if (!equal(i.value[1], b.get(i.value[0]))) return false;
            return true;
        }
        if (hasSet && a instanceof Set && b instanceof Set) {
            if (a.size !== b.size) return false;
            it = a.entries();
            while(!(i = it.next()).done)if (!b.has(i.value[0])) return false;
            return true;
        }
        // END: Modifications
        if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
            length = a.length;
            if (length != b.length) return false;
            for(i = length; i-- !== 0;)if (a[i] !== b[i]) return false;
            return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        // START: Modifications:
        // Apply guards for `Object.create(null)` handling. See:
        // - https://github.com/FormidableLabs/react-fast-compare/issues/64
        // - https://github.com/epoberezkin/fast-deep-equal/issues/49
        if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === 'function' && typeof b.valueOf === 'function') return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString && typeof a.toString === 'function' && typeof b.toString === 'function') return a.toString() === b.toString();
        // END: Modifications
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for(i = length; i-- !== 0;)if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        // END: fast-deep-equal
        // START: react-fast-compare
        // custom handling for DOM elements
        if (hasElementType && a instanceof Element) return false;
        // custom handling for React/Preact
        for(i = length; i-- !== 0;){
            if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
                continue;
            }
            // all other properties should be traversed as usual
            if (!equal(a[keys[i]], b[keys[i]])) return false;
        }
        // END: react-fast-compare
        // START: fast-deep-equal
        return true;
    }
    return a !== a && b !== b;
}
// end fast-deep-equal
module.exports = function isEqual(a, b) {
    try {
        return equal(a, b);
    } catch (error) {
        if ((error.message || '').match(/stack|recursion/i)) {
            // warn on circular references, don't crash
            // browsers give this different errors name and messages:
            // chrome/safari: "RangeError", "Maximum call stack size exceeded"
            // firefox: "InternalError", too much recursion"
            // edge: "Error", "Out of stack space"
            console.warn('react-fast-compare cannot handle circular refs');
            return false;
        }
        // some other error. we should definitely know about these
        throw error;
    }
};
}),
"[project]/Toorock Project/toorock.verse/node_modules/invariant/invariant.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */ var NODE_ENV = ("TURBOPACK compile-time value", "development");
var invariant = function(condition, format, a, b, c, d, e, f) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (format === undefined) {
            throw new Error('invariant requires an error message argument');
        }
    }
    if (!condition) {
        var error;
        if (format === undefined) {
            error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
        } else {
            var args = [
                a,
                b,
                c,
                d,
                e,
                f
            ];
            var argIndex = 0;
            error = new Error(format.replace(/%s/g, function() {
                return args[argIndex++];
            }));
            error.name = 'Invariant Violation';
        }
        error.framesToPop = 1; // we don't care about invariant's own frame
        throw error;
    }
};
module.exports = invariant;
}),
"[project]/Toorock Project/toorock.verse/node_modules/shallowequal/index.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

//
module.exports = function shallowEqual(objA, objB, compare, compareContext) {
    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
    if (ret !== void 0) {
        return !!ret;
    }
    if (objA === objB) {
        return true;
    }
    if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
        return false;
    }
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
        return false;
    }
    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    // Test for A's keys different from B.
    for(var idx = 0; idx < keysA.length; idx++){
        var key = keysA[idx];
        if (!bHasOwnProperty(key)) {
            return false;
        }
        var valueA = objA[key];
        var valueB = objB[key];
        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
        if (ret === false || ret === void 0 && valueA !== valueB) {
            return false;
        }
    }
    return true;
};
}),
"[project]/Toorock Project/toorock.verse/node_modules/react-helmet-async/lib/index.esm.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Helmet",
    ()=>Helmet,
    "HelmetData",
    ()=>HelmetData,
    "HelmetProvider",
    ()=>HelmetProvider
]);
// src/index.tsx
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2d$fast$2d$compare$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/react-fast-compare/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$invariant$2f$invariant$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/invariant/invariant.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$shallowequal$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/shallowequal/index.js [ssr] (ecmascript)");
;
;
;
;
;
// src/constants.ts
var TAG_NAMES = /* @__PURE__ */ ((TAG_NAMES2)=>{
    TAG_NAMES2["BASE"] = "base";
    TAG_NAMES2["BODY"] = "body";
    TAG_NAMES2["HEAD"] = "head";
    TAG_NAMES2["HTML"] = "html";
    TAG_NAMES2["LINK"] = "link";
    TAG_NAMES2["META"] = "meta";
    TAG_NAMES2["NOSCRIPT"] = "noscript";
    TAG_NAMES2["SCRIPT"] = "script";
    TAG_NAMES2["STYLE"] = "style";
    TAG_NAMES2["TITLE"] = "title";
    TAG_NAMES2["FRAGMENT"] = "Symbol(react.fragment)";
    return TAG_NAMES2;
})(TAG_NAMES || {});
var SEO_PRIORITY_TAGS = {
    link: {
        rel: [
            "amphtml",
            "canonical",
            "alternate"
        ]
    },
    script: {
        type: [
            "application/ld+json"
        ]
    },
    meta: {
        charset: "",
        name: [
            "generator",
            "robots",
            "description"
        ],
        property: [
            "og:type",
            "og:title",
            "og:url",
            "og:image",
            "og:image:alt",
            "og:description",
            "twitter:url",
            "twitter:title",
            "twitter:description",
            "twitter:image",
            "twitter:image:alt",
            "twitter:card",
            "twitter:site"
        ]
    }
};
var VALID_TAG_NAMES = Object.values(TAG_NAMES);
var REACT_TAG_MAP = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex"
};
var HTML_TAG_MAP = Object.entries(REACT_TAG_MAP).reduce((carry, [key, value])=>{
    carry[value] = key;
    return carry;
}, {});
var HELMET_ATTRIBUTE = "data-rh";
// src/utils.ts
var HELMET_PROPS = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate",
    PRIORITIZE_SEO_TAGS: "prioritizeSeoTags"
};
var getInnermostProperty = (propsList, property)=>{
    for(let i = propsList.length - 1; i >= 0; i -= 1){
        const props = propsList[i];
        if (Object.prototype.hasOwnProperty.call(props, property)) {
            return props[property];
        }
    }
    return null;
};
var getTitleFromPropsList = (propsList)=>{
    let innermostTitle = getInnermostProperty(propsList, "title" /* TITLE */ );
    const innermostTemplate = getInnermostProperty(propsList, HELMET_PROPS.TITLE_TEMPLATE);
    if (Array.isArray(innermostTitle)) {
        innermostTitle = innermostTitle.join("");
    }
    if (innermostTemplate && innermostTitle) {
        return innermostTemplate.replace(/%s/g, ()=>innermostTitle);
    }
    const innermostDefaultTitle = getInnermostProperty(propsList, HELMET_PROPS.DEFAULT_TITLE);
    return innermostTitle || innermostDefaultTitle || void 0;
};
var getOnChangeClientState = (propsList)=>getInnermostProperty(propsList, HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || (()=>{});
var getAttributesFromPropsList = (tagType, propsList)=>propsList.filter((props)=>typeof props[tagType] !== "undefined").map((props)=>props[tagType]).reduce((tagAttrs, current)=>({
            ...tagAttrs,
            ...current
        }), {});
var getBaseTagFromPropsList = (primaryAttributes, propsList)=>propsList.filter((props)=>typeof props["base" /* BASE */ ] !== "undefined").map((props)=>props["base" /* BASE */ ]).reverse().reduce((innermostBaseTag, tag)=>{
        if (!innermostBaseTag.length) {
            const keys = Object.keys(tag);
            for(let i = 0; i < keys.length; i += 1){
                const attributeKey = keys[i];
                const lowerCaseAttributeKey = attributeKey.toLowerCase();
                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
                    return innermostBaseTag.concat(tag);
                }
            }
        }
        return innermostBaseTag;
    }, []);
var warn = (msg)=>console && typeof console.warn === "function" && console.warn(msg);
var getTagsFromPropsList = (tagName, primaryAttributes, propsList)=>{
    const approvedSeenTags = {};
    return propsList.filter((props)=>{
        if (Array.isArray(props[tagName])) {
            return true;
        }
        if (typeof props[tagName] !== "undefined") {
            warn(`Helmet: ${tagName} should be of type "Array". Instead found type "${typeof props[tagName]}"`);
        }
        return false;
    }).map((props)=>props[tagName]).reverse().reduce((approvedTags, instanceTags)=>{
        const instanceSeenTags = {};
        instanceTags.filter((tag)=>{
            let primaryAttributeKey;
            const keys2 = Object.keys(tag);
            for(let i = 0; i < keys2.length; i += 1){
                const attributeKey = keys2[i];
                const lowerCaseAttributeKey = attributeKey.toLowerCase();
                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === "rel" /* REL */  && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === "rel" /* REL */  && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
                    primaryAttributeKey = lowerCaseAttributeKey;
                }
                if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === "innerHTML" /* INNER_HTML */  || attributeKey === "cssText" /* CSS_TEXT */  || attributeKey === "itemprop" /* ITEM_PROP */ )) {
                    primaryAttributeKey = attributeKey;
                }
            }
            if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
                return false;
            }
            const value = tag[primaryAttributeKey].toLowerCase();
            if (!approvedSeenTags[primaryAttributeKey]) {
                approvedSeenTags[primaryAttributeKey] = {};
            }
            if (!instanceSeenTags[primaryAttributeKey]) {
                instanceSeenTags[primaryAttributeKey] = {};
            }
            if (!approvedSeenTags[primaryAttributeKey][value]) {
                instanceSeenTags[primaryAttributeKey][value] = true;
                return true;
            }
            return false;
        }).reverse().forEach((tag)=>approvedTags.push(tag));
        const keys = Object.keys(instanceSeenTags);
        for(let i = 0; i < keys.length; i += 1){
            const attributeKey = keys[i];
            const tagUnion = {
                ...approvedSeenTags[attributeKey],
                ...instanceSeenTags[attributeKey]
            };
            approvedSeenTags[attributeKey] = tagUnion;
        }
        return approvedTags;
    }, []).reverse();
};
var getAnyTrueFromPropsList = (propsList, checkedTag)=>{
    if (Array.isArray(propsList) && propsList.length) {
        for(let index = 0; index < propsList.length; index += 1){
            const prop = propsList[index];
            if (prop[checkedTag]) {
                return true;
            }
        }
    }
    return false;
};
var reducePropsToState = (propsList)=>({
        baseTag: getBaseTagFromPropsList([
            "href" /* HREF */ 
        ], propsList),
        bodyAttributes: getAttributesFromPropsList("bodyAttributes" /* BODY */ , propsList),
        defer: getInnermostProperty(propsList, HELMET_PROPS.DEFER),
        encode: getInnermostProperty(propsList, HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
        htmlAttributes: getAttributesFromPropsList("htmlAttributes" /* HTML */ , propsList),
        linkTags: getTagsFromPropsList("link" /* LINK */ , [
            "rel" /* REL */ ,
            "href" /* HREF */ 
        ], propsList),
        metaTags: getTagsFromPropsList("meta" /* META */ , [
            "name" /* NAME */ ,
            "charset" /* CHARSET */ ,
            "http-equiv" /* HTTPEQUIV */ ,
            "property" /* PROPERTY */ ,
            "itemprop" /* ITEM_PROP */ 
        ], propsList),
        noscriptTags: getTagsFromPropsList("noscript" /* NOSCRIPT */ , [
            "innerHTML" /* INNER_HTML */ 
        ], propsList),
        onChangeClientState: getOnChangeClientState(propsList),
        scriptTags: getTagsFromPropsList("script" /* SCRIPT */ , [
            "src" /* SRC */ ,
            "innerHTML" /* INNER_HTML */ 
        ], propsList),
        styleTags: getTagsFromPropsList("style" /* STYLE */ , [
            "cssText" /* CSS_TEXT */ 
        ], propsList),
        title: getTitleFromPropsList(propsList),
        titleAttributes: getAttributesFromPropsList("titleAttributes" /* TITLE */ , propsList),
        prioritizeSeoTags: getAnyTrueFromPropsList(propsList, HELMET_PROPS.PRIORITIZE_SEO_TAGS)
    });
var flattenArray = (possibleArray)=>Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
var checkIfPropsMatch = (props, toMatch)=>{
    const keys = Object.keys(props);
    for(let i = 0; i < keys.length; i += 1){
        if (toMatch[keys[i]] && toMatch[keys[i]].includes(props[keys[i]])) {
            return true;
        }
    }
    return false;
};
var prioritizer = (elementsList, propsToMatch)=>{
    if (Array.isArray(elementsList)) {
        return elementsList.reduce((acc, elementAttrs)=>{
            if (checkIfPropsMatch(elementAttrs, propsToMatch)) {
                acc.priority.push(elementAttrs);
            } else {
                acc.default.push(elementAttrs);
            }
            return acc;
        }, {
            priority: [],
            default: []
        });
    }
    return {
        default: elementsList,
        priority: []
    };
};
var without = (obj, key)=>{
    return {
        ...obj,
        [key]: void 0
    };
};
// src/server.ts
var SELF_CLOSING_TAGS = [
    "noscript" /* NOSCRIPT */ ,
    "script" /* SCRIPT */ ,
    "style" /* STYLE */ 
];
var encodeSpecialCharacters = (str, encode = true)=>{
    if (encode === false) {
        return String(str);
    }
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};
var generateElementAttributesAsString = (attributes)=>Object.keys(attributes).reduce((str, key)=>{
        const attr = typeof attributes[key] !== "undefined" ? `${key}="${attributes[key]}"` : `${key}`;
        return str ? `${str} ${attr}` : attr;
    }, "");
var generateTitleAsString = (type, title, attributes, encode)=>{
    const attributeString = generateElementAttributesAsString(attributes);
    const flattenedTitle = flattenArray(title);
    return attributeString ? `<${type} ${HELMET_ATTRIBUTE}="true" ${attributeString}>${encodeSpecialCharacters(flattenedTitle, encode)}</${type}>` : `<${type} ${HELMET_ATTRIBUTE}="true">${encodeSpecialCharacters(flattenedTitle, encode)}</${type}>`;
};
var generateTagsAsString = (type, tags, encode = true)=>tags.reduce((str, t)=>{
        const tag = t;
        const attributeHtml = Object.keys(tag).filter((attribute)=>!(attribute === "innerHTML" /* INNER_HTML */  || attribute === "cssText" /* CSS_TEXT */ )).reduce((string, attribute)=>{
            const attr = typeof tag[attribute] === "undefined" ? attribute : `${attribute}="${encodeSpecialCharacters(tag[attribute], encode)}"`;
            return string ? `${string} ${attr}` : attr;
        }, "");
        const tagContent = tag.innerHTML || tag.cssText || "";
        const isSelfClosing = SELF_CLOSING_TAGS.indexOf(type) === -1;
        return `${str}<${type} ${HELMET_ATTRIBUTE}="true" ${attributeHtml}${isSelfClosing ? `/>` : `>${tagContent}</${type}>`}`;
    }, "");
var convertElementAttributesToReactProps = (attributes, initProps = {})=>Object.keys(attributes).reduce((obj, key)=>{
        const mapped = REACT_TAG_MAP[key];
        obj[mapped || key] = attributes[key];
        return obj;
    }, initProps);
var generateTitleAsReactComponent = (_type, title, attributes)=>{
    const initProps = {
        key: title,
        [HELMET_ATTRIBUTE]: true
    };
    const props = convertElementAttributesToReactProps(attributes, initProps);
    return [
        __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("title" /* TITLE */ , props, title)
    ];
};
var generateTagsAsReactComponent = (type, tags)=>tags.map((tag, i)=>{
        const mappedTag = {
            key: i,
            [HELMET_ATTRIBUTE]: true
        };
        Object.keys(tag).forEach((attribute)=>{
            const mapped = REACT_TAG_MAP[attribute];
            const mappedAttribute = mapped || attribute;
            if (mappedAttribute === "innerHTML" /* INNER_HTML */  || mappedAttribute === "cssText" /* CSS_TEXT */ ) {
                const content = tag.innerHTML || tag.cssText;
                mappedTag.dangerouslySetInnerHTML = {
                    __html: content
                };
            } else {
                mappedTag[mappedAttribute] = tag[attribute];
            }
        });
        return __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(type, mappedTag);
    });
var getMethodsForTag = (type, tags, encode = true)=>{
    switch(type){
        case "title" /* TITLE */ :
            return {
                toComponent: ()=>generateTitleAsReactComponent(type, tags.title, tags.titleAttributes),
                toString: ()=>generateTitleAsString(type, tags.title, tags.titleAttributes, encode)
            };
        case "bodyAttributes" /* BODY */ :
        case "htmlAttributes" /* HTML */ :
            return {
                toComponent: ()=>convertElementAttributesToReactProps(tags),
                toString: ()=>generateElementAttributesAsString(tags)
            };
        default:
            return {
                toComponent: ()=>generateTagsAsReactComponent(type, tags),
                toString: ()=>generateTagsAsString(type, tags, encode)
            };
    }
};
var getPriorityMethods = ({ metaTags, linkTags, scriptTags, encode })=>{
    const meta = prioritizer(metaTags, SEO_PRIORITY_TAGS.meta);
    const link = prioritizer(linkTags, SEO_PRIORITY_TAGS.link);
    const script = prioritizer(scriptTags, SEO_PRIORITY_TAGS.script);
    const priorityMethods = {
        toComponent: ()=>[
                ...generateTagsAsReactComponent("meta" /* META */ , meta.priority),
                ...generateTagsAsReactComponent("link" /* LINK */ , link.priority),
                ...generateTagsAsReactComponent("script" /* SCRIPT */ , script.priority)
            ],
        toString: ()=>// generate all the tags as strings and concatenate them
            `${getMethodsForTag("meta" /* META */ , meta.priority, encode)} ${getMethodsForTag("link" /* LINK */ , link.priority, encode)} ${getMethodsForTag("script" /* SCRIPT */ , script.priority, encode)}`
    };
    return {
        priorityMethods,
        metaTags: meta.default,
        linkTags: link.default,
        scriptTags: script.default
    };
};
var mapStateOnServer = (props)=>{
    const { baseTag, bodyAttributes, encode = true, htmlAttributes, noscriptTags, styleTags, title = "", titleAttributes, prioritizeSeoTags } = props;
    let { linkTags, metaTags, scriptTags } = props;
    let priorityMethods = {
        toComponent: ()=>[],
        toString: ()=>""
    };
    if (prioritizeSeoTags) {
        ({ priorityMethods, linkTags, metaTags, scriptTags } = getPriorityMethods(props));
    }
    return {
        priority: priorityMethods,
        base: getMethodsForTag("base" /* BASE */ , baseTag, encode),
        bodyAttributes: getMethodsForTag("bodyAttributes" /* BODY */ , bodyAttributes, encode),
        htmlAttributes: getMethodsForTag("htmlAttributes" /* HTML */ , htmlAttributes, encode),
        link: getMethodsForTag("link" /* LINK */ , linkTags, encode),
        meta: getMethodsForTag("meta" /* META */ , metaTags, encode),
        noscript: getMethodsForTag("noscript" /* NOSCRIPT */ , noscriptTags, encode),
        script: getMethodsForTag("script" /* SCRIPT */ , scriptTags, encode),
        style: getMethodsForTag("style" /* STYLE */ , styleTags, encode),
        title: getMethodsForTag("title" /* TITLE */ , {
            title,
            titleAttributes
        }, encode)
    };
};
var server_default = mapStateOnServer;
// src/HelmetData.ts
var instances = [];
var isDocument = !!(("TURBOPACK compile-time value", "undefined") !== "undefined" && window.document && window.document.createElement);
var HelmetData = class {
    instances = [];
    canUseDOM = isDocument;
    context;
    value = {
        setHelmet: (serverState)=>{
            this.context.helmet = serverState;
        },
        helmetInstances: {
            get: ()=>this.canUseDOM ? instances : this.instances,
            add: (instance)=>{
                (this.canUseDOM ? instances : this.instances).push(instance);
            },
            remove: (instance)=>{
                const index = (this.canUseDOM ? instances : this.instances).indexOf(instance);
                (this.canUseDOM ? instances : this.instances).splice(index, 1);
            }
        }
    };
    constructor(context, canUseDOM){
        this.context = context;
        this.canUseDOM = canUseDOM || false;
        if (!canUseDOM) {
            context.helmet = server_default({
                baseTag: [],
                bodyAttributes: {},
                encodeSpecialCharacters: true,
                htmlAttributes: {},
                linkTags: [],
                metaTags: [],
                noscriptTags: [],
                scriptTags: [],
                styleTags: [],
                title: "",
                titleAttributes: {}
            });
        }
    }
};
;
var major = parseInt(__TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].version.split(".")[0], 10);
var isReact19 = major >= 19;
// src/Provider.tsx
var defaultValue = {};
var Context = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createContext(defaultValue);
var HelmetProvider = class _HelmetProvider extends __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["Component"] {
    static canUseDOM = isDocument;
    helmetData;
    constructor(props){
        super(props);
        if (isReact19) {
            this.helmetData = null;
        } else {
            this.helmetData = new HelmetData(this.props.context || {}, _HelmetProvider.canUseDOM);
        }
    }
    render() {
        if (isReact19) {
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].Fragment, null, this.props.children);
        }
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(Context.Provider, {
            value: this.helmetData.value
        }, this.props.children);
    }
};
;
;
// src/client.ts
var updateTags = (type, tags)=>{
    const headElement = document.head || document.querySelector("head" /* HEAD */ );
    const tagNodes = headElement.querySelectorAll(`${type}[${HELMET_ATTRIBUTE}]`);
    const oldTags = [].slice.call(tagNodes);
    const newTags = [];
    let indexToDelete;
    if (tags && tags.length) {
        tags.forEach((tag)=>{
            const newElement = document.createElement(type);
            for(const attribute in tag){
                if (Object.prototype.hasOwnProperty.call(tag, attribute)) {
                    if (attribute === "innerHTML" /* INNER_HTML */ ) {
                        newElement.innerHTML = tag.innerHTML;
                    } else if (attribute === "cssText" /* CSS_TEXT */ ) {
                        const cssText = tag.cssText;
                        newElement.appendChild(document.createTextNode(cssText));
                    } else {
                        const attr = attribute;
                        const value = typeof tag[attr] === "undefined" ? "" : tag[attr];
                        newElement.setAttribute(attribute, value);
                    }
                }
            }
            newElement.setAttribute(HELMET_ATTRIBUTE, "true");
            if (oldTags.some((existingTag, index)=>{
                indexToDelete = index;
                return newElement.isEqualNode(existingTag);
            })) {
                oldTags.splice(indexToDelete, 1);
            } else {
                newTags.push(newElement);
            }
        });
    }
    oldTags.forEach((tag)=>tag.parentNode?.removeChild(tag));
    newTags.forEach((tag)=>headElement.appendChild(tag));
    return {
        oldTags,
        newTags
    };
};
var updateAttributes = (tagName, attributes)=>{
    const elementTag = document.getElementsByTagName(tagName)[0];
    if (!elementTag) {
        return;
    }
    const helmetAttributeString = elementTag.getAttribute(HELMET_ATTRIBUTE);
    const helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
    const attributesToRemove = [
        ...helmetAttributes
    ];
    const attributeKeys = Object.keys(attributes);
    for (const attribute of attributeKeys){
        const value = attributes[attribute] || "";
        if (elementTag.getAttribute(attribute) !== value) {
            elementTag.setAttribute(attribute, value);
        }
        if (helmetAttributes.indexOf(attribute) === -1) {
            helmetAttributes.push(attribute);
        }
        const indexToSave = attributesToRemove.indexOf(attribute);
        if (indexToSave !== -1) {
            attributesToRemove.splice(indexToSave, 1);
        }
    }
    for(let i = attributesToRemove.length - 1; i >= 0; i -= 1){
        elementTag.removeAttribute(attributesToRemove[i]);
    }
    if (helmetAttributes.length === attributesToRemove.length) {
        elementTag.removeAttribute(HELMET_ATTRIBUTE);
    } else if (elementTag.getAttribute(HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
        elementTag.setAttribute(HELMET_ATTRIBUTE, attributeKeys.join(","));
    }
};
var updateTitle = (title, attributes)=>{
    if (typeof title !== "undefined" && document.title !== title) {
        document.title = flattenArray(title);
    }
    updateAttributes("title" /* TITLE */ , attributes);
};
var commitTagChanges = (newState, cb)=>{
    const { baseTag, bodyAttributes, htmlAttributes, linkTags, metaTags, noscriptTags, onChangeClientState, scriptTags, styleTags, title, titleAttributes } = newState;
    updateAttributes("body" /* BODY */ , bodyAttributes);
    updateAttributes("html" /* HTML */ , htmlAttributes);
    updateTitle(title, titleAttributes);
    const tagUpdates = {
        baseTag: updateTags("base" /* BASE */ , baseTag),
        linkTags: updateTags("link" /* LINK */ , linkTags),
        metaTags: updateTags("meta" /* META */ , metaTags),
        noscriptTags: updateTags("noscript" /* NOSCRIPT */ , noscriptTags),
        scriptTags: updateTags("script" /* SCRIPT */ , scriptTags),
        styleTags: updateTags("style" /* STYLE */ , styleTags)
    };
    const addedTags = {};
    const removedTags = {};
    Object.keys(tagUpdates).forEach((tagType)=>{
        const { newTags, oldTags } = tagUpdates[tagType];
        if (newTags.length) {
            addedTags[tagType] = newTags;
        }
        if (oldTags.length) {
            removedTags[tagType] = tagUpdates[tagType].oldTags;
        }
    });
    if (cb) {
        cb();
    }
    onChangeClientState(newState, addedTags, removedTags);
};
var _helmetCallback = null;
var handleStateChangeOnClient = (newState)=>{
    if (_helmetCallback) {
        cancelAnimationFrame(_helmetCallback);
    }
    if (newState.defer) {
        _helmetCallback = requestAnimationFrame(()=>{
            commitTagChanges(newState, ()=>{
                _helmetCallback = null;
            });
        });
    } else {
        commitTagChanges(newState);
        _helmetCallback = null;
    }
};
var client_default = handleStateChangeOnClient;
// src/Dispatcher.tsx
var HelmetDispatcher = class extends __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["Component"] {
    rendered = false;
    shouldComponentUpdate(nextProps) {
        return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$shallowequal$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(nextProps, this.props);
    }
    componentDidUpdate() {
        this.emitChange();
    }
    componentWillUnmount() {
        const { helmetInstances } = this.props.context;
        helmetInstances.remove(this);
        this.emitChange();
    }
    emitChange() {
        const { helmetInstances, setHelmet } = this.props.context;
        let serverState = null;
        const state = reducePropsToState(helmetInstances.get().map((instance)=>{
            const { context: _context, ...props } = instance.props;
            return props;
        }));
        if (HelmetProvider.canUseDOM) {
            client_default(state);
        } else if ("TURBOPACK compile-time truthy", 1) {
            serverState = server_default(state);
        }
        setHelmet(serverState);
    }
    // componentWillMount will be deprecated
    // for SSR, initialize on first render
    // constructor is also unsafe in StrictMode
    init() {
        if (this.rendered) {
            return;
        }
        this.rendered = true;
        const { helmetInstances } = this.props.context;
        helmetInstances.add(this);
        this.emitChange();
    }
    render() {
        this.init();
        return null;
    }
};
;
var react19Instances = [];
var toHtmlAttributes = (props)=>{
    const result = {};
    for (const key of Object.keys(props)){
        result[HTML_TAG_MAP[key] || key] = props[key];
    }
    return result;
};
var toReactProps = (attrs)=>{
    const result = {};
    for (const key of Object.keys(attrs)){
        const mapped = REACT_TAG_MAP[key];
        result[mapped || key] = attrs[key];
    }
    return result;
};
var applyAttributes = (tagName, attributes)=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const el = undefined;
    const managedAttr = undefined;
    const prev = undefined;
    const prevKeys = undefined;
    const nextKeys = undefined;
    const key = undefined;
    const key1 = undefined;
};
var syncAllAttributes = ()=>{
    const htmlAttrs = {};
    const bodyAttrs = {};
    for (const instance of react19Instances){
        const { htmlAttributes, bodyAttributes } = instance.props;
        if (htmlAttributes) {
            Object.assign(htmlAttrs, toHtmlAttributes(htmlAttributes));
        }
        if (bodyAttributes) {
            Object.assign(bodyAttrs, toHtmlAttributes(bodyAttributes));
        }
    }
    applyAttributes("html" /* HTML */ , htmlAttrs);
    applyAttributes("body" /* BODY */ , bodyAttrs);
};
var React19Dispatcher = class extends __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["Component"] {
    componentDidMount() {
        react19Instances.push(this);
        syncAllAttributes();
    }
    componentDidUpdate() {
        syncAllAttributes();
    }
    componentWillUnmount() {
        const index = react19Instances.indexOf(this);
        if (index !== -1) {
            react19Instances.splice(index, 1);
        }
        syncAllAttributes();
    }
    resolveTitle() {
        const { title, titleTemplate, defaultTitle } = this.props;
        if (title && titleTemplate) {
            return titleTemplate.replace(/%s/g, ()=>Array.isArray(title) ? title.join("") : title);
        }
        return title || defaultTitle || void 0;
    }
    renderTitle() {
        const title = this.resolveTitle();
        if (title === void 0) return null;
        const titleAttributes = this.props.titleAttributes || {};
        return __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("title" /* TITLE */ , toReactProps(titleAttributes), title);
    }
    renderBase() {
        const { base } = this.props;
        if (!base) return null;
        return __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("base" /* BASE */ , toReactProps(base));
    }
    renderMeta() {
        const { meta } = this.props;
        if (!meta || !Array.isArray(meta)) return null;
        return meta.map((attrs, i)=>__TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("meta" /* META */ , {
                key: i,
                ...toReactProps(attrs)
            }));
    }
    renderLink() {
        const { link } = this.props;
        if (!link || !Array.isArray(link)) return null;
        return link.map((attrs, i)=>__TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("link" /* LINK */ , {
                key: i,
                ...toReactProps(attrs)
            }));
    }
    renderScript() {
        const { script } = this.props;
        if (!script || !Array.isArray(script)) return null;
        return script.map((attrs, i)=>{
            const { innerHTML, ...rest } = attrs;
            const props = toReactProps(rest);
            if (innerHTML) {
                props.dangerouslySetInnerHTML = {
                    __html: innerHTML
                };
            }
            return __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("script" /* SCRIPT */ , {
                key: i,
                ...props
            });
        });
    }
    renderStyle() {
        const { style } = this.props;
        if (!style || !Array.isArray(style)) return null;
        return style.map((attrs, i)=>{
            const { cssText, ...rest } = attrs;
            const props = toReactProps(rest);
            if (cssText) {
                props.dangerouslySetInnerHTML = {
                    __html: cssText
                };
            }
            return __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("style" /* STYLE */ , {
                key: i,
                ...props
            });
        });
    }
    renderNoscript() {
        const { noscript } = this.props;
        if (!noscript || !Array.isArray(noscript)) return null;
        return noscript.map((attrs, i)=>{
            const { innerHTML, ...rest } = attrs;
            const props = toReactProps(rest);
            if (innerHTML) {
                props.dangerouslySetInnerHTML = {
                    __html: innerHTML
                };
            }
            return __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("noscript" /* NOSCRIPT */ , {
                key: i,
                ...props
            });
        });
    }
    render() {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].Fragment, null, this.renderTitle(), this.renderBase(), this.renderMeta(), this.renderLink(), this.renderScript(), this.renderStyle(), this.renderNoscript());
    }
};
// src/index.tsx
var Helmet = class extends __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["Component"] {
    static defaultProps = {
        defer: true,
        encodeSpecialCharacters: true,
        prioritizeSeoTags: false
    };
    shouldComponentUpdate(nextProps) {
        return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2d$fast$2d$compare$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(without(this.props, "helmetData"), without(nextProps, "helmetData"));
    }
    mapNestedChildrenToProps(child, nestedChildren) {
        if (!nestedChildren) {
            return null;
        }
        switch(child.type){
            case "script" /* SCRIPT */ :
            case "noscript" /* NOSCRIPT */ :
                return {
                    innerHTML: nestedChildren
                };
            case "style" /* STYLE */ :
                return {
                    cssText: nestedChildren
                };
            default:
                throw new Error(`<${child.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`);
        }
    }
    flattenArrayTypeChildren(child, arrayTypeChildren, newChildProps, nestedChildren) {
        return {
            ...arrayTypeChildren,
            [child.type]: [
                ...arrayTypeChildren[child.type] || [],
                {
                    ...newChildProps,
                    ...this.mapNestedChildrenToProps(child, nestedChildren)
                }
            ]
        };
    }
    mapObjectTypeChildren(child, newProps, newChildProps, nestedChildren) {
        switch(child.type){
            case "title" /* TITLE */ :
                return {
                    ...newProps,
                    [child.type]: nestedChildren,
                    titleAttributes: {
                        ...newChildProps
                    }
                };
            case "body" /* BODY */ :
                return {
                    ...newProps,
                    bodyAttributes: {
                        ...newChildProps
                    }
                };
            case "html" /* HTML */ :
                return {
                    ...newProps,
                    htmlAttributes: {
                        ...newChildProps
                    }
                };
            default:
                return {
                    ...newProps,
                    [child.type]: {
                        ...newChildProps
                    }
                };
        }
    }
    mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
        let newFlattenedProps = {
            ...newProps
        };
        Object.keys(arrayTypeChildren).forEach((arrayChildName)=>{
            newFlattenedProps = {
                ...newFlattenedProps,
                [arrayChildName]: arrayTypeChildren[arrayChildName]
            };
        });
        return newFlattenedProps;
    }
    warnOnInvalidChildren(child, nestedChildren) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$invariant$2f$invariant$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(VALID_TAG_NAMES.some((name)=>child.type === name), typeof child.type === "function" ? `You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.` : `Only elements types ${VALID_TAG_NAMES.join(", ")} are allowed. Helmet does not support rendering <${child.type}> elements. Refer to our API for more information.`);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$invariant$2f$invariant$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(!nestedChildren || typeof nestedChildren === "string" || Array.isArray(nestedChildren) && !nestedChildren.some((nestedChild)=>typeof nestedChild !== "string"), `Helmet expects a string as a child of <${child.type}>. Did you forget to wrap your children in braces? ( <${child.type}>{\`\`}</${child.type}> ) Refer to our API for more information.`);
        return true;
    }
    mapChildrenToProps(children, newProps) {
        let arrayTypeChildren = {};
        __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].Children.forEach(children, (child)=>{
            if (!child || !child.props) {
                return;
            }
            const { children: nestedChildren, ...childProps } = child.props;
            const newChildProps = Object.keys(childProps).reduce((obj, key)=>{
                obj[HTML_TAG_MAP[key] || key] = childProps[key];
                return obj;
            }, {});
            let { type } = child;
            if (typeof type === "symbol") {
                type = type.toString();
            } else {
                this.warnOnInvalidChildren(child, nestedChildren);
            }
            switch(type){
                case "Symbol(react.fragment)" /* FRAGMENT */ :
                    newProps = this.mapChildrenToProps(nestedChildren, newProps);
                    break;
                case "link" /* LINK */ :
                case "meta" /* META */ :
                case "noscript" /* NOSCRIPT */ :
                case "script" /* SCRIPT */ :
                case "style" /* STYLE */ :
                    arrayTypeChildren = this.flattenArrayTypeChildren(child, arrayTypeChildren, newChildProps, nestedChildren);
                    break;
                default:
                    newProps = this.mapObjectTypeChildren(child, newProps, newChildProps, nestedChildren);
                    break;
            }
        });
        return this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
    }
    render() {
        const { children, ...props } = this.props;
        let newProps = {
            ...props
        };
        let { helmetData } = props;
        if (children) {
            newProps = this.mapChildrenToProps(children, newProps);
        }
        if (helmetData && !(helmetData instanceof HelmetData)) {
            const data = helmetData;
            helmetData = new HelmetData(data.context, true);
            delete newProps.helmetData;
        }
        if (isReact19) {
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(React19Dispatcher, {
                ...newProps
            });
        }
        return helmetData ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(HelmetDispatcher, {
            ...newProps,
            context: helmetData.value
        }) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(Context.Consumer, null, (context)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(HelmetDispatcher, {
                ...newProps,
                context
            }));
    }
};
;
}),
"[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/search.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Search
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/createLucideIcon.js [ssr] (ecmascript)");
;
const Search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("Search", [
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ],
    [
        "path",
        {
            d: "m21 21-4.3-4.3",
            key: "1qie3q"
        }
    ]
]);
;
}),
"[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/search.js [ssr] (ecmascript) <export default as Search>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Search",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/search.js [ssr] (ecmascript)");
}),
"[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/settings.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Settings
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/createLucideIcon.js [ssr] (ecmascript)");
;
const Settings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("Settings", [
    [
        "path",
        {
            d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
            key: "1qme2f"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ]
]);
;
}),
"[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/settings.js [ssr] (ecmascript) <export default as Settings>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Settings",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/settings.js [ssr] (ecmascript)");
}),
"[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/moon.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Moon
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/createLucideIcon.js [ssr] (ecmascript)");
;
const Moon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("Moon", [
    [
        "path",
        {
            d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",
            key: "a7tn18"
        }
    ]
]);
;
}),
"[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/moon.js [ssr] (ecmascript) <export default as Moon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Moon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/moon.js [ssr] (ecmascript)");
}),
"[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/sun.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sun
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/createLucideIcon.js [ssr] (ecmascript)");
;
const Sun = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("Sun", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "4",
            key: "4exip2"
        }
    ],
    [
        "path",
        {
            d: "M12 2v2",
            key: "tus03m"
        }
    ],
    [
        "path",
        {
            d: "M12 20v2",
            key: "1lh1kg"
        }
    ],
    [
        "path",
        {
            d: "m4.93 4.93 1.41 1.41",
            key: "149t6j"
        }
    ],
    [
        "path",
        {
            d: "m17.66 17.66 1.41 1.41",
            key: "ptbguv"
        }
    ],
    [
        "path",
        {
            d: "M2 12h2",
            key: "1t8f8n"
        }
    ],
    [
        "path",
        {
            d: "M20 12h2",
            key: "1q8mjw"
        }
    ],
    [
        "path",
        {
            d: "m6.34 17.66-1.41 1.41",
            key: "1m8zz5"
        }
    ],
    [
        "path",
        {
            d: "m19.07 4.93-1.41 1.41",
            key: "1shlcs"
        }
    ]
]);
;
}),
"[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/sun.js [ssr] (ecmascript) <export default as Sun>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sun",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/sun.js [ssr] (ecmascript)");
}),
"[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/a-large-small.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ALargeSmall
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/createLucideIcon.js [ssr] (ecmascript)");
;
const ALargeSmall = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("ALargeSmall", [
    [
        "path",
        {
            d: "M21 14h-5",
            key: "1vh23k"
        }
    ],
    [
        "path",
        {
            d: "M16 16v-3.5a2.5 2.5 0 0 1 5 0V16",
            key: "1wh10o"
        }
    ],
    [
        "path",
        {
            d: "M4.5 13h6",
            key: "dfilno"
        }
    ],
    [
        "path",
        {
            d: "m3 16 4.5-9 4.5 9",
            key: "2dxa0e"
        }
    ]
]);
;
}),
"[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/a-large-small.js [ssr] (ecmascript) <export default as ALargeSmall>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALargeSmall",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$a$2d$large$2d$small$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$a$2d$large$2d$small$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/a-large-small.js [ssr] (ecmascript)");
}),
"[externals]/@supabase/supabase-js [external] (@supabase/supabase-js, esm_import, [project]/Toorock Project/toorock.verse/node_modules/@supabase/supabase-js)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@supabase/supabase-js-5288ae2981c9f296");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/framer-motion [external] (framer-motion, esm_import, [project]/Toorock Project/toorock.verse/node_modules/framer-motion)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("framer-motion-7ff5adc4339c7997");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__011br58._.js.map