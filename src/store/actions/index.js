import { APP, CHARACTERS, COMICS } from "./types";

// Utils
import { getCharacters, getCharacter } from "../../utils/api";
import { getComics, getComic } from "../../utils/api";

// Actions
export const loadingAction = state => dispatch => {
    try {
        dispatch({
            type: APP.TOGGLE_LOADING,
            payload: state
        });
    } catch (error) {
        console.error(error);
    }
};

// fetch characters
export const fetchCharactersAction = () => async(dispatch, getState) => {
    dispatch({
        type: APP.TOGGLE_LOADING,
        payload: true
    });

    try {
        const params = {
            limit: 96
        };
        const response = await getCharacters(params);
        const characters = response.data.data.results;

        dispatch({
            type: CHARACTERS.FETCH_CHARACTERS,
            payload: characters
        });

        dispatch({
            type: APP.TOGGLE_LOADING,
            payload: false
        });
    } catch (err) {
        console.error(err);
        dispatch({
            type: APP.TOGGLE_LOADING,
            payload: false
        });
    }
};

export const fetchCharacterByIdAction = (characterId) => async(dispatch, getState) => {
    dispatch({
        type: APP.TOGGLE_LOADING,
        payload: true
    });

    try {
        const response = await getCharacter(characterId);
        const character = response.data.data.results;
        console.log(character);

        dispatch({
            type: CHARACTERS.FETCH_SINGLE_CHARACTER,
            payload: character
        });

        dispatch({
            type: APP.TOGGLE_LOADING,
            payload: false
        });
    } catch (err) {
        console.error(err);
        dispatch({
            type: APP.TOGGLE_LOADING,
            payload: false
        });
    }
};


// fetch comics
export const fetchComicsAction = () => async(dispatch, getState) => {
    dispatch({
        type: APP.TOGGLE_LOADING,
        payload: true
    });

    try {
        const params = {
            limit: 96
        };

        const response = await getComics(params);
        const comics = response.data.data.results;


        dispatch({
            type: COMICS.FETCH_COMICS,
            payload: comics
        });

        dispatch({
            type: APP.TOGGLE_LOADING,
            payload: false
        });
    } catch (err) {
        console.error(err);
        dispatch({
            type: APP.TOGGLE_LOADING,
            payload: false
        });
    }
};

export const fetchComicByIdAction = (comicId) => async(dispatch, getState) => {
    dispatch({
        type: APP.TOGGLE_LOADING,
        payload: true
    });

    try {
        const response = await getComic(comicId);
        const comic = response.data.data.results;
        console.log(comic);

        dispatch({
            type: COMICS.FETCH_COMICS,
            payload: comic
        });

        dispatch({
            type: APP.TOGGLE_LOADING,
            payload: false
        });
    } catch (err) {
        console.error(err);
        dispatch({
            type: APP.TOGGLE_LOADING,
            payload: false
        });
    }
};