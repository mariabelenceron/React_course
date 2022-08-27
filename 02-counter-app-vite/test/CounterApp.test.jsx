import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas al archivo CounterApp', () => {

    const value = 1;

    test('Debe de hacer match con el snapshot', () => {
        const {container} = render(<CounterApp value={value}/>);
        expect(container).toMatchSnapshot();
    });
    
    test('Debe de mostrar el valor inicial de 100', () => {
        render(<CounterApp value={100}/>);
        expect(screen.getByText(100)).toBeTruthy();
        // expect(Number(screen.getByRole("heading", {level:2}).innerHTML)).toBe(value);
    });

    test('debe de incrementar con el boton +1', () => {
        render(<CounterApp value={value}/>);
        fireEvent.click( screen.getByText('+1') )
        expect(screen.getByText('2')).toBeTruthy();
    });
    
    test('debe de decrementar con el boton -1', () => {
        render(<CounterApp value={value}/>);
        fireEvent.click( screen.getByText('-1') )
        expect(screen.getByText('0')).toBeTruthy();
    });
    
    test('debe de funcionar el boton Reset', () => {
        render(<CounterApp value={value}/>);
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('+1') )
        // fireEvent.click( screen.getByText('Reset') )
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}))
        expect(screen.getByText(1)).toBeTruthy();
    });
});