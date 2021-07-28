import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/index";
import MainTemplate from "../templates/MainTemplate";
import { routes } from "../routes/index";
import Home from "./Home";
import Contact from "./Contact";
import Category from "./Category";
import Basket from "./Basket";
import Product from "./Product";
import ClientData from "./ClientData";

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.contact} component={Contact} />
          <Route path={routes.basket} component={Basket} />
          <Route path={routes.orderForm} component={ClientData} />
          <Route exact path={routes.category} component={Category} />
          <Route path={routes.product} component={Product} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
