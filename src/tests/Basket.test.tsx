import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import '@testing-library/jest-dom/extend-expect'; 
import { MemoryRouter } from "react-router-dom";

describe('Basket actions check', () => { 
    test('Action: remove product', () => {
        render(
            <MemoryRouter initialEntries={['/catalog']}>
              <App />  
            </MemoryRouter>
        );
        expect(screen.getByTestId('catalog-page')).toBeInTheDocument();
        const btns = screen.getAllByTestId('catalog-element-btn');
        fireEvent.click(btns[0]);
        const basketLogo = screen.getByTestId('basket-logo');
        expect(basketLogo).toContainHTML('1');
        fireEvent.click(basketLogo);
        expect(screen.getByTestId('basket-page')).toBeInTheDocument();
        let priceElement = screen.getByTestId('price-element');
        expect(priceElement).toContainHTML('448 ₸');
        const deleteBtn = screen.getByTestId('delete-element');
        fireEvent.click(deleteBtn);
        expect(priceElement).toContainHTML('0 ₸');
    });
    test('Action: complete order', () => {
        render(
            <MemoryRouter initialEntries={['/catalog']}>
              <App />  
            </MemoryRouter>
        );
        expect(screen.getByTestId('catalog-page')).toBeInTheDocument();
        const btns = screen.getAllByTestId('catalog-element-btn');
        fireEvent.click(btns[0]);
        const basketLogo = screen.getByTestId('basket-logo');
        expect(basketLogo).toContainHTML('1');
        fireEvent.click(basketLogo);
        expect(screen.getByTestId('basket-page')).toBeInTheDocument();
        let priceElement = screen.getByTestId('price-element');
        expect(priceElement).toContainHTML('448 ₸');
        const orderBtn = screen.getByTestId('order-element');
        fireEvent.click(orderBtn);
        const closeBtn = screen.getByTestId('close-element');
        fireEvent.click(closeBtn);
        priceElement = screen.getByTestId('price-element');
        expect(priceElement).toContainHTML('0 ₸');
    });
})