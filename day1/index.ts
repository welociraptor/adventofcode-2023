import fs from "node:fs/promises";

console.log(await fs.readFile("day1/testdata", { encoding: "utf-8" }));

console.log("day 1 solution comes here.");
