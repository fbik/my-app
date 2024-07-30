import getFilm from "@/app/actions/getFilms";
export default async function Film({params: {filmId}}) {
    const film = await getFilm(filmId);

        return (
            <div>
                <h1>{film.result.properties.title}</h1>
            </div>
        )

}
