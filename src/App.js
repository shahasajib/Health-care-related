import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Service from './Component/Service/Service';
import Service2 from './Component/Service/Service2';
import Login from './Component/Login/Login';
import About from './Component/About/About';
import Footer from './Component/Footer/Footer';
import Error from './Component/NotFound/Error';
import Register from './Component/Register/Register';
import PrivateRoute from './Private/PrivateRoute';


function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute exact path="/service">
            <Service></Service>
          </PrivateRoute>
          <PrivateRoute exact path="/service2">
            <Service2></Service2>
          </PrivateRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route exact path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
