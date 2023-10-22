import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import authReducer from "./authReducers";
import exampleReducer from "./exampleReducer";

export const rootReducer = combineReducers({
  example: exampleReducer,
  auth: persistReducer(
    {
      key: "auth",
      storage,
      blacklist: ["error"],
      whitelist: ["userData"],
    },
    authReducer
  ),
});
