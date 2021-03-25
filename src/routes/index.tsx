import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'; 
import { Checkout } from '../pages/Chekout'
import { Home } from '../pages/Home';

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/produtos/:id" component={Home} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </Router>
  );
}