import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import '@testing-library/jest-dom/extend-expect'; 
import { MemoryRouter } from "react-router-dom";

describe('Catalog-elements check', () => { 
    test('Open product-card check', () => {
        render(
            <MemoryRouter initialEntries={['/catalog']}>
              <App />  
            </MemoryRouter>
        );
        expect(screen.getByTestId('catalog-page')).toBeInTheDocument();
        const products = screen.getAllByTestId('catalog-element');
        fireEvent.click(products[0]);
        expect(screen.getByTestId('productCard-page')).toBeInTheDocument();
    });
    test('Filter: producer-input event', () => {
        render(
            <MemoryRouter initialEntries={['/catalog']}>
              <App />  
            </MemoryRouter>
        );
        expect(screen.getByTestId('catalog-page')).toBeInTheDocument();
        const input = screen.getByPlaceholderText('Поиск');
        fireEvent.input(input, {
            target: {value: 'Sodium'}
        });
        const products = screen.getAllByTestId('catalog-element');
        expect(products[0]).toContainHTML(`<span class="goods-list__field-value">Sodium</span>`)

    });
    test('Filter: checkbox event', () => {
        render(
            <MemoryRouter initialEntries={['/catalog']}>
              <App />  
            </MemoryRouter>
        );
        expect(screen.getByTestId('catalog-page')).toBeInTheDocument();
        const checkbox = screen.getByTitle('Нэфис')
        fireEvent.click(checkbox)
        const products = screen.getAllByTestId('catalog-element');
        expect(products[0]).toContainHTML(`<span class="goods-list__field-value">Нэфис</span>`)

    });
    test('Action: add to basket', () => {
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
        fireEvent.click(btns[1]);
        const basketLogoRetry = screen.getByTestId('basket-logo');
        expect(basketLogoRetry).toContainHTML('2');
    });
    test('Action: pagination - change page', () => {
        render(
            <MemoryRouter initialEntries={['/catalog']}>
              <App />  
            </MemoryRouter>
        );
        expect(screen.getByTestId('catalog-page')).toBeInTheDocument();
        const productsOld = screen.getAllByTestId('catalog-element');
        const pages = screen.getAllByTestId('pagination-elem');
        fireEvent.click(pages[1]);
        const productsNew = screen.getAllByTestId('catalog-element');
        expect(productsNew).not.toEqual(productsOld);
    });
})