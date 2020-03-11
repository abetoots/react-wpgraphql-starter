import React, { useEffect, useState } from "react";

//Routing
import { BrowserRouter } from "react-router-dom";

//Components
import RoutesList from "./core/RoutesList/RoutesList";
import BoundaryUI from "./hoc/BoundaryUI/BoundaryUI";

//Misc
import authStore from "./misc/store/authentication";
import { useStore, combineStore } from "./misc/store/store-core";
import { list } from "./misc/shared/link-list";
import { uniqueRoutes } from "./misc/shared/helper-funcs";
import { useRefreshToken } from "./misc/hooks/auth";
import { REFRESH_TOKEN } from "./misc/shared/constants";

combineStore({
  auth: authStore
});

const App = () => {
  const routes = uniqueRoutes(list.flat());
  const [, dispatch] = useStore("auth");
  const [mounted, setMounted] = useState(false);

  const [
    startRefresh,
    { loadingRefresh, called },
    { successRefresh, data },
    { errorRefresh }
  ] = useRefreshToken();

  useEffect(() => {
    //if we found a refresh token
    if (successRefresh) {
      dispatch("AUTH_SUCCESS", data);
    }
  }, [successRefresh]);

  //ComponentDidMount
  useEffect(() => {
    if (localStorage.getItem(REFRESH_TOKEN)) {
      startRefresh();
    }
    setMounted(true);
  }, []);

  return (
    <BrowserRouter>
      <BoundaryUI loading={loadingRefresh}>
        {mounted ? <RoutesList routes={routes} /> : ""}
      </BoundaryUI>
    </BrowserRouter>
  );
};

export default App;
