import * as Sentry from "@sentry/react";
import thunk from "redux-thunk";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./reducers";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import { IAuthState } from "./types/authTypes";
import { IExampleState } from "./types/exampleType";

let middleware: any[] = [thunk];
if (process.env.NODE_ENV === "development") {
  middleware = [...middleware, logger];
}

const persistConfig = {
  key: "root",
  storage,
  whitelist: [""], // only navigation will be persisted
};

const sentryReduxEnhancer = Sentry.createReduxEnhancer({
  // Optionally pass options listed below
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware), sentryReduxEnhancer)
);
const persistor = persistStore(store);

export interface RootState {
  example: IExampleState;
  auth: IAuthState;
}

export { store, persistor };
