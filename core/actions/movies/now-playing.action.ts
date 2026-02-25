import { MovieDBMoviesResponse } from '@/infrastructure/interfaces/moviedb-responste';
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper';
import { movieApi } from '../../../.history/core/api/movie-api_20260225160209';
export const nowPlayingAction = async () => {

    try {

        const { data } = await movieApi.get<MovieDBMoviesResponse>('/now_playing');

        // console.log(JSON.stringify(data, null, 2));

        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

        console.log(movies);

        return movies;

    } catch (error) {
        console.log(error);
        throw 'Can not load now playing movies';
    }

}