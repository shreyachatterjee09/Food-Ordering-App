import React from "react";
import {fireEvent, render ,screen} from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore" 
import '@testing-library/jest-dom';

import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

it("Should load Header Component with a login button", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
            </Provider>
            </BrowserRouter>
    )

    //const loginButton = screen.getByRole("button");
    const loginButton = screen.getByText("Login")
    expect(loginButton).toBeInTheDocument();
})

it("Should load Header Component with Cart items", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
            </Provider>
            </BrowserRouter>
    )

    //const loginButton = screen.getByRole("button");
    const cartItems = screen.getByText("Cart - (0 items)")
    expect(cartItems).toBeInTheDocument();
})

it("Should change Login Button to Logout on click", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
            </Provider>
            </BrowserRouter>
    )

    
    const loginButton = screen.getByRole("button", { name: "Login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "Logout"});
    expect(logoutButton).toBeInTheDocument();
})