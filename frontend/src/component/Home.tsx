import { useState } from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const [gakufu, setGakufu] = useState<string[]>([]);
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
        <button
          type={"button"}
          onClick={() => {
            setGakufu([...gakufu, "ド"]);
          }}
        >
          ド
        </button>
        <button
          type={"button"}
          onClick={() => {
            setGakufu([...gakufu, "レ"]);
          }}
        >
          レ
        </button>
        <button
          type={"button"}
          onClick={() => {
            setGakufu([...gakufu, "ミ"]);
          }}
        >
          ミ
        </button>
        <button
          type={"button"}
          onClick={() => {
            setGakufu([...gakufu, "ファ"]);
          }}
        >
          ファ
        </button>
        <button
          type={"button"}
          onClick={() => {
            setGakufu([...gakufu, "ソ"]);
          }}
        >
          ソ
        </button>
        <button
          type={"button"}
          onClick={() => {
            setGakufu([...gakufu, "ラ"]);
          }}
        >
          ラ
        </button>
        <button
          type={"button"}
          onClick={() => {
            setGakufu([...gakufu, "シ"]);
          }}
        >
          シ
        </button>
      </section>

      <section aria-label={"gakufu-board"}>
        <div>{gakufu}</div>
      </section>
    </div>
  );
};

export default Home;
