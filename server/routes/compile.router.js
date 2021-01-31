import express from "express";
import config from "../config";
import pugCompiler from "../compilers/pug.compiler";
import sassCompiler from "../compilers/sass.compiler";
import babelCompiler from "../compilers/babel.compiler";
import typescriptCompiler from "../compilers/typescript.compiler";
import coffeeScriptCompiler from "../compilers/coffeeScript.compiler";
import markdownCompiler from "../compilers/markdown.compiler";
import lessCompiler from "../compilers/less.compiler";

const route = () => {
  const router = new express.Router();

  router.route("/").get((req, res) => {
    res.send("OK");
  });

  router.route("/pug").post((req, res) => {
    const { code } = req.body;
    res.send(pugCompiler(code));
  });

  router.route("/sass").post((req, res) => {
    const { code } = req.body;
    res.send(sassCompiler(code));
  });

  router.route("/babel").post((req, res) => {
    const { code } = req.body;
    res.send(babelCompiler(code));
  });

  router.route("/typescript").post((req, res) => {
    const { code } = req.body;
    res.send(typescriptCompiler(code));
  });

  router.route("/coffeescript").post((req, res) => {
    const { code } = req.body;
    res.send(coffeeScriptCompiler(code));
  });

  router.route("/markdown").post((req, res) => {
    const { code } = req.body;
    res.send(markdownCompiler(code));
  });

  router.route("/less").post((req, res) => {
    const { code } = req.body;
    res.send(lessCompiler(code));
  });

  return router;
};

export default {
  route,
  routerPrefix: `${config.version}/compile`,
};
