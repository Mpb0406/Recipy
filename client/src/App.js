import { useEffect } from "react";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Alert from "./components/Alert";
import Footer from "./components/Footer";
import CreateRecipe from "./components/CreateRecipe";
import EditRecipe from "./components/EditRecipe";
import setAuthToken from "./utils/setAuthToken";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import MyRecipes from "./Pages/MyRecipes";
import MyProfile from "./Pages/MyProfile";
import DisplayRecipe from "./Pages/DisplayRecipe";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <div className="App">
      <Provider store={store}>
        <GlobalStyle />
        <Router>
          <Nav />

          <Alert />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <PrivateRoute path="/myrecipes" component={MyRecipes} />
            <PrivateRoute path="/myprofile" component={MyProfile} />
            <PrivateRoute path="/create-recipe" component={CreateRecipe} />
            <PrivateRoute path="/recipes/:id" exact component={DisplayRecipe} />
            <PrivateRoute
              path="/recipes/edit-recipe/:id"
              exact
              component={EditRecipe}
            />
          </Switch>
        </Router>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
