import { Routes, Route, BrowserRouter } from "react-router-dom";
import Signup from "./pages/Signup";
import Mypage from "./pages/Mypage";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/mypage" element={<Mypage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
