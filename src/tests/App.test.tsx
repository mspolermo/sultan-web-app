import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import '@testing-library/jest-dom/extend-expect'; 
import { MemoryRouter } from "react-router-dom";


describe('App-components check', () => {
    test('Header check', () => {
        render(
            <MemoryRouter>
              <App />  
            </MemoryRouter>
        );
        const header = screen.getByTestId('header-elem');
        expect(header).toBeInTheDocument();
    });
    test('Breadcrumbs check', () => {
        render(
            <MemoryRouter>
              <App />  
            </MemoryRouter>
        );
        const breadcrumbs = screen.getByTestId('breadcrumbs-elem');
        expect(breadcrumbs).toBeInTheDocument();
    });
    test('Footer check', () => {
        render(
            <MemoryRouter>
              <App />  
            </MemoryRouter>
        );
        const footer = screen.getByTestId('footer-elem');
        expect(footer).toBeInTheDocument();
    });

});

describe('Routes check', () => { 
    test('Route to catalog-page test', () => {
        render(
            <MemoryRouter initialEntries={['/catalog']}>
              <App />  
            </MemoryRouter>
        );
        expect(screen.getByTestId('catalog-page')).toBeInTheDocument()
    });
    test('Route to basket-page test', () => {
        render(
            <MemoryRouter initialEntries={['/basket']}>
              <App />  
            </MemoryRouter>
        );
        expect(screen.getByTestId('basket-page')).toBeInTheDocument()
    });
    test('Route to admin-page test', () => {
        render(
            <MemoryRouter initialEntries={['/admin']}>
              <App />  
            </MemoryRouter>
        );
        expect(screen.getByTestId('admin-page')).toBeInTheDocument()
    });
    test('Route to not-exists-page test', () => {
        render(
            <MemoryRouter initialEntries={['/asdasd']}>
                <App />
            </MemoryRouter>
        );
        expect(screen.getByTestId('catalog-page')).toBeInTheDocument()
    });
})