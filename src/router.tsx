import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import BoardPage from "./pages/BoardPage";
import PossibilityStart from "./pages/Possibility/Start";
import PossibilitySpouse from "./pages/Possibility/Spouse";
import PossibilityMonthlyIncome from "./pages/Possibility/MonthlyIncome";
import PossibilityAssetValues from "./pages/Possibility/AssetValues";
import WritePage from "./pages/WritePage";
import PossibilityDebt from "./pages/Possibility/Debt";
import PossibilityResult from "./pages/Possibility/Result";
import LawyerPage from "./pages/LawyerPage";
import PossibilityNumberOfDependents from "./pages/Possibility/NumberOfDependents";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/board" element={<BoardPage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/lawyer" element={<LawyerPage />} />
          <Route path="/possibility/*">
            <Route path="start" element={<PossibilityStart />} />
            <Route
              path="children"
              element={<PossibilityNumberOfDependents />}
            />
            <Route path="spouse" element={<PossibilitySpouse />} />
            <Route
              path="monthlyincome"
              element={<PossibilityMonthlyIncome />}
            />
            <Route path="assetvalues" element={<PossibilityAssetValues />} />
            <Route path="debtor" element={<PossibilityDebt />} />
            <Route path="result" element={<PossibilityResult />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
