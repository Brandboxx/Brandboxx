import { BrowserRouter as Router, Route } from "react-router-dom";

import * as ROUTES from "./constants/routes";

import {
  Landing,
  Components,
  SignUp,
  Login,
  Dashboard,
  PocketPlans,
  Account,
} from "./pages";

const AppRouter = () => {
  return (
    <Router>
      <Route exact component={Landing} path={ROUTES.LANDING} />
      <Route exact component={Components} path={ROUTES.COMPONENT} />
      <Route exact component={SignUp} path={ROUTES.REGISTER} />
      <Route exact component={Login} path={ROUTES.LOGIN} />
      <Route exact component={Dashboard} path={ROUTES.DASHBOARD} />
      <Route exact component={Account} path={ROUTES.ACCOUNT} />
      <Route exact component={PocketPlans} path={ROUTES.POCKETPLANS} />
    </Router>
  );
};

export default AppRouter;
