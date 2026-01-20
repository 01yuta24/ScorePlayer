import { useState } from "react";
import { useNavigate } from "react-router";

// import * as Tone from "tone";

const Home = () => {
  const [gakufu, setGakufu] = useState<string[]>([]);
  const navigate = useNavigate();
  // const newSynth = new Tone.Synth().toDestination();
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
            // Tone.start();
            // newSynth.triggerAttackRelease("C4", "8n");
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
      <button type={"button"} onClick={() => {}}>
        保存する
      </button>
      <button
        type={"button"}
        onClick={() => {
          setGakufu([""]);
        }}
      >
        リセット
      </button>
      <section aria-label={"gakufu-board"}>
        <div>{gakufu}</div>
      </section>
    </div>
  );
};

export default Home;
