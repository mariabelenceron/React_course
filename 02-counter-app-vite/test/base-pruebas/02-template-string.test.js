import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Realizando pruebas en 02-template-string', () => {
    test('getSaludo debe retornar "Hola Belen"', () => {
        const name = "Belen";
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`)
    });
});