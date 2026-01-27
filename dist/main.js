"use strict";
// src/main.ts
const title = document.querySelector("h1");
if (!title) {
    throw new Error("H1 not found");
}
title.textContent = "TypeScript is working 🚀";
title.style.color = "crimson";
//# sourceMappingURL=main.js.map