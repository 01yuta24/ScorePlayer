import {Route, Routes} from "react-router";
import Home from "./component/Home.tsx";
import Menu from "./component/menu.tsx";

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    )
}
export default App