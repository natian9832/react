import React from 'react';
import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Films from "../views/Films";
import Cinemas from "../views/Cinemas";
import Center from "../views/Center";
import NotFound from "../views/NotFound";
import Detail from "../views/Detail";
import Login from "../views/Login";
import City from "../views/City";
import Search from "../views/Search";

export default function IndexRouter(props) {
    return (
        <div>
            {/*<BrowserRouter>*/}
            <Router>
                {props.children}
                <Switch>
                    <Route path={"/films"} component={Films}/>
                    <Route path={"/cinemas"} component={Cinemas} exact/>
                    <Route path={"/cinemas/search"} component={Search}/>
                    {/*<Route path={"/center"} component={Center}/>*/}
                    <Route path={"/center"} render={(props) =>
                        localStorage.getItem("token") ? <Center {...props}/> : <Redirect to={"/login"}/>}/>
                    <Route path={"/login"} component={Login}/>
                    <Route path={"/city"} component={City}/>


                    <Route path={"/detail/:filmId"} component={Detail}/>
                    {/*<Route path={"/detail"} component={Detail}/>*/}

                    {/*重定向*/}
                    <Redirect from={"/"} to={"films"} exact/>

                    <Route component={NotFound}/>
                </Switch>
            </Router>
            {/*</BrowserRouter>*/}
        </div>
    );
}

