import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'; 
import App from "../App";
import { MemoryRouter } from "react-router-dom";

describe('Links from header-buttons check', () => {
    test('Links to basket-page test', () => {
        render(
            <MemoryRouter>
              <App />  
            </MemoryRouter>
        );
        const basketLink = screen.getByTestId('basket-link');
        fireEvent.click(basketLink);
        expect(screen.getByTestId('basket-page')).toBeInTheDocument();
    });
    test('Links to catalog-page test', () => {
        render(
            <MemoryRouter>
              <App />  
            </MemoryRouter>
        );
        const catalogLink = screen.getByTestId('catalog-link');
        fireEvent.click(catalogLink);
        expect(screen.getByTestId('catalog-page')).toBeInTheDocument();
    })
})