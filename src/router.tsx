import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import BoardPage from "./pages/BoardPage";
import PossibilityStart from "./pages/Possibility/Start";
import PossibilityChildren from "./pages/Possibility/Children";
import PossibilitySpouse from "./pages/Possibility/Spouse";
import PossibilityParents from "./pages/Possibility/Parents";

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
          <Route path="/possibility/*">
            <Route path="start" element={<PossibilityStart />} />
            <Route path="children" element={<PossibilityChildren />} />
            <Route path="spouse" element={<PossibilitySpouse />} />
            <Route path="parent" element={<PossibilityParents />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
