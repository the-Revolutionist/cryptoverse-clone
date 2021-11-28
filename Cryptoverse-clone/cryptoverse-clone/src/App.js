import {
  CryptoDetails,
  Cryptocurrencies,
  Exchanges,
  Homepage,
  NavBar,
  News,
} from "./componentIndex";
import { Layout, Space, Typography } from "antd";
import { Link, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="app">
        <div className="navbar">
          <NavBar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Switch>
                <Route exact path="/">
                  <Homepage />
                </Route>
                <Route exact path="/exchanges">
                  <Exchanges />
                </Route>
                <Route exact path="/cryptocurrencies">
                  <Cryptocurrencies />
                </Route>
                <Route exact path="/crypto/:coinId">
                  <CryptoDetails />
                </Route>
                <Route exact path="/news">
                  <News />
                </Route>
              </Switch>
            </div>
          </Layout>

          <div className="footer">
            <Typography.Title
              level={5}
              style={{ color: "white", textAlign: "center" }}
            >
              Cryptoverse
              <br />
              All rights reservered
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">News</Link>
            </Space>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
