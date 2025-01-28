import { Routes, Route } from "react-router-dom";
import ClientApprovalForm from "./pages/users/ClientApprovalForm";
import HeroSections from "./components/user/HeroSections";
import LoginForm from "./pages/admin/LoginForm";
import Dashboard from "./pages/admin/Dashboard";
import My from "./pages/users/My";
import History from "./pages/users/History";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeroSections />} />
        <Route path="/form" element={<ClientApprovalForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my" element={<My />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </>
  );
};
export default App;
