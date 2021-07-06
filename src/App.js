import "./App.css";
import LoginPage from "./Pages/Login";
import { Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import AccountPage from "./Pages/AccountPage";

function App() {
	return (
		<div className="App">
            <Header/>
            <Switch>
                <Route path="/login">
                    <LoginPage/>
                </Route>
                <Route path="/home">
                    <HomePage/>
                </Route>
                <Route path="/account">
                    <AccountPage/>
                </Route>
            </Switch>
		</div>
	);
}

export default App;
