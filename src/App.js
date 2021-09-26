import { Ranking, CompanyDetail, Login, Forms } from './views'
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
                    <Ranking future={true} />
                </Route>
                <Route exact path='/ranking' component={Ranking} >
                    <Ranking future={false} />
                </Route>
                <Route exact path='/company/:id' component={CompanyDetail} />
                <Route exact path='/forms' component={Forms} />
            </Switch>
        </div>
    </Router>
  );
}

export default App;
