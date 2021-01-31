import showdown from "showdown";

export default (code) => {
  let result = { status: true, compiledCode: "", err: "" };
  let converter = new showdown.Converter();
  try {
    result.compiledCode = converter.makeHtml(code);
  } catch (e) {
    console.log(e)
    result.status = false;
    result.err = e;
  }
  return result;
};
