import App from "./App.tsx";
import { render, screen } from "@testing-library/react";
import {MemoryRouter, useLocation} from "react-router";
import {userEvent} from "@testing-library/user-event/dist/cjs/setup/index.js";

const LocationDisplay = () => {
    const { pathname } = useLocation();
    return <div data-testid="location-display">{pathname}</div>;
}

const view = (path:string) =>{
    return<MemoryRouter initialEntries={[path]}>
        <App />
        <LocationDisplay />
    </MemoryRouter>
}


test("ボタンが見える", () => {
    render(view("/"));
    const button =screen.getByRole("button", {name: "ボタン"});
    expect(button).toBeInTheDocument()
})

test("ボタンをクリックすると /home に遷移する",async()=>{
    render(view("/"));
    const button =screen.getByRole("button", {name: "ボタン"});
    await userEvent.click(button);
    expect(screen.getByTestId("location-display")).toHaveTextContent("/home");
})