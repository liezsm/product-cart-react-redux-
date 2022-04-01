import { createStore } from "redux";

import reducers from "./reducers/index";

// exp the store takes params ( reducers, middleware, state)
// exp for now we wont use middleware
const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
