import { Ranking, CompanyDetail, Login } from './views'
import styles from './App.module.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
        <div className={styles.centralizer}>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path='/futureRanking'>
                    <Ranking endpoint='futureRanking' />
                </Route>
                <Route exact path='/ranking' endpoint='ranking' component={Ranking} >
                    <Ranking endpoint='ranking' />
                </Route>
                <Route exact path='/company/:id' component={CompanyDetail} />
            </Switch>
        </div>
    </Router>
  );
}

export default App;
