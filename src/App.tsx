import { Routes, Route } from "react-router-dom";
import ClientApprovalForm from "./pages/users/ClientApprovalForm";
// import HeroSections from "./components/user/HeroSections";
import LoginForm from "./pages/LoginForm";
import Dashboard from "./pages/admin/Dashboard";
import My from "./pages/users/My";
import History from "./pages/users/History";
import RegisterForm from "./pages/RegisterForm";
import ProtectedRoute from "./auth/ProtectedRoute";

const App = () => {
  return (
    <>
      <Routes>
        {/* Route for user */}
        <Route
          path="/my"
          element={
            <ProtectedRoute allowedRoles={["user"]}>
              <My />
            </ProtectedRoute>
          }
        />
        <Route
          path="/history"
          element={
            <ProtectedRoute allowedRoles={["user"]}>
              <History />
            </ProtectedRoute>
          }
        />
        <Route
          path="/form"
          element={
            <ProtectedRoute allowedRoles={["user"]}>
              <ClientApprovalForm />
            </ProtectedRoute>
          }
        />
        {/* Route for user */}

        {/* Route for admin */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRoles={["user"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Route for admin */}
        <Route path="/" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </>
  );
};
export default App;
