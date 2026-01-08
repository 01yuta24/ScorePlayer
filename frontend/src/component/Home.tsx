import {useNavigate} from "react-router";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Home</h1>
            <button type={"button"} onClick={()=>{navigate("/")}}>Menuに戻る</button>
        </div>
    );
};

export default Home;