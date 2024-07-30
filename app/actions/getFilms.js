
export default function getFilm(id) {
    return fetch('https://www.swapi.tech/api/films/${id}').then(res => res.json());
}