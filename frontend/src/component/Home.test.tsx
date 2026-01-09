
import {render, screen, within} from "@testing-library/react";
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

    get keyBoard(){
        return screen.getByRole("generic",{name:"keyboard"})
    }
    get keyC(){
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

describe("キーボードテスト",()=>{
    test("キーボードの枠が見える",()=>{
        render(view("/home"))
        expect(home.keyBoard).toBeInTheDocument()
    })

    test("ドのボタンが見える",()=>{
        render(view("/home"))
        expect(home.keyC).toBeInTheDocument()
    })

    test("レのボタンが見える",()=>{
        render(view("/home"))
        expect(home.keyD).toBeInTheDocument()
    })

    test("ミのボタンが見える",()=>{
        render(view("/home"))
        expect(home.keyE).toBeInTheDocument()
    })

    test("ファのボタンが見える",()=>{
        render(view("/home"))
        expect(home.keyF).toBeInTheDocument()
    })

    test("ソのボタンが見える",()=>{
        render(view("/home"))
        expect(home.keyG).toBeInTheDocument()
    })

    test("ラのボタンが見える",()=>{
        render(view("/home"))
        expect(home.keyA).toBeInTheDocument()
    })

    test("シのボタンが見える",()=>{
        render(view("/home"))
        expect(home.keyB).toBeInTheDocument()
    })

})
