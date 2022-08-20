import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import { Mail } from "@mui/icons-material";
function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={} />
         <Route path="/mail" element={<Mail />} />
      </Routes>
    </div>
  );
}

export default App;
