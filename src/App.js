import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Character from "./pages/Character/Character";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home />} />
          <Route path="/character/:id" element={<Character />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
