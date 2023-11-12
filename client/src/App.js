import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignInSignUpPage from "./views/SignInSignUpPage";
import RequireAuth from "./components/RequireAuth";
import FeedPage from "./views/FeedPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <FeedPage />
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
