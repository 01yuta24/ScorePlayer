
import { render, screen } from "@testing-library/react";
import Home from "./Home.tsx";
import {MemoryRouter, useLocation} from "react-router";
import {userEvent} from "@testing-library/user-event/dist/cjs/setup/index.js";

class HomePageObject{
    get homeTitle(){
        return screen.getByText("Home");
    }

    get goMenuButton(){
        return screen.getByRole("button", { name: "Menuに戻る" });
    }
}

const LocationDisplay = () => {
    const { pathname } = useLocation();
    return <div data-testid="location-display">{pathname}</div>;
}

const view = (path:string) =>{
    return<MemoryRouter initialEntries={[path]}>
        <Home />
        <LocationDisplay />
    </MemoryRouter>
}

const home = new HomePageObject();

test("Homeの文字が見える", () => {
  render( view("/home") );
  expect(home.homeTitle).toBeInTheDocument();
})

test("Menuに戻るボタンが見える", () => {
    render( view("/home") );
    expect(home.goMenuButton).toBeInTheDocument()
})

test("Menuに戻るボタンを押した時、/に遷移する", async() => {
    render(view("/home"))
    await userEvent.click(home.goMenuButton)
    expect(screen.getByTestId("location-display").textContent).toBe("/");
})