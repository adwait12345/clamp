import { combineReducers } from "redux";
import {
    PlatformReducer,
    selectedPlatformReducer,
    selectedTypeReducer,
    TypeReducer,
    DownReducer,
    selectedDownReducer
 
} from "./Reducer";

const reducer = combineReducers({
    allPlatforms: PlatformReducer,
    platform: selectedPlatformReducer,
    allTypes:TypeReducer,
    types:selectedTypeReducer,
    allDown:DownReducer,
    down:selectedDownReducer,

});
export default reducer;
