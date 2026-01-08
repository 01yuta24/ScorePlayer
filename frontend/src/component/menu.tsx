import {useNavigate} from "react-router";

const Menu = () => {
    const navigate = useNavigate()
    return (
        <>
            <h1>メニュー画面</h1>
            <button type={"button"} onClick={()=>{navigate("/home")}}>スタート</button>
        </>
    )
}

export default Menu;