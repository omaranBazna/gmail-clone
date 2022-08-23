import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Mail from "./components/Mail";
import EmailList from "./components/EmailList";
import { useSelector } from "react-redux";
import SendMail from "./components/SendMail";
function App() {
  const send = useSelector((state) => state.mail.sendMessage_isOpen);
  return (
    <div className="App">
      <Header />
      <div className="app-body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<EmailList />} />
          <Route path="/mail" element={<Mail />} />
        </Routes>

        {send && <SendMail />}
      </div>
    </div>
  );
}

export default App;
