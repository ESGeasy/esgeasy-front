import { Ranking, CompanyDetail } from './views'
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
                <Route path='/ranking' component={Ranking} />
                <Route path='/company/:id' component={CompanyDetail} />
            </Switch>
        </div>
    </Router>
  );
}

export default App;
