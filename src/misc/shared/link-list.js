import { tokenCache } from "../hooks/auth";

import loadable from "@loadable/component";

//Lazy load all components except the component for root or home
const AsyncLogout = loadable(() => import("../../core/Logout/Logout"));
const AsyncGraphiQL = loadable(() =>
  import("../../core/GraphiQlWrap/GraphiQlWrap")
);
import Login from "../../core/Login/Login";

/**
 * How to use:
 * Adding a menu here automatically adds them to our RoutesList component
 * These objects are simply mapped to a <Route/> component
 * You can pass them to a <Menu linklist={}/> component knowing that the routes are taken care of.
 */

//!Do not delete. This serves as a fallback linklist
export const defaultLinkList = [
  {
    path: "/",
    exact: true,
    component: Login,
    label: "Login"
  },
  {
    path: "/logout",
    exact: true,
    component: AsyncLogout,
    label: "Logout"
  }
];

export const authLinkList = [
  {
    path: "/logout",
    exact: true,
    component: AsyncLogout,
    label: "Logout"
  }
];

export const unAuthLinkList = [
  {
    path: "/",
    exact: true,
    component: Login,
    label: "Login"
  }
];

export const getLinkList = () => {
  return tokenCache.token ? authLinkList : unAuthLinkList;
};

export const list = [defaultLinkList, authLinkList, unAuthLinkList];

if (process.env.NODE_ENV === "development") {
  list.forEach(li => {
    li.push({
      path: "/__graphiql",
      exact: true,
      component: AsyncGraphiQL,
      label: "GraphiQlIDE"
    });
  });
}
