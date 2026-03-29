(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/react-router-dom/dist/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/react-router/dist/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/arrow-left.js [client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/crown.js [client] (ecmascript) <export default as Crown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/log-out.js [client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$components$2f$PageTransition$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/src/components/PageTransition.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$components$2f$ThemeToggle$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/src/components/ThemeToggle.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/src/integrations/supabase/client.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$lib$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/src/lib/api.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Toorock Project/toorock.verse/src/hooks/use-toast.ts [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
const BAR_COLORS = [
    "bg-sky-400",
    "bg-orange-400",
    "bg-violet-400",
    "bg-lime-400",
    "bg-pink-400",
    "bg-amber-400",
    "bg-cyan-400",
    "bg-rose-400"
];
const AdminUploaderOverview = ()=>{
    _s();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNavigate"])();
    const location = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useLocation"])();
    const { userId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useParams"])();
    const navState = location.state ?? null;
    const [checked, setChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [authed, setAuthed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [refreshing, setRefreshing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userRow, setUserRow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(navState?.row ?? null);
    const [rank, setRank] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(navState?.rank ?? null);
    const [overview, setOverview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const loadPage = async (silent = false)=>{
        if (!userId) return;
        if (!silent) setLoading(true);
        else setRefreshing(true);
        try {
            const [leaderboardRows, categoryRows] = await Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$lib$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fetchAdminUploadLeaderboard"])(),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$lib$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fetchAdminUploaderCategoryOverview"])(userId)
            ]);
            setOverview(categoryRows);
            const idx = leaderboardRows.findIndex((x)=>x.user_id === userId);
            setRank(idx >= 0 ? idx + 1 : null);
            setUserRow(idx >= 0 ? leaderboardRows[idx] : null);
        } catch (err) {
            const msg = err instanceof Error ? err.message : String(err);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Failed to load uploader overview",
                description: msg,
                variant: "destructive"
            });
        }
        setLoading(false);
        setRefreshing(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminUploaderOverview.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].auth.getSession().then({
                "AdminUploaderOverview.useEffect": ({ data })=>{
                    if (!data.session) {
                        navigate("/admin/login", {
                            replace: true
                        });
                    } else {
                        setAuthed(true);
                    }
                    setChecked(true);
                }
            }["AdminUploaderOverview.useEffect"]);
        }
    }["AdminUploaderOverview.useEffect"], [
        navigate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminUploaderOverview.useEffect": ()=>{
            if (!authed || !userId) return;
            loadPage();
            const channel = __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].channel("admin-uploader-overview-realtime").on("postgres_changes", {
                event: "*",
                schema: "public",
                table: "articles"
            }, {
                "AdminUploaderOverview.useEffect.channel": ()=>{
                    loadPage(true);
                }
            }["AdminUploaderOverview.useEffect.channel"]).subscribe();
            return ({
                "AdminUploaderOverview.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].removeChannel(channel);
                }
            })["AdminUploaderOverview.useEffect"];
        }
    }["AdminUploaderOverview.useEffect"], [
        authed,
        userId
    ]);
    const totals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdminUploaderOverview.useMemo[totals]": ()=>{
            const total = overview.reduce({
                "AdminUploaderOverview.useMemo[totals].total": (sum, item)=>sum + item.total_articles
            }["AdminUploaderOverview.useMemo[totals].total"], 0);
            const published = overview.reduce({
                "AdminUploaderOverview.useMemo[totals].published": (sum, item)=>sum + item.published_articles
            }["AdminUploaderOverview.useMemo[totals].published"], 0);
            const drafts = overview.reduce({
                "AdminUploaderOverview.useMemo[totals].drafts": (sum, item)=>sum + item.draft_articles
            }["AdminUploaderOverview.useMemo[totals].drafts"], 0);
            const categories = overview.length;
            const publishRate = total > 0 ? Math.round(published / total * 100) : 0;
            return {
                total,
                published,
                drafts,
                categories,
                publishRate
            };
        }
    }["AdminUploaderOverview.useMemo[totals]"], [
        overview
    ]);
    const maxCategoryCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdminUploaderOverview.useMemo[maxCategoryCount]": ()=>Math.max(1, ...overview.map({
                "AdminUploaderOverview.useMemo[maxCategoryCount]": (x)=>x.total_articles
            }["AdminUploaderOverview.useMemo[maxCategoryCount]"]))
    }["AdminUploaderOverview.useMemo[maxCategoryCount]"], [
        overview
    ]);
    if (!checked || !authed) return null;
    const handleLogout = async ()=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
        navigate("/admin/login", {
            replace: true
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$components$2f$PageTransition$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-background",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-b border-border bg-background sticky top-0 z-40",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container flex items-center justify-between h-14 gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Link"], {
                                        to: "/admin/leaderboard",
                                        className: "flex items-center gap-1.5 font-meta text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                                lineNumber: 125,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Leaderboard"
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                                lineNumber: 126,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-heading text-xl sm:text-2xl text-primary tracking-widest truncate",
                                        children: "UPLOADER OVERVIEW"
                                    }, void 0, false, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$src$2f$components$2f$ThemeToggle$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>loadPage(true),
                                        className: "p-2 text-muted-foreground hover:text-primary transition-colors",
                                        title: "Refresh",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                            className: `h-4 w-4 ${refreshing ? "animate-spin" : ""}`
                                        }, void 0, false, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleLogout,
                                        className: "flex items-center gap-1.5 font-meta text-xs uppercase tracking-wider text-muted-foreground hover:text-destructive transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                                lineNumber: 143,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "hidden sm:inline",
                                                children: "Sign out"
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                                lineNumber: 144,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "container py-6 max-w-6xl",
                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-body text-sm text-muted-foreground py-10 text-center",
                        children: "Loading uploader overview..."
                    }, void 0, false, {
                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                        lineNumber: 152,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : !userId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-body text-sm text-destructive py-10 text-center",
                        children: "Invalid uploader id."
                    }, void 0, false, {
                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                        lineNumber: 154,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "border border-border overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gradient-to-r from-slate-700 via-indigo-700 to-slate-700 p-4 md:p-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-meta text-[10px] uppercase tracking-widest text-slate-200/90",
                                                            children: "Uploader Profile"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                                            lineNumber: 161,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                            className: "font-heading text-3xl md:text-4xl text-white tracking-widest truncate mt-1",
                                                            children: userRow?.display_name ?? "Unknown Admin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-meta text-[10px] uppercase tracking-wider text-slate-200/80 mt-1",
                                                            children: [
                                                                "Joined ",
                                                                userRow ? new Date(userRow.registered_at).toLocaleDateString("en-GB") : "-"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                                            lineNumber: 165,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right shrink-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-end gap-1.5 text-amber-300 mb-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                                                    lineNumber: 172,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-meta text-[10px] uppercase tracking-wider",
                                                                    children: "Rank"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                                                    lineNumber: 173,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                                            lineNumber: 171,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-heading text-3xl text-white",
                                                            children: rank ? String(rank).padStart(2, "0") : "--"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                                            lineNumber: 175,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                            lineNumber: 159,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                        lineNumber: 158,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 md:grid-cols-5 gap-0 border-t border-border bg-secondary/20",
                                        children: [
                                            {
                                                label: "Total Uploads",
                                                value: totals.total,
                                                color: "text-foreground"
                                            },
                                            {
                                                label: "Published",
                                                value: totals.published,
                                                color: "text-green-500"
                                            },
                                            {
                                                label: "Draft",
                                                value: totals.drafts,
                                                color: "text-muted-foreground"
                                            },
                                            {
                                                label: "Categories",
                                                value: totals.categories,
                                                color: "text-blue-400"
                                            },
                                            {
                                                label: "Publish Rate",
                                                value: `${totals.publishRate}%`,
                                                color: "text-primary"
                                            }
                                        ].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `p-4 ${idx < 4 ? "md:border-r border-border" : ""} ${idx % 2 === 0 ? "border-r border-border md:border-r" : ""} border-b md:border-b-0 border-border`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-meta text-[9px] uppercase tracking-wider text-muted-foreground",
                                                        children: item.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `font-heading text-3xl mt-1 ${item.color}`,
                                                        children: item.value
                                                    }, void 0, false, {
                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, item.label, true, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                                lineNumber: 188,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                        lineNumber: 180,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                lineNumber: 157,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "border border-border",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-b border-border px-4 py-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "font-heading text-lg tracking-widest text-foreground",
                                                    children: "CATEGORY STATS"
                                                }, void 0, false, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                                lineNumber: 198,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            overview.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-body text-sm text-muted-foreground px-4 py-8 text-center",
                                                children: "No uploads for this admin yet."
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                                lineNumber: 202,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "divide-y divide-border",
                                                children: overview.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "px-4 py-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-body text-sm text-foreground truncate",
                                                                        children: row.category
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                                                        lineNumber: 208,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-heading text-base text-foreground",
                                                                        children: row.total_articles
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                                                        lineNumber: 209,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                                                lineNumber: 207,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3 mt-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-meta text-[9px] uppercase tracking-wider text-green-500",
                                                                        children: [
                                                                            "Published ",
                                                                            row.published_articles
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                                                        lineNumber: 212,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-meta text-[9px] uppercase tracking-wider text-muted-foreground",
                                                                        children: [
                                                                            "Draft ",
                                                                            row.draft_articles
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                                                        lineNumber: 213,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                                                lineNumber: 211,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-meta text-[9px] uppercase tracking-wider text-muted-foreground mt-1",
                                                                children: row.last_upload_at ? `Last upload ${new Date(row.last_upload_at).toLocaleDateString("en-GB")}` : "No upload date"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                                                lineNumber: 215,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, row.category, true, {
                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                                lineNumber: 204,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                        lineNumber: 197,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "border border-border",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-b border-border px-4 py-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "font-heading text-lg tracking-widest text-foreground",
                                                    children: "CATEGORY COMPARISON"
                                                }, void 0, false, {
                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                                lineNumber: 225,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            overview.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-body text-sm text-muted-foreground px-4 py-8 text-center",
                                                children: "No category data to compare."
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                                lineNumber: 229,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-4 py-3 space-y-2",
                                                children: overview.map((row, i)=>{
                                                    const pct = Math.max(6, Math.round(row.total_articles / maxCategoryCount * 100));
                                                    const color = BAR_COLORS[i % BAR_COLORS.length];
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-[120px_1fr_40px] items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-meta text-[10px] uppercase tracking-wider text-muted-foreground truncate",
                                                                children: row.category
                                                            }, void 0, false, {
                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                                                lineNumber: 237,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-5 bg-secondary border border-border relative overflow-hidden",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `h-full ${color}`,
                                                                    style: {
                                                                        width: `${pct}%`
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                                                    lineNumber: 239,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                                                lineNumber: 238,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-meta text-[10px] uppercase tracking-wider text-foreground text-right",
                                                                children: row.total_articles
                                                            }, void 0, false, {
                                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                                                lineNumber: 241,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, row.category, true, {
                                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0));
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                                lineNumber: 231,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                        lineNumber: 224,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                                lineNumber: 196,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                        lineNumber: 156,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
            lineNumber: 120,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Toorock Project/toorock.verse/src/pages/AdminUploaderOverview.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AdminUploaderOverview, "j6rV+hehitLH2BZPZRo+KviljaU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNavigate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useLocation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Toorock__Project$2f$toorock$2e$verse$2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useParams"]
    ];
});
_c = AdminUploaderOverview;
const __TURBOPACK__default__export__ = AdminUploaderOverview;
var _c;
__turbopack_context__.k.register(_c, "AdminUploaderOverview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Toorock%20Project_toorock_verse_src_00gjz5m._.js.map