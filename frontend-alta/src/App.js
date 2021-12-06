import { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./component/Sidebar";
import routesPage from "./Routes";
import "./App.css";
import NotFound from "./pages/NotFound";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Sidebar />
            <Suspense>
              <Switch>
                {routesPage.map(({ address, component }, key) => (
                  <Route key={key} exact path={address} component={component} />
                ))}
                <Route component={NotFound} />
              </Switch>
            </Suspense>
          </Router>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
