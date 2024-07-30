export function getAllFilms() {
    return fetch('https://www.swapi.tech/api/films').then((res) => res.json());
}