import { readFile, writeFile } from "fs/promises";

// console.log(__dirname); //not works with es6 moduling

console.log(import.meta.url);

const filePath = new URL("./index.html", import.meta.url);

let data = await readFile(filePath, { encoding: `utf-8` });

const obj = {
  title: "my custom title",
  body: "my custom body",
};

for (const [key, value] of Object.entries(obj)) {
  data = data.replace(`{${key}}`, value);
}

await writeFile(new URL("./index.html", import.meta.url), data);
