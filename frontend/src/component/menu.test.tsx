import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event/dist/cjs/setup/index.js";
import { MemoryRouter, useLocation } from "react-router";
import Menu from "./menu.tsx";

const LocationDisplay = () => {
  const { pathname } = useLocation();
  return <div data-testid="location-display">{pathname}</div>;
};

const view = (path: string) => {
  return (
    <MemoryRouter initialEntries={[path]}>
      <Menu />
      <LocationDisplay />
    </MemoryRouter>
  );
};

class MenuPageObject {
  get title() {
    return screen.getByText("メニュー画面");
  }

  get startButton() {
    return screen.getByRole("button", { name: "スタート" });
  }
}

const menu = new MenuPageObject();

test("タイトル「メニュー画面」が見える", () => {
  render(view("/"));
  expect(menu.title).toBeInTheDocument();
});

test("スタートボタンが見える", () => {
  render(view("/"));
  expect(menu.startButton).toBeInTheDocument();
});

test("スタートボタンを押した時、/homeに遷移する", async () => {
  render(view("/"));
  await userEvent.click(menu.startButton);
  expect(screen.getByTestId("location-display").textContent).toBe("/home");
});
