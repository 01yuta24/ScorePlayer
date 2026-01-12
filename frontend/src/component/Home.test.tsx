import { render, screen, within } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event/dist/cjs/setup/index.js";
import { MemoryRouter, useLocation } from "react-router";
import Home from "./Home.tsx";

class HomePageObject {
  get homeTitle() {
    return screen.getByText("Home");
  }

  get goMenuButton() {
    return screen.getByRole("button", { name: "Menuに戻る" });
  }

  get keyBoard() {
    return screen.getByLabelText("keyboard");
  }
  get keyC() {
    return within(this.keyBoard).getByRole("button", { name: "ド" });
  }
  get keyD() {
    return within(this.keyBoard).getByRole("button", { name: "レ" });
  }
  get keyE() {
    return within(this.keyBoard).getByRole("button", { name: "ミ" });
  }
  get keyF() {
    return within(this.keyBoard).getByRole("button", { name: "ファ" });
  }
  get keyG() {
    return within(this.keyBoard).getByRole("button", { name: "ソ" });
  }
  get keyA() {
    return within(this.keyBoard).getByRole("button", { name: "ラ" });
  }
  get keyB() {
    return within(this.keyBoard).getByRole("button", { name: "シ" });
  }

  get gakufuBoard() {
    return screen.getByLabelText("gakufu-board");
  }
}

const LocationDisplay = () => {
  const { pathname } = useLocation();
  return <div data-testid="location-display">{pathname}</div>;
};

const view = (path: string) => {
  return (
    <MemoryRouter initialEntries={[path]}>
      <Home />
      <LocationDisplay />
    </MemoryRouter>
  );
};

const home = new HomePageObject();

test("Homeの文字が見える", () => {
  render(view("/home"));
  expect(home.homeTitle).toBeInTheDocument();
});

test("Menuに戻るボタンが見える", () => {
  render(view("/home"));
  expect(home.goMenuButton).toBeInTheDocument();
});

test("Menuに戻るボタンを押した時、/に遷移する", async () => {
  render(view("/home"));
  await userEvent.click(home.goMenuButton);
  expect(screen.getByTestId("location-display").textContent).toBe("/");
});

test("キーボードの枠が見える", () => {
  render(view("/home"));
  expect(home.keyBoard).toBeInTheDocument();
});

test("ドのボタンが見える", () => {
  render(view("/home"));
  expect(home.keyC).toBeInTheDocument();
});

test("レのボタンが見える", () => {
  render(view("/home"));
  expect(home.keyD).toBeInTheDocument();
});
test("ミのボタンが見える", () => {
  render(view("/home"));
  expect(home.keyE).toBeInTheDocument();
});

test("ファのボタンが見える", () => {
  render(view("/home"));
  expect(home.keyF).toBeInTheDocument();
});

test("ソのボタンが見える", () => {
  render(view("/home"));
  expect(home.keyG).toBeInTheDocument();
});

test("ラのボタンが見える", () => {
  render(view("/home"));
  expect(home.keyA).toBeInTheDocument();
});

test("シのボタンが見える", () => {
  render(view("/home"));
  expect(home.keyB).toBeInTheDocument();
});

test("ドのボタンを押すと、楽譜にドが表示される", async () => {
  render(view("/home"));
  await userEvent.click(home.keyC);
  expect(home.gakufuBoard.textContent).toBe("ド");
});

test("レのボタンを押すと、楽譜にレが表示される", async () => {
  render(view("/home"));
  await userEvent.click(home.keyD);
  expect(home.gakufuBoard.textContent).toBe("レ");
});

test("ミのボタンを押すと、楽譜にミが表示される", async () => {
  render(view("/home"));
  await userEvent.click(home.keyE);
  expect(home.gakufuBoard.textContent).toBe("ミ");
});

test("ファのボタンを押すと、楽譜にファが表示される", async () => {
  render(view("/home"));
  await userEvent.click(home.keyF);
  expect(home.gakufuBoard.textContent).toBe("ファ");
});

test("ソのボタンを押すと、楽譜にソが表示される", async () => {
  render(view("/home"));
  await userEvent.click(home.keyG);
  expect(home.gakufuBoard.textContent).toBe("ソ");
});
test("ラのボタンを押すと、楽譜にラが表示される", async () => {
  render(view("/home"));
  await userEvent.click(home.keyA);
  expect(home.gakufuBoard.textContent).toBe("ラ");
});
test("シのボタンを押すと、楽譜にシが表示される", async () => {
  render(view("/home"));
  await userEvent.click(home.keyB);
  expect(home.gakufuBoard.textContent).toBe("シ");
});
