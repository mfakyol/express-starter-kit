import less from "less";

export default (code) => {
  let result = { status: true, compiledCode: "", err: "" };

  less.render(code, {}, (err, data) => {
    if (err) {
      result.err = err;
      return
    }
    console.log('Sss')
    result.compiledCode = data.css;
  });
  return result
};
