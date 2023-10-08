//@ts-ignore
import lexer from "pug-lexer";
//@ts-ignore
import parser from "pug-parser";
//@ts-ignore
import generator from "pug-code-gen";
//@ts-ignore
import runtime from "pug-runtime";

import type { LocalsObject, Options } from "pug";

type CompileReturnFunc = (data?: LocalsObject) => string;

function wrapper(template: string) {
  return Function("pug", template + "\nreturn template;")(runtime);
}

function compile(template: string, options: Options = {}): CompileReturnFunc {
  return wrapper(generator(parser(lexer(template, options), options), options));
}

function render(
  template: string,
  data: LocalsObject = {},
  options: Options = {}
): string {
  return compile(template, options)(data);
}

export default {
  compile,
  render,
};
