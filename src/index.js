import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import {store} from './app/store'
import { fetchUsers } from "./features/users/usersSlice";

store.dispatch(fetchUsers());

const root = createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App tab="home" />
    </Provider>
);