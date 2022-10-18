import React, { lazy } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import AccessibleNavigationAnnouncer from "./components/AccessibleNavigationAnnouncer";
const Layout = lazy(() => import("./containers/Layout"));
const Login = lazy(() => import("./pages/Login"));
const JobDashboard = lazy(() => import("./pages/JobDashboard"));
const LocationDashboard = lazy(() => import("./pages/LocationDashboard"));
const FinancDashboard = lazy(() => import("./pages/FinanceDashboard"));
const DashboardUserActive = lazy(() => import("./pages/DashboardUserActive"));
const GeneralSetting = lazy(() => import("./pages/Forms"));
const Users = lazy(() => import("./pages/Users"));
const Previleges = lazy(() => import("./pages/Previleges"));
const Permissions = lazy(() => import("./pages/Permission"));

const Menus = lazy(() => import("./pages/Menus"));
const MobileSetting = lazy(() => import("./pages/MobileSetting"));
const MobileApp = lazy(() => import("./pages/MobileApp"));

function App() {
  return (
    <>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
          <Route path="/login" component={Login} />
          {/* Place new routes over this */}
          <Route path="/app" component={Layout} />

          <Route path="/app/dashboard" component={Layout} />

          <Route path="/app/location-dashboard" component={LocationDashboard} />

          <Route path="/app/job-dashboard" component={JobDashboard} />
          <Route path="/app/finance-dashboard" component={FinancDashboard} />

          <Route path="/app/dashboard-user-active" component={DashboardUserActive} />

          <Route path="/app/setting/general-setting" component={GeneralSetting} />

          <Route path="/app/setting/previleges" component={Previleges} />
          <Route path="/app/setting/menus" component={Menus} />

          <Route path="/app/setting/users" component={Users} />
          <Route path="/app/setting/permissions" component={Permissions} />
          <Route path="/app/setting/mobile-setting" component={MobileSetting} />

          <Route path="/app/setting/mobile-app" component={MobileApp} />

          {/* If you have an index page, you can remothis Redirect */}
          <Redirect exact from="/" to="/login" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
