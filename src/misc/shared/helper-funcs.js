import React from "react";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { REFRESH_TOKEN, JWT_AUTH_EXPIRATION } from "./constants";

/**
 *Ensures that all values from a given array are unique
 * @returns An array containing the unique values
 * @param {Array} array
 */
export const uniqueRoutes = array => {
  //check if param is array
  if (!Array.isArray(array)) {
    return;
  }

  const s = new Set();
  const a = [];

  array.forEach(itm => {
    //check if Set does not have the value, then add them to Set and the array to be returned
    if (!s.has(itm.path)) {
      s.add(itm.path);
      a.push(itm);
    }
  });

  return a;
};

export const uniqArray = array => {
  //check if param is array
  if (!Array.isArray(array)) {
    return;
  }

  const s = new Set();
  const a = [];

  array.forEach(itm => {
    //check if Set does not have the value, then add them to Set and the array to be returned
    if (!s.has(itm)) {
      s.add(itm);
      a.push(itm);
    }
  });

  return a;
};

export const isDate = input => {
  if (Object.prototype.toString.call(input) === "[object Date]") return true;
  return false;
};

export const isFunction = value =>
  value &&
  (Object.prototype.toString.call(value) === "[object Function]" ||
    "function" === typeof value ||
    value instanceof Function);

export const cleanupLocalStorage = () => {
  console.log("Cleanup localstorage...");
  localStorage.removeItem(REFRESH_TOKEN);
  localStorage.removeItem(JWT_AUTH_EXPIRATION);
  console.log(`Removed ${(REFRESH_TOKEN, JWT_AUTH_EXPIRATION)}`);
};

export const setupLocalStorage = data => {
  console.log("Setup localstorage...");
  localStorage.setItem(REFRESH_TOKEN, data.login[REFRESH_TOKEN]);
  localStorage.setItem(
    JWT_AUTH_EXPIRATION,
    data.login.user[JWT_AUTH_EXPIRATION]
  );
};

// this is a handy function for any component we need to test
// that relies on the router being in context
export const renderWithRouter = (
  ui,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) => {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history
  };
};
