import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Clients from './pages/Clients';
import Products from './pages/Products';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/clients' component={Clients}></Route>
        <Route path='/products' component={Products}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;