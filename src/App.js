import "./App.css";
import LoginPage from "./Pages/Login";
import { Route, Switch } from "react-router-dom";
import Header from "./Components/Header";

function App() {
	return (
		<div className="App">
            <Header/>
            <Switch>
                <Route path="/login">
                    <LoginPage/>
                </Route>
            </Switch>
		</div>
	);
}

export default App;
