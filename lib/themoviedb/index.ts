import axios from "axios";
import type {
	GenresMovieList,
	MovieDetails,
	MoviesDiscover,
	SearchMovies,
	SimilarMovies,
	TrendingMovies,
} from "./types";

const API_URL = "https://api.themoviedb.org/3";

const instance = axios.create({
	baseURL: API_URL,
	headers: {
		Authorization: `Bearer ${process.env.CINEX_APP}`,
	},
});

export const fetchTrendingMovies = async (): Promise<TrendingMovies> => {
	try {
		const { data } = await instance.get<TrendingMovies>("/trending/movie/day");
		return data;
	} catch (error) {
		let message: string | undefined;
		if (error instanceof TypeError) message = error.message;
		throw new Error(message);
	}
};

export const fetchGenreMovieList = async (): Promise<GenresMovieList> => {
	try {
		const { data } = await instance.get<GenresMovieList>("/genre/movie/list");
		return data;
	} catch (error) {
		let message: string | undefined;
		if (error instanceof TypeError) message = error.message;
		throw new Error(message);
	}
};

export const fetchSearchMovies = async (
	query: string,
): Promise<SearchMovies> => {
	try {
		const { data } = await instance.get<SearchMovies>(
			`/search/movie?query=${query}`,
		);
		return data;
	} catch (error) {
		let message: string | undefined;
		if (error instanceof TypeError) message = error.message;
		throw new Error(message);
	}
};

export const fetchMovieDetails = async (
	movieId: number,
): Promise<MovieDetails> => {
	try {
		const { data } = await instance.get<MovieDetails>(`/movie/${movieId}`);
		return data;
	} catch (error) {
		let message: string | undefined;
		if (error instanceof TypeError) message = error.message;
		throw new Error(message);
	}
};

export const fetchMovieDiscover = async (
	genreId: string,
): Promise<MoviesDiscover> => {
	try {
		const { data } = await instance.get<MoviesDiscover>(
			`/discover/movie?with_genres=${genreId}`,
		);
		return data;
	} catch (error) {
		let message: string | undefined;
		if (error instanceof TypeError) message = error.message;
		throw new Error(message);
	}
};

export const fetchSimilarMovies = async (
	movieId: number,
): Promise<SimilarMovies> => {
	try {
		const { data } = await instance.get<SimilarMovies>(
			`/movie/${movieId}/similar`,
		);
		return data;
	} catch (error) {
		let message: string | undefined;
		if (error instanceof TypeError) message = error.message;
		throw new Error(message);
	}
};
