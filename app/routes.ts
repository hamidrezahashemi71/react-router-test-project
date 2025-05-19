import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  index("./home/index.tsx"),
  route("about", "./about/index.tsx"),

  layout("./(auth)/layout.tsx", [
    route("login", "./(auth)/login/index.tsx"),
    // route("register", "./auth/register.tsx"),
  ]),

  // ...prefix("concerts", [
  //   index("./concerts/home.tsx"),
  //   route(":city", "./concerts/city.tsx"),
  //   route("trending", "./concerts/trending.tsx"),
  // ]),
] satisfies RouteConfig;