import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignInSignUpPage from "./views/SignInSignUpPage";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <SignInSignUpPage title="Sign In" />
            </RequireAuth>
          }
        />
        <Route path="/signin" element={<SignInSignUpPage title="Sign In" />} />
        <Route path="/signup" element={<SignInSignUpPage title="Sign Up" />} />
      </Routes>
    </div>
  );
}

export default App;
