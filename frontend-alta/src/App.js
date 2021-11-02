import { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routesPage from "./Routes";

function App() {
  return (
    <Router>
      <Suspense>
        <Switch>
          {routesPage.map(({ address, component }, key) => (
            <Route key={key} exact path={address} component={component} />
          ))}
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
