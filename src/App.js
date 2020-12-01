import React, { Component } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
//import { Switch, Route, Link } from "react-router-dom";
//import AddUser from './components/AddUser'
//import AuthorComponent from "./components/AuthorComponent";
//import logo from './logo.svg';
//import './App.css';
import ListBookOrderComponent from "./components/ListBookOrderComponent";
import CreateBookOrderComponent from "./components/CreateBookOrderComponent";
import ViewBookOrderComponent from "./components/ViewBookOrderComponent";
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
 //import CreateAuthorComponent from './components/CreateAuthorComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import ListAuthorComponent from './components/ListAuthorComponent';
// import HeaderComponent from './components/HeaderComponent';
// import FooterComponent from './components/FooterComponent';
// import CreateAuthorComponent from './components/CreateAuthorComponent';
// import ViewAuthorComponent from './components/ViewAuthorComponent';


class App extends Component {
  render() {
    return (
      <div>
    <Router>
      <HeaderComponent />
              <div className="container">
                  <Switch> 
                        <Route path = "/" exact component = {ListBookOrderComponent}></Route>
                        <Route path = "/booksorder" component = {ListBookOrderComponent}></Route>
                       <Route path = "/add-booksorder/:orderid" component = {CreateBookOrderComponent}></Route>
                        <Route path = "/view-booksorder/:orderid" component = {ViewBookOrderComponent}></Route>
                       {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                 </Switch>
             </div>
         <FooterComponent/>
     </Router>
</div>


);
}
}
export default App;
    //   <div>
    //     <Router>
    //           <HeaderComponent />
    //             <div className="container">
    //                 <Switch> 
    //                       <Route path = "/" exact component = {ListAuthorComponent}></Route>
    //                       <Route path = "/authors" component = {ListAuthorComponent}></Route>
    //                       <Route path = "/add-author/:id" component = {CreateAuthorComponent}></Route>
    //                       <Route path = "/view-author/:id" component = {ViewAuthorComponent}></Route>
    //                       {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
    //                 </Switch>
    //             </div>
    //           <FooterComponent />
    //     </Router>
    // </div>
    //     );
    //   }
    // }
   
    
      {/* <div className="container">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/user" className="navbar-brand">
          Home
          </a>
          <div className="navbar-nav mr-auto">
          
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Register
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path="/add" component={AddUser} />

          </Switch>
    </div>
      </div>*/}