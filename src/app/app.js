import React from "react";
import { products } from "/src/mock";
import ProductPage from "/src/product-page/product-page";
import Catalog from "/src/catalog/catalog";
import Layout from "/src/layout/layout";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Layout>
            <Catalog products={products} />
          </Layout>
        </Route>
        <Route
          path="/product/:code"
          exact
          render={(props) => {
            const product = products.find(
              (product) => product.code.toString() === props.match.params.code
            );
            return (
              <Layout>
                {product ? (
                  <ProductPage product={product} />
                ) : (
                  <h1>404 страница не найдена</h1>
                )}
              </Layout>
            );
          }}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
