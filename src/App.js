import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./hoc/Layout";
import SubjectsDetails from "./pages/SubjectsDetails";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const page404 = () => {
    return (
      <div
        style={{
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <h1 style={{ color: "#414141" }}>Essa página nao existe :(</h1>
      </div>
    );
  };

 
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/home" component={Layout} />
          <Route path="/profile" component={Layout} />
          <Route path="/subjects" component={Layout} />
          <Route path="/details" component={SubjectsDetails} />
          <Route path="*" component={page404} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
