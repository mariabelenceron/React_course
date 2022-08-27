import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {
    // test('debe de hacer match con el snapshot ', () => {
    //     const title = "Hola"
    //     const {container} = render(<FirstApp title={title}/>)

    //     expect(container).toMatchSnapshot();
    // });
    
    test('debe de mostrar el titulo en un h1 ', () => {
        const title = "Hola"
        const {container, getByText, getByTestId} = render(<FirstApp title={title}/>)

        expect(getByText(title)).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title)

        expect(getByTestId('test-title').innerHTML).toBe(title) //Revisa de manera estricta el contenido de dicho elemento
        expect(getByTestId('test-title').innerHTML).toContain(title) //Revisa si existe el contenido de dicho elemento

    });
    
    test('debe de mostrar el subtitulo por props ', () => {
        const title = "Hola"
        const subtitle = 'Soy Belen!'
        const {getAllByText, getByText} = render(
            <FirstApp 
                title={title}
                subtitle={subtitle}
            />
        )

        expect(getAllByText(subtitle).length).toBe(2);
        // expect(getByText(subtitle)).toBeTruthy();


    });
});