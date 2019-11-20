export interface MovieModel {
    id: string;
    title: string;
    overview: string;
    release_date: string;
    poster_path: string;
    backdrop_path?: string;
    adult: boolean;
    vote_average: number;
    popularity: number;
    vote_count: number;

}
