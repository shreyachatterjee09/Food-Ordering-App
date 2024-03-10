import React from "react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA from "../../mocks/mockResMenu.json";
import { render,screen, fireEvent } from "@testing-library/react"
import appStore from "../../utils/appStore";
import '@testing-library/jest-dom';
import Header from "../Header";
import { BrowserRouter}from "react-router-dom";


global.fetch = jest.fn(()=>
Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
})
)

it("should load restaurant menu component", async() => {
    await act(async () => 
    render(
        <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
        <RestaurantMenu />
        </Provider>
        </BrowserRouter>));

        const accordianHeader = screen.getByText("Personal Slice Veg Pizza. (19)");
        fireEvent.click(accordianHeader);

        expect(screen.getAllByTestId("foodItems").length).toBe(19);

        const addBtns = screen.getAllByRole("button", { name: "Add +" });

        fireEvent.click(addBtns[0]);

        expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();


})