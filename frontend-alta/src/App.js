import { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./component/Sidebar";
import routesPage from "./Routes";
import "./App.css";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
