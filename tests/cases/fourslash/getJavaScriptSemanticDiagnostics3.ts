/// <reference path="fourslash.ts" />

// @jsExtensions: js
// @Filename: a.js
//// class C<T> { }

verify.getSemanticDiagnostics(`[
  {
    "message": "'type parameter declarations' can only be used in a .ts file.",
    "start": 8,
    "length": 1,
    "category": "error",
    "code": 8004
  }
]`);