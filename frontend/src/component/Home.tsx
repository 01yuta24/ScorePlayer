import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      <button
        type={"button"}
        onClick={() => {
          navigate("/");
        }}
      >
        Menuに戻る
      </button>
      <section aria-label={"keyboard"}>
        <button type={"button"}>ド</button>
        <button type={"button"}>レ</button>
        <button type={"button"}>ミ</button>
        <button type={"button"}>ファ</button>
        <button type={"button"}>ソ</button>
        <button type={"button"}>ラ</button>
        <button type={"button"}>シ</button>
      </section>
    </div>
  );
};

export default Home;
