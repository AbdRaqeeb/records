import React, {useReducer} from 'react';
import axios from 'axios';
import ProfileContext from './profileContext';
import profileReducer from './profileReducer';
import {
    GET_PROFILES,
    PROFILE_ERROR,
    FILTER_CARD,
    FILTER_GENDER,
    FILTER_NAME,
    CLEAR_ERRORS,
    CLEAR_FILTER
} from "../types";

const ProfileState = (props) => {
    const initialState = {
        profiles: [],
        filtered: null,
        error: null,
        loading: true,
        size: null
    };
    const [state, dispatch] = useReducer(profileReducer, initialState);

    //Get profiles
    const getProfiles = async () => {
        try {
            const res = await axios.get('https://api.enye.tech/v1/challenge/records');

            dispatch({type: GET_PROFILES, payload: res.data});
        } catch (e) {
            dispatch({type: PROFILE_ERROR, payload: e});
        }
    };

    // Filter gender
    const filterGender = (text) => {
        dispatch({ type: FILTER_GENDER, payload: text });
    };

    // Filter card
    const filterCard = (text) => {
        dispatch({ type: FILTER_CARD, payload: text });
    };

    // Filter name
    const filterName = (text) => {
        dispatch({ type: FILTER_NAME, payload: text });
    };

    // Clear Filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER });
    };

    // Clear errors
    const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

    return (
        <ProfileContext.Provider
            value={{
                profiles: state.profiles,
                filtered: state.filtered,
                error: state.error,
                loading: state.loading,
                size: state.size,
                getProfiles,
                filterCard,
                filterGender,
                filterName,
                clearErrors,
                clearFilter
            }}
        >
            {props.children}
        </ProfileContext.Provider>
    );
};

export default ProfileState;