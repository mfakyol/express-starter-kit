import coffeeScript from 'coffee-script';
export default (code) => {
  let result = { status: true, compiledCode: "", err: "" };
  try {
    result.compiledCode = coffeeScript.compile(code);
  } catch (e) {
    result.status = false;
    result.err = e;
  }

  return result;
};
