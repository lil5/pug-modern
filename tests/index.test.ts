import { expect, test } from "vitest";
import Pug from "../src";

test("render basic pug", () => {
  expect(Pug.render("h1 hi")).toBe("<h1>hi</h1>");
});

test("render with variables pug", () => {
  expect(Pug.render("h1 #{hi}", { hi: "hello" })).toBe("<h1>hello</h1>");
});

test("compile basic pug", () => {
  expect(Pug.compile("h1 hi")()).toBe("<h1>hi</h1>");
});
