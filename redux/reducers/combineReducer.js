import {combineReducers} from "redux"
import { changeSignIn } from "./SignInReducer"

const rootReducer=combineReducers({
    changeSignIn
})

export default rootReducer;