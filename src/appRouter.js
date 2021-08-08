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
  FlexPocket,
  AddMoney,
  LockPocket,
  LockPage,
  LockPreview,
  WithDraw,
  LockFunds,
  TargetPocket,
  TargetSave,
  TargetReview,
  TargetWithDraw,
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
      <Route exact component={FlexPocket} path={ROUTES.FLEXPOCKET} />
      <Route exact component={AddMoney} path={ROUTES.ADDMONEY} />
      <Route exact component={LockPocket} path={ROUTES.LOCKPOCKET} />
      <Route exact component={LockPage} path={ROUTES.LOCKPAGE} />
      <Route exact component={LockPreview} path={ROUTES.LOCKREVIEW} />
      <Route exact component={WithDraw} path={ROUTES.WITHDRAW} />
      <Route exact component={LockFunds} path={ROUTES.LOCKFUNDS} />
      <Route exact component={TargetPocket} path={ROUTES.TARGETPOCKET} />
      <Route exact component={TargetSave} path={ROUTES.TARGETSAVE} />
      <Route exact component={TargetReview} path={ROUTES.TARGETREVIEW} />
      <Route exact component={TargetWithDraw} path={ROUTES.TARGETWITHDRAW} />
    </Router>
  );
};

export default AppRouter;
