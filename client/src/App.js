import LoginForm from "./pages/LoginForm";
import Nav from "./components/header/Nav";
import SignupForm from "./pages/SignupForm";
import User from "./pages/User";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </div>
  );
}

export default App;
