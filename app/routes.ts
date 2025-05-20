import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  ...prefix("question", [
    index("./(root)/home/index.tsx"),  // HOME ROUTE
    route("about", "./(root)/about/index.tsx"), // NORMAL ROUTE
    route("post/:postId", "./(root)/post/index.tsx"), // DYNAMIC ROUTE
  ]),

  ...prefix("checkout", [
    index("./(checkout)/checkout/index.tsx"),  // CHECKOUT ROUTE
    route("additional-plan", "./(checkout)/additional-plan/index.tsx"), // NORMAL ROUTE
  ]),

  route("preCheckout", "./(checkout)/pre-checkout/index.tsx"), // DYNAMIC ROUTE

  route("dashboard", "./(dashboard)/dashboard/index.tsx", [
    route("finances", "./(dashboard)/finances/index.tsx"),
    route("profile", "./(dashboard)/profile/index.tsx")
  ]), // NESTED ROUTING

  layout("./(auth)/layout.tsx", [
    route("login", "./(auth)/login/index.tsx"),
    route("sign-up", "./(auth)/sing-up/index.tsx"),
  ]), // DIFFERENT LAYOUT
] satisfies RouteConfig;

