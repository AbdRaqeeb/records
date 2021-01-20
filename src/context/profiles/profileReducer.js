import {
    GET_PROFILES,
    PROFILE_ERROR,
    CLEAR_FILTER,
    CLEAR_ERRORS,
    FILTER_CARD,
    FILTER_GENDER,
    FILTER_NAME
} from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case GET_PROFILES:
            return {
                ...state,
                profiles: action.payload.records.profiles,
                size: action.payload.size,
                loading: false
            };

        case FILTER_NAME:
        case FILTER_CARD:
            return {
                ...state,
                filtered: state.profiles.filter((profile) => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return profile.PaymentMethod.match(regex)
                        || profile.FirstName.match(regex)
                        || profile.LastName.match(regex)
                        || profile.UserName.match(regex);
                })
            };

        case FILTER_GENDER:
            return {
                ...state,
                filtered: state.profiles.filter((profile) => {
                    const regex = (action.payload === 'Male') ? new RegExp(/^male$/, 'gi') : new RegExp(`${action.payload}`, 'gi');

                    return profile.Gender.match(regex);
                })
            };

        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null,
            };

        case PROFILE_ERROR:
            return {
                ...state,
                error: 'Error while loading page. Please refresh page'
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            };

        default:
            return state;
    }
};