
import { ajax } from 'rxjs/ajax';
import { switchMap, map } from 'rxjs/operators';
import { zip, of } from 'rxjs';

export interface SWCharacter {
    name:       string;
    height:     string;
    mass:       string;
    hair_color: string;
    skin_color: string;
    eye_color:  string;
    birth_year: string;
    gender:     string;
    homeworld:  string;
    films:      string[];
    species:    string[];
    vehicles:   any[];
    starships:  any[];
    created:    Date;
    edited:     Date;
    url:        string;
}

export interface SWSpecies {
    name:             string;
    classification:   string;
    designation:      string;
    average_height:   string;
    skin_colors:      string;
    hair_colors:      string;
    eye_colors:       string;
    average_lifespan: string;
    homeworld:        null;
    language:         string;
    people:           string[];
    films:            string[];
    created:          Date;
    edited:           Date;
    url:              string;
}

/**
 * Ejercicio: 
 *  Realizar 2 peticiones HTTP (ajax) una después de otra.
 *  
 *  La primera debe de obtener el personaje de Star Wars:
 *   Luke Skywalker, llamando el endpoint:   /people/2/
 * 
 *  La segunda petición, debe de ser utilizando el objeto
 *  de la petición anterior, y tomar la especie (species),
 *  que es un arreglo de URLs (array), dentro de ese arreglo, 
 *  tomar la primera posición y realizar la llamada a ese URL,
 *  el cual debería de traer información sobre su especie (Human)
 */

// Respuesta esperada:
// Información sobre los humanos en el universo de Star Wars
// Ejemplo de la data esperada
/*
 { name: "Human", classification: "mammal", designation: "sentient", average_height: "180", skin_colors: "caucasian, black, asian, hispanic", …}
*/

// Respuesta esperada con Mayor dificultad
// Retornar el siguiente objeto con la información de ambas peticiones
// Recordando que se disparan una después de la otra, 
// con el URL que viene dentro del arreglo de 'species'

// Tip: investigar sobre la función zip: 
//      Que permite combinar observables en un arreglo de valores
// https://rxjs-dev.firebaseapp.com/api/index/function/zip

// Ejemplo de la data esperada:
/*
    especie: {name: "Human", classification: "mammal", designation: "sentient", average_height: "180", skin_colors: "caucasian, black, asian, hispanic", …}
    personaje: {name: "Luke Skywalker", height: "172", mass: "77", hair_color: "blond", skin_color: "fair", …}
*/


(() =>{

    // No tocar ========================================================
    const SW_API = 'https://swapi.dev/api';                     
    const getRequest = ( url: string ) => ajax.getJSON<any>(url);
    // ==================================================================

    // Realizar el llamado al URL para obtener a Luke Skywalker
    getRequest(SW_API + '/people/1/').pipe(
        // Realizar los operadores respectivos aquí
        map<SWCharacter, string>( ({species}) => species[0] || 'https://swapi.dev/api/species/1/'),
        switchMap(url => getRequest(url))
    // NO TOCAR el subscribe ni modificarlo ==
    ).subscribe( console.log );           // ==
    // =======================================

    const character$ = getRequest(SW_API + '/people/1/');

    const specie$ = getRequest(SW_API + '/people/1/').pipe(
        // Realizar los operadores respectivos aquí
        map<SWCharacter, string>( ({species}) => species[0] || 'https://swapi.dev/api/species/1/'),
        switchMap(url => ajax.getJSON(url))
    );   

    zip(character$, specie$).pipe(
        map(([especie, personaje]) => ({ especie, personaje }))
      )
      .subscribe(x => console.log(x));
    


    // Ejercicio 2 Profe version
    getRequest(SW_API + '/people/2/').pipe(
        // Realizar los operadores respectivos aquí
        switchMap(resp => zip(of(resp), getRequest(resp.species[0]))), 
        map(([especie, personaje]) => ({ especie, personaje }))
    // NO TOCAR el subscribe ni modificarlo ==
    ).subscribe( console.log );           // ==
    // =======================================

})();

		
