import * as babel from "@babel/core";

export default (code) => {
  let result = { status: true, compiledCode: "", err: "" };
  try {
    result.compiledCode = babel.transform(code, {
      presets: ["@babel/preset-env"],
    }).code;
  } catch (e) {
    result.status = false;
    result.err = e;
    console.log(e);
  }

  return result;
};
