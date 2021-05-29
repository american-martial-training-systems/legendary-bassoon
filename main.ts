import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";

const hash = await bcrypt.hash("test");

const result = await bcrypt.compare("test", hash);

console.log(result);
