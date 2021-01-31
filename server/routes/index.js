import ExampleRouter from "./example.router";
import CompileRouter from "./compile.router";

const AppRoutes = (app) => {
  app.use(ExampleRouter.routerPrefix, ExampleRouter.route());
  app.use(CompileRouter.routerPrefix, CompileRouter.route());
};

export default AppRoutes;
