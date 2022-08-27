import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe retornar un heroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(id);
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    })
    
    test('getHeroeById debe retornar undefined si no existe', () => {
        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();
    })
    
    test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const heroOwner = getHeroesByOwner(owner);

        expect(heroOwner.length).toBe(3)

        expect(heroOwner).toEqual(heroes.filter(hero => hero.owner === owner))

    })
    
    test('getHeroesByOwner debe retornar un arreglo con los heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroOwner = getHeroesByOwner(owner);
        
        expect(heroOwner.length).toBe(2)

        expect(heroOwner).toEqual(heroes.filter(hero => hero.owner === owner))
    })
});