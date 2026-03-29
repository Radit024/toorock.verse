self.__BUILD_MANIFEST = {
  "/[[...slug]]": [
    "static/chunks/pages/[[...slug]].js"
  ],
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/share/:id",
        "destination": "/api/share?id=:id"
      }
    ],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error",
    "/api/share",
    "/[[...slug]]"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()