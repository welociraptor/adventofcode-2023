import fs from "node:fs/promises";

const testdata = await fs.readFile("day1/testdata", { encoding: "utf-8" });

for (const input of testdata.split(/\n/)) {
  const matches = Array.from(input.matchAll(/(\d)/g));
  for (const match of matches) console.log(match[0]);
}
