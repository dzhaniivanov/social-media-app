import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/profile/:username">
                    <Profile />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
