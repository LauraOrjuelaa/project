import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/newUser/newUser.jsx";

export default configureStore({
    reducer: {
        users: userReducer
    }
});
