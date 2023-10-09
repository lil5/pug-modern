// //@ts-ignore
// import lexer from "pug-lexer";
// //@ts-ignore
// import parser from "pug-parser";
// //@ts-ignore
// import generator from "pug-code-gen";
// //@ts-ignore
// import runtime from "pug-runtime";

//@ts-ignore
import "../vendor/pug.min.cjs";
// const lexer = pug("lexer");
// const parser = pug("parser");
// const generator = pug("generator");
// const runtime = pug("runtime");

const pugImport = require("pug");

import type {
  LocalsObject,
  Options,
  compile as Compile,
  render as Render,
} from "pug";

const render = pugImport.render as typeof Render;
const compile = pugImport.compile as typeof Compile;

// type CompileReturnFunc = (data?: LocalsObject) => string;

// function wrapper(template: string) {
//   return Function("pug", template + "\nreturn template;")(runtime);
// }

// function compile(
//   template: string,
//   options: Options = { inlineRuntimeFunctions: true }
// ): CompileReturnFunc {
//   return wrapper(generator(parser(lexer(template, options), options), options));
// }

// function render(
//   template: string,
//   data: LocalsObject = {},
//   options?: Options
// ): string {
//   return compile(template, options)(data);
// }

export default {
  compile,
  render,
};
