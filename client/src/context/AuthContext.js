import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

/* const INITIAL_STATE = {
    user: {
        _id: "61691da49937de99487e4897",
        username: "friday",
        email: "friday@abv.bg",
        password: "$2a$10$ksJkHR3CIK9mBguIM0yiWOyDFchqKTD6Jh4W1NwcQFnzVDnUGRTk6",
        profilePicture: "person/2.jpeg",
        coverPicture: "",
        followers: [
            "61691e1e9937de99487e489d"
        ],
        followings: [
            "61691e1e9937de99487e489d"
        ],
        isAdmin: false
    },
    isFetching: false,
    error: false,
}; */

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user])

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error, dispatch
            }}>
            {children}
        </AuthContext.Provider>
    )
}