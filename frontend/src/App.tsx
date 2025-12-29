import {useNavigate} from "react-router";

const App: React.FC = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1>Hello, World!</h1>
            <button onClick={()=>navigate("/home")}>ボタン</button>
        </>
    )
}
export default App