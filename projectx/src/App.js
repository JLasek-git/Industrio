import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout/MainLayout";
import Game from "./components/views/Game/GameContainer";
import GameOptions from "./components/views/GameOptions/GameOptions";
import StockMarket from "./components/views/StockMarket/StockMarket";
import Stores from "./components/views/Stores/Stores";
import Store1 from "./components/views/Stores/Store1/MachineStore1Container";
import Store2 from "./components/views/Stores/Store2/Store2";
import StockMarket1 from "./components/views/StockMarket/StockMarket1/StockMarket1";
import StockMarket2 from "./components/views/StockMarket/StockMarket2/StockMarket2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Game} />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/gameoptions`}
              component={GameOptions}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/stockmarket`}
              component={StockMarket}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/stores`}
              component={Stores}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/stores/store1`}
              component={Store1}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/stores/store2`}
              component={Store2}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/stockmarket/stockmarket1`}
              component={StockMarket1}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/stockmarket/stockmarket2`}
              component={StockMarket2}
            />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
