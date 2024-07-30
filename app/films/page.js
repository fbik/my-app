import {getAllFilms} from "@/app/actions/getAllFilms";
import Link from "next/link";

export default async function FilmsPage() {

    const  allFilms = await getAllFilms();

    return (
        <div className="container mx-auto mt-4">
            <h2 className="mb-2 text-lg font-semibold text-grey-900 dark:text-white">Films List!</h2>
            <ul className="max-w-md space-u-1 text-grey-500 list-disc list-inside dark:text-gray-400">
            {allFilms.result.map(film => (
                <li key={film.uid}>
                    <Link href={'/films/${film.uid}'}>{film.properties.title}</Link>
                </li>
            ))}
            </ul>
        </div>
    )
}