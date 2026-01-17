import { Route, Routes } from "react-router";
import Home from "./components/Home.tsx";
import Menu from "./components/menu.tsx";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};
export default App;
