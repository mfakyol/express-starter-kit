import ExampleRouter from "./example.router";

const AppRoutes = (app) => {
  app.use(ExampleRouter.routerPrefix, ExampleRouter.route());
};

export default AppRoutes;
