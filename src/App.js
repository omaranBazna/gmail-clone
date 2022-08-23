import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Mail from "./components/Mail";
import EmailList from "./components/EmailList";
import { useSelector } from "react-redux";
import SendMail from "./components/SendMail";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { login } from "./app/features/userSlice";

import { provider, auth } from "./firebase";
import { signInWithPopup } from "firebase/auth";
function App() {
  const send = useSelector((state) => state.mail.sendMessage_isOpen);

  const userEmail = useSelector((state) => state.user.userEmail);
  const dispatch = useDispatch();

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(login(result.user));
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="App">
      <Header />

      {userEmail !== "" && (
        <div className="app-body">
          <Sidebar />
          <Routes>
            <Route path="/" element={<EmailList />} />
            <Route path="/mail" element={<Mail />} />
          </Routes>

          {send && <SendMail />}
        </div>
      )}

      {userEmail === "" && <button onClick={signIn}>Login</button>}
    </div>
  );
}

export default App;
