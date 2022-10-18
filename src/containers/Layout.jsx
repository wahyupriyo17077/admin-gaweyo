import React, { useContext, Suspense, useEffect, lazy } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import routes from "../routes";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Main from "./Main";
import LocationDashboard from "../pages/LocationDashboard";
import JobDashboard from "../pages/JobDashboard";
import FinanceDashboard from "../pages/FinanceDashboard";
import ThemedSuspense from "../components/ThemedSuspense";
import { SidebarContext } from "../context/SidebarContext";
import DashboardUserActive from "../pages/DashboardUserActive";
import GeneralSetting from "../pages/Forms";
import Previleges from "../pages/Previleges";
import Menus from "../pages/Menus";
import Users from "../pages/Users";
import MobileSetting from "../pages/MobileSetting";
import Permission from "../pages/Permission";
import MobileApp from "../pages/MobileApp";
const Page404 = lazy(() => import("../pages/404"));

function Layout() {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  let location = useLocation();

  useEffect(() => {
    closeSidebar();
  }, [location]);

  return (
    <div className={`flex h-screen bg-gray-50 dark:bg-gray-200 ${isSidebarOpen && "overflow-hidden"}`}>
      <Sidebar />

      <div className="flex flex-col flex-1 w-full">
        <Header />
        <Main>
          <Suspense fallback={<ThemedSuspense />}>
            <Switch>
              {routes.map((route, i) => {
                return route.component ? <Route key={i} exact={true} path={`/app${route.path}`} render={(props) => <route.component {...props} />} /> : null;
              })}
              <Redirect exact from="/app" to="/app/dashboard" />

              <Route path="/app/location-dashboard" component={LocationDashboard} />

              <Route path="/app/job-dashboard" component={JobDashboard} />

              <Route path="/app/finance-dashboard" component={FinanceDashboard} />

              <Route path="/app/dashboard-user-active" component={DashboardUserActive} />

              <Route path="/app/setting/general-setting" component={GeneralSetting} />

              <Route path="/app/setting/previleges" component={Previleges} />
              <Route path="/app/setting/menus" component={Menus} />
              <Route path="/app/setting/users" component={Users} />
              <Route path="/app/setting/mobile-setting" component={MobileSetting} />
              <Route path="/app/setting/mobile-app" component={MobileApp} />

              <Route path="/app/setting/permissions" component={Permission} />
              <Route component={Page404} />
            </Switch>
          </Suspense>
        </Main>
      </div>
    </div>
  );
}

export default Layout;
