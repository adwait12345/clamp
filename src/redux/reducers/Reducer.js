import { ActionTypes } from "../Action-Types/action-type";



const initialState = {
    platforms: ["Select"],
    type:[  ]

    ,
    down:false,

};

export const PlatformReducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case ActionTypes.SET_PLATFORM:
            return { ...state, platforms: action.payload };

        default:
            return state;
    }

};

export const selectedPlatformReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.SELECTED_PLATFORM:
            return { ...state, ...action.payload };

        default:
            return state;
    }
};

export const TypeReducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case ActionTypes.SET_TYPE:
            return { ...state, type: action.payload };

        default:
            return state;
    }

};

export const selectedTypeReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.SELECTED_TYPE:
            return { ...state, ...action.payload };

        default:
            return state;
    }
};

export const DownReducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case ActionTypes.SET_DOWN:
            return { ...state, down: action.payload };

        default:
            return state;
    }

};

export const selectedDownReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.SELECTED_DOWN:
            return { ...state, ...action.payload };

        default:
            return state;
    }
};