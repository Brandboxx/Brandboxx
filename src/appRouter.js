import { BrowserRouter as Router, Route } from "react-router-dom";
import { Loader } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  LockFunds,
  TargetPocket,
  TargetSave,
  TargetReview,
  TargetWithDraw,
  VerifyAccount,
  WithdrawPage,
  LockPageWithdraw,
  TargetFunds,
} from "./pages";
import ProtectedRoute from "./components/router/protectedRoute";
import { FlexFunds } from "./pages/FlexwithrawPage/funds";

const AppRouter = () => {
  return (
    <Router>
      <Loader />
      <ToastContainer />
      <Route exact component={Landing} path={ROUTES.LANDING} />
      <Route exact component={Components} path={ROUTES.COMPONENT} />
      <Route exact component={SignUp} path={ROUTES.REGISTER} />
      <Route exact component={Login} path={ROUTES.LOGIN} />
      <ProtectedRoute exact component={VerifyAccount} path={ROUTES.VERIFYACCOUNT} />
      <ProtectedRoute exact component={LockPageWithdraw} path={ROUTES.LOCK_WITHDRAW} />
      <ProtectedRoute exact component={Dashboard} path={ROUTES.DASHBOARD} />
      <ProtectedRoute exact component={Account} path={ROUTES.ACCOUNT} />
      <ProtectedRoute exact component={PocketPlans} path={ROUTES.POCKETPLANS} />
      <ProtectedRoute exact component={FlexPocket} path={ROUTES.FLEXPOCKET} />
      <ProtectedRoute exact component={AddMoney} path={ROUTES.ADDMONEY} />
      <ProtectedRoute exact component={LockPocket} path={ROUTES.LOCKPOCKET} />
      <ProtectedRoute exact component={LockPage} path={ROUTES.LOCKPAGE} />
      <ProtectedRoute exact component={LockPreview} path={ROUTES.LOCKREVIEW} />
      <ProtectedRoute exact component={WithdrawPage} path={ROUTES.WITHDRAW} />
      <ProtectedRoute exact component={FlexFunds} path={ROUTES.FLEXWITHDRAW} />
      <ProtectedRoute exact component={LockFunds} path={ROUTES.LOCKFUNDS} />
      <ProtectedRoute exact component={TargetFunds} path={ROUTES.TARGETFUNDS} />
      <ProtectedRoute exact component={TargetPocket} path={ROUTES.TARGETPOCKET} />
      <ProtectedRoute exact component={TargetSave} path={ROUTES.TARGETSAVE} />
      <ProtectedRoute exact component={TargetReview} path={ROUTES.TARGETREVIEW} />
      <ProtectedRoute exact component={TargetWithDraw} path={ROUTES.TARGETWITHDRAW} />
    </Router>
  );
};

export default AppRouter;
