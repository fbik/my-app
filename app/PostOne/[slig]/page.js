
export async function generateStaticParams() {
    const films = await fetch('https://swapi.dev/api/films').then((res) => res.json());
    console.log(films);

    return films.results.map((film) => ( {
        slig: film.title.replace(/\s+/g, '-'),
    }));
}
export default function PostOne({params}) {
    console.log(params);
    return (
        <h1>PostOne with id {JSON.stringify(params)}</h1>
    )
}